"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t={lights_fragment_begin:"\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )\n\n\tDirectionalLight directionalLight;\n\tfloat linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )\n\tvec2 cascade;\n\tfloat cascadeCenter;\n\tfloat closestEdge;\n\tfloat margin;\n\tfloat csmx;\n\tfloat csmy;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t  \t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\t\t// NOTE: Depth gets larger away from the camera.\n\t\t\t// cascade.x is closer, cascade.y is further\n\t\t\tcascade = CSM_cascades[ i ];\n\t\t\tcascadeCenter = ( cascade.x + cascade.y ) / 2.0;\n\t\t\tclosestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;\n\t\t\tmargin = 0.25 * pow( closestEdge, 2.0 );\n\t\t\tcsmx = cascade.x - margin / 2.0;\n\t\t\tcsmy = cascade.y + margin / 2.0;\n\t\t\tif( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {\n\n\t\t\t\tfloat dist = min( linearDepth - csmx, csmy - linearDepth );\n\t\t\t\tfloat ratio = clamp( dist / margin, 0.0, 1.0 );\n\n\t\t\t\tvec3 prevColor = directLight.color;\n\t\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\t\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t\t\t\tbool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;\n\t\t\t\tdirectLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );\n\n\t\t\t\tReflectedLight prevLight = reflectedLight;\n\t\t\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t\t\t\tbool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;\n\t\t\t\tfloat blendRatio = shouldBlend ? ratio : 1.0;\n\n\t\t\t\treflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );\n\t\t\t\treflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );\n\t\t\t\treflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );\n\t\t\t\treflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );\n\n\t\t\t}\n\t  \t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\t#else\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\t\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\n\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\t\tif(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t\t\tif(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometry, material, reflectedLight );\n\n\t\t\t#endif\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)\n\t\t// compute the lights not casting shadows (if any)\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\n\t\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",lights_pars_begin:"\n#if defined( USE_CSM ) && defined( CSM_CASCADES )\nuniform vec2 CSM_cascades[CSM_CASCADES];\nuniform float cameraNear;\nuniform float shadowFar;\n#endif\n\t"+require("three").ShaderChunk.lights_pars_begin};exports.CSMShader=t;

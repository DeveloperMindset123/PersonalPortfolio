"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@babel/runtime/helpers/defineProperty"),e=require("three");function s(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a,i=s(t);exports.STATE=void 0,(a=exports.STATE||(exports.STATE={}))[a.NONE=-1]="NONE",a[a.ROTATE=0]="ROTATE",a[a.DOLLY=1]="DOLLY",a[a.PAN=2]="PAN",a[a.TOUCH_ROTATE=3]="TOUCH_ROTATE",a[a.TOUCH_PAN=4]="TOUCH_PAN",a[a.TOUCH_DOLLY_PAN=5]="TOUCH_DOLLY_PAN",a[a.TOUCH_DOLLY_ROTATE=6]="TOUCH_DOLLY_ROTATE";class o extends e.EventDispatcher{constructor(t,s){super(),i.default(this,"object",void 0),i.default(this,"domElement",void 0),i.default(this,"enabled",!0),i.default(this,"target",new e.Vector3),i.default(this,"trackball",!1),i.default(this,"minDistance",0),i.default(this,"maxDistance",1/0),i.default(this,"minZoom",0),i.default(this,"maxZoom",1/0),i.default(this,"minPolarAngle",0),i.default(this,"maxPolarAngle",Math.PI),i.default(this,"minAzimuthAngle",-1/0),i.default(this,"maxAzimuthAngle",1/0),i.default(this,"enableDamping",!1),i.default(this,"dampingFactor",.05),i.default(this,"enableZoom",!0),i.default(this,"zoomSpeed",1),i.default(this,"enableRotate",!0),i.default(this,"rotateSpeed",1),i.default(this,"enablePan",!0),i.default(this,"panSpeed",1),i.default(this,"screenSpacePanning",!1),i.default(this,"keyPanSpeed",7),i.default(this,"autoRotate",!1),i.default(this,"autoRotateSpeed",2),i.default(this,"enableKeys",!0),i.default(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),i.default(this,"mouseButtons",void 0),i.default(this,"touches",{ONE:e.TOUCH.ROTATE,TWO:e.TOUCH.DOLLY_PAN}),i.default(this,"target0",void 0),i.default(this,"position0",void 0),i.default(this,"quaternion0",void 0),i.default(this,"zoom0",void 0),i.default(this,"spherical",new e.Spherical),i.default(this,"sphericalDelta",new e.Spherical),i.default(this,"changeEvent",{type:"change"}),i.default(this,"startEvent",{type:"start"}),i.default(this,"endEvent",{type:"end"}),i.default(this,"state",exports.STATE.NONE),i.default(this,"EPS",1e-6),i.default(this,"scale",1),i.default(this,"panOffset",new e.Vector3),i.default(this,"zoomChanged",!1),i.default(this,"rotateStart",new e.Vector2),i.default(this,"rotateEnd",new e.Vector2),i.default(this,"rotateDelta",new e.Vector2),i.default(this,"panStart",new e.Vector2),i.default(this,"panEnd",new e.Vector2),i.default(this,"panDelta",new e.Vector2),i.default(this,"dollyStart",new e.Vector2),i.default(this,"dollyEnd",new e.Vector2),i.default(this,"dollyDelta",new e.Vector2),i.default(this,"offset",new e.Vector3),i.default(this,"lastPosition",new e.Vector3),i.default(this,"lastQuaternion",new e.Quaternion),i.default(this,"q",new e.Quaternion),i.default(this,"v",new e.Vector3),i.default(this,"vec",new e.Vector3),i.default(this,"quat",void 0),i.default(this,"quatInverse",void 0),i.default(this,"getPolarAngle",(()=>this.spherical.phi)),i.default(this,"getAzimuthalAngle",(()=>this.spherical.theta)),i.default(this,"saveState",(()=>{this.target0.copy(this.target),this.position0.copy(this.object.position),this.quaternion0.copy(this.object.quaternion),this.zoom0=this.object.zoom})),i.default(this,"reset",(()=>{this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.quaternion.copy(this.quaternion0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(this.changeEvent),this.update(),this.state=exports.STATE.NONE})),i.default(this,"dispose",(()=>{this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.domElement.removeEventListener("keydown",this.onKeyDown,!1)})),i.default(this,"update",(()=>{const t=this.object.position;if(this.offset.copy(t).sub(this.target),this.trackball){if(this.sphericalDelta.theta){this.vec.set(0,1,0).applyQuaternion(this.object.quaternion);const t=this.enableDamping?this.dampingFactor:1;this.q.setFromAxisAngle(this.vec,this.sphericalDelta.theta*t),this.object.quaternion.premultiply(this.q),this.offset.applyQuaternion(this.q)}if(this.sphericalDelta.phi){this.vec.set(1,0,0).applyQuaternion(this.object.quaternion);const t=this.enableDamping?this.dampingFactor:1;this.q.setFromAxisAngle(this.vec,this.sphericalDelta.phi*t),this.object.quaternion.premultiply(this.q),this.offset.applyQuaternion(this.q)}this.offset.multiplyScalar(this.scale),this.offset.clampLength(this.minDistance,this.maxDistance)}else this.offset.applyQuaternion(this.quat),this.autoRotate&&this.state===exports.STATE.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.setFromVector3(this.offset),this.enableDamping?(this.spherical.theta+=this.sphericalDelta.theta*this.dampingFactor,this.spherical.phi+=this.sphericalDelta.phi*this.dampingFactor):(this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi),this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.offset.setFromSpherical(this.spherical),this.offset.applyQuaternion(this.quatInverse);return!0===this.enableDamping?this.target.addScaledVector(this.panOffset,this.dampingFactor):this.target.add(this.panOffset),t.copy(this.target).add(this.offset),!1===this.trackball&&this.object.lookAt(this.target),!0===this.enableDamping?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor,this.panOffset.multiplyScalar(1-this.dampingFactor)):(this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0)),this.scale=1,!!(this.zoomChanged||this.lastPosition.distanceToSquared(this.object.position)>this.EPS||8*(1-this.lastQuaternion.dot(this.object.quaternion))>this.EPS)&&(this.dispatchEvent(this.changeEvent),this.lastPosition.copy(this.object.position),this.lastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0)})),i.default(this,"getAutoRotationAngle",(()=>2*Math.PI/60/60*this.autoRotateSpeed)),i.default(this,"getZoomScale",(()=>Math.pow(.95,this.zoomSpeed))),i.default(this,"rotateLeft",(t=>{this.sphericalDelta.theta-=t})),i.default(this,"rotateUp",(t=>{this.sphericalDelta.phi-=t})),i.default(this,"panLeft",((t,e)=>{this.v.setFromMatrixColumn(e,0),this.v.multiplyScalar(-t),this.panOffset.add(this.v)})),i.default(this,"panUp",((t,e)=>{!0===this.screenSpacePanning?this.v.setFromMatrixColumn(e,1):(this.v.setFromMatrixColumn(e,0),this.v.crossVectors(this.object.up,this.v)),this.v.multiplyScalar(t),this.panOffset.add(this.v)})),i.default(this,"pan",((t,s)=>{const a=this.domElement;if(this.object instanceof e.PerspectiveCamera){const e=this.object.position;this.offset.copy(e).sub(this.target);let i=this.offset.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*t*i/a.clientHeight,this.object.matrix),this.panUp(2*s*i/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this.panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this.panUp(s*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: CameraControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)})),i.default(this,"dollyIn",(t=>{this.object instanceof e.PerspectiveCamera?this.scale/=t:this.object instanceof e.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: CameraControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)})),i.default(this,"dollyOut",(t=>{this.object instanceof e.PerspectiveCamera?this.scale*=t:this.object instanceof e.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: CameraControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)})),i.default(this,"handleMouseDownRotate",(t=>{this.rotateStart.set(t.clientX,t.clientY)})),i.default(this,"handleMouseDownDolly",(t=>{this.dollyStart.set(t.clientX,t.clientY)})),i.default(this,"handleMouseDownPan",(t=>{this.panStart.set(t.clientX,t.clientY)})),i.default(this,"handleMouseMoveRotate",(t=>{this.rotateEnd.set(t.clientX,t.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/e.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/e.clientHeight),this.rotateStart.copy(this.rotateEnd),this.update()})),i.default(this,"handleMouseMoveDolly",(t=>{this.dollyEnd.set(t.clientX,t.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyIn(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyOut(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()})),i.default(this,"handleMouseMovePan",(t=>{this.panEnd.set(t.clientX,t.clientY),this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.update()})),i.default(this,"handleMouseWheel",(t=>{t.deltaY<0?this.dollyOut(this.getZoomScale()):t.deltaY>0&&this.dollyIn(this.getZoomScale()),this.update()})),i.default(this,"handleKeyDown",(t=>{let e=!1;switch(t.code){case this.keys.UP:this.pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:this.pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:this.pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:this.pan(-this.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),this.update())})),i.default(this,"handleTouchStartRotate",(t=>{if(1==t.touches.length)this.rotateStart.set(t.touches[0].pageX,t.touches[0].pageY);else{const e=.5*(t.touches[0].pageX+t.touches[1].pageX),s=.5*(t.touches[0].pageY+t.touches[1].pageY);this.rotateStart.set(e,s)}})),i.default(this,"handleTouchStartPan",(t=>{if(1==t.touches.length)this.panStart.set(t.touches[0].pageX,t.touches[0].pageY);else{const e=.5*(t.touches[0].pageX+t.touches[1].pageX),s=.5*(t.touches[0].pageY+t.touches[1].pageY);this.panStart.set(e,s)}})),i.default(this,"handleTouchStartDolly",(t=>{const e=t.touches[0].pageX-t.touches[1].pageX,s=t.touches[0].pageY-t.touches[1].pageY,a=Math.sqrt(e*e+s*s);this.dollyStart.set(0,a)})),i.default(this,"handleTouchStartDollyPan",(t=>{this.enableZoom&&this.handleTouchStartDolly(t),this.enablePan&&this.handleTouchStartPan(t)})),i.default(this,"handleTouchStartDollyRotate",(t=>{this.enableZoom&&this.handleTouchStartDolly(t),this.enableRotate&&this.handleTouchStartRotate(t)})),i.default(this,"handleTouchMoveRotate",(t=>{if(1==t.touches.length)this.rotateEnd.set(t.touches[0].pageX,t.touches[0].pageY);else{const e=.5*(t.touches[0].pageX+t.touches[1].pageX),s=.5*(t.touches[0].pageY+t.touches[1].pageY);this.rotateEnd.set(e,s)}this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/e.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/e.clientHeight),this.rotateStart.copy(this.rotateEnd)})),i.default(this,"handleTouchMovePan",(t=>{if(1==t.touches.length)this.panEnd.set(t.touches[0].pageX,t.touches[0].pageY);else{const e=.5*(t.touches[0].pageX+t.touches[1].pageX),s=.5*(t.touches[0].pageY+t.touches[1].pageY);this.panEnd.set(e,s)}this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd)})),i.default(this,"handleTouchMoveDolly",(t=>{const e=t.touches[0].pageX-t.touches[1].pageX,s=t.touches[0].pageY-t.touches[1].pageY,a=Math.sqrt(e*e+s*s);this.dollyEnd.set(0,a),this.dollyDelta.set(0,Math.pow(this.dollyEnd.y/this.dollyStart.y,this.zoomSpeed)),this.dollyIn(this.dollyDelta.y),this.dollyStart.copy(this.dollyEnd)})),i.default(this,"handleTouchMoveDollyPan",(t=>{this.enableZoom&&this.handleTouchMoveDolly(t),this.enablePan&&this.handleTouchMovePan(t)})),i.default(this,"handleTouchMoveDollyRotate",(t=>{this.enableZoom&&this.handleTouchMoveDolly(t),this.enableRotate&&this.handleTouchMoveRotate(t)})),i.default(this,"onMouseDown",(t=>{if(!1===this.enabled)return;let s;switch(t.preventDefault(),this.domElement.focus?this.domElement.focus():window.focus(),t.button){case 0:s=this.mouseButtons.LEFT;break;case 1:s=this.mouseButtons.MIDDLE;break;case 2:s=this.mouseButtons.RIGHT;break;default:s=-1}switch(s){case e.MOUSE.DOLLY:if(!1===this.enableZoom)return;this.handleMouseDownDolly(t),this.state=exports.STATE.DOLLY;break;case e.MOUSE.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enablePan)return;this.handleMouseDownPan(t),this.state=exports.STATE.PAN}else{if(!1===this.enableRotate)return;this.handleMouseDownRotate(t),this.state=exports.STATE.ROTATE}break;case e.MOUSE.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enableRotate)return;this.handleMouseDownRotate(t),this.state=exports.STATE.ROTATE}else{if(!1===this.enablePan)return;this.handleMouseDownPan(t),this.state=exports.STATE.PAN}break;default:this.state=exports.STATE.NONE}this.state!==exports.STATE.NONE&&(document.addEventListener("mousemove",this.onMouseMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1),this.dispatchEvent(this.startEvent))})),i.default(this,"onMouseMove",(t=>{if(!1!==this.enabled)switch(t.preventDefault(),this.state){case exports.STATE.ROTATE:if(!1===this.enableRotate)return;this.handleMouseMoveRotate(t);break;case exports.STATE.DOLLY:if(!1===this.enableZoom)return;this.handleMouseMoveDolly(t);break;case exports.STATE.PAN:if(!1===this.enablePan)return;this.handleMouseMovePan(t)}})),i.default(this,"onMouseUp",(()=>{!1!==this.enabled&&(document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.dispatchEvent(this.endEvent),this.state=exports.STATE.NONE)})),i.default(this,"onMouseWheel",(t=>{!1===this.enabled||!1===this.enableZoom||this.state!==exports.STATE.NONE&&this.state!==exports.STATE.ROTATE||(t.preventDefault(),this.dispatchEvent(this.startEvent),this.handleMouseWheel(t),this.dispatchEvent(this.endEvent))})),i.default(this,"onKeyDown",(t=>{!1!==this.enabled&&!1!==this.enableKeys&&!1!==this.enablePan&&this.handleKeyDown(t)})),i.default(this,"onTouchStart",(t=>{if(!1!==this.enabled){switch(t.preventDefault(),t.touches.length){case 1:switch(this.touches.ONE){case e.TOUCH.ROTATE:if(!1===this.enableRotate)return;this.handleTouchStartRotate(t),this.state=exports.STATE.TOUCH_ROTATE;break;case e.TOUCH.PAN:if(!1===this.enablePan)return;this.handleTouchStartPan(t),this.state=exports.STATE.TOUCH_PAN;break;default:this.state=exports.STATE.NONE}break;case 2:switch(this.touches.TWO){case e.TOUCH.DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this.handleTouchStartDollyPan(t),this.state=exports.STATE.TOUCH_DOLLY_PAN;break;case e.TOUCH.DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this.handleTouchStartDollyRotate(t),this.state=exports.STATE.TOUCH_DOLLY_ROTATE;break;default:this.state=exports.STATE.NONE}break;default:this.state=exports.STATE.NONE}this.state!==exports.STATE.NONE&&this.dispatchEvent(this.startEvent)}})),i.default(this,"onTouchMove",(t=>{if(!1!==this.enabled)switch(t.preventDefault(),this.state){case exports.STATE.TOUCH_ROTATE:if(!1===this.enableRotate)return;this.handleTouchMoveRotate(t),this.update();break;case exports.STATE.TOUCH_PAN:if(!1===this.enablePan)return;this.handleTouchMovePan(t),this.update();break;case exports.STATE.TOUCH_DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this.handleTouchMoveDollyPan(t),this.update();break;case exports.STATE.TOUCH_DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this.handleTouchMoveDollyRotate(t),this.update();break;default:this.state=exports.STATE.NONE}})),i.default(this,"onTouchEnd",(()=>{!1!==this.enabled&&(this.dispatchEvent(this.endEvent),this.state=exports.STATE.NONE)})),i.default(this,"onContextMenu",(t=>{!1!==this.enabled&&t.preventDefault()})),void 0===s&&console.warn('THREE.CameraControls: The second parameter "domElement" is now mandatory.'),s instanceof Document&&console.error('THREE.CameraControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=s,this.mouseButtons={LEFT:e.MOUSE.ROTATE,MIDDLE:e.MOUSE.DOLLY,RIGHT:e.MOUSE.PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.quaternion0=this.object.quaternion.clone(),this.zoom0=this.object.zoom,this.quat=(new e.Quaternion).setFromUnitVectors(this.object.up,new e.Vector3(0,1,0)),this.quatInverse=this.quat.clone().invert(),this.lastPosition=new e.Vector3,this.lastQuaternion=new e.Quaternion,this.domElement.addEventListener("contextmenu",this.onContextMenu,!1),this.domElement.addEventListener("mousedown",this.onMouseDown,!1),this.domElement.addEventListener("wheel",this.onMouseWheel,!1),this.domElement.addEventListener("touchstart",this.onTouchStart,!1),this.domElement.addEventListener("touchend",this.onTouchEnd,!1),this.domElement.addEventListener("touchmove",this.onTouchMove,!1),this.domElement.addEventListener("keydown",this.onKeyDown,!1),-1===this.domElement.tabIndex&&(this.domElement.tabIndex=0),this.object.lookAt(this.target),this.update(),this.saveState()}handleMouseUp(){}handleTouchEnd(){}}exports.CameraControls=o,exports.MapControlsExp=class extends o{constructor(t,s){super(t,s),i.default(this,"mouseButtons",void 0),i.default(this,"touches",void 0),this.mouseButtons={LEFT:e.MOUSE.PAN,RIGHT:e.MOUSE.ROTATE},this.touches={ONE:e.TOUCH.PAN,TWO:e.TOUCH.DOLLY_ROTATE}}},exports.OrbitControlsExp=class extends o{constructor(t,s){super(t,s),i.default(this,"mouseButtons",void 0),i.default(this,"touches",void 0),this.mouseButtons={LEFT:e.MOUSE.ROTATE,RIGHT:e.MOUSE.PAN},this.touches={ONE:e.TOUCH.ROTATE,TWO:e.TOUCH.DOLLY_PAN}}},exports.TrackballControlsExp=class extends o{constructor(t,s){super(t,s),i.default(this,"trackball",void 0),i.default(this,"screenSpacePanning",void 0),i.default(this,"autoRotate",void 0),i.default(this,"mouseButtons",void 0),i.default(this,"touches",void 0),this.trackball=!0,this.screenSpacePanning=!0,this.autoRotate=!1,this.mouseButtons={LEFT:e.MOUSE.ROTATE,RIGHT:e.MOUSE.PAN},this.touches={ONE:e.TOUCH.ROTATE,TWO:e.TOUCH.DOLLY_PAN}}};

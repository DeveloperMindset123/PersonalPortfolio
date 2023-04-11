"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/defineProperty"),t=require("three");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e);const a=(e,t)=>(e%t+t)%t;class i extends t.EventDispatcher{constructor(e,n){super(),o.default(this,"object",void 0),o.default(this,"domElement",void 0),o.default(this,"enabled",!0),o.default(this,"target",new t.Vector3),o.default(this,"minDistance",0),o.default(this,"maxDistance",1/0),o.default(this,"minZoom",0),o.default(this,"maxZoom",1/0),o.default(this,"minPolarAngle",0),o.default(this,"maxPolarAngle",Math.PI),o.default(this,"minAzimuthAngle",-1/0),o.default(this,"maxAzimuthAngle",1/0),o.default(this,"enableDamping",!1),o.default(this,"dampingFactor",.05),o.default(this,"enableZoom",!0),o.default(this,"zoomSpeed",1),o.default(this,"enableRotate",!0),o.default(this,"rotateSpeed",1),o.default(this,"enablePan",!0),o.default(this,"panSpeed",1),o.default(this,"screenSpacePanning",!0),o.default(this,"keyPanSpeed",7),o.default(this,"autoRotate",!1),o.default(this,"autoRotateSpeed",2),o.default(this,"reverseOrbit",!1),o.default(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),o.default(this,"mouseButtons",{LEFT:t.MOUSE.ROTATE,MIDDLE:t.MOUSE.DOLLY,RIGHT:t.MOUSE.PAN}),o.default(this,"touches",{ONE:t.TOUCH.ROTATE,TWO:t.TOUCH.DOLLY_PAN}),o.default(this,"target0",void 0),o.default(this,"position0",void 0),o.default(this,"zoom0",void 0),o.default(this,"_domElementKeyEvents",null),o.default(this,"getPolarAngle",void 0),o.default(this,"getAzimuthalAngle",void 0),o.default(this,"setPolarAngle",void 0),o.default(this,"setAzimuthalAngle",void 0),o.default(this,"getDistance",void 0),o.default(this,"listenToKeyEvents",void 0),o.default(this,"saveState",void 0),o.default(this,"reset",void 0),o.default(this,"update",void 0),o.default(this,"connect",void 0),o.default(this,"dispose",void 0),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof t.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>h.phi,this.getAzimuthalAngle=()=>h.theta,this.setPolarAngle=e=>{let t=a(e,2*Math.PI),n=h.phi;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let o=Math.abs(t-n);2*Math.PI-o<o&&(t<n?t+=2*Math.PI:n+=2*Math.PI),m.phi=t-n,i.update()},this.setAzimuthalAngle=e=>{let t=a(e,2*Math.PI),n=h.theta;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let o=Math.abs(t-n);2*Math.PI-o<o&&(t<n?t+=2*Math.PI:n+=2*Math.PI),m.theta=t-n,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",q),this._domElementKeyEvents=e},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object instanceof t.PerspectiveCamera?i.object.zoom:1},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object instanceof t.PerspectiveCamera&&(i.object.zoom=i.zoom0,i.object.updateProjectionMatrix()),i.dispatchEvent(r),i.update(),u=l.NONE},this.update=(()=>{const n=new t.Vector3,o=(new t.Quaternion).setFromUnitVectors(e.up,new t.Vector3(0,1,0)),a=o.clone().invert(),s=new t.Vector3,c=new t.Quaternion,E=2*Math.PI;return function(){const e=i.object.position;n.copy(e).sub(i.target),n.applyQuaternion(o),h.setFromVector3(n),i.autoRotate&&u===l.NONE&&N(2*Math.PI/60/60*i.autoRotateSpeed),i.enableDamping?(h.theta+=m.theta*i.dampingFactor,h.phi+=m.phi*i.dampingFactor):(h.theta+=m.theta,h.phi+=m.phi);let t=i.minAzimuthAngle,g=i.maxAzimuthAngle;return isFinite(t)&&isFinite(g)&&(t<-Math.PI?t+=E:t>Math.PI&&(t-=E),g<-Math.PI?g+=E:g>Math.PI&&(g-=E),h.theta=t<=g?Math.max(t,Math.min(g,h.theta)):h.theta>(t+g)/2?Math.max(t,h.theta):Math.min(g,h.theta)),h.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=p,h.radius=Math.max(i.minDistance,Math.min(i.maxDistance,h.radius)),!0===i.enableDamping?i.target.addScaledVector(b,i.dampingFactor):i.target.add(b),n.setFromSpherical(h),n.applyQuaternion(a),e.copy(i.target).add(n),i.object.lookAt(i.target),!0===i.enableDamping?(m.theta*=1-i.dampingFactor,m.phi*=1-i.dampingFactor,b.multiplyScalar(1-i.dampingFactor)):(m.set(0,0,0),b.set(0,0,0)),p=1,!!(f||s.distanceToSquared(i.object.position)>d||8*(1-c.dot(i.object.quaternion))>d)&&(i.dispatchEvent(r),s.copy(i.object.position),c.copy(i.object.quaternion),f=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),i.domElement=e,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",W),i.domElement.addEventListener("pointerdown",X),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",G)},this.dispose=()=>{var e,t,n,o,a,r;null===(e=i.domElement)||void 0===e||e.removeEventListener("contextmenu",W),null===(t=i.domElement)||void 0===t||t.removeEventListener("pointerdown",X),null===(n=i.domElement)||void 0===n||n.removeEventListener("pointercancel",B),null===(o=i.domElement)||void 0===o||o.removeEventListener("wheel",G),null===(a=i.domElement)||void 0===a||a.ownerDocument.removeEventListener("pointermove",Z),null===(r=i.domElement)||void 0===r||r.ownerDocument.removeEventListener("pointerup",K),null!==i._domElementKeyEvents&&i._domElementKeyEvents.removeEventListener("keydown",q)};const i=this,r={type:"change"},s={type:"start"},c={type:"end"},l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new t.Spherical,m=new t.Spherical;let p=1;const b=new t.Vector3;let f=!1;const E=new t.Vector2,g=new t.Vector2,O=new t.Vector2,v=new t.Vector2,P=new t.Vector2,T=new t.Vector2,y=new t.Vector2,A=new t.Vector2,M=new t.Vector2,j=[],w={};function L(){return Math.pow(.95,i.zoomSpeed)}function N(e){i.reverseOrbit?m.theta+=e:m.theta-=e}function C(e){i.reverseOrbit?m.phi+=e:m.phi-=e}const I=(()=>{const e=new t.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),R=(()=>{const e=new t.Vector3;return function(t,n){!0===i.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(i.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),S=(()=>{const e=new t.Vector3;return function(n,o){const a=i.domElement;if(a&&i.object instanceof t.PerspectiveCamera&&i.object.isPerspectiveCamera){const t=i.object.position;e.copy(t).sub(i.target);let r=e.length();r*=Math.tan(i.object.fov/2*Math.PI/180),I(2*n*r/a.clientHeight,i.object.matrix),R(2*o*r/a.clientHeight,i.object.matrix)}else a&&i.object instanceof t.OrthographicCamera&&i.object.isOrthographicCamera?(I(n*(i.object.right-i.object.left)/i.object.zoom/a.clientWidth,i.object.matrix),R(o*(i.object.top-i.object.bottom)/i.object.zoom/a.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function D(e){i.object instanceof t.PerspectiveCamera&&i.object.isPerspectiveCamera?p/=e:i.object instanceof t.OrthographicCamera&&i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*e)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function x(e){i.object instanceof t.PerspectiveCamera&&i.object.isPerspectiveCamera?p*=e:i.object instanceof t.OrthographicCamera&&i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/e)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(e){E.set(e.clientX,e.clientY)}function Y(e){v.set(e.clientX,e.clientY)}function H(){if(1==j.length)E.set(j[0].pageX,j[0].pageY);else{const e=.5*(j[0].pageX+j[1].pageX),t=.5*(j[0].pageY+j[1].pageY);E.set(e,t)}}function U(){if(1==j.length)v.set(j[0].pageX,j[0].pageY);else{const e=.5*(j[0].pageX+j[1].pageX),t=.5*(j[0].pageY+j[1].pageY);v.set(e,t)}}function _(){const e=j[0].pageX-j[1].pageX,t=j[0].pageY-j[1].pageY,n=Math.sqrt(e*e+t*t);y.set(0,n)}function V(e){if(1==j.length)g.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);g.set(n,o)}O.subVectors(g,E).multiplyScalar(i.rotateSpeed);const t=i.domElement;t&&(N(2*Math.PI*O.x/t.clientHeight),C(2*Math.PI*O.y/t.clientHeight)),E.copy(g)}function z(e){if(1==j.length)P.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);P.set(n,o)}T.subVectors(P,v).multiplyScalar(i.panSpeed),S(T.x,T.y),v.copy(P)}function F(e){const t=$(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);A.set(0,a),M.set(0,Math.pow(A.y/y.y,i.zoomSpeed)),D(M.y),y.copy(A)}function X(e){if(!1!==i.enabled){var n,o;if(0===j.length)null===(n=i.domElement)||void 0===n||n.ownerDocument.addEventListener("pointermove",Z),null===(o=i.domElement)||void 0===o||o.ownerDocument.addEventListener("pointerup",K);!function(e){j.push(e)}(e),"touch"===e.pointerType?function(e){switch(J(e),j.length){case 1:switch(i.touches.ONE){case t.TOUCH.ROTATE:if(!1===i.enableRotate)return;H(),u=l.TOUCH_ROTATE;break;case t.TOUCH.PAN:if(!1===i.enablePan)return;U(),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(i.touches.TWO){case t.TOUCH.DOLLY_PAN:if(!1===i.enableZoom&&!1===i.enablePan)return;i.enableZoom&&_(),i.enablePan&&U(),u=l.TOUCH_DOLLY_PAN;break;case t.TOUCH.DOLLY_ROTATE:if(!1===i.enableZoom&&!1===i.enableRotate)return;i.enableZoom&&_(),i.enableRotate&&H(),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&i.dispatchEvent(s)}(e):function(e){let n;switch(e.button){case 0:n=i.mouseButtons.LEFT;break;case 1:n=i.mouseButtons.MIDDLE;break;case 2:n=i.mouseButtons.RIGHT;break;default:n=-1}switch(n){case t.MOUSE.DOLLY:if(!1===i.enableZoom)return;!function(e){y.set(e.clientX,e.clientY)}(e),u=l.DOLLY;break;case t.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===i.enablePan)return;Y(e),u=l.PAN}else{if(!1===i.enableRotate)return;k(e),u=l.ROTATE}break;case t.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===i.enableRotate)return;k(e),u=l.ROTATE}else{if(!1===i.enablePan)return;Y(e),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&i.dispatchEvent(s)}(e)}}function Z(e){!1!==i.enabled&&("touch"===e.pointerType?function(e){switch(J(e),u){case l.TOUCH_ROTATE:if(!1===i.enableRotate)return;V(e),i.update();break;case l.TOUCH_PAN:if(!1===i.enablePan)return;z(e),i.update();break;case l.TOUCH_DOLLY_PAN:if(!1===i.enableZoom&&!1===i.enablePan)return;!function(e){i.enableZoom&&F(e),i.enablePan&&z(e)}(e),i.update();break;case l.TOUCH_DOLLY_ROTATE:if(!1===i.enableZoom&&!1===i.enableRotate)return;!function(e){i.enableZoom&&F(e),i.enableRotate&&V(e)}(e),i.update();break;default:u=l.NONE}}(e):function(e){if(!1===i.enabled)return;switch(u){case l.ROTATE:if(!1===i.enableRotate)return;!function(e){g.set(e.clientX,e.clientY),O.subVectors(g,E).multiplyScalar(i.rotateSpeed);const t=i.domElement;t&&(N(2*Math.PI*O.x/t.clientHeight),C(2*Math.PI*O.y/t.clientHeight)),E.copy(g),i.update()}(e);break;case l.DOLLY:if(!1===i.enableZoom)return;!function(e){A.set(e.clientX,e.clientY),M.subVectors(A,y),M.y>0?D(L()):M.y<0&&x(L()),y.copy(A),i.update()}(e);break;case l.PAN:if(!1===i.enablePan)return;!function(e){P.set(e.clientX,e.clientY),T.subVectors(P,v).multiplyScalar(i.panSpeed),S(T.x,T.y),v.copy(P),i.update()}(e)}}(e))}function K(e){var t,n,o;(Q(e),0===j.length)&&(null===(t=i.domElement)||void 0===t||t.releasePointerCapture(e.pointerId),null===(n=i.domElement)||void 0===n||n.ownerDocument.removeEventListener("pointermove",Z),null===(o=i.domElement)||void 0===o||o.ownerDocument.removeEventListener("pointerup",K));i.dispatchEvent(c),u=l.NONE}function B(e){Q(e)}function G(e){!1===i.enabled||!1===i.enableZoom||u!==l.NONE&&u!==l.ROTATE||(e.preventDefault(),i.dispatchEvent(s),function(e){e.deltaY<0?x(L()):e.deltaY>0&&D(L()),i.update()}(e),i.dispatchEvent(c))}function q(e){!1!==i.enabled&&!1!==i.enablePan&&function(e){let t=!1;switch(e.code){case i.keys.UP:S(0,i.keyPanSpeed),t=!0;break;case i.keys.BOTTOM:S(0,-i.keyPanSpeed),t=!0;break;case i.keys.LEFT:S(i.keyPanSpeed,0),t=!0;break;case i.keys.RIGHT:S(-i.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),i.update())}(e)}function W(e){!1!==i.enabled&&e.preventDefault()}function Q(e){delete w[e.pointerId];for(let t=0;t<j.length;t++)if(j[t].pointerId==e.pointerId)return void j.splice(t,1)}function J(e){let n=w[e.pointerId];void 0===n&&(n=new t.Vector2,w[e.pointerId]=n),n.set(e.pageX,e.pageY)}function $(e){const t=e.pointerId===j[0].pointerId?j[1]:j[0];return w[t.pointerId]}void 0!==n&&this.connect(n),this.update()}}exports.MapControls=class extends i{constructor(e,n){super(e,n),this.screenSpacePanning=!1,this.mouseButtons.LEFT=t.MOUSE.PAN,this.mouseButtons.RIGHT=t.MOUSE.ROTATE,this.touches.ONE=t.TOUCH.PAN,this.touches.TWO=t.TOUCH.DOLLY_ROTATE}},exports.OrbitControls=i;

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three");class s extends t.Curve{constructor(){super()}getPoint(s,e){const o=e||new t.Vector3;s=2*Math.PI*s;const c=-.22*Math.cos(s)-1.28*Math.sin(s)-.44*Math.cos(3*s)-.78*Math.sin(3*s),a=-.1*Math.cos(2*s)-.27*Math.sin(2*s)+.38*Math.cos(4*s)+.46*Math.sin(4*s),r=.7*Math.cos(3*s)-.4*Math.sin(3*s);return o.set(c,a,r).multiplyScalar(20)}}class e extends t.Curve{constructor(t){super(),this.scale=void 0===t?5:t}getPoint(s,e){const o=e||new t.Vector3;s*=2*Math.PI;const c=16*Math.pow(Math.sin(s),3),a=13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s);return o.set(c,a,0).multiplyScalar(this.scale)}}class o extends t.Curve{constructor(t){super(),this.scale=void 0===t?70:t}getPoint(s,e){const o=e||new t.Vector3;s=4*s*Math.PI;const c=this.scale/2,a=c*(1+Math.cos(s)),r=c*Math.sin(s),n=2*c*Math.sin(s/2);return o.set(a,r,n)}}class c extends t.Curve{constructor(){super()}getPoint(s,e){const o=e||new t.Vector3;s*=2*Math.PI;const c=50*Math.sin(s),a=Math.cos(s)*(10+50*Math.cos(s)),r=Math.sin(s)*(10+50*Math.cos(s));return o.set(c,a,r)}}class a extends t.Curve{constructor(){super()}getPoint(s,e){const o=e||new t.Vector3,c=2*Math.PI*s*150/30,a=30*Math.cos(c),r=30*Math.sin(c),n=150*s;return o.set(a,r,n)}}class r extends t.Curve{constructor(t){super(),this.scale=void 0===t?10:t}getPoint(s,e){const o=e||new t.Vector3;s*=2*Math.PI;const c=(2+Math.cos(3*s))*Math.cos(2*s),a=(2+Math.cos(3*s))*Math.sin(2*s),r=Math.sin(3*s);return o.set(c,a,r).multiplyScalar(this.scale)}}class n extends t.Curve{constructor(t){super(),this.scale=void 0===t?10:t}getPoint(s,e){const o=e||new t.Vector3;s*=2*Math.PI;const c=(2+Math.cos(4*s))*Math.cos(3*s),a=(2+Math.cos(4*s))*Math.sin(3*s),r=Math.sin(4*s);return o.set(c,a,r).multiplyScalar(this.scale)}}class h extends t.Curve{constructor(t){super(),this.scale=void 0===t?10:t}getPoint(s,e){const o=e||new t.Vector3;s*=2*Math.PI;const c=(2+Math.cos(5*s))*Math.cos(2*s),a=(2+Math.cos(5*s))*Math.sin(2*s),r=Math.sin(5*s);return o.set(c,a,r).multiplyScalar(this.scale)}}class i extends t.Curve{constructor(t){super(),this.scale=void 0===t?10:t}getPoint(s,e){const o=e||new t.Vector3;s=4*s-2;const c=Math.pow(s,3)-3*s,a=Math.pow(s,4)-4*s*s,r=.2*Math.pow(s,5)-2*s;return o.set(c,a,r).multiplyScalar(this.scale)}}const M=(t,s,e)=>e*(s-t)+t;class u extends t.Curve{constructor(t){super(),this.scale=void 0===t?1:t}getPoint(s,e){const o=e||new t.Vector3,c=.4*(s=M(-4,4,s))*(s*s-7)*(s*s-10),a=Math.pow(s,4)-13*s*s,r=.1*s*(s*s-4)*(s*s-9)*(s*s-12);return o.set(c,a,r).multiplyScalar(this.scale)}}class l extends t.Curve{constructor(t){super(),this.scale=void 0===t?40:t}getPoint(s,e){const o=e||new t.Vector3;s*=2*Math.PI;const c=Math.cos(2*s)*(1+.6*(Math.cos(5*s)+.75*Math.cos(10*s))),a=Math.sin(2*s)*(1+.6*(Math.cos(5*s)+.75*Math.cos(10*s))),r=.35*Math.sin(5*s);return o.set(c,a,r).multiplyScalar(this.scale)}}class p extends t.Curve{constructor(t){super(),this.scale=void 0===t?40:t}getPoint(s,e){const o=e||new t.Vector3,c=s*Math.PI*2,a=Math.cos(2*c)*(1+.45*Math.cos(3*c)+.4*Math.cos(9*c)),r=Math.sin(2*c)*(1+.45*Math.cos(3*c)+.4*Math.cos(9*c)),n=.2*Math.sin(9*c);return o.set(a,r,n).multiplyScalar(this.scale)}}class v extends t.Curve{constructor(t){super(),this.scale=void 0===t?40:t}getPoint(s,e){const o=e||new t.Vector3,c=s*Math.PI*2,a=Math.cos(3*c)*(1+.3*Math.cos(5*c)+.5*Math.cos(10*c)),r=Math.sin(3*c)*(1+.3*Math.cos(5*c)+.5*Math.cos(10*c)),n=.2*Math.sin(20*c);return o.set(a,r,n).multiplyScalar(this.scale)}}class d extends t.Curve{constructor(t){super(),this.scale=void 0===t?40:t}getPoint(s,e){const o=e||new t.Vector3,c=s*Math.PI*2,a=Math.cos(4*c)*(1+.5*(Math.cos(5*c)+.4*Math.cos(20*c))),r=Math.sin(4*c)*(1+.5*(Math.cos(5*c)+.4*Math.cos(20*c))),n=.35*Math.sin(15*c);return o.set(a,r,n).multiplyScalar(this.scale)}}exports.CinquefoilKnot=h,exports.DecoratedTorusKnot4a=l,exports.DecoratedTorusKnot4b=p,exports.DecoratedTorusKnot5a=v,exports.DecoratedTorusKnot5c=d,exports.FigureEightPolynomialKnot=u,exports.GrannyKnot=s,exports.HeartCurve=e,exports.HelixCurve=a,exports.KnotCurve=c,exports.TorusKnot=n,exports.TrefoilKnot=r,exports.TrefoilPolynomialKnot=i,exports.VivianiCurve=o,exports.scaleTo=M;
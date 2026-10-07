(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="170",is={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,bl=1,Su=2,xh=1,Eu=2,Vn=3,$n=0,Jt=1,pn=2,di=0,ss=1,Tl=2,wl=3,Al=4,bu=5,Ei=100,Tu=101,wu=102,Au=103,Ru=104,Cu=200,Iu=201,Lu=202,Pu=203,ra=204,oa=205,Du=206,Uu=207,Nu=208,Fu=209,Ou=210,Bu=211,ku=212,zu=213,Hu=214,aa=0,la=1,ca=2,hs=3,ha=4,ua=5,da=6,fa=7,no=0,Vu=1,Gu=2,Kn=0,Wu=1,Xu=2,ju=3,Yu=4,qu=5,Ku=6,Zu=7,Rl="attached",$u="detached",yh=300,us=301,ds=302,Hs=303,pa=304,io=306,fi=1e3,gn=1001,Kr=1002,Qt=1003,Mh=1004,Us=1005,zt=1006,zr=1007,Cn=1008,Jn=1009,Sh=1010,Eh=1011,Vs=1012,sl=1013,wi=1014,nn=1015,jn=1016,rl=1017,ol=1018,fs=1020,bh=35902,Th=1021,wh=1022,cn=1023,Ah=1024,Rh=1025,rs=1026,ps=1027,so=1028,al=1029,Ch=1030,ll=1031,cl=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,ya=37492,Ma=37496,Sa=37808,Ea=37809,ba=37810,Ta=37811,wa=37812,Aa=37813,Ra=37814,Ca=37815,Ia=37816,La=37817,Pa=37818,Da=37819,Ua=37820,Na=37821,Xr=36492,Fa=36494,Oa=36495,Ih=36283,Ba=36284,ka=36285,za=36286,Gs=2300,Ws=2301,po=2302,Cl=2400,Il=2401,Ll=2402,Ju=2500,Qu=0,Lh=1,Ha=2,ed=3200,td=3201,ro=0,nd=1,Wn="",lt="srgb",Xt="srgb-linear",oo="linear",pt="srgb",Ni=7680,Pl=519,id=512,sd=513,rd=514,Ph=515,od=516,ad=517,ld=518,cd=519,Va=35044,Dl="300 es",Yn=2e3,Zr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Bs=Math.PI/180,ms=180/Math.PI;function An(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function hl(s,e){return(s%e+e)%e}function hd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ud(s,e,t){return s!==e?(t-s)/(e-s):0}function ks(s,e,t){return(1-t)*s+t*e}function dd(s,e,t,n){return ks(s,e,1-Math.exp(-t*n))}function fd(s,e=1){return e-Math.abs(hl(s,e*2)-e)}function pd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function md(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _d(s,e){return s+Math.random()*(e-s)}function vd(s){return s*(.5-Math.random())}function xd(s){s!==void 0&&(Ul=s);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(s){return s*Bs}function Md(s){return s*ms}function Sd(s){return(s&s-1)===0&&s!==0}function Ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Td(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Et={DEG2RAD:Bs,RAD2DEG:ms,generateUUID:An,clamp:Rt,euclideanModulo:hl,mapLinear:hd,inverseLerp:ud,lerp:ks,damp:dd,pingpong:fd,smoothstep:pd,smootherstep:md,randInt:gd,randFloat:_d,randFloatSpread:vd,seededRandom:xd,degToRad:yd,radToDeg:Md,isPowerOfTwo:Sd,ceilPowerOfTwo:Ed,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Td,normalize:ft,denormalize:Tn};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],x=i[0],g=i[3],m=i[6],w=i[1],S=i[4],M=i[7],N=i[2],I=i[5],L=i[8];return r[0]=o*x+a*w+l*N,r[3]=o*g+a*S+l*I,r[6]=o*m+a*M+l*L,r[1]=c*x+u*w+h*N,r[4]=c*g+u*S+h*I,r[7]=c*m+u*M+h*L,r[2]=f*x+p*w+_*N,r[5]=f*g+p*S+_*I,r[8]=f*m+p*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new je;function Dh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wd(){const s=Xs("canvas");return s.style.display="block",s}const Nl={};function Ns(s){s in Nl||(Nl[s]=!0,console.warn(s))}function Ad(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Rd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?oo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Fl=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],Bl=[.3127,.329],kl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Xt]:{primaries:Fl,whitePoint:Bl,transfer:oo,toXYZ:kl,fromXYZ:zl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:Fl,whitePoint:Bl,transfer:pt,toXYZ:kl,fromXYZ:zl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}});let Fi;class Id{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Xs("canvas")),Fi.width=e.width,Fi.height=e.height;const n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ld=0;class Uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(go(i[o].image)):r.push(go(i[o]))}else r=go(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Id.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;class Dt extends Pi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=gn,i=gn,r=zt,o=Cn,a=cn,l=Jn,c=Dt.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=An(),this.name="",this.source=new Uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=yh;Dt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(p+1)/2,N=(m+1)/2,I=(u+f)/4,L=(h+x)/4,F=(_+g)/4;return S>M&&S>N?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=I/n,r=L/n):M>N?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=I/i,r=F/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=L/r,i=F/r),this.set(n,i,r,t),this}let w=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nh extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let g=1-a;const m=l*f+c*p+u*_+h*x,w=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const N=Math.sqrt(S),I=Math.atan2(N,m*w);g=Math.sin(g*I)/N,a=Math.sin(a*I)/N}const M=a*w;if(l=l*g+f*M,c=c*g+p*M,u=u*g+_*M,h=h*g+x*M,g===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new U,Hl=new kt;class Wt{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),ar.subVectors(this.max,Ts),Oi.subVectors(e.a,Ts),Bi.subVectors(e.b,Ts),ki.subVectors(e.c,Ts),ti.subVectors(Bi,Oi),ni.subVectors(ki,Bi),mi.subVectors(Oi,ki);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!vo(t,Oi,Bi,ki,ar)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Oi,Bi,ki,ar))?!1:(lr.crossVectors(ti,ni),t=[lr.x,lr.y,lr.z],vo(t,Oi,Bi,ki,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,or=new Wt,Oi=new U,Bi=new U,ki=new U,ti=new U,ni=new U,mi=new U,Ts=new U,ar=new U,lr=new U,gi=new U;function vo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gi.fromArray(s,r);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nd=new Wt,ws=new U,xo=new U;class In{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(xo)),this.expandByPoint(ws.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new U,yo=new U,cr=new U,ii=new U,Mo=new U,hr=new U,So=new U;class Zs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yo.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=ii.dot(this.direction),l=-ii.dot(cr),c=ii.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yo).addScaledVector(cr,f),p}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){Mo.subVectors(t,e),hr.subVectors(n,e),So.crossVectors(Mo,hr);let o=this.direction.dot(So),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(ii,hr));if(l<0)return null;const c=a*this.direction.dot(Mo.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(So);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(e,t,n,i,r,o,a,l,c,u,h,f,p,_,x,g){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,p,_,x,g)}set(e,t,n,i,r,o,a,l,c,u,h,f,p,_,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),si.crossVectors(n,an),si.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),si.crossVectors(n,an)),si.normalize(),ur.crossVectors(an,si),i[0]=si.x,i[4]=ur.x,i[8]=an.x,i[1]=si.y,i[5]=ur.y,i[9]=an.y,i[2]=si.z,i[6]=ur.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],x=n[6],g=n[10],m=n[14],w=n[3],S=n[7],M=n[11],N=n[15],I=i[0],L=i[4],F=i[8],R=i[12],b=i[1],D=i[5],q=i[9],G=i[13],Q=i[2],ee=i[6],K=i[10],ne=i[14],V=i[3],ce=i[7],me=i[11],be=i[15];return r[0]=o*I+a*b+l*Q+c*V,r[4]=o*L+a*D+l*ee+c*ce,r[8]=o*F+a*q+l*K+c*me,r[12]=o*R+a*G+l*ne+c*be,r[1]=u*I+h*b+f*Q+p*V,r[5]=u*L+h*D+f*ee+p*ce,r[9]=u*F+h*q+f*K+p*me,r[13]=u*R+h*G+f*ne+p*be,r[2]=_*I+x*b+g*Q+m*V,r[6]=_*L+x*D+g*ee+m*ce,r[10]=_*F+x*q+g*K+m*me,r[14]=_*R+x*G+g*ne+m*be,r[3]=w*I+S*b+M*Q+N*V,r[7]=w*L+S*D+M*ee+N*ce,r[11]=w*F+S*q+M*K+N*me,r[15]=w*R+S*G+M*ne+N*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],g=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*p-n*l*p)+x*(+t*l*p-t*c*f+r*o*f-i*o*p+i*c*u-r*l*u)+g*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],g=e[14],m=e[15],w=h*g*c-x*f*c+x*l*p-a*g*p-h*l*m+a*f*m,S=_*f*c-u*g*c-_*l*p+o*g*p+u*l*m-o*f*m,M=u*x*c-_*h*c+_*a*p-o*x*p-u*a*m+o*h*m,N=_*h*l-u*x*l-_*a*f+o*x*f+u*a*g-o*h*g,I=t*w+n*S+i*M+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=w*L,e[1]=(x*f*r-h*g*r-x*i*p+n*g*p+h*i*m-n*f*m)*L,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*m+n*l*m)*L,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*p-n*l*p)*L,e[4]=S*L,e[5]=(u*g*r-_*f*r+_*i*p-t*g*p-u*i*m+t*f*m)*L,e[6]=(_*l*r-o*g*r-_*i*c+t*g*c+o*i*m-t*l*m)*L,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*p+t*l*p)*L,e[8]=M*L,e[9]=(_*h*r-u*x*r-_*n*p+t*x*p+u*n*m-t*h*m)*L,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*m+t*a*m)*L,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*L,e[12]=N*L,e[13]=(u*x*i-_*h*i+_*n*f-t*x*f-u*n*g+t*h*g)*L,e[14]=(_*a*i-o*x*i-_*n*l+t*x*l+o*n*g-t*a*g)*L,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,x=o*u,g=o*h,m=a*h,w=l*c,S=l*u,M=l*h,N=n.x,I=n.y,L=n.z;return i[0]=(1-(x+m))*N,i[1]=(p+M)*N,i[2]=(_-S)*N,i[3]=0,i[4]=(p-M)*I,i[5]=(1-(f+m))*I,i[6]=(g+w)*I,i[7]=0,i[8]=(_+S)*L,i[9]=(g-w)*L,i[10]=(1-(f+x))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/r,u=1/o,h=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Yn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(a===Yn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Yn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,p=(n+i)*u;let _,x;if(a===Yn)_=(o+r)*h,x=-2*h;else if(a===Zr)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new U,yn=new Ee,Fd=new U(0,0,0),Od=new U(1,1,1),si=new U,ur=new U,an=new U,Vl=new Ee,Gl=new kt;class Ct{constructor(e=0,t=0,n=0,i=Ct.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ct.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bd=0;const Wl=new U,Hi=new kt,On=new Ee,dr=new U,As=new U,kd=new U,zd=new kt,Xl=new U(1,0,0),jl=new U(0,1,0),Yl=new U(0,0,1),ql={type:"added"},Hd={type:"removed"},Vi={type:"childadded",child:null},Eo={type:"childremoved",child:null};class _t extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new U,t=new Ct,n=new kt,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new je}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Xl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return Wl.copy(e).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(As,dr,this.up):On.lookAt(dr,As,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(On),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ql),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ql),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new U(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new U,Bn=new U,bo=new U,kn=new U,Gi=new U,Wi=new U,Kl=new U,To=new U,wo=new U,Ao=new U,Ro=new nt,Co=new nt,Io=new nt;class wn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mn.subVectors(i,t),Bn.subVectors(n,t),bo.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Bn),l=Mn.dot(bo),c=Bn.dot(Bn),u=Bn.dot(bo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ro.setScalar(0),Co.setScalar(0),Io.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Io.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Io,r.z),o}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Bn.subVectors(e,t),Mn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Mn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Gi.subVectors(i,n),Wi.subVectors(r,n),To.subVectors(e,n);const l=Gi.dot(To),c=Wi.dot(To);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,i);const u=Gi.dot(wo),h=Wi.dot(wo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gi,o);Ao.subVectors(e,r);const p=Gi.dot(Ao),_=Wi.dot(Ao);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Wi,a);const g=u*_-p*h;if(g<=0&&h-u>=0&&p-_>=0)return Kl.subVectors(r,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(Kl,a);const m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Lo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=hl(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lo(o,r,e+1/3),this.g=Lo(o,r,e),this.b=Lo(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=Oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Xe.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Rt(Yt.r*255,0,255))*65536+Math.round(Rt(Yt.g*255,0,255))*256+Math.round(Rt(Yt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,r=Yt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=lt){Xe.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(fr);const n=ks(ri.h,fr.h,t),i=ks(ri.s,fr.s,t),r=ks(ri.l,fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ie;Ie.NAMES=Oh;let Vd=0;class sn extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=An(),this.name="",this.blending=ss,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qn extends sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xn=Gd();function Gd(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Wd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Rt(s,-65504,65504),Xn.floatView[0]=s;const e=Xn.uint32View[0],t=e>>23&511;return Xn.baseTable[t]+((e&8388607)>>Xn.shiftTable[t])}function Xd(s){const e=s>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[e]+(s&1023)]+Xn.exponentTable[e],Xn.floatView[0]}const Zl={toHalfFloat:Wd,fromHalfFloat:Xd},At=new U,pr=new Be;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}}class ul extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bh extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jd=0;const hn=new Ee,Po=new _t,Xi=new U,ln=new Wt,Rs=new Wt,Bt=new U;class Vt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Bh:ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(ln.min,Rs.min),ln.expandByPoint(Bt),Bt.addVectors(ln.max,Rs.max),ln.expandByPoint(Bt)):(ln.expandByPoint(Rs.min),ln.expandByPoint(Rs.max))}ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),Bt.add(Xi)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new U,l[F]=new U;const c=new U,u=new U,h=new U,f=new Be,p=new Be,_=new Be,x=new U,g=new U;function m(F,R,b){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[F].add(x),a[R].add(x),a[b].add(x),l[F].add(g),l[R].add(g),l[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,R=w.length;F<R;++F){const b=w[F],D=b.start,q=b.count;for(let G=D,Q=D+q;G<Q;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new U,M=new U,N=new U,I=new U;function L(F){N.fromBufferAttribute(i,F),I.copy(N);const R=a[F];S.copy(R),S.sub(N.multiplyScalar(N.dot(R))).normalize(),M.crossVectors(I,R);const D=M.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,D)}for(let F=0,R=w.length;F<R;++F){const b=w[F],D=b.start,q=b.count;for(let G=D,Q=D+q;G<Q;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new Ht(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new Ee,_i=new Zs,mr=new In,Jl=new U,gr=new U,_r=new U,vr=new U,Do=new U,xr=new U,Ql=new U,yr=new U;class Lt extends _t{constructor(e=new Vt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Do.fromBufferAttribute(h,e),o?xr.addScaledVector(Do,u):xr.addScaledVector(Do.sub(t),u))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(mr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(mr,Jl)===null||_i.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&($l.copy(r).invert(),_i.copy(e.ray).applyMatrix4($l),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const g=f[_],m=o[g.materialIndex],w=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,N=S;M<N;M+=3){const I=a.getX(M),L=a.getX(M+1),F=a.getX(M+2);i=Mr(this,m,e,n,c,u,h,I,L,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const w=a.getX(g),S=a.getX(g+1),M=a.getX(g+2);i=Mr(this,o,e,n,c,u,h,w,S,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const g=f[_],m=o[g.materialIndex],w=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,N=S;M<N;M+=3){const I=M,L=M+1,F=M+2;i=Mr(this,m,e,n,c,u,h,I,L,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const w=g,S=g+1,M=g+2;i=Mr(this,o,e,n,c,u,h,w,S,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Yd(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===$n,a),l===null)return null;yr.copy(a),yr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:s}}function Mr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,gr),s.getVertexPosition(l,_r),s.getVertexPosition(c,vr);const u=Yd(s,e,t,n,gr,_r,vr,Ql);if(u){const h=new U;wn.getBarycoord(Ql,gr,_r,vr,h),i&&(u.uv=wn.getInterpolatedAttribute(i,a,l,c,h,new Be)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,h,new Be)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};wn.getNormal(gr,_r,vr,f.normal),u.face=f,u.barycoord=h}return u}class $s extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function _(x,g,m,w,S,M,N,I,L,F,R){const b=M/L,D=N/F,q=M/2,G=N/2,Q=I/2,ee=L+1,K=F+1;let ne=0,V=0;const ce=new U;for(let me=0;me<K;me++){const be=me*D-G;for(let Re=0;Re<ee;Re++){const ke=Re*b-q;ce[x]=ke*w,ce[g]=be*S,ce[m]=Q,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[g]=0,ce[m]=I>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Re/L),h.push(1-me/F),ne+=1}}for(let me=0;me<F;me++)for(let be=0;be<L;be++){const Re=f+be+ee*me,ke=f+be+ee*(me+1),J=f+(be+1)+ee*(me+1),re=f+(be+1)+ee*me;l.push(Re,ke,re),l.push(ke,J,re),V+=6}a.addGroup(p,V,R),p+=V,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function qd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Kd={clone:gs,merge:Zt};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zh extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new U,ec=new Be,tc=new Be;class Gt extends zh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Yi=1;class Jd extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(ji,Yi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(ji,Yi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(ji,Yi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(ji,Yi,e,t);a.layers=this.layers,this.add(a);const l=new Gt(ji,Yi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(ji,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hh extends Dt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qd extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $s(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:di});r.uniforms.tEquirect.value=t;const o=new Lt(i,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=zt),new Jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Uo=new U,ef=new U,tf=new je;class ci{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Uo.subVectors(n,t).cross(ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tf.getNormalMatrix(e),i=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new In,Sr=new U;class dl{constructor(e=new ci,t=new ci,n=new ci,i=new ci,r=new ci,o=new ci){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],_=i[9],x=i[10],g=i[11],m=i[12],w=i[13],S=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,g-p,M-m).normalize(),n[1].setComponents(l+r,f+c,g+p,M+m).normalize(),n[2].setComponents(l+o,f+u,g+_,M+w).normalize(),n[3].setComponents(l-o,f-u,g-_,M-w).normalize(),n[4].setComponents(l-a,f-h,g-x,M-S).normalize(),t===Yn)n[5].setComponents(l+a,f+h,g+x,M+S).normalize();else if(t===Zr)n[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nf(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Js extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],x=[],g=[];for(let m=0;m<u;m++){const w=m*f-o;for(let S=0;S<c;S++){const M=S*h-r;_.push(M,-w,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const S=w+c*m,M=w+c*(m+1),N=w+1+c*(m+1),I=w+1+c*m;p.push(S,M,I),p.push(M,N,I)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:vf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:Ef,color_pars_fragment:bf,color_pars_vertex:Tf,color_vertex:wf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:If,displacementmap_vertex:Lf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Zf,envmap_vertex:zf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:jf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:qf,lights_pars_begin:Kf,lights_toon_fragment:$f,lights_toon_pars_fragment:Jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:ep,lights_physical_fragment:tp,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:bp,normal_vertex:Tp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Ip,opaque_fragment:Lp,packing:Pp,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:jp,specularmap_fragment:Yp,specularmap_pars_fragment:qp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:$p,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:em,uv_vertex:tm,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:om,cube_vert:am,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:bm,meshphong_vert:Tm,meshphong_frag:wm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Im,points_vert:Lm,points_frag:Pm,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Fm},ve={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Rn={basic:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([ve.lights,ve.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Rn.physical={uniforms:Zt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Er={r:0,b:0,g:0},xi=new Ct,Om=new Ee;function Bm(s,e,t,n,i,r,o){const a=new Ie(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function x(w){let S=!1;const M=_(w);M===null?m(a,l):M&&M.isColor&&(m(M,1),S=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(w,S){const M=_(S);M&&(M.isCubeTexture||M.mapping===io)?(u===void 0&&(u=new Lt(new $s(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:gs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(xi)),u.material.toneMapped=Xe.getTransfer(M.colorSpace)!==pt,(h!==M||f!==M.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Lt(new Js(2,2),new Qn({name:"BackgroundMaterial",uniforms:gs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,S){w.getRGB(Er,kh(s)),n.buffers.color.setClear(Er.r,Er.g,Er.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g}}function km(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(b,D,q,G,Q){let ee=!1;const K=h(G,q,D);r!==K&&(r=K,c(r.object)),ee=p(b,G,q,Q),ee&&_(b,G,q,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,M(b,D,q,G),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,D,q){const G=q.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let ee=Q[D.id];ee===void 0&&(ee={},Q[D.id]=ee);let K=ee[G];return K===void 0&&(K=f(l()),ee[G]=K),K}function f(b){const D=[],q=[],G=[];for(let Q=0;Q<t;Q++)D[Q]=0,q[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:G,object:b,attributes:{},index:null}}function p(b,D,q,G){const Q=r.attributes,ee=D.attributes;let K=0;const ne=q.getAttributes();for(const V in ne)if(ne[V].location>=0){const me=Q[V];let be=ee[V];if(be===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),me===void 0||me.attribute!==be||be&&me.data!==be.data)return!0;K++}return r.attributesNum!==K||r.index!==G}function _(b,D,q,G){const Q={},ee=D.attributes;let K=0;const ne=q.getAttributes();for(const V in ne)if(ne[V].location>=0){let me=ee[V];me===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));const be={};be.attribute=me,me&&me.data&&(be.data=me.data),Q[V]=be,K++}r.attributes=Q,r.attributesNum=K,r.index=G}function x(){const b=r.newAttributes;for(let D=0,q=b.length;D<q;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){const q=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;q[b]=1,G[b]===0&&(s.enableVertexAttribArray(b),G[b]=1),Q[b]!==D&&(s.vertexAttribDivisor(b,D),Q[b]=D)}function w(){const b=r.newAttributes,D=r.enabledAttributes;for(let q=0,G=D.length;q<G;q++)D[q]!==b[q]&&(s.disableVertexAttribArray(q),D[q]=0)}function S(b,D,q,G,Q,ee,K){K===!0?s.vertexAttribIPointer(b,D,q,Q,ee):s.vertexAttribPointer(b,D,q,G,Q,ee)}function M(b,D,q,G){x();const Q=G.attributes,ee=q.getAttributes(),K=D.defaultAttributeValues;for(const ne in ee){const V=ee[ne];if(V.location>=0){let ce=Q[ne];if(ce===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const me=ce.normalized,be=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const ke=Re.buffer,J=Re.type,re=Re.bytesPerElement,ue=J===s.INT||J===s.UNSIGNED_INT||ce.gpuType===sl;if(ce.isInterleavedBufferAttribute){const he=ce.data,Me=he.stride,Ne=ce.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)m(V.location+He,he.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<V.locationSize;He++)g(V.location+He);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let He=0;He<V.locationSize;He++)S(V.location+He,be/V.locationSize,J,me,Me*re,(Ne+be/V.locationSize*He)*re,ue)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)m(V.location+he,ce.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<V.locationSize;he++)g(V.location+he);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let he=0;he<V.locationSize;he++)S(V.location+he,be/V.locationSize,J,me,be*re,be/V.locationSize*he*re,ue)}}else if(K!==void 0){const me=K[ne];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(V.location,me);break;case 3:s.vertexAttrib3fv(V.location,me);break;case 4:s.vertexAttrib4fv(V.location,me);break;default:s.vertexAttrib1fv(V.location,me)}}}}w()}function N(){F();for(const b in n){const D=n[b];for(const q in D){const G=D[q];for(const Q in G)u(G[Q].object),delete G[Q];delete D[q]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const q in D){const G=D[q];for(const Q in G)u(G[Q].object),delete G[Q];delete D[q]}delete n[b.id]}function L(b){for(const D in n){const q=n[D];if(q[b.id]===void 0)continue;const G=q[b.id];for(const Q in G)u(G[Q].object),delete G[Q];delete q[b.id]}}function F(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:R,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function zm(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==cn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Jn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==nn&&!F)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:N,maxSamples:I}}function Vm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ci,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!g)r?u(null):c();else{const w=r?0:n,S=w*4;let M=m.clippingState||null;l.value=M,M=u(_,f,S,p);for(let N=0;N!==S;++N)M[N]=t[N];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const m=p+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,M=p;S!==x;++S,M+=4)o.copy(h[S]).applyMatrix4(w,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Gm(s){let e=new WeakMap;function t(o,a){return a===Hs?o.mapping=us:a===pa&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hs||a===pa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fl extends zh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,nc=[.125,.215,.35,.446,.526,.582],bi=20,No=new fl,ic=new Ie;let Fo=null,Oo=0,Bo=0,ko=!1;const Si=(1+Math.sqrt(5))/2,qi=1/Si,sc=[new U(-Si,qi,0),new U(Si,qi,0),new U(-qi,0,Si),new U(qi,0,Si),new U(0,Si,-qi),new U(0,Si,qi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=ko,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:jn,format:cn,colorSpace:Xt,depthBuffer:!1},i=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,e,t)}return i}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ic),u.toneMapping=Kn,u.autoClear=!1;const p=new qn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Lt(new $s,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(ic),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;br(i,w*S,m>2?S:0,S,S),u.setRenderTarget(i),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===us||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,No)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sc[(i-r-1)%sc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Lt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);const m=[];let w=0;for(let L=0;L<bi;++L){const F=L/x,R=Math.exp(-F*F/2);m.push(R),L===0?w+=R:L<g&&(w+=2*R)}for(let L=0;L<m.length;L++)m[L]=m[L]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const M=this._sizeLods[i],N=3*M*(i>S-Qi?i-S+Qi:0),I=4*(this._cubeSize-M);br(t,N,I,3*M,2*M),l.setRenderTarget(t),l.render(h,No)}}function Wm(s){const e=[],t=[],n=[];let i=s;const r=s-Qi+1+nc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Qi?l=nc[o-s+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,g=2,m=1,w=new Float32Array(x*_*p),S=new Float32Array(g*_*p),M=new Float32Array(m*_*p);for(let I=0;I<p;I++){const L=I%3*2/3-1,F=I>2?0:-1,R=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];w.set(R,x*_*I),S.set(f,g*_*I);const b=[I,I,I,I,I,I];M.set(b,m*_*I)}const N=new Vt;N.setAttribute("position",new Ht(w,x)),N.setAttribute("uv",new Ht(S,g)),N.setAttribute("faceIndex",new Ht(M,m)),e.push(N),i>Qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rc(s,e,t){const n=new Ai(s,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xm(s,e,t){const n=new Float32Array(bi),i=new U(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function oc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ac(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hs||l===pa,u=l===us||l===ds;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ga(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Ga(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ym(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qm(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let S=0,M=w.length;S<M;S+=3){const N=w[S+0],I=w[S+1],L=w[S+2];f.push(N,I,I,L,L,N)}}else if(_!==void 0){const w=_.array;x=_.version;for(let S=0,M=w.length/3-1;S<M;S+=3){const N=S+0,I=S+1,L=S+2;f.push(N,I,I,L,L,N)}}else return;const g=new(Dh(f)?Bh:ul)(f,1);g.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Km(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*o,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,n,1)}function h(f,p,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,_);let m=0;for(let w=0;w<_;w++)m+=p[w]*x[w];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Zm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $m(s,e,t){const n=new WeakMap,i=new nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let b=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let N=a.attributes.position.count*M,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*I*4*h),F=new Nh(L,N,I,h);F.type=nn,F.needsUpdate=!0;const R=M*4;for(let D=0;D<h;D++){const q=m[D],G=w[D],Q=S[D],ee=N*I*4*D;for(let K=0;K<q.count;K++){const ne=K*R;_===!0&&(i.fromBufferAttribute(q,K),L[ee+ne+0]=i.x,L[ee+ne+1]=i.y,L[ee+ne+2]=i.z,L[ee+ne+3]=0),x===!0&&(i.fromBufferAttribute(G,K),L[ee+ne+4]=i.x,L[ee+ne+5]=i.y,L[ee+ne+6]=i.z,L[ee+ne+7]=0),g===!0&&(i.fromBufferAttribute(Q,K),L[ee+ne+8]=i.x,L[ee+ne+9]=i.y,L[ee+ne+10]=i.z,L[ee+ne+11]=Q.itemSize===4?i.w:1)}}f={count:h,texture:F,size:new Be(N,I)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Jm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Gh extends Dt{constructor(e,t,n,i,r,o,a,l,c,u=rs){if(u!==rs&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rs&&(n=wi),n===void 0&&u===ps&&(n=fs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wh=new Dt,lc=new Gh(1,1),Xh=new Nh,jh=new Ud,Yh=new Hh,cc=[],hc=[],uc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function _s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=cc[i];if(r===void 0&&(r=new Float32Array(i),cc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ao(s,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function ig(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;fc.set(n),s.uniformMatrix2fv(this.addr,!1,fc),Nt(t,n)}}function sg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;dc.set(n),s.uniformMatrix3fv(this.addr,!1,dc),Nt(t,n)}}function rg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;uc.set(n),s.uniformMatrix4fv(this.addr,!1,uc),Nt(t,n)}}function og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function hg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function pg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lc.compareFunction=Ph,r=lc):r=Wh,t.setTexture2D(e||r,i)}function mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jh,i)}function gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yh,i)}function _g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xh,i)}function vg(s){switch(s){case 5126:return Qm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function xg(s,e){s.uniform1fv(this.addr,e)}function yg(s,e){const t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function Mg(s,e){const t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function Sg(s,e){const t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function Eg(s,e){const t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bg(s,e){const t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tg(s,e){const t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wg(s,e){s.uniform1iv(this.addr,e)}function Ag(s,e){s.uniform2iv(this.addr,e)}function Rg(s,e){s.uniform3iv(this.addr,e)}function Cg(s,e){s.uniform4iv(this.addr,e)}function Ig(s,e){s.uniform1uiv(this.addr,e)}function Lg(s,e){s.uniform2uiv(this.addr,e)}function Pg(s,e){s.uniform3uiv(this.addr,e)}function Dg(s,e){s.uniform4uiv(this.addr,e)}function Ug(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Wh,r[o])}function Ng(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jh,r[o])}function Fg(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yh,r[o])}function Og(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xh,r[o])}function Bg(s){switch(s){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Lg;case 36295:return Pg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vg(t.type)}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}}class Hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function pc(s,e){s.seq.push(e),s.map[e.id]=e}function Vg(s,e,t){const n=s.name,i=n.length;for(zo.lastIndex=0;;){const r=zo.exec(n),o=zo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){pc(t,c===void 0?new kg(a,s,e):new zg(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Hg(a),pc(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Vg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Gg=37297;let Wg=0;function Xg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gc=new je;function jg(s){Xe._getMatrix(gc,Xe.workingColorSpace,s);const e=`mat3( ${gc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case oo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _c(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Xg(s.getShaderSource(e),o)}else return i}function Yg(s,e){const t=jg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qg(s,e){let t;switch(e){case Wu:t="Linear";break;case Xu:t="Reinhard";break;case ju:t="Cineon";break;case Yu:t="ACESFilmic";break;case Ku:t="AgX";break;case Zu:t="Neutral";break;case qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new U;function Kg(){Xe.getLuminanceCoefficients(Tr);const s=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function $g(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Fs(s){return s!==""}function vc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(s){return s.replace(Qg,t_)}const e_=new Map;function t_(s,e){let t=qe[e];if(t===void 0){const n=e_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(s){return s.replace(n_,i_)}function i_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function a_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case no:e="ENVMAP_BLENDING_MULTIPLY";break;case Vu:e="ENVMAP_BLENDING_MIX";break;case Gu:e="ENVMAP_BLENDING_ADD";break}return e}function l_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function c_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=s_(t),c=r_(t),u=o_(t),h=a_(t),f=l_(t),p=Zg(t),_=$g(r),x=i.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),Kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Wa(o),o=vc(o,t),o=xc(o,t),a=Wa(a),a=vc(a,t),a=xc(a,t),o=yc(o),a=yc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=w+g+o,M=w+m+a,N=mc(i,i.VERTEX_SHADER,S),I=mc(i,i.FRAGMENT_SHADER,M);i.attachShader(x,N),i.attachShader(x,I),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(D){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(N).trim(),Q=i.getShaderInfoLog(I).trim();let ee=!0,K=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,N,I);else{const ne=_c(i,N,"vertex"),V=_c(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+ne+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||Q==="")&&(K=!1);K&&(D.diagnostics={runnable:ee,programLog:q,vertexShader:{log:G,prefix:g},fragmentShader:{log:Q,prefix:m}})}i.deleteShader(N),i.deleteShader(I),F=new jr(i,x),R=Jg(i,x)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,Gg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=I,this}let h_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function f_(s,e,t,n,i,r,o){const a=new Fh,l=new u_,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return c.add(R),R===0?"uv":`uv${R}`}function g(R,b,D,q,G){const Q=q.fog,ee=G.geometry,K=R.isMeshStandardMaterial?q.environment:null,ne=(R.isMeshStandardMaterial?t:e).get(R.envMap||K),V=ne&&ne.mapping===io?ne.image.height:null,ce=_[R.type];R.precision!==null&&(p=i.getMaxPrecision(R.precision),p!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",p,"instead."));const me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,be=me!==void 0?me.length:0;let Re=0;ee.morphAttributes.position!==void 0&&(Re=1),ee.morphAttributes.normal!==void 0&&(Re=2),ee.morphAttributes.color!==void 0&&(Re=3);let ke,J,re,ue;if(ce){const ct=Rn[ce];ke=ct.vertexShader,J=ct.fragmentShader}else ke=R.vertexShader,J=R.fragmentShader,l.update(R),re=l.getVertexShaderID(R),ue=l.getFragmentShaderID(R);const he=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ne=G.isInstancedMesh===!0,He=G.isBatchedMesh===!0,ot=!!R.map,Ye=!!R.matcap,ut=!!ne,B=!!R.aoMap,qt=!!R.lightMap,et=!!R.bumpMap,tt=!!R.normalMap,Oe=!!R.displacementMap,gt=!!R.emissiveMap,Fe=!!R.metalnessMap,C=!!R.roughnessMap,E=R.anisotropy>0,H=R.clearcoat>0,ie=R.dispersion>0,oe=R.iridescence>0,te=R.sheen>0,Le=R.transmission>0,xe=E&&!!R.anisotropyMap,Te=H&&!!R.clearcoatMap,it=H&&!!R.clearcoatNormalMap,pe=H&&!!R.clearcoatRoughnessMap,Ae=oe&&!!R.iridescenceMap,Ce=oe&&!!R.iridescenceThicknessMap,Pe=te&&!!R.sheenColorMap,we=te&&!!R.sheenRoughnessMap,Ve=!!R.specularMap,De=!!R.specularColorMap,Ge=!!R.specularIntensityMap,O=Le&&!!R.transmissionMap,Y=Le&&!!R.thicknessMap,Z=!!R.gradientMap,se=!!R.alphaMap,Se=R.alphaTest>0,ye=!!R.alphaHash,We=!!R.extensions;let St=Kn;R.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(St=s.toneMapping);const Ft={shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:ke,fragmentShader:J,defines:R.defines,customVertexShaderID:re,customFragmentShaderID:ue,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:p,batching:He,batchingColor:He&&G._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Xt,alphaToCoverage:!!R.alphaToCoverage,map:ot,matcap:Ye,envMap:ut,envMapMode:ut&&ne.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:qt,bumpMap:et,normalMap:tt,displacementMap:f&&Oe,emissiveMap:gt,normalMapObjectSpace:tt&&R.normalMapType===nd,normalMapTangentSpace:tt&&R.normalMapType===ro,metalnessMap:Fe,roughnessMap:C,anisotropy:E,anisotropyMap:xe,clearcoat:H,clearcoatMap:Te,clearcoatNormalMap:it,clearcoatRoughnessMap:pe,dispersion:ie,iridescence:oe,iridescenceMap:Ae,iridescenceThicknessMap:Ce,sheen:te,sheenColorMap:Pe,sheenRoughnessMap:we,specularMap:Ve,specularColorMap:De,specularIntensityMap:Ge,transmission:Le,transmissionMap:O,thicknessMap:Y,gradientMap:Z,opaque:R.transparent===!1&&R.blending===ss&&R.alphaToCoverage===!1,alphaMap:se,alphaTest:Se,alphaHash:ye,combine:R.combine,mapUv:ot&&x(R.map.channel),aoMapUv:B&&x(R.aoMap.channel),lightMapUv:qt&&x(R.lightMap.channel),bumpMapUv:et&&x(R.bumpMap.channel),normalMapUv:tt&&x(R.normalMap.channel),displacementMapUv:Oe&&x(R.displacementMap.channel),emissiveMapUv:gt&&x(R.emissiveMap.channel),metalnessMapUv:Fe&&x(R.metalnessMap.channel),roughnessMapUv:C&&x(R.roughnessMap.channel),anisotropyMapUv:xe&&x(R.anisotropyMap.channel),clearcoatMapUv:Te&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(R.sheenRoughnessMap.channel),specularMapUv:Ve&&x(R.specularMap.channel),specularColorMapUv:De&&x(R.specularColorMap.channel),specularIntensityMapUv:Ge&&x(R.specularIntensityMap.channel),transmissionMapUv:O&&x(R.transmissionMap.channel),thicknessMapUv:Y&&x(R.thicknessMap.channel),alphaMapUv:se&&x(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(tt||E),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(ot||se),fog:!!Q,useFog:R.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,decodeVideoTexture:ot&&R.map.isVideoTexture===!0&&Xe.getTransfer(R.map.colorSpace)===pt,decodeVideoTextureEmissive:gt&&R.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(R.emissiveMap.colorSpace)===pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===pn,flipSided:R.side===Jt,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:We&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&R.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function m(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const D in R.defines)b.push(D),b.push(R.defines[D]);return R.isRawShaderMaterial===!1&&(w(b,R),S(b,R),b.push(s.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function w(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function S(R,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),R.push(a.mask)}function M(R){const b=_[R.type];let D;if(b){const q=Rn[b];D=Kd.clone(q.uniforms)}else D=R.uniforms;return D}function N(R,b){let D;for(let q=0,G=u.length;q<G;q++){const Q=u[q];if(Q.cacheKey===b){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new c_(s,b,R,r),u.push(D)),D}function I(R){if(--R.usedTimes===0){const b=u.indexOf(R);u[b]=u[u.length-1],u.pop(),R.destroy()}}function L(R){l.remove(R)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:F}}function p_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function m_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ec(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,_,x,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,f,p,_,x,g){const m=o(h,f,p,_,x,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,f,p,_,x,g){const m=o(h,f,p,_,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||m_),n.length>1&&n.sort(f||Sc),i.length>1&&i.sort(f||Sc)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function g_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ec,s.set(n,[o])):i>=r.length?(o=new Ec,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function __(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ie};break;case"SpotLight":t={position:new U,direction:new U,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function v_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let x_=0;function y_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function M_(s){const e=new __,t=v_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,r=new Ee,o=new Ee;function a(c){let u=0,h=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,_=0,x=0,g=0,m=0,w=0,S=0,M=0,N=0,I=0,L=0;c.sort(y_);for(let R=0,b=c.length;R<b;R++){const D=c[R],q=D.color,G=D.intensity,Q=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=q.r*G,h+=q.g*G,f+=q.b*G;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],G);L++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,V=t.get(D);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=D.shadow.matrix,w++}n.directional[p]=K,p++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(q).multiplyScalar(G),K.distance=Q,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[x]=K;const ne=D.shadow;if(D.map&&(n.spotLightMap[N]=D.map,N++,ne.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[x]=ne.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=ee,M++}x++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(q).multiplyScalar(G),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=K,g++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ne=D.shadow,V=t.get(D);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=ee,n.pointShadowMatrix[_]=D.shadow.matrix,S++}n.point[_]=K,_++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(G),K.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[m]=K,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==w||F.numPointShadows!==S||F.numSpotShadows!==M||F.numSpotMaps!==N||F.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+N-I,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=w,F.numPointShadows=S,F.numSpotShadows=M,F.numSpotMaps=N,F.numLightProbes=L,n.version=x_++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0;const g=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const S=c[m];if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),h++}else if(S.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function bc(s){const e=new M_(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function S_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new bc(s),e.set(i,[a])):r>=o.length?(a=new bc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class E_ extends sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b_ extends sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(s,e,t){let n=new dl;const i=new Be,r=new Be,o=new nt,a=new E_({depthPacking:td}),l=new b_,c={},u=t.maxTextureSize,h={[$n]:Jt,[Jt]:$n,[pn]:pn},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let m=this.type;this.render=function(I,L,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const R=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),q=s.state;q.setBlending(di),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const G=m!==Vn&&this.type===Vn,Q=m===Vn&&this.type!==Vn;for(let ee=0,K=I.length;ee<K;ee++){const ne=I[ee],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ce=V.getFrameExtents();if(i.multiply(ce),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ce.x),i.x=r.x*ce.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ce.y),i.y=r.y*ce.y,V.mapSize.y=r.y)),V.map===null||G===!0||Q===!0){const be=this.type!==Vn?{minFilter:Qt,magFilter:Qt}:{};V.map!==null&&V.map.dispose(),V.map=new Ai(i.x,i.y,be),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const me=V.getViewportCount();for(let be=0;be<me;be++){const Re=V.getViewport(be);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),q.viewport(o),V.updateMatrices(ne,be),n=V.getFrustum(),M(L,F,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&w(V,F),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(R,b,D)};function w(I,L){const F=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ai(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(L,null,F,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(L,null,F,p,x,null)}function S(I,L,F,R){let b=null;const D=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)b=D;else if(b=F.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=b.uuid,G=L.uuid;let Q=c[q];Q===void 0&&(Q={},c[q]=Q);let ee=Q[G];ee===void 0&&(ee=b.clone(),Q[G]=ee,L.addEventListener("dispose",N)),b=ee}if(b.visible=L.visible,b.wireframe=L.wireframe,R===Vn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:h[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=s.properties.get(b);q.light=F}return b}function M(I,L,F,R,b){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Vn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const G=e.update(I),Q=I.material;if(Array.isArray(Q)){const ee=G.groups;for(let K=0,ne=ee.length;K<ne;K++){const V=ee[K],ce=Q[V.materialIndex];if(ce&&ce.visible){const me=S(I,ce,R,b);I.onBeforeShadow(s,I,L,F,G,me,V),s.renderBufferDirect(F,null,G,me,I,V),I.onAfterShadow(s,I,L,F,G,me,V)}}}else if(Q.visible){const ee=S(I,Q,R,b);I.onBeforeShadow(s,I,L,F,G,ee,null),s.renderBufferDirect(F,null,G,ee,I,null),I.onAfterShadow(s,I,L,F,G,ee,null)}}const q=I.children;for(let G=0,Q=q.length;G<Q;G++)M(q[G],L,F,R,b)}function N(I){I.target.removeEventListener("dispose",N);for(const F in c){const R=c[F],b=I.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}const R_={[aa]:la,[ca]:da,[ha]:fa,[hs]:ua,[la]:aa,[da]:ca,[fa]:ha,[ua]:hs};function C_(s,e){function t(){let O=!1;const Y=new nt;let Z=null;const se=new nt(0,0,0,0);return{setMask:function(Se){Z!==Se&&!O&&(s.colorMask(Se,Se,Se,Se),Z=Se)},setLocked:function(Se){O=Se},setClear:function(Se,ye,We,St,Ft){Ft===!0&&(Se*=St,ye*=St,We*=St),Y.set(Se,ye,We,St),se.equals(Y)===!1&&(s.clearColor(Se,ye,We,St),se.copy(Y))},reset:function(){O=!1,Z=null,se.set(-1,0,0,0)}}}function n(){let O=!1,Y=!1,Z=null,se=null,Se=null;return{setReversed:function(ye){if(Y!==ye){const We=e.get("EXT_clip_control");Y?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const St=Se;Se=null,this.setClear(St)}Y=ye},getReversed:function(){return Y},setTest:function(ye){ye?he(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!O&&(s.depthMask(ye),Z=ye)},setFunc:function(ye){if(Y&&(ye=R_[ye]),se!==ye){switch(ye){case aa:s.depthFunc(s.NEVER);break;case la:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case ha:s.depthFunc(s.EQUAL);break;case ua:s.depthFunc(s.GEQUAL);break;case da:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ye}},setLocked:function(ye){O=ye},setClear:function(ye){Se!==ye&&(Y&&(ye=1-ye),s.clearDepth(ye),Se=ye)},reset:function(){O=!1,Z=null,se=null,Se=null,Y=!1}}}function i(){let O=!1,Y=null,Z=null,se=null,Se=null,ye=null,We=null,St=null,Ft=null;return{setTest:function(ct){O||(ct?he(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ct){Y!==ct&&!O&&(s.stencilMask(ct),Y=ct)},setFunc:function(ct,rn,vn){(Z!==ct||se!==rn||Se!==vn)&&(s.stencilFunc(ct,rn,vn),Z=ct,se=rn,Se=vn)},setOp:function(ct,rn,vn){(ye!==ct||We!==rn||St!==vn)&&(s.stencilOp(ct,rn,vn),ye=ct,We=rn,St=vn)},setLocked:function(ct){O=ct},setClear:function(ct){Ft!==ct&&(s.clearStencil(ct),Ft=ct)},reset:function(){O=!1,Y=null,Z=null,se=null,Se=null,ye=null,We=null,St=null,Ft=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,x=!1,g=null,m=null,w=null,S=null,M=null,N=null,I=null,L=new Ie(0,0,0),F=0,R=!1,b=null,D=null,q=null,G=null,Q=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ne=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=ne>=2);let ce=null,me={};const be=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),ke=new nt().fromArray(be),J=new nt().fromArray(Re);function re(O,Y,Z,se){const Se=new Uint8Array(4),ye=s.createTexture();s.bindTexture(O,ye),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Z;We++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Y,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Y+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ye}const ue={};ue[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(hs),et(!1),tt(bl),he(s.CULL_FACE),B(di);function he(O){u[O]!==!0&&(s.enable(O),u[O]=!0)}function Me(O){u[O]!==!1&&(s.disable(O),u[O]=!1)}function Ne(O,Y){return h[O]!==Y?(s.bindFramebuffer(O,Y),h[O]=Y,O===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Y),O===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Y),!0):!1}function He(O,Y){let Z=p,se=!1;if(O){Z=f.get(Y),Z===void 0&&(Z=[],f.set(Y,Z));const Se=O.textures;if(Z.length!==Se.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,We=Se.length;ye<We;ye++)Z[ye]=s.COLOR_ATTACHMENT0+ye;Z.length=Se.length,se=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,se=!0);se&&s.drawBuffers(Z)}function ot(O){return _!==O?(s.useProgram(O),_=O,!0):!1}const Ye={[Ei]:s.FUNC_ADD,[Tu]:s.FUNC_SUBTRACT,[wu]:s.FUNC_REVERSE_SUBTRACT};Ye[Au]=s.MIN,Ye[Ru]=s.MAX;const ut={[Cu]:s.ZERO,[Iu]:s.ONE,[Lu]:s.SRC_COLOR,[ra]:s.SRC_ALPHA,[Ou]:s.SRC_ALPHA_SATURATE,[Nu]:s.DST_COLOR,[Du]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[Fu]:s.ONE_MINUS_DST_COLOR,[Uu]:s.ONE_MINUS_DST_ALPHA,[Bu]:s.CONSTANT_COLOR,[ku]:s.ONE_MINUS_CONSTANT_COLOR,[zu]:s.CONSTANT_ALPHA,[Hu]:s.ONE_MINUS_CONSTANT_ALPHA};function B(O,Y,Z,se,Se,ye,We,St,Ft,ct){if(O===di){x===!0&&(Me(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),O!==bu){if(O!==g||ct!==R){if((m!==Ei||M!==Ei)&&(s.blendEquation(s.FUNC_ADD),m=Ei,M=Ei),ct)switch(O){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tl:s.blendFunc(s.ONE,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Al:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Al:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,S=null,N=null,I=null,L.set(0,0,0),F=0,g=O,R=ct}return}Se=Se||Y,ye=ye||Z,We=We||se,(Y!==m||Se!==M)&&(s.blendEquationSeparate(Ye[Y],Ye[Se]),m=Y,M=Se),(Z!==w||se!==S||ye!==N||We!==I)&&(s.blendFuncSeparate(ut[Z],ut[se],ut[ye],ut[We]),w=Z,S=se,N=ye,I=We),(St.equals(L)===!1||Ft!==F)&&(s.blendColor(St.r,St.g,St.b,Ft),L.copy(St),F=Ft),g=O,R=!1}function qt(O,Y){O.side===pn?Me(s.CULL_FACE):he(s.CULL_FACE);let Z=O.side===Jt;Y&&(Z=!Z),et(Z),O.blending===ss&&O.transparent===!1?B(di):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const se=O.stencilWrite;a.setTest(se),se&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function tt(O){O!==Mu?(he(s.CULL_FACE),O!==D&&(O===bl?s.cullFace(s.BACK):O===Su?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),D=O}function Oe(O){O!==q&&(K&&s.lineWidth(O),q=O)}function gt(O,Y,Z){O?(he(s.POLYGON_OFFSET_FILL),(G!==Y||Q!==Z)&&(s.polygonOffset(Y,Z),G=Y,Q=Z)):Me(s.POLYGON_OFFSET_FILL)}function Fe(O){O?he(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function C(O){O===void 0&&(O=s.TEXTURE0+ee-1),ce!==O&&(s.activeTexture(O),ce=O)}function E(O,Y,Z){Z===void 0&&(ce===null?Z=s.TEXTURE0+ee-1:Z=ce);let se=me[Z];se===void 0&&(se={type:void 0,texture:void 0},me[Z]=se),(se.type!==O||se.texture!==Y)&&(ce!==Z&&(s.activeTexture(Z),ce=Z),s.bindTexture(O,Y||ue[O]),se.type=O,se.texture=Y)}function H(){const O=me[ce];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){ke.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ke.copy(O))}function we(O){J.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Ve(O,Y){let Z=c.get(Y);Z===void 0&&(Z=new WeakMap,c.set(Y,Z));let se=Z.get(O);se===void 0&&(se=s.getUniformBlockIndex(Y,O.name),Z.set(O,se))}function De(O,Y){const se=c.get(Y).get(O);l.get(Y)!==se&&(s.uniformBlockBinding(Y,se,O.__bindingPointIndex),l.set(Y,se))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ce=null,me={},h={},f=new WeakMap,p=[],_=null,x=!1,g=null,m=null,w=null,S=null,M=null,N=null,I=null,L=new Ie(0,0,0),F=0,R=!1,b=null,D=null,q=null,G=null,Q=null,ke.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Me,bindFramebuffer:Ne,drawBuffers:He,useProgram:ot,setBlending:B,setMaterial:qt,setFlipSided:et,setCullFace:tt,setLineWidth:Oe,setPolygonOffset:gt,setScissorTest:Fe,activeTexture:C,bindTexture:E,unbindTexture:H,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:Ae,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:De,texStorage2D:it,texStorage3D:pe,texSubImage2D:te,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:Te,scissor:Pe,viewport:we,reset:Ge}}function Tc(s,e,t,n){const i=I_(n);switch(t){case Th:return s*e;case Ah:return s*e;case Rh:return s*e*2;case so:return s*e/i.components*i.byteLength;case al:return s*e/i.components*i.byteLength;case Ch:return s*e*2/i.components*i.byteLength;case ll:return s*e*2/i.components*i.byteLength;case wh:return s*e*3/i.components*i.byteLength;case cn:return s*e*4/i.components*i.byteLength;case cl:return s*e*4/i.components*i.byteLength;case Hr:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ga:case va:return Math.max(s,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(s,8)*Math.max(e,8)/2;case xa:case ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xr:case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ih:case Ba:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ka:case za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function I_(s){switch(s){case Jn:case Sh:return{byteLength:1,components:1};case Vs:case Eh:case jn:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case wi:case sl:case nn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function L_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return p?new OffscreenCanvas(C,E):Xs("canvas")}function x(C,E,H){let ie=1;const oe=Fe(C);if((oe.width>H||oe.height>H)&&(ie=H/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const te=Math.floor(ie*oe.width),Le=Math.floor(ie*oe.height);h===void 0&&(h=_(te,Le));const xe=E?_(te,Le):h;return xe.width=te,xe.height=Le,xe.getContext("2d").drawImage(C,0,0,te,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+Le+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,E,H,ie,oe=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=E;if(E===s.RED&&(H===s.FLOAT&&(te=s.R32F),H===s.HALF_FLOAT&&(te=s.R16F),H===s.UNSIGNED_BYTE&&(te=s.R8)),E===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.R8UI),H===s.UNSIGNED_SHORT&&(te=s.R16UI),H===s.UNSIGNED_INT&&(te=s.R32UI),H===s.BYTE&&(te=s.R8I),H===s.SHORT&&(te=s.R16I),H===s.INT&&(te=s.R32I)),E===s.RG&&(H===s.FLOAT&&(te=s.RG32F),H===s.HALF_FLOAT&&(te=s.RG16F),H===s.UNSIGNED_BYTE&&(te=s.RG8)),E===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.RG8UI),H===s.UNSIGNED_SHORT&&(te=s.RG16UI),H===s.UNSIGNED_INT&&(te=s.RG32UI),H===s.BYTE&&(te=s.RG8I),H===s.SHORT&&(te=s.RG16I),H===s.INT&&(te=s.RG32I)),E===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.RGB8UI),H===s.UNSIGNED_SHORT&&(te=s.RGB16UI),H===s.UNSIGNED_INT&&(te=s.RGB32UI),H===s.BYTE&&(te=s.RGB8I),H===s.SHORT&&(te=s.RGB16I),H===s.INT&&(te=s.RGB32I)),E===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),H===s.UNSIGNED_INT&&(te=s.RGBA32UI),H===s.BYTE&&(te=s.RGBA8I),H===s.SHORT&&(te=s.RGBA16I),H===s.INT&&(te=s.RGBA32I)),E===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),E===s.RGBA){const Le=oe?oo:Xe.getTransfer(ie);H===s.FLOAT&&(te=s.RGBA32F),H===s.HALF_FLOAT&&(te=s.RGBA16F),H===s.UNSIGNED_BYTE&&(te=Le===pt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(C,E){let H;return C?E===null||E===wi||E===fs?H=s.DEPTH24_STENCIL8:E===nn?H=s.DEPTH32F_STENCIL8:E===Vs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wi||E===fs?H=s.DEPTH_COMPONENT24:E===nn?H=s.DEPTH_COMPONENT32F:E===Vs&&(H=s.DEPTH_COMPONENT16),H}function N(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==zt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){const E=C.target;E.removeEventListener("dispose",I),F(E),E.isVideoTexture&&u.delete(E)}function L(C){const E=C.target;E.removeEventListener("dispose",L),b(E)}function F(C){const E=n.get(C);if(E.__webglInit===void 0)return;const H=C.source,ie=f.get(H);if(ie){const oe=ie[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(C),Object.keys(ie).length===0&&f.delete(H)}n.remove(C)}function R(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const H=C.source,ie=f.get(H);delete ie[E.__cacheKey],o.memory.textures--}function b(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let oe=0;oe<E.__webglFramebuffer[ie].length;oe++)s.deleteFramebuffer(E.__webglFramebuffer[ie][oe]);else s.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)s.deleteFramebuffer(E.__webglFramebuffer[ie]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=C.textures;for(let ie=0,oe=H.length;ie<oe;ie++){const te=n.get(H[ie]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(H[ie])}n.remove(C)}let D=0;function q(){D=0}function G(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function Q(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ee(C,E){const H=n.get(C);if(C.isVideoTexture&&Oe(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,C,E);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function K(C,E){const H=n.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function ne(C,E){const H=n.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,E);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function V(C,E){const H=n.get(C);if(C.version>0&&H.__version!==C.version){re(H,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}const ce={[fi]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Kr]:s.MIRRORED_REPEAT},me={[Qt]:s.NEAREST,[Mh]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[zr]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},be={[id]:s.NEVER,[cd]:s.ALWAYS,[sd]:s.LESS,[Ph]:s.LEQUAL,[rd]:s.EQUAL,[ld]:s.GEQUAL,[od]:s.GREATER,[ad]:s.NOTEQUAL};function Re(C,E){if(E.type===nn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zt||E.magFilter===zr||E.magFilter===Us||E.magFilter===Cn||E.minFilter===zt||E.minFilter===zr||E.minFilter===Us||E.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ce[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ce[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ce[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,me[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qt||E.minFilter!==Us&&E.minFilter!==Cn||E.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ke(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const ie=E.source;let oe=f.get(ie);oe===void 0&&(oe={},f.set(ie,oe));const te=Q(E);if(te!==C.__cacheKey){oe[te]===void 0&&(oe[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[te].usedTimes++;const Le=oe[C.__cacheKey];Le!==void 0&&(oe[C.__cacheKey].usedTimes--,Le.usedTimes===0&&R(E)),C.__cacheKey=te,C.__webglTexture=oe[te].texture}return H}function J(C,E,H){let ie=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=s.TEXTURE_3D);const oe=ke(C,E),te=E.source;t.bindTexture(ie,C.__webglTexture,s.TEXTURE0+H);const Le=n.get(te);if(te.version!==Le.__version||oe===!0){t.activeTexture(s.TEXTURE0+H);const xe=Xe.getPrimaries(Xe.workingColorSpace),Te=E.colorSpace===Wn?null:Xe.getPrimaries(E.colorSpace),it=E.colorSpace===Wn||xe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let pe=x(E.image,!1,i.maxTextureSize);pe=gt(E,pe);const Ae=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type);let Pe=S(E.internalFormat,Ae,Ce,E.colorSpace,E.isVideoTexture);Re(ie,E);let we;const Ve=E.mipmaps,De=E.isVideoTexture!==!0,Ge=Le.__version===void 0||oe===!0,O=te.dataReady,Y=N(E,pe);if(E.isDepthTexture)Pe=M(E.format===ps,E.type),Ge&&(De?t.texStorage2D(s.TEXTURE_2D,1,Pe,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ae,Ce,null));else if(E.isDataTexture)if(Ve.length>0){De&&Ge&&t.texStorage2D(s.TEXTURE_2D,Y,Pe,Ve[0].width,Ve[0].height);for(let Z=0,se=Ve.length;Z<se;Z++)we=Ve[Z],De?O&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,we.width,we.height,Ae,Ce,we.data):t.texImage2D(s.TEXTURE_2D,Z,Pe,we.width,we.height,0,Ae,Ce,we.data);E.generateMipmaps=!1}else De?(Ge&&t.texStorage2D(s.TEXTURE_2D,Y,Pe,pe.width,pe.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,Ae,Ce,pe.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ae,Ce,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Y,Pe,Ve[0].width,Ve[0].height,pe.depth);for(let Z=0,se=Ve.length;Z<se;Z++)if(we=Ve[Z],E.format!==cn)if(Ae!==null)if(De){if(O)if(E.layerUpdates.size>0){const Se=Tc(we.width,we.height,E.format,E.type);for(const ye of E.layerUpdates){const We=we.data.subarray(ye*Se/we.data.BYTES_PER_ELEMENT,(ye+1)*Se/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,ye,we.width,we.height,1,Ae,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,pe.depth,Ae,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Pe,we.width,we.height,pe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,pe.depth,Ae,Ce,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,Pe,we.width,we.height,pe.depth,0,Ae,Ce,we.data)}else{De&&Ge&&t.texStorage2D(s.TEXTURE_2D,Y,Pe,Ve[0].width,Ve[0].height);for(let Z=0,se=Ve.length;Z<se;Z++)we=Ve[Z],E.format!==cn?Ae!==null?De?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?O&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,we.width,we.height,Ae,Ce,we.data):t.texImage2D(s.TEXTURE_2D,Z,Pe,we.width,we.height,0,Ae,Ce,we.data)}else if(E.isDataArrayTexture)if(De){if(Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Y,Pe,pe.width,pe.height,pe.depth),O)if(E.layerUpdates.size>0){const Z=Tc(pe.width,pe.height,E.format,E.type);for(const se of E.layerUpdates){const Se=pe.data.subarray(se*Z/pe.data.BYTES_PER_ELEMENT,(se+1)*Z/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,pe.width,pe.height,1,Ae,Ce,Se)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ce,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,pe.width,pe.height,pe.depth,0,Ae,Ce,pe.data);else if(E.isData3DTexture)De?(Ge&&t.texStorage3D(s.TEXTURE_3D,Y,Pe,pe.width,pe.height,pe.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ce,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,pe.width,pe.height,pe.depth,0,Ae,Ce,pe.data);else if(E.isFramebufferTexture){if(Ge)if(De)t.texStorage2D(s.TEXTURE_2D,Y,Pe,pe.width,pe.height);else{let Z=pe.width,se=pe.height;for(let Se=0;Se<Y;Se++)t.texImage2D(s.TEXTURE_2D,Se,Pe,Z,se,0,Ae,Ce,null),Z>>=1,se>>=1}}else if(Ve.length>0){if(De&&Ge){const Z=Fe(Ve[0]);t.texStorage2D(s.TEXTURE_2D,Y,Pe,Z.width,Z.height)}for(let Z=0,se=Ve.length;Z<se;Z++)we=Ve[Z],De?O&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ae,Ce,we):t.texImage2D(s.TEXTURE_2D,Z,Pe,Ae,Ce,we);E.generateMipmaps=!1}else if(De){if(Ge){const Z=Fe(pe);t.texStorage2D(s.TEXTURE_2D,Y,Pe,Z.width,Z.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ce,pe)}else t.texImage2D(s.TEXTURE_2D,0,Pe,Ae,Ce,pe);g(E)&&m(ie),Le.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function re(C,E,H){if(E.image.length!==6)return;const ie=ke(C,E),oe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const te=n.get(oe);if(oe.version!==te.__version||ie===!0){t.activeTexture(s.TEXTURE0+H);const Le=Xe.getPrimaries(Xe.workingColorSpace),xe=E.colorSpace===Wn?null:Xe.getPrimaries(E.colorSpace),Te=E.colorSpace===Wn||Le===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const it=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let se=0;se<6;se++)!it&&!pe?Ae[se]=x(E.image[se],!0,i.maxCubemapSize):Ae[se]=pe?E.image[se].image:E.image[se],Ae[se]=gt(E,Ae[se]);const Ce=Ae[0],Pe=r.convert(E.format,E.colorSpace),we=r.convert(E.type),Ve=S(E.internalFormat,Pe,we,E.colorSpace),De=E.isVideoTexture!==!0,Ge=te.__version===void 0||ie===!0,O=oe.dataReady;let Y=N(E,Ce);Re(s.TEXTURE_CUBE_MAP,E);let Z;if(it){De&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Y,Ve,Ce.width,Ce.height);for(let se=0;se<6;se++){Z=Ae[se].mipmaps;for(let Se=0;Se<Z.length;Se++){const ye=Z[Se];E.format!==cn?Pe!==null?De?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,Ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,ye.width,ye.height,Pe,we,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,Ve,ye.width,ye.height,0,Pe,we,ye.data)}}}else{if(Z=E.mipmaps,De&&Ge){Z.length>0&&Y++;const se=Fe(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Y,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(pe){De?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae[se].width,Ae[se].height,Pe,we,Ae[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,Ae[se].width,Ae[se].height,0,Pe,we,Ae[se].data);for(let Se=0;Se<Z.length;Se++){const We=Z[Se].image[se].image;De?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,We.width,We.height,Pe,we,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,Ve,We.width,We.height,0,Pe,we,We.data)}}else{De?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,we,Ae[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,Pe,we,Ae[se]);for(let Se=0;Se<Z.length;Se++){const ye=Z[Se];De?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Pe,we,ye.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,Ve,Pe,we,ye.image[se])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),te.__version=oe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,H,ie,oe,te){const Le=r.convert(H.format,H.colorSpace),xe=r.convert(H.type),Te=S(H.internalFormat,Le,xe,H.colorSpace),it=n.get(E),pe=n.get(H);if(pe.__renderTarget=E,!it.__hasExternalTextures){const Ae=Math.max(1,E.width>>te),Ce=Math.max(1,E.height>>te);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,Te,Ae,Ce,E.depth,0,Le,xe,null):t.texImage2D(oe,te,Te,Ae,Ce,0,Le,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),tt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,oe,pe.__webglTexture,0,et(E)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,oe,pe.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(C,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const ie=E.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,te=M(E.stencilBuffer,oe),Le=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=et(E);tt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,te,E.width,E.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,C)}else{const ie=E.textures;for(let oe=0;oe<ie.length;oe++){const te=ie[oe],Le=r.convert(te.format,te.colorSpace),xe=r.convert(te.type),Te=S(te.internalFormat,Le,xe,te.colorSpace),it=et(E);H&&tt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Te,E.width,E.height):tt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,Te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Te,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(E.depthTexture);ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee(E.depthTexture,0);const oe=ie.__webglTexture,te=et(E);if(E.depthTexture.format===rs)tt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(E.depthTexture.format===ps)tt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const E=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",oe)};ie.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=ie}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=s.createRenderbuffer(),he(E.__webglDepthbuffer[ie],C,!1);else{const oe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),he(E.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(C,E,H){const ie=n.get(C);E!==void 0&&ue(ie.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ne(C)}function ot(C){const E=C.texture,H=n.get(C),ie=n.get(E);C.addEventListener("dispose",L);const oe=C.textures,te=C.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=E.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let Te=0;Te<E.mipmaps.length;Te++)H.__webglFramebuffer[xe][Te]=s.createFramebuffer()}else H.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)H.__webglFramebuffer[xe]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Le)for(let xe=0,Te=oe.length;xe<Te;xe++){const it=n.get(oe[xe]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&tt(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<oe.length;xe++){const Te=oe[xe];H.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const it=r.convert(Te.format,Te.colorSpace),pe=r.convert(Te.type),Ae=S(Te.internalFormat,it,pe,Te.colorSpace,C.isXRRenderTarget===!0),Ce=et(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),he(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Re(s.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ue(H.__webglFramebuffer[xe][Te],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else ue(H.__webglFramebuffer[xe],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(E)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let xe=0,Te=oe.length;xe<Te;xe++){const it=oe[xe],pe=n.get(it);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),Re(s.TEXTURE_2D,it),ue(H.__webglFramebuffer,C,it,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),g(it)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ie.__webglTexture),Re(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ue(H.__webglFramebuffer[Te],C,E,s.COLOR_ATTACHMENT0,xe,Te);else ue(H.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,xe,0);g(E)&&m(xe),t.unbindTexture()}C.depthBuffer&&Ne(C)}function Ye(C){const E=C.textures;for(let H=0,ie=E.length;H<ie;H++){const oe=E[H];if(g(oe)){const te=w(C),Le=n.get(oe).__webglTexture;t.bindTexture(te,Le),m(te),t.unbindTexture()}}}const ut=[],B=[];function qt(C){if(C.samples>0){if(tt(C)===!1){const E=C.textures,H=C.width,ie=C.height;let oe=s.COLOR_BUFFER_BIT;const te=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(C),xe=E.length>1;if(xe)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const it=n.get(E[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,H,ie,0,0,H,ie,oe,s.NEAREST),l===!0&&(ut.length=0,B.length=0,ut.push(s.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ut.push(te),B.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const it=n.get(E[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function et(C){return Math.min(i.maxSamples,C.samples)}function tt(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Oe(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function gt(C,E){const H=C.colorSpace,ie=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Xt&&H!==Wn&&(Xe.getTransfer(H)===pt?(ie!==cn||oe!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=tt}function P_(s,e){function t(n,i=Wn){let r;const o=Xe.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return s.BYTE;if(n===Eh)return s.SHORT;if(n===Vs)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===jn)return s.HALF_FLOAT;if(n===Th)return s.ALPHA;if(n===wh)return s.RGB;if(n===cn)return s.RGBA;if(n===Ah)return s.LUMINANCE;if(n===Rh)return s.LUMINANCE_ALPHA;if(n===rs)return s.DEPTH_COMPONENT;if(n===ps)return s.DEPTH_STENCIL;if(n===so)return s.RED;if(n===al)return s.RED_INTEGER;if(n===Ch)return s.RG;if(n===ll)return s.RG_INTEGER;if(n===cl)return s.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===ya||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===ya)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Ia||n===La||n===Pa||n===Da||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===Fa||n===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Ba||n===ka||n===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class D_ extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U_={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Pi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=new O_,g=t.getContextAttributes();let m=null,w=null;const S=[],M=[],N=new Be;let I=null;const L=new Gt;L.viewport=new nt;const F=new Gt;F.viewport=new nt;const R=[L,F],b=new D_;let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=S[J];return re===void 0&&(re=new Ho,S[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=S[J];return re===void 0&&(re=new Ho,S[J]=re),re.getGripSpace()},this.getHand=function(J){let re=S[J];return re===void 0&&(re=new Ho,S[J]=re),re.getHandSpace()};function G(J){const re=M.indexOf(J.inputSource);if(re===-1)return;const ue=S[re];ue!==void 0&&(ue.update(J.inputSource,J.frame,c||o),ue.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",ee);for(let J=0;J<S.length;J++){const re=M[J];re!==null&&(M[J]=null,S[J].disconnect(re))}D=null,q=null,x.reset(),e.setRenderTarget(m),p=null,f=null,h=null,i=null,w=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ai(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,ue=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?ps:rs,ue=g.stencil?fs:wi);const Me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Ai(f.textureWidth,f.textureHeight,{format:cn,type:Jn,depthTexture:new Gh(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(J){for(let re=0;re<J.removed.length;re++){const ue=J.removed[re],he=M.indexOf(ue);he>=0&&(M[he]=null,S[he].disconnect(ue))}for(let re=0;re<J.added.length;re++){const ue=J.added[re];let he=M.indexOf(ue);if(he===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=M.length){M.push(ue),he=Ne;break}else if(M[Ne]===null){M[Ne]=ue,he=Ne;break}if(he===-1)break}const Me=S[he];Me&&Me.connect(ue)}}const K=new U,ne=new U;function V(J,re,ue){K.setFromMatrixPosition(re.matrixWorld),ne.setFromMatrixPosition(ue.matrixWorld);const he=K.distanceTo(ne),Me=re.projectionMatrix.elements,Ne=ue.projectionMatrix.elements,He=Me[14]/(Me[10]-1),ot=Me[14]/(Me[10]+1),Ye=(Me[9]+1)/Me[5],ut=(Me[9]-1)/Me[5],B=(Me[8]-1)/Me[0],qt=(Ne[8]+1)/Ne[0],et=He*B,tt=He*qt,Oe=he/(-B+qt),gt=Oe*-B;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(gt),J.translateZ(Oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Fe=He+Oe,C=ot+Oe,E=et-gt,H=tt+(he-gt),ie=Ye*ot/C*Fe,oe=ut*ot/C*Fe;J.projectionMatrix.makePerspective(E,H,ie,oe,Fe,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let re=J.near,ue=J.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),b.near=F.near=L.near=re,b.far=F.far=L.far=ue,(D!==b.near||q!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,q=b.far),L.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,b.layers.mask=L.layers.mask|F.layers.mask;const he=J.parent,Me=b.cameras;ce(b,he);for(let Ne=0;Ne<Me.length;Ne++)ce(Me[Ne],he);Me.length===2?V(b,L,F):b.projectionMatrix.copy(L.projectionMatrix),me(J,b,he)};function me(J,re,ue){ue===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let be=null;function Re(J,re){if(u=re.getViewerPose(c||o),_=re,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let he=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Ne=0;Ne<ue.length;Ne++){const He=ue[Ne];let ot=null;if(p!==null)ot=p.getViewport(He);else{const ut=h.getViewSubImage(f,He);ot=ut.viewport,Ne===0&&(e.setRenderTargetTextures(w,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(w))}let Ye=R[Ne];Ye===void 0&&(Ye=new Gt,Ye.layers.enable(Ne),Ye.viewport=new nt,R[Ne]=Ye),Ye.matrix.fromArray(He.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(He.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(b.matrix.copy(Ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(Ye)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ne=h.getDepthInformation(ue[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,i.renderState)}}for(let ue=0;ue<S.length;ue++){const he=M[ue],Me=S[ue];he!==null&&Me!==void 0&&Me.update(he,re,c||o)}be&&be(J,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}const ke=new Vh;ke.setAnimationLoop(Re),this.setAnimationLoop=function(J){be=J},this.dispose=function(){}}}const yi=new Ct,k_=new Ee;function z_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,kh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,w,S,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),S=w.envMap,M=w.envMapRotation;S&&(g.envMap.value=S,yi.copy(M),yi.x*=-1,yi.y*=-1,yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(yi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function H_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const M=S.program;n.uniformBlockBinding(w,M)}function c(w,S){let M=i[w.id];M===void 0&&(_(w),M=u(w),i[w.id]=M,w.addEventListener("dispose",g));const N=S.program;n.updateUBOMapping(w,N);const I=e.render.frame;r[w.id]!==I&&(f(w),r[w.id]=I)}function u(w){const S=h();w.__bindingPointIndex=S;const M=s.createBuffer(),N=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,N,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=i[w.id],M=w.uniforms,N=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let I=0,L=M.length;I<L;I++){const F=Array.isArray(M[I])?M[I]:[M[I]];for(let R=0,b=F.length;R<b;R++){const D=F[R];if(p(D,I,R,N)===!0){const q=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let ee=0;ee<G.length;ee++){const K=G[ee],ne=x(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,q+Q,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,Q),Q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,S,M,N){const I=w.value,L=S+"_"+M;if(N[L]===void 0)return typeof I=="number"||typeof I=="boolean"?N[L]=I:N[L]=I.clone(),!0;{const F=N[L];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[L]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function _(w){const S=w.uniforms;let M=0;const N=16;for(let L=0,F=S.length;L<F;L++){const R=Array.isArray(S[L])?S[L]:[S[L]];for(let b=0,D=R.length;b<D;b++){const q=R[b],G=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,ee=G.length;Q<ee;Q++){const K=G[Q],ne=x(K),V=M%N,ce=V%ne.boundary,me=V+ce;M+=ce,me!==0&&N-me<ne.storage&&(M+=N-me),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=ne.storage}}}const I=M%N;return I>0&&(M+=N-I),w.__size=M,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){const S=w.target;S.removeEventListener("dispose",g);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class V_{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this.toneMapping=Kn,this.toneMappingExposure=1;const M=this;let N=!1,I=0,L=0,F=null,R=-1,b=null;const D=new nt,q=new nt;let G=null;const Q=new Ie(0);let ee=0,K=t.width,ne=t.height,V=1,ce=null,me=null;const be=new nt(0,0,K,ne),Re=new nt(0,0,K,ne);let ke=!1;const J=new dl;let re=!1,ue=!1;const he=new Ee,Me=new Ee,Ne=new U,He=new nt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function ut(){return F===null?V:1}let B=n;function qt(d,v){return t.getContext(d,v)}try{const d={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ye,!1),B===null){const v="webgl2";if(B=qt(v,d),B===null)throw qt(v)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let et,tt,Oe,gt,Fe,C,E,H,ie,oe,te,Le,xe,Te,it,pe,Ae,Ce,Pe,we,Ve,De,Ge,O;function Y(){et=new Ym(B),et.init(),De=new P_(B,et),tt=new Hm(B,et,e,De),Oe=new C_(B,et),tt.reverseDepthBuffer&&f&&Oe.buffers.depth.setReversed(!0),gt=new Zm(B),Fe=new p_,C=new L_(B,et,Oe,Fe,tt,De,gt),E=new Gm(M),H=new jm(M),ie=new nf(B),Ge=new km(B,ie),oe=new qm(B,ie,gt,Ge),te=new Jm(B,oe,ie,gt),Pe=new $m(B,tt,C),pe=new Vm(Fe),Le=new f_(M,E,H,et,tt,Ge,pe),xe=new z_(M,Fe),Te=new g_,it=new S_(et),Ce=new Bm(M,E,H,Oe,te,p,l),Ae=new A_(M,te,tt),O=new H_(B,gt,tt,Oe),we=new zm(B,et,gt),Ve=new Km(B,et,gt),gt.programs=Le.programs,M.capabilities=tt,M.extensions=et,M.properties=Fe,M.renderLists=Te,M.shadowMap=Ae,M.state=Oe,M.info=gt}Y();const Z=new B_(M,B);this.xr=Z,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const d=et.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=et.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(d){d!==void 0&&(V=d,this.setSize(K,ne,!1))},this.getSize=function(d){return d.set(K,ne)},this.setSize=function(d,v,y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=d,ne=v,t.width=Math.floor(d*V),t.height=Math.floor(v*V),y===!0&&(t.style.width=d+"px",t.style.height=v+"px"),this.setViewport(0,0,d,v)},this.getDrawingBufferSize=function(d){return d.set(K*V,ne*V).floor()},this.setDrawingBufferSize=function(d,v,y){K=d,ne=v,V=y,t.width=Math.floor(d*y),t.height=Math.floor(v*y),this.setViewport(0,0,d,v)},this.getCurrentViewport=function(d){return d.copy(D)},this.getViewport=function(d){return d.copy(be)},this.setViewport=function(d,v,y,T){d.isVector4?be.set(d.x,d.y,d.z,d.w):be.set(d,v,y,T),Oe.viewport(D.copy(be).multiplyScalar(V).round())},this.getScissor=function(d){return d.copy(Re)},this.setScissor=function(d,v,y,T){d.isVector4?Re.set(d.x,d.y,d.z,d.w):Re.set(d,v,y,T),Oe.scissor(q.copy(Re).multiplyScalar(V).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(d){Oe.setScissorTest(ke=d)},this.setOpaqueSort=function(d){ce=d},this.setTransparentSort=function(d){me=d},this.getClearColor=function(d){return d.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(d=!0,v=!0,y=!0){let T=0;if(d){let A=!1;if(F!==null){const P=F.texture.format;A=P===cl||P===ll||P===al}if(A){const P=F.texture.type,k=P===Jn||P===wi||P===Vs||P===fs||P===rl||P===ol,j=Ce.getClearColor(),z=Ce.getClearAlpha(),X=j.r,W=j.g,$=j.b;k?(_[0]=X,_[1]=W,_[2]=$,_[3]=z,B.clearBufferuiv(B.COLOR,0,_)):(x[0]=X,x[1]=W,x[2]=$,x[3]=z,B.clearBufferiv(B.COLOR,0,x))}else T|=B.COLOR_BUFFER_BIT}v&&(T|=B.DEPTH_BUFFER_BIT),y&&(T|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Te.dispose(),it.dispose(),Fe.dispose(),E.dispose(),H.dispose(),te.dispose(),Ge.dispose(),O.dispose(),Le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",tr),Z.removeEventListener("sessionend",nr),Dn.stop()};function se(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const d=gt.autoReset,v=Ae.enabled,y=Ae.autoUpdate,T=Ae.needsUpdate,A=Ae.type;Y(),gt.autoReset=d,Ae.enabled=v,Ae.autoUpdate=y,Ae.needsUpdate=T,Ae.type=A}function ye(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function We(d){const v=d.target;v.removeEventListener("dispose",We),St(v)}function St(d){Ft(d),Fe.remove(d)}function Ft(d){const v=Fe.get(d).programs;v!==void 0&&(v.forEach(function(y){Le.releaseProgram(y)}),d.isShaderMaterial&&Le.releaseShaderCache(d))}this.renderBufferDirect=function(d,v,y,T,A,P){v===null&&(v=ot);const k=A.isMesh&&A.matrixWorld.determinant()<0,j=fo(d,v,y,T,A);Oe.setMaterial(T,k);let z=y.index,X=1;if(T.wireframe===!0){if(z=oe.getWireframeAttribute(y),z===void 0)return;X=2}const W=y.drawRange,$=y.attributes.position;let le=W.start*X,de=(W.start+W.count)*X;P!==null&&(le=Math.max(le,P.start*X),de=Math.min(de,(P.start+P.count)*X)),z!==null?(le=Math.max(le,0),de=Math.min(de,z.count)):$!=null&&(le=Math.max(le,0),de=Math.min(de,$.count));const _e=de-le;if(_e<0||_e===1/0)return;Ge.setup(A,T,j,y,z);let ge,fe=we;if(z!==null&&(ge=ie.get(z),fe=Ve,fe.setIndex(ge)),A.isMesh)T.wireframe===!0?(Oe.setLineWidth(T.wireframeLinewidth*ut()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(A.isLine){let ae=T.linewidth;ae===void 0&&(ae=1),Oe.setLineWidth(ae*ut()),A.isLineSegments?fe.setMode(B.LINES):A.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else A.isPoints?fe.setMode(B.POINTS):A.isSprite&&fe.setMode(B.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)fe.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))fe.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const ae=A._multiDrawStarts,$e=A._multiDrawCounts,Ue=A._multiDrawCount,xt=z?ie.get(z).bytesPerElement:1,at=Fe.get(T).currentProgram.getUniforms();for(let ze=0;ze<Ue;ze++)at.setValue(B,"_gl_DrawID",ze),fe.render(ae[ze]/xt,$e[ze])}else if(A.isInstancedMesh)fe.renderInstances(le,_e,A.count);else if(y.isInstancedBufferGeometry){const ae=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,$e=Math.min(y.instanceCount,ae);fe.renderInstances(le,_e,$e)}else fe.render(le,_e)};function ct(d,v,y){d.transparent===!0&&d.side===pn&&d.forceSinglePass===!1?(d.side=Jt,d.needsUpdate=!0,Ui(d,v,y),d.side=$n,d.needsUpdate=!0,Ui(d,v,y),d.side=pn):Ui(d,v,y)}this.compile=function(d,v,y=null){y===null&&(y=d),m=it.get(y),m.init(v),S.push(m),y.traverseVisible(function(A){A.isLight&&A.layers.test(v.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),d!==y&&d.traverseVisible(function(A){A.isLight&&A.layers.test(v.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights();const T=new Set;return d.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const P=A.material;if(P)if(Array.isArray(P))for(let k=0;k<P.length;k++){const j=P[k];ct(j,y,A),T.add(j)}else ct(P,y,A),T.add(P)}),S.pop(),m=null,T},this.compileAsync=function(d,v,y=null){const T=this.compile(d,v,y);return new Promise(A=>{function P(){if(T.forEach(function(k){Fe.get(k).currentProgram.isReady()&&T.delete(k)}),T.size===0){A(d);return}setTimeout(P,10)}et.get("KHR_parallel_shader_compile")!==null?P():setTimeout(P,10)})};let rn=null;function vn(d){rn&&rn(d)}function tr(){Dn.stop()}function nr(){Dn.start()}const Dn=new Vh;Dn.setAnimationLoop(vn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(d){rn=d,Z.setAnimationLoop(d),d===null?Dn.stop():Dn.start()},Z.addEventListener("sessionstart",tr),Z.addEventListener("sessionend",nr),this.render=function(d,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(v),v=Z.getCamera()),d.isScene===!0&&d.onBeforeRender(M,d,v,F),m=it.get(d,S.length),m.init(v),S.push(m),Me.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),J.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,re=pe.init(this.clippingPlanes,ue),g=Te.get(d,w.length),g.init(),w.push(g),Z.enabled===!0&&Z.isPresenting===!0){const P=M.xr.getDepthSensingMesh();P!==null&&Ms(P,v,-1/0,M.sortObjects)}Ms(d,v,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ce,me),Ye=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ye&&Ce.addToRenderList(g,d),this.info.render.frame++,re===!0&&pe.beginShadows();const y=m.state.shadowsArray;Ae.render(y,d,v),re===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const T=g.opaque,A=g.transmissive;if(m.setupLights(),v.isArrayCamera){const P=v.cameras;if(A.length>0)for(let k=0,j=P.length;k<j;k++){const z=P[k];ir(T,A,d,z)}Ye&&Ce.render(d);for(let k=0,j=P.length;k<j;k++){const z=P[k];Ss(g,d,z,z.viewport)}}else A.length>0&&ir(T,A,d,v),Ye&&Ce.render(d),Ss(g,d,v);F!==null&&(C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F)),d.isScene===!0&&d.onAfterRender(M,d,v),Ge.resetDefaultState(),R=-1,b=null,S.pop(),S.length>0?(m=S[S.length-1],re===!0&&pe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Ms(d,v,y,T){if(d.visible===!1)return;if(d.layers.test(v.layers)){if(d.isGroup)y=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(v);else if(d.isLight)m.pushLight(d),d.castShadow&&m.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||J.intersectsSprite(d)){T&&He.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Me);const k=te.update(d),j=d.material;j.visible&&g.push(d,k,j,y,He.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||J.intersectsObject(d))){const k=te.update(d),j=d.material;if(T&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),He.copy(d.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),He.copy(k.boundingSphere.center)),He.applyMatrix4(d.matrixWorld).applyMatrix4(Me)),Array.isArray(j)){const z=k.groups;for(let X=0,W=z.length;X<W;X++){const $=z[X],le=j[$.materialIndex];le&&le.visible&&g.push(d,k,le,y,He.z,$)}}else j.visible&&g.push(d,k,j,y,He.z,null)}}const P=d.children;for(let k=0,j=P.length;k<j;k++)Ms(P[k],v,y,T)}function Ss(d,v,y,T){const A=d.opaque,P=d.transmissive,k=d.transparent;m.setupLightsView(y),re===!0&&pe.setGlobalState(M.clippingPlanes,y),T&&Oe.viewport(D.copy(T)),A.length>0&&Di(A,v,y),P.length>0&&Di(P,v,y),k.length>0&&Di(k,v,y),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ir(d,v,y,T){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[T.id]===void 0&&(m.state.transmissionRenderTarget[T.id]=new Ai(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?jn:Jn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const P=m.state.transmissionRenderTarget[T.id],k=T.viewport||D;P.setSize(k.z,k.w);const j=M.getRenderTarget();M.setRenderTarget(P),M.getClearColor(Q),ee=M.getClearAlpha(),ee<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&Ce.render(y);const z=M.toneMapping;M.toneMapping=Kn;const X=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),m.setupLightsView(T),re===!0&&pe.setGlobalState(M.clippingPlanes,T),Di(d,y,T),C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P),et.has("WEBGL_multisampled_render_to_texture")===!1){let W=!1;for(let $=0,le=v.length;$<le;$++){const de=v[$],_e=de.object,ge=de.geometry,fe=de.material,ae=de.group;if(fe.side===pn&&_e.layers.test(T.layers)){const $e=fe.side;fe.side=Jt,fe.needsUpdate=!0,sr(_e,y,T,ge,fe,ae),fe.side=$e,fe.needsUpdate=!0,W=!0}}W===!0&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P))}M.setRenderTarget(j),M.setClearColor(Q,ee),X!==void 0&&(T.viewport=X),M.toneMapping=z}function Di(d,v,y){const T=v.isScene===!0?v.overrideMaterial:null;for(let A=0,P=d.length;A<P;A++){const k=d[A],j=k.object,z=k.geometry,X=T===null?k.material:T,W=k.group;j.layers.test(y.layers)&&sr(j,v,y,z,X,W)}}function sr(d,v,y,T,A,P){d.onBeforeRender(M,v,y,T,A,P),d.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),A.onBeforeRender(M,v,y,T,d,P),A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,M.renderBufferDirect(y,v,T,A,d,P),A.side=$n,A.needsUpdate=!0,M.renderBufferDirect(y,v,T,A,d,P),A.side=pn):M.renderBufferDirect(y,v,T,A,d,P),d.onAfterRender(M,v,y,T,A,P)}function Ui(d,v,y){v.isScene!==!0&&(v=ot);const T=Fe.get(d),A=m.state.lights,P=m.state.shadowsArray,k=A.state.version,j=Le.getParameters(d,A.state,P,v,y),z=Le.getProgramCacheKey(j);let X=T.programs;T.environment=d.isMeshStandardMaterial?v.environment:null,T.fog=v.fog,T.envMap=(d.isMeshStandardMaterial?H:E).get(d.envMap||T.environment),T.envMapRotation=T.environment!==null&&d.envMap===null?v.environmentRotation:d.envMapRotation,X===void 0&&(d.addEventListener("dispose",We),X=new Map,T.programs=X);let W=X.get(z);if(W!==void 0){if(T.currentProgram===W&&T.lightsStateVersion===k)return bs(d,j),W}else j.uniforms=Le.getUniforms(d),d.onBeforeCompile(j,M),W=Le.acquireProgram(j,z),X.set(z,W),T.uniforms=j.uniforms;const $=T.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&($.clippingPlanes=pe.uniform),bs(d,j),T.needsLights=ei(d),T.lightsStateVersion=k,T.needsLights&&($.ambientLightColor.value=A.state.ambient,$.lightProbe.value=A.state.probe,$.directionalLights.value=A.state.directional,$.directionalLightShadows.value=A.state.directionalShadow,$.spotLights.value=A.state.spot,$.spotLightShadows.value=A.state.spotShadow,$.rectAreaLights.value=A.state.rectArea,$.ltc_1.value=A.state.rectAreaLTC1,$.ltc_2.value=A.state.rectAreaLTC2,$.pointLights.value=A.state.point,$.pointLightShadows.value=A.state.pointShadow,$.hemisphereLights.value=A.state.hemi,$.directionalShadowMap.value=A.state.directionalShadowMap,$.directionalShadowMatrix.value=A.state.directionalShadowMatrix,$.spotShadowMap.value=A.state.spotShadowMap,$.spotLightMatrix.value=A.state.spotLightMatrix,$.spotLightMap.value=A.state.spotLightMap,$.pointShadowMap.value=A.state.pointShadowMap,$.pointShadowMatrix.value=A.state.pointShadowMatrix),T.currentProgram=W,T.uniformsList=null,W}function Es(d){if(d.uniformsList===null){const v=d.currentProgram.getUniforms();d.uniformsList=jr.seqWithValue(v.seq,d.uniforms)}return d.uniformsList}function bs(d,v){const y=Fe.get(d);y.outputColorSpace=v.outputColorSpace,y.batching=v.batching,y.batchingColor=v.batchingColor,y.instancing=v.instancing,y.instancingColor=v.instancingColor,y.instancingMorph=v.instancingMorph,y.skinning=v.skinning,y.morphTargets=v.morphTargets,y.morphNormals=v.morphNormals,y.morphColors=v.morphColors,y.morphTargetsCount=v.morphTargetsCount,y.numClippingPlanes=v.numClippingPlanes,y.numIntersection=v.numClipIntersection,y.vertexAlphas=v.vertexAlphas,y.vertexTangents=v.vertexTangents,y.toneMapping=v.toneMapping}function fo(d,v,y,T,A){v.isScene!==!0&&(v=ot),C.resetTextureUnits();const P=v.fog,k=T.isMeshStandardMaterial?v.environment:null,j=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xt,z=(T.isMeshStandardMaterial?H:E).get(T.envMap||k),X=T.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,W=!!y.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),$=!!y.morphAttributes.position,le=!!y.morphAttributes.normal,de=!!y.morphAttributes.color;let _e=Kn;T.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_e=M.toneMapping);const ge=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,fe=ge!==void 0?ge.length:0,ae=Fe.get(T),$e=m.state.lights;if(re===!0&&(ue===!0||d!==b)){const Ke=d===b&&T.id===R;pe.setState(T,d,Ke)}let Ue=!1;T.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==$e.state.version||ae.outputColorSpace!==j||A.isBatchedMesh&&ae.batching===!1||!A.isBatchedMesh&&ae.batching===!0||A.isBatchedMesh&&ae.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&ae.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&ae.instancing===!1||!A.isInstancedMesh&&ae.instancing===!0||A.isSkinnedMesh&&ae.skinning===!1||!A.isSkinnedMesh&&ae.skinning===!0||A.isInstancedMesh&&ae.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&ae.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&ae.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&ae.instancingMorph===!1&&A.morphTexture!==null||ae.envMap!==z||T.fog===!0&&ae.fog!==P||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==pe.numPlanes||ae.numIntersection!==pe.numIntersection)||ae.vertexAlphas!==X||ae.vertexTangents!==W||ae.morphTargets!==$||ae.morphNormals!==le||ae.morphColors!==de||ae.toneMapping!==_e||ae.morphTargetsCount!==fe)&&(Ue=!0):(Ue=!0,ae.__version=T.version);let xt=ae.currentProgram;Ue===!0&&(xt=Ui(T,v,A));let at=!1,ze=!1,yt=!1;const Je=xt.getUniforms(),dt=ae.uniforms;if(Oe.useProgram(xt.program)&&(at=!0,ze=!0,yt=!0),T.id!==R&&(R=T.id,ze=!0),at||b!==d){Oe.buffers.depth.getReversed()?(he.copy(d.projectionMatrix),Rd(he),Cd(he),Je.setValue(B,"projectionMatrix",he)):Je.setValue(B,"projectionMatrix",d.projectionMatrix),Je.setValue(B,"viewMatrix",d.matrixWorldInverse);const Ot=Je.map.cameraPosition;Ot!==void 0&&Ot.setValue(B,Ne.setFromMatrixPosition(d.matrixWorld)),tt.logarithmicDepthBuffer&&Je.setValue(B,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&Je.setValue(B,"isOrthographic",d.isOrthographicCamera===!0),b!==d&&(b=d,ze=!0,yt=!0)}if(A.isSkinnedMesh){Je.setOptional(B,A,"bindMatrix"),Je.setOptional(B,A,"bindMatrixInverse");const Ke=A.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Je.setValue(B,"boneTexture",Ke.boneTexture,C))}A.isBatchedMesh&&(Je.setOptional(B,A,"batchingTexture"),Je.setValue(B,"batchingTexture",A._matricesTexture,C),Je.setOptional(B,A,"batchingIdTexture"),Je.setValue(B,"batchingIdTexture",A._indirectTexture,C),Je.setOptional(B,A,"batchingColorTexture"),A._colorsTexture!==null&&Je.setValue(B,"batchingColorTexture",A._colorsTexture,C));const st=y.morphAttributes;if((st.position!==void 0||st.normal!==void 0||st.color!==void 0)&&Pe.update(A,y,xt),(ze||ae.receiveShadow!==A.receiveShadow)&&(ae.receiveShadow=A.receiveShadow,Je.setValue(B,"receiveShadow",A.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(dt.envMap.value=z,dt.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1),T.isMeshStandardMaterial&&T.envMap===null&&v.environment!==null&&(dt.envMapIntensity.value=v.environmentIntensity),ze&&(Je.setValue(B,"toneMappingExposure",M.toneMappingExposure),ae.needsLights&&Un(dt,yt),P&&T.fog===!0&&xe.refreshFogUniforms(dt,P),xe.refreshMaterialUniforms(dt,T,V,ne,m.state.transmissionRenderTarget[d.id]),jr.upload(B,Es(ae),dt,C)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(jr.upload(B,Es(ae),dt,C),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&Je.setValue(B,"center",A.center),Je.setValue(B,"modelViewMatrix",A.modelViewMatrix),Je.setValue(B,"normalMatrix",A.normalMatrix),Je.setValue(B,"modelMatrix",A.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const Ke=T.uniformsGroups;for(let Ot=0,en=Ke.length;Ot<en;Ot++){const on=Ke[Ot];O.update(on,xt),O.bind(on,xt)}}return xt}function Un(d,v){d.ambientLightColor.needsUpdate=v,d.lightProbe.needsUpdate=v,d.directionalLights.needsUpdate=v,d.directionalLightShadows.needsUpdate=v,d.pointLights.needsUpdate=v,d.pointLightShadows.needsUpdate=v,d.spotLights.needsUpdate=v,d.spotLightShadows.needsUpdate=v,d.rectAreaLights.needsUpdate=v,d.hemisphereLights.needsUpdate=v}function ei(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(d,v,y){Fe.get(d.texture).__webglTexture=v,Fe.get(d.depthTexture).__webglTexture=y;const T=Fe.get(d);T.__hasExternalTextures=!0,T.__autoAllocateDepthBuffer=y===void 0,T.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,v){const y=Fe.get(d);y.__webglFramebuffer=v,y.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(d,v=0,y=0){F=d,I=v,L=y;let T=!0,A=null,P=!1,k=!1;if(d){const z=Fe.get(d);if(z.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(B.FRAMEBUFFER,null),T=!1;else if(z.__webglFramebuffer===void 0)C.setupRenderTarget(d);else if(z.__hasExternalTextures)C.rebindTextures(d,Fe.get(d.texture).__webglTexture,Fe.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const $=d.depthTexture;if(z.__boundDepthTexture!==$){if($!==null&&Fe.has($)&&(d.width!==$.image.width||d.height!==$.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(d)}}const X=d.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(k=!0);const W=Fe.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(W[v])?A=W[v][y]:A=W[v],P=!0):d.samples>0&&C.useMultisampledRTT(d)===!1?A=Fe.get(d).__webglMultisampledFramebuffer:Array.isArray(W)?A=W[y]:A=W,D.copy(d.viewport),q.copy(d.scissor),G=d.scissorTest}else D.copy(be).multiplyScalar(V).floor(),q.copy(Re).multiplyScalar(V).floor(),G=ke;if(Oe.bindFramebuffer(B.FRAMEBUFFER,A)&&T&&Oe.drawBuffers(d,A),Oe.viewport(D),Oe.scissor(q),Oe.setScissorTest(G),P){const z=Fe.get(d.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+v,z.__webglTexture,y)}else if(k){const z=Fe.get(d.texture),X=v||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,z.__webglTexture,y||0,X)}R=-1},this.readRenderTargetPixels=function(d,v,y,T,A,P,k){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j=Fe.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&k!==void 0&&(j=j[k]),j){Oe.bindFramebuffer(B.FRAMEBUFFER,j);try{const z=d.texture,X=z.format,W=z.type;if(!tt.textureFormatReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(W)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=d.width-T&&y>=0&&y<=d.height-A&&B.readPixels(v,y,T,A,De.convert(X),De.convert(W),P)}finally{const z=F!==null?Fe.get(F).__webglFramebuffer:null;Oe.bindFramebuffer(B.FRAMEBUFFER,z)}}},this.readRenderTargetPixelsAsync=async function(d,v,y,T,A,P,k){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j=Fe.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&k!==void 0&&(j=j[k]),j){const z=d.texture,X=z.format,W=z.type;if(!tt.textureFormatReadable(X))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(W))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=d.width-T&&y>=0&&y<=d.height-A){Oe.bindFramebuffer(B.FRAMEBUFFER,j);const $=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$),B.bufferData(B.PIXEL_PACK_BUFFER,P.byteLength,B.STREAM_READ),B.readPixels(v,y,T,A,De.convert(X),De.convert(W),0);const le=F!==null?Fe.get(F).__webglFramebuffer:null;Oe.bindFramebuffer(B.FRAMEBUFFER,le);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ad(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,P),B.deleteBuffer($),B.deleteSync(de),P}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,v=null,y=0){d.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,d=arguments[1]);const T=Math.pow(2,-y),A=Math.floor(d.image.width*T),P=Math.floor(d.image.height*T),k=v!==null?v.x:0,j=v!==null?v.y:0;C.setTexture2D(d,0),B.copyTexSubImage2D(B.TEXTURE_2D,y,0,0,k,j,A,P),Oe.unbindTexture()},this.copyTextureToTexture=function(d,v,y=null,T=null,A=0){d.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),T=arguments[0]||null,d=arguments[1],v=arguments[2],A=arguments[3]||0,y=null);let P,k,j,z,X,W,$,le,de;const _e=d.isCompressedTexture?d.mipmaps[A]:d.image;y!==null?(P=y.max.x-y.min.x,k=y.max.y-y.min.y,j=y.isBox3?y.max.z-y.min.z:1,z=y.min.x,X=y.min.y,W=y.isBox3?y.min.z:0):(P=_e.width,k=_e.height,j=_e.depth||1,z=0,X=0,W=0),T!==null?($=T.x,le=T.y,de=T.z):($=0,le=0,de=0);const ge=De.convert(v.format),fe=De.convert(v.type);let ae;v.isData3DTexture?(C.setTexture3D(v,0),ae=B.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(C.setTexture2DArray(v,0),ae=B.TEXTURE_2D_ARRAY):(C.setTexture2D(v,0),ae=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,v.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,v.unpackAlignment);const $e=B.getParameter(B.UNPACK_ROW_LENGTH),Ue=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xt=B.getParameter(B.UNPACK_SKIP_PIXELS),at=B.getParameter(B.UNPACK_SKIP_ROWS),ze=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,z),B.pixelStorei(B.UNPACK_SKIP_ROWS,X),B.pixelStorei(B.UNPACK_SKIP_IMAGES,W);const yt=d.isDataArrayTexture||d.isData3DTexture,Je=v.isDataArrayTexture||v.isData3DTexture;if(d.isRenderTargetTexture||d.isDepthTexture){const dt=Fe.get(d),st=Fe.get(v),Ke=Fe.get(dt.__renderTarget),Ot=Fe.get(st.__renderTarget);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let en=0;en<j;en++)yt&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(d).__webglTexture,A,W+en),d.isDepthTexture?(Je&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(v).__webglTexture,A,de+en),B.blitFramebuffer(z,X,P,k,$,le,P,k,B.DEPTH_BUFFER_BIT,B.NEAREST)):Je?B.copyTexSubImage3D(ae,A,$,le,de+en,z,X,P,k):B.copyTexSubImage2D(ae,A,$,le,de+en,z,X,P,k);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Je?d.isDataTexture||d.isData3DTexture?B.texSubImage3D(ae,A,$,le,de,P,k,j,ge,fe,_e.data):v.isCompressedArrayTexture?B.compressedTexSubImage3D(ae,A,$,le,de,P,k,j,ge,_e.data):B.texSubImage3D(ae,A,$,le,de,P,k,j,ge,fe,_e):d.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,A,$,le,P,k,ge,fe,_e.data):d.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,A,$,le,_e.width,_e.height,ge,_e.data):B.texSubImage2D(B.TEXTURE_2D,A,$,le,P,k,ge,fe,_e);B.pixelStorei(B.UNPACK_ROW_LENGTH,$e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,at),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze),A===0&&v.generateMipmaps&&B.generateMipmap(ae),Oe.unbindTexture()},this.copyTextureToTexture3D=function(d,v,y=null,T=null,A=0){return d.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,T=arguments[1]||null,d=arguments[2],v=arguments[3],A=arguments[4]||0),Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,v,y,T,A)},this.initRenderTarget=function(d){Fe.get(d).__webglFramebuffer===void 0&&C.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?C.setTextureCube(d,0):d.isData3DTexture?C.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?C.setTexture2DArray(d,0):C.setTexture2D(d,0),Oe.unbindTexture()},this.resetState=function(){I=0,L=0,F=null,Oe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class G_ extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ct,this.environmentIntensity=1,this.environmentRotation=new Ct,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new U;class ml{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wc=new U,Ac=new nt,Rc=new nt,X_=new U,Cc=new Ee,wr=new U,Vo=new In,Ic=new Ee,Go=new Zs;class qh extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(i),e.ray.intersectsSphere(Vo)!==!1&&(Ic.copy(i).invert(),Go.copy(e.ray).applyMatrix4(Ic),!(this.boundingBox!==null&&Go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$u?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ac.fromBufferAttribute(i.attributes.skinIndex,e),Rc.fromBufferAttribute(i.attributes.skinWeight,e),wc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Rc.getComponent(r);if(o!==0){const a=Ac.getComponent(r);Cc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(X_.copy(wc).applyMatrix4(Cc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $r extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gl extends Dt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Qt,u=Qt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lc=new Ee,j_=new Ee;class lo{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:j_;Lc.multiplyMatrices(a,t[r]),Lc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gl(t,e,e,cn,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $r),this.bones.push(o),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Xa extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new Ee,Pc=new Ee,Ar=[],Dc=new Wt,Y_=new Ee,Cs=new Lt,Is=new In;class Kh extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Dc.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Is.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ki),Pc.multiplyMatrices(n,Ki),Cs.matrixWorld=Pc,Cs.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const l=Ar[o];l.instanceId=r,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(i*this.count),i,this.count,so,nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class as extends sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jr=new U,Qr=new U,Uc=new Ee,Ls=new Zs,Rr=new In,Wo=new U,Nc=new U;class co extends _t{constructor(e=new Vt,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jr.fromBufferAttribute(t,i-1),Qr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jr.distanceTo(Qr);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Uc.copy(i).invert(),Ls.copy(e.ray).applyMatrix4(Uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,g=_-1;x<g;x+=c){const m=u.getX(x),w=u.getX(x+1),S=Cr(this,e,Ls,l,m,w);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(_-1),g=u.getX(p),m=Cr(this,e,Ls,l,x,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,g=_-1;x<g;x+=c){const m=Cr(this,e,Ls,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=Cr(this,e,Ls,l,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Jr.fromBufferAttribute(o,i),Qr.fromBufferAttribute(o,r),t.distanceSqToSegment(Jr,Qr,Wo,Nc)>n)return;Wo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Wo);if(!(l<e.near||l>e.far))return{distance:l,point:Nc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Fc=new U,Oc=new U;class ja extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fc.fromBufferAttribute(t,i),Oc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fc.distanceTo(Oc);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q_ extends co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class es extends sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new Ee,Ya=new Zs,Ir=new In,Lr=new U;class Yr extends _t{constructor(e=new Vt,t=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Bc.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(Bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const g=c.getX(_);Lr.fromBufferAttribute(h,g),kc(Lr,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,x=p;_<x;_++)Lr.fromBufferAttribute(h,_),kc(Lr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kc(s,e,t,n,i,r,o){const a=Ya.distanceSqToPoint(s);if(a<t){const l=new U;Ya.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class K_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Be:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],r=[],o=[],a=new U,l=new Ee;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Rt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const Z_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Zh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(n&&(r=t0(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)h=s[_],f=s[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return js(r,o,t,a,l,p,0),o}};function Zh(s,e,t,n,i){let r,o;if(i===d0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=zc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=zc(r,s[r],s[r+1],o);return o&&ho(o,o.next)&&(qs(o),o=o.next),o}function Ri(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ho(t,t.next)||bt(t.prev,t,t.next)===0)){if(qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function js(s,e,t,n,i,r,o){if(!s)return;!o&&r&&o0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?J_(s,n,i,r):$_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),qs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Q_(Ri(s),e,t),js(s,e,t,n,i,r,2)):o===2&&e0(s,e,t,n,i,r):js(Ri(s),e,t,n,i,r,1);break}}}function $_(s){const e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=p&&ts(i,a,r,l,o,c,_.x,_.y)&&bt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function J_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(bt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,m=qa(p,_,e,t,n),w=qa(x,g,e,t,n);let S=s.prevZ,M=s.nextZ;for(;S&&S.z>=m&&M&&M.z<=w;){if(S.x>=p&&S.x<=x&&S.y>=_&&S.y<=g&&S!==i&&S!==o&&ts(a,u,l,h,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=p&&M.x<=x&&M.y>=_&&M.y<=g&&M!==i&&M!==o&&ts(a,u,l,h,c,f,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=m;){if(S.x>=p&&S.x<=x&&S.y>=_&&S.y<=g&&S!==i&&S!==o&&ts(a,u,l,h,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=w;){if(M.x>=p&&M.x<=x&&M.y>=_&&M.y<=g&&M!==i&&M!==o&&ts(a,u,l,h,c,f,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Q_(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ho(i,r)&&$h(i,n,n.next,r)&&Ys(i,r)&&Ys(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),qs(n),qs(n.next),n=s=r),n=n.next}while(n!==s);return Ri(n)}function e0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c0(o,a)){let l=Jh(o,a);o=Ri(o,o.next),l=Ri(l,l.next),js(o,e,t,n,i,r,0),js(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function t0(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Zh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(l0(c));for(i.sort(n0),r=0;r<i.length;r++)t=i0(i[r],t);return t}function n0(s,e){return s.x-e.x}function i0(s,e){const t=s0(s,e);if(!t)return e;const n=Jh(t,s);return Ri(n,n.next),Ri(t,t.next)}function s0(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ts(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ys(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&r0(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function r0(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function o0(s,e,t,n){let i=s;do i.z===0&&(i.z=qa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,a0(i)}function a0(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function qa(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function l0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ts(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function c0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!h0(s,e)&&(Ys(s,e)&&Ys(e,s)&&u0(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||ho(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ho(s,e){return s.x===e.x&&s.y===e.y}function $h(s,e,t,n){const i=Dr(bt(s,e,t)),r=Dr(bt(s,e,n)),o=Dr(bt(t,n,s)),a=Dr(bt(t,n,e));return!!(i!==r&&o!==a||i===0&&Pr(s,t,e)||r===0&&Pr(s,n,e)||o===0&&Pr(t,s,n)||a===0&&Pr(t,e,n))}function Pr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Dr(s){return s>0?1:s<0?-1:0}function h0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&$h(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ys(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function u0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Jh(s,e){const t=new Ka(s.i,s.x,s.y),n=new Ka(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zc(s,e,t,n){const i=new Ka(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ka(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class _l{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return _l.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Hc(e),Vc(n,e);let o=e.length;t.forEach(Hc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Vc(n,t[l]);const a=Z_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class vl extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,p=[],_=[],x=[],g=[];for(let m=0;m<=n;m++){const w=[],S=m/n;let M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let N=0;N<=t;N++){const I=N/t;h.x=-e*Math.cos(i+I*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+I*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(I+M,1-S),w.push(c++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const S=u[m][w+1],M=u[m][w],N=u[m+1][w],I=u[m+1][w+1];(m!==0||o>0)&&p.push(S,M,I),(m!==n-1||l<Math.PI)&&p.push(M,N,I)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ci extends sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends Ci{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qr extends sn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f0 extends sn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ur(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function p0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function m0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Qh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Qs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class g0 extends Qs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Il:r=e,a=2*t-n;break;case Ll:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:o=e,l=2*n-t;break;case Ll:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,g=x*_,m=-f*g+2*f*x-f*_,w=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*_+1,S=(-1-p)*g+(1.5+p)*x+.5*_,M=p*g-p*x;for(let N=0;N!==a;++N)r[N]=m*o[u+N]+w*o[c+N]+S*o[l+N]+M*o[h+N];return r}}class _0 extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class v0 extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new v0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new g0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&p0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===po,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){const x=t[h+_];if(x!==t[f+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ws;class vs extends Pn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Gs;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class eu extends Pn{}eu.prototype.ValueTypeName="color";class Ii extends Pn{}Ii.prototype.ValueTypeName="number";class x0 extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)kt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class pi extends Pn{InterpolantFactoryMethodLinear(e){return new x0(this.times,this.values,this.getValueSize(),e)}}pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Pn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Gs;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Li extends Pn{}Li.prototype.ValueTypeName="vector";class tu{constructor(e="",t=-1,n=[],i=Ju){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(M0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=m0(l);l=Gc(l,1,u),c=Gc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ii(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,_,x){if(p.length!==0){const g=[],m=[];Qh(p,g,m,_),g.length!==0&&x.push(new h(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)p[f[_].morphTargets[x]]=-1;for(const x in p){const g=[],m=[];for(let w=0;w!==f[_].morphTargets.length;++w){const S=f[_];g.push(S.time),m.push(S.morphTarget===x?1:0)}i.push(new Ii(".morphTargetInfluence["+x+"]",g,m))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Li,p+".position",f,"pos",i),n(pi,p+".quaternion",f,"rot",i),n(Li,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function y0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return eu;case"quaternion":return pi;case"bool":case"boolean":return vs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function M0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=y0(s.type);if(s.times===void 0){const t=[],n=[];Qh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class S0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const E0=new S0;class _n{constructor(e){this.manager=e!==void 0?e:E0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_n.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class b0 extends Error{constructor(e,t){super(e),this.response=t}}class ys extends _n{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let x=0;const g=new ReadableStream({start(m){w();function w(){h.read().then(({done:S,value:M})=>{if(S)m.close();else{x+=M.byteLength;const N=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let I=0,L=u.length;I<L;I++){const F=u[I];F.onProgress&&F.onProgress(N)}m.enqueue(M),w()}},S=>{m.error(S)})}}});return new Response(g)}else throw new b0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{hi.add(e,c);const u=zn[e];delete zn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class T0 extends _n{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Xs("img");function l(){u(),hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class w0 extends _n{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new gl,a=new ys(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:gn,o.wrapT=c.wrapT!==void 0?c.wrapT:gn,o.magFilter=c.magFilter!==void 0?c.magFilter:zt,o.minFilter=c.minFilter!==void 0?c.minFilter:zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Cn),c.mipmapCount===1&&(o.minFilter=zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class nu extends _n{constructor(e){super(e)}load(e,t,n,i){const r=new Dt,o=new T0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class uo extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xo=new Ee,Wc=new U,Xc=new U;class xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class A0 extends xl{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class iu extends uo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new A0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jc=new Ee,Ps=new U,jo=new U;class R0 extends xl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class Za extends uo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new R0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class C0 extends xl{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new C0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I0 extends uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ls{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class L0 extends _n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(e,l),r.manager.itemStart(e)}}const Ml="\\[\\]\\.:\\/",P0=new RegExp("["+Ml+"]","g"),Sl="[^"+Ml+"]",D0="[^"+Ml.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",Sl),N0=/(WCOD+)?/.source.replace("WCOD",D0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),B0=new RegExp("^"+U0+N0+F0+O0+"$"),k0=["material","materials","bones","map"];class z0{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(e){const t=B0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);k0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=z0;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H0 extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);const qc={type:"change"},El={type:"start"},su={type:"end"},Nr=new Zs,Kc=new ci,V0=Math.cos(70*Et.DEG2RAD),It=new U,tn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yo=1e-6;class G0 extends H0{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new kt,this._lastTargetPosition=new U,this._quat=new kt().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yc,this._sphericalDelta=new Yc,this._scale=1,this._panOffset=new U,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new U,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X0.bind(this),this._onPointerDown=W0.bind(this),this._onPointerUp=j0.bind(this),this._onContextMenu=Q0.bind(this),this._onMouseWheel=K0.bind(this),this._onKeyDown=Z0.bind(this),this._onTouchStart=$0.bind(this),this._onTouchMove=J0.bind(this),this._onMouseDown=Y0.bind(this),this._onMouseMove=q0.bind(this),this._interceptControlDown=ev.bind(this),this._interceptControlUp=tv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qc),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Nr.origin.copy(this.object.position),Nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nr.direction))<V0?this.object.lookAt(this.target):(Kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nr.intersectPlane(Kc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yo||this._lastTargetPosition.distanceToSquared(this.target)>Yo?(this.dispatchEvent(qc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;It.copy(i).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function W0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function X0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function j0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(su),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Y0(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=mt.DOLLY;break;case is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}break;case is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(El)}function q0(s){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function K0(s){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(s.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(su))}function Z0(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function $0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=mt.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=mt.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(El)}function J0(s){switch(this._trackPointer(s),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=mt.NONE}}function Q0(s){this.enabled!==!1&&s.preventDefault()}function ev(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ui={icon:0,preview:1};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var mn=Uint8Array,ns=Uint16Array,nv=Int32Array,ru=new mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ou=new mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),iv=new mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),au=function(s,e){for(var t=new ns(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new nv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},lu=au(ru,2),cu=lu.b,sv=lu.r;cu[28]=258,sv[258]=28;var rv=au(ou,0),ov=rv.b,$a=new ns(32768);for(var Mt=0;Mt<32768;++Mt){var ai=(Mt&43690)>>1|(Mt&21845)<<1;ai=(ai&52428)>>2|(ai&13107)<<2,ai=(ai&61680)>>4|(ai&3855)<<4,$a[Mt]=((ai&65280)>>8|(ai&255)<<8)>>1}var zs=(function(s,e,t){for(var n=s.length,i=0,r=new ns(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new ns(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new ns(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[$a[h]>>l]=c}else for(a=new ns(n),i=0;i<n;++i)s[i]&&(a[i]=$a[o[s[i]-1]++]>>15-s[i]);return a}),er=new mn(288);for(var Mt=0;Mt<144;++Mt)er[Mt]=8;for(var Mt=144;Mt<256;++Mt)er[Mt]=9;for(var Mt=256;Mt<280;++Mt)er[Mt]=7;for(var Mt=280;Mt<288;++Mt)er[Mt]=8;var hu=new mn(32);for(var Mt=0;Mt<32;++Mt)hu[Mt]=5;var av=zs(er,9,1),lv=zs(hu,5,1),qo=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Sn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Ko=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},cv=function(s){return(s+7)/8|0},hv=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new mn(s.subarray(e,t))},uv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],bn=function(s,e,t){var n=new Error(e||uv[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,bn),!t)throw n;return n},dv=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new mn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new mn(i*3));var c=function(ot){var Ye=t.length;if(ot>Ye){var ut=new mn(Math.max(Ye*2,ot));ut.set(t),t=ut}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,_=e.d,x=e.m,g=e.n,m=i*8;do{if(!p){u=Sn(s,h,1);var w=Sn(s,h+1,3);if(h+=3,w)if(w==1)p=av,_=lv,x=9,g=5;else if(w==2){var I=Sn(s,h,31)+257,L=Sn(s,h+10,15)+4,F=I+Sn(s,h+5,31)+1;h+=14;for(var R=new mn(F),b=new mn(19),D=0;D<L;++D)b[iv[D]]=Sn(s,h+D*3,7);h+=L*3;for(var q=qo(b),G=(1<<q)-1,Q=zs(b,q,1),D=0;D<F;){var ee=Q[Sn(s,h,G)];h+=ee&15;var S=ee>>4;if(S<16)R[D++]=S;else{var K=0,ne=0;for(S==16?(ne=3+Sn(s,h,3),h+=2,K=R[D-1]):S==17?(ne=3+Sn(s,h,7),h+=3):S==18&&(ne=11+Sn(s,h,127),h+=7);ne--;)R[D++]=K}}var V=R.subarray(0,I),ce=R.subarray(I);x=qo(V),g=qo(ce),p=zs(V,x,1),_=zs(ce,g,1)}else bn(1);else{var S=cv(h)+4,M=s[S-4]|s[S-3]<<8,N=S+M;if(N>i){l&&bn(0);break}a&&c(f+M),t.set(s.subarray(S,N),f),e.b=f+=M,e.p=h=N*8,e.f=u;continue}if(h>m){l&&bn(0);break}}a&&c(f+131072);for(var me=(1<<x)-1,be=(1<<g)-1,Re=h;;Re=h){var K=p[Ko(s,h)&me],ke=K>>4;if(h+=K&15,h>m){l&&bn(0);break}if(K||bn(2),ke<256)t[f++]=ke;else if(ke==256){Re=h,p=null;break}else{var J=ke-254;if(ke>264){var D=ke-257,re=ru[D];J=Sn(s,h,(1<<re)-1)+cu[D],h+=re}var ue=_[Ko(s,h)&be],he=ue>>4;ue||bn(3),h+=ue&15;var ce=ov[he];if(he>3){var re=ou[he];ce+=Ko(s,h)&(1<<re)-1,h+=re}if(h>m){l&&bn(0);break}a&&c(f+131072);var Me=f+J;if(f<ce){var Ne=r-ce,He=Math.min(ce,Me);for(Ne+f<0&&bn(3);f<He;++f)t[f]=n[Ne+f]}for(;f<Me;++f)t[f]=t[f-ce]}}e.l=p,e.p=Re,e.b=f,e.f=u,p&&(u=1,e.m=x,e.d=_,e.n=g)}while(!u);return f!=t.length&&o?hv(t,0,f):t.subarray(0,f)},fv=new mn(0),pv=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&bn(6,"invalid zlib data"),(s[1]>>5&1)==1&&bn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Os(s,e){return dv(s.subarray(pv(s),-4),{i:2},e,e)}var mv=typeof TextDecoder<"u"&&new TextDecoder,gv=0;try{mv.decode(fv,{stream:!0}),gv=1}catch{}class _v extends w0{constructor(e){super(e),this.type=jn}parse(e){const R=Math.pow(2.7182818,2.2);function b(d,v){let y=0;for(let A=0;A<65536;++A)(A==0||d[A>>3]&1<<(A&7))&&(v[y++]=A);const T=y-1;for(;y<65536;)v[y++]=0;return T}function D(d){for(let v=0;v<16384;v++)d[v]={},d[v].len=0,d[v].lit=0,d[v].p=null}const q={l:0,c:0,lc:0};function G(d,v,y,T,A){for(;y<d;)v=v<<8|we(T,A),y+=8;y-=d,q.l=v>>y&(1<<d)-1,q.c=v,q.lc=y}const Q=new Array(59);function ee(d){for(let y=0;y<=58;++y)Q[y]=0;for(let y=0;y<65537;++y)Q[d[y]]+=1;let v=0;for(let y=58;y>0;--y){const T=v+Q[y]>>1;Q[y]=v,v=T}for(let y=0;y<65537;++y){const T=d[y];T>0&&(d[y]=T|Q[T]++<<6)}}function K(d,v,y,T,A,P){const k=v;let j=0,z=0;for(;T<=A;T++){if(k.value-v.value>y)return!1;G(6,j,z,d,k);const X=q.l;if(j=q.c,z=q.lc,P[T]=X,X==63){if(k.value-v.value>y)throw new Error("Something wrong with hufUnpackEncTable");G(8,j,z,d,k);let W=q.l+6;if(j=q.c,z=q.lc,T+W>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)P[T++]=0;T--}else if(X>=59){let W=X-59+2;if(T+W>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)P[T++]=0;T--}}ee(P)}function ne(d){return d&63}function V(d){return d>>6}function ce(d,v,y,T){for(;v<=y;v++){const A=V(d[v]),P=ne(d[v]);if(A>>P)throw new Error("Invalid table entry");if(P>14){const k=T[A>>P-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const j=k.p;k.p=new Array(k.lit);for(let z=0;z<k.lit-1;++z)k.p[z]=j[z]}else k.p=new Array(1);k.p[k.lit-1]=v}else if(P){let k=0;for(let j=1<<14-P;j>0;j--){const z=T[(A<<14-P)+k];if(z.len||z.p)throw new Error("Invalid table entry");z.len=P,z.lit=v,k++}}}return!0}const me={c:0,lc:0};function be(d,v,y,T){d=d<<8|we(y,T),v+=8,me.c=d,me.lc=v}const Re={c:0,lc:0};function ke(d,v,y,T,A,P,k,j,z){if(d==v){T<8&&(be(y,T,A,P),y=me.c,T=me.lc),T-=8;let X=y>>T;if(X=new Uint8Array([X])[0],j.value+X>z)return!1;const W=k[j.value-1];for(;X-- >0;)k[j.value++]=W}else if(j.value<z)k[j.value++]=d;else return!1;Re.c=y,Re.lc=T}function J(d){return d&65535}function re(d){const v=J(d);return v>32767?v-65536:v}const ue={a:0,b:0};function he(d,v){const y=re(d),A=re(v),P=y+(A&1)+(A>>1),k=P,j=P-A;ue.a=k,ue.b=j}function Me(d,v){const y=J(d),T=J(v),A=y-(T>>1)&65535,P=T+A-32768&65535;ue.a=P,ue.b=A}function Ne(d,v,y,T,A,P,k){const j=k<16384,z=y>A?A:y;let X=1,W,$;for(;X<=z;)X<<=1;for(X>>=1,W=X,X>>=1;X>=1;){$=0;const le=$+P*(A-W),de=P*X,_e=P*W,ge=T*X,fe=T*W;let ae,$e,Ue,xt;for(;$<=le;$+=_e){let at=$;const ze=$+T*(y-W);for(;at<=ze;at+=fe){const yt=at+ge,Je=at+de,dt=Je+ge;j?(he(d[at+v],d[Je+v]),ae=ue.a,Ue=ue.b,he(d[yt+v],d[dt+v]),$e=ue.a,xt=ue.b,he(ae,$e),d[at+v]=ue.a,d[yt+v]=ue.b,he(Ue,xt),d[Je+v]=ue.a,d[dt+v]=ue.b):(Me(d[at+v],d[Je+v]),ae=ue.a,Ue=ue.b,Me(d[yt+v],d[dt+v]),$e=ue.a,xt=ue.b,Me(ae,$e),d[at+v]=ue.a,d[yt+v]=ue.b,Me(Ue,xt),d[Je+v]=ue.a,d[dt+v]=ue.b)}if(y&X){const yt=at+de;j?he(d[at+v],d[yt+v]):Me(d[at+v],d[yt+v]),ae=ue.a,d[yt+v]=ue.b,d[at+v]=ae}}if(A&X){let at=$;const ze=$+T*(y-W);for(;at<=ze;at+=fe){const yt=at+ge;j?he(d[at+v],d[yt+v]):Me(d[at+v],d[yt+v]),ae=ue.a,d[yt+v]=ue.b,d[at+v]=ae}}W=X,X>>=1}return $}function He(d,v,y,T,A,P,k,j,z){let X=0,W=0;const $=k,le=Math.trunc(T.value+(A+7)/8);for(;T.value<le;)for(be(X,W,y,T),X=me.c,W=me.lc;W>=14;){const _e=X>>W-14&16383,ge=v[_e];if(ge.len)W-=ge.len,ke(ge.lit,P,X,W,y,T,j,z,$),X=Re.c,W=Re.lc;else{if(!ge.p)throw new Error("hufDecode issues");let fe;for(fe=0;fe<ge.lit;fe++){const ae=ne(d[ge.p[fe]]);for(;W<ae&&T.value<le;)be(X,W,y,T),X=me.c,W=me.lc;if(W>=ae&&V(d[ge.p[fe]])==(X>>W-ae&(1<<ae)-1)){W-=ae,ke(ge.p[fe],P,X,W,y,T,j,z,$),X=Re.c,W=Re.lc;break}}if(fe==ge.lit)throw new Error("hufDecode issues")}}const de=8-A&7;for(X>>=de,W-=de;W>0;){const _e=v[X<<14-W&16383];if(_e.len)W-=_e.len,ke(_e.lit,P,X,W,y,T,j,z,$),X=Re.c,W=Re.lc;else throw new Error("hufDecode issues")}return!0}function ot(d,v,y,T,A,P){const k={value:0},j=y.value,z=Pe(v,y),X=Pe(v,y);y.value+=4;const W=Pe(v,y);if(y.value+=4,z<0||z>=65537||X<0||X>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const $=new Array(65537),le=new Array(16384);D(le);const de=T-(y.value-j);if(K(d,y,de,z,X,$),W>8*(T-(y.value-j)))throw new Error("Something wrong with hufUncompress");ce($,z,X,le),He($,le,d,y,W,X,P,A,k)}function Ye(d,v,y){for(let T=0;T<y;++T)v[T]=d[v[T]]}function ut(d){for(let v=1;v<d.length;v++){const y=d[v-1]+d[v]-128;d[v]=y}}function B(d,v){let y=0,T=Math.floor((d.length+1)/2),A=0;const P=d.length-1;for(;!(A>P||(v[A++]=d[y++],A>P));)v[A++]=d[T++]}function qt(d){let v=d.byteLength;const y=new Array;let T=0;const A=new DataView(d);for(;v>0;){const P=A.getInt8(T++);if(P<0){const k=-P;v-=k+1;for(let j=0;j<k;j++)y.push(A.getUint8(T++))}else{const k=P;v-=2;const j=A.getUint8(T++);for(let z=0;z<k+1;z++)y.push(j)}}return y}function et(d,v,y,T,A,P){let k=new DataView(P.buffer);const j=y[d.idx[0]].width,z=y[d.idx[0]].height,X=3,W=Math.floor(j/8),$=Math.ceil(j/8),le=Math.ceil(z/8),de=j-($-1)*8,_e=z-(le-1)*8,ge={value:0},fe=new Array(X),ae=new Array(X),$e=new Array(X),Ue=new Array(X),xt=new Array(X);for(let ze=0;ze<X;++ze)xt[ze]=v[d.idx[ze]],fe[ze]=ze<1?0:fe[ze-1]+$*le,ae[ze]=new Float32Array(64),$e[ze]=new Uint16Array(64),Ue[ze]=new Uint16Array($*64);for(let ze=0;ze<le;++ze){let yt=8;ze==le-1&&(yt=_e);let Je=8;for(let st=0;st<$;++st){st==$-1&&(Je=de);for(let Ke=0;Ke<X;++Ke)$e[Ke].fill(0),$e[Ke][0]=A[fe[Ke]++],tt(ge,T,$e[Ke]),Oe($e[Ke],ae[Ke]),gt(ae[Ke]);Fe(ae);for(let Ke=0;Ke<X;++Ke)C(ae[Ke],Ue[Ke],st*64)}let dt=0;for(let st=0;st<X;++st){const Ke=y[d.idx[st]].type;for(let Ot=8*ze;Ot<8*ze+yt;++Ot){dt=xt[st][Ot];for(let en=0;en<W;++en){const on=en*64+(Ot&7)*8;k.setUint16(dt+0*Ke,Ue[st][on+0],!0),k.setUint16(dt+2*Ke,Ue[st][on+1],!0),k.setUint16(dt+4*Ke,Ue[st][on+2],!0),k.setUint16(dt+6*Ke,Ue[st][on+3],!0),k.setUint16(dt+8*Ke,Ue[st][on+4],!0),k.setUint16(dt+10*Ke,Ue[st][on+5],!0),k.setUint16(dt+12*Ke,Ue[st][on+6],!0),k.setUint16(dt+14*Ke,Ue[st][on+7],!0),dt+=16*Ke}}if(W!=$)for(let Ot=8*ze;Ot<8*ze+yt;++Ot){const en=xt[st][Ot]+8*W*2*Ke,on=W*64+(Ot&7)*8;for(let rr=0;rr<Je;++rr)k.setUint16(en+rr*2*Ke,Ue[st][on+rr],!0)}}}const at=new Uint16Array(j);k=new DataView(P.buffer);for(let ze=0;ze<X;++ze){y[d.idx[ze]].decoded=!0;const yt=y[d.idx[ze]].type;if(y[ze].type==2)for(let Je=0;Je<z;++Je){const dt=xt[ze][Je];for(let st=0;st<j;++st)at[st]=k.getUint16(dt+st*2*yt,!0);for(let st=0;st<j;++st)k.setFloat32(dt+st*2*yt,Y(at[st]),!0)}}}function tt(d,v,y){let T,A=1;for(;A<64;)T=v[d.value],T==65280?A=64:T>>8==255?A+=T&255:(y[A]=T,A++),d.value++}function Oe(d,v){v[0]=Y(d[0]),v[1]=Y(d[1]),v[2]=Y(d[5]),v[3]=Y(d[6]),v[4]=Y(d[14]),v[5]=Y(d[15]),v[6]=Y(d[27]),v[7]=Y(d[28]),v[8]=Y(d[2]),v[9]=Y(d[4]),v[10]=Y(d[7]),v[11]=Y(d[13]),v[12]=Y(d[16]),v[13]=Y(d[26]),v[14]=Y(d[29]),v[15]=Y(d[42]),v[16]=Y(d[3]),v[17]=Y(d[8]),v[18]=Y(d[12]),v[19]=Y(d[17]),v[20]=Y(d[25]),v[21]=Y(d[30]),v[22]=Y(d[41]),v[23]=Y(d[43]),v[24]=Y(d[9]),v[25]=Y(d[11]),v[26]=Y(d[18]),v[27]=Y(d[24]),v[28]=Y(d[31]),v[29]=Y(d[40]),v[30]=Y(d[44]),v[31]=Y(d[53]),v[32]=Y(d[10]),v[33]=Y(d[19]),v[34]=Y(d[23]),v[35]=Y(d[32]),v[36]=Y(d[39]),v[37]=Y(d[45]),v[38]=Y(d[52]),v[39]=Y(d[54]),v[40]=Y(d[20]),v[41]=Y(d[22]),v[42]=Y(d[33]),v[43]=Y(d[38]),v[44]=Y(d[46]),v[45]=Y(d[51]),v[46]=Y(d[55]),v[47]=Y(d[60]),v[48]=Y(d[21]),v[49]=Y(d[34]),v[50]=Y(d[37]),v[51]=Y(d[47]),v[52]=Y(d[50]),v[53]=Y(d[56]),v[54]=Y(d[59]),v[55]=Y(d[61]),v[56]=Y(d[35]),v[57]=Y(d[36]),v[58]=Y(d[48]),v[59]=Y(d[49]),v[60]=Y(d[57]),v[61]=Y(d[58]),v[62]=Y(d[62]),v[63]=Y(d[63])}function gt(d){const v=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),T=.5*Math.cos(3.14159/8),A=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),j=.5*Math.cos(7*3.14159/16),z=new Array(4),X=new Array(4),W=new Array(4),$=new Array(4);for(let le=0;le<8;++le){const de=le*8;z[0]=T*d[de+2],z[1]=k*d[de+2],z[2]=T*d[de+6],z[3]=k*d[de+6],X[0]=y*d[de+1]+A*d[de+3]+P*d[de+5]+j*d[de+7],X[1]=A*d[de+1]-j*d[de+3]-y*d[de+5]-P*d[de+7],X[2]=P*d[de+1]-y*d[de+3]+j*d[de+5]+A*d[de+7],X[3]=j*d[de+1]-P*d[de+3]+A*d[de+5]-y*d[de+7],W[0]=v*(d[de+0]+d[de+4]),W[3]=v*(d[de+0]-d[de+4]),W[1]=z[0]+z[3],W[2]=z[1]-z[2],$[0]=W[0]+W[1],$[1]=W[3]+W[2],$[2]=W[3]-W[2],$[3]=W[0]-W[1],d[de+0]=$[0]+X[0],d[de+1]=$[1]+X[1],d[de+2]=$[2]+X[2],d[de+3]=$[3]+X[3],d[de+4]=$[3]-X[3],d[de+5]=$[2]-X[2],d[de+6]=$[1]-X[1],d[de+7]=$[0]-X[0]}for(let le=0;le<8;++le)z[0]=T*d[16+le],z[1]=k*d[16+le],z[2]=T*d[48+le],z[3]=k*d[48+le],X[0]=y*d[8+le]+A*d[24+le]+P*d[40+le]+j*d[56+le],X[1]=A*d[8+le]-j*d[24+le]-y*d[40+le]-P*d[56+le],X[2]=P*d[8+le]-y*d[24+le]+j*d[40+le]+A*d[56+le],X[3]=j*d[8+le]-P*d[24+le]+A*d[40+le]-y*d[56+le],W[0]=v*(d[le]+d[32+le]),W[3]=v*(d[le]-d[32+le]),W[1]=z[0]+z[3],W[2]=z[1]-z[2],$[0]=W[0]+W[1],$[1]=W[3]+W[2],$[2]=W[3]-W[2],$[3]=W[0]-W[1],d[0+le]=$[0]+X[0],d[8+le]=$[1]+X[1],d[16+le]=$[2]+X[2],d[24+le]=$[3]+X[3],d[32+le]=$[3]-X[3],d[40+le]=$[2]-X[2],d[48+le]=$[1]-X[1],d[56+le]=$[0]-X[0]}function Fe(d){for(let v=0;v<64;++v){const y=d[0][v],T=d[1][v],A=d[2][v];d[0][v]=y+1.5747*A,d[1][v]=y-.1873*T-.4682*A,d[2][v]=y+1.8556*T}}function C(d,v,y){for(let T=0;T<64;++T)v[y+T]=Zl.toHalfFloat(E(d[T]))}function E(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(R,Math.abs(d)-1)}function H(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ie(d){const v=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),y=new Uint8Array(qt(v)),T=new Uint8Array(y.length);return ut(y),B(y,T),new DataView(T.buffer)}function oe(d){const v=d.array.slice(d.offset.value,d.offset.value+d.size),y=Os(v),T=new Uint8Array(y.length);return ut(y),B(y,T),new DataView(T.buffer)}function te(d){const v=d.viewer,y={value:d.offset.value},T=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),A=new Uint8Array(8192);let P=0;const k=new Array(d.inputChannels.length);for(let _e=0,ge=d.inputChannels.length;_e<ge;_e++)k[_e]={},k[_e].start=P,k[_e].end=k[_e].start,k[_e].nx=d.columns,k[_e].ny=d.lines,k[_e].size=d.type,P+=k[_e].nx*k[_e].ny*k[_e].size;const j=Z(v,y),z=Z(v,y);if(z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(j<=z)for(let _e=0;_e<z-j+1;_e++)A[_e+j]=Ve(v,y);const X=new Uint16Array(65536),W=b(A,X),$=Pe(v,y);ot(d.array,v,y,$,T,P);for(let _e=0;_e<d.inputChannels.length;++_e){const ge=k[_e];for(let fe=0;fe<k[_e].size;++fe)Ne(T,ge.start+fe,ge.nx,ge.size,ge.ny,ge.nx*ge.size,W)}Ye(X,T,P);let le=0;const de=new Uint8Array(T.buffer.byteLength);for(let _e=0;_e<d.lines;_e++)for(let ge=0;ge<d.inputChannels.length;ge++){const fe=k[ge],ae=fe.nx*fe.size,$e=new Uint8Array(T.buffer,fe.end*2,ae*2);de.set($e,le),le+=ae*2,fe.end+=ae}return new DataView(de.buffer)}function Le(d){const v=d.array.slice(d.offset.value,d.offset.value+d.size),y=Os(v),T=d.inputChannels.length*d.lines*d.columns*d.totalBytes,A=new ArrayBuffer(T),P=new DataView(A);let k=0,j=0;const z=new Array(4);for(let X=0;X<d.lines;X++)for(let W=0;W<d.inputChannels.length;W++){let $=0;switch(d.inputChannels[W].pixelType){case 1:z[0]=k,z[1]=z[0]+d.columns,k=z[1]+d.columns;for(let de=0;de<d.columns;++de){const _e=y[z[0]++]<<8|y[z[1]++];$+=_e,P.setUint16(j,$,!0),j+=2}break;case 2:z[0]=k,z[1]=z[0]+d.columns,z[2]=z[1]+d.columns,k=z[2]+d.columns;for(let de=0;de<d.columns;++de){const _e=y[z[0]++]<<24|y[z[1]++]<<16|y[z[2]++]<<8;$+=_e,P.setUint32(j,$,!0),j+=4}break}}return P}function xe(d){const v=d.viewer,y={value:d.offset.value},T=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),A={version:De(v,y),unknownUncompressedSize:De(v,y),unknownCompressedSize:De(v,y),acCompressedSize:De(v,y),dcCompressedSize:De(v,y),rleCompressedSize:De(v,y),rleUncompressedSize:De(v,y),rleRawSize:De(v,y),totalAcUncompressedCount:De(v,y),totalDcUncompressedCount:De(v,y),acCompression:De(v,y)};if(A.version<2)throw new Error("EXRLoader.parse: "+Un.compression+" version "+A.version+" is unsupported");const P=new Array;let k=Z(v,y)-2;for(;k>0;){const ge=Te(v.buffer,y),fe=Ve(v,y),ae=fe>>2&3,$e=(fe>>4)-1,Ue=new Int8Array([$e])[0],xt=Ve(v,y);P.push({name:ge,index:Ue,type:xt,compression:ae}),k-=ge.length+3}const j=Un.channels,z=new Array(d.inputChannels.length);for(let ge=0;ge<d.inputChannels.length;++ge){const fe=z[ge]={},ae=j[ge];fe.name=ae.name,fe.compression=0,fe.decoded=!1,fe.type=ae.pixelType,fe.pLinear=ae.pLinear,fe.width=d.columns,fe.height=d.lines}const X={idx:new Array(3)};for(let ge=0;ge<d.inputChannels.length;++ge){const fe=z[ge];for(let ae=0;ae<P.length;++ae){const $e=P[ae];fe.name==$e.name&&(fe.compression=$e.compression,$e.index>=0&&(X.idx[$e.index]=ge),fe.offset=ge)}}let W,$,le;if(A.acCompressedSize>0)switch(A.acCompression){case 0:W=new Uint16Array(A.totalAcUncompressedCount),ot(d.array,v,y,A.acCompressedSize,W,A.totalAcUncompressedCount);break;case 1:const ge=d.array.slice(y.value,y.value+A.totalAcUncompressedCount),fe=Os(ge);W=new Uint16Array(fe.buffer),y.value+=A.totalAcUncompressedCount;break}if(A.dcCompressedSize>0){const ge={array:d.array,offset:y,size:A.dcCompressedSize};$=new Uint16Array(oe(ge).buffer),y.value+=A.dcCompressedSize}if(A.rleRawSize>0){const ge=d.array.slice(y.value,y.value+A.rleCompressedSize),fe=Os(ge);le=qt(fe.buffer),y.value+=A.rleCompressedSize}let de=0;const _e=new Array(z.length);for(let ge=0;ge<_e.length;++ge)_e[ge]=new Array;for(let ge=0;ge<d.lines;++ge)for(let fe=0;fe<z.length;++fe)_e[fe].push(de),de+=z[fe].width*d.type*2;et(X,_e,z,W,$,T);for(let ge=0;ge<z.length;++ge){const fe=z[ge];if(!fe.decoded)switch(fe.compression){case 2:let ae=0,$e=0;for(let Ue=0;Ue<d.lines;++Ue){let xt=_e[ge][ae];for(let at=0;at<fe.width;++at){for(let ze=0;ze<2*fe.type;++ze)T[xt++]=le[$e+ze*fe.width*fe.height];$e++}ae++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(T.buffer)}function Te(d,v){const y=new Uint8Array(d);let T=0;for(;y[v.value+T]!=0;)T+=1;const A=new TextDecoder().decode(y.slice(v.value,v.value+T));return v.value=v.value+T+1,A}function it(d,v,y){const T=new TextDecoder().decode(new Uint8Array(d).slice(v.value,v.value+y));return v.value=v.value+y,T}function pe(d,v){const y=Ce(d,v),T=Pe(d,v);return[y,T]}function Ae(d,v){const y=Pe(d,v),T=Pe(d,v);return[y,T]}function Ce(d,v){const y=d.getInt32(v.value,!0);return v.value=v.value+4,y}function Pe(d,v){const y=d.getUint32(v.value,!0);return v.value=v.value+4,y}function we(d,v){const y=d[v.value];return v.value=v.value+1,y}function Ve(d,v){const y=d.getUint8(v.value);return v.value=v.value+1,y}const De=function(d,v){let y;return"getBigInt64"in DataView.prototype?y=Number(d.getBigInt64(v.value,!0)):y=d.getUint32(v.value+4,!0)+Number(d.getUint32(v.value,!0)<<32),v.value+=8,y};function Ge(d,v){const y=d.getFloat32(v.value,!0);return v.value+=4,y}function O(d,v){return Zl.toHalfFloat(Ge(d,v))}function Y(d){const v=(d&31744)>>10,y=d&1023;return(d>>15?-1:1)*(v?v===31?y?NaN:1/0:Math.pow(2,v-15)*(1+y/1024):6103515625e-14*(y/1024))}function Z(d,v){const y=d.getUint16(v.value,!0);return v.value+=2,y}function se(d,v){return Y(Z(d,v))}function Se(d,v,y,T){const A=y.value,P=[];for(;y.value<A+T-1;){const k=Te(v,y),j=Ce(d,y),z=Ve(d,y);y.value+=3;const X=Ce(d,y),W=Ce(d,y);P.push({name:k,pixelType:j,pLinear:z,xSampling:X,ySampling:W})}return y.value+=1,P}function ye(d,v){const y=Ge(d,v),T=Ge(d,v),A=Ge(d,v),P=Ge(d,v),k=Ge(d,v),j=Ge(d,v),z=Ge(d,v),X=Ge(d,v);return{redX:y,redY:T,greenX:A,greenY:P,blueX:k,blueY:j,whiteX:z,whiteY:X}}function We(d,v){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],T=Ve(d,v);return y[T]}function St(d,v){const y=Ce(d,v),T=Ce(d,v),A=Ce(d,v),P=Ce(d,v);return{xMin:y,yMin:T,xMax:A,yMax:P}}function Ft(d,v){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],T=Ve(d,v);return y[T]}function ct(d,v){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],T=Ve(d,v);return y[T]}function rn(d,v){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],T=["ROUND_DOWN","ROUND_UP"],A=Pe(d,v),P=Pe(d,v),k=Ve(d,v);return{xSize:A,ySize:P,levelMode:y[k&15],roundingMode:T[k>>4]}}function vn(d,v){const y=Ge(d,v),T=Ge(d,v);return[y,T]}function tr(d,v){const y=Ge(d,v),T=Ge(d,v),A=Ge(d,v);return[y,T,A]}function nr(d,v,y,T,A){if(T==="string"||T==="stringvector"||T==="iccProfile")return it(v,y,A);if(T==="chlist")return Se(d,v,y,A);if(T==="chromaticities")return ye(d,y);if(T==="compression")return We(d,y);if(T==="box2i")return St(d,y);if(T==="envmap")return ct(d,y);if(T==="tiledesc")return rn(d,y);if(T==="lineOrder")return Ft(d,y);if(T==="float")return Ge(d,y);if(T==="v2f")return vn(d,y);if(T==="v3f")return tr(d,y);if(T==="int")return Ce(d,y);if(T==="rational")return pe(d,y);if(T==="timecode")return Ae(d,y);if(T==="preview")return y.value+=A,"skipped";y.value+=A}function Dn(d,v){const y=Math.log2(d);return v=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function Ms(d,v,y){let T=0;switch(d.levelMode){case"ONE_LEVEL":T=1;break;case"MIPMAP_LEVELS":T=Dn(Math.max(v,y),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return T}function Ss(d,v,y,T){const A=new Array(d);for(let P=0;P<d;P++){const k=1<<P;let j=v/k|0;T=="ROUND_UP"&&j*k<v&&(j+=1);const z=Math.max(j,1);A[P]=(z+y-1)/y|0}return A}function ir(){const d=this,v=d.offset,y={value:0};for(let T=0;T<d.tileCount;T++){const A=Ce(d.viewer,v),P=Ce(d.viewer,v);v.value+=8,d.size=Pe(d.viewer,v);const k=A*d.blockWidth,j=P*d.blockHeight;d.columns=k+d.blockWidth>d.width?d.width-k:d.blockWidth,d.lines=j+d.blockHeight>d.height?d.height-j:d.blockHeight;const z=d.columns*d.totalBytes,W=d.size<d.lines*z?d.uncompress(d):H(d);v.value+=d.size;for(let $=0;$<d.lines;$++){const le=$*d.columns*d.totalBytes;for(let de=0;de<d.inputChannels.length;de++){const _e=Un.channels[de].name,ge=d.channelByteOffsets[_e]*d.columns,fe=d.decodeChannels[_e];if(fe===void 0)continue;y.value=le+ge;const ae=(d.height-(1+j+$))*d.outLineWidth;for(let $e=0;$e<d.columns;$e++){const Ue=ae+($e+k)*d.outputChannels+fe;d.byteArray[Ue]=d.getter(W,y)}}}}}function Di(){const d=this,v=d.offset,y={value:0};for(let T=0;T<d.height/d.blockHeight;T++){const A=Ce(d.viewer,v)-Un.dataWindow.yMin;d.size=Pe(d.viewer,v),d.lines=A+d.blockHeight>d.height?d.height-A:d.blockHeight;const P=d.columns*d.totalBytes,j=d.size<d.lines*P?d.uncompress(d):H(d);v.value+=d.size;for(let z=0;z<d.blockHeight;z++){const X=T*d.blockHeight,W=z+d.scanOrder(X);if(W>=d.height)continue;const $=z*P,le=(d.height-1-W)*d.outLineWidth;for(let de=0;de<d.inputChannels.length;de++){const _e=Un.channels[de].name,ge=d.channelByteOffsets[_e]*d.columns,fe=d.decodeChannels[_e];if(fe!==void 0){y.value=$+ge;for(let ae=0;ae<d.columns;ae++){const $e=le+ae*d.outputChannels+fe;d.byteArray[$e]=d.getter(j,y)}}}}}}function sr(d,v,y){const T={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");T.version=d.getUint8(4);const A=d.getUint8(5);T.spec={singleTile:!!(A&2),longName:!!(A&4),deepFormat:!!(A&8),multiPart:!!(A&16)},y.value=8;let P=!0;for(;P;){const k=Te(v,y);if(k==0)P=!1;else{const j=Te(v,y),z=Pe(d,y),X=nr(d,v,y,j,z);X===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${j}'.`):T[k]=X}}if((A&-7)!=0)throw console.error("THREE.EXRHeader:",T),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return T}function Ui(d,v,y,T,A){const P={size:0,viewer:v,array:y,offset:T,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Xt};switch(d.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=H;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=ie;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=oe;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=oe;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=te;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=Le;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=xe;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}const k={};for(const W of d.channels)switch(W.name){case"Y":case"R":case"G":case"B":case"A":k[W.name]=!0,P.type=W.pixelType}let j=!1;if(k.R&&k.G&&k.B)j=!k.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(A){case nn:P.getter=se;break;case jn:P.getter=Z;break}else if(P.type==2)switch(A){case nn:P.getter=Ge;break;case jn:P.getter=O}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+d.compression+".");P.columns=P.width;const z=P.width*P.height*P.outputChannels;switch(A){case nn:P.byteArray=new Float32Array(z),j&&P.byteArray.fill(1,0,z);break;case jn:P.byteArray=new Uint16Array(z),j&&P.byteArray.fill(15360,0,z);break;default:console.error("THREE.EXRLoader: unsupported type: ",A);break}let X=0;for(const W of d.channels)P.decodeChannels[W.name]!==void 0&&(P.channelByteOffsets[W.name]=X),X+=W.pixelType*2;if(P.totalBytes=X,P.outLineWidth=P.width*P.outputChannels,d.lineOrder==="INCREASING_Y"?P.scanOrder=W=>W:P.scanOrder=W=>P.height-1-W,P.outputChannels==4?(P.format=cn,P.colorSpace=Xt):(P.format=so,P.colorSpace=Wn),d.spec.singleTile){P.blockHeight=d.tiles.ySize,P.blockWidth=d.tiles.xSize;const W=Ms(d.tiles,P.width,P.height),$=Ss(W,P.width,d.tiles.xSize,d.tiles.roundingMode),le=Ss(W,P.height,d.tiles.ySize,d.tiles.roundingMode);P.tileCount=$[0]*le[0];for(let de=0;de<W;de++)for(let _e=0;_e<le[de];_e++)for(let ge=0;ge<$[de];ge++)De(v,T);P.decode=ir.bind(P)}else{P.blockWidth=P.width;const W=Math.ceil(P.height/P.blockHeight);for(let $=0;$<W;$++)De(v,T);P.decode=Di.bind(P)}return P}const Es={value:0},bs=new DataView(e),fo=new Uint8Array(e),Un=sr(bs,e,Es),ei=Ui(Un,bs,fo,Es,this.type);return ei.decode(),{header:Un,width:ei.width,height:ei.height,data:ei.byteArray,format:ei.format,colorSpace:ei.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=zt,o.magFilter=zt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,i)}}const Zc="skyboxes/manifest.json",vv=2;class xv{constructor(e,t){this.renderer=e,this.scene=t,this.entries=[],this._cache=new Map,this.state=null,this._pmrem=new Ga(e),this._pmrem.compileEquirectangularShader(),this.dome=yv(),this.dome.visible=!1,t.add(this.dome)}async init(){const e=await fetch(Zc);if(!e.ok)throw new Error(`天空盒清单读取失败：${e.status} ${Zc}`);const t=await e.json();if(this.entries=t.skyboxes??[],this.entries.length===0)throw new Error("天空盒清单为空");return await this.select(this.entries[0].id),this.state}entry(e){return this.entries.find(t=>t.id===e)??this.entries[0]}async select(e){const t=this.entry(e),n=await this._load(t);return this.state={id:t.id,tint:[...t.defaults.tint],exposure:t.defaults.exposure,rotation:t.defaults.rotation,ambientIntensity:t.defaults.ambientIntensity,reflectionIntensity:t.defaults.reflectionIntensity},this.scene.environment=n.pmrem,this._applyUniforms(),this.state}setParams(e){if(!this.state)return null;e.tint&&(this.state.tint=[...e.tint]);for(const t of["exposure","rotation","ambientIntensity","reflectionIntensity"])e[t]!==void 0&&(this.state[t]=Number(e[t]));return this._applyUniforms(),this.state}resetParams(){if(!this.state)return null;const e=this.entry(this.state.id);return this.setParams({...e.defaults,tint:[...e.defaults.tint]})}setBackdropVisible(e){this.dome.visible=e}syncDome(e){if(!this.dome.visible)return;this.dome.position.copy(e.position);const t=Math.max(e.near*4,Math.min(e.far*.5,500));this.dome.scale.setScalar(t),this.dome.updateMatrixWorld(!0)}get ready(){return this.state!==null}_applyUniforms(){const{tint:e,exposure:t,rotation:n}=this.state,i=this.dome.material.uniforms;i.tint.value.set(e[0],e[1],e[2]).multiplyScalar(vv),i.exposure.value=t,i.rotation.value=Et.degToRad(n),this.scene.environmentIntensity=this.state.ambientIntensity}async _load(e){const t=this._cache.get(e.id);if(t)return this.dome.material.uniforms.tex.value=t.exr,t;const n=`skyboxes/${e.file}`,i=await new _v().loadAsync(n);i.mapping=Hs;const r=this._pmrem.fromEquirectangular(i).texture,o={exr:i,pmrem:r,url:n};return this._cache.set(e.id,o),this.dome.material.uniforms.tex.value=i,o}dispose(){this._pmrem.dispose();for(const e of this._cache.values())e.exr.dispose(),e.pmrem.dispose();this._cache.clear(),this.dome.geometry.dispose(),this.dome.material.dispose(),this.scene.remove(this.dome)}}function yv(){const s=new vl(1,48,24),e=new Qn({side:Jt,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{tex:{value:null},tint:{value:new Ie(1,1,1)},exposure:{value:1},rotation:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tex;
      uniform vec3 tint;
      uniform float exposure;
      uniform float rotation;
      varying vec3 vDir;

      const float PI = 3.141592653589793;

      void main() {
        float c = cos(rotation), s = sin(rotation);
        vec3 dir = vec3(c * vDir.x - s * vDir.z, vDir.y, s * vDir.x + c * vDir.z);
        vec2 uv = vec2(atan(dir.z, dir.x), acos(clamp(dir.y, -1.0, 1.0))) / vec2(2.0 * PI, PI);
        vec3 col = texture2D(tex, uv).rgb * tint * exposure;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),t=new Lt(s,e);return t.frustumCulled=!1,t.renderOrder=-1e3,t.name="SkyDome",t}const Zo={color:16774358,direction:[.321,.766,.556],intensity:0};class Mv{constructor(e,t){this.container=e,this.scene=t,this._animationId=null,this._framer=null,this._init(),this.skybox=new xv(this.renderer,t),this.skybox.dome.layers.set(ui.preview),this.envReady=this.skybox.init(),this._animate()}_init(){const{clientWidth:e,clientHeight:t}=this.container;this.renderer=new V_({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!1,this.renderer.toneMapping=Kn,this.container.appendChild(this.renderer.domElement),this.camera=new Gt(45,(e||1)/(t||1),.01,500),this.camera.layers.set(ui.preview),this.controls=new G0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.minDistance=.3,this.controls.maxDistance=200,this.controls.target.set(0,0,0),this.keyLight=new yl(Zo.color,Zo.intensity),this._setKeyLightPosition(Zo.direction),this.keyLight.layers.enable(ui.preview),this.scene.add(this.keyLight),this._resizeObserver=new ResizeObserver(()=>this._resize()),this._resizeObserver.observe(this.container)}_setKeyLightPosition(e){this.keyLight.position.fromArray(e).normalize().multiplyScalar(100)}setKeyLight(e={}){e.color!==void 0&&this.keyLight.color.set(e.color),e.direction&&this._setKeyLightPosition(e.direction),e.intensity!==void 0&&(this.keyLight.intensity=Math.max(0,Number(e.intensity)))}setFramer(e){this._framer=e,this.resetView()}setTool(e){this.controls.enableRotate=e!=="none",this.controls.enablePan=e!=="select",this.controls.enableZoom=!0}resetView(){this._framer?this._framer(this.camera,this.controls.target):(this.camera.position.set(1.2,1.7,1.2),this.controls.target.set(0,0,0)),this.controls.update()}_resize(){const e=this.container.clientWidth,t=this.container.clientHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t))}_animate(){this._animationId=requestAnimationFrame(()=>this._animate()),this.controls.update(),this.skybox.syncDome(this.camera),this.renderer.render(this.scene,this.camera)}renderToCanvas(e,t){const n=this.renderer,i=n.getPixelRatio(),r=this.container.clientWidth,o=this.container.clientHeight;n.setPixelRatio(1),n.setSize(t,t,!1),n.render(this.scene,e);const a=document.createElement("canvas");return a.width=t,a.height=t,a.getContext("2d").drawImage(n.domElement,0,0),n.setPixelRatio(i),n.setSize(r,o,!1),n.render(this.scene,this.camera),a}dispose(){this._animationId&&cancelAnimationFrame(this._animationId),this._resizeObserver?.disconnect(),this.controls.dispose(),this.skybox.dispose(),this.renderer.dispose()}}const Sv=["Basic","Matallic","Metta","Transparent"],Ev=["GrayBead","GoldBead","ColorfulBead"],eo=[{index:0,key:"Basic",label:"Basic",desc:"基础 · 哑光塑料",shader:"Shaders/Master_Bead_Shader",materialName:"Bead_Type0",currency:"GrayBead",roughness:.6,metallic:0,ior:1.45,thickness:1,transparent:!1},{index:1,key:"Matallic",label:"Matallic",desc:"金属 · 反射环境色",shader:"Shaders/Master_Bead_Shader",materialName:"Bead_Type1",currency:"GoldBead",roughness:.35,metallic:1,ior:1.45,thickness:1,transparent:!1},{index:2,key:"Metta",label:"Metta",desc:"陶瓷 · 高粗糙",shader:"Shaders/Master_Bead_Shader",materialName:"Bead_Type2",currency:"GoldBead",roughness:.85,metallic:0,ior:1.45,thickness:1,transparent:!1},{index:3,key:"Transparent",label:"Transparent",desc:"玻璃 · Alpha 混合 / ZWrite Off",shader:"Shaders/Master_Bead_Shader_Transparent",materialName:"Bead_Type3",currency:"GoldBead",roughness:.05,metallic:0,ior:1.45,thickness:1,transparent:!0}],Ja="#ffffff";function bv(s){return eo.find(e=>e.index===s)??eo[0]}function $o(){return eo.map(s=>({...s}))}function to(s,e,t){const n=s instanceof Ci?s:new Ci;return n.color.setStyle(e.color),n.metalness=t.metallic,n.roughness=t.roughness,n.opacity=t.transparent?e.alpha:1,n.transparent=t.transparent,n.depthWrite=!t.transparent,n.side=pn,n.needsUpdate=!0,n}function $c(s,e){const t=s instanceof qn?s:new qn;return t.color.setStyle(e.color),t.toneMapped=!1,t.needsUpdate=!0,t}function Tv(s){const e=s.replace("#","");return[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const wv=s=>s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);function uu(s,e=1){const[t,n,i]=Tv(s).map(wv);return[t,n,i,e]}const Jc="perler3d.bead-editor.v1",Qa=1;class Av{constructor(){this.beads=[],this.types=$o(),this._activeId=null,this._seq=0,this._listeners=new Set,this._restore(),this.beads.length===0?this.add():this.beads.some(e=>e.id===this._activeId)||(this._activeId=this.beads[0].id)}onChange(e){this._listeners.add(e)}_emit(){for(const e of this._listeners)e(this)}get activeId(){return this._activeId}get active(){return this.beads.find(e=>e.id===this._activeId)??null}get activeType(){return this.getTypeDef(this.active?.typeIndex??0)}getTypeDef(e){return this.types.find(t=>t.index===e)??this.types[0]}beadsOfType(e){return this.beads.filter(t=>t.typeIndex===e)}add(e={}){const t={id:`b${++this._seq}`,name:e.name??this._nextName(),color:e.color??Ja,alpha:e.alpha??Qa,typeIndex:e.typeIndex??0};return this.beads.push(t),this._activeId=t.id,this._commit(),t}duplicate(e){const t=this.beads.find(n=>n.id===e);return t?this.add({color:t.color,alpha:t.alpha,typeIndex:t.typeIndex}):null}remove(e){const t=this.beads.findIndex(n=>n.id===e);if(!(t<0)){if(this.beads.splice(t,1),this.beads.length===0){this.add();return}this._activeId===e&&(this._activeId=this.beads[Math.min(t,this.beads.length-1)].id),this._commit()}}update(e,t){const n=this.beads.find(i=>i.id===e);n&&(t.name!==void 0&&(n.name=Cv(t.name)),t.color!==void 0&&(n.color=eh(t.color)),t.alpha!==void 0&&(n.alpha=Qc(t.alpha)),t.typeIndex!==void 0&&(n.typeIndex=t.typeIndex),this._commit())}setActive(e){!this.beads.some(t=>t.id===e)||this._activeId===e||(this._activeId=e,this._emit())}updateType(e,t){const n=this.types.find(i=>i.index===e);if(n){for(const i of["roughness","metallic","ior","thickness"])t[i]!==void 0&&(n[i]=Math.max(0,Number(t[i])||0));t.currency!==void 0&&(n.currency=t.currency),this._commit()}}resetType(e){const t=$o().find(n=>n.index===e);t&&(Object.assign(this.types.find(n=>n.index===e),{roughness:t.roughness,metallic:t.metallic,ior:t.ior,thickness:t.thickness,currency:t.currency}),this._commit())}_nextName(){let e=0;for(const t of this.beads){const n=/^bead_(\d+)$/.exec(t.name);n&&(e=Math.max(e,parseInt(n[1],10)))}return`bead_${e+1}`}_commit(){this._persist(),this._emit()}_persist(){try{localStorage.setItem(Jc,JSON.stringify({beads:this.beads,types:this.types,activeId:this._activeId,seq:this._seq}))}catch{}}_restore(){let e=null;try{e=localStorage.getItem(Jc)}catch{return!1}if(!e)return!1;try{const t=JSON.parse(e);if(!Array.isArray(t.beads))return!1;this.beads=t.beads.map(n=>({id:n.id,name:n.name,color:eh(n.color),alpha:Qc(n.alpha??Qa),typeIndex:Number.isInteger(n.typeIndex)?n.typeIndex:0}));for(const n of t.types??[]){const i=this.types.find(o=>o.index===n.index);if(!i)continue;const r=$o().find(o=>o.index===n.index);i.roughness=Number.isFinite(n.roughness)?n.roughness:r.roughness,i.metallic=Number.isFinite(n.metallic)?n.metallic:r.metallic,i.ior=Number.isFinite(n.ior)?n.ior:r.ior,i.thickness=Number.isFinite(n.thickness)?n.thickness:r.thickness,n.currency&&(i.currency=n.currency)}return this._activeId=t.activeId??null,this._seq=Number.isInteger(t.seq)?t.seq:this.beads.length,!0}catch{return!1}}toConfig(e={}){const t={};for(const n of Sv){const i=this.types.find(o=>o.key===n),r=this.beadsOfType(i.index);t[n]={currency:i.currency,_material:Rv(i),beads:r.map(o=>({name:o.name,color:o.color.toUpperCase(),_alpha:Ti(o.alpha),_baseColor:uu(o.color,o.alpha).map(Ti),_icon:`Beads/${o.name}.png`}))}}return t._meta={generator:"perlerBeadEdit",generatedAt:new Date().toISOString(),source:"Unity 工程 perlerSteam (Assets/Scripts/Perler/BeadMaterialBank.cs + Resources/Shaders/Master_Bead_Shader*)",colorSpace:"beads[].color 为 sRGB hex；_baseColor 为写入 _BaseColor 的线性 RGBA（GammaToLinearSpace）",shaderNote:"_MaterialType/_IOR/_Thickness 在 Master_Bead_Shader 内被赋值但 surf() 未读取，不影响画面",consumerNote:"perlerSteam 已删除 Resources/Configs/bead_config.json（颜色改为 BeadColors.cs 硬编码 40 色 + 本地化 color.<HEX>），本文件目前无运行时消费者",...e},t}}function Rv(s){return{_MaterialType:s.index,shader:s.shader,materialName:s.materialName,_Roughness:Ti(s.roughness),_Smoothness:Ti(1-s.roughness),_Metallic:Ti(s.metallic),_IOR:Ti(s.ior),_Thickness:Ti(s.thickness),_Transparent:s.transparent}}function Ti(s){return Math.round(s*1e4)/1e4}function Qc(s){const e=Number(s);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):Qa}function eh(s){if(typeof s!="string")return Ja;const e=/^#?([0-9a-fA-F]{6})$/.exec(s.trim());return e?`#${e[1].toLowerCase()}`:Ja}function Cv(s){const e=String(s).trim().replace(/[\\/:*?"<>|]/g,"_");return e.length>0?e:"bead"}const Tt={size:256,inset:13,radius:44,beadCount:1e3,beadScale:.05,tiltDeg:90,margin:0,dropCandidates:100,dropEpsilon:0,reposeSlope:.35,camera:{fov:38,tiltDeg:1,azimuthDeg:0,ndcLimit:1}},En=1,Iv=Tt.radius/(Tt.size-Tt.inset*2)*En,th=8,Lv=3;class Pv{constructor(){this.scene=new G_,this._groundMat=$c(null,{color:"#ffffff"}),this._ground=new Lt(new Js(th,th),this._groundMat),this._ground.rotation.x=-Math.PI/2,this._ground.layers.set(ui.icon),this.scene.add(this._ground),this.scatter=new Pt,this.scene.add(this.scatter),this.preview=new Pt,this.scene.add(this.preview),this._beadMat=to(null,{color:"#ffffff",alpha:1},bv(0)),this._template=null,this._templateSize=null,this._heightField=null,this._layoutSeed=null,this.beadColor="#ffffff";const e=Tt.camera;this.iconCamera=new Gt(e.fov,1,.05,100),this.iconCamera.layers.set(ui.icon)}setTemplate(e){this._template=Fv(e.root.clone(!0)),this._templateSize=new Wt().setFromObject(this._template).getSize(new U),this._layoutSeed=null,this._rebuild(e.name)}setBead(e,t){to(this._beadMat,e,t),$c(this._groundMat,e),this.beadColor=e.color,this._template&&this._layoutSeed!==e.name&&this._rebuild(e.name)}setPreviewVisible(e){this.preview.visible=e}setEnvIntensity(e){this._beadMat.envMapIntensity=e,this._beadMat.needsUpdate=!0}framePreview(e,t){const i=1.3847999999999998;t.set(0,.5,0),e.position.set(i,.5+i,i),e.near=.01,e.far=50,e.updateProjectionMatrix(),e.lookAt(t)}_layout(e=""){const t=this._template,n=this._templateSize;if(!t||!n)return;const i=Ov(Bv(e)),r=Tt.beadScale,o=Et.degToRad(Tt.tiltDeg),a=new U(n.x/2*r,n.y/2*r,n.z/2*r),l=En/2-Tt.margin,c=r/Lv,u=c/2,h=Math.ceil(En/c)+1,f=new Float32Array(h*h);this._heightField=f;const p=(I,L)=>{const F=Math.floor((I-L-c/2+En/2)/c),R=Math.ceil((I+L+c/2+En/2)/c);return[Math.max(0,F),Math.min(h-1,R)]},_=I=>-En/2+(I+.5)*c,x=new Ct,g=new Ee,m=new Ee,w=new U,S=new U,M=new U,N=new U;this._clearGroup(this.scatter);for(let I=0;I<Tt.beadCount;I++){x.set((i()*2-1)*o,i()*Math.PI*2,(i()*2-1)*o),g.makeRotationFromEuler(x),m.copy(g).transpose();const L=Dv(g,a),F=Math.max(0,l-L.x),R=Math.max(0,l-L.z);M.set(0,1,0).applyMatrix4(g),N.set(0,a.y,0).applyMatrix4(g),S.set(0,1,0).applyMatrix4(m);const b=(V,ce,me=0)=>{w.set(V,0,ce).applyMatrix4(m);let be=-1/0,Re=1/0;for(let ke=0;ke<3;ke++){const J=w.getComponent(ke),re=S.getComponent(ke),ue=a.getComponent(ke)+(ke===1?0:me);if(Math.abs(re)<1e-6){if(Math.abs(J)>ue)return!1;continue}let he=(-ue-J)/re,Me=(ue-J)/re;if(he>Me){const Ne=he;he=Me,Me=Ne}if(he>be&&(be=he),Me<Re&&(Re=Me),be>Re)return!1}return!0},D=(V,ce)=>{const[me,be]=p(V,L.x),[Re,ke]=p(ce,L.z);let J=0;for(let re=me;re<=be;re++){const ue=_(re);for(let he=Re;he<=ke;he++){if(!b(ue-V,_(he)-ce))continue;const Me=f[he*h+re];Me>J&&(J=Me)}}return J},q=(V,ce,me)=>{const be=V+N.x,Re=me+N.y,ke=ce+N.z,[J,re]=p(V,L.x),[ue,he]=p(ce,L.z);for(let Me=J;Me<=re;Me++){const Ne=_(Me);for(let He=ue;He<=he;He++){const ot=_(He);if(!b(Ne-V,ot-ce,u))continue;const Ye=Re-(M.x*(Ne-be)+M.z*(ot-ke))/M.y,ut=He*h+Me;Ye>f[ut]&&(f[ut]=Ye)}}};let G=null;for(let V=0;V<Tt.dropCandidates;V++){const ce=(i()-.5)*2*F,me=(i()-.5)*2*R;if(!Uv(ce,me,L.x,L.z,En/2,Iv))continue;const be=D(ce,me),Re=be+Tt.reposeSlope*Math.hypot(ce,me);(!G||Re<G.score)&&(G={x:ce,z:me,support:be,score:Re})}G||(G={x:0,z:0,support:D(0,0)});const Q=G.support+L.y+Tt.dropEpsilon;q(G.x,G.z,Q);const ee=new Pt;ee.position.set(G.x,Q,G.z),ee.scale.setScalar(r);const K=new Pt;K.rotation.copy(x);const ne=t.clone();ne.position.set(0,-a.y/r,0),K.add(ne),ee.add(K),this._adopt(ne,ui.icon),this.scatter.add(ee)}this._layoutSeed=e,this._fitIconCamera()}_buildPreview(){this._clearGroup(this.preview);const e=this._template.clone();this._adopt(e,ui.preview),this.preview.add(e)}_rebuild(e){this._buildPreview(),this._layout(e)}_adopt(e,t){e.traverse(n=>{n.isMesh&&(n.material=this._beadMat,n.castShadow=!1,n.receiveShadow=!1,n.layers.set(t))})}_clearGroup(e){for(const t of[...e.children])e.remove(t)}_fitIconCamera(){const e=this.iconCamera,t=Tt.camera,n=[],i=new Wt;for(const p of this.scatter.children){i.setFromObject(p);for(const _ of nh(i))n.push(_)}if(n.length===0)for(const p of nh(new Wt(new U(-En/2,0,-En/2),new U(En/2,0,En/2))))n.push(p);const r=n,o=Et.degToRad(t.tiltDeg),a=Et.degToRad(t.azimuthDeg),l=new U(Math.sin(o)*Math.sin(a),Math.cos(o),Math.sin(o)*Math.cos(a)).normalize(),c=new Wt().setFromPoints(r).getCenter(new U),u=p=>Math.tan(Et.degToRad(e.fov)/2)*p,h=p=>{e.position.copy(c).addScaledVector(l,p),e.lookAt(c),e.updateMatrixWorld(!0),e.updateProjectionMatrix()};let f=1;for(let p=0;p<4;p++){let _=.05,x=60;for(let M=0;M<48;M++){const N=(_+x)/2;h(N),ih(e,r).maxAbs>t.ndcLimit?_=N:x=N}f=x,h(f);const g=ih(e,r),m=u(f),w=new U().setFromMatrixColumn(e.matrixWorld,0),S=new U().setFromMatrixColumn(e.matrixWorld,1);c.addScaledVector(w,g.centerX*m).addScaledVector(S,g.centerY*m)}e.near=Math.max(.02,f*.1),e.far=f*4,h(f)}dispose(){this._clearGroup(this.scatter),this._clearGroup(this.preview),this._ground.geometry.dispose(),this._groundMat.dispose(),this._beadMat.dispose()}}function Dv(s,e){const t=s.elements;return{x:Math.abs(t[0])*e.x+Math.abs(t[4])*e.y+Math.abs(t[8])*e.z,y:Math.abs(t[1])*e.x+Math.abs(t[5])*e.y+Math.abs(t[9])*e.z,z:Math.abs(t[2])*e.x+Math.abs(t[6])*e.y+Math.abs(t[10])*e.z}}function nh(s){const e=[];for(const t of[s.min.x,s.max.x])for(const n of[s.min.y,s.max.y])for(const i of[s.min.z,s.max.z])e.push(new U(t,n,i));return e}function Uv(s,e,t,n,i,r){for(const o of[-t,t])for(const a of[-n,n])if(!Nv(s+o,e+a,i,r))return!1;return!0}function Nv(s,e,t,n){const i=Math.abs(s),r=Math.abs(e);if(i>t||r>t)return!1;const o=t-n;if(i<=o||r<=o)return!0;const a=i-o,l=r-o;return a*a+l*l<=n*n}function ih(s,e){let t=1/0,n=-1/0,i=1/0,r=-1/0;const o=new U;for(const a of e)o.copy(a).project(s),o.x<t&&(t=o.x),o.x>n&&(n=o.x),o.y<i&&(i=o.y),o.y>r&&(r=o.y);return{minX:t,maxX:n,minY:i,maxY:r,maxAbs:Math.max(Math.abs(t),Math.abs(n),Math.abs(i),Math.abs(r)),centerX:(t+n)/2,centerY:(i+r)/2}}function Fv(s){const e=new Pt;e.add(s);const t=new Wt().setFromObject(s).getSize(new U),n=Math.max(t.x,t.z),i=n>0?1/n:1;e.scale.setScalar(i),e.updateMatrixWorld(!0);const r=new Wt().setFromObject(e),o=r.getCenter(new U);return s.position.x-=o.x/i,s.position.z-=o.z/i,s.position.y-=r.min.y/i,e.updateMatrixWorld(!0),e}function Ov(s){let e=s>>>0;return function(){e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Bv(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const ht={cellSize:2.6,spacing:0,tileY:-2,beadY:0,defaultTiles:1,defaultCols:32,defaultRows:32,maxTiles:64,camera:{fov:100,minDistance:20,maxDistance:90,defaultDistance:80}};function kv(s=13421772,e=.4){const t=new Ci({color:s,roughness:.5,metalness:0,side:pn,transparent:!0,premultipliedAlpha:!0,opacity:e,depthWrite:!1});return t.name="perlergrid_degrated_transmission",t}class zv{constructor(e){this.scene=e,this.tileTemplate=null,this.beadTemplate=null,this.tiles=ht.defaultTiles,this.cols=ht.defaultCols,this.rows=ht.defaultRows,this.boardCells={cols:ht.defaultTiles,rows:ht.defaultTiles},this.boardGroup=new Pt,this.boardGroup.name="board",this.beadGroup=new Pt,this.beadGroup.name="board-beads",e.add(this.boardGroup,this.beadGroup),this._tileMat=kv(),this._beadMat=to(null,{color:"#ffffff",alpha:1},{roughness:.6,metallic:0,transparent:!1})}setTileTemplate(e){this.tileTemplate=e?{root:e.root,size:e.size}:null,this._rebuildBoard()}setBeadTemplate(e){this.beadTemplate=e?{root:e.root,size:e.size}:null,this._rebuildBeads()}setTileCount(e){this.tiles=Jo(e,1,ht.maxTiles,ht.defaultTiles),this.boardCells={cols:this.tiles,rows:this.tiles},this.boardGroup.visible&&this._rebuildBoard()}setBoardSize(e,t){this.cols=Jo(e,1,ht.maxTiles,ht.defaultCols),this.rows=Jo(t,1,ht.maxTiles,ht.defaultRows),this.boardCells={cols:this.cols,rows:this.rows},this._rebuildBoard(),this._rebuildBeads()}setBoardTilesMode(){this.boardCells={cols:this.tiles,rows:this.tiles},this._rebuildBoard()}setBeadStyle(e,t){to(this._beadMat,e,t),this._beadMat.needsUpdate=!0}setVisible(e,t){this.boardGroup.visible=e,this.beadGroup.visible=t,e&&this._rebuildBoard(),t&&this._rebuildBeads()}get extent(){const e=ht.cellSize+ht.spacing;let t=0,n=0;return this.boardGroup.visible&&(t=Math.max(t,this.boardCells.cols*e),n=Math.max(n,this.boardCells.rows*e)),this.beadGroup.visible&&(t=Math.max(t,this.cols*e),n=Math.max(n,this.rows*e)),t===0&&(t=this.tiles*e,n=this.tiles*e),{w:t,h:n}}setEnvIntensity(e){this._beadMat.envMapIntensity=e,this._tileMat.envMapIntensity=e,this._beadMat.needsUpdate=!0,this._tileMat.needsUpdate=!0}frameGameView(e,t,n=ht.camera.defaultDistance){const i=Et.clamp(n,ht.camera.minDistance,ht.camera.maxDistance);t.set(0,0,0),e.fov=ht.camera.fov,e.near=1,e.far=1e3,e.position.set(0,i,0),e.up.set(0,0,-1),e.updateProjectionMatrix(),e.lookAt(t)}fitAt(e){return Math.tan(Et.degToRad(ht.camera.fov/2))*e*2}_rebuildBoard(){if(Fr(this.boardGroup),!this.tileTemplate)return;const e=ht.cellSize+ht.spacing,t=this.boardCells.cols,n=this.boardCells.rows,i=-((t-1)*e)/2,r=-((n-1)*e)/2,o=[];for(let a=0;a<t;a++)for(let l=0;l<n;l++)o.push(new U(i+a*e,ht.tileY,-(r+l*e)));for(const a of rh(this.tileTemplate.root,o,{align:sh(this.tileTemplate.root),material:this._tileMat}))this.boardGroup.add(a)}_rebuildBeads(){if(Fr(this.beadGroup),!this.beadTemplate)return;const e=ht.cellSize+ht.spacing,t=-((this.cols-1)*e)/2,n=-((this.rows-1)*e)/2,i=this.beadTemplate.size.x>.01?this.beadTemplate.size.x:1,r=sh(this.beadTemplate.root,ht.cellSize/i),o=[];for(let a=0;a<this.cols;a++)for(let l=0;l<this.rows;l++)o.push(new U(t+a*e,ht.beadY,-(n+l*e)));for(const a of rh(this.beadTemplate.root,o,{align:r,material:this._beadMat}))this.beadGroup.add(a)}dispose(){Fr(this.boardGroup),Fr(this.beadGroup),this.scene.remove(this.boardGroup,this.beadGroup),this._tileMat.dispose(),this._beadMat.dispose()}}function Jo(s,e,t,n){const i=Math.round(Number(s));return Number.isFinite(i)?Math.min(t,Math.max(e,i)):n}function du(s){s.updateMatrixWorld(!0);const e=new Ee().copy(s.matrixWorld).invert(),t=[];return s.traverse(n=>{n.isMesh&&t.push({mesh:n,local:new Ee().multiplyMatrices(e,n.matrixWorld)})}),t}function Hv(s){const e=new Wt,t=new U;for(const{mesh:i,local:r}of du(s)){i.geometry.computeBoundingBox();const o=i.geometry.boundingBox;if(o)for(const a of[o.min.x,o.max.x])for(const l of[o.min.y,o.max.y])for(const c of[o.min.z,o.max.z])e.expandByPoint(t.set(a,l,c).applyMatrix4(r))}if(e.isEmpty())return new Be(0,0);const n=e.getCenter(new U);return new Be(n.x,n.z)}function sh(s,e=1){const t=Hv(s);return new Ee().makeScale(e,e,e).premultiply(new Ee().makeTranslation(-t.x*e,0,-t.y*e))}function rh(s,e,{align:t,material:n}){const i=[];for(const{mesh:r,local:o}of du(s)){const a=new Kh(r.geometry,n,e.length);a.name=`${s.name||"template"}:${r.name||"mesh"}`,a.frustumCulled=!1,a.layers.set(ui.preview);const l=new Ee,c=new Ee;for(let u=0;u<e.length;u++)c.makeTranslation(e[u].x,e[u].y,e[u].z),l.multiplyMatrices(c,t).multiply(o),a.setMatrixAt(u,l);a.instanceMatrix.needsUpdate=!0,i.push(a)}return i}function Fr(s){for(const e of[...s.children])s.remove(e),e.isInstancedMesh&&e.dispose()}function oh(s,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ha||e===Lh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ha)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Vv extends _n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ax(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ls.extractUrlBase(e);o=ls.resolveURL(c,this.path)}else o=ls.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ys(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fu){try{o[Qe.KHR_BINARY_GLTF]=new lx(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Mx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new Xv;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new cx(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new hx;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new ux;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wv{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Za(u),c.distance=h;break;case"spot":c=new iu(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Xv{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(i)}}class jv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Yv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class qv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Kv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Zv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class $v{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Jv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}}class Qv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,lt)),Promise.all(r)}}class tx{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class sx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ox{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class ax{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of h){const x=new Ee,g=new U,m=new kt,w=new U(1,1,1),S=new Kh(_.geometry,_.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&w.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(g,m,w));for(const M in l)if(M==="_COLOR_0"){const N=l[M];S.instanceColor=new Xa(N.array,N.itemSize,N.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);_t.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const fu="glTF",Ds=12,ah={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,r=new DataView(e,Ds);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ah.JSON){const c=new Uint8Array(e,Ds+o,a);this.content=n.decode(c)}else if(l===ah.BIN){const c=Ds+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=el[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=el[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=cs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const x=p.attributes[_],g=l[_];g!==void 0&&(x.normalized=g)}h(p)},a,c,Xt,f)})})}}class hx{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ux{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class pu extends Qs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,_=e*c,x=_-c,g=-2*p+3*f,m=p-f,w=1-g,S=m-f+h;for(let M=0;M!==a;M++){const N=o[x+M+a],I=o[x+M+l]*u,L=o[_+M+a],F=o[_+M]*u;r[M]=w*N+S*I+g*L+m*F}return r}}const dx=new kt;class fx extends pu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return dx.fromArray(r).normalize().toArray(r),r}}const fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lh={9728:Qt,9729:zt,9984:Mh,9985:zr,9986:Us,9987:Cn},ch={33071:gn,33648:Kr,10497:fi},Qo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},el={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ci({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function Mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function _x(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vx(s){let e;const t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ta(t.attributes):e=s.indices+":"+ta(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ta(s.targets[n]);return e}function ta(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function tl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yx=new Ee;class Mx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new nu(this.options.manager):this.textureLoader=new L0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ys(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Mi(r,a,i),Gn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ls.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Qo[i.type],a=cs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ht(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Qo[i.type],c=cs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let x,g;if(p&&p!==h){const m=Math.floor(f/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let S=t.cache.get(w);S||(x=new c(a,m*p,i.count*p/u),S=new W_(x,p/u),t.cache.add(w,S)),g=new ml(S,l,f%p/u,_)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new Ht(x,l,_);if(i.sparse!==void 0){const m=Qo.SCALAR,w=cs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,N=new w(o[1],S,i.sparse.count*m),I=new c(o[2],M,i.sparse.count*l);a!==null&&(g=new Ht(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let L=0,F=N.length;L<F;L++){const R=N[L];if(g.setX(R,I[L*l]),l>=2&&g.setY(R,I[L*l+1]),l>=3&&g.setZ(R,I[L*l+2]),l>=4&&g.setW(R,I[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=lh[f.magFilter]||zt,u.minFilter=lh[f.minFilter]||Cn,u.wrapS=ch[f.wrapS]||fi,u.wrapT=ch[f.wrapT]||fi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==zt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(x){const g=new Dt(x);g.needsUpdate=!0,f(g)}),t.load(ls.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Gn(h,o),h.userData.mimeType=o.mimeType||xx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new es,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new as,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ci}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const h=i[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Xt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,lt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);const u=r.alphaMode||ea.OPAQUE;if(u===ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ea.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qn){const h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Xt)}return r.emissiveTexture!==void 0&&o!==qn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,lt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Gn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Mi(i,h,r),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=vx(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=hh(new Vt,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?mx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],g=o[p];let m;const w=c[p];if(g.mode===fn.TRIANGLES||g.mode===fn.TRIANGLE_STRIP||g.mode===fn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new qh(x,w):new Lt(x,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===fn.TRIANGLE_STRIP?m.geometry=oh(m.geometry,Lh):g.mode===fn.TRIANGLE_FAN&&(m.geometry=oh(m.geometry,Ha));else if(g.mode===fn.LINES)m=new ja(x,w);else if(g.mode===fn.LINE_STRIP)m=new co(x,w);else if(g.mode===fn.LINE_LOOP)m=new q_(x,w);else if(g.mode===fn.POINTS)m=new Yr(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&_x(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Gn(m,r),g.extensions&&Mi(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Mi(i,h[0],r),h[0];const f=new Pt;r.extensions&&Mi(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ee;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lo(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const p=i.channels[h],_=i.samplers[p.sampler],x=p.target,g=x.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,w=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",w)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],x=h[3],g=h[4],m=[];for(let w=0,S=f.length;w<S;w++){const M=f[w],N=p[w],I=_[w],L=x[w],F=g[w];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const R=n._createAnimationTracks(M,N,I,L,F);if(R)for(let b=0;b<R.length;b++)m.push(R[b])}return new tu(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,yx)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new $r:c.length>1?u=new Pt:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Gn(u,r),r.extensions&&Mi(n,u,r),r.matrix!==void 0){const h=new Ee;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pt;n.name&&(r.name=i.createUniqueName(n.name)),Gn(r,n),n.extensions&&Mi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof sn||f instanceof Dt)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];li[r.path]===li.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(li[r.path]){case li.weights:c=Ii;break;case li.rotation:c=pi;break;case li.position:case li.scale:c=Li;break;default:switch(n.itemSize){case 1:c=Ii;break;case 2:case 3:default:c=Li;break}break}const u=i.interpolation!==void 0?px[i.interpolation]:Ws,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+li[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=tl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof pi?fx:pu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sx(s,e,t){const n=e.attributes,i=new Wt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=tl(cs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const x=tl(cs[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new In;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function hh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=el[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Gn(s,e),Sx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gx(s,e.targets,t):s})}function mu(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function Ex(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=r[a-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[a]=l}return i}function bx(s,e,t,n){const i=mu(s,n,e),r=Ex(i,n,s,e),o=new nt(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function Tx(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let f=0;for(let p=0;p<h;++p){const _=c[p+1],x=l[h-p];a[h][p]=_+x;const g=a[p][h-1]/a[h][p];a[p][h]=f+_*g,f=x*g}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,p=1;const _=[];for(let x=0;x<=t;++x)_[x]=r.slice(0);_[0][0]=1;for(let x=1;x<=n;++x){let g=0;const m=h-x,w=t-x;h>=x&&(_[p][0]=_[f][0]/a[w+1][m],g=_[p][0]*a[m][w]);const S=m>=-1?1:-m,M=h-1<=w?x-1:t-h;for(let I=S;I<=M;++I)_[p][I]=(_[f][I]-_[f][I-1])/a[w+1][m+I],g+=_[p][I]*a[m+I][w];h<=w&&(_[p][x]=-_[f][x-1]/a[w+1][h],g+=_[p][x]*a[h][w]),o[x][h]=g;const N=f;f=p,p=N}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function wx(s,e,t,n,i){const r=i<s?i:s,o=[],a=mu(s,n,e),l=Tx(a,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-s].clone().multiplyScalar(l[u][0]);for(let f=1;f<=s;++f)h.add(c[a-s+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new nt(0,0,0);return o}function Ax(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function Rx(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new U(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(Ax(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function Cx(s,e,t,n,i){const r=wx(s,e,t,n,i);return Rx(r)}class Ix extends K_{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new nt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new U){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=bx(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new U){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Cx(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new nt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let Ze,wt,$t;class Lx extends _n{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?ls.extractUrlBase(e):r.path,a=new ys(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(Ox(e))Ze=new Fx().parse(e);else{const i=vu(e);if(!Bx(i))throw new Error("THREE.FBXLoader: Unknown format.");if(dh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+dh(i));Ze=new Nx().parse(i)}const n=new nu(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Px(n,this.manager).parse(Ze)}}class Px{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){wt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new Dx().parse(i);return this.parseScene(i,r,n),$t}parseConnections(){const e=new Map;return"Connections"in Ze&&Ze.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ze.Objects){const n=Ze.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Ze.Objects){const n=Ze.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?fi:gn,n.wrapT=a===0?fi:gn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Dt;const o=r.path;o||r.setPath(this.textureLoader.path);const a=wt.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in Ze.Objects){const n=Ze.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!wt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new qr;break;case"lambert":a=new f0;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new qr;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Xe.toWorkingColorSpace(new Ie().fromArray(e.Diffuse.value),lt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Xe.toWorkingColorSpace(new Ie().fromArray(e.DiffuseColor.value),lt)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Xe.toWorkingColorSpace(new Ie().fromArray(e.Emissive.value),lt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Xe.toWorkingColorSpace(new Ie().fromArray(e.EmissiveColor.value),lt)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Xe.toWorkingColorSpace(new Ie().fromArray(e.Specular.value),lt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Xe.toWorkingColorSpace(new Ie().fromArray(e.SpecularColor.value),lt));const r=this;return wt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=lt);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=lt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Hs,i.envMap.colorSpace=lt);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=lt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ze.Objects&&t in Ze.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=wt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ze.Objects){const n=Ze.Objects.Deformer;for(const i in n){const r=n[i],o=wt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ee().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=wt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){$t=new Pt;const i=this.parseModels(e.skeletons,t,n),r=Ze.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),wt.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&$t.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),$t.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=_u(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new Ux().parse();$t.children.length===1&&$t.children[0].isGroup&&($t.children[0].animations=a,$t=$t.children[0]),$t.animations=a}parseModels(e,t,n){const i=new Map,r=Ze.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=wt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new $r;break;case"Null":default:u=new Pt;break}u.name=l.attrName?rt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=r;r=new $r,r.matrixWorld.copy(c.transformLink),r.name=i?rt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Ze.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new _t;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Gt(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new _t;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new _t;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Ze.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new _t;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Xe.toWorkingColorSpace(new Ie().fromArray(n.Color.value),lt));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Za(r,o,a,l);break;case 1:t=new yl(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Et.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Et.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new iu(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Za(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new qr({name:_n.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new qh(r,o),i.normalizeSkinWeights()):i=new Lt(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new as({name:_n.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new co(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ks(t.RotationOrder.value):n.eulerOrder=Ks(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&wt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Ze.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),$t.add(e.target)):e.lookAt(new U().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];wt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;wt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new lo(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ze.Objects){const t=Ze.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ee().fromArray(r.Matrix.a)}):e[i.Node]=new Ee().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Ze){if("AmbientColor"in Ze.GlobalSettings){const e=Ze.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Ie().setRGB(t,n,i,lt);$t.add(new I0(r,1))}}"UnitScaleFactor"in Ze.GlobalSettings&&($t.userData.unitScaleFactor=Ze.GlobalSettings.UnitScaleFactor.value)}}}class Dx{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ze.Objects){const n=Ze.Objects.Geometry;for(const i in n){const r=wt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return Ze.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ks(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=_u(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Vt;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new vt(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new vt(a.colors,3)),t&&(r.setAttribute("skinIndex",new ul(a.weightsIndices,4)),r.setAttribute("skinWeight",new vt(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new je().getNormalMatrix(i),u=new vt(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new vt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(p,_){let x,g=!1;p<0&&(p=p^-1,g=!0);let m=[],w=[];if(o.push(p*3,p*3+1,p*3+2),e.color){const S=Or(_,n,p,e.color);l.push(S[0],S[1],S[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(S){w.push(S.weight),m.push(S.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const S=[0,0,0,0],M=[0,0,0,0];w.forEach(function(N,I){let L=N,F=m[I];M.forEach(function(R,b,D){if(L>R){D[b]=L,L=R;const q=S[b];S[b]=F,F=q}})}),m=S,w=M}for(;w.length<4;)w.push(0),m.push(0);for(let S=0;S<4;++S)u.push(w[S]),h.push(m[S])}if(e.normal){const S=Or(_,n,p,e.normal);a.push(S[0],S[1],S[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=Or(_,n,p,e.material)[0],x<0&&(f.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(S,M){const N=Or(_,n,p,S);c[M]===void 0&&(c[M]=[]),c[M].push(N[0]),c[M].push(N[1])}),i++,g&&(f.genFace(t,e,o,x,a,l,c,u,h,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new U(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new U(0,1,0):new U(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new Be(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,u){let h;if(u>3){const f=[],p=t.baseVertexPositions||t.vertexPositions;for(let m=0;m<n.length;m+=3)f.push(new U(p[n[m]],p[n[m+1]],p[n[m+2]]));const{tangent:_,bitangent:x}=this.getNormalTangentAndBitangent(f),g=[];for(const m of f)g.push(this.flattenVertex(m,_,x));h=_l.triangulateShape(g,[])}else h=[[0,1,2]];for(const[f,p,_]of h)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),e.vertex.push(t.vertexPositions[n[_*3]]),e.vertex.push(t.vertexPositions[n[_*3+1]]),e.vertex.push(t.vertexPositions[n[_*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.vertexWeights.push(l[_*4]),e.vertexWeights.push(l[_*4+1]),e.vertexWeights.push(l[_*4+2]),e.vertexWeights.push(l[_*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3]),e.weightsIndices.push(c[_*4]),e.weightsIndices.push(c[_*4+1]),e.weightsIndices.push(c[_*4+2]),e.weightsIndices.push(c[_*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2]),e.colors.push(o[_*3]),e.colors.push(o[_*3+1]),e.colors.push(o[_*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2]),e.normal.push(r[_*3]),e.normal.push(r[_*3+1]),e.normal.push(r[_*3+2])),t.uv&&t.uv.forEach(function(x,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][p*2]),e.uvs[g].push(a[g][p*2+1]),e.uvs[g].push(a[g][_*2]),e.uvs[g].push(a[g][_*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ze.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let x=0;x<c.length;x++){const g=c[x]*3;h[g]=l[x*3],h[g+1]=l[x*3+1],h[g+2]=l[x*3+2]}const f={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},p=this.genBuffers(f),_=new vt(p.vertex,3);_.name=r||n.attrName,_.applyMatrix4(i),e.morphAttributes.position.push(_)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Ie;o<i.length;o+=4)a.fromArray(i,o),Xe.toWorkingColorSpace(a,lt),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Vt;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new nt().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new Ix(n,i,r,a,l).getPoints(r.length*12);return new Vt().setFromPoints(u)}}class Ux{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Ze.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ze.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Ze.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(kx),values:t[n].KeyValueFloat.a},r=wt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ze.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=wt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=wt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Ze.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:f.attrName?rt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};$t.traverse(function(_){_.ID===f.id&&(p.transform=_.matrix,_.userData.transformData&&(p.eulerOrder=_.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Ee),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),r[c]=p}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=wt.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,f=wt.get(h).parents[0].ID,p=wt.get(f).parents[0].ID,_=wt.get(p).parents[0].ID,x=Ze.Objects.Model[_],g={modelName:x.attrName?rt.sanitizeNodeName(x.attrName):"",morphName:Ze.Objects.Deformer[h].attrName};r[c]=g}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Ze.Objects.AnimationStack,n={};for(const i in t){const r=wt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new tu(e.name,-1,t)}generateTracks(e){const t=[];let n=new U,i=new U;if(e.transform&&e.transform.decompose(n,new kt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Li(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const f=this.interpolateRotations(t.x,t.y,t.z,r);o=f[0],a=f[1]}const l=Ks(0);n!==void 0&&(n=n.map(Et.degToRad),n.push(l),n=new Ct().fromArray(n),n=new kt().setFromEuler(n)),i!==void 0&&(i=i.map(Et.degToRad),i.push(l),i=new Ct().fromArray(i),i=new kt().setFromEuler(i).invert());const c=new kt,u=new Ct,h=[];if(!a||!o)return new pi(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)u.set(a[f],a[f+1],a[f+2],r),c.setFromEuler(u),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),f>2&&new kt().fromArray(h,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,f/3*4);return new pi(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=$t.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ii(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Et.degToRad(e.values[0])),o.push(Et.degToRad(t.values[0])),o.push(Et.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Et.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(Et.degToRad),f=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],p=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(p[0]>=180||p[1]>=180||p[2]>=180){const x=Math.max(...p)/180,g=new Ct(...c,i),m=new Ct(...h,i),w=new kt().setFromEuler(g),S=new kt().setFromEuler(m);w.dot(S)&&S.set(-S.x,-S.y,-S.z,-S.w);const M=e.times[a-1],N=e.times[a]-M,I=new kt,L=new Ct;for(let F=0;F<1;F+=1/x)I.copy(w.clone().slerp(S.clone(),F)),r.push(M+F*N),L.setFromQuaternion(I,i),o.push(L.x),o.push(L.y),o.push(L.z)}else r.push(e.times[a]),o.push(Et.degToRad(e.values[a])),o.push(Et.degToRad(t.values[a])),o.push(Et.degToRad(n.values[a]))}return[r,o]}}class Nx{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new gu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,u],Hx(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=ia(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ia(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ia(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class Fx{parse(e){const t=new uh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new gu;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=Os(new Uint8Array(e.getArrayBuffer(o))),l=new uh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class uh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class gu{add(e,t){this[e]=t}}function Ox(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===vu(s,0,e.length)}function Bx(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function dh(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function kx(s){return s/46186158e3}const zx=[];function Or(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return Vx(zx,n.buffer,r,o)}const na=new Ct,Zi=new U;function _u(s){const e=new Ee,t=new Ee,n=new Ee,i=new Ee,r=new Ee,o=new Ee,a=new Ee,l=new Ee,c=new Ee,u=new Ee,h=new Ee,f=new Ee,p=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Zi.fromArray(s.translation));const _=Ks(0);if(s.preRotation){const D=s.preRotation.map(Et.degToRad);D.push(_),t.makeRotationFromEuler(na.fromArray(D))}if(s.rotation){const D=s.rotation.map(Et.degToRad);D.push(s.eulerOrder||_),n.makeRotationFromEuler(na.fromArray(D))}if(s.postRotation){const D=s.postRotation.map(Et.degToRad);D.push(_),i.makeRotationFromEuler(na.fromArray(D)),i.invert()}s.scale&&r.scale(Zi.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Zi.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Zi.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Zi.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Zi.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const x=t.clone().multiply(n).multiply(i),g=new Ee;g.extractRotation(u);const m=new Ee;m.copyPosition(u);const w=m.clone().invert().multiply(u),S=g.clone().invert().multiply(w),M=r,N=new Ee;if(p===0)N.copy(g).multiply(x).multiply(S).multiply(M);else if(p===1)N.copy(g).multiply(S).multiply(x).multiply(M);else{const q=new Ee().scale(new U().setFromMatrixScale(h)).clone().invert(),G=S.clone().multiply(q);N.copy(g).multiply(x).multiply(G).multiply(M)}const I=c.clone().invert(),L=o.clone().invert();let F=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(I).multiply(a).multiply(o).multiply(r).multiply(L);const R=new Ee().copyPosition(F),b=u.clone().multiply(R);return f.copyPosition(b),F=f.clone().multiply(N),F.premultiply(u.invert()),F}function Ks(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function ia(s){return s.split(",").map(function(t){return parseFloat(t)})}function vu(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function Hx(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function Vx(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const Gx=/^[og]\s*(.+)?/,Wx=/^mtllib /,Xx=/^usemtl /,jx=/^usemap /,fh=/\s+/,ph=new U,sa=new U,mh=new U,gh=new U,un=new U,Br=new Ie;function Yx(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;ph.fromArray(i,e),sa.fromArray(i,t),mh.fromArray(i,n),un.subVectors(mh,sa),gh.subVectors(ph,sa),un.cross(gh),un.normalize(),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),f=this.parseUVIndex(r,_),p=this.parseUVIndex(o,_),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class qx extends _n{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new ys(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Yx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(fh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Br.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),lt),t.colors.push(Br.r,Br.g,Br.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(fh),p=[];for(let x=0,g=f.length;x<g;x++){const m=f[x];if(m.length>0){const w=m.split("/");p.push(w)}}const _=p[0];for(let x=1,g=p.length-1;x<g;x++){const m=p[x],w=p[x+1];t.addFace(_[0],m[0],w[0],_[1],m[1],w[1],_[2],m[2],w[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=h;else for(let _=0,x=h.length;_<x;_++){const g=h[_].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&p.push(g[1])}t.addLineGeometry(f,p)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Gx.exec(c))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Xx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Wx.test(c))t.materialLibraries.push(c.substring(7).trim());else if(jx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Pt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new Vt;x.setAttribute("position",new vt(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new vt(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new vt(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new vt(u.uvs,2));const g=[];for(let w=0,S=h.length;w<S;w++){const M=h[w],N=M.name+"_"+M.smooth+"_"+_;let I=t.materials[N];if(this.materials!==null){if(I=this.materials.create(M.name),f&&I&&!(I instanceof as)){const L=new as;sn.prototype.copy.call(L,I),L.color.copy(I.color),I=L}else if(p&&I&&!(I instanceof es)){const L=new es({size:10,sizeAttenuation:!1});sn.prototype.copy.call(L,I),L.color.copy(I.color),L.map=I.map,I=L}}I===void 0&&(f?I=new as:p?I=new es({size:1,sizeAttenuation:!1}):I=new qr,I.name=M.name,I.flatShading=!M.smooth,I.vertexColors=_,t.materials[N]=I),g.push(I)}let m;if(g.length>1){for(let w=0,S=h.length;w<S;w++){const M=h[w];x.addGroup(M.groupStart,M.groupCount,w)}f?m=new ja(x,g):p?m=new Yr(x,g):m=new Lt(x,g)}else f?m=new ja(x,g[0]):p?m=new Yr(x,g[0]):m=new Lt(x,g[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){const a=new es({size:1,sizeAttenuation:!1}),l=new Vt;l.setAttribute("position",new vt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new vt(t.colors,3)),a.vertexColors=!0);const c=new Yr(l,a);r.add(c)}return r}}class Kx extends _n{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ys(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(_,u,x))return!1;return!0}function n(c,u,h){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function i(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,p,_,x=!1,g,m,w,S,M;for(let D=0;D<70;D++)u.getUint32(D,!1)==1129270351&&u.getUint8(D+4)==82&&u.getUint8(D+5)==61&&(x=!0,g=new Float32Array(h*3*3),m=u.getUint8(D+6)/255,w=u.getUint8(D+7)/255,S=u.getUint8(D+8)/255,M=u.getUint8(D+9)/255);const N=84,I=50,L=new Vt,F=new Float32Array(h*3*3),R=new Float32Array(h*3*3),b=new Ie;for(let D=0;D<h;D++){const q=N+D*I,G=u.getFloat32(q,!0),Q=u.getFloat32(q+4,!0),ee=u.getFloat32(q+8,!0);if(x){const K=u.getUint16(q+48,!0);(K&32768)===0?(f=(K&31)/31,p=(K>>5&31)/31,_=(K>>10&31)/31):(f=m,p=w,_=S)}for(let K=1;K<=3;K++){const ne=q+K*12,V=D*3*3+(K-1)*3;F[V]=u.getFloat32(ne,!0),F[V+1]=u.getFloat32(ne+4,!0),F[V+2]=u.getFloat32(ne+8,!0),R[V]=G,R[V+1]=Q,R[V+2]=ee,x&&(b.setRGB(f,p,_,lt),g[V]=b.r,g[V+1]=b.g,g[V+2]=b.b)}}return L.setAttribute("position",new Ht(F,3)),L.setAttribute("normal",new Ht(R,3)),x&&(L.setAttribute("color",new Ht(g,3)),L.hasColors=!0,L.alpha=M),L}function r(c){const u=new Vt,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let _=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+x+x+x,"g"),m=new RegExp("normal"+x+x+x,"g"),w=[],S=[],M=[],N=new U;let I,L=0,F=0,R=0;for(;(I=h.exec(c))!==null;){F=R;const b=I[0],D=(I=p.exec(b))!==null?I[1]:"";for(M.push(D);(I=f.exec(b))!==null;){let Q=0,ee=0;const K=I[0];for(;(I=m.exec(K))!==null;)N.x=parseFloat(I[1]),N.y=parseFloat(I[2]),N.z=parseFloat(I[3]),ee++;for(;(I=g.exec(K))!==null;)w.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),S.push(N.x,N.y,N.z),Q++,R++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),Q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const q=F,G=R-F;u.userData.groupNames=M,u.addGroup(q,G,L),L++}return u.setAttribute("position",new vt(w,3)),u.setAttribute("normal",new vt(S,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?i(l):r(o(e))}}const Zx={name:"perlerbead.glb",url:"models/perlerbead.glb"},$x={name:"perlergrid.glb",url:"models/perlergrid.glb"},Jx=["glb","gltf","fbx","obj","stl","stla","stlb"];class _h{constructor(e=Zx){this._default=e,this._loaders={gltf:new Vv,fbx:new Lx,obj:new qx,stl:new Kx},this.current=null,this._listeners=new Set}onChange(e){this._listeners.add(e)}_emit(){for(const e of this._listeners)e(this.current)}async loadFromFile(e){const t=e.name.split(".").pop().toLowerCase();if(!Jx.includes(t))throw new Error(`不支持的模型格式: .${t}`);const n=URL.createObjectURL(e);try{return await this._adopt(n,t,e.name)}finally{URL.revokeObjectURL(n)}}async loadDefault(){return this._adopt(this._default.url,"glb",this._default.name)}async _adopt(e,t,n){let i=await this._load(e,t);if(!(i instanceof Pt)){const a=new Pt;a.add(i),i=a}const r=new Wt().setFromObject(i).getSize(new U),o=Qx(i);return this.current={name:n,root:i,size:r,triangles:o,ext:t},this._emit(),this.current}async _load(e,t){switch(t){case"glb":case"gltf":return new Promise((n,i)=>this._loaders.gltf.load(e,r=>n(r.scene),void 0,i));case"fbx":return new Promise((n,i)=>this._loaders.fbx.load(e,n,void 0,i));case"obj":return new Promise((n,i)=>this._loaders.obj.load(e,n,void 0,i));case"stl":case"stla":case"stlb":return new Promise((n,i)=>this._loaders.stl.load(e,r=>n(new Lt(r,new Ci({flatShading:!0}))),void 0,i));default:throw new Error(`不支持的模型格式: .${t}`)}}}function Qx(s){let e=0;return s.traverse(t=>{if(!t.isMesh)return;const n=t.geometry;n.index?e+=n.index.count/3:n.attributes.position&&(e+=n.attributes.position.count/3)}),Math.floor(e)}function vh(s){s&&s.traverse(e=>{if(!e.isMesh)return;e.geometry?.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n?.dispose()})}class kr{constructor(e,t){this.viewport=e,this.stage=t}capture(){const e=this.viewport.renderToCanvas(this.stage.iconCamera,Tt.size),t=e.getContext("2d");return ey(t,this.stage.beadColor),ty(t),e}static fileName(e){return`${e.name}.png`}}function ey(s,e){const{size:t,inset:n,radius:i}=Tt;s.save(),s.globalCompositeOperation="destination-over",s.fillStyle=e,s.beginPath(),xu(s,n,n,t-n*2,t-n*2,i),s.fill(),s.restore()}function ty(s){const{size:e,inset:t,radius:n}=Tt;s.save(),s.globalCompositeOperation="destination-in",s.fillStyle="#000",s.beginPath(),xu(s,t,t,e-t*2,e-t*2,n),s.fill(),s.restore()}function xu(s,e,t,n,i,r){const o=Math.min(r,n/2,i/2);s.moveTo(e+o,t),s.arcTo(e+n,t,e+n,t+i,o),s.arcTo(e+n,t+i,e,t+i,o),s.arcTo(e,t+i,e,t,o),s.arcTo(e,t,e+n,t,o),s.closePath()}const ny=(()=>{const s=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)t=t&1?3988292384^t>>>1:t>>>1;s[e]=t>>>0}return s})();function iy(s){let e=4294967295;for(let t=0;t<s.length;t++)e=ny[(e^s[t])&255]^e>>>8;return(e^4294967295)>>>0}function sy(s=new Date){const e=(s.getHours()<<11|s.getMinutes()<<5|s.getSeconds()>>1)&65535,t=(s.getFullYear()-1980<<9|s.getMonth()+1<<5|s.getDate())&65535;return{time:e,day:t}}function ry(s){const e=new TextEncoder,{time:t,day:n}=sy(),i=[],r=[];let o=0;for(const u of s){const h=e.encode(u.name),f=iy(u.data),p=u.data.length,_=new Uint8Array(30+h.length),x=new DataView(_.buffer);x.setUint32(0,67324752,!0),x.setUint16(4,20,!0),x.setUint16(6,2048,!0),x.setUint16(8,0,!0),x.setUint16(10,t,!0),x.setUint16(12,n,!0),x.setUint32(14,f,!0),x.setUint32(18,p,!0),x.setUint32(22,p,!0),x.setUint16(26,h.length,!0),x.setUint16(28,0,!0),_.set(h,30),i.push(_,u.data);const g=new Uint8Array(46+h.length),m=new DataView(g.buffer);m.setUint32(0,33639248,!0),m.setUint16(4,20,!0),m.setUint16(6,20,!0),m.setUint16(8,2048,!0),m.setUint16(10,0,!0),m.setUint16(12,t,!0),m.setUint16(14,n,!0),m.setUint32(16,f,!0),m.setUint32(20,p,!0),m.setUint32(24,p,!0),m.setUint16(28,h.length,!0),m.setUint16(30,0,!0),m.setUint16(32,0,!0),m.setUint16(34,0,!0),m.setUint16(36,0,!0),m.setUint32(38,0,!0),m.setUint32(42,o,!0),g.set(h,46),r.push(g),o+=_.length+p}const a=r.reduce((u,h)=>u+h.length,0),l=new Uint8Array(22),c=new DataView(l.buffer);return c.setUint32(0,101010256,!0),c.setUint16(8,s.length,!0),c.setUint16(10,s.length,!0),c.setUint32(12,a,!0),c.setUint32(16,o,!0),new Blob([...i,...r,l],{type:"application/zip"})}function nl(s,e){const t=URL.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function oy(s,e,t="application/json"){nl(new Blob([s],{type:t}),e)}function yu(s){return new Promise((e,t)=>{s.toBlob(n=>n?e(n):t(new Error("toBlob 失败")),"image/png")})}async function ay(s){const e=await yu(s);return new Uint8Array(await e.arrayBuffer())}class ly{constructor(){this._library=new Av,this._stage=new Pv,this._board=new zv(this._stage.scene),this._loader=new _h,this._boardLoader=new _h($x),this._iconExporter=null,this._iconCache=new Map,this._model=null,this._boardModel=null,this._mode="bead",this._scene={cols:ht.defaultCols,rows:ht.defaultRows,distance:ht.camera.defaultDistance,beadId:null,showBoard:!0,showBeads:!0},this._notifTimeout=null,this._syncHandle=0,this._envReady=!1,this._exporting=!1}async init(){const e=document.getElementById("canvas-container");if(!e)throw new Error("Viewport container not found");this._library.onChange(()=>this._scheduleSync()),this._loader.onChange(t=>this._onTemplateChanged(t)),this._boardLoader.onChange(t=>this._onBoardTemplateChanged(t)),this._viewport=new Mv(e,this._stage.scene),this._iconExporter=new kr(this._viewport,this._stage),this._wireToolbar(),this._wirePanelTabs(),this._wireModeSwitch(),this._wireBeadList(),this._wireBeadProps(),this._wireBsdfControls(),this._wireModelUpload(),this._wireBoardUpload(),this._wireSkybox(),this._wireScene(),this._wireExport(),this._applyMode(this._mode),this._sync(),this._viewport.envReady.catch(t=>this._notify(`天空盒加载失败：${t.message}`,"error")).then(t=>{t&&this._syncSkyboxFields()}).finally(()=>{this._envReady=!0,this._scheduleSync()});try{await this._loader.loadDefault()}catch(t){this._notify(`默认豆子模型加载失败：${t.message}`,"error")}try{await this._boardLoader.loadDefault()}catch(t){this._notify(`默认棋盘模型加载失败：${t.message}`,"error")}}_scheduleSync(){this._syncHandle||(this._syncHandle=requestAnimationFrame(()=>{this._syncHandle=0,this._sync()}))}_sync(){const e=this._library.active,t=this._library.activeType;if(!e)return;this._stage.setBead(e,t);const n=this._sceneBead();this._board.setBeadStyle(n.bead,n.type),this._renderBeadList(),this._syncBeadFields(e,t),this._syncBsdfFields(t),this._refreshActiveIcon(e,t),this._syncStatusLine(e,t),this._syncSceneFields(),this._syncConfigPreview()}_sceneBead(){const t=(this._scene.beadId?this._library.beads.find(n=>n.id===this._scene.beadId):null)??this._library.active;return{bead:t,type:this._library.getTypeDef(t.typeIndex)}}_syncStatusLine(e,t){const n=this._library.beads.length,i=this._library.beads.indexOf(e)+1,r=document.getElementById("bead-badge");r&&(r.textContent=`${e.name} · ${t.key} · ${e.color}`);const o=document.getElementById("mode-badge");o&&(o.textContent=this._modeSummary());const a=document.getElementById("status-bead");a&&(a.textContent=`${i}/${n} 颗豆子 · 豆子模型 ${this._model?.name??"加载中…"} · 棋盘模型 ${this._boardModel?.name??"加载中…"}`)}_modeSummary(){if(this._mode==="bead")return"只展示豆子 · 单颗预览 + 图标导出";if(this._mode==="board")return`只展示棋盘 · ${this._board.tiles} × ${this._board.tiles} 格 · 格距 ${ht.cellSize}`;const e=this._sceneBead().bead;return`棋盘 + 豆子 · ${this._scene.cols} × ${this._scene.rows} 格 · 豆子 ${e?.name??"—"}`}_wireBeadList(){document.getElementById("btn-add-bead")?.addEventListener("click",()=>{const e=this._library.add({typeIndex:this._library.activeType.index});this._notify(`已新建 ${e.name}`,"success")}),document.getElementById("btn-duplicate-bead")?.addEventListener("click",()=>{const e=this._library.duplicate(this._library.activeId);e&&this._notify(`已复制为 ${e.name}`,"success")}),document.getElementById("btn-remove-bead")?.addEventListener("click",()=>{const e=this._library.active;e&&(this._iconCache.delete(e.id),this._library.remove(e.id),this._notify(`已删除 ${e.name}`,"success"))})}_renderBeadList(){const e=document.getElementById("bead-list");if(!e)return;const t=this._library.beads.map(n=>{const i=this._library.getTypeDef(n.typeIndex),r=this._iconCache.get(n.id),o=r&&r.version===this._iconVersion(n,i),a=r?`<img class="bead-thumb${o?"":" stale"}" src="${r.url}" alt="" title="${o?"":"参数已改动，图标待重新生成"}" />`:`<span class="bead-thumb swatch" style="--c:${n.color}"></span>`;return`<div class="bead-item${n.id===this._library.activeId?" active":""}" data-id="${n.id}">${a}
        <span class="bead-name">${$i(n.name)}</span>
        <span class="bead-type type-${i.index}">${i.key}</span>
      </div>`});e.innerHTML=t.join("")||'<div class="empty-state">暂无豆子</div>',e.querySelectorAll(".bead-item").forEach(n=>{n.addEventListener("click",()=>this._library.setActive(n.dataset.id))})}_wireBeadProps(){const e=document.getElementById("bead-name"),t=document.getElementById("bead-color"),n=document.getElementById("bead-color-hex"),i=document.getElementById("bead-alpha");e?.addEventListener("change",()=>this._library.update(this._library.activeId,{name:e.value})),t?.addEventListener("input",()=>{n.value=t.value.toUpperCase(),this._library.update(this._library.activeId,{color:t.value})}),n?.addEventListener("change",()=>{this._library.update(this._library.activeId,{color:n.value}),n.value=this._library.active.color.toUpperCase()}),i?.addEventListener("input",()=>{this._library.update(this._library.activeId,{alpha:parseFloat(i.value)})});const r=document.getElementById("bead-types");r&&(r.innerHTML=eo.map(o=>`<button class="preset-btn" data-type="${o.index}" title="${$i(o.desc)}">${o.label}</button>`).join(""),r.querySelectorAll(".preset-btn").forEach(o=>{o.addEventListener("click",()=>this._library.update(this._library.activeId,{typeIndex:parseInt(o.dataset.type,10)}))}))}_syncBeadFields(e,t){const n=document.getElementById("bead-name");n&&document.activeElement!==n&&(n.value=e.name);const i=document.getElementById("bead-color");i&&(i.value=e.color);const r=document.getElementById("bead-color-hex");r&&document.activeElement!==r&&(r.value=e.color.toUpperCase());const o=document.getElementById("row-alpha"),a=document.getElementById("bead-alpha");o&&(o.hidden=!t.transparent),a&&document.activeElement!==a&&(a.value=String(e.alpha)),dn("val-bead-alpha",e.alpha.toFixed(2)),dn("bead-basecolor-linear",uu(e.color,e.alpha).map(c=>c.toFixed(4)).join(", "));const l=document.getElementById("type-desc");l&&(l.textContent=`${t.desc} · ${t.shader} · ${t.materialName}`),document.querySelectorAll("#bead-types .preset-btn").forEach(c=>{c.classList.toggle("active",parseInt(c.dataset.type,10)===t.index)})}_wireBsdfControls(){const e=[{id:"bsdf-roughness",key:"roughness",valId:"val-bsdf-roughness"},{id:"bsdf-metallic",key:"metallic",valId:"val-bsdf-metallic"},{id:"bsdf-ior",key:"ior",valId:"val-bsdf-ior"},{id:"bsdf-thickness",key:"thickness",valId:"val-bsdf-thickness"}];for(const{id:n,key:i,valId:r}of e){const o=document.getElementById(n);o&&o.addEventListener("input",()=>{this._library.updateType(this._library.activeType.index,{[i]:parseFloat(o.value)}),dn(r,o.value)})}const t=document.getElementById("bsdf-currency");t&&(t.innerHTML=Ev.map(n=>`<option value="${n}">${n}</option>`).join(""),t.addEventListener("change",()=>this._library.updateType(this._library.activeType.index,{currency:t.value}))),document.getElementById("btn-reset-type")?.addEventListener("click",()=>{this._library.resetType(this._library.activeType.index),this._notify(`已恢复 ${this._library.activeType.key} 的游戏默认 BSDF`,"success")})}_syncBsdfFields(e){Hn("bsdf-roughness","val-bsdf-roughness",e.roughness),Hn("bsdf-metallic","val-bsdf-metallic",e.metallic),Hn("bsdf-ior","val-bsdf-ior",e.ior),Hn("bsdf-thickness","val-bsdf-thickness",e.thickness),dn("bsdf-smoothness",(1-e.roughness).toFixed(4)),dn("bsdf-materialtype",`${e.index} (${e.key})`),dn("bsdf-shader",`${e.shader} · ${e.materialName}`);const t=document.getElementById("bsdf-currency");t&&(t.value=e.currency)}_wireModelUpload(){const e=document.getElementById("drop-zone"),t=document.getElementById("file-input");document.getElementById("btn-select-file")?.addEventListener("click",()=>t.click()),t?.addEventListener("change",()=>{t.files.length>0&&this._loadModelFile(t.files[0]),t.value=""}),e?.addEventListener("dragover",i=>{i.preventDefault(),e.classList.add("drag-over")}),e?.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e?.addEventListener("drop",i=>{i.preventDefault(),e.classList.remove("drag-over"),i.dataTransfer.files.length>0&&this._loadModelFile(i.dataTransfer.files[0])}),document.getElementById("btn-default-model")?.addEventListener("click",()=>this._loadModelFile(null))}async _loadModelFile(e){try{e?await this._loader.loadFromFile(e):await this._loader.loadDefault(),this._notify(`豆子模型：${this._loader.current.name}`,"success")}catch(t){this._notify(`模型加载失败：${t.message}`,"error")}}_onTemplateChanged(e){const t=this._model;this._model=e,this._stage.setTemplate(e),this._board.setBeadTemplate(e),t&&t.root!==e.root&&vh(t.root),this._iconCache.clear();const n=document.getElementById("model-info");n&&(n.innerHTML=`<div><span>名称</span><b>${$i(e.name)}</b></div>
        <div><span>三角面</span><b>${e.triangles.toLocaleString()}</b></div>
        <div><span>尺寸 (x/y/z)</span><b>${[e.size.x,e.size.y,e.size.z].map(i=>i.toFixed(3)).join(" / ")}</b></div>`),this._scheduleSync()}_iconVersion(e,t){const n=this._viewport?.skybox?.state,i=n?[n.id,n.tint.join(","),n.exposure,n.rotation,n.ambientIntensity,n.reflectionIntensity].join(","):"";return[e.color,e.alpha,t.index,t.roughness,t.metallic,this._model?.name??"",i,this._viewport?.keyLight.intensity??0].join("|")}_refreshActiveIcon(e,t){const n=this._iconCache.get(e.id),i=this._iconVersion(e,t);if(n&&n.version===i){this._showIconPreview(n.url);return}if(!this._model||!this._envReady)return;const r=this._iconExporter.capture(),o=r.toDataURL("image/png");this._iconCache.set(e.id,{canvas:r,url:o,version:i}),this._showIconPreview(o)}_showIconPreview(e){const t=document.getElementById("icon-preview");t&&(t.src=e);const n=document.getElementById("icon-status");n&&(n.textContent=`${Tt.size} × ${Tt.size} · ${Tt.beadCount} 颗随机散落 · 透明留白 ${Tt.inset}px · 圆角 ${Tt.radius}px · 背景 = 豆子颜色`)}async _generateAllIcons(){if(!this._model)return this._setIconStatus("豆子模型未就绪，无法生成图标"),0;await this._viewport.envReady.catch(()=>{});const e=[...this._library.beads];let t=0;for(const r of e){const o=this._library.getTypeDef(r.typeIndex),a=this._iconVersion(r,o),l=this._iconCache.get(r.id);if(!l||l.version!==a){this._stage.setBead(r,o);const c=this._iconExporter.capture();this._iconCache.set(r.id,{canvas:c,url:c.toDataURL("image/png"),version:a})}t++,t%6===0&&(this._setIconStatus(`生成中… ${t}/${e.length}`),await dy())}const n=this._library.active,i=this._library.activeType;return n&&this._stage.setBead(n,i),this._renderBeadList(),n&&this._showIconPreview(this._iconCache.get(n.id)?.url??""),this._setIconStatus(`已生成 ${e.length} 张图标`),e.length}_setIconStatus(e){const t=document.getElementById("icon-export-status");t&&(t.textContent=e)}_wireExport(){document.getElementById("btn-gen-icon")?.addEventListener("click",()=>{const e=this._library.active;e&&(this._iconCache.delete(e.id),this._sync(),this._notify(`已生成 ${e.name} 图标`,"success"))}),document.getElementById("btn-download-icon")?.addEventListener("click",async()=>{const e=this._library.active;if(!e)return;const t=await this._ensureIcon(e);nl(await yu(t.canvas),kr.fileName(e)),this._notify(`已下载 ${kr.fileName(e)}`,"success")}),document.getElementById("btn-gen-all-icons")?.addEventListener("click",async()=>{if(!this._exporting){this._exporting=!0;try{const e=await this._generateAllIcons();this._notify(`已生成 ${e} 张图标`,"success")}finally{this._exporting=!1}}}),document.getElementById("btn-download-icons")?.addEventListener("click",async()=>{if(!this._exporting){this._exporting=!0;try{if(await this._generateAllIcons()===0)return;const e=[];for(const t of this._library.beads){const n=this._iconCache.get(t.id);n&&e.push({name:kr.fileName(t),data:await ay(n.canvas)})}nl(ry(e),"bead_icons.zip"),this._notify(`已打包 ${e.length} 张图标`,"success")}finally{this._exporting=!1}}}),document.getElementById("btn-export-config")?.addEventListener("click",()=>{oy(this._configJson(),"bead_config.json"),this._notify("已导出 bead_config.json","success")})}async _ensureIcon(e){const t=this._library.getTypeDef(e.typeIndex),n=this._iconVersion(e,t),i=this._iconCache.get(e.id);if(i&&i.version===n)return i;await this._viewport.envReady.catch(()=>{}),this._stage.setBead(e,t);const r=this._iconExporter.capture(),o={canvas:r,url:r.toDataURL("image/png"),version:n};this._iconCache.set(e.id,o);const a=this._library.active;return a&&this._stage.setBead(a,this._library.activeType),o}_configJson(){const e=this._viewport.skybox.state;return JSON.stringify(this._library.toConfig({model:this._model?.name??null,beadCount:this._library.beads.length,iconSize:[Tt.size,Tt.size],board:{model:this._boardModel?.name??null,cellSize:ht.cellSize,tileY:ht.tileY,sceneCols:this._scene.cols,sceneRows:this._scene.rows},lighting:e?{skybox:e.id,tint:e.tint,exposure:e.exposure,rotation:e.rotation,ambientIntensity:e.ambientIntensity,reflectionIntensity:e.reflectionIntensity,keyLightIntensity:this._viewport.keyLight.intensity}:null}),null,2)}_syncConfigPreview(){const e=document.getElementById("config-preview");!e||!document.getElementById("tab-export")?.classList.contains("active")||(e.textContent=this._configJson())}_wireToolbar(){const e=document.querySelectorAll(".tb-btn[data-tool]");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),this._viewport.setTool(t.dataset.tool)})}),document.querySelector('.tb-btn[data-tool="orbit"]')?.classList.add("active"),document.getElementById("btn-reset-view")?.addEventListener("click",()=>this._viewport.resetView()),document.addEventListener("keydown",t=>{t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"||t.target.tagName==="SELECT"||(t.key.toLowerCase()==="w"&&document.querySelector('.tb-btn[data-tool="orbit"]')?.click(),t.key.toLowerCase()==="e"&&document.querySelector('.tb-btn[data-tool="pan"]')?.click())})}_wirePanelTabs(){document.querySelectorAll(".panel-tabs").forEach(e=>{e.querySelectorAll(".tab").forEach(t=>{t.addEventListener("click",()=>{const n=t.closest(".panel");e.querySelectorAll(".tab").forEach(i=>i.classList.remove("active")),t.classList.add("active"),n.querySelectorAll(".tab-content").forEach(i=>i.classList.remove("active")),document.getElementById(`tab-${t.dataset.tab}`)?.classList.add("active"),t.dataset.tab==="export"&&this._syncConfigPreview()})})})}_wireModeSwitch(){document.querySelectorAll("#mode-switch .seg-btn").forEach(e=>{e.addEventListener("click",()=>this._applyMode(e.dataset.mode))})}_applyMode(e){this._mode=["bead","board","scene"].includes(e)?e:"bead",document.querySelectorAll("#mode-switch .seg-btn").forEach(n=>{n.classList.toggle("active",n.dataset.mode===this._mode)});const t=this._mode==="bead";this._stage.setPreviewVisible(t),this._syncBoardVisibility(),this._viewport.skybox.setBackdropVisible(!t),t?this._viewport.setFramer((n,i)=>this._stage.framePreview(n,i)):this._viewport.setFramer((n,i)=>this._board.frameGameView(n,i,this._scene.distance)),this._mode==="scene"?this._board.setBoardSize(this._scene.cols,this._scene.rows):this._board.setTileCount(this._board.tiles),this._viewport.resetView(),this._scheduleSync()}_syncBoardVisibility(){const e=this._mode==="scene";this._board.setVisible(this._mode==="board"||e&&this._scene.showBoard,e&&this._scene.showBeads)}_wireBoardUpload(){const e=document.getElementById("board-drop-zone"),t=document.getElementById("board-file-input");document.getElementById("btn-board-select-file")?.addEventListener("click",()=>t?.click()),t?.addEventListener("change",()=>{t.files.length>0&&this._loadBoardFile(t.files[0]),t.value=""}),e?.addEventListener("dragover",a=>{a.preventDefault(),e.classList.add("drag-over")}),e?.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e?.addEventListener("drop",a=>{a.preventDefault(),e.classList.remove("drag-over"),a.dataTransfer.files.length>0&&this._loadBoardFile(a.dataTransfer.files[0])}),document.getElementById("btn-default-board-model")?.addEventListener("click",()=>this._loadBoardFile(null));const n=document.getElementById("board-tiles");n?.addEventListener("input",()=>{this._board.setTileCount(n.value),dn("val-board-tiles",String(this._board.tiles)),this._mode==="board"&&this._viewport.resetView(),this._scheduleSync()});const i=document.getElementById("scene-cols"),r=document.getElementById("scene-rows"),o=()=>{this._board.setBoardSize(i?.value,r?.value),i&&(i.value=String(this._board.cols)),r&&(r.value=String(this._board.rows)),this._mode==="scene"&&this._viewport.resetView(),this._scheduleSync()};i?.addEventListener("change",o),r?.addEventListener("change",o)}async _loadBoardFile(e){try{e?await this._boardLoader.loadFromFile(e):await this._boardLoader.loadDefault(),this._notify(`棋盘模型：${this._boardLoader.current.name}`,"success")}catch(t){this._notify(`棋盘模型加载失败：${t.message}`,"error")}}_onBoardTemplateChanged(e){const t=this._boardModel;this._boardModel=e,this._board.setTileTemplate(e),t&&t.root!==e.root&&vh(t.root);const n=document.getElementById("board-model-info");n&&(n.innerHTML=`<div><span>名称</span><b>${$i(e.name)}</b></div>
        <div><span>三角面</span><b>${e.triangles.toLocaleString()}</b></div>
        <div><span>尺寸 (x/y/z)</span><b>${[e.size.x,e.size.y,e.size.z].map(i=>i.toFixed(3)).join(" / ")}</b></div>`),this._mode!=="bead"&&this._viewport.resetView(),this._scheduleSync()}_wireSkybox(){const e=document.getElementById("keylight-intensity");e?.addEventListener("input",()=>{this._viewport.setKeyLight({intensity:parseFloat(e.value)}),dn("val-keylight-intensity",e.value),this._scheduleSync()}),this._viewport.envReady.then(()=>{const t=this._viewport.skybox,n=document.getElementById("skybox-select");n&&(n.innerHTML=t.entries.map(r=>`<option value="${r.id}">${$i(r.name)}</option>`).join(""),n.value=t.state.id,n.addEventListener("change",async()=>{try{await t.select(n.value),this._syncSkyboxFields(),this._notify(`天空盒：${t.entry(n.value).name}`,"success")}catch(r){this._notify(`天空盒切换失败：${r.message}`,"error")}}));for(const{id:r,key:o,valId:a}of[{id:"skybox-exposure",key:"exposure",valId:"val-skybox-exposure"},{id:"skybox-rotation",key:"rotation",valId:"val-skybox-rotation"},{id:"skybox-ambient",key:"ambientIntensity",valId:"val-skybox-ambient"},{id:"skybox-reflection",key:"reflectionIntensity",valId:"val-skybox-reflection"}]){const l=document.getElementById(r);l?.addEventListener("input",()=>{t.setParams({[o]:parseFloat(l.value)}),dn(a,l.value),o==="reflectionIntensity"&&this._applyReflectionIntensity(),this._scheduleSync()})}const i=document.getElementById("skybox-tint");i?.addEventListener("input",()=>{t.setParams({tint:hy(i.value)}),this._scheduleSync()}),document.getElementById("btn-skybox-reset")?.addEventListener("click",()=>{t.resetParams(),this._syncSkyboxFields(),this._notify("已恢复天空盒的 Unity 材质默认值","success")}),this._syncSkyboxFields()}).catch(()=>{})}_syncSkyboxFields(){const e=this._viewport.skybox;if(!e.ready)return;const{id:t,tint:n,exposure:i,rotation:r,ambientIntensity:o,reflectionIntensity:a}=e.state,l=e.entry(t),c=document.getElementById("skybox-select");c&&(c.value=t);const u=document.getElementById("skybox-tint");u&&(u.value=uy(n)),Hn("skybox-exposure","val-skybox-exposure",i),Hn("skybox-rotation","val-skybox-rotation",r),Hn("skybox-ambient","val-skybox-ambient",o),Hn("skybox-reflection","val-skybox-reflection",a),dn("skybox-source",`${l.unityMaterial} · 贴图 ${l.file}`),this._applyReflectionIntensity()}_applyReflectionIntensity(){const e=this._viewport.skybox.state?.reflectionIntensity??1;this._stage.setEnvIntensity(e),this._board.setEnvIntensity(e)}_wireScene(){document.getElementById("scene-bead-select")?.addEventListener("change",t=>{this._scene.beadId=t.target.value||null,this._scheduleSync()});const e=document.getElementById("scene-distance");e?.addEventListener("input",()=>{this._scene.distance=parseFloat(e.value),dn("val-scene-distance",e.value),this._syncFitHint(),this._mode!=="bead"&&this._viewport.resetView()}),document.getElementById("scene-show-board")?.addEventListener("change",t=>{this._scene.showBoard=t.target.checked,this._syncBoardVisibility(),this._scheduleSync()}),document.getElementById("scene-show-beads")?.addEventListener("change",t=>{this._scene.showBeads=t.target.checked,this._syncBoardVisibility(),this._scheduleSync()})}_syncSceneFields(){const e=document.getElementById("scene-bead-select");if(e){const i=this._library.beads.map(o=>{const a=this._library.getTypeDef(o.typeIndex);return`<option value="${o.id}">${$i(o.name)} · ${a.key} · ${o.color}</option>`}),r=i.join("|");if(e.dataset.signature!==r){e.dataset.signature=r;const o=this._scene.beadId;e.innerHTML='<option value="">跟随当前编辑豆子</option>'+i,e.value=o&&this._library.beads.some(a=>a.id===o)?o:""}}const t=document.getElementById("scene-cols");t&&document.activeElement!==t&&(t.value=String(this._board.cols));const n=document.getElementById("scene-rows");n&&document.activeElement!==n&&(n.value=String(this._board.rows)),Hn("board-tiles","val-board-tiles",this._board.tiles),this._syncFitHint()}_syncFitHint(){const e=document.getElementById("scene-fit-hint");if(!e)return;const{w:t,h:n}=this._board.extent,i=Math.max(t,n),r=this._board.fitAt(this._scene.distance);e.textContent=`盘面 ${i.toFixed(1)} 单位 · 视距 ${this._scene.distance.toFixed(0)} 可容纳 ${r.toFixed(1)} 单位`+(i<=r?" ✓ 完整入画":" ✗ 超出画面，请调大视距")}_notify(e,t="info"){const n=document.getElementById("status-text");n&&(n.textContent=e),this._notifTimeout&&clearTimeout(this._notifTimeout),document.querySelector(".notification")?.remove();const i=document.createElement("div");i.className=`notification ${t}`,i.textContent=e,document.body.appendChild(i),this._notifTimeout=setTimeout(()=>{i.remove(),this._notifTimeout=null},3e3)}}function dn(s,e){const t=document.getElementById(s);t&&(t.textContent=e)}function Hn(s,e,t){const n=document.getElementById(s);n&&document.activeElement!==n&&(n.value=String(t)),dn(e,cy(t))}function cy(s){return String(Math.round(s*100)/100)}function hy(s){const e=String(s).replace("#","");return[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}function uy(s){const e=t=>Math.round(Math.min(1,Math.max(0,t))*255).toString(16).padStart(2,"0");return`#${e(s[0])}${e(s[1])}${e(s[2])}`}function $i(s){return String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function dy(){return new Promise(s=>setTimeout(s,0))}const fy=new ly;fy.init();

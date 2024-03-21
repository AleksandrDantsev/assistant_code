(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=e(l);fetch(l.href,o)}})();function dc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yi={exports:{}},rl={},Zi={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=Symbol.for("react.element"),pc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Hu=Symbol.iterator;function Cc(t){return t===null||typeof t!="object"?null:(t=Hu&&t[Hu]||t["@@iterator"],typeof t=="function"?t:null)}var bi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ts=Object.assign,ns={};function ue(t,n,e){this.props=t,this.context=n,this.refs=ns,this.updater=e||bi}ue.prototype.isReactComponent={};ue.prototype.setState=function(t,n){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,n,"setState")};ue.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function es(){}es.prototype=ue.prototype;function Bo(t,n,e){this.props=t,this.context=n,this.refs=ns,this.updater=e||bi}var Jo=Bo.prototype=new es;Jo.constructor=Bo;ts(Jo,ue.prototype);Jo.isPureReactComponent=!0;var Au=Array.isArray,rs=Object.prototype.hasOwnProperty,Vo={current:null},ls={key:!0,ref:!0,__self:!0,__source:!0};function os(t,n,e){var r,l={},o=null,u=null;if(n!=null)for(r in n.ref!==void 0&&(u=n.ref),n.key!==void 0&&(o=""+n.key),n)rs.call(n,r)&&!ls.hasOwnProperty(r)&&(l[r]=n[r]);var i=arguments.length-2;if(i===1)l.children=e;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];l.children=s}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:Ge,type:t,key:o,ref:u,props:l,_owner:Vo.current}}function _c(t,n){return{$$typeof:Ge,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}function Qo(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ge}function Pc(t){var n={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(e){return n[e]})}var Fu=/\/+/g;function Tl(t,n){return typeof t=="object"&&t!==null&&t.key!=null?Pc(""+t.key):n.toString(36)}function Sr(t,n,e,r,l){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Ge:case pc:u=!0}}if(u)return u=t,l=l(u),t=r===""?"."+Tl(u,0):r,Au(l)?(e="",t!=null&&(e=t.replace(Fu,"$&/")+"/"),Sr(l,n,e,"",function(f){return f})):l!=null&&(Qo(l)&&(l=_c(l,e+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(Fu,"$&/")+"/")+t)),n.push(l)),1;if(u=0,r=r===""?".":r+":",Au(t))for(var i=0;i<t.length;i++){o=t[i];var s=r+Tl(o,i);u+=Sr(o,n,e,s,l)}else if(s=Cc(t),typeof s=="function")for(t=s.call(t),i=0;!(o=t.next()).done;)o=o.value,s=r+Tl(o,i++),u+=Sr(o,n,e,s,l);else if(o==="object")throw n=String(t),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function er(t,n,e){if(t==null)return t;var r=[],l=0;return Sr(t,r,"","",function(o){return n.call(e,o,l++)}),r}function xc(t){if(t._status===-1){var n=t._result;n=n(),n.then(function(e){(t._status===0||t._status===-1)&&(t._status=1,t._result=e)},function(e){(t._status===0||t._status===-1)&&(t._status=2,t._result=e)}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},wr={transition:null},Ec={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Vo};R.Children={map:er,forEach:function(t,n,e){er(t,function(){n.apply(this,arguments)},e)},count:function(t){var n=0;return er(t,function(){n++}),n},toArray:function(t){return er(t,function(n){return n})||[]},only:function(t){if(!Qo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};R.Component=ue;R.Fragment=mc;R.Profiler=hc;R.PureComponent=Bo;R.StrictMode=vc;R.Suspense=wc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;R.cloneElement=function(t,n,e){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ts({},t.props),l=t.key,o=t.ref,u=t._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,u=Vo.current),n.key!==void 0&&(l=""+n.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(s in n)rs.call(n,s)&&!ls.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&i!==void 0?i[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=e;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];r.children=i}return{$$typeof:Ge,type:t.type,key:l,ref:o,props:r,_owner:u}};R.createContext=function(t){return t={$$typeof:gc,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yc,_context:t},t.Consumer=t};R.createElement=os;R.createFactory=function(t){var n=os.bind(null,t);return n.type=t,n};R.createRef=function(){return{current:null}};R.forwardRef=function(t){return{$$typeof:Sc,render:t}};R.isValidElement=Qo;R.lazy=function(t){return{$$typeof:Tc,_payload:{_status:-1,_result:t},_init:xc}};R.memo=function(t,n){return{$$typeof:kc,type:t,compare:n===void 0?null:n}};R.startTransition=function(t){var n=wr.transition;wr.transition={};try{t()}finally{wr.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(t,n){return it.current.useCallback(t,n)};R.useContext=function(t){return it.current.useContext(t)};R.useDebugValue=function(){};R.useDeferredValue=function(t){return it.current.useDeferredValue(t)};R.useEffect=function(t,n){return it.current.useEffect(t,n)};R.useId=function(){return it.current.useId()};R.useImperativeHandle=function(t,n,e){return it.current.useImperativeHandle(t,n,e)};R.useInsertionEffect=function(t,n){return it.current.useInsertionEffect(t,n)};R.useLayoutEffect=function(t,n){return it.current.useLayoutEffect(t,n)};R.useMemo=function(t,n){return it.current.useMemo(t,n)};R.useReducer=function(t,n,e){return it.current.useReducer(t,n,e)};R.useRef=function(t){return it.current.useRef(t)};R.useState=function(t){return it.current.useState(t)};R.useSyncExternalStore=function(t,n,e){return it.current.useSyncExternalStore(t,n,e)};R.useTransition=function(){return it.current.useTransition()};R.version="18.2.0";Zi.exports=R;var vt=Zi.exports;const kr=dc(vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=vt,Rc=Symbol.for("react.element"),Nc=Symbol.for("react.fragment"),Mc=Object.prototype.hasOwnProperty,$c=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dc={key:!0,ref:!0,__self:!0,__source:!0};function us(t,n,e){var r,l={},o=null,u=null;e!==void 0&&(o=""+e),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(u=n.ref);for(r in n)Mc.call(n,r)&&!Dc.hasOwnProperty(r)&&(l[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Rc,type:t,key:o,ref:u,props:l,_owner:$c.current}}rl.Fragment=Nc;rl.jsx=us;rl.jsxs=us;Yi.exports=rl;var $=Yi.exports,Gl={},is={exports:{}},St={},ss={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function n(C,E){var L=C.length;C.push(E);t:for(;0<L;){var B=L-1>>>1,G=C[B];if(0<l(G,E))C[B]=E,C[L]=G,L=B;else break t}}function e(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var E=C[0],L=C.pop();if(L!==E){C[0]=L;t:for(var B=0,G=C.length,tr=G>>>1;B<tr;){var gn=2*(B+1)-1,kl=C[gn],Sn=gn+1,nr=C[Sn];if(0>l(kl,L))Sn<G&&0>l(nr,kl)?(C[B]=nr,C[Sn]=L,B=Sn):(C[B]=kl,C[gn]=L,B=gn);else if(Sn<G&&0>l(nr,L))C[B]=nr,C[Sn]=L,B=Sn;else break t}}return E}function l(C,E){var L=C.sortIndex-E.sortIndex;return L!==0?L:C.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var u=Date,i=u.now();t.unstable_now=function(){return u.now()-i}}var s=[],f=[],v=1,m=null,p=3,g=!1,S=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var E=e(f);E!==null;){if(E.callback===null)r(f);else if(E.startTime<=C)r(f),E.sortIndex=E.expirationTime,n(s,E);else break;E=e(f)}}function h(C){if(w=!1,d(C),!S)if(e(s)!==null)S=!0,Sl(T);else{var E=e(f);E!==null&&wl(h,E.startTime-C)}}function T(C,E){S=!1,w&&(w=!1,c(x),x=-1),g=!0;var L=p;try{for(d(E),m=e(s);m!==null&&(!(m.expirationTime>E)||C&&!Et());){var B=m.callback;if(typeof B=="function"){m.callback=null,p=m.priorityLevel;var G=B(m.expirationTime<=E);E=t.unstable_now(),typeof G=="function"?m.callback=G:m===e(s)&&r(s),d(E)}else r(s);m=e(s)}if(m!==null)var tr=!0;else{var gn=e(f);gn!==null&&wl(h,gn.startTime-E),tr=!1}return tr}finally{m=null,p=L,g=!1}}var _=!1,P=null,x=-1,W=5,N=-1;function Et(){return!(t.unstable_now()-N<W)}function ae(){if(P!==null){var C=t.unstable_now();N=C;var E=!0;try{E=P(!0,C)}finally{E?ce():(_=!1,P=null)}}else _=!1}var ce;if(typeof a=="function")ce=function(){a(ae)};else if(typeof MessageChannel<"u"){var ju=new MessageChannel,fc=ju.port2;ju.port1.onmessage=ae,ce=function(){fc.postMessage(null)}}else ce=function(){D(ae,0)};function Sl(C){P=C,_||(_=!0,ce())}function wl(C,E){x=D(function(){C(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){S||g||(S=!0,Sl(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return e(s)},t.unstable_next=function(C){switch(p){case 1:case 2:case 3:var E=3;break;default:E=p}var L=p;p=E;try{return C()}finally{p=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,E){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=p;p=C;try{return E()}finally{p=L}},t.unstable_scheduleCallback=function(C,E,L){var B=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,C={id:v++,callback:E,priorityLevel:C,startTime:L,expirationTime:G,sortIndex:-1},L>B?(C.sortIndex=L,n(f,C),e(s)===null&&C===e(f)&&(w?(c(x),x=-1):w=!0,wl(h,L-B))):(C.sortIndex=G,n(s,C),S||g||(S=!0,Sl(T))),C},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(C){var E=p;return function(){var L=p;p=E;try{return C.apply(this,arguments)}finally{p=L}}}})(as);ss.exports=as;var Oc=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=vt,gt=Oc;function y(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,e=1;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fs=new Set,$e={};function $n(t,n){bn(t,n),bn(t+"Capture",n)}function bn(t,n){for($e[t]=n,t=0;t<n.length;t++)fs.add(n[t])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Wu={};function zc(t){return Xl.call(Wu,t)?!0:Xl.call(Uu,t)?!1:Ic.test(t)?Wu[t]=!0:(Uu[t]=!0,!1)}function qc(t,n,e,r){if(e!==null&&e.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:e!==null?!e.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jc(t,n,e,r){if(n===null||typeof n>"u"||qc(t,n,e,r))return!0;if(r)return!1;if(e!==null)switch(e.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function st(t,n,e,r,l,o,u){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=e,this.propertyName=t,this.type=n,this.sanitizeURL=o,this.removeEmptyString=u}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];tt[n]=new st(n,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Go(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(Ko,Go);tt[n]=new st(n,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(Ko,Go);tt[n]=new st(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(Ko,Go);tt[n]=new st(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xo(t,n,e,r){var l=tt.hasOwnProperty(n)?tt[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(jc(n,e,l,r)&&(e=null),r||l===null?zc(n)&&(e===null?t.removeAttribute(n):t.setAttribute(n,""+e)):l.mustUseProperty?t[l.propertyName]=e===null?l.type===3?!1:"":e:(n=l.attributeName,r=l.attributeNamespace,e===null?t.removeAttribute(n):(l=l.type,e=l===3||l===4&&e===!0?"":""+e,r?t.setAttributeNS(r,n,e):t.setAttribute(n,e))))}var Xt=cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),In=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),ps=Symbol.for("react.context"),Zo=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),bo=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),Bu=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=Bu&&t[Bu]||t["@@iterator"],typeof t=="function"?t:null)}var F=Object.assign,Cl;function Se(t){if(Cl===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Cl=n&&n[1]||""}return`
`+Cl+t}var _l=!1;function Pl(t,n){if(!t||_l)return"";_l=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(t,[],n)}else{try{n.call()}catch(f){r=f}t.call(n.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),u=l.length-1,i=o.length-1;1<=u&&0<=i&&l[u]!==o[i];)i--;for(;1<=u&&0<=i;u--,i--)if(l[u]!==o[i]){if(u!==1||i!==1)do if(u--,i--,0>i||l[u]!==o[i]){var s=`
`+l[u].replace(" at new "," at ");return t.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",t.displayName)),s}while(1<=u&&0<=i);break}}}finally{_l=!1,Error.prepareStackTrace=e}return(t=t?t.displayName||t.name:"")?Se(t):""}function Hc(t){switch(t.tag){case 5:return Se(t.type);case 16:return Se("Lazy");case 13:return Se("Suspense");case 19:return Se("SuspenseList");case 0:case 2:case 15:return t=Pl(t.type,!1),t;case 11:return t=Pl(t.type.render,!1),t;case 1:return t=Pl(t.type,!0),t;default:return""}}function to(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zn:return"Fragment";case In:return"Portal";case Yl:return"Profiler";case Yo:return"StrictMode";case Zl:return"Suspense";case bl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ps:return(t.displayName||"Context")+".Consumer";case ds:return(t._context.displayName||"Context")+".Provider";case Zo:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bo:return n=t.displayName||null,n!==null?n:to(t.type)||"Memo";case Zt:n=t._payload,t=t._init;try{return to(t(n))}catch{}}return null}function Ac(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(n);case 8:return n===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vs(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fc(t){var n=vs(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),r=""+t[n];if(!t.hasOwnProperty(n)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,o=e.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,o.call(this,u)}}),Object.defineProperty(t,n,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function lr(t){t._valueTracker||(t._valueTracker=Fc(t))}function hs(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),r="";return t&&(r=vs(t)?t.checked?"true":"false":t.value),t=r,t!==e?(n.setValue(t),!0):!1}function Dr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function no(t,n){var e=n.checked;return F({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??t._wrapperState.initialChecked})}function Ju(t,n){var e=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;e=pn(n.value!=null?n.value:e),t._wrapperState={initialChecked:r,initialValue:e,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ys(t,n){n=n.checked,n!=null&&Xo(t,"checked",n,!1)}function eo(t,n){ys(t,n);var e=pn(n.value),r=n.type;if(e!=null)r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+e):t.value!==""+e&&(t.value=""+e);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?ro(t,n.type,e):n.hasOwnProperty("defaultValue")&&ro(t,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Vu(t,n,e){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,e||n===t.value||(t.value=n),t.defaultValue=n}e=t.name,e!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,e!==""&&(t.name=e)}function ro(t,n,e){(n!=="number"||Dr(t.ownerDocument)!==t)&&(e==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+e&&(t.defaultValue=""+e))}var we=Array.isArray;function Qn(t,n,e,r){if(t=t.options,n){n={};for(var l=0;l<e.length;l++)n["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=n.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&r&&(t[e].defaultSelected=!0)}else{for(e=""+pn(e),n=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function lo(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return F({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qu(t,n){var e=n.value;if(e==null){if(e=n.children,n=n.defaultValue,e!=null){if(n!=null)throw Error(y(92));if(we(e)){if(1<e.length)throw Error(y(93));e=e[0]}n=e}n==null&&(n=""),e=n}t._wrapperState={initialValue:pn(e)}}function gs(t,n){var e=pn(n.value),r=pn(n.defaultValue);e!=null&&(e=""+e,e!==t.value&&(t.value=e),n.defaultValue==null&&t.defaultValue!==e&&(t.defaultValue=e)),r!=null&&(t.defaultValue=""+r)}function Ku(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Ss(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Ss(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var or,ws=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,e,r,l){MSApp.execUnsafeLocalFunction(function(){return t(n,e,r,l)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function De(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(t){Uc.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Ce[n]=Ce[t]})});function ks(t,n,e){return n==null||typeof n=="boolean"||n===""?"":e||typeof n!="number"||n===0||Ce.hasOwnProperty(t)&&Ce[t]?(""+n).trim():n+"px"}function Ts(t,n){t=t.style;for(var e in n)if(n.hasOwnProperty(e)){var r=e.indexOf("--")===0,l=ks(e,n[e],r);e==="float"&&(e="cssFloat"),r?t.setProperty(e,l):t[e]=l}}var Wc=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(t,n){if(n){if(Wc[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function io(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ao=null,Kn=null,Gn=null;function Gu(t){if(t=Ze(t)){if(typeof ao!="function")throw Error(y(280));var n=t.stateNode;n&&(n=sl(n),ao(t.stateNode,t.type,n))}}function Cs(t){Kn?Gn?Gn.push(t):Gn=[t]:Kn=t}function _s(){if(Kn){var t=Kn,n=Gn;if(Gn=Kn=null,Gu(t),n)for(t=0;t<n.length;t++)Gu(n[t])}}function Ps(t,n){return t(n)}function xs(){}var xl=!1;function Es(t,n,e){if(xl)return t(n,e);xl=!0;try{return Ps(t,n,e)}finally{xl=!1,(Kn!==null||Gn!==null)&&(xs(),_s())}}function Oe(t,n){var e=t.stateNode;if(e===null)return null;var r=sl(e);if(r===null)return null;e=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(y(231,n,typeof e));return e}var co=!1;if(Vt)try{var de={};Object.defineProperty(de,"passive",{get:function(){co=!0}}),window.addEventListener("test",de,de),window.removeEventListener("test",de,de)}catch{co=!1}function Bc(t,n,e,r,l,o,u,i,s){var f=Array.prototype.slice.call(arguments,3);try{n.apply(e,f)}catch(v){this.onError(v)}}var _e=!1,Or=null,Ir=!1,fo=null,Jc={onError:function(t){_e=!0,Or=t}};function Vc(t,n,e,r,l,o,u,i,s){_e=!1,Or=null,Bc.apply(Jc,arguments)}function Qc(t,n,e,r,l,o,u,i,s){if(Vc.apply(this,arguments),_e){if(_e){var f=Or;_e=!1,Or=null}else throw Error(y(198));Ir||(Ir=!0,fo=f)}}function Dn(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function Ls(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Xu(t){if(Dn(t)!==t)throw Error(y(188))}function Kc(t){var n=t.alternate;if(!n){if(n=Dn(t),n===null)throw Error(y(188));return n!==t?null:t}for(var e=t,r=n;;){var l=e.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){e=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===e)return Xu(l),t;if(o===r)return Xu(l),n;o=o.sibling}throw Error(y(188))}if(e.return!==r.return)e=l,r=o;else{for(var u=!1,i=l.child;i;){if(i===e){u=!0,e=l,r=o;break}if(i===r){u=!0,r=l,e=o;break}i=i.sibling}if(!u){for(i=o.child;i;){if(i===e){u=!0,e=o,r=l;break}if(i===r){u=!0,r=o,e=l;break}i=i.sibling}if(!u)throw Error(y(189))}}if(e.alternate!==r)throw Error(y(190))}if(e.tag!==3)throw Error(y(188));return e.stateNode.current===e?t:n}function Rs(t){return t=Kc(t),t!==null?Ns(t):null}function Ns(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Ns(t);if(n!==null)return n;t=t.sibling}return null}var Ms=gt.unstable_scheduleCallback,Yu=gt.unstable_cancelCallback,Gc=gt.unstable_shouldYield,Xc=gt.unstable_requestPaint,J=gt.unstable_now,Yc=gt.unstable_getCurrentPriorityLevel,nu=gt.unstable_ImmediatePriority,$s=gt.unstable_UserBlockingPriority,zr=gt.unstable_NormalPriority,Zc=gt.unstable_LowPriority,Ds=gt.unstable_IdlePriority,ll=null,jt=null;function bc(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:ef,tf=Math.log,nf=Math.LN2;function ef(t){return t>>>=0,t===0?32:31-(tf(t)/nf|0)|0}var ur=64,ir=4194304;function ke(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qr(t,n){var e=t.pendingLanes;if(e===0)return 0;var r=0,l=t.suspendedLanes,o=t.pingedLanes,u=e&268435455;if(u!==0){var i=u&~l;i!==0?r=ke(i):(o&=u,o!==0&&(r=ke(o)))}else u=e&~l,u!==0?r=ke(u):o!==0&&(r=ke(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=e&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=r;0<n;)e=31-$t(n),l=1<<e,r|=t[e],n&=~l;return r}function rf(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(t,n){for(var e=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,o=t.pendingLanes;0<o;){var u=31-$t(o),i=1<<u,s=l[u];s===-1?(!(i&e)||i&r)&&(l[u]=rf(i,n)):s<=n&&(t.expiredLanes|=i),o&=~i}}function po(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Os(){var t=ur;return ur<<=1,!(ur&4194240)&&(ur=64),t}function El(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function Xe(t,n,e){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-$t(n),t[n]=e}function of(t,n){var e=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<e;){var l=31-$t(e),o=1<<l;n[l]=0,r[l]=-1,t[l]=-1,e&=~o}}function eu(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var r=31-$t(e),l=1<<r;l&n|t[r]&n&&(t[r]|=n),e&=~l}}var O=0;function Is(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zs,ru,qs,js,Hs,mo=!1,sr=[],ln=null,on=null,un=null,Ie=new Map,ze=new Map,tn=[],uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(t,n){switch(t){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ie.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ze.delete(n.pointerId)}}function pe(t,n,e,r,l,o){return t===null||t.nativeEvent!==o?(t={blockedOn:n,domEventName:e,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Ze(n),n!==null&&ru(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function sf(t,n,e,r,l){switch(n){case"focusin":return ln=pe(ln,t,n,e,r,l),!0;case"dragenter":return on=pe(on,t,n,e,r,l),!0;case"mouseover":return un=pe(un,t,n,e,r,l),!0;case"pointerover":var o=l.pointerId;return Ie.set(o,pe(Ie.get(o)||null,t,n,e,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ze.set(o,pe(ze.get(o)||null,t,n,e,r,l)),!0}return!1}function As(t){var n=Tn(t.target);if(n!==null){var e=Dn(n);if(e!==null){if(n=e.tag,n===13){if(n=Ls(e),n!==null){t.blockedOn=n,Hs(t.priority,function(){qs(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tr(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=vo(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(e===null){e=t.nativeEvent;var r=new e.constructor(e.type,e);so=r,e.target.dispatchEvent(r),so=null}else return n=Ze(e),n!==null&&ru(n),t.blockedOn=e,!1;n.shift()}return!0}function bu(t,n,e){Tr(t)&&e.delete(n)}function af(){mo=!1,ln!==null&&Tr(ln)&&(ln=null),on!==null&&Tr(on)&&(on=null),un!==null&&Tr(un)&&(un=null),Ie.forEach(bu),ze.forEach(bu)}function me(t,n){t.blockedOn===n&&(t.blockedOn=null,mo||(mo=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,af)))}function qe(t){function n(l){return me(l,t)}if(0<sr.length){me(sr[0],t);for(var e=1;e<sr.length;e++){var r=sr[e];r.blockedOn===t&&(r.blockedOn=null)}}for(ln!==null&&me(ln,t),on!==null&&me(on,t),un!==null&&me(un,t),Ie.forEach(n),ze.forEach(n),e=0;e<tn.length;e++)r=tn[e],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(e=tn[0],e.blockedOn===null);)As(e),e.blockedOn===null&&tn.shift()}var Xn=Xt.ReactCurrentBatchConfig,jr=!0;function cf(t,n,e,r){var l=O,o=Xn.transition;Xn.transition=null;try{O=1,lu(t,n,e,r)}finally{O=l,Xn.transition=o}}function ff(t,n,e,r){var l=O,o=Xn.transition;Xn.transition=null;try{O=4,lu(t,n,e,r)}finally{O=l,Xn.transition=o}}function lu(t,n,e,r){if(jr){var l=vo(t,n,e,r);if(l===null)ql(t,n,r,Hr,e),Zu(t,r);else if(sf(l,t,n,e,r))r.stopPropagation();else if(Zu(t,r),n&4&&-1<uf.indexOf(t)){for(;l!==null;){var o=Ze(l);if(o!==null&&zs(o),o=vo(t,n,e,r),o===null&&ql(t,n,r,Hr,e),o===l)break;l=o}l!==null&&r.stopPropagation()}else ql(t,n,r,null,e)}}var Hr=null;function vo(t,n,e,r){if(Hr=null,t=tu(r),t=Tn(t),t!==null)if(n=Dn(t),n===null)t=null;else if(e=n.tag,e===13){if(t=Ls(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Hr=t,null}function Fs(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case nu:return 1;case $s:return 4;case zr:case Zc:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var en=null,ou=null,Cr=null;function Us(){if(Cr)return Cr;var t,n=ou,e=n.length,r,l="value"in en?en.value:en.textContent,o=l.length;for(t=0;t<e&&n[t]===l[t];t++);var u=e-t;for(r=1;r<=u&&n[e-r]===l[o-r];r++);return Cr=l.slice(t,1<r?1-r:void 0)}function _r(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ar(){return!0}function ti(){return!1}function wt(t){function n(e,r,l,o,u){this._reactName=e,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(e=t[i],this[i]=e?e(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:ti,this.isPropagationStopped=ti,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var ie={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=wt(ie),Ye=F({},ie,{view:0,detail:0}),df=wt(Ye),Ll,Rl,ve,ol=F({},Ye,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ve&&(ve&&t.type==="mousemove"?(Ll=t.screenX-ve.screenX,Rl=t.screenY-ve.screenY):Rl=Ll=0,ve=t),Ll)},movementY:function(t){return"movementY"in t?t.movementY:Rl}}),ni=wt(ol),pf=F({},ol,{dataTransfer:0}),mf=wt(pf),vf=F({},Ye,{relatedTarget:0}),Nl=wt(vf),hf=F({},ie,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=wt(hf),gf=F({},ie,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sf=wt(gf),wf=F({},ie,{data:0}),ei=wt(wf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _f(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Cf[t])?!!n[t]:!1}function iu(){return _f}var Pf=F({},Ye,{key:function(t){if(t.key){var n=kf[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_r(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?_r(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_r(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xf=wt(Pf),Ef=F({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ri=wt(Ef),Lf=F({},Ye,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Rf=wt(Lf),Nf=F({},ie,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mf=wt(Nf),$f=F({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Df=wt($f),Of=[9,13,27,32],su=Vt&&"CompositionEvent"in window,Pe=null;Vt&&"documentMode"in document&&(Pe=document.documentMode);var If=Vt&&"TextEvent"in window&&!Pe,Ws=Vt&&(!su||Pe&&8<Pe&&11>=Pe),li=" ",oi=!1;function Bs(t,n){switch(t){case"keyup":return Of.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qn=!1;function zf(t,n){switch(t){case"compositionend":return Js(n);case"keypress":return n.which!==32?null:(oi=!0,li);case"textInput":return t=n.data,t===li&&oi?null:t;default:return null}}function qf(t,n){if(qn)return t==="compositionend"||!su&&Bs(t,n)?(t=Us(),Cr=ou=en=null,qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ws&&n.locale!=="ko"?null:n.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ui(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!jf[t.type]:n==="textarea"}function Vs(t,n,e,r){Cs(r),n=Ar(n,"onChange"),0<n.length&&(e=new uu("onChange","change",null,e,r),t.push({event:e,listeners:n}))}var xe=null,je=null;function Hf(t){ra(t,0)}function ul(t){var n=An(t);if(hs(n))return t}function Af(t,n){if(t==="change")return n}var Qs=!1;if(Vt){var Ml;if(Vt){var $l="oninput"in document;if(!$l){var ii=document.createElement("div");ii.setAttribute("oninput","return;"),$l=typeof ii.oninput=="function"}Ml=$l}else Ml=!1;Qs=Ml&&(!document.documentMode||9<document.documentMode)}function si(){xe&&(xe.detachEvent("onpropertychange",Ks),je=xe=null)}function Ks(t){if(t.propertyName==="value"&&ul(je)){var n=[];Vs(n,je,t,tu(t)),Es(Hf,n)}}function Ff(t,n,e){t==="focusin"?(si(),xe=n,je=e,xe.attachEvent("onpropertychange",Ks)):t==="focusout"&&si()}function Uf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(je)}function Wf(t,n){if(t==="click")return ul(n)}function Bf(t,n){if(t==="input"||t==="change")return ul(n)}function Jf(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ot=typeof Object.is=="function"?Object.is:Jf;function He(t,n){if(Ot(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;for(r=0;r<e.length;r++){var l=e[r];if(!Xl.call(n,l)||!Ot(t[l],n[l]))return!1}return!0}function ai(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ci(t,n){var e=ai(t);t=0;for(var r;e;){if(e.nodeType===3){if(r=t+e.textContent.length,t<=n&&r>=n)return{node:e,offset:n-t};t=r}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=ai(e)}}function Gs(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gs(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xs(){for(var t=window,n=Dr();n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=Dr(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Vf(t){var n=Xs(),e=t.focusedElem,r=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&Gs(e.ownerDocument.documentElement,e)){if(r!==null&&au(e)){if(n=r.start,t=r.end,t===void 0&&(t=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(t,e.value.length);else if(t=(n=e.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var l=e.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!t.extend&&o>r&&(l=r,r=o,o=l),l=ci(e,o);var u=ci(e,r);l&&u&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==u.node||t.focusOffset!==u.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),t.removeAllRanges(),o>r?(t.addRange(n),t.extend(u.node,u.offset)):(n.setEnd(u.node,u.offset),t.addRange(n)))}}for(n=[],t=e;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<n.length;e++)t=n[e],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qf=Vt&&"documentMode"in document&&11>=document.documentMode,jn=null,ho=null,Ee=null,yo=!1;function fi(t,n,e){var r=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;yo||jn==null||jn!==Dr(r)||(r=jn,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ee&&He(Ee,r)||(Ee=r,r=Ar(ho,"onSelect"),0<r.length&&(n=new uu("onSelect","select",null,n,e),t.push({event:n,listeners:r}),n.target=jn)))}function cr(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var Hn={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Dl={},Ys={};Vt&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function il(t){if(Dl[t])return Dl[t];if(!Hn[t])return t;var n=Hn[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Ys)return Dl[t]=n[e];return t}var Zs=il("animationend"),bs=il("animationiteration"),ta=il("animationstart"),na=il("transitionend"),ea=new Map,di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(t,n){ea.set(t,n),$n(n,[t])}for(var Ol=0;Ol<di.length;Ol++){var Il=di[Ol],Kf=Il.toLowerCase(),Gf=Il[0].toUpperCase()+Il.slice(1);vn(Kf,"on"+Gf)}vn(Zs,"onAnimationEnd");vn(bs,"onAnimationIteration");vn(ta,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(na,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Te="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Te));function pi(t,n,e){var r=t.type||"unknown-event";t.currentTarget=e,Qc(r,n,void 0,t),t.currentTarget=null}function ra(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var r=t[e],l=r.event;r=r.listeners;t:{var o=void 0;if(n)for(var u=r.length-1;0<=u;u--){var i=r[u],s=i.instance,f=i.currentTarget;if(i=i.listener,s!==o&&l.isPropagationStopped())break t;pi(l,i,f),o=s}else for(u=0;u<r.length;u++){if(i=r[u],s=i.instance,f=i.currentTarget,i=i.listener,s!==o&&l.isPropagationStopped())break t;pi(l,i,f),o=s}}}if(Ir)throw t=fo,Ir=!1,fo=null,t}function z(t,n){var e=n[To];e===void 0&&(e=n[To]=new Set);var r=t+"__bubble";e.has(r)||(la(n,t,2,!1),e.add(r))}function zl(t,n,e){var r=0;n&&(r|=4),la(e,t,r,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Ae(t){if(!t[fr]){t[fr]=!0,fs.forEach(function(e){e!=="selectionchange"&&(Xf.has(e)||zl(e,!1,t),zl(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fr]||(n[fr]=!0,zl("selectionchange",!1,n))}}function la(t,n,e,r){switch(Fs(n)){case 1:var l=cf;break;case 4:l=ff;break;default:l=lu}e=l.bind(null,n,e,t),l=void 0,!co||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,e,{capture:!0,passive:l}):t.addEventListener(n,e,!0):l!==void 0?t.addEventListener(n,e,{passive:l}):t.addEventListener(n,e,!1)}function ql(t,n,e,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)t:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var s=u.tag;if((s===3||s===4)&&(s=u.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;u=u.return}for(;i!==null;){if(u=Tn(i),u===null)return;if(s=u.tag,s===5||s===6){r=o=u;continue t}i=i.parentNode}}r=r.return}Es(function(){var f=o,v=tu(e),m=[];t:{var p=ea.get(t);if(p!==void 0){var g=uu,S=t;switch(t){case"keypress":if(_r(e)===0)break t;case"keydown":case"keyup":g=xf;break;case"focusin":S="focus",g=Nl;break;case"focusout":S="blur",g=Nl;break;case"beforeblur":case"afterblur":g=Nl;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rf;break;case Zs:case bs:case ta:g=yf;break;case na:g=Mf;break;case"scroll":g=df;break;case"wheel":g=Df;break;case"copy":case"cut":case"paste":g=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ri}var w=(n&4)!==0,D=!w&&t==="scroll",c=w?p!==null?p+"Capture":null:p;w=[];for(var a=f,d;a!==null;){d=a;var h=d.stateNode;if(d.tag===5&&h!==null&&(d=h,c!==null&&(h=Oe(a,c),h!=null&&w.push(Fe(a,h,d)))),D)break;a=a.return}0<w.length&&(p=new g(p,S,null,e,v),m.push({event:p,listeners:w}))}}if(!(n&7)){t:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&e!==so&&(S=e.relatedTarget||e.fromElement)&&(Tn(S)||S[Qt]))break t;if((g||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,g?(S=e.relatedTarget||e.toElement,g=f,S=S?Tn(S):null,S!==null&&(D=Dn(S),S!==D||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=f),g!==S)){if(w=ni,h="onMouseLeave",c="onMouseEnter",a="mouse",(t==="pointerout"||t==="pointerover")&&(w=ri,h="onPointerLeave",c="onPointerEnter",a="pointer"),D=g==null?p:An(g),d=S==null?p:An(S),p=new w(h,a+"leave",g,e,v),p.target=D,p.relatedTarget=d,h=null,Tn(v)===f&&(w=new w(c,a+"enter",S,e,v),w.target=d,w.relatedTarget=D,h=w),D=h,g&&S)n:{for(w=g,c=S,a=0,d=w;d;d=On(d))a++;for(d=0,h=c;h;h=On(h))d++;for(;0<a-d;)w=On(w),a--;for(;0<d-a;)c=On(c),d--;for(;a--;){if(w===c||c!==null&&w===c.alternate)break n;w=On(w),c=On(c)}w=null}else w=null;g!==null&&mi(m,p,g,w,!1),S!==null&&D!==null&&mi(m,D,S,w,!0)}}t:{if(p=f?An(f):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var T=Af;else if(ui(p))if(Qs)T=Bf;else{T=Uf;var _=Ff}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Wf);if(T&&(T=T(t,f))){Vs(m,T,e,v);break t}_&&_(t,p,f),t==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&ro(p,"number",p.value)}switch(_=f?An(f):window,t){case"focusin":(ui(_)||_.contentEditable==="true")&&(jn=_,ho=f,Ee=null);break;case"focusout":Ee=ho=jn=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,fi(m,e,v);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":fi(m,e,v)}var P;if(su)t:{switch(t){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else qn?Bs(t,e)&&(x="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(x="onCompositionStart");x&&(Ws&&e.locale!=="ko"&&(qn||x!=="onCompositionStart"?x==="onCompositionEnd"&&qn&&(P=Us()):(en=v,ou="value"in en?en.value:en.textContent,qn=!0)),_=Ar(f,x),0<_.length&&(x=new ei(x,t,null,e,v),m.push({event:x,listeners:_}),P?x.data=P:(P=Js(e),P!==null&&(x.data=P)))),(P=If?zf(t,e):qf(t,e))&&(f=Ar(f,"onBeforeInput"),0<f.length&&(v=new ei("onBeforeInput","beforeinput",null,e,v),m.push({event:v,listeners:f}),v.data=P))}ra(m,n)})}function Fe(t,n,e){return{instance:t,listener:n,currentTarget:e}}function Ar(t,n){for(var e=n+"Capture",r=[];t!==null;){var l=t,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Oe(t,e),o!=null&&r.unshift(Fe(t,o,l)),o=Oe(t,n),o!=null&&r.push(Fe(t,o,l))),t=t.return}return r}function On(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mi(t,n,e,r,l){for(var o=n._reactName,u=[];e!==null&&e!==r;){var i=e,s=i.alternate,f=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&f!==null&&(i=f,l?(s=Oe(e,o),s!=null&&u.unshift(Fe(e,s,i))):l||(s=Oe(e,o),s!=null&&u.push(Fe(e,s,i)))),e=e.return}u.length!==0&&t.push({event:n,listeners:u})}var Yf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function vi(t){return(typeof t=="string"?t:""+t).replace(Yf,`
`).replace(Zf,"")}function dr(t,n,e){if(n=vi(n),vi(t)!==n&&e)throw Error(y(425))}function Fr(){}var go=null,So=null;function wo(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,hi=typeof Promise=="function"?Promise:void 0,td=typeof queueMicrotask=="function"?queueMicrotask:typeof hi<"u"?function(t){return hi.resolve(null).then(t).catch(nd)}:ko;function nd(t){setTimeout(function(){throw t})}function jl(t,n){var e=n,r=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(r===0){t.removeChild(l),qe(n);return}r--}else e!=="$"&&e!=="$?"&&e!=="$!"||r++;e=l}while(e);qe(n)}function sn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function yi(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(n===0)return t;n--}else e==="/$"&&n++}t=t.previousSibling}return null}var se=Math.random().toString(36).slice(2),qt="__reactFiber$"+se,Ue="__reactProps$"+se,Qt="__reactContainer$"+se,To="__reactEvents$"+se,ed="__reactListeners$"+se,rd="__reactHandles$"+se;function Tn(t){var n=t[qt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[Qt]||e[qt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=yi(t);t!==null;){if(e=t[qt])return e;t=yi(t)}return n}t=e,e=t.parentNode}return null}function Ze(t){return t=t[qt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function An(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(y(33))}function sl(t){return t[Ue]||null}var Co=[],Fn=-1;function hn(t){return{current:t}}function q(t){0>Fn||(t.current=Co[Fn],Co[Fn]=null,Fn--)}function I(t,n){Fn++,Co[Fn]=t.current,t.current=n}var mn={},lt=hn(mn),ft=hn(!1),En=mn;function te(t,n){var e=t.type.contextTypes;if(!e)return mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in e)l[o]=n[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=l),l}function dt(t){return t=t.childContextTypes,t!=null}function Ur(){q(ft),q(lt)}function gi(t,n,e){if(lt.current!==mn)throw Error(y(168));I(lt,n),I(ft,e)}function oa(t,n,e){var r=t.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return e;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(y(108,Ac(t)||"Unknown",l));return F({},e,r)}function Wr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mn,En=lt.current,I(lt,t),I(ft,ft.current),!0}function Si(t,n,e){var r=t.stateNode;if(!r)throw Error(y(169));e?(t=oa(t,n,En),r.__reactInternalMemoizedMergedChildContext=t,q(ft),q(lt),I(lt,t)):q(ft),I(ft,e)}var Ut=null,al=!1,Hl=!1;function ua(t){Ut===null?Ut=[t]:Ut.push(t)}function ld(t){al=!0,ua(t)}function yn(){if(!Hl&&Ut!==null){Hl=!0;var t=0,n=O;try{var e=Ut;for(O=1;t<e.length;t++){var r=e[t];do r=r(!0);while(r!==null)}Ut=null,al=!1}catch(l){throw Ut!==null&&(Ut=Ut.slice(t+1)),Ms(nu,yn),l}finally{O=n,Hl=!1}}return null}var Un=[],Wn=0,Br=null,Jr=0,kt=[],Tt=0,Ln=null,Wt=1,Bt="";function wn(t,n){Un[Wn++]=Jr,Un[Wn++]=Br,Br=t,Jr=n}function ia(t,n,e){kt[Tt++]=Wt,kt[Tt++]=Bt,kt[Tt++]=Ln,Ln=t;var r=Wt;t=Bt;var l=32-$t(r)-1;r&=~(1<<l),e+=1;var o=32-$t(n)+l;if(30<o){var u=l-l%5;o=(r&(1<<u)-1).toString(32),r>>=u,l-=u,Wt=1<<32-$t(n)+l|e<<l|r,Bt=o+t}else Wt=1<<o|e<<l|r,Bt=t}function cu(t){t.return!==null&&(wn(t,1),ia(t,1,0))}function fu(t){for(;t===Br;)Br=Un[--Wn],Un[Wn]=null,Jr=Un[--Wn],Un[Wn]=null;for(;t===Ln;)Ln=kt[--Tt],kt[Tt]=null,Bt=kt[--Tt],kt[Tt]=null,Wt=kt[--Tt],kt[Tt]=null}var yt=null,ht=null,j=!1,Mt=null;function sa(t,n){var e=Ct(5,null,null,0);e.elementType="DELETED",e.stateNode=n,e.return=t,n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)}function wi(t,n){switch(t.tag){case 5:var e=t.type;return n=n.nodeType!==1||e.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,yt=t,ht=sn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,yt=t,ht=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(e=Ln!==null?{id:Wt,overflow:Bt}:null,t.memoizedState={dehydrated:n,treeContext:e,retryLane:1073741824},e=Ct(18,null,null,0),e.stateNode=n,e.return=t,t.child=e,yt=t,ht=null,!0):!1;default:return!1}}function _o(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Po(t){if(j){var n=ht;if(n){var e=n;if(!wi(t,n)){if(_o(t))throw Error(y(418));n=sn(e.nextSibling);var r=yt;n&&wi(t,n)?sa(r,e):(t.flags=t.flags&-4097|2,j=!1,yt=t)}}else{if(_o(t))throw Error(y(418));t.flags=t.flags&-4097|2,j=!1,yt=t}}}function ki(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function pr(t){if(t!==yt)return!1;if(!j)return ki(t),j=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!wo(t.type,t.memoizedProps)),n&&(n=ht)){if(_o(t))throw aa(),Error(y(418));for(;n;)sa(t,n),n=sn(n.nextSibling)}if(ki(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"){if(n===0){ht=sn(t.nextSibling);break t}n--}else e!=="$"&&e!=="$!"&&e!=="$?"||n++}t=t.nextSibling}ht=null}}else ht=yt?sn(t.stateNode.nextSibling):null;return!0}function aa(){for(var t=ht;t;)t=sn(t.nextSibling)}function ne(){ht=yt=null,j=!1}function du(t){Mt===null?Mt=[t]:Mt.push(t)}var od=Xt.ReactCurrentBatchConfig;function Rt(t,n){if(t&&t.defaultProps){n=F({},n),t=t.defaultProps;for(var e in t)n[e]===void 0&&(n[e]=t[e]);return n}return n}var Vr=hn(null),Qr=null,Bn=null,pu=null;function mu(){pu=Bn=Qr=null}function vu(t){var n=Vr.current;q(Vr),t._currentValue=n}function xo(t,n,e){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===e)break;t=t.return}}function Yn(t,n){Qr=t,pu=Bn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(ct=!0),t.firstContext=null)}function Pt(t){var n=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:n,next:null},Bn===null){if(Qr===null)throw Error(y(308));Bn=t,Qr.dependencies={lanes:0,firstContext:t}}else Bn=Bn.next=t;return n}var Cn=null;function hu(t){Cn===null?Cn=[t]:Cn.push(t)}function ca(t,n,e,r){var l=n.interleaved;return l===null?(e.next=e,hu(n)):(e.next=l.next,l.next=e),n.interleaved=e,Kt(t,r)}function Kt(t,n){t.lanes|=n;var e=t.alternate;for(e!==null&&(e.lanes|=n),e=t,t=t.return;t!==null;)t.childLanes|=n,e=t.alternate,e!==null&&(e.childLanes|=n),e=t,t=t.return;return e.tag===3?e.stateNode:null}var bt=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fa(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function an(t,n,e){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Kt(t,e)}return l=r.interleaved,l===null?(n.next=n,hu(r)):(n.next=l.next,l.next=n),r.interleaved=n,Kt(t,e)}function Pr(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194240)!==0)){var r=n.lanes;r&=t.pendingLanes,e|=r,n.lanes=e,eu(t,e)}}function Ti(t,n){var e=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,e===r)){var l=null,o=null;if(e=e.firstBaseUpdate,e!==null){do{var u={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};o===null?l=o=u:o=o.next=u,e=e.next}while(e!==null);o===null?l=o=n:o=o.next=n}else l=o=n;e={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}function Kr(t,n,e,r){var l=t.updateQueue;bt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,f=s.next;s.next=null,u===null?o=f:u.next=f,u=s;var v=t.alternate;v!==null&&(v=v.updateQueue,i=v.lastBaseUpdate,i!==u&&(i===null?v.firstBaseUpdate=f:i.next=f,v.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;u=0,v=f=s=null,i=o;do{var p=i.lane,g=i.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});t:{var S=t,w=i;switch(p=n,g=e,w.tag){case 1:if(S=w.payload,typeof S=="function"){m=S.call(g,m,p);break t}m=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S=="function"?S.call(g,m,p):S,p==null)break t;m=F({},m,p);break t;case 2:bt=!0}}i.callback!==null&&i.lane!==0&&(t.flags|=64,p=l.effects,p===null?l.effects=[i]:p.push(i))}else g={eventTime:g,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},v===null?(f=v=g,s=m):v=v.next=g,u|=p;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;p=i,i=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(v===null&&(s=m),l.baseState=s,l.firstBaseUpdate=f,l.lastBaseUpdate=v,n=l.shared.interleaved,n!==null){l=n;do u|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Nn|=u,t.lanes=u,t.memoizedState=m}}function Ci(t,n,e){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var r=t[n],l=r.callback;if(l!==null){if(r.callback=null,r=e,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var da=new cs.Component().refs;function Eo(t,n,e,r){n=t.memoizedState,e=e(r,n),e=e==null?n:F({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var cl={isMounted:function(t){return(t=t._reactInternals)?Dn(t)===t:!1},enqueueSetState:function(t,n,e){t=t._reactInternals;var r=ut(),l=fn(t),o=Jt(r,l);o.payload=n,e!=null&&(o.callback=e),n=an(t,o,l),n!==null&&(Dt(n,t,l,r),Pr(n,t,l))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var r=ut(),l=fn(t),o=Jt(r,l);o.tag=1,o.payload=n,e!=null&&(o.callback=e),n=an(t,o,l),n!==null&&(Dt(n,t,l,r),Pr(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=ut(),r=fn(t),l=Jt(e,r);l.tag=2,n!=null&&(l.callback=n),n=an(t,l,r),n!==null&&(Dt(n,t,r,e),Pr(n,t,r))}};function _i(t,n,e,r,l,o,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,u):n.prototype&&n.prototype.isPureReactComponent?!He(e,r)||!He(l,o):!0}function pa(t,n,e){var r=!1,l=mn,o=n.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(l=dt(n)?En:lt.current,r=n.contextTypes,o=(r=r!=null)?te(t,l):mn),n=new n(e,o),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cl,t.stateNode=n,n._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=o),n}function Pi(t,n,e,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,r),n.state!==t&&cl.enqueueReplaceState(n,n.state,null)}function Lo(t,n,e,r){var l=t.stateNode;l.props=e,l.state=t.memoizedState,l.refs=da,yu(t);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Pt(o):(o=dt(n)?En:lt.current,l.context=te(t,o)),l.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Eo(t,n,o,e),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&cl.enqueueReplaceState(l,l.state,null),Kr(t,e,l,r),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function he(t,n,e){if(t=e.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(y(309));var r=e.stateNode}if(!r)throw Error(y(147,t));var l=r,o=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(u){var i=l.refs;i===da&&(i=l.refs={}),u===null?delete i[o]:i[o]=u},n._stringRef=o,n)}if(typeof t!="string")throw Error(y(284));if(!e._owner)throw Error(y(290,t))}return t}function mr(t,n){throw t=Object.prototype.toString.call(n),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function xi(t){var n=t._init;return n(t._payload)}function ma(t){function n(c,a){if(t){var d=c.deletions;d===null?(c.deletions=[a],c.flags|=16):d.push(a)}}function e(c,a){if(!t)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function l(c,a){return c=dn(c,a),c.index=0,c.sibling=null,c}function o(c,a,d){return c.index=d,t?(d=c.alternate,d!==null?(d=d.index,d<a?(c.flags|=2,a):d):(c.flags|=2,a)):(c.flags|=1048576,a)}function u(c){return t&&c.alternate===null&&(c.flags|=2),c}function i(c,a,d,h){return a===null||a.tag!==6?(a=Vl(d,c.mode,h),a.return=c,a):(a=l(a,d),a.return=c,a)}function s(c,a,d,h){var T=d.type;return T===zn?v(c,a,d.props.children,h,d.key):a!==null&&(a.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&xi(T)===a.type)?(h=l(a,d.props),h.ref=he(c,a,d),h.return=c,h):(h=Mr(d.type,d.key,d.props,null,c.mode,h),h.ref=he(c,a,d),h.return=c,h)}function f(c,a,d,h){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Ql(d,c.mode,h),a.return=c,a):(a=l(a,d.children||[]),a.return=c,a)}function v(c,a,d,h,T){return a===null||a.tag!==7?(a=xn(d,c.mode,h,T),a.return=c,a):(a=l(a,d),a.return=c,a)}function m(c,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Vl(""+a,c.mode,d),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return d=Mr(a.type,a.key,a.props,null,c.mode,d),d.ref=he(c,null,a),d.return=c,d;case In:return a=Ql(a,c.mode,d),a.return=c,a;case Zt:var h=a._init;return m(c,h(a._payload),d)}if(we(a)||fe(a))return a=xn(a,c.mode,d,null),a.return=c,a;mr(c,a)}return null}function p(c,a,d,h){var T=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return T!==null?null:i(c,a,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===T?s(c,a,d,h):null;case In:return d.key===T?f(c,a,d,h):null;case Zt:return T=d._init,p(c,a,T(d._payload),h)}if(we(d)||fe(d))return T!==null?null:v(c,a,d,h,null);mr(c,d)}return null}function g(c,a,d,h,T){if(typeof h=="string"&&h!==""||typeof h=="number")return c=c.get(d)||null,i(a,c,""+h,T);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rr:return c=c.get(h.key===null?d:h.key)||null,s(a,c,h,T);case In:return c=c.get(h.key===null?d:h.key)||null,f(a,c,h,T);case Zt:var _=h._init;return g(c,a,d,_(h._payload),T)}if(we(h)||fe(h))return c=c.get(d)||null,v(a,c,h,T,null);mr(a,h)}return null}function S(c,a,d,h){for(var T=null,_=null,P=a,x=a=0,W=null;P!==null&&x<d.length;x++){P.index>x?(W=P,P=null):W=P.sibling;var N=p(c,P,d[x],h);if(N===null){P===null&&(P=W);break}t&&P&&N.alternate===null&&n(c,P),a=o(N,a,x),_===null?T=N:_.sibling=N,_=N,P=W}if(x===d.length)return e(c,P),j&&wn(c,x),T;if(P===null){for(;x<d.length;x++)P=m(c,d[x],h),P!==null&&(a=o(P,a,x),_===null?T=P:_.sibling=P,_=P);return j&&wn(c,x),T}for(P=r(c,P);x<d.length;x++)W=g(P,c,x,d[x],h),W!==null&&(t&&W.alternate!==null&&P.delete(W.key===null?x:W.key),a=o(W,a,x),_===null?T=W:_.sibling=W,_=W);return t&&P.forEach(function(Et){return n(c,Et)}),j&&wn(c,x),T}function w(c,a,d,h){var T=fe(d);if(typeof T!="function")throw Error(y(150));if(d=T.call(d),d==null)throw Error(y(151));for(var _=T=null,P=a,x=a=0,W=null,N=d.next();P!==null&&!N.done;x++,N=d.next()){P.index>x?(W=P,P=null):W=P.sibling;var Et=p(c,P,N.value,h);if(Et===null){P===null&&(P=W);break}t&&P&&Et.alternate===null&&n(c,P),a=o(Et,a,x),_===null?T=Et:_.sibling=Et,_=Et,P=W}if(N.done)return e(c,P),j&&wn(c,x),T;if(P===null){for(;!N.done;x++,N=d.next())N=m(c,N.value,h),N!==null&&(a=o(N,a,x),_===null?T=N:_.sibling=N,_=N);return j&&wn(c,x),T}for(P=r(c,P);!N.done;x++,N=d.next())N=g(P,c,x,N.value,h),N!==null&&(t&&N.alternate!==null&&P.delete(N.key===null?x:N.key),a=o(N,a,x),_===null?T=N:_.sibling=N,_=N);return t&&P.forEach(function(ae){return n(c,ae)}),j&&wn(c,x),T}function D(c,a,d,h){if(typeof d=="object"&&d!==null&&d.type===zn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:t:{for(var T=d.key,_=a;_!==null;){if(_.key===T){if(T=d.type,T===zn){if(_.tag===7){e(c,_.sibling),a=l(_,d.props.children),a.return=c,c=a;break t}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&xi(T)===_.type){e(c,_.sibling),a=l(_,d.props),a.ref=he(c,_,d),a.return=c,c=a;break t}e(c,_);break}else n(c,_);_=_.sibling}d.type===zn?(a=xn(d.props.children,c.mode,h,d.key),a.return=c,c=a):(h=Mr(d.type,d.key,d.props,null,c.mode,h),h.ref=he(c,a,d),h.return=c,c=h)}return u(c);case In:t:{for(_=d.key;a!==null;){if(a.key===_)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){e(c,a.sibling),a=l(a,d.children||[]),a.return=c,c=a;break t}else{e(c,a);break}else n(c,a);a=a.sibling}a=Ql(d,c.mode,h),a.return=c,c=a}return u(c);case Zt:return _=d._init,D(c,a,_(d._payload),h)}if(we(d))return S(c,a,d,h);if(fe(d))return w(c,a,d,h);mr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(e(c,a.sibling),a=l(a,d),a.return=c,c=a):(e(c,a),a=Vl(d,c.mode,h),a.return=c,c=a),u(c)):e(c,a)}return D}var ee=ma(!0),va=ma(!1),be={},Ht=hn(be),We=hn(be),Be=hn(be);function _n(t){if(t===be)throw Error(y(174));return t}function gu(t,n){switch(I(Be,n),I(We,t),I(Ht,be),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:oo(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=oo(n,t)}q(Ht),I(Ht,n)}function re(){q(Ht),q(We),q(Be)}function ha(t){_n(Be.current);var n=_n(Ht.current),e=oo(n,t.type);n!==e&&(I(We,t),I(Ht,e))}function Su(t){We.current===t&&(q(Ht),q(We))}var H=hn(0);function Gr(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Al=[];function wu(){for(var t=0;t<Al.length;t++)Al[t]._workInProgressVersionPrimary=null;Al.length=0}var xr=Xt.ReactCurrentDispatcher,Fl=Xt.ReactCurrentBatchConfig,Rn=0,A=null,Q=null,X=null,Xr=!1,Le=!1,Je=0,ud=0;function nt(){throw Error(y(321))}function ku(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!Ot(t[e],n[e]))return!1;return!0}function Tu(t,n,e,r,l,o){if(Rn=o,A=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xr.current=t===null||t.memoizedState===null?cd:fd,t=e(r,l),Le){o=0;do{if(Le=!1,Je=0,25<=o)throw Error(y(301));o+=1,X=Q=null,n.updateQueue=null,xr.current=dd,t=e(r,l)}while(Le)}if(xr.current=Yr,n=Q!==null&&Q.next!==null,Rn=0,X=Q=A=null,Xr=!1,n)throw Error(y(300));return t}function Cu(){var t=Je!==0;return Je=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?A.memoizedState=X=t:X=X.next=t,X}function xt(){if(Q===null){var t=A.alternate;t=t!==null?t.memoizedState:null}else t=Q.next;var n=X===null?A.memoizedState:X.next;if(n!==null)X=n,Q=t;else{if(t===null)throw Error(y(310));Q=t,t={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?A.memoizedState=X=t:X=X.next=t}return X}function Ve(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=xt(),e=n.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=t;var r=Q,l=r.baseQueue,o=e.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}r.baseQueue=l=o,e.pending=null}if(l!==null){o=l.next,r=r.baseState;var i=u=null,s=null,f=o;do{var v=f.lane;if((Rn&v)===v)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var m={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(i=s=m,u=r):s=s.next=m,A.lanes|=v,Nn|=v}f=f.next}while(f!==null&&f!==o);s===null?u=r:s.next=i,Ot(r,n.memoizedState)||(ct=!0),n.memoizedState=r,n.baseState=u,n.baseQueue=s,e.lastRenderedState=r}if(t=e.interleaved,t!==null){l=t;do o=l.lane,A.lanes|=o,Nn|=o,l=l.next;while(l!==t)}else l===null&&(e.lanes=0);return[n.memoizedState,e.dispatch]}function Wl(t){var n=xt(),e=n.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=t;var r=e.dispatch,l=e.pending,o=n.memoizedState;if(l!==null){e.pending=null;var u=l=l.next;do o=t(o,u.action),u=u.next;while(u!==l);Ot(o,n.memoizedState)||(ct=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),e.lastRenderedState=o}return[o,r]}function ya(){}function ga(t,n){var e=A,r=xt(),l=n(),o=!Ot(r.memoizedState,l);if(o&&(r.memoizedState=l,ct=!0),r=r.queue,_u(ka.bind(null,e,r,t),[t]),r.getSnapshot!==n||o||X!==null&&X.memoizedState.tag&1){if(e.flags|=2048,Qe(9,wa.bind(null,e,r,l,n),void 0,null),Y===null)throw Error(y(349));Rn&30||Sa(e,n,l)}return l}function Sa(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=A.updateQueue,n===null?(n={lastEffect:null,stores:null},A.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function wa(t,n,e,r){n.value=e,n.getSnapshot=r,Ta(n)&&Ca(t)}function ka(t,n,e){return e(function(){Ta(n)&&Ca(t)})}function Ta(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!Ot(t,e)}catch{return!0}}function Ca(t){var n=Kt(t,1);n!==null&&Dt(n,t,1,-1)}function Ei(t){var n=zt();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},n.queue=t,t=t.dispatch=ad.bind(null,A,t),[n.memoizedState,t]}function Qe(t,n,e,r){return t={tag:t,create:n,destroy:e,deps:r,next:null},n=A.updateQueue,n===null?(n={lastEffect:null,stores:null},A.updateQueue=n,n.lastEffect=t.next=t):(e=n.lastEffect,e===null?n.lastEffect=t.next=t:(r=e.next,e.next=t,t.next=r,n.lastEffect=t)),t}function _a(){return xt().memoizedState}function Er(t,n,e,r){var l=zt();A.flags|=t,l.memoizedState=Qe(1|n,e,void 0,r===void 0?null:r)}function fl(t,n,e,r){var l=xt();r=r===void 0?null:r;var o=void 0;if(Q!==null){var u=Q.memoizedState;if(o=u.destroy,r!==null&&ku(r,u.deps)){l.memoizedState=Qe(n,e,o,r);return}}A.flags|=t,l.memoizedState=Qe(1|n,e,o,r)}function Li(t,n){return Er(8390656,8,t,n)}function _u(t,n){return fl(2048,8,t,n)}function Pa(t,n){return fl(4,2,t,n)}function xa(t,n){return fl(4,4,t,n)}function Ea(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function La(t,n,e){return e=e!=null?e.concat([t]):null,fl(4,4,Ea.bind(null,n,t),e)}function Pu(){}function Ra(t,n){var e=xt();n=n===void 0?null:n;var r=e.memoizedState;return r!==null&&n!==null&&ku(n,r[1])?r[0]:(e.memoizedState=[t,n],t)}function Na(t,n){var e=xt();n=n===void 0?null:n;var r=e.memoizedState;return r!==null&&n!==null&&ku(n,r[1])?r[0]:(t=t(),e.memoizedState=[t,n],t)}function Ma(t,n,e){return Rn&21?(Ot(e,n)||(e=Os(),A.lanes|=e,Nn|=e,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=e)}function id(t,n){var e=O;O=e!==0&&4>e?e:4,t(!0);var r=Fl.transition;Fl.transition={};try{t(!1),n()}finally{O=e,Fl.transition=r}}function $a(){return xt().memoizedState}function sd(t,n,e){var r=fn(t);if(e={lane:r,action:e,hasEagerState:!1,eagerState:null,next:null},Da(t))Oa(n,e);else if(e=ca(t,n,e,r),e!==null){var l=ut();Dt(e,t,r,l),Ia(e,n,r)}}function ad(t,n,e){var r=fn(t),l={lane:r,action:e,hasEagerState:!1,eagerState:null,next:null};if(Da(t))Oa(n,l);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var u=n.lastRenderedState,i=o(u,e);if(l.hasEagerState=!0,l.eagerState=i,Ot(i,u)){var s=n.interleaved;s===null?(l.next=l,hu(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}e=ca(t,n,l,r),e!==null&&(l=ut(),Dt(e,t,r,l),Ia(e,n,r))}}function Da(t){var n=t.alternate;return t===A||n!==null&&n===A}function Oa(t,n){Le=Xr=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Ia(t,n,e){if(e&4194240){var r=n.lanes;r&=t.pendingLanes,e|=r,n.lanes=e,eu(t,e)}}var Yr={readContext:Pt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},cd={readContext:Pt,useCallback:function(t,n){return zt().memoizedState=[t,n===void 0?null:n],t},useContext:Pt,useEffect:Li,useImperativeHandle:function(t,n,e){return e=e!=null?e.concat([t]):null,Er(4194308,4,Ea.bind(null,n,t),e)},useLayoutEffect:function(t,n){return Er(4194308,4,t,n)},useInsertionEffect:function(t,n){return Er(4,2,t,n)},useMemo:function(t,n){var e=zt();return n=n===void 0?null:n,t=t(),e.memoizedState=[t,n],t},useReducer:function(t,n,e){var r=zt();return n=e!==void 0?e(n):n,r.memoizedState=r.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},r.queue=t,t=t.dispatch=sd.bind(null,A,t),[r.memoizedState,t]},useRef:function(t){var n=zt();return t={current:t},n.memoizedState=t},useState:Ei,useDebugValue:Pu,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Ei(!1),n=t[0];return t=id.bind(null,t[1]),zt().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,e){var r=A,l=zt();if(j){if(e===void 0)throw Error(y(407));e=e()}else{if(e=n(),Y===null)throw Error(y(349));Rn&30||Sa(r,n,e)}l.memoizedState=e;var o={value:e,getSnapshot:n};return l.queue=o,Li(ka.bind(null,r,o,t),[t]),r.flags|=2048,Qe(9,wa.bind(null,r,o,e,n),void 0,null),e},useId:function(){var t=zt(),n=Y.identifierPrefix;if(j){var e=Bt,r=Wt;e=(r&~(1<<32-$t(r)-1)).toString(32)+e,n=":"+n+"R"+e,e=Je++,0<e&&(n+="H"+e.toString(32)),n+=":"}else e=ud++,n=":"+n+"r"+e.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},fd={readContext:Pt,useCallback:Ra,useContext:Pt,useEffect:_u,useImperativeHandle:La,useInsertionEffect:Pa,useLayoutEffect:xa,useMemo:Na,useReducer:Ul,useRef:_a,useState:function(){return Ul(Ve)},useDebugValue:Pu,useDeferredValue:function(t){var n=xt();return Ma(n,Q.memoizedState,t)},useTransition:function(){var t=Ul(Ve)[0],n=xt().memoizedState;return[t,n]},useMutableSource:ya,useSyncExternalStore:ga,useId:$a,unstable_isNewReconciler:!1},dd={readContext:Pt,useCallback:Ra,useContext:Pt,useEffect:_u,useImperativeHandle:La,useInsertionEffect:Pa,useLayoutEffect:xa,useMemo:Na,useReducer:Wl,useRef:_a,useState:function(){return Wl(Ve)},useDebugValue:Pu,useDeferredValue:function(t){var n=xt();return Q===null?n.memoizedState=t:Ma(n,Q.memoizedState,t)},useTransition:function(){var t=Wl(Ve)[0],n=xt().memoizedState;return[t,n]},useMutableSource:ya,useSyncExternalStore:ga,useId:$a,unstable_isNewReconciler:!1};function le(t,n){try{var e="",r=n;do e+=Hc(r),r=r.return;while(r);var l=e}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:n,stack:l,digest:null}}function Bl(t,n,e){return{value:t,source:null,stack:e??null,digest:n??null}}function Ro(t,n){try{console.error(n.value)}catch(e){setTimeout(function(){throw e})}}var pd=typeof WeakMap=="function"?WeakMap:Map;function za(t,n,e){e=Jt(-1,e),e.tag=3,e.payload={element:null};var r=n.value;return e.callback=function(){br||(br=!0,Ho=r),Ro(t,n)},e}function qa(t,n,e){e=Jt(-1,e),e.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;e.payload=function(){return r(l)},e.callback=function(){Ro(t,n)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ro(t,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})}),e}function Ri(t,n,e){var r=t.pingCache;if(r===null){r=t.pingCache=new pd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(e)||(l.add(e),t=Ed.bind(null,t,n,e),n.then(t,t))}function Ni(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Mi(t,n,e,r,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===n?t.flags|=65536:(t.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(n=Jt(-1,1),n.tag=2,an(e,n,1))),e.lanes|=1),t)}var md=Xt.ReactCurrentOwner,ct=!1;function ot(t,n,e,r){n.child=t===null?va(n,null,e,r):ee(n,t.child,e,r)}function $i(t,n,e,r,l){e=e.render;var o=n.ref;return Yn(n,l),r=Tu(t,n,e,r,o,l),e=Cu(),t!==null&&!ct?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~l,Gt(t,n,l)):(j&&e&&cu(n),n.flags|=1,ot(t,n,r,l),n.child)}function Di(t,n,e,r,l){if(t===null){var o=e.type;return typeof o=="function"&&!Du(o)&&o.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(n.tag=15,n.type=o,ja(t,n,o,r,l)):(t=Mr(e.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(o=t.child,!(t.lanes&l)){var u=o.memoizedProps;if(e=e.compare,e=e!==null?e:He,e(u,r)&&t.ref===n.ref)return Gt(t,n,l)}return n.flags|=1,t=dn(o,r),t.ref=n.ref,t.return=n,n.child=t}function ja(t,n,e,r,l){if(t!==null){var o=t.memoizedProps;if(He(o,r)&&t.ref===n.ref)if(ct=!1,n.pendingProps=r=o,(t.lanes&l)!==0)t.flags&131072&&(ct=!0);else return n.lanes=t.lanes,Gt(t,n,l)}return No(t,n,e,r,l)}function Ha(t,n,e){var r=n.pendingProps,l=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Vn,mt),mt|=e;else{if(!(e&1073741824))return t=o!==null?o.baseLanes|e:e,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,I(Vn,mt),mt|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:e,I(Vn,mt),mt|=r}else o!==null?(r=o.baseLanes|e,n.memoizedState=null):r=e,I(Vn,mt),mt|=r;return ot(t,n,l,e),n.child}function Aa(t,n){var e=n.ref;(t===null&&e!==null||t!==null&&t.ref!==e)&&(n.flags|=512,n.flags|=2097152)}function No(t,n,e,r,l){var o=dt(e)?En:lt.current;return o=te(n,o),Yn(n,l),e=Tu(t,n,e,r,o,l),r=Cu(),t!==null&&!ct?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~l,Gt(t,n,l)):(j&&r&&cu(n),n.flags|=1,ot(t,n,e,l),n.child)}function Oi(t,n,e,r,l){if(dt(e)){var o=!0;Wr(n)}else o=!1;if(Yn(n,l),n.stateNode===null)Lr(t,n),pa(n,e,r),Lo(n,e,r,l),r=!0;else if(t===null){var u=n.stateNode,i=n.memoizedProps;u.props=i;var s=u.context,f=e.contextType;typeof f=="object"&&f!==null?f=Pt(f):(f=dt(e)?En:lt.current,f=te(n,f));var v=e.getDerivedStateFromProps,m=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function";m||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==r||s!==f)&&Pi(n,u,r,f),bt=!1;var p=n.memoizedState;u.state=p,Kr(n,r,u,l),s=n.memoizedState,i!==r||p!==s||ft.current||bt?(typeof v=="function"&&(Eo(n,e,v,r),s=n.memoizedState),(i=bt||_i(n,e,i,r,p,s,f))?(m||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),u.props=r,u.state=s,u.context=f,r=i):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,fa(t,n),i=n.memoizedProps,f=n.type===n.elementType?i:Rt(n.type,i),u.props=f,m=n.pendingProps,p=u.context,s=e.contextType,typeof s=="object"&&s!==null?s=Pt(s):(s=dt(e)?En:lt.current,s=te(n,s));var g=e.getDerivedStateFromProps;(v=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==m||p!==s)&&Pi(n,u,r,s),bt=!1,p=n.memoizedState,u.state=p,Kr(n,r,u,l);var S=n.memoizedState;i!==m||p!==S||ft.current||bt?(typeof g=="function"&&(Eo(n,e,g,r),S=n.memoizedState),(f=bt||_i(n,e,f,r,p,S,s)||!1)?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,S,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,S,s)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),u.props=r,u.state=S,u.context=s,r=f):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(n.flags|=1024),r=!1)}return Mo(t,n,e,r,o,l)}function Mo(t,n,e,r,l,o){Aa(t,n);var u=(n.flags&128)!==0;if(!r&&!u)return l&&Si(n,e,!1),Gt(t,n,o);r=n.stateNode,md.current=n;var i=u&&typeof e.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,t!==null&&u?(n.child=ee(n,t.child,null,o),n.child=ee(n,null,i,o)):ot(t,n,i,o),n.memoizedState=r.state,l&&Si(n,e,!0),n.child}function Fa(t){var n=t.stateNode;n.pendingContext?gi(t,n.pendingContext,n.pendingContext!==n.context):n.context&&gi(t,n.context,!1),gu(t,n.containerInfo)}function Ii(t,n,e,r,l){return ne(),du(l),n.flags|=256,ot(t,n,e,r),n.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Do(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ua(t,n,e){var r=n.pendingProps,l=H.current,o=!1,u=(n.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(l&2)!==0),i?(o=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),I(H,l&1),t===null)return Po(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(u=r.children,t=r.fallback,o?(r=n.mode,o=n.child,u={mode:"hidden",children:u},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=u):o=ml(u,r,0,null),t=xn(t,r,e,null),o.return=n,t.return=n,o.sibling=t,n.child=o,n.child.memoizedState=Do(e),n.memoizedState=$o,t):xu(n,u));if(l=t.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return vd(t,n,u,r,i,l,e);if(o){o=r.fallback,u=n.mode,l=t.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(u&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=dn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?o=dn(i,o):(o=xn(o,u,e,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,u=t.child.memoizedState,u=u===null?Do(e):{baseLanes:u.baseLanes|e,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=t.childLanes&~e,n.memoizedState=$o,r}return o=t.child,t=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=e),r.return=n,r.sibling=null,t!==null&&(e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)),n.child=r,n.memoizedState=null,r}function xu(t,n){return n=ml({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function vr(t,n,e,r){return r!==null&&du(r),ee(n,t.child,null,e),t=xu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vd(t,n,e,r,l,o,u){if(e)return n.flags&256?(n.flags&=-257,r=Bl(Error(y(422))),vr(t,n,u,r)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=ml({mode:"visible",children:r.children},l,0,null),o=xn(o,l,u,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ee(n,t.child,null,u),n.child.memoizedState=Do(u),n.memoizedState=$o,o);if(!(n.mode&1))return vr(t,n,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(y(419)),r=Bl(o,r,void 0),vr(t,n,u,r)}if(i=(u&t.childLanes)!==0,ct||i){if(r=Y,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|u)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Kt(t,l),Dt(r,t,l,-1))}return $u(),r=Bl(Error(y(421))),vr(t,n,u,r)}return l.data==="$?"?(n.flags|=128,n.child=t.child,n=Ld.bind(null,t),l._reactRetry=n,null):(t=o.treeContext,ht=sn(l.nextSibling),yt=n,j=!0,Mt=null,t!==null&&(kt[Tt++]=Wt,kt[Tt++]=Bt,kt[Tt++]=Ln,Wt=t.id,Bt=t.overflow,Ln=n),n=xu(n,r.children),n.flags|=4096,n)}function zi(t,n,e){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xo(t.return,n,e)}function Jl(t,n,e,r,l){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:e,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=e,o.tailMode=l)}function Wa(t,n,e){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(ot(t,n,r.children,e),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zi(t,e,n);else if(t.tag===19)zi(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(I(H,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(e=n.child,l=null;e!==null;)t=e.alternate,t!==null&&Gr(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null),Jl(n,!1,l,e,o);break;case"backwards":for(e=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Gr(t)===null){n.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}Jl(n,!0,e,null,o);break;case"together":Jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Lr(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Gt(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),Nn|=n.lanes,!(e&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(y(153));if(n.child!==null){for(t=n.child,e=dn(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=dn(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function hd(t,n,e){switch(n.tag){case 3:Fa(n),ne();break;case 5:ha(n);break;case 1:dt(n.type)&&Wr(n);break;case 4:gu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;I(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),n.flags|=128,null):e&n.child.childLanes?Ua(t,n,e):(I(H,H.current&1),t=Gt(t,n,e),t!==null?t.sibling:null);I(H,H.current&1);break;case 19:if(r=(e&n.childLanes)!==0,t.flags&128){if(r)return Wa(t,n,e);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,Ha(t,n,e)}return Gt(t,n,e)}var Ba,Oo,Ja,Va;Ba=function(t,n){for(var e=n.child;e!==null;){if(e.tag===5||e.tag===6)t.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Oo=function(){};Ja=function(t,n,e,r){var l=t.memoizedProps;if(l!==r){t=n.stateNode,_n(Ht.current);var o=null;switch(e){case"input":l=no(t,l),r=no(t,r),o=[];break;case"select":l=F({},l,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":l=lo(t,l),r=lo(t,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fr)}uo(e,r);var u;e=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var i=l[f];for(u in i)i.hasOwnProperty(u)&&(e||(e={}),e[u]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($e.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(i=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&s!==i&&(s!=null||i!=null))if(f==="style")if(i){for(u in i)!i.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(e||(e={}),e[u]="");for(u in s)s.hasOwnProperty(u)&&i[u]!==s[u]&&(e||(e={}),e[u]=s[u])}else e||(o||(o=[]),o.push(f,e)),e=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&($e.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&z("scroll",t),o||i===s||(o=[])):(o=o||[]).push(f,s))}e&&(o=o||[]).push("style",e);var f=o;(n.updateQueue=f)&&(n.flags|=4)}};Va=function(t,n,e,r){e!==r&&(n.flags|=4)};function ye(t,n){if(!j)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,r=0;if(n)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=e,n}function yd(t,n,e){var r=n.pendingProps;switch(fu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(n),null;case 1:return dt(n.type)&&Ur(),et(n),null;case 3:return r=n.stateNode,re(),q(ft),q(lt),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pr(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Mt!==null&&(Uo(Mt),Mt=null))),Oo(t,n),et(n),null;case 5:Su(n);var l=_n(Be.current);if(e=n.type,t!==null&&n.stateNode!=null)Ja(t,n,e,r,l),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(y(166));return et(n),null}if(t=_n(Ht.current),pr(n)){r=n.stateNode,e=n.type;var o=n.memoizedProps;switch(r[qt]=n,r[Ue]=o,t=(n.mode&1)!==0,e){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(l=0;l<Te.length;l++)z(Te[l],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Ju(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":Qu(r,o),z("invalid",r)}uo(e,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var i=o[u];u==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,i,t),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,i,t),l=["children",""+i]):$e.hasOwnProperty(u)&&i!=null&&u==="onScroll"&&z("scroll",r)}switch(e){case"input":lr(r),Vu(r,o,!0);break;case"textarea":lr(r),Ku(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ss(e)),t==="http://www.w3.org/1999/xhtml"?e==="script"?(t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=u.createElement(e,{is:r.is}):(t=u.createElement(e),e==="select"&&(u=t,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):t=u.createElementNS(t,e),t[qt]=n,t[Ue]=r,Ba(t,n,!1,!1),n.stateNode=t;t:{switch(u=io(e,r),e){case"dialog":z("cancel",t),z("close",t),l=r;break;case"iframe":case"object":case"embed":z("load",t),l=r;break;case"video":case"audio":for(l=0;l<Te.length;l++)z(Te[l],t);l=r;break;case"source":z("error",t),l=r;break;case"img":case"image":case"link":z("error",t),z("load",t),l=r;break;case"details":z("toggle",t),l=r;break;case"input":Ju(t,r),l=no(t,r),z("invalid",t);break;case"option":l=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},l=F({},r,{value:void 0}),z("invalid",t);break;case"textarea":Qu(t,r),l=lo(t,r),z("invalid",t);break;default:l=r}uo(e,l),i=l;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?Ts(t,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ws(t,s)):o==="children"?typeof s=="string"?(e!=="textarea"||s!=="")&&De(t,s):typeof s=="number"&&De(t,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($e.hasOwnProperty(o)?s!=null&&o==="onScroll"&&z("scroll",t):s!=null&&Xo(t,o,s,u))}switch(e){case"input":lr(t),Vu(t,r,!1);break;case"textarea":lr(t),Ku(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Qn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Qn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=Fr)}switch(e){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return et(n),null;case 6:if(t&&n.stateNode!=null)Va(t,n,t.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(y(166));if(e=_n(Be.current),_n(Ht.current),pr(n)){if(r=n.stateNode,e=n.memoizedProps,r[qt]=n,(o=r.nodeValue!==e)&&(t=yt,t!==null))switch(t.tag){case 3:dr(r.nodeValue,e,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,e,(t.mode&1)!==0)}o&&(n.flags|=4)}else r=(e.nodeType===9?e:e.ownerDocument).createTextNode(r),r[qt]=n,n.stateNode=r}return et(n),null;case 13:if(q(H),r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(j&&ht!==null&&n.mode&1&&!(n.flags&128))aa(),ne(),n.flags|=98560,o=!1;else if(o=pr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[qt]=n}else ne(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;et(n),o=!1}else Mt!==null&&(Uo(Mt),Mt=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=e,n):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(t===null||H.current&1?K===0&&(K=3):$u())),n.updateQueue!==null&&(n.flags|=4),et(n),null);case 4:return re(),Oo(t,n),t===null&&Ae(n.stateNode.containerInfo),et(n),null;case 10:return vu(n.type._context),et(n),null;case 17:return dt(n.type)&&Ur(),et(n),null;case 19:if(q(H),o=n.memoizedState,o===null)return et(n),null;if(r=(n.flags&128)!==0,u=o.rendering,u===null)if(r)ye(o,!1);else{if(K!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(u=Gr(t),u!==null){for(n.flags|=128,ye(o,!1),r=u.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=e,e=n.child;e!==null;)o=e,t=r,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,t=u.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e=e.sibling;return I(H,H.current&1|2),n.child}t=t.sibling}o.tail!==null&&J()>oe&&(n.flags|=128,r=!0,ye(o,!1),n.lanes=4194304)}else{if(!r)if(t=Gr(u),t!==null){if(n.flags|=128,r=!0,e=t.updateQueue,e!==null&&(n.updateQueue=e,n.flags|=4),ye(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!j)return et(n),null}else 2*J()-o.renderingStartTime>oe&&e!==1073741824&&(n.flags|=128,r=!0,ye(o,!1),n.lanes=4194304);o.isBackwards?(u.sibling=n.child,n.child=u):(e=o.last,e!==null?e.sibling=u:n.child=u,o.last=u)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=J(),n.sibling=null,e=H.current,I(H,r?e&1|2:e&1),n):(et(n),null);case 22:case 23:return Mu(),r=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?mt&1073741824&&(et(n),n.subtreeFlags&6&&(n.flags|=8192)):et(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function gd(t,n){switch(fu(n),n.tag){case 1:return dt(n.type)&&Ur(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return re(),q(ft),q(lt),wu(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Su(n),null;case 13:if(q(H),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(y(340));ne()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return q(H),null;case 4:return re(),null;case 10:return vu(n.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var hr=!1,rt=!1,Sd=typeof WeakSet=="function"?WeakSet:Set,k=null;function Jn(t,n){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(r){U(t,n,r)}else e.current=null}function Io(t,n,e){try{e()}catch(r){U(t,n,r)}}var qi=!1;function wd(t,n){if(go=jr,t=Xs(),au(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var r=e.getSelection&&e.getSelection();if(r&&r.rangeCount!==0){e=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{e.nodeType,o.nodeType}catch{e=null;break t}var u=0,i=-1,s=-1,f=0,v=0,m=t,p=null;n:for(;;){for(var g;m!==e||l!==0&&m.nodeType!==3||(i=u+l),m!==o||r!==0&&m.nodeType!==3||(s=u+r),m.nodeType===3&&(u+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===t)break n;if(p===e&&++f===l&&(i=u),p===o&&++v===r&&(s=u),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}e=i===-1||s===-1?null:{start:i,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(So={focusedElem:t,selectionRange:e},jr=!1,k=n;k!==null;)if(n=k,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,k=t;else for(;k!==null;){n=k;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,D=S.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?w:Rt(n.type,w),D);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(h){U(n,n.return,h)}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}return S=qi,qi=!1,S}function Re(t,n,e){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&t)===t){var o=l.destroy;l.destroy=void 0,o!==void 0&&Io(n,e,o)}l=l.next}while(l!==r)}}function dl(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var e=n=n.next;do{if((e.tag&t)===t){var r=e.create;e.destroy=r()}e=e.next}while(e!==n)}}function zo(t){var n=t.ref;if(n!==null){var e=t.stateNode;switch(t.tag){case 5:t=e;break;default:t=e}typeof n=="function"?n(t):n.current=t}}function Qa(t){var n=t.alternate;n!==null&&(t.alternate=null,Qa(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[qt],delete n[Ue],delete n[To],delete n[ed],delete n[rd])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ka(t){return t.tag===5||t.tag===3||t.tag===4}function ji(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ka(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qo(t,n,e){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?e.nodeType===8?e.parentNode.insertBefore(t,n):e.insertBefore(t,n):(e.nodeType===8?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t)),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Fr));else if(r!==4&&(t=t.child,t!==null))for(qo(t,n,e),t=t.sibling;t!==null;)qo(t,n,e),t=t.sibling}function jo(t,n,e){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jo(t,n,e),t=t.sibling;t!==null;)jo(t,n,e),t=t.sibling}var Z=null,Nt=!1;function Yt(t,n,e){for(e=e.child;e!==null;)Ga(t,n,e),e=e.sibling}function Ga(t,n,e){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(ll,e)}catch{}switch(e.tag){case 5:rt||Jn(e,n);case 6:var r=Z,l=Nt;Z=null,Yt(t,n,e),Z=r,Nt=l,Z!==null&&(Nt?(t=Z,e=e.stateNode,t.nodeType===8?t.parentNode.removeChild(e):t.removeChild(e)):Z.removeChild(e.stateNode));break;case 18:Z!==null&&(Nt?(t=Z,e=e.stateNode,t.nodeType===8?jl(t.parentNode,e):t.nodeType===1&&jl(t,e),qe(t)):jl(Z,e.stateNode));break;case 4:r=Z,l=Nt,Z=e.stateNode.containerInfo,Nt=!0,Yt(t,n,e),Z=r,Nt=l;break;case 0:case 11:case 14:case 15:if(!rt&&(r=e.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&(o&2||o&4)&&Io(e,n,u),l=l.next}while(l!==r)}Yt(t,n,e);break;case 1:if(!rt&&(Jn(e,n),r=e.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=e.memoizedProps,r.state=e.memoizedState,r.componentWillUnmount()}catch(i){U(e,n,i)}Yt(t,n,e);break;case 21:Yt(t,n,e);break;case 22:e.mode&1?(rt=(r=rt)||e.memoizedState!==null,Yt(t,n,e),rt=r):Yt(t,n,e);break;default:Yt(t,n,e)}}function Hi(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var e=t.stateNode;e===null&&(e=t.stateNode=new Sd),n.forEach(function(r){var l=Rd.bind(null,t,r);e.has(r)||(e.add(r),r.then(l,l))})}}function Lt(t,n){var e=n.deletions;if(e!==null)for(var r=0;r<e.length;r++){var l=e[r];try{var o=t,u=n,i=u;t:for(;i!==null;){switch(i.tag){case 5:Z=i.stateNode,Nt=!1;break t;case 3:Z=i.stateNode.containerInfo,Nt=!0;break t;case 4:Z=i.stateNode.containerInfo,Nt=!0;break t}i=i.return}if(Z===null)throw Error(y(160));Ga(o,u,l),Z=null,Nt=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(f){U(l,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Xa(n,t),n=n.sibling}function Xa(t,n){var e=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(n,t),It(t),r&4){try{Re(3,t,t.return),dl(3,t)}catch(w){U(t,t.return,w)}try{Re(5,t,t.return)}catch(w){U(t,t.return,w)}}break;case 1:Lt(n,t),It(t),r&512&&e!==null&&Jn(e,e.return);break;case 5:if(Lt(n,t),It(t),r&512&&e!==null&&Jn(e,e.return),t.flags&32){var l=t.stateNode;try{De(l,"")}catch(w){U(t,t.return,w)}}if(r&4&&(l=t.stateNode,l!=null)){var o=t.memoizedProps,u=e!==null?e.memoizedProps:o,i=t.type,s=t.updateQueue;if(t.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&ys(l,o),io(i,u);var f=io(i,o);for(u=0;u<s.length;u+=2){var v=s[u],m=s[u+1];v==="style"?Ts(l,m):v==="dangerouslySetInnerHTML"?ws(l,m):v==="children"?De(l,m):Xo(l,v,m,f)}switch(i){case"input":eo(l,o);break;case"textarea":gs(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Qn(l,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Qn(l,!!o.multiple,o.defaultValue,!0):Qn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Ue]=o}catch(w){U(t,t.return,w)}}break;case 6:if(Lt(n,t),It(t),r&4){if(t.stateNode===null)throw Error(y(162));l=t.stateNode,o=t.memoizedProps;try{l.nodeValue=o}catch(w){U(t,t.return,w)}}break;case 3:if(Lt(n,t),It(t),r&4&&e!==null&&e.memoizedState.isDehydrated)try{qe(n.containerInfo)}catch(w){U(t,t.return,w)}break;case 4:Lt(n,t),It(t);break;case 13:Lt(n,t),It(t),l=t.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ru=J())),r&4&&Hi(t);break;case 22:if(v=e!==null&&e.memoizedState!==null,t.mode&1?(rt=(f=rt)||v,Lt(n,t),rt=f):Lt(n,t),It(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!v&&t.mode&1)for(k=t,v=t.child;v!==null;){for(m=k=v;k!==null;){switch(p=k,g=p.child,p.tag){case 0:case 11:case 14:case 15:Re(4,p,p.return);break;case 1:Jn(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,e=p.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(w){U(r,e,w)}}break;case 5:Jn(p,p.return);break;case 22:if(p.memoizedState!==null){Fi(m);continue}}g!==null?(g.return=p,k=g):Fi(m)}v=v.sibling}t:for(v=null,m=t;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,s=m.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=ks("display",u))}catch(w){U(t,t.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(w){U(t,t.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break t;for(;m.sibling===null;){if(m.return===null||m.return===t)break t;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Lt(n,t),It(t),r&4&&Hi(t);break;case 21:break;default:Lt(n,t),It(t)}}function It(t){var n=t.flags;if(n&2){try{t:{for(var e=t.return;e!==null;){if(Ka(e)){var r=e;break t}e=e.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(De(l,""),r.flags&=-33);var o=ji(t);jo(t,o,l);break;case 3:case 4:var u=r.stateNode.containerInfo,i=ji(t);qo(t,i,u);break;default:throw Error(y(161))}}catch(s){U(t,t.return,s)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function kd(t,n,e){k=t,Ya(t)}function Ya(t,n,e){for(var r=(t.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||hr;if(!u){var i=l.alternate,s=i!==null&&i.memoizedState!==null||rt;i=hr;var f=rt;if(hr=u,(rt=s)&&!f)for(k=l;k!==null;)u=k,s=u.child,u.tag===22&&u.memoizedState!==null?Ui(l):s!==null?(s.return=u,k=s):Ui(l);for(;o!==null;)k=o,Ya(o),o=o.sibling;k=l,hr=i,rt=f}Ai(t)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):Ai(t)}}function Ai(t){for(;k!==null;){var n=k;if(n.flags&8772){var e=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:rt||dl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!rt)if(e===null)r.componentDidMount();else{var l=n.elementType===n.type?e.memoizedProps:Rt(n.type,e.memoizedProps);r.componentDidUpdate(l,e.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ci(n,o,r);break;case 3:var u=n.updateQueue;if(u!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ci(n,u,e)}break;case 5:var i=n.stateNode;if(e===null&&n.flags&4){e=i;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&e.focus();break;case"img":s.src&&(e.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&qe(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}rt||n.flags&512&&zo(n)}catch(p){U(n,n.return,p)}}if(n===t){k=null;break}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}}function Fi(t){for(;k!==null;){var n=k;if(n===t){k=null;break}var e=n.sibling;if(e!==null){e.return=n.return,k=e;break}k=n.return}}function Ui(t){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var e=n.return;try{dl(4,n)}catch(s){U(n,e,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){U(n,l,s)}}var o=n.return;try{zo(n)}catch(s){U(n,o,s)}break;case 5:var u=n.return;try{zo(n)}catch(s){U(n,u,s)}}}catch(s){U(n,n.return,s)}if(n===t){k=null;break}var i=n.sibling;if(i!==null){i.return=n.return,k=i;break}k=n.return}}var Td=Math.ceil,Zr=Xt.ReactCurrentDispatcher,Eu=Xt.ReactCurrentOwner,_t=Xt.ReactCurrentBatchConfig,M=0,Y=null,V=null,b=0,mt=0,Vn=hn(0),K=0,Ke=null,Nn=0,pl=0,Lu=0,Ne=null,at=null,Ru=0,oe=1/0,Ft=null,br=!1,Ho=null,cn=null,yr=!1,rn=null,tl=0,Me=0,Ao=null,Rr=-1,Nr=0;function ut(){return M&6?J():Rr!==-1?Rr:Rr=J()}function fn(t){return t.mode&1?M&2&&b!==0?b&-b:od.transition!==null?(Nr===0&&(Nr=Os()),Nr):(t=O,t!==0||(t=window.event,t=t===void 0?16:Fs(t.type)),t):1}function Dt(t,n,e,r){if(50<Me)throw Me=0,Ao=null,Error(y(185));Xe(t,e,r),(!(M&2)||t!==Y)&&(t===Y&&(!(M&2)&&(pl|=e),K===4&&nn(t,b)),pt(t,r),e===1&&M===0&&!(n.mode&1)&&(oe=J()+500,al&&yn()))}function pt(t,n){var e=t.callbackNode;lf(t,n);var r=qr(t,t===Y?b:0);if(r===0)e!==null&&Yu(e),t.callbackNode=null,t.callbackPriority=0;else if(n=r&-r,t.callbackPriority!==n){if(e!=null&&Yu(e),n===1)t.tag===0?ld(Wi.bind(null,t)):ua(Wi.bind(null,t)),td(function(){!(M&6)&&yn()}),e=null;else{switch(Is(r)){case 1:e=nu;break;case 4:e=$s;break;case 16:e=zr;break;case 536870912:e=Ds;break;default:e=zr}e=oc(e,Za.bind(null,t))}t.callbackPriority=n,t.callbackNode=e}}function Za(t,n){if(Rr=-1,Nr=0,M&6)throw Error(y(327));var e=t.callbackNode;if(Zn()&&t.callbackNode!==e)return null;var r=qr(t,t===Y?b:0);if(r===0)return null;if(r&30||r&t.expiredLanes||n)n=nl(t,r);else{n=r;var l=M;M|=2;var o=tc();(Y!==t||b!==n)&&(Ft=null,oe=J()+500,Pn(t,n));do try{Pd();break}catch(i){ba(t,i)}while(!0);mu(),Zr.current=o,M=l,V!==null?n=0:(Y=null,b=0,n=K)}if(n!==0){if(n===2&&(l=po(t),l!==0&&(r=l,n=Fo(t,l))),n===1)throw e=Ke,Pn(t,0),nn(t,r),pt(t,J()),e;if(n===6)nn(t,r);else{if(l=t.current.alternate,!(r&30)&&!Cd(l)&&(n=nl(t,r),n===2&&(o=po(t),o!==0&&(r=o,n=Fo(t,o))),n===1))throw e=Ke,Pn(t,0),nn(t,r),pt(t,J()),e;switch(t.finishedWork=l,t.finishedLanes=r,n){case 0:case 1:throw Error(y(345));case 2:kn(t,at,Ft);break;case 3:if(nn(t,r),(r&130023424)===r&&(n=Ru+500-J(),10<n)){if(qr(t,0)!==0)break;if(l=t.suspendedLanes,(l&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=ko(kn.bind(null,t,at,Ft),n);break}kn(t,at,Ft);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(n=t.eventTimes,l=-1;0<r;){var u=31-$t(r);o=1<<u,u=n[u],u>l&&(l=u),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Td(r/1960))-r,10<r){t.timeoutHandle=ko(kn.bind(null,t,at,Ft),r);break}kn(t,at,Ft);break;case 5:kn(t,at,Ft);break;default:throw Error(y(329))}}}return pt(t,J()),t.callbackNode===e?Za.bind(null,t):null}function Fo(t,n){var e=Ne;return t.current.memoizedState.isDehydrated&&(Pn(t,n).flags|=256),t=nl(t,n),t!==2&&(n=at,at=e,n!==null&&Uo(n)),t}function Uo(t){at===null?at=t:at.push.apply(at,t)}function Cd(t){for(var n=t;;){if(n.flags&16384){var e=n.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var r=0;r<e.length;r++){var l=e[r],o=l.getSnapshot;l=l.value;try{if(!Ot(o(),l))return!1}catch{return!1}}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(t,n){for(n&=~Lu,n&=~pl,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var e=31-$t(n),r=1<<e;t[e]=-1,n&=~r}}function Wi(t){if(M&6)throw Error(y(327));Zn();var n=qr(t,0);if(!(n&1))return pt(t,J()),null;var e=nl(t,n);if(t.tag!==0&&e===2){var r=po(t);r!==0&&(n=r,e=Fo(t,r))}if(e===1)throw e=Ke,Pn(t,0),nn(t,n),pt(t,J()),e;if(e===6)throw Error(y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,kn(t,at,Ft),pt(t,J()),null}function Nu(t,n){var e=M;M|=1;try{return t(n)}finally{M=e,M===0&&(oe=J()+500,al&&yn())}}function Mn(t){rn!==null&&rn.tag===0&&!(M&6)&&Zn();var n=M;M|=1;var e=_t.transition,r=O;try{if(_t.transition=null,O=1,t)return t()}finally{O=r,_t.transition=e,M=n,!(M&6)&&yn()}}function Mu(){mt=Vn.current,q(Vn)}function Pn(t,n){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;if(e!==-1&&(t.timeoutHandle=-1,bf(e)),V!==null)for(e=V.return;e!==null;){var r=e;switch(fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:re(),q(ft),q(lt),wu();break;case 5:Su(r);break;case 4:re();break;case 13:q(H);break;case 19:q(H);break;case 10:vu(r.type._context);break;case 22:case 23:Mu()}e=e.return}if(Y=t,V=t=dn(t.current,null),b=mt=n,K=0,Ke=null,Lu=pl=Nn=0,at=Ne=null,Cn!==null){for(n=0;n<Cn.length;n++)if(e=Cn[n],r=e.interleaved,r!==null){e.interleaved=null;var l=r.next,o=e.pending;if(o!==null){var u=o.next;o.next=l,r.next=u}e.pending=r}Cn=null}return t}function ba(t,n){do{var e=V;try{if(mu(),xr.current=Yr,Xr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(Rn=0,X=Q=A=null,Le=!1,Je=0,Eu.current=null,e===null||e.return===null){K=1,Ke=n,V=null;break}t:{var o=t,u=e.return,i=e,s=n;if(n=b,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,v=i,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var g=Ni(u);if(g!==null){g.flags&=-257,Mi(g,u,i,o,n),g.mode&1&&Ri(o,f,n),n=g,s=f;var S=n.updateQueue;if(S===null){var w=new Set;w.add(s),n.updateQueue=w}else S.add(s);break t}else{if(!(n&1)){Ri(o,f,n),$u();break t}s=Error(y(426))}}else if(j&&i.mode&1){var D=Ni(u);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Mi(D,u,i,o,n),du(le(s,i));break t}}o=s=le(s,i),K!==4&&(K=2),Ne===null?Ne=[o]:Ne.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=za(o,s,n);Ti(o,c);break t;case 1:i=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(cn===null||!cn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var h=qa(o,i,n);Ti(o,h);break t}}o=o.return}while(o!==null)}ec(e)}catch(T){n=T,V===e&&e!==null&&(V=e=e.return);continue}break}while(!0)}function tc(){var t=Zr.current;return Zr.current=Yr,t===null?Yr:t}function $u(){(K===0||K===3||K===2)&&(K=4),Y===null||!(Nn&268435455)&&!(pl&268435455)||nn(Y,b)}function nl(t,n){var e=M;M|=2;var r=tc();(Y!==t||b!==n)&&(Ft=null,Pn(t,n));do try{_d();break}catch(l){ba(t,l)}while(!0);if(mu(),M=e,Zr.current=r,V!==null)throw Error(y(261));return Y=null,b=0,K}function _d(){for(;V!==null;)nc(V)}function Pd(){for(;V!==null&&!Gc();)nc(V)}function nc(t){var n=lc(t.alternate,t,mt);t.memoizedProps=t.pendingProps,n===null?ec(t):V=n,Eu.current=null}function ec(t){var n=t;do{var e=n.alternate;if(t=n.return,n.flags&32768){if(e=gd(e,n),e!==null){e.flags&=32767,V=e;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{K=6,V=null;return}}else if(e=yd(e,n,mt),e!==null){V=e;return}if(n=n.sibling,n!==null){V=n;return}V=n=t}while(n!==null);K===0&&(K=5)}function kn(t,n,e){var r=O,l=_t.transition;try{_t.transition=null,O=1,xd(t,n,e,r)}finally{_t.transition=l,O=r}return null}function xd(t,n,e,r){do Zn();while(rn!==null);if(M&6)throw Error(y(327));e=t.finishedWork;var l=t.finishedLanes;if(e===null)return null;if(t.finishedWork=null,t.finishedLanes=0,e===t.current)throw Error(y(177));t.callbackNode=null,t.callbackPriority=0;var o=e.lanes|e.childLanes;if(of(t,o),t===Y&&(V=Y=null,b=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||yr||(yr=!0,oc(zr,function(){return Zn(),null})),o=(e.flags&15990)!==0,e.subtreeFlags&15990||o){o=_t.transition,_t.transition=null;var u=O;O=1;var i=M;M|=4,Eu.current=null,wd(t,e),Xa(e,t),Vf(So),jr=!!go,So=go=null,t.current=e,kd(e),Xc(),M=i,O=u,_t.transition=o}else t.current=e;if(yr&&(yr=!1,rn=t,tl=l),o=t.pendingLanes,o===0&&(cn=null),bc(e.stateNode),pt(t,J()),n!==null)for(r=t.onRecoverableError,e=0;e<n.length;e++)l=n[e],r(l.value,{componentStack:l.stack,digest:l.digest});if(br)throw br=!1,t=Ho,Ho=null,t;return tl&1&&t.tag!==0&&Zn(),o=t.pendingLanes,o&1?t===Ao?Me++:(Me=0,Ao=t):Me=0,yn(),null}function Zn(){if(rn!==null){var t=Is(tl),n=_t.transition,e=O;try{if(_t.transition=null,O=16>t?16:t,rn===null)var r=!1;else{if(t=rn,rn=null,tl=0,M&6)throw Error(y(331));var l=M;for(M|=4,k=t.current;k!==null;){var o=k,u=o.child;if(k.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var f=i[s];for(k=f;k!==null;){var v=k;switch(v.tag){case 0:case 11:case 15:Re(8,v,o)}var m=v.child;if(m!==null)m.return=v,k=m;else for(;k!==null;){v=k;var p=v.sibling,g=v.return;if(Qa(v),v===f){k=null;break}if(p!==null){p.return=g,k=p;break}k=g}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&u!==null)u.return=o,k=u;else t:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Re(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,k=c;break t}k=o.return}}var a=t.current;for(k=a;k!==null;){u=k;var d=u.child;if(u.subtreeFlags&2064&&d!==null)d.return=u,k=d;else t:for(u=a;k!==null;){if(i=k,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:dl(9,i)}}catch(T){U(i,i.return,T)}if(i===u){k=null;break t}var h=i.sibling;if(h!==null){h.return=i.return,k=h;break t}k=i.return}}if(M=l,yn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(ll,t)}catch{}r=!0}return r}finally{O=e,_t.transition=n}}return!1}function Bi(t,n,e){n=le(e,n),n=za(t,n,1),t=an(t,n,1),n=ut(),t!==null&&(Xe(t,1,n),pt(t,n))}function U(t,n,e){if(t.tag===3)Bi(t,t,e);else for(;n!==null;){if(n.tag===3){Bi(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=le(e,t),t=qa(n,t,1),n=an(n,t,1),t=ut(),n!==null&&(Xe(n,1,t),pt(n,t));break}}n=n.return}}function Ed(t,n,e){var r=t.pingCache;r!==null&&r.delete(n),n=ut(),t.pingedLanes|=t.suspendedLanes&e,Y===t&&(b&e)===e&&(K===4||K===3&&(b&130023424)===b&&500>J()-Ru?Pn(t,0):Lu|=e),pt(t,n)}function rc(t,n){n===0&&(t.mode&1?(n=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):n=1);var e=ut();t=Kt(t,n),t!==null&&(Xe(t,n,e),pt(t,e))}function Ld(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),rc(t,e)}function Rd(t,n){var e=0;switch(t.tag){case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(n),rc(t,e)}var lc;lc=function(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps||ft.current)ct=!0;else{if(!(t.lanes&e)&&!(n.flags&128))return ct=!1,hd(t,n,e);ct=!!(t.flags&131072)}else ct=!1,j&&n.flags&1048576&&ia(n,Jr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Lr(t,n),t=n.pendingProps;var l=te(n,lt.current);Yn(n,e),l=Tu(null,n,r,t,l,e);var o=Cu();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,dt(r)?(o=!0,Wr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yu(n),l.updater=cl,n.stateNode=l,l._reactInternals=n,Lo(n,r,t,e),n=Mo(null,n,r,!0,o,e)):(n.tag=0,j&&o&&cu(n),ot(null,n,l,e),n=n.child),n;case 16:r=n.elementType;t:{switch(Lr(t,n),t=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Md(r),t=Rt(r,t),l){case 0:n=No(null,n,r,t,e);break t;case 1:n=Oi(null,n,r,t,e);break t;case 11:n=$i(null,n,r,t,e);break t;case 14:n=Di(null,n,r,Rt(r.type,t),e);break t}throw Error(y(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),No(t,n,r,l,e);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),Oi(t,n,r,l,e);case 3:t:{if(Fa(n),t===null)throw Error(y(387));r=n.pendingProps,o=n.memoizedState,l=o.element,fa(t,n),Kr(n,r,null,e);var u=n.memoizedState;if(r=u.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=le(Error(y(423)),n),n=Ii(t,n,r,e,l);break t}else if(r!==l){l=le(Error(y(424)),n),n=Ii(t,n,r,e,l);break t}else for(ht=sn(n.stateNode.containerInfo.firstChild),yt=n,j=!0,Mt=null,e=va(n,null,r,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(ne(),r===l){n=Gt(t,n,e);break t}ot(t,n,r,e)}n=n.child}return n;case 5:return ha(n),t===null&&Po(n),r=n.type,l=n.pendingProps,o=t!==null?t.memoizedProps:null,u=l.children,wo(r,l)?u=null:o!==null&&wo(r,o)&&(n.flags|=32),Aa(t,n),ot(t,n,u,e),n.child;case 6:return t===null&&Po(n),null;case 13:return Ua(t,n,e);case 4:return gu(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ee(n,null,r,e):ot(t,n,r,e),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),$i(t,n,r,l,e);case 7:return ot(t,n,n.pendingProps,e),n.child;case 8:return ot(t,n,n.pendingProps.children,e),n.child;case 12:return ot(t,n,n.pendingProps.children,e),n.child;case 10:t:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,u=l.value,I(Vr,r._currentValue),r._currentValue=u,o!==null)if(Ot(o.value,u)){if(o.children===l.children&&!ft.current){n=Gt(t,n,e);break t}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var i=o.dependencies;if(i!==null){u=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Jt(-1,e&-e),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?s.next=s:(s.next=v.next,v.next=s),f.pending=s}}o.lanes|=e,s=o.alternate,s!==null&&(s.lanes|=e),xo(o.return,e,n),i.lanes|=e;break}s=s.next}}else if(o.tag===10)u=o.type===n.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(y(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),xo(u,e,n),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===n){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}ot(t,n,l.children,e),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Yn(n,e),l=Pt(l),r=r(l),n.flags|=1,ot(t,n,r,e),n.child;case 14:return r=n.type,l=Rt(r,n.pendingProps),l=Rt(r.type,l),Di(t,n,r,l,e);case 15:return ja(t,n,n.type,n.pendingProps,e);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),Lr(t,n),n.tag=1,dt(r)?(t=!0,Wr(n)):t=!1,Yn(n,e),pa(n,r,l),Lo(n,r,l,e),Mo(null,n,r,!0,t,e);case 19:return Wa(t,n,e);case 22:return Ha(t,n,e)}throw Error(y(156,n.tag))};function oc(t,n){return Ms(t,n)}function Nd(t,n,e,r){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,n,e,r){return new Nd(t,n,e,r)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Md(t){if(typeof t=="function")return Du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zo)return 11;if(t===bo)return 14}return 2}function dn(t,n){var e=t.alternate;return e===null?(e=Ct(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&14680064,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e}function Mr(t,n,e,r,l,o){var u=2;if(r=t,typeof t=="function")Du(t)&&(u=1);else if(typeof t=="string")u=5;else t:switch(t){case zn:return xn(e.children,l,o,n);case Yo:u=8,l|=8;break;case Yl:return t=Ct(12,e,n,l|2),t.elementType=Yl,t.lanes=o,t;case Zl:return t=Ct(13,e,n,l),t.elementType=Zl,t.lanes=o,t;case bl:return t=Ct(19,e,n,l),t.elementType=bl,t.lanes=o,t;case ms:return ml(e,l,o,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ds:u=10;break t;case ps:u=9;break t;case Zo:u=11;break t;case bo:u=14;break t;case Zt:u=16,r=null;break t}throw Error(y(130,t==null?t:typeof t,""))}return n=Ct(u,e,n,l),n.elementType=t,n.type=r,n.lanes=o,n}function xn(t,n,e,r){return t=Ct(7,t,r,n),t.lanes=e,t}function ml(t,n,e,r){return t=Ct(22,t,r,n),t.elementType=ms,t.lanes=e,t.stateNode={isHidden:!1},t}function Vl(t,n,e){return t=Ct(6,t,null,n),t.lanes=e,t}function Ql(t,n,e){return n=Ct(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function $d(t,n,e,r,l){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ou(t,n,e,r,l,o,u,i,s){return t=new $d(t,n,e,i,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ct(3,null,null,n),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),t}function Dd(t,n,e){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:t,containerInfo:n,implementation:e}}function uc(t){if(!t)return mn;t=t._reactInternals;t:{if(Dn(t)!==t||t.tag!==1)throw Error(y(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break t;case 1:if(dt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break t}}n=n.return}while(n!==null);throw Error(y(171))}if(t.tag===1){var e=t.type;if(dt(e))return oa(t,e,n)}return n}function ic(t,n,e,r,l,o,u,i,s){return t=Ou(e,r,!0,t,l,o,u,i,s),t.context=uc(null),e=t.current,r=ut(),l=fn(e),o=Jt(r,l),o.callback=n??null,an(e,o,l),t.current.lanes=l,Xe(t,l,r),pt(t,r),t}function vl(t,n,e,r){var l=n.current,o=ut(),u=fn(l);return e=uc(e),n.context===null?n.context=e:n.pendingContext=e,n=Jt(o,u),n.payload={element:t},r=r===void 0?null:r,r!==null&&(n.callback=r),t=an(l,n,u),t!==null&&(Dt(t,l,u,o),Pr(t,l,u)),u}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ji(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function Iu(t,n){Ji(t,n),(t=t.alternate)&&Ji(t,n)}function Od(){return null}var sc=typeof reportError=="function"?reportError:function(t){console.error(t)};function zu(t){this._internalRoot=t}hl.prototype.render=zu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(y(409));vl(t,n,null,null)};hl.prototype.unmount=zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Mn(function(){vl(null,t,null,null)}),n[Qt]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var n=js();t={blockedOn:null,target:t,priority:n};for(var e=0;e<tn.length&&n!==0&&n<tn[e].priority;e++);tn.splice(e,0,t),e===0&&As(t)}};function qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vi(){}function Id(t,n,e,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=el(u);o.call(f)}}var u=ic(n,r,t,0,null,!1,!1,"",Vi);return t._reactRootContainer=u,t[Qt]=u.current,Ae(t.nodeType===8?t.parentNode:t),Mn(),u}for(;l=t.lastChild;)t.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var f=el(s);i.call(f)}}var s=Ou(t,0,!1,null,null,!1,!1,"",Vi);return t._reactRootContainer=s,t[Qt]=s.current,Ae(t.nodeType===8?t.parentNode:t),Mn(function(){vl(n,s,e,r)}),s}function gl(t,n,e,r,l){var o=e._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var i=l;l=function(){var s=el(u);i.call(s)}}vl(n,u,t,l)}else u=Id(e,n,t,l,r);return el(u)}zs=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var e=ke(n.pendingLanes);e!==0&&(eu(n,e|1),pt(n,J()),!(M&6)&&(oe=J()+500,yn()))}break;case 13:Mn(function(){var r=Kt(t,1);if(r!==null){var l=ut();Dt(r,t,1,l)}}),Iu(t,1)}};ru=function(t){if(t.tag===13){var n=Kt(t,134217728);if(n!==null){var e=ut();Dt(n,t,134217728,e)}Iu(t,134217728)}};qs=function(t){if(t.tag===13){var n=fn(t),e=Kt(t,n);if(e!==null){var r=ut();Dt(e,t,n,r)}Iu(t,n)}};js=function(){return O};Hs=function(t,n){var e=O;try{return O=t,n()}finally{O=e}};ao=function(t,n,e){switch(n){case"input":if(eo(t,e),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<e.length;n++){var r=e[n];if(r!==t&&r.form===t.form){var l=sl(r);if(!l)throw Error(y(90));hs(r),eo(r,l)}}}break;case"textarea":gs(t,e);break;case"select":n=e.value,n!=null&&Qn(t,!!e.multiple,n,!1)}};Ps=Nu;xs=Mn;var zd={usingClientEntryPoint:!1,Events:[Ze,An,sl,Cs,_s,Nu]},ge={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qd={bundleType:ge.bundleType,version:ge.version,rendererPackageName:ge.rendererPackageName,rendererConfig:ge.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rs(t),t===null?null:t.stateNode},findFiberByHostInstance:ge.findFiberByHostInstance||Od,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{ll=gr.inject(qd),jt=gr}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zd;St.createPortal=function(t,n){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(n))throw Error(y(200));return Dd(t,n,null,e)};St.createRoot=function(t,n){if(!qu(t))throw Error(y(299));var e=!1,r="",l=sc;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Ou(t,1,!1,null,null,e,!1,r,l),t[Qt]=n.current,Ae(t.nodeType===8?t.parentNode:t),new zu(n)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=Rs(n),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Mn(t)};St.hydrate=function(t,n,e){if(!yl(n))throw Error(y(200));return gl(null,t,n,!0,e)};St.hydrateRoot=function(t,n,e){if(!qu(t))throw Error(y(405));var r=e!=null&&e.hydratedSources||null,l=!1,o="",u=sc;if(e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),n=ic(n,null,t,1,e??null,l,!1,o,u),t[Qt]=n.current,Ae(t),r)for(t=0;t<r.length;t++)e=r[t],l=e._getVersion,l=l(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,l]:n.mutableSourceEagerHydrationData.push(e,l);return new hl(n)};St.render=function(t,n,e){if(!yl(n))throw Error(y(200));return gl(null,t,n,!1,e)};St.unmountComponentAtNode=function(t){if(!yl(t))throw Error(y(40));return t._reactRootContainer?(Mn(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};St.unstable_batchedUpdates=Nu;St.unstable_renderSubtreeIntoContainer=function(t,n,e,r){if(!yl(e))throw Error(y(200));if(t==null||t._reactInternals===void 0)throw Error(y(38));return gl(t,n,e,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(t){console.error(t)}}ac(),is.exports=St;var jd=is.exports,Qi=jd;Gl.createRoot=Qi.createRoot,Gl.hydrateRoot=Qi.hydrateRoot;const Hd="_wrapper_10uzp_5",Ad="_open_menu_10uzp_12",Ki={wrapper:Hd,open_menu:Ad},Fd="_menu_nav_niuu8_1",Ud="_menu_nav_list_niuu8_15",Gi={menu_nav:Fd,menu_nav_list:Ud},Wd="_menu_button_ubtac_1",Bd="_menu_popup_ubtac_19",Kl={menu_button:Wd,menu_popup:Bd},cc=vt.memo(({text:t,id:n,position:e})=>$.jsx("button",{className:e==="menu"?Kl.menu_button+" "+Kl.menu_popup:Kl.menu_button,id:n||null,children:t})),Jd="_dropDown_5n42j_1",Vd="_dropDown_list_5n42j_5",Xi={dropDown:Jd,dropDown_list:Vd},Qd={ques:"Что такое HTML",result:`
	HTML (Hyper Text Markup Language) - это язык разметки гипертекста, 
	используемый для создания веб-страниц. Он определяет структуру веб-страницы, 
	размещая текст, изображения и другие элементы на странице. С помощью HTML 
	можно создать заголовки, абзацы, списки, таблицы и многие другие элементы. 
	Кроме того, HTML позволяет добавлять ссылки на другие веб-страницы или ресурсы, 
	такие как изображения или видео. Таким образом, HTML является основным языком, 
	используемым для создания веб-сайтов и веб-приложений.
`},Kd={ques:"Что такое HTML-элемент? Какова его структура?",result:`
	HTML-элемент - это структурная единица HTML-документа. Он представляет собой контейнер,
	который может содержать другие элементы, текст, изображения и т. д. Структура 
	HTML-элемента включает следующие атрибуты:

	-Имя - это строка, которая идентифицирует элемент. Например, <h1> обозначает 
	заголовок первого уровня.

	-Атрибуты - дополнительные параметры, которые могут быть использованы для 
	настройки элемента. Например, тег <img> может иметь атрибут src, указывающий 
	на URL изображения.

	-Содержание - это текст или другие элементы, которые находятся внутри 
	элемента. Например, элемент <p> содержит текст абзаца.

	Все эти элементы объединяются для создания структуры веб-страницы.
`},Gd={ques:"Типы верстки",result:`
	1.Фиксированная - все элементы на странице жесткои зафиксированы 
	статическими размерами,	не меняют свой размер при изменении окна

	2.Резиновая - блоки меняют свой размер в зависимости от размера экрана,
	без перестроения элементов

	3.Адаптивная - блоки меняют свой размер и расположение при достижении 
	определенного размера экрана, но не тянуться при ресайзе окна

	4.Отзывчивая - совмещает в себе резиновую и адаптивную верстку
`},Xd={ques:"Что такое атрибуты в HTML",result:`
	Атрибуты в HTML - это дополнительные параметры, которые можно использовать 
	для настройки элементов. Они указываются в открывающем теге элемента, и их 
	значения заключаются в двойные кавычки. Например:

	Атрибуты могут использоваться для определения размера, положения, стиля и 
	других свойств элементов. Они также могут быть использованы для добавления 
	дополнительной информации о содержимом элемента, такой как заголовок или 
	альтернативный текст для изображений.
`},Yd={ques:"Глобальные атрибуты есть в HTML",result:`
	В HTML есть несколько глобальных атрибутов, которые могут использоваться 
	в любом элементе. Вот некоторые из них:

	lang - указывает язык содержимого элемента.

	dir - определяет направление текста (ltr или rtl).

	accesskey - определяет клавишу для получения доступа к элементу (обычно 
	при нажатии Alt + указанная клавиша).

	tabindex - определяет порядок обхода элементов с помощью Tab.

	title - содержит текст всплывающей подсказки при наведении курсора на элемент.

	Это только некоторые из доступных глобальных атрибутов. Полный список 
	можно найти в спецификации HTML.
`},Zd={ques:"Что такое категории контента в HTML5",result:`
	В HTML5 существует несколько категорий контента, которые определяют, как 
	содержимое должно быть отображено на экране. Некоторые из них включают:

	-Flow content: Это основная категория контента, которая включает элементы, 
	такие как теги <p>, <div>, и <span>. Эти элементы могут содержать другие 
	элементы или текст.
	-Phrasing content: Эта категория включает элементы, которые являются частью 
	основного контента, такие как заголовки, списки и таблицы.
	-Embedded content: Эта категория включает медиа-элементы, такие как видео
	и аудио, которые встраиваются в страницу.
	-Interactive content: Эта категория включает интерактивные элементы, такие 
	как кнопки и формы, которые позволяют пользователю взаимодействовать с 
	веб-страницей.

	Каждая категория имеет свои собственные атрибуты и стили, которые определяют, как контент отображается на экране.
`},bd={ques:"Что такое doctype? И для чего он используется",result:`
	Doctype - это декларация типа документа, которая указывает, какой версией 
	HTML или XHTML является документ. Он используется для того, чтобы сообщить 
	браузеру, какую версию HTML или XHTML следует использовать для отображения 
	документа. Это также помогает обеспечить правильное отображение документа и 
	предотвращает появление ошибок, связанных с несовместимостью версий.
`},tp={ques:"Базовая структуру HTML-страницы",result:`
	Базовая структура HTML-страницы обычно включает в себя следующие элементы:
	<!DOCTYPE html> - этот тег указывает тип документа и версию HTML.
	<html> - этот тег является корневым тегом для HTML-документа и включает все остальные теги.
	<head> - этот раздел содержит метаданные и инструкции для браузера.
	  -<title> - этот тег содержит заголовок страницы, который отображается в строке 
	заголовка браузера.
	  -meta - этот тег используется для указания метаинформации, такой как описание 
	страницы, ключевые слова и т.д.
	  -<link rel="stylesheet" href="style.css"> - этот тег подключает внешний CSS-файл, 
	который содержит стили для страницы.
	<body> - этот раздел содержит основное содержимое страницы.
	  -header - этот элемент содержит верхний колонтитул страницы, такой как логотип 
	  или навигационное меню.
`},np={ques:"Что такое валидация? Типы проверок HTML документа",result:`
	Валидация - это процесс проверки правильности и соответствия стандартам HTML-кода.

	Основные типы проверок:

	-Проверка на соответствие стандартам W3C (World Wide Web Consortium).
	-Проверка на наличие ошибок в коде (например, незакрытые теги, дублирующиеся 
	идентификаторы и т.д.).
	-Проверка на совместимость с различными браузерами и устройствами.
	-Проверка на безопасность (отсутствие уязвимостей и кросс-браузерных проблем).
`},ep={ques:"Семантические теги",result:`
	Семантика - это смысл и значение элементов HTML. Семантические теги - это теги, которые 
	имеют конкретное значение и используются для описания структуры и содержания веб-страницы

`},rp={ques:"Как семантически правильно сверстать картинку с подписью",result:`
	<figure>
        <img src="/path/to/image.jpg" alt="Image description">
        <figcaption>Figure caption</figcaption>
    </figure>
`},lp={ques:"Типы списков в HTML",result:`
	В HTML существует несколько типов списков:

	-неупорядоченные списки (unordered lists) - используются для перечисления 
	пунктов, не имеющих определенного порядка. Для создания такого списка 
	используется тег <ul>;

	-упорядоченные списки (ordered lists) - используются для нумерации пунктов. 
	Тег для создания такого списка - <ol>;

	-определения списка (definition lists) - используются для создания списка, 
	каждый элемент которого состоит из двух частей: термина и его определения. 
	Тег для такого списка - <dl>.
`},op={ques:"Разница между <script>, <script async> и <script defer>",result:`
	Разница между тегами <script>, <script async> и <script defer> заключается в том,
	как браузер обрабатывает код, содержащийся в этих тегах.

	Тег <script> указывает браузеру на необходимость загрузить и выполнить указанный 
	скрипт. Браузер загружает скрипт и выполняет его сразу же, как только он полностью 
	загружен. Это означает, что если скрипт большой и занимает много времени для загрузки, 
	это может замедлить загрузку остальной части страницы.

	Тег <script async> указывает браузеру, что скрипт должен загружаться асинхронно, 
	т.е. браузер начинает загрузку скрипта сразу же, но не ждет, пока он полностью 
	загрузится, прежде чем продолжить загрузку и выполнение остальной части страницы.

	Это может ускорить загрузку страницы, поскольку браузер может начать загрузку других 
	ресурсов, пока скрипт еще загружается.

	Однако, этот подход имеет недостаток: поскольку скрипт загружается асинхронно, он 
	может начать выполняться до того, как он полностью загружен, что может привести к
	ошибкам и неправильному поведению.
`},up={ques:"Тег <datalist>",result:`

	Элемент <datalist> используется для создания выпадающего списка с предварительно выбранными значениями. 
	Он позволяет пользователю выбрать значение из списка, а затем отправить его вместе с формой.

	<label for="country">Country:</label>
	<input list="countries" id="country" name="country">
	<datalist id="countries">
	  <option value="Afghanistan">
	  <option value="Albania">
	  <option value="Algeria">
	  ...
	</datalist>
`},ip={ques:"<link> для подключения CSS внутри тэга <head>, а <script> JS ставить перед закрывающимся тэгом </body>",result:`

	Подключение CSS внутри тега <head> является хорошей практикой, так как это 
	позволяет браузеру начать парсинг и применение стилей сразу после загрузки 
	документа. Это ускоряет процесс визуализации страницы и делает его более 
	плавным для пользователя.

	С другой стороны, подключение JS перед закрывающимся тегом </body> позволяет 
	загрузить и выполнить скрипт после загрузки всего содержимого страницы. Это 
	помогает избежать проблем с блокировкой рендеринга и улучшить производительность, 
	так как браузер может продолжать загрузку и обработку страницы, пока JS еще выполняется.
`},sp={ques:"Что такое мета-тэги",result:`

	Мета-теги - это специальные HTML-теги, которые используются для предоставления 
	информации о веб-странице или сайте. Они обычно располагаются в разделе head документа 
	и не отображаются в видимой части страницы. Некоторые распространенные примеры 
	мета-тегов включают:

	-Title - используется для определения заголовка веб-страницы, который отображается 
	в строке заголовка браузера и поисковых систем.

	-Description - используется для описания содержания страницы, которое может быть 
	использовано поисковыми системами при создании краткого описания страницы в результатах поиска.

	-Keywords - устаревший тег, который использовался для указания списка ключевых слов, 
	связанных с веб-страницей. В настоящее время поисковые системы редко используют этот тег.

	-Author - тег, используемый для указания автора или создателей веб-страницы.

	-Robots - тег для указания правил индексации страницы поисковыми роботами.
`},ap={ques:"meta-теге с name=viewport",result:`
	Meta-тег viewport используется для указания размеров и ориентации экрана мобильного 
	устройства или планшета, на котором отображается веб-страница. Это позволяет 
	веб-приложению адаптировать свой интерфейс для лучшего отображения на различных устройствах.

	Вот пример использования meta-тега viewport:
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	Этот тег говорит браузеру устройства, что ширина веб-страницы должна быть равна ширине 
	экрана устройства, и что масштаб страницы должен быть установлен на 100%.
`},cp={ques:"Что такое элемент <canvas>",result:`

	<canvas> - векторный

	Элемент <canvas> используется для рисования 2D графики на веб-страницах. 
	С его помощью можно создавать анимацию, игры, визуализировать данные и многое 
	другое. На канве можно рисовать линии, фигуры, текст, а также загружать изображения 
	и работать с ними. Данные на канве можно обрабатывать с помощью JavaScript.
`},fp={ques:"Свойство valueAsNumber",result:`

	<canvas> - векторный

	valueAsNumber - это свойство, которое позволяет получить числовое значение
	элемента input. Оно может быть полезно, если вы хотите работать с введенными 
	данными как с числами, а не как со строками. Например, если у вас есть поле 
	для ввода числа, вы можете получить его значение с помощью valueAsNumber и 
	выполнить какие-то операции над ним.

	<input type="number" valueAsNumber>
`},dp={ques:"Что такое атрибут target",result:`

	Атрибут target используется для указания окна или фрейма, в который должна 
	загружаться страница при выполнении ссылки.

	Он может принимать следующие значения:

	-_blank - открыть ссылку в новом окне
	-_self - загрузить ссылку в текущем окне
	-_parent - загрузить ссылку в родительском окне, если оно есть
	-_top - загрузить ссылку в верхнем уровне документа, если возможно
	-имя фрейма - загрузить ссылку в указанном фрейме
`},pp={ques:"ApplicationCache в HTML5",result:`

	Application Cache (кэш приложений) в HTML5 - это механизм кэширования,
	который позволяет сохранять веб-страницы и ресурсы на компьютере пользователя
	для последующего использования без подключения к интернету. Он позволяет 
	приложениям работать без доступа в интернет, а также сокращает время 
	загрузки при следующем посещении сайта.

	<!DOCTYPE html>

	<html manifest="cache.appcache">
	<head>
	    <title>HTML5 AppCache Demo</title>
	</head>
`},mp={ques:"Что такое srcset",result:`

	SRCset - это атрибут тега <img>, который позволяет определить несколько 
	источников изображения для разных разрешений экрана. Он предоставляет 
	набор ресурсов разного размера, и браузер выбирает наиболее подходящий 
	ресурс в зависимости от текущего размера окна просмотра. Это позволяет 
	оптимизировать загрузку изображений и улучшить производительность веб-страницы.

	Работает SRCset следующим образом:
	1.Браузер считывает атрибут srcset и определяет размеры изображений, 
	указанных в списке.

	2.Браузер вычисляет ширину окна просмотра и сравнивает ее с 
	указанными размерами изображений.

	3.Браузер выбирает тот ресурс, ширина которого ближе всего к 
	ширине окна просмотра, и загружает его.

	4.Если подходящего ресурса не найдено, браузер загружает ресурс 
	с указанным src атрибутом (если такой есть).

	5.Таким образом, SRCset позволяет создавать адаптивные изображения, 
	которые автоматически изменяются в зависимости от размера окна браузера, 
	улучшая опыт пользователя и оптимизируя загрузку ресурсов.
`},vp={ques:"Как семантически верно сверстать навигационное меню",result:`
	<nav>
	  <ul>
	    <li><a href="#">Пункт меню 1</a></li>
	    <li><a href="#">Пункт меню 2</a></li>
	    <li><a href="#">Пункт меню 3</a></li>
	  </ul>
	</nav>
`},hp={ques:"Что такое <iframe>",result:`
	Если кратко, то iframe — это HTML-тег, который позволяет встроить 
	один документ в другой. Например, с его помощью можно вставить на 
	сайт видео с YouTube или стороннюю веб-страницу.
`},yp={ques:"Для чего используются тэги <sub> и <sup>",result:`
	Тэг <sub> используется для создания нижнего индекса (например, в химических формулах). 

	Тэг <sup> используется для создания верхнего индекса (например, степени или порядковые
	 числительные).
`},gp={ques:"Как можно скрыть элемент разметки не используя CSS и JS",result:`
	Можно использовать атрибут hidden в HTML:

	<div hidden> скрытый элемент </div>
`},Sp={ques:"<meter> и <progress> html",result:`
	-Тег <meter> используется для отображения относительного значения или состояния.
	-Тег <progress> используется для индикации прогресса выполнения задачи.

	<meter id="speedometer" min="0" max="100" value="75">
  		75%
	</meter>

	<progress max="100">
  		<progress-bar style="width:20%;" role="progressbar" aria-valuenow="20" 
  		aria-valuemin="0" aria-valuemax="100"></progress-bar>
	</progress>
`},wp={ques:"Как можно сгруппировать опции внутри тэга <select>",result:`
	<select>
	  <optgroup label="Группа 1">
	    <option value="1">Опция 1</option>
	    <option value="2">Опция 2</option>
	  </optgroup>
	  <optgroup label="Группа 2">
	    <option value="3">Опция 3</option>
	    <option value="4">Опция 4</option>
	  </optgroup>
	</select>
`},kp={ques:"Для чего используется атрибут enterkeyhint",result:`
	Атрибут enterkeyhint используется для указания того, какой тип ввода 
	ожидается после нажатия клавиши Enter. Возможные значения:

	-enter - ожидается ввод текста.
	-done - ожидается завершение ввода.
	-next - ожидается переход к следующему полю ввода.
	-go - ожидается выполнение действия “перейти”.
	-search - ожидается запуск поиска.
	-send - ожидается отправка формы.

	Значение по умолчанию зависит от браузера и операционной системы.
`},Tp={ques:" Для чего используют атрибут novalidate",result:`
	Атрибут novalidate используется для отключения валидации формы по 
	умолчанию. Валидация формы - это процесс проверки правильности введенных 
	данных, чтобы убедиться, что они соответствуют требованиям. Отключение 
	валидации может быть полезно, если вы хотите создать форму, которая будет 
	отправлять данные без проверки, или если вы хотите настроить свою собственную 
	валидацию.
`},Cp={ques:"Для чего используют атрибут inputmode",result:`
	Атрибут inputmode используется для определения того, какой тип данных 
	ожидается от пользователя. Он может иметь следующие значения:

	-text - обычный текст;
	-tel - номер телефона;
	-url - URL;
	-email - адрес электронной почты;
	-decimal - число с десятичной точкой;
	-search - поисковый запрос.
`},_p={ques:" Для чего используется атрибут pattern",result:`
	Атрибут pattern используется для определения регулярного выражения, 
	которое будет использоваться для проверки введённого пользователем значения 
	атрибуту data-pattern. Если значение не соответствует регулярному выражению, 
	то значение считается недействительным.

	<input type="text" id="fname" name="fname" pattern="[a-zA-Zа-яА-ЯёЁ]+">

	<!-- здесь мы проверяем, состоит ли введённое значение из букв латинского и русского алфавита -->
`},Pp={ques:"Способы улучшения производительности веб-страницы при использовании HTML",result:`
	-Минимизация HTML-кода: Удалите все ненужные пробелы, переносы строк и комментарии,
	 которые не добавляют ценности вашему коду.

	-Правильный выбор элементов: Используйте только те элементы, которые действительно 
	необходимы для вашего контента. Избегайте использования ненужных элементов, так как 
	это может увеличить размер и сложность вашего кода.

	-Кэширование ресурсов: Кэшируйте изображения, CSS и JavaScript файлы, чтобы уменьшить 
	количество HTTP-запросов и улучшить производительность вашей веб-страницы.

	-Сжатие ресурсов: Сжимайте CSS, JavaScript и HTML файлы для уменьшения их размера и 
	ускорения загрузки.

	-Оптимизация изображений: Используйте форматы изображений, которые поддерживают 
	сжатие без потери качества (например, JPEG), а также оптимизируйте размеры и разрешение 
	изображений для разных устройств и разрешений экрана.

	-Использование атрибута defer для внешних скриптов: Это позволяет браузеру загружать и 
	выполнять скрипт только тогда, когда это необходимо, что может уменьшить время загрузки страницы.

	-Использование асинхронной загрузки для внешних скриптов: Позволяет загружать скрипты 
	параллельно с загрузкой основного HTML-документа, что может ускорить загрузку страницы.
`},xp={ques:"Основные атрибуты HTML-форм? Как они влияют на отправку данных с веб-страницы",result:`
	Основные атрибуты HTML форм:

	action - определяет URL, на который будет отправлен запрос после отправки формы.

	method - указывает метод отправки данных (обычно GET или POST).

	enctype - указывает тип кодирования данных, отправляемых на сервер 
	(обычно application/x-www-form-urlencoded или multipart/form-data).

	target - задает имя фрейма или окна, в которое будет загружаться результат отправки
	формы. Если этот атрибут не указан, то результат будет загружен в текущее окно.

	accept-charset - указывает кодировку символов, используемую для 
	отправки данных формы.

	autocomplete - используется для управления автозаполнением полей 
	формы (вкл./выкл.).

	required - если этот атрибут присутствует, поле формы становится 
	обязательным для заполнения.

	name - имя поля формы, которое используется для идентификации 
	его на сервере.

	value - значение поля формы по умолчанию.

	multiple - используется для множественного выбора в 
	списках и чекбоксах.

	disabled - отключает поле формы.
`},Ep={i:Qd,sl:Kd,t:Gd,a:Xd,g:Yd,k:Zd,d:bd,st:tp,v:np,s:ep,f:rp,l:lp,da:op,dl:up,z:ip,m:sp,w:ap,cv:cp,av:fp,tr:dp,ac:pp,sc:mp,nv:vp,fr:hp,sb:yp,hd:gp,mp:Sp,op:wp,ek:kp,nl:Tp,im:Cp,pt:_p,pf:Pp,sa:xp},Lp={ques:"Что такое css?",result:`
	css - это каскадные таблицы стилей,CSS используется для определения 
	стилей (правил) оформления документов — включая дизайн, вёрстку и 
	вариации макета для различных устройств и размеров экрана.
`},Rp={ques:"Приоритеты селекторов",result:`
	По убыванию:
	1.Important
	2.Инлайн стили
	3.ID
	4.Селектор классов
	5.Cелектор тегов
`},Np={ques:"Способы добавить CSS на страницу",result:`
	1.Подключить файл к документу
	2.Прописать инлайн стили
	3.Прописать стили через тег style
`},Mp={ques:"Позиционирование",result:`
	1.static — дефолтное состояние
	2.absolute — данное значение задает абсолютное позиционирование элемента.
	3.fixed — фиксированное позиционирование относительно окна элемента.
	4.sticky — это совмещение относительного и фиксированного позиционирования. 
	5.relative — относительное позиционирование элемента.
`},$p={ques:"Блочная модель css",result:`
	Блочная модель - это правила по которым браузер определяет размер 
	элемента на странице, его ширину и высоту

	Блочная модель состоит из нескольких CSS-свойств

	1.контентная часть 
	2.padding 
	3.margin 
	4.border
`},Dp={ques:"Cелектор и какие селекторы существуют",result:`
	С помощью селекторов мы определяем, к каким элементам нужно применить
	стили, перечисленные внутри фигурных скобок.

	1.Селектор по тегу 
	2.Селектор по классу
	3.Селектор по id
	4.Универсальный селектор (*)
	5.Селекторы по атрибуту [attr]
`},Op={ques:"Что такое специфичность селектора?",result:`
	Специфичность — это алгоритм, благодаря которому браузер
	определяет, какие именно стили из всего набора применить к элементу.

	Можно предсатвить любой селектор в виде трёх нулей: 0.0.0.

	Селекторы по идентификатору увеличивают первую цифру.
	Селекторы по классу, по атрибуту или псевдокласс увеличивают вторую цифру.
	Селектор по тегу или псевдоэлемент увеличивают третью цифру.

	#id .class tag
	    0. 0. 0  

	У атрибута style вес равен четырем цифрам(1.0.0.0), 
	соответственно вес больше всех 
	Можно увеличивать вес селекторов так: .tomato .tomato
`},Ip={ques:"Разница между Normalize.css и Reset CSS??",result:`
	reset.css – как и видно по названию файла, сбрасывает большинство
	стилей браузера, которые в нем заданы по умолчанию

	normalize.css – этот файл не только задает стили по умолчанию 
	там где это необходимо, но и исправляет некоторые недостатки
	старых браузеров
`},zp={ques:"Разница между классом и идентификатором?",result:`
	Классы (class) - это механизм, позволяющий задавать одно и то
	же свойство стиля для нескольких элементов веб-страницы.

	Идентификаторы (id) - атрибут id указывает уникальный 
	идентификатор для элемента HTML (значение должно быть уникальным
 	в HTML-документе).

 	Поиск по классу выполняется за О(n), по id - за О(1)
`},qp={ques:"CSS спрайт?",result:`
	CSS-спрайт – способ объединить много изображений в одно, чтобы:

	-Сократить количество обращений к серверу.
	-Загрузить несколько изображений сразу, включая те, которые 
	 понадобятся в будущем.
	-Если у изображений сходная палитра, то объединённое изображение 
	 будет меньше по размеру, чем совокупность исходных картинок.
`},jp={ques:"Вендорный префикс?",result:`
	Вендорный префикс (vendor prefix) — приставка к свойству CSS,
	обеспечивающая поддержку браузерами, в которых определенная
	функция ещё не внедрена на постоянной основе (находится в стадии
	разработки или тестирования). 
	Пример вендорного префикса:	 -webkit- или -moz-.
`},Hp={ques:"Что такое псевдоэлементы?",result:`
	Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору,
	которое позволяет стилизовать определённую часть выбранного элемента

	::after
	::before
	::cue
	::first-letter
	::first-line
	::selection
	::slotted
	::backdrop 
	::placeholder 
	::marker
	::spelling-error
	::grammar-error 
`},Ap={ques:"Схлопывание внешних отступов?",result:`
	Отступы margin-top и margin-bottom иногда объединяются в один,
	с размером равным наибольшему из них (или размеру одного, если они равны)
`},Fp={ques:"css препроцессоры",result:`
	CSS препроцессор (от англ. CSS preprocessor) — это надстройка над CSS,
	которая добавляет ранее недоступные возможности для CSS, с помощью 
	новых синтаксических конструкций.
	предоставляет удобные синтаксические конструкции для разработчика,
	чтобы упростить, и тем самым, ускорить разработку

	Less
	Sass (SCSS)
	Stylus
`},Up={ques:"Контекст наложения",result:`
	Контекст наложения это концепция трёхмерного расположения 
	HTML-элементов вдоль оси Z по отношению к пользователю


`},Wp={ques:"Как с помощью CSS определить, поддерживается ли свойство в браузере?",result:`
	Через CSS директиву под названием @supports.

	@supports (display: flex) {
   		/* Стили */
	}
`},Bp={ques:"Глобальные ключевые слова в CSS?",result:`
	Для всех свойств CSS, помимо их стандартных значений, можно задать
	значения в виде ключевых слов:

	-initial - сбрасывает все указанные значения свойства для конкретного
			   блока до этих самых значений по умолчанию.;
	-inherit - наследует стиль от родителя;
	-unset - сбрасывает значение до умолчания
	-revert - сбрасывает значение свойства до указанного в стилях браузера.
`},Jp={ques:"currentColor в CSS?",result:`
	Используется для добавления существующего color, чтобы не
	дублировать цвет

	.element {
  		color: darkblue;
  		box-shadow: 0 0 5px currentColor;
	}
`},Vp={ques:"Свойство display в CSS?",result:`
	display влияет сразу на две вещи: на расположение самого бокса в потоке и 
	на расположение дочерних элементов внутри бокса.

	-none
	-flex
	-block
	-inline
	-inline-block
	-table

	list-item, run-in
`},Qp={ques:"Свойство float в CSS?",result:`
	Свойство float CSS указывает, что элемент должен быть взят из нормального 
	потока и помещён вдоль левой или правой стороны его контейнера, где текст
	и встроенные элементы будут обтекать его.

`},Kp={ques:"Свойство text-rendering?",result:`
	Влияет на скорость и точность отрисовки шрифтов,

	auto Скопировать ссылку "auto"
	Значение по умолчанию. Браузер пытается самостоятельно угадать, в какой 
	момент отрисовки важна скорость вывода символов, в какой — читаемость, 
	а в какой — геометрическая точность.

	optimizeSpeed - при отрисовке текста браузер будет ставить в приоритет 
	именно скорость отрисовки, поэтому лигатуры и кернинг будут отключены.

	optimizeLegibility - используется в случае, когда важна не скорость 
	отрисовки, а удобочитаемость текста и визуальная красота сочетаний символов.

	geometricPrecision - основной приоритет при рендеринге текста — 
	геометрическая точность.

	.seelctor {
		 text-rendering: auto; 
	}

`},Gp={ques:"Свойство text-decoration-skip-ink?",result:`
	Свойство text-decoration-skip-ink управляет внешним видом верхнего
	и нижнего подчёркиваний.

`},Xp={ques:"Свойство scrollbar-gutter?",result:`
	scrollbar-gutter решает проблему с «прыгающей» шириной контента при
	появлении или скрытии скроллбара.
`},Yp={ques:"Краткая форма записи свойств?",result:`
	Сокращённые свойства - это такие CSS-свойства, которые позволяют
	одновременно устанавливать значения нескольких других свойств.

	.btn {
  		background: red;
	}
`},Zp={ques:"Контейнерные запросы?",result:`
	Контейнерные запросы похожи на медиа-запросы; единственная разница в том,
	что они делают контейнер или элемент отзывчивым на основе пространства, 
	доступного для контейнера, а не области просмотра всего экрана.
`},bp={ques:"prefers-reduced-motion?",result:`
	Одно из значений директивы @media для проверки пользовательских
	настроек воспроизведения анимации.Медиа-запрос prefers-reduced-motion
	позволяет определить, отключена или уменьшена анимация в системе
	и применять стили CSS, которые это учитывают.
`},tm={i:Lp,p:Rp,e:Np,a:Mp,b:$p,s:Dp,sa:Op,r:Ip,k:zp,u:qp,v:jp,f:Hp,c:Ap,pr:Fp,q:Up,sp:Wp,g:Bp,cc:Jp,fl:Vp,z:Qp,tr:Kp,td:Gp,sg:Xp,br:Yp,ct:Zp,m:bp},nm={ques:"Что такое react?",result:`
	React - это библиотека JavaScript, которая используется
	для создания пользовательских интерфейсов. Она была 
	создана компанией Facebook и стала очень популярной 
	среди разработчиков. React позволяет создавать компоненты
	интерфейса, которые могут быть использованы многократно.
	Это ускоряет процесс разработки и делает код более 
	организованным.
`},em={ques:"Что такое react?",result:`
	-React использует виртуальное DOM-дерево для оптимизации
	 производительности.

	-React позволяет создавать повторно используемые компоненты,
	 что упрощает разработку и улучшает читаемость кода.

	-React поддерживает состояние и пропсы для управления
	 данными.

	-React имеет встроенный инструмент для тестирования - Jest.

	-React интегрируется с другими инструментами и фреймворками,
	 такими как Redux, React Router и Material-UI.

	-React может использоваться как на стороне клиента 
	(в браузере), так и на стороне сервера (с помощью React 
	Server Side Rendering).
`},rm={ques:"Что такое Virtual DOM",result:`
	-Virtual DOM (Virtual Document Object Model) - это 
	виртуальный аналог настоящего DOM-дерева, используемый в
	React для улучшения производительности приложения. 
	Виртуальный DOM позволяет быстро и эффективно обновить 
	пользовательский интерфейс без необходимости полной 
	перерисовки всей страницы.

	-Работа Virtual DOM основана на том, что при изменении
	данных в приложении React создаёт новый виртуальный DOM,
	сравнивает его с предыдущим виртуальным DOM и находит только
	те элементы, которые реально были изменены. После этого 
	React обновляет настоящий DOM только для изменённых элементов,
	что существенно ускоряет процесс обновления 
	пользовательского интерфейса.
`},lm={ques:"Атрибут key при рендере?",result:`
	Атрибут key используется React при определении порядка 
	рендеринга элементов в списке. Если у элементов списка 
	нет уникального ключа, React не сможет определить порядок 
	рендеринга и может возникнуть ошибка или неожиданные результаты.

	При использовании ключей React может определить порядок 
	рендеринга, гарантируя тем самым корректную работу вашего 
	приложения. Ключи должны быть уникальными для каждого 
	элемента списка, и рекомендуется использовать значения, 
	которые однозначно идентифицируют каждый элемент.
`},om={ques:"PureComponent",result:`
	Класс React.PureComponent позволяет создавать на его 
	основе компоненты также, как и класс React.Component,
	однако они имеют одно важное различие.

	В React.PureComponent реализован метод жизненного цикла
	shouldComponentUpdate(), отвечающий за проверку, нужно 
	ли производить перерисовку компонента или нет. Он производит
	поверхностное сравнение пропов и состояния компонента с 
	предыдущими, чтобы понять, изменились ли они, и перерисовка
	происходит только в случае нахождения различий.

	В React.Component перерисовка происходит всегда, так как
	подобная проверка отсутствует. Однако при желании 
	ее может реализовать программист.
`},um={ques:"Higher-Order Component / HOC",result:`
	Компонент высшего порядка - это функция, которая принимает 
	компонент в качестве аргумента и возвращает другой компонент.
	HOC позволяет расширять функциональность компонента без изменения
	его исходного кода. Например, можно создать HOC, который добавляет
	авторизацию к компоненту, не изменяя сам компонент.
`},im={ques:"Жизненный цикл компонентов React",result:`
	1.Инициализация
	2.Монтирование
	3.Обновление
	4.Размонтирование
`},sm={ques:"Что такое Portal",result:`
	Порталы - это способ визуализации элемента в узле DOM, 
	который существует вне иерархии DOM родительского компонента.
	Это полезно для компонентов таких как модальные окна, тултипы, и др

	ReactDOM.createPortal(элемент который, элемент куда) 
`},am={ques:"Что такое React хуки",result:`
	React Hooks – это механизм, позволяющий использовать состояние
	и некоторые другие возможности React внутри функциональных 
	компонентов, не прибегая к классам. Они были представлены в React
	16.8 и позволяют упростить и улучшить код компонентов.

	С помощью Hooks можно работать с состоянием, использовать эффекты
	(например, обработку жизненного цикла компонента или асинхронные
	операции), а также применять другие функции React. При этом Hooks
	не заменяют полностью классы, а лишь упрощают их использование.
`},cm={ques:"Что Такое JSX?",result:`
	JSX — это язык разметки, который используется для создания 
	пользовательских интерфейсов (UI) на основе HTML. Он является 
	расширением языка JavaScript и позволяет создавать элементы HTML, 
	такие как div, span, input и др., прямо в коде JavaScript. JSX 
	также позволяет определять стили CSS и обрабатывать события 
	JavaScript внутри одного файла.
`},fm={ques:"Разница между состоянием(state) и пропсами(props)?",result:`
	Состояние (state) компонента - это внутренняя переменная, которая
	хранит данные компонента. Состояние изменяется при выполнении 
	определенных действий, например, при нажатии на кнопку.

	Пропсы (props) - это входные данные, которые передаются компоненту 
	от родительского компонента. Пропсы используются для передачи данных 
	между компонентами и не могут быть изменены внутри компонента.

	Основное различие между состоянием и пропсами заключается в том, 
	что состояние изменяется внутри компонента, в то время как пропсы 
	передаются извне и не могут быть изменены.
`},dm={ques:"Что такое React Fiber",result:`
	React Fiber - это новая система рендеринга React, представленная
	в React 16.6, которая предназначена для улучшения производительности
	приложений React. Fiber использует асинхронную модель рендеринга,
	где компоненты могут рендериться параллельно, что позволяет улучшить
	производительность и уменьшить время загрузки страниц.

	Fiber также предоставляет возможность управления приоритетами 
	рендеринга компонентов, что позволяет приложениям React лучше 
	использовать ресурсы браузера и оптимизировать производительность. 
	Кроме того, Fiber поддерживает разделение кода на несколько потоков, 
	что может снизить нагрузку на основной поток и улучшить 
	производительность приложения в целом.
`},pm={ques:"Синтетические события в react",result:`
	Синтетические события в React — это механизм, который позволяет
	компонентам обрабатывать пользовательские события, такие как клики,
	изменения форм и т. д. Это позволяет улучшить производительность
	и гибкость приложения.

	Синтетические события отличаются от обычных тем, что они 
	обрабатываются на уровне компонентов в React, а не на уровне DOM. 
	Это позволяет упростить обработку событий и сделать код более модульным. 
	Кроме того, синтетические события позволяют использовать хуки, что 
	делает код еще более читаемым и удобным для разработки.
`},mm={ques:"Что такое компонент-переключатель (Switching Component)",result:`
	Компонент-переключатель в React используется для отображения или 
	скрытия другого компонента в зависимости от определенного условия. 
	Он принимает условие в качестве параметра и возвращает один из 
	двух компонентов: либо первый компонент, либо второй.
`},vm={ques:"Что такое React DOM",result:`
	React DOM - это библиотека, которая позволяет отображать react 
	компоненты на странице. Она взаимодействует с браузером и рендерит 
	компоненты на страницу. React DOM используется вместе с React, чтобы
	создавать интерактивные и динамические веб-страницы.
`},hm={ques:"Разница между компонентом и контейнером",result:`
	Компонент - это минимальная функциональная единица приложения React,
	которая может состоять из текста, изображений, форм и других элементов.
	Компоненты используются для создания пользовательского интерфейса приложения.

	Контейнеры - это также компоненты, но они используются для управления 
	состоянием и данными в приложении. Они отвечают за обработку данных, 
	поступающих от пользователей, и отправку их на сервер. Контейнеры также 
	могут управлять состоянием компонентов и обновлять их при изменении данных.
`},ym={ques:"Что такое «опрос» (Polling)",result:`
	Опрос (polling) - это метод, при котором клиент периодически 
	запрашивает сервер на наличие новых данных. В React это можно 
	реализовать с помощью компонента, который будет периодически 
	отправлять запрос на сервер для получения новых данных. Для 
	этого можно использовать библиотеку axios или fetch.

	componentDidUpdate() {
    	setTimeout(this.fetchData, 5000); 
  	}

  	render() {
    	if (this.state.data === null) {
      		return <div>Загрузка...</div>;
      	}
    }
`},gm={ques:"ReactDOMServer",result:`
	ReactDOMServer — это модуль в React, который позволяет 
	работать с HTML на стороне сервера. Он используется для 
	создания и управления HTML-разметкой на сервере, что может 
	быть полезно при создании статических сайтов или при 
	рендеринге React-компонентов на сервере.
`},Sm={ques:"Что такое предохранители (Error Boundaries)",result:`
	Предохранители (Error Boundaries) - это специальные компоненты
	в React, которые позволяют обрабатывать ошибки, возникающие
	в дочерних компонентах. Они помогают предотвратить падение
	всего приложения, если один из компонентов выдает ошибку. 
	Предохранители могут показать пользователю уведомление об 
	ошибке или скрыть проблемный компонент
`},wm={ques:"События указателя (Pointer Events)",result:`
	События указателя в React - это события, которые возникают 
	при взаимодействии пользователя с указателем, таким как мышь 
	или сенсорный экран. Они используются для обработки действий 
	пользователя, таких как нажатия, движения мыши и жесты.
`},km={ques:"Инверсия наследования (Inheritance Inversion)",result:`
	Инверсия наследования в React - это принцип, согласно которому 
	компоненты должны принимать свойства и состояния от своих родителей,
	а не передавать их вниз по дереву компонентов. Это помогает 
	сохранить структуру приложения простой и понятной, а также 
	облегчает изменение и расширение компонентов в будущем
`},Tm={ques:"Разница между классовым и функциональным компонентами",result:`
	Классные компоненты предоставляют дополнительные возможности,
	такие как состояние и методы жизненного цикла, которых нет в функциональных
	компонентах. Функциональные компоненты, как правило, проще 
	и используются для более простых задач.
`},Cm={ques:" Разница между useEffect() и componentDidMount()",result:`
	useEffect в React используется для выполнения кода после 
	монтирования компонента или после изменения его пропов. 
	Он также может использоваться для очистки ресурсов, когда 
	компонент размонтируется. componentDidMount - это метод жизненного
	цикла компонента, который выполняется только один раз после монтирования 
	компонента. Он не может использоваться для очистки ресурсов 
	при размонтировании компонента.
`},_m={ques:"Преимущества хуков",result:`
	-Хуки в React предоставляют несколько преимуществ:

	-Хуки позволяют использовать состояние и другие функции React в 
	функциональных компоненрах, что делает их более гибкими и простыми в 
	использовании.

	-Хуки улучшают производительность, так как они не создают новые 
	экземпляры классов для каждого рендера компонента.

	-Хуки упрощают код, так как не нужно создавать новый класс для 
	каждого компонента, и можно использовать один и тот же хук для 
	разных компонентов.

	-Хуки делают код более читаемым и понятным, так как каждый хук 
	выполняет одну конкретную задачу.
`},Pm={ques:"Lifting State Up",result:`
	Поднятие состояния вверх (lifting state up) – это принцип 
	организации структуры компонента в React, при котором состояние 
	выносится на уровень ближайшего родительского компонента, 
	который владеет данными, необходимыми для работы этого состояния. 
	Это позволяет улучшить структуру компонента, уменьшить его 
	сложность и улучшить его повторное использование
`},xm={ques:"Что делает метод shouldComponentUpdate",result:`
	Метод shouldComponentUpdate в React определяет, нужно 
	ли обновлять компонент при следующем рендере. Он принимает 
	пропсы и состояние компонента и возвращает true или false. 
	Если метод возвращает false, компонент не будет обновляться 
	при следующем рендере, что может повысить производительность 
	приложения.
`},Em={ques:"Как реализовать однократное выполнение операции при начальном рендеринге?",result:`
	Для выполнения операции только один раз при первоначальном 
	рендере компонента можно использовать useRef:

	import { useRef } from 'react';

	function Component() {
  		const initialRender = useRef(true);
  		if (initialRender.current) {
    		initialRender.current = false;
    		// Здесь выполняем операцию
  	}

  		return <div>Component</div>;
	}
`},Lm={ques:"useImperativeHandle(), useLayoutEffect()",result:`
	-useImperativeHandle - этот хук используется для предоставления 
	доступа к методам и свойствам компонента из родительского компонента. 
	Это может быть полезно, например, для доступа к данным формы 
	из родительского компонента.

	-useLayoutEffect - этот хук вызывается после того, как компонент 
	отрисован, но до того, как он отображается на экране. Он может 
	использоваться для выполнения операций, которые должны произойти 
	после того, как компонент отрисован, например для анимации.
`},Rm={ques:"Что такое реактивность",result:`
	Реактивность — это свойство системы автоматически реагировать 
	на изменения во внешней среде. В программировании реактивными 
	могут быть библиотеки, языки программирования и фреймворки.

	React — это библиотека для создания пользовательских интерфейсов.
	Она не является реактивной в том смысле, что она не 
	отслеживает автоматически изменения в данных и не обновляет 
	интерфейс. Однако, React предоставляет инструменты для 
	управления состоянием и изменениями в состоянии компонентов, 
	что позволяет разработчикам создавать интерактивные 
	и динамические интерфейсы.
`},Nm={ques:"Лучшие практики безопасности в React",result:`
	-Использование библиотек: Используйте известные и проверенные 
	библиотеки, такие как React Router, Redux, Material UI и т.д. 
	Это помогает предотвратить уязвимости, связанные с неправильной 
	конфигурацией и использованием компонентов.

	-Структурирование кода: Обеспечьте четкое разделение компонентов 
	на разные папки или файлы, чтобы предотвратить неправильное 
	использование или вмешательство компонентов друг в друга.

	-Валидация входных данных: Убедитесь, что все входные данные 
	проходят проверку на корректность и безопасность, прежде 
	чем они будут использоваться в приложении.

	-Изоляция состояния: Разделяйте состояние компонентов, чтобы 
	предотвратить утечки данных и проблемы с синхронизацией.

	-Защита от XSS атак: Используйте безопасные шаблоны, такие 
	как Helmet, для предотвращения XSS атак.

	-Защита CSRF атак: Применяйте CSRF токены для предотвращения 
	CSRF атак.

	-Безопасное хранение данных: Используйте надежные алгоритмы 
	шифрования и хеширования для хранения и передачи чувствительных данных.

	-Тестирование безопасности: Регулярно проводите тестирование на 
	проникновение и анализ уязвимостей, чтобы выявить и исправить 
	потенциальные проблемы безопасности.

	-Управление обновлениями: Обновляйте компоненты и библиотеки 
	своевременно для предотвращения использования уязвимостей в коде.
`},Mm={ques:"Что такое Redux? Ключевые принципы Redux",result:`
	Redux — это популярная JavaScript-библиотека для управления состоянием веб-приложений. 
	Основными принципами Redux являются:

	-Единственность источника правды: В Redux есть единственное хранилище состояния, 
	в котором содержатся все данные приложения, что упрощает код и предотвращает 
	конфликты между разными источниками данных.

	-Изменение состояния с помощью чистых функций: Для изменения состояния используются 
	функции, которые не должны иметь побочных эффектов, должны быть детерминированными 
	и не должны зависеть от предыдущих вызовов.

	-Организованное управление действиями: Redux предоставляет механизм для определения 
	и передачи действий между компонентами приложения, упрощая код и делая его более понятным.
`},$m={ques:"Ключевые концепции Redux",result:`
	1.Единое состояние: В Redux имеется единственное централизованное хранилище 
	состояния, содержащее всю информацию о состоянии приложения.

	2.Чистые функции: Изменение состояния осуществляется с помощью функций, которые 
	должны быть чистыми, то есть не иметь побочных эффектов, быть детерминированными 
	(всегда возвращать одинаковый результат при одинаковых входных данных) и не 
	зависеть от предыдущих вызовов

	3.Действия: В Redux предусмотрен механизм для описания изменений состояния (действий), 
	который позволяет структурировать код и упрощает отладку.

	4.Редьюсеры: Редьюсеры — это функции, которые принимают состояние и действие и возвращают 
	новое состояние. Они используются для обновления состояния на основе полученных действий

	5.store: Магазин представляет собой обертку над состоянием и редьюсерами, которая 
	обеспечивает интерфейс для управления состоянием. Он отвечает за обработку действий, 
	вызов редьюсеров и обновление состояния.
`},Dm={ques:"Что такое «единственный источник истины» (Single Source of Truth)",result:`
	Единственный источник истины” (Single Source of Truth, SST) - это принцип, 
	который гласит, что все данные должны храниться в одном централизованном месте. 
	Это позволяет избежать дублирования данных и обеспечивает согласованность информации 
	в системе. SST обычно реализуется с помощью систем управления состоянием, 
	таких как Redux или Flux.
`},Om={ques:"Что такое редьюсер (Reducer)",result:`
	Редьюсер (reducer) - это функция в Redux, которая принимает состояние и действие 
	(действие - это изменение состояния) и возвращает новое состояние. Редьюсеры используются 
	для обновления состояния приложения на основе полученных действий.

	import { createSlice } from "@reduxjs/toolkit";

		const initialState = {
		  count: 0,
		};

		export const counterSlice = createSlice({
		  name: "counter",
		  initialState,
		  reducers: {
		    increment: (state) => {
		      state.count++;
		    },
		    decrement: (state) => {
		      if (state.count > 0) {
		        state.count--;
		      }
		    },
		  },
		});

		export const { increment, decrement } = counterSlice.actions;

		export default counterSlice.reducer;
`},Im={ques:"Разница между React State и Redux State",result:`
	React state существует только на уровне одного компонента и используется для 
	хранения данных, которые изменяются внутри этого компонента. React state 
	принадлежит самому компоненту и не может быть напрямую изменено другими компонентами.

	Redux state, с другой стороны, существует на уровне всего приложения и может 
	быть изменено и использовано любыми компонентами этого приложения. Redux state 
	обычно используется для координации взаимодействия между различными компонентами 
	и обеспечения согласованности данных в приложении.
`},zm={ques:"Как выглядит поток данных в Redux-приложении",result:`
	1.Пользователь взаимодействует с компонентом.
	2.Компонент отправляет действие в хранилище состояния.
	3.Редьюсер обрабатывает действие и обновляет хранилище состояния.
	4.Хранилище состояния отправляет новые данные обратно в компонент через пропсы.
	5.Компонент обновляет свое представление на основе новых данных.
`},qm={2:{ques:"Разница между рендерингом и монтированием",result:`
	-Рендеринг — это процесс преобразования данных компонента в
	HTML-код. В React рендеринг происходит на основе состояния 
	компонента и его пропсов (свойств). В результате рендеринга 
	создается виртуальный DOM (Document Object Model), который 
	представляет собой структуру HTML-элементов.

	-Монтирование — это процесс вставки компонента в DOM. После 
	того, как компонент отрендерен, React вставляет его в DOM. 
	При этом React следит за изменениями состояния компонента 
	и обновляет его отображение в DOM при необходимости.
`},5:{ques:"сhildren",result:`
	Children в React - это элементы, которые передаются в компонент
	в качестве дочерних элементов. Они могут быть любого типа: 
	строки, числа, другие компоненты и т. д. Children используются
	для создания вложенных компонентов и для передачи данных между ними.
`},i:nm,h:em,r:rm,k:lm,p:om,c:um,q:im,t:sm,b:am,j:cm,s:fm,f:dm,y:pm,m:mm,d:vm,z:hm,n:ym,u:gm,e:Sm,po:wm,a:km,de:Tm,w:Cm,hp:_m,l:Pm,su:xm,fi:Em,uu:Lm,o:Rm,sf:Nm,rx:Mm,rc:$m,ss:Dm,rd:Om,st:Im,rp:zm},jm={ques:"Что такое TypeScript",result:`
	TypeScript - это язык программирования, разработанный компанией Microsoft.
	Он является надмножеством языка JavaScript и добавляет к нему статическую 
	типизацию, конструкции, упрощающие написание кода, и другие возможности. 
	TypeScript программы можно скомпилировать в обычный JavaScript, который 
	может быть выполнен в браузере или на сервере. Это позволяет использовать 
	преимущества TypeScript, не требуя изменений в коде, который использует 
	JavaScript.
`},Hm={ques:"Назовите особенности TypeScript",result:`
	-Статическая типизация. TypeScript обеспечивает строгую проверку типов на 
	этапе компиляции. Это помогает находить ошибки в коде до его выполнения.

	-Generics. Generics позволяют создать обобщенный код, который работает с различными 
	типами данных без необходимости создавать отдельные версии функции для каждого типа.

	-Interfaces. TypeScript поддерживает интерфейсы, которые позволяют определить 
	абстрактный тип данных и использовать его в коде.

	-Modules. TypeScript поддерживает модули, что позволяет разбивать код на 
	отдельные блоки и управлять зависимостями между ними.

	-Type inference. TypeScript может автоматически выводить типы переменных и 
	параметров функции на основе их значений.

	-Type guards. Type guards позволяют проверить тип переменной во время выполнения 
	кода и выполнить разные блоки кода в зависимости от типа переменной.

	-Mapped types. Mapped types позволяют создавать новый тип на основе существующего, 
	изменяя его свойства или добавляя новые свойства.

	-Conditional types. Conditional types позволяют создать тип, который зависит от 
	условия, например от значения другой переменной или от результата выражения.

	-Union and intersection types. Union и intersection types позволяют объединять 
	или пересекать несколько типов, чтобы создать новый тип.
`},Am={ques:"Плюсы использования TypeScript?",result:`
	-Более строгий контроль типов.
	-Более читаемый код.
	-Совместимость с JavaScript.
	-Поддерживается многими инструментами.
	-Может улучшить производительность.
`},Fm={ques:"Типы в TypeScript?",result:`
	TypeScript поддерживает различные типы данных, включая:

	-Строки (string)
	-Числа (number)
	-Логические значения (boolean)
	-Объекты (object)
	-Массивы (array)
	-Перечисления (enum)
	-Псевдонимы типов (type aliases)
	-Интерфейсы (interfaces)
	-Классы (classes)
	-Обобщенные типы (generics)
`},Um={ques:"Декораторы",result:`
	TypeScript поддерживает различные типы данных, включая:
	
	Декораторы в TypeScript позволяют добавлять дополнительные метаданные к 
	классам, методам, свойствам и параметрам. Они позволяют изменять поведение 
	класса, метода, свойства или параметра без необходимости изменения исходного 
	кода. Например, декоратор может использоваться для добавления логирования или 
	для изменения поведения метода при определенных условиях.
`},Wm={ques:"Что такое перегрузка функций",result:`
	Перегрузка функций - это возможность определить несколько функций с одним 
	и тем же именем, но с разными наборами параметров и возвращаемыми типами. 
	В этом случае, выбор конкретной функции осуществляется на основе типов 
	аргументов, передаваемых при вызове функции.

	function print(value: string): void;
	function print(value: number): void;
	function print(value: any): void {
	    console.log(value);
	}

	print("Hello, World!"); // Выведет "Hello, World!"
	print(42); // Выведет 42
	print(true); // Выведет true

	В этом примере определены три функции print с разной сигнатурой, но все они 
	принимают один аргумент и не возвращают значение. Когда вызывается функция print, 
	TypeScript выбирает наиболее подходящую из перегруженных функций на основе 
	типа аргумента.
`},Bm={ques:"Поддерживает ли TypeScript перегрузку функций",result:`
	Да, TypeScript поддерживает перегрузку функций. Вы можете определить несколько 
	функций с одним и тем же именем, но с разными наборами параметров. TypeScript 
	будет выбирать наиболее подходящую функцию на основе типов аргументов.
`},Jm={ques:"Разница между type и  interface в typescript",result:`
	Типы в TypeScript более гибкие и могут определять примитивы, пересечения, 
	объединения, кортежи или различные типы данных, а интерфейсы используются 
	для описания формы объекта. Типы используют ключевое слово type для создания 
	нового типа, а интерфейсы — ключевое слово interface для объявления интерфейса.
`},Vm={ques:"Что такое директивы с тремя наклонными чертами (Triple-Slash Directives), их типы",result:`
	Директивы с тремя наклонными чертами используются в TypeScript для того, чтобы пометить 
	какие-то части кода как комментарии или для указания того, что код является временным 
	и его не нужно компилировать.

	Существует два типа директив с тремя наклонными чертами:

	// / - используются для комментариев в коде, которые не будут компилироваться;
	// /** - используются для указания временных участков кода, которые также не будут 
	компилироваться.

	Эти директивы очень полезны для временного отключения частей кода во время 
	разработки, чтобы не нарушать его работу.
`},Qm={ques:" Что такое внешние объявления переменных (ambient declaration) ",result:`
	Внешние объявления переменных используются для объявления глобальных переменных 
	или функций, которые могут использоваться в коде, но не обязательно должны 
	быть определены в текущем файле. Это позволяет использовать общие API без 
	необходимости импортировать все определения в каждый файл. Например:

	declare var window: any;

	Это объявление говорит TypeScript, что переменная window существует в глобальной 
	области видимости и имеет тип any.
`},Km={ques:"Абстрактный класс в TypeScript",result:`
	Абстрактный класс в TypeScript используется для определения общего поведения 
	и свойств для группы связанных классов. Он может содержать методы с реализацией 
	по умолчанию и может быть унаследован только абстрактными классами или интерфейсами. 
	Абстрактные классы позволяют определять общий интерфейс для классов, которые 
	имеют общую структуру и поведение, но могут отличаться в некоторых деталях. Это 
	помогает уменьшить дублирование кода и улучшает модульность и расширяемость кода.


	abstract class Animal {
	    public name: string;

	    constructor(name: string) {
	        this.name = name;
	    }

	    public abstract bark(): void;
	    public abstract walk(): void;
	}

	class Dog extends Animal {
	    bark() {
	        console.log(\`Woof!\`);
	    }
	    walk() {
	        console.log(\`Walking...\`);
	    }
	}

	class Cat extends Animal {
	    bark() {
	        console.log(\`Meow!\`);
	    }
	    walk() {
	        console.log(\`Tiptoeing...\`);
	    }
	}

	let dog = new Dog("Rex");
	let cat = new Cat("Sylvester");
	dog.bark();
	dog.walk();
	cat.bark();
	cat.walk();

	В этом примере у нас есть абстрактный класс Animal, который определяет свойства и 
	методы, общие для всех животных. От него наследуются классы Dog и Cat, которые 
	предоставляют свою реализацию методов bark и walk
`},Gm={ques:" Какие элементы ООП поддерживаются в TypeScript",result:`
	TypeScript поддерживает все основные элементы объектно-ориентированного программирования, включая:

	-Классы: Вы можете определять классы с свойствами и методами, а также наследовать 
	от других классов.

	-Интерфейсы: Интерфейсы позволяют определять наборы свойств и методов, которые должны 
	быть реализованы классами, которые их используют.

	-Перегрузка операторов: TypeScript позволяет перегрузить большинство операторов, 
	включая арифметические, логические и операторы присваивания.

	-Приведение типов (type casting): TypeScript позволяет явно приводить переменные к 
	другим типам с помощью оператора “as”.

	-Полиморфизм: TypeScript поддерживает полиморфизм через наследование и 
	реализацию интерфейсов.

	-Статическая типизация: TypeScript обеспечивает строгую проверку типов на этапе 
	компиляции, что помогает предотвратить ошибки времени выполнения.
`},Xm={ques:"Какие элементы ООП поддерживаются в TypeScript",result:`
	Да, TypeScript поддерживает модификаторы доступа. Вы можете использовать 
	ключевые слова: 
	-public 
	-private 
	-protected 

	Используются для управления доступом к членам класса. 
	Public члены доступны из любого места, 
	private члены могут быть доступны только из текущего класса, 
	а protected члены могут быть доступны из текущего класса и его потомков.
`},Ym={ques:"Internal Module и External Module",result:`
	Разница между внутренним и внешним модулями в TypeScript касается того, 
	как они обрабатываются во время компиляции и как они подключаются к вашему проекту.

	Внутренний модуль (Internal Module):

	Внутренним модулем называется модуль, который компилируется вместе с вашим проектом. 
	Такой модуль доступен только в рамках вашего проекта и не может быть импортирован 
	или экспортирован из него. Внутренние модули обычно используются для организации 
	кода внутри вашего проекта и для сокрытия деталей реализации от пользователей вашего кода.


	Внешний модуль (External Module):

	Внешний модуль - это модуль, который может быть импортирован и экспортирован 
	из вашего проекта. Внешние модули обычно хранятся в отдельных файлах с 
	расширением .ts или .d.ts и могут быть подключены к вашему проекту с помощью 
	директивы import или export. Внешние модули позволяют разделить ваш код на более 
	мелкие компоненты, которые могут быть использованы и объединены вместе в 
	различных проектах.
`},Zm={ques:"Перечисление (enum)",result:`
	В TypeScript перечисления (enums) - это специализированный тип данных, который 
	представляет собой ограниченный список значений. Эти значения не могут быть 
	изменены после определения перечисления и не могут иметь никакого другого типа 
	данных, кроме указанного при определении перечисления.

	Вот пример определения перечисления:

	enum Suit {
	  Clubs,
	  Diamonds,
	  Hearts,
	  Spades
	}

	Здесь мы определяем перечисление с именем Suit, которое содержит четыре 
	значения: Clubs, Diamonds, Hearts и Spades. Мы можем использовать эти значения 
	в коде, например:

	let card = Card.fromFaceValue(10);
	card.suit = Suit.Hearts;
	console.log(card.getFaceValue() + " of " + card.suit);
`},bm={ques:"NoImplicitAny",result:`
	NoImplicitAny используется в TypeScript для предотвращения неявного 
	приведения любых значений к типу any(нужно обязательно указывать тип). Это позволяет обеспечить более 
	строгий контроль типов и избежать неожиданного поведения, связанного с 
	приведением значений к any. Кроме того, это помогает выявлять ошибки 
	на этапе компиляции и улучшать качество кода.
`},tv={ques:"“Объединение” (|) и “Пересечение” (&) typescript",result:`
	Разница между объединением (union) и пересечением (intersection) типов 
	в TypeScript состоит в следующем:


	-Объединение представляет собой тип, который может иметь одно из нескольких 
	возможных значений.	Например, тип string | number может быть как строкой, так и числом.

	-Пересечение представляет собой тип, который должен иметь все свойства 
	указанных типов.

		interface Camera {
	    takePicture(): void;
		}

		interface MobilePhone {
		    makeCall(): void;
		}

		const phoneWithCamera: Camera & MobilePhone = {
		    takePicture: () => {},
		    makeCall: () => {}
		};
`},nv={ques:"Generic",result:`
	Общие типы (generic) в TypeScript позволяют создавать классы, интерфейсы, функции и т.д., 
	которые могут работать с различными типами данных без необходимости их явного указания. 
	Это позволяет использовать один и тот же код для работы с разными типами данных, что может 
	упростить код и улучшить его производительность.

	Например, можно создать общий класс Animal без указания конкретного типа животного:

	\`class Animal<T> {
		name: T;

		constructor(name: T) {
		this.name = name;
	}
		speak() {
			console.log(Animal name is: \${this.name});
		}
	}

	let dog = new Animal<string>(“Dog”);
	dog.speak(); // Outputs: “Animal name is: Dog”\`

`},ev={ques:"Какие области видимости доступны в TypeScript",result:`
	В TypeScript доступны следующие области видимости:

	-Глобальная область видимости (Global Scope)

	-Локальная область видимости функции (Function Local Scope)

	-Область видимости модуля (Module Scope)

	-Частная область видимости класса (Class Private Scope)

	-Каждая из этих областей видимости имеет свои особенности и правила 
	 видимости для переменных и функций.

`},rv={ques:"Что такое .map файл, как и зачем его использовать",result:`
	map файл - это файл, который содержит информацию о том, как исходный код 
	TypeScript был преобразован в JavaScript. Он содержит информацию о типах, 
	именах переменных и функциях, а также о других элементах исходного кода.

	.map файлы используются для отладки TypeScript кода в инструментах разработчика, 
	таких как Visual Studio Code или WebStorm. Они позволяют видеть исходные имена 
	переменных и функций в JavaScript коде, что облегчает отладку и понимание кода.

	Использование .map файлов также может помочь улучшить производительность 
	JavaScript кода, так как они позволяют избежать лишних преобразований имен 
	переменных и функций при компиляции TypeScript кода.
`},lv={ques:"Можно ли использовать TypeScript в серверной разработке",result:`
	Да, TypeScript можно использовать в серверной разработке. Он широко 
	используется в Node.js для создания серверных приложений. TypeScript 
	позволяет добавлять статическую типизацию к JavaScript-коду, что улучшает
	его читаемость и помогает обнаруживать ошибки на ранних стадиях разработки.
`},ov={ques:"Ключевое слово declare",result:`
	Ключевое слово declare используется в TypeScript для того, чтобы указать, что 
	некоторый элемент существует, даже если его ещё не существует в коде. Это может
	быть полезным при определении интерфейсов или типов, которые будут реализованы 
	или заполнены позже.
`},uv={ques:"Как вы отлавливаете ошибки в TypeScript коде",result:`
	В TypeScript есть несколько способов отлова ошибок в коде:

	-Использование строгой типизации: TypeScript позволяет определить типы для переменных 
	и параметров функций, что помогает обнаруживать ошибки, связанные с несовместимостью типов.

	-Обработка ошибок с помощью операторов try/catch: Этот подход позволяет перехватывать ошибки 
	времени выполнения и обрабатывать их соответствующим образом.

	-Применение аннотаций @ts-ignore и @ts-expect-error: Эти аннотации позволяют временно подавить 
	или явно указать на наличие ошибки в коде соответственно.

	-Использование инструментария для линтинга кода, такого как tslint или eslint, которые могут 
	обнаруживать различные виды ошибок в коде и выдавать предупреждения.
`},iv={4:{ques:"Разница между типами void, never и unknown",result:`
	-Типы void, never, and unknown в TypeScript имеют следующие различия:

	-Тип void указывает на то, что функция или метод не возвращает значение.

	-Тип never обозначает значение, которое не может возникнуть в 
	результате выполнения программы.

	-Тип unknown используется для обозначения значений неизвестного типа. 
	 Он позволяет обрабатывать такие значения безопасным способом, не вызывая ошибок типа.
`},i:jm,s:Hm,p:Am,t:Fm,d:Um,f:Wm,r:Bm,o:Jm,k:Vm,w:Qm,a:Km,q:Gm,m:Xm,e:Ym,n:Zm,ni:bm,v:tv,g:nv,l:ev,x:rv,j:lv,y:ov,u:uv},sv={ques:"Что такое прогрессивный рендеринг",result:`
	Прогрессивный рендеринг - это метод визуализации веб-страниц, при котором 
	браузер начинает отображать контент страницы еще до того, как она полностью 
	загрузилась. Это позволяет пользователю видеть часть содержимого страницы 
	сразу, а не ждать, пока загрузится все.

	При прогрессивном рендеринге браузер начинает загружать и обрабатывать 
	HTML-код страницы, а затем начинает загружать и отображать изображения и 
	другие элементы. Это ускоряет загрузку страницы и делает ее более доступной 
	для пользователей.

	Одним из преимуществ прогрессивного рендеринга является то, что он позволяет 
	пользователю начать взаимодействовать с сайтом раньше, чем если бы он ждал 
	полной загрузки страницы. Это может быть особенно полезно для сайтов с большим 
	количеством изображений или видео, которые могут занимать много времени для загрузки.

	Однако, прогрессивный рендеринг также может иметь некоторые недостатки. 
	Например, если на странице есть большие изображения или видео, они могут 
	начать загружаться до того, как браузер успел обработать весь HTML-код, 
	что может привести к ошибкам в отображении страницы. Кроме того, некоторые 
	пользователи могут предпочесть дождаться полной загрузки страницы перед 
	тем, как начать ее просмотр.
`},av={ques:" Progressive Web Application (PWA)",result:`
	Progressive Web Applications (PWA) - это новый тип веб-приложений, которые сочетают 
	в себе преимущества нативных приложений и классических веб-сайтов. Они разработаны 
	с использованием современных веб-технологий, таких как Service Workers, и могут быть 
	установлены на устройство, как обычные приложения.

	PWA имеют ряд преимуществ перед нативными приложениями и обычными веб-сайтами. 
	Во-первых, они работают в любом современном браузере, без необходимости установки 
	дополнительного программного обеспечения. Во-вторых, они могут использовать возможности 
	устройства, такие как камера, микрофон, GPS и т.д., что недоступно для обычных 
	веб-сайтов. В-третьих, PWA могут работать в оффлайновом режиме, кэшируя необходимые 
	данные с помощью Service Workers.

	Разработка PWA включает в себя несколько этапов. Сначала создается обычный веб-сайт 
	с использованием HTML, CSS и JavaScript. Затем добавляются Service Workers для кэширования 
	данных и обеспечения работы в оффлайне. Наконец, добавляются дополнительные возможности, 
	такие как push-уведомления, регистрация в системе и т.д.

	В целом, PWA - это новый и перспективный подход к созданию веб-приложений, который 
	может значительно улучшить пользовательский опыт и сделать веб-технологии более 
	доступными для разработчиков и пользователей.
`},cv={ques:"Что происходит при введение запроса в строку",result:`
	При вводе запроса в адресной строке браузера, запрос передаётся на сервер для обработки. 
	Сервер разбирает запрос на составляющие, такие как метод (GET, POST и т. д.), путь к ресурсу 
	и параметры запроса. Затем сервер ищет соответствующий файл (или ресурс) на своём сервере, 
	который соответствует указанному пути в запросе. Если файл найден, сервер обрабатывает его 
	и отправляет обратно браузеру в виде HTML-страницы или другого типа контента. Если файл не 
	найден, сервер возвращает ошибку.
`},fv={ques:" Progressive Web Application (PWA)",result:`
	Кроссбраузерность — это свойство веб-сайта или веб-приложения отображаться и работать 
	одинаково во всех популярных браузерах. Это очень важно, потому что разные браузеры 
	имеют разные функции и возможности, и если ваш сайт не работает правильно во всех 
	браузерах, пользователи могут столкнуться с проблемами.

	Чтобы обеспечить кроссбраузерность, разработчики должны учитывать различия между 
	браузерами и использовать стандарты и технологии, которые работают во всех браузерах. 
	Это может включать в себя использование определенных функций HTML, CSS и JavaScript, 
	а также тестирование сайта в разных браузерах для проверки его работы.
`},dv={ques:"Что такое OSI модель",result:`
	OSI (Open Systems Interconnection) модель - это стандарт взаимодействия открытых систем, 
	который описывает различные уровни коммуникации между двумя или более системами. OSI модель 
	состоит из семи уровней, каждый из которых имеет свои функции и задачи:

	-Физический уровень - отвечает за передачу битов данных по физическому носителю, такому 
	как кабель или оптоволокно.

	-Канальный уровень - управляет передачей данных между двумя устройствами в одной сети.

	-Сетевой уровень - отвечает за маршрутизацию пакетов данных между различными сетями 
	и устройствами.

	-Транспортный уровень - гарантирует доставку данных между двумя конечными точками, 
	такими как два компьютера.

	-Сеансовый уровень - управляет установлением, обслуживанием и завершением сеанса 
	связи между двумя системами.

	-Уровень представления - преобразует данные из одного формата в другой, чтобы они могли 
	быть прочитаны или использованы другой системой.

	-Прикладной уровень - предоставляет сервисы и приложения, которые используются пользователями 
	для доступа к данным и их обработки.
`},pv={ques:"Поток документа",result:`
	Поток документа HTML - это последовательность элементов, формирующих структуру веб-страницы. 
	Каждый элемент представлен тегом, который имеет свой открывающий и закрывающий парный тег. 
	Например, тег открывает элемент, а - закрывает его. Между этими тегами находится содержимое элемента.

	Элементы могут быть вложенными, то есть один элемент может находиться внутри другого. Например, 
	элемент может содержать в себе другие элементы, такие как , и т.д.
`},mv={ques:"Разница между адаптивным и отзывчивым дизайном",result:`
	Адаптивный дизайн (adaptive design) - это подход к созданию сайтов и приложений, 
	который предполагает создание нескольких вариантов дизайна для разных устройств и 
	разрешений экрана. Такой дизайн позволяет сайту или приложению выглядеть хорошо на любом 
	устройстве, но при этом может потребоваться больше времени и ресурсов на его разработку.

	Отзывчивый дизайн (responsive design) - это другой подход, который заключается в создании 
	одного универсального дизайна, который будет автоматически подстраиваться под разные 
	устройства и разрешения экрана. Такой подход требует меньше времени и ресурсов на разработку, 
	но может не обеспечить такого же качества отображения на всех устройствах, как адаптивный дизайн.
`},vv={ques:" Разница между Progressive Enhancement и Graceful Degradation",result:`
	Progressive Enhancement - это подход к веб-разработке, который предполагает постепенное 
	добавление новых функций и улучшение интерфейса для современных браузеров с поддержкой JS. 
	Основная цель - предоставить базовую функциональность для старых браузеров, не поддерживающих JS, 
	чтобы пользователь мог понять основную идею сайта. Если же пользователь использует современный 
	браузер, поддерживающий JS, то ему будет предложена улучшенная функциональность.

	Graceful Degradation, напротив, направлен на предоставление основной функциональности сайта 
	даже для браузеров, не поддерживающих современные технологии. Цель этого подхода - обеспечить 
	приемлемый пользовательский опыт, даже если браузер пользователя не поддерживает последние технологии.

	Таким образом, оба подхода имеют свои плюсы и минусы, и выбор между ними 
	зависит от целей и целевой аудитории проекта.
`},hv={ques:"Что такое Веб-компоненты и какие технологии в них используются",result:`
	Веб-компоненты - это элементы HTML, которые могут содержать CSS, JavaScript и другие
	ресурсы. Они позволяют создавать повторно используемые блоки, которые можно 
	использовать на разных сайтах.

	Один из примеров веб-компонентов - это тег <my-app>, который может быть 
	использован для создания приложения. Внутри этого тега можно разместить 
	любой HTML-код, CSS и JavaScript, который будет работать на всех браузерах, 
	поддерживающих веб-компоненты.

	Для создания веб-компонентов используются следующие технологии:

	-HTML - основной язык разметки для создания веб-страниц;

	-CSS - язык стилей, который позволяет задавать оформление элементов веб-страницы;

	-JavaScript - язык программирования, который используется для создания интерактивности 
	на веб-странице;

	-Веб-шрифты - шрифты, которые используются для оформления текста на веб-странице.
`},yv={ques:"Что такое REST",result:`
	REST (Representational State Transfer) - это архитектурный стиль построения распределенных 
	программных систем. Он основан на использовании стандартных технологий, таких 
	как HTTP, URL и JSON, и не требует специфического программного обеспечения или баз данных.

	REST позволяет создавать масштабируемые, гибкие и легко обслуживаемые системы, которые 
	могут работать с большим количеством устройств и сервисов. Он также обеспечивает хорошую 
	производительность и безопасность благодаря использованию стандартных протоколов 
	и форматов данных.
`},gv={ques:"RESTful api",result:`
	REST (Representational State Transfer) — это архитектурный стиль для построения распределенных 
	приложений. RESTful API — это API, которое следует принципам REST. Такие API обычно 
	используют стандартные протоколы, такие как HTTP, для обмена данными. Например, GET запрос 
	может использоваться для получения данных, POST — для создания новых ресурсов, PUT — для 
	обновления существующих и т.д.

	Кроме того, RESTful API обычно следуют принципу кеширования, что позволяет повысить 
	производительность системы. Если сервер возвращает определенный ответ на определенный запрос, 
	клиент может сохранить этот ответ и использовать его в дальнейшем, не запрашивая 
	его снова у сервера.
`},Sv={ques:"Принципы REST-архитектуры",result:`
	-Клиент-серверная архитектура: REST архитектура основана на клиент-серверной модели, 
	где клиенты отправляют запросы к серверу, который обрабатывает их и возвращает ответ.

	-Кеширование: RESTful API следует принципу кеширования, который позволяет сохранять 
	ответы сервера и использовать их в будущем без необходимости повторного запроса.

	-Унификация интерфейсов: REST API использует унифицированные интерфейсы, такие 
	как GET, POST, PUT, DELETE, которые позволяют клиентам взаимодействовать с ресурсами на сервере.

	-Масштабируемость: REST архитектура позволяет легко масштабировать систему, добавляя 
	новые серверы или удаляя старые без необходимости изменения кода клиента.

	-Слоизация: REST API следует принципу слоизации, который означает, что каждый уровень 
	системы выполняет свою функцию и не зависит от других уровней.

	-Стандартизация: REST использует стандартные протоколы и форматы данных, такие 
	как HTTP и JSON, что упрощает разработку и интеграцию с другими системами.

	-Слабая связанность: REST архитектура имеет слабую связанность между компонентами, что 
	обеспечивает гибкость и возможность изменения отдельных компонентов без влияния на другие.
`},wv={ques:"Разница между layout, painting и compositing",result:`
	-Layout - это процесс определения размеров и положения элементов на экране. Во время 
	этого процесса браузер решает, как элементы будут располагаться на странице, и вычисляет их размеры.

	-Painting - это процесс рисования элементов на экране. Браузер берет информацию о размерах 
	и положении элементов из layout и рисует их на экране.

	-Compositing - это процесс объединения нескольких элементов в одно изображение. Во время 
	compositing браузер объединяет все нарисованные элементы в одно изображение, которое 
	затем отображается на экране.
`},kv={ques:"Что такое Flash Of Unstyled Content (FOUC)? Как его избежать",result:`
	Flash Of Unstyled Content (FOUC) - это явление, при котором страница отображается 
	на некоторое время без стилей, прежде чем они загрузятся и применятся. Это может 
	произойти, когда стили загружаются асинхронно, что может привести к временному 
	“всплыванию” нестилизованного контента.

	Чтобы избежать FOUC, можно использовать следующие методы:

	-Предварительная загрузка стилей: Загружать стили заранее, чтобы они 
	были доступны при загрузке страницы.

	-Использование встроенного стиля: Добавить базовые стили во встроенный CSS, 
	чтобы контент отображался должным образом, пока загружаются основные стили.

	-Асинхронная загрузка стилей: Использовать асинхронную загрузку стилей, чтобы 
	они загружались параллельно с остальным контентом страницы.

	-Кэширование стилей: Настроить кэширование стилей, чтобы браузер мог использовать 
	ранее загруженные стили, если они не были изменены.

	-Использование CSS-препроцессоров: Использовать CSS-препроцессоры, такие как Sass 
	или Less, которые позволяют разделить стили на более мелкие части и загружать 
	их по мере необходимости.
	-Оптимизация загрузки стилей: Минимизировать количество запросов к серверу и 
	оптимизировать загрузку стилей, используя методы, такие как объединение 
	CSS, сжатие и кэширование.
`},Tv={ques:"History API в браузере",result:`
	History API - это инструмент, который позволяет приложениям работать с 
	историей браузера. Он позволяет получать информацию о предыдущих страницах, 
	добавлять и удалять элементы из истории, а также управлять тем, как 
	пользователь перемещается по страницам.
`},Cv={ques:"Что такое веб-хранилище (web storage)",result:`
	Веб-хранилище - это механизм, который позволяет хранить данные на стороне 
	пользователя в браузере. Это может быть полезно для сохранения состояния 
	приложения, пользовательских настроек и другой информации. Веб-хранилище 
	доступно через JavaScript и имеет несколько различных типов, включая 
	локальное хранилище(localStorage) и сессионное хранилище(sessionStorage).
`},_v={ques:"Разница между cookie, sessionStorage и localStorage",result:`
	Основное различие между cookie, sessionStorage и localStorage заключается в том, как долго они сохраняются на устройстве пользователя:

	-Cookies хранятся на устройстве до тех пор, пока пользователь не удалит их 
	вручную или не истечет срок их действия.

	-SessionStorage сохраняет данные только во время активной сессии браузера. 
	Когда пользователь закрывает браузер, все данные удаляются.

	-LocalStorage сохраняет данные на устройстве пользователя до тех пор, 
	пока они не будут удалены явно.
`},Pv={ques:"Способы уменьшения времени загрузки веб-страницы",result:`
	-Минификация кода: Уменьшение размера кода страницы может ускорить ее загрузку.

	-Объединение и сжатие файлов: Объединение нескольких файлов в один уменьшает 
	количество запросов к серверу.

	-Кэширование ресурсов: Если ресурсы (изображения, скрипты, стили) не меняются 
	часто, их можно закэшировать, чтобы уменьшить количество запросов к серверу.

	-Оптимизация изображений: Использование форматов изображений с меньшим размером и 
	сжатие могут уменьшить размер страницы.

	-Использование CDN (Content Delivery Network): CDN позволяет размещать ресурсы 
	ближе к пользователям, уменьшая время загрузки.

	-Отложенная загрузка ресурсов: Некоторые ресурсы могут быть не нужны сразу при
	 загрузке страницы, их можно загрузить позже с помощью асинхронных запросов.

	-Использование WebAssembly: Если на странице есть сложные вычисления, их можно 
	выполнить с помощью WebAssembly, что может уменьшить время загрузки.
`},xv={ques:"Core Web Vitals и метрики",result:`
	Core Web Vitals - это набор показателей, разработанных компанией Google, для оценки производительности 
	и пользовательского опыта на сайтах. Основные метрики, входящие в Core Web Vitals, включают:


	-Largest Contentful Paint (LCP) - измеряет время, за которое на странице появляется основное содержание.

	-First Input Delay (FID) - измеряет задержку между вводом пользователя и реакцией страницы на этот ввод.

	-Cumulative Layout Shift (CLS) - оценивает стабильность макета страницы, то есть насколько часто элементы 
	 страницы перемещаются при загрузке новых ресурсов.


	Эти метрики помогают оценить производительность сайта и улучшить пользовательский опыт, 
	делая загрузку страниц быстрее и стабильнее.
`},Ev={ques:"Разница между preload, prefetch, preconnect и prerender",result:`
	Разница между preload, prefetch, preconnect и prerender заключается в их предназначении 
	и особенностях.

	Preload: Этот метод используется для предварительной загрузки ресурсов, таких как изображения 
	или скрипты, до того, как они понадобятся. Это помогает ускорить загрузку страницы, так как 
	ресурсы уже загружены и доступны для использования.

	Пример: <link rel=“preload” href=“image.jpg”>

	Prefetch: Prefetch используется для предварительной загрузки страниц или ресурсов, которые 
	могут быть запрошены пользователем в будущем. Это позволяет ускорить загрузку этих ресурсов, 
	когда они действительно понадобятся.

	Пример: <link rel=“prefetch” href=“page.html”>

	Preconnect: Preconnect используется для предварительного установления соединения с сервером, 
	чтобы ускорить загрузку ресурсов в будущем. Это полезно, когда ресурсы на сервере должны 
	быть загружены одновременно.

	Пример: <link rel=“preconnect” href=“https://example.com”>

	Prerender: Prerender используется для предварительной отрисовки HTML-страницы до того, как 
	она будет запрошена пользователем. Это может ускорить загрузку страницы для пользователей, 
	которые переходят на нее сразу после загрузки страницы.
`},Lv={ques:"Для чего нужен паттерн PRPL",result:`
	Паттерн PRPL используется в разработке веб-приложений для разделения обязанностей между 
	различными компонентами приложения. Он включает в себя следующие слои:

	-Presentation (Представление): Отвечает за отображение данных на странице и 
	взаимодействие с пользователем.

	-Routing (Маршрутизация): Обрабатывает запросы пользователя и направляет 
	их нужному компоненту.

	-Post-Processing (Пост-обработка): Выполняет бизнес-логику и обрабатывает 
	полученные данные.

	-Logic (Логика): Содержит правила и алгоритмы, определяющие, как должны 
	обрабатываться и отображаться данные.Этот паттерн помогает разделить приложение 
	на модули, что упрощает его разработку, поддержку и изменение.
`},Rv={ques:"Что такое HTTP",result:`
	HTTP (Hypertext Transfer Protocol) - это протокол передачи гипертекста, который 
	используется для обмена данными между веб-серверами и браузерами. Он отвечает 
	за передачу информации, такой как HTML-страницы, изображения, JavaScript и другие 
	ресурсы, необходимые для отображения веб-страниц. HTTP также используется для 
	обработки запросов от браузеров и отправки ответов обратно на них.
`},Nv={ques:"Из чего состоит HTTP-запрос",result:`
	HTTP-запрос состоит из трех основных частей:

	-Заголовка - содержит информацию о запросе, такую как метод запроса, 
	путь к ресурсу, версия протокола и т.д.

	-Тела - содержит данные, которые передаются на сервер или получаются 
	от него, например, текст запроса или ответ сервера.

	-Хедера - содержит метаинформацию о запросе, такую как IP-адрес
	 клиента, порт, тип контента и т.д.

	 Вот пример HTTP-запроса:

		GET /api/v1/users HTTP/1.1
		Host: api.example.com
		Authorization: Bearer <token here>
		Connection: close
		User-Agent: PostmanRuntime/7.26.8
		Accept: */*
		Cache-Control: no-cache
		Postman-Token: 04e93566-09f8-41c1-abc0-58c81f6644a0
		Host: localhost:1313
		Accept-Encoding: gzip, deflate, br
		Content-Type: application/json

		{
		    "name": "John Doe",
		    "age": 30,
		    "city": "New York"
		}

		В этом запросе метод GET используется для получения списка пользователей из 
		API с версией v1. Заголовок содержит информацию о сервере, токене авторизации 
		и т. д. Тело запроса содержит JSON-объект с информацией о пользователе.
`},Mv={ques:"Разница между HTTP и HTTPS",result:`
	HTTPS - это безопасный вариант HTTP, который использует шифрование для защиты 
	данных между клиентом и сервером. Он обеспечивает большую безопасность, чем 
	обычный HTTP, так как данные передаются в зашифрованном виде и защищены от 
	перехвата. Кроме того, HTTPS часто ассоциируется с сертификатами безопасности, 
	которые подтверждают подлинность сайта и защищают от man-in-the-middle атак.
`},$v={ques:"Разница между HTTP/1 и HTTP/2",result:`
	HTTP/2 — более новый и продвинутый протокол по сравнению с HTTP. Вот основные различия между ними:

	-Производительность: HTTP/2 предлагает лучшую производительность благодаря поддержке 
	мультиплексирования и сжатия, что позволяет загружать страницы быстрее и уменьшает 
	время ответа сервера.

	-Шифрование: HTTP/2 поддерживает шифрование по умолчанию, что обеспечивает безопасность 
	передачи данных и защиту от перехвата информации.

	-Совместимость с браузерами: Большинство современных браузеров поддерживают HTTP/2, 
	но не все поддерживают HTTP.

	-Поддержка сервера: Не все серверы поддерживают HTTP/2, поэтому может потребоваться обновление 
	программного обеспечения сервера для использования этого протокола.
`},Dv={ques:"Как работает мультиплексирование в HTTP/2",result:`
	Мультиплексирование - это механизм, который позволяет передавать несколько 
	потоков данных через одно соединение. В HTTP/2 мультиплексирование работает 
	путем разделения соединения на несколько логических каналов, каждый из которых 
	может передавать свой поток данных. Это позволяет увеличить пропускную способность 
	и снизить задержки при передаче данных.
`},Ov={ques:"Что такое “трехстороннее рукопожатие” (Triple handshake)",result:`
	“Тройное рукопожатие” (Triple handshake) - это процесс установления безопасного 
	соединения между клиентом и сервером в протоколе HTTPS. Этот процесс включает в себя три этапа:

	1.Клиент отправляет запрос на установление соединения, указывая в нем, что он поддерживает 
	протокол TLS (Transport Layer Security).

	2.Сервер отвечает на запрос, подтверждая, что он также поддерживает TLS, и предлагает список 
	доступных алгоритмов шифрования.

	3.Клиент выбирает один из предложенных алгоритмов и отправляет подтверждение серверу. После 
	этого устанавливается безопасное соединение и начинается передача данных.
`},Iv={ques:"Разница между PUT и POST-запросами",result:`
	PUT и POST являются методами HTTP, используемыми для отправки запросов на сервер. 

	Вот основные различия между ними:

	-Цель: PUT используется для обновления ресурсов, а POST - для создания новых ресурсов.

	-Синтаксис: PUT требует указания полного URI ресурса, в то время как POST использует 
	тело запроса для передачи данных.

	-Безопасность: PUT более безопасен, так как он проверяет, существует ли уже ресурс, 
	прежде чем пытаться его обновить. POST не делает такой проверки и может привести к 
	дублированию или другим ошибкам, если не используется должным образом
`},zv={ques:"Разница между протоколами TCP и UDP",result:`
	Протоколы TCP и UDP являются двумя основными протоколами транспортного уровня в интернет-стеке.
	Они используются для передачи данных между компьютерами в сети и обеспечивают надежную 
	связь и доставку данных.

	-TCP (Transmission Control Protocol) - это потоковый протокол, который обеспечивает 
	надежную передачу данных между двумя точками. Он гарантирует надежность и порядок доставки 
	пакетов, а также контролирует их количество, устанавливая соединения между двумя конечными 
	точками. TCP использует механизм “трехстороннего квитирования” (handshake) для установления 
	и поддержания соединений, а также для контроля корректности передачи данных. Этот протокол 
	обычно используется для соединений, требующих надежной и постоянной связи, таких как 
	веб-браузинг, электронная почта, FTP и т.д.

	-UDP (User Datagram Protocol) - является дейтаграммным протоколом, который не гарантирует 
	надежную доставку пакетов, но обеспечивает более быструю передачу данных. UDP не устанавливает 
	соединения, и каждый пакет передается как независимая дейтаграмма. Он не контролирует 
	порядок или количество переданных пакетов, и доставка данных зависит от работы IP-уровня. 
	UDP обычно используется для приложений, где надежность не критична, а требуется высокая 
	скорость передачи данных, таких как потоковое видео, онлайн-игры, VoIP и т. д.
`},qv={ques:"Что такое WebSocket",result:`
	WebSocket - это протокол связи, предназначенный для обеспечения двусторонней связи между 
	веб-клиентом и сервером. Он позволяет создавать соединение между клиентом и сервером, 
	которое остается открытым даже после первоначального запроса, что позволяет осуществлять 
	обмен данными в реальном времени.

	Принцип работы WebSocket заключается в следующем:

	1.Клиент открывает соединение с сервером на порт 80 (HTTP) или 443 (HTTPS).

	2.Сервер отвечает на запрос клиента и открывает со своей стороны соединение с клиентом.

	3.После того, как соединение установлено, клиент и сервер могут обмениваться данными в 
	дуплексном режиме, то есть в обе стороны одновременно.

	4.Данные передаются в виде текстовых сообщений, но могут быть преобразованы в любой 
	другой формат с помощью соответствующего протокола.

	5.Когда одна из сторон закрывает соединение, другая сторона получает уведомление об 
	этом и может закрыть свое соединение.

	6.WebSocket используется в различных приложениях, таких как чаты, онлайн-трансляции, 
	игры и т.д., где требуется обмен данными в режиме реального времени.
`},jv={ques:"Разница между Long-Polling, Websockets и Server-Sent Events",result:`
	Long-polling, WebSockets и Server-sent events - это различные технологии, используемые 
	для создания интерактивных веб-приложений и веб-сервисов. Вот основные различия между ними:

	Long-polling: Long-polling - это метод, при котором клиентский запрос (запрос на обновление 
	данных) остается активным до тех пор, пока сервер не будет готов ответить. Таким образом, 
	клиент может получать обновления с сервера с большей частотой и меньшим количеством запросов.
	Однако, этот метод может приводить к перегрузке сервера, если слишком много клиентов 
	используют его одновременно. Кроме того, long-polling не всегда совместим со всеми браузерами.

	WebSockets: WebSockets - это протокол, который позволяет двум сторонам (клиенту и серверу) 
	поддерживать постоянное соединение и обмениваться данными в обе стороны. Это означает, что 
	сервер может отправлять данные клиенту, а клиент может отправлять данные серверу в любое 
	время. WebSockets обеспечивают более высокую производительность и масштабируемость, чем 
	long-polling. Однако, они требуют поддержки со стороны браузера и сервера, что может 
	ограничивать их использование.

	Server-sent events: Server-sent events (SSE) - это механизм, который позволяет 
	серверу отправлять события клиенту без необходимости получения запроса от клиента. 
	Это может быть полезно для обновления данных в реальном времени, например, для отображения 
	последних новостей или обновлений статуса. SSE более эффективны, чем long-polling, но 
	менее эффективны, чем WebSockets, так как они не поддерживают двусторонний обмен данными.

	В целом, выбор между long-polling, WebSockets и SSE зависит от требований вашего 
	приложения. Если вам нужна высокая производительность и поддержка двустороннего обмена 
	данными, то WebSockets могут быть лучшим выбором. Если же вам нужно обновлять данные в 
	реальном времени без необходимости двустороннего обмена, то SSE могут быть более 
	подходящим выбором. Long-polling может быть хорошим выбором, если вам нужна более 
	низкая нагрузка на сервер, но он может не быть доступен во всех браузерах.
`},Hv={ques:"Как работает JSONP",result:`
	JSONP — это метод, который позволяет веб-страницам, загруженным с одного домена, 
	получать данные с другого домена. Это достигается путем вставки кода JavaScript в 
	страницу, которая делает запрос на удаленный сервер.

	Когда страница загружает JSONP-ресурс, сервер отправляет обратно не обычный JSON, а 
	JSON-объект, обернутый в функцию. Эта функция вызывается автоматически, когда страница
	 загружает ресурс, и ее результатом является выполнение кода JavaScript.

	Например, если страница делает запрос на получение списка пользователей, сервер 
	может отправить обратно следующий ответ:

		callbackFunc([
		  {
		    "name": "Alice",
		    "age": 20
		  },
		  {
		    "name": "Bob",
		    "age": 21
		  }
		]);

	Здесь функция callbackFunc будет вызвана с массивом пользователей в качестве 
	аргумента. Функция может затем выполнить любой необходимый код, например, добавить 
	пользователей в список или отобразить их информацию.

	Однако стоит отметить, что JSONP может нарушать правила безопасности, поскольку 
	позволяет страницам с одного домена получать доступ к данным с другого домена 
	без прямого разрешения.
`},Av={ques:"Что такое Service Workers",result:`
	Service Workers – это специальные программы, которые работают в фоне и выполняют 
	различные задачи, связанные с улучшением пользовательского опыта. Например, они 
	могут кэшировать данные, обрабатывать push-уведомления, управлять доступом к сети 
	и многое другое.

	Service Workers работают на уровне браузера и не влияют на основной процесс 
	выполнения JavaScript-программы. Они могут быть активированы в любое время и 
	выполнять свои задачи, не мешая основной программе.
`},Fv={ques:"Что такое Service Workers",result:`
	Web Workers - это технология, которая позволяет выполнять JavaScript-код в 
	отдельном потоке, не блокируя основной поток пользовательского интерфейса. 
	Это может быть полезно, например, для выполнения длинных операций или для 
	обработки большого количества данных. Web Workers создаются с помощью объекта 
	Worker, который принимает код JavaScript, который нужно выполнить, и создает 
	новый поток для его выполнения.
`},Uv={ques:"Что такое Web Worklet",result:`
	Web Worklet - это новая технология, которая позволяет использовать нативные 
	функции операционной системы в веб-приложениях. Она позволяет использовать 
	функции, которые обычно доступны только в нативных приложениях, в веб-приложениях. 
	Например, можно использовать функции графического процессора для обработки изображений 
	или функции аудио API для работы с аудио. Web Worklet также позволяет использовать 
	нативные шрифты в веб-приложениях, что может улучшить внешний вид сайта.
`},Wv={ques:"Механизм установки сеанса между клиентом и сервером",result:`
	Для установки сеанса между клиентом и сервером используется следующий механизм:

	1.Клиент отправляет запрос на сервер с указанием необходимых данных для установки сессии, 
	например, имени пользователя и пароля.

	2.Сервер проверяет правильность этих данных и, если они верны, генерирует уникальный 
	идентификатор сессии (session ID).

	3.Сервер сохраняет этот ID в своей базе данных и отправляет его обратно клиенту.
	4.Клиент сохраняет полученный ID в cookie-файле своего браузера.

	5.При последующих запросах к серверу клиент отправляет этот ID вместе с запросом.
	6.Сервер, получив ID сессии, проверяет его наличие в своей базе данных, и если все верно, 
	продолжает обработку запроса.

	7.В конце сессии клиент удаляет cookie с ID, и сессия завершается.

	8.Этот механизм позволяет серверу отслеживать активность пользователя в течение его 
	сессии и обеспечивает безопасность, так как только клиент с правильным ID может 
	получить доступ к данным.
`},Bv={ques:"Что Такое API",result:`
	API (Application Programming Interface) - это набор правил и процедур, которые 
	позволяют разным программам взаимодействовать друг с другом. Он определяет, каким 
	образом одна программа может получить доступ к функциям другой программы.

	API могут быть как открытыми, так и проприетарными. Открытые API доступны для 
	использования всеми желающими, а проприетарные - только для пользователей конкретной 
	программы или сервиса.

	Одним из самых известных примеров API является Microsoft Office API, который позволяет 
	разработчикам создавать программы, работающие с документами Microsoft Office
`},Jv={ques:"Что такое CDN",result:`
	CDN (Content Delivery Network) - это сеть серверов, расположенных в разных 
	точках мира, которые используются для быстрой доставки контента пользователям. 
	Когда пользователь запрашивает страницу или файл, CDN определяет, где находится 
	ближайший сервер с копией этого контента, и перенаправляет запрос на этот сервер. 
	Это ускоряет загрузку страниц и файлов, так как пользователю не приходится ждать, 
	пока запрос дойдет до удаленного сервера и вернется обратно.
`},Vv={ques:" Что такое IP-адрес",result:`
	IP-адрес (Internet Protocol Address) - это уникальный числовой идентификатор, 
	присваиваемый каждой единице оборудования, подключаемой к компьютерной сети, 
	работающей по протоколу IP. Этот протокол обеспечивает передачу данных между 
	компьютерами в сети и отвечает за маршрутизацию пакетов данных к их конечному получателю.

	IP-адрес состоит из двух частей: адреса сети и адреса узла (хоста) в этой сети. 
	Адрес сети определяет местоположение этой сети в глобальной интернет-архитектуре, 
	а адрес узла идентифицирует устройство (компьютер, сервер, маршрутизатор) внутри этой сети.

	Адрес узла обычно представлен в виде четырех десятичных чисел (от 0 до 255), разделенных точками. 
	Например, IP-адрес 192.168.1.100 обозначает адрес узла 100 в сети 192.168.1. Числа после точек 
	также называются октетами или байтами.

	Диапазон возможных IP-адресов ограничен, поэтому для увеличения количества доступных адресов 
	используются маски подсети и технологии, такие как бесклассовая междоменная маршрутизация (CIDR).
`},Qv={ques:"Разница между host и domain",result:`
	Host - это устройство, подключенное к сети, например компьютер, сервер или другое устройство. 
	Host имеет уникальный IP адрес, который позволяет другим устройствам находить его в сети. 
	Host может иметь несколько IP адресов, если он подключен к нескольким сетям.

	Domain - это имя, которое указывает на хост в интернете. Domain может быть зарегистрирован 
	в системе доменных имен (DNS), которая переводит доменные имена в IP адреса. Domain может 
	указывать на один хост или на несколько хостов, в зависимости от настроек DNS.

	Разница между host и domain заключается в том, что host - это физическое устройство, а 
	domain - это просто имя, которое указывает на это устройство. Host имеет уникальные IP 
	адреса, а domain может указывать на несколько хостов с разными IP адресами.
`},Kv={ques:"Разница между URI и URL",result:`
	URI (Uniform Resource Identifiers) и URL (Uniform Resource Locators) оба являются 
	идентификаторами ресурсов, но они отличаются друг от друга.

	URI может идентифицировать ресурсы, которые находятся на веб-сайте, файлы на компьютере, 
	изображения в галерее и т.д. Он может быть абсолютным, начинающимся с протокола (например, http:// или ftp://) 
	и заканчивающимся именем ресурса (например, https://example.com/index.html), или относительным, начинающимся 
	с идентификатора ресурса (например, #contact или …/images) и заканчивающимся на имя ресурса.

	С другой стороны, URL является частным случаем URI и используется для идентификации ресурсов, 
	доступных через интернет. Он всегда начинается с протокола (обычно http:// или https://), затем 
	следует доменное имя сайта и путь к ресурсу, например http://example.com/path/to/resource. 
	Файлы на компьютере или изображения в галерее не могут быть идентифицированы с помощью URL.
`},Gv={ques:"Разница между монолитной и микросервисной архитектурами",result:`
	Монолитная архитектура предполагает, что все компоненты приложения находятся в одном 
	большом блоке (монолите). Это означает, что все функции и возможности приложения находятся 
	в одном месте. Монолитные приложения обычно проще в разработке и обслуживании, так как 
	все компоненты находятся в одном месте и доступны для изменения. Однако, с увеличением 
	размера приложения, монолитная архитектура может стать сложной для поддержки и масштабирования.

	Микросервисная архитектура, с другой стороны, предполагает разделение приложения на множество 
	мелких сервисов. Каждый сервис выполняет свою функцию и взаимодействует с другими сервисами 
	через API. Микросервисная архитектура позволяет более гибко масштабировать приложение, так 
	как можно увеличивать или уменьшать количество серверов в зависимости от нагрузки на каждый 
	сервис. Кроме того, микросервисы могут быть разработаны и протестированы независимо друг от 
	друга, что упрощает процесс разработки. Однако микросервисная архитектура может быть сложнее 
	в настройке и поддержке из-за большого количества компонентов и зависимостей между ними.
`},Xv={0:{ques:"Что такое HTTP cookie? Для чего они используются",result:`
	HTTP cookie - это небольшой фрагмент данных, который отправляется веб-сервером 
	в браузер и сохраняется на компьютере пользователя. Они используются для хранения 
	информации о пользователе, такой как настройки, предпочтения и данные для входа. 
	С помощью HTTP cookie веб-сайты могут отслеживать поведение пользователя на сайте 
	и предоставлять ему персонализированный опыт.
`},1:{ques:"Какие методы может иметь HTTP-запрос",result:`
	HTTP-запросы могут использовать различные методы для выполнения различных операций. 
	Вот некоторые из наиболее распространенных методов:

	-GET: Используется для получения ресурсов с сервера. Например, загрузка HTML-страницы 
	 или изображения.

	-POST: Используется для отправки данных на сервер. Например, для создания 
	 новой записи в базе данных или отправки формы.

	-PUT: Используется для обновления ресурса на сервере. Например, обновление 
	 записи в базе данных.

	-PATCH: Используется для частичного обновления ресурса на сервере.

	-DELETE: Используется для удаления ресурса на сервере.
`},i:sv,p:av,z:cv,c:fv,o:dv,d:pv,m:mv,g:vv,w:hv,r:yv,f:gv,a:Sv,l:wv,u:kv,h:Tv,v:Cv,k:_v,s:Pv,x:xv,j:Ev,e:Lv,t:Rv,b:Nv,n:Mv,t2:$v,w2:Dv,ts:Ov,pu:Iv,d2:zv,ws:qv,dt:jv,jp:Hv,in:{ques:"Что такое IndexedDB в браузере? Преимущества IndexedDB",result:`
	IndexedDB — это API, предоставляемый браузерами для хранения структурированных данных на 
	стороне клиента. Он обеспечивает более быстрое и эффективное хранение данных по 
	сравнению с локальным хранилищем (localStorage) и позволяет работать с большими объемами данных.

	Преимущества IndexedDB включают:

	-Большой объем хранилища: IndexedDB позволяет хранить до 25 объектов, каждый из которых 
	может иметь размер до 10 МБ. Это значительно больше, чем локальное хранилище, которое 
	ограничено 5 МБ на домен.

	-Структурированные данные: В отличие от локального хранилища, данные в IndexedDB хранятся 
	в виде объектов, что облегчает их обработку и извлечение.

	-Быстрый доступ к данным: IndexedDB использует индексы для быстрого поиска данных, что 
	делает его более эффективным, чем локальное хранилище.

	-Поддержка асинхронного режима: IndexedDB поддерживает асинхронный режим, что позволяет 
	разработчикам выполнять другие задачи во время загрузки и сохранения данных.

	Тем не менее, следует помнить, что использование IndexedDB может снизить производительность 
	браузера, особенно на старых устройствах. Поэтому перед использованием этого API следует 
	оценить требования к приложению и выбрать наиболее подходящий вариант хранения данных
`},sw:Av,ww:Fv,w5:Uv,dd:Wv,ap:Bv,cd:Jv,ip:Vv,hd:Qv,ur:Kv,qq:Gv},Yv={ques:"Что такое DOM?",result:`
	DOM - это объектная модель документа, которую браузер
	создает в памяти компьютера на основании HTML-кода, 
	полученного им от сервера.
`},Zv={ques:"Типы узлов DOM?",result:`
	1.элемент
	2.атрибут
	3.текстовый узел
	4.комментарий
	5.сам документ
	6.узел типа документа  
`},bv={ques:"Методы JavaScript для поиска элементов на странице",result:`
	1.querySelector
	2.querySelectorAll
	3.getElementById
	4.getElementsByClassName
	5.getElementsByTagName
	6.getElementsByName  
`},th={ques:"Свойства для перемещения по dom-дереву",result:`
	Получение текст-узлов и элементов
		1.childNodes, firstChild, lastChild - дочерние узлы и элементы
		2.previousSibling, nextSibling - соседние элементы

	Получение только элементов
		1.children , firstElementChild, lastElementChild  - дочерние узлы 
		и элементы
		2.previousElementSibling, nextElementSibling  - соседние элементы
		3.parentElement – родитель-элемент.
`},nh={ques:"Что такое BOM?",result:`
	BOM - это объектная модель браузера, он нужен чтобы работать со всем, 
	кроме документа.

	Содержит такие объекты как:
	-navigator - даёт информацию о самом браузере и операционной системе,
	-location - позволяет получить текущий URL и перенаправить браузер 
	 по новому адресу

	Функции alert/confirm/prompt тоже являются частью BOM
`},eh={ques:"Виды событий Event?",result:`
	События DOM присылаются чтобы уведомить код о том, что интересующие его
	действия произошли. События могут возникать в результате действий 
	пользователя, таких как использование мыши или изменение размера окна,
	изменения состояния	базовой среды (например, низкий заряд батареи 
	или мультимедийные события из операционной системы) и других причин.

	Например:
		-online: Браузер получил доступ к сети.
		-offline: Браузер потерял доступ к сети.
`},rh={ques:"media выражения в JavaScript",result:`
	Они обеспечивают гибкость и сохраняют производтельность в стравнении 
	если мы будем вешать обработчики событий, проверять ими на размер
	экрана и т.д

	const mQuery = window.matchMedia('(min-width: 320px)')

	if (mQuery.matches) { 
    	// Выводим сообщение в консоль
   	 	console.log('Media query matched!') 
	}

	mQuery.addListener(myFunction) // Присоединить функцию прослушивателя
	при	изменении состояния
`},lh={ques:"event.target и event.currentTarget",result:`
	event.target — это ссылка на исходный элемент на котором произошло 
	событие, в процессе всплытия он неизменен. 

	event.currentTarget — это текущий элемент до которого дошло всплытие,
	на нём сейчас выполняется обработчик.
`},oh={ques:"события load и DOMContentLoaded",result:`
	DOMContentLoaded — происходит, когда браузер разобрал HTML-страницу
	и составил DOM-дерево;

	load — происходит, когда загрузилась и HTML
	страница, и все ресурсы для её отображения пользователю: стили, 
	картинки и так далее.
`},uh={ques:"Метод EventTarget.addEventListener()",result:`
	addEventListener принимает 3 параметра:
		1. Тип события
		2. Коллбэк-функцию
		3. Объект-опции:
				-{once: Boolean} указывает, что обработчик должен быть 
				вызван не более одного раза после добавления. Если 
				true, обработчик автоматически удаляется при вызове.
`},ih={ques:"JSON и XML",result:`
	Они позволяют стандартизированно обмениваться данными между различными
	приложениями, платформами или системами.

	Отличия:
		-XML представляет данные в виде дерева, а в JSON используется система 
		на основе пар «ключ-значение»

		-JSON поддерживает только ограниченный диапазон типов данных, таких 
		как строки, числа и объекты.XML более гибкий и поддерживает сложные
		типы данных, такие как двоичные данные и временные метки.

		-Синтаксический анализ JSON безопаснее, чем XML.
`},sh={ques:"Как узнать об использовании метода event.preventDefault()?",result:`
	Для этого мы можем использовать свойство event.defaulPrevented, 
	которое возвращает логическое значение, служащее индикатором применения 
	к элементу метода event.preventDefault.
`},ah={ques:"Intersection Observer",result:`
	браузерный API, который позволяет асинхронно отслеживать пересечение
	элемента с его родителем или областью видимости документа и подгружать 
	дополнительные элементы по мере того как они попадают в область видимости

	const observer = new IntersectionObserver(callback, options)
`},ch={ques:"URLSearchParams",result:`
	API для формирования строки поисковых параметров, которую потом можно
	использовать для формирования полного адреса.
`},fh={ques:"Типы данных в JavaScript",result:`
	Числа, строки, булевые значения, null, undefined, объекты, symbol, массивы, date 
`},dh={ques:"Strict mode",result:`
	В этом режиме запрещается использовать некоторые конструкции, которые
	могут привести к ошибкам, такие как автоматическое приведение типов
	или обращение к переменным, которые не были объявлены.Также в строгом
	режиме выполняется более строгая проверка типов при преобразовании 
	значений. Например, если вы попытаетесь преобразовать строку в число,
	то получите ошибку, если строка не может быть преобразована в число.
	В общем, строгий режим помогает вам писать более надежный и безопасный код,
 	предотвращая некоторые типичные ошибки.
`},ph={ques:"Разница между function declaration и function expression",result:`
	-Function declaration создается до выполнения кода, а функция 
	expression создается во время выполнения

	-Функция declaration может быть вызвана до ее определения, тогда
	как функция expression должна быть определена до ее вызова.

	-Function declaration - именованная, Function expression - анонимная
`},mh={ques:"Типы таймеров в JavaScript",result:`
	В JavaScript есть два основных типа таймеров:

	setTimeout - запускает функцию или код через определенное 
	количество миллисекунд.

	setInterval - запускает функцию или код периодически с 
	определенным интервалом в миллисекундах.
`},vh={ques:"Поднятие (Hoisting)",result:`
	Поднятие (hoisting) в JavaScript — это процесс, во время которого
	JavaScript engine «поднимает» все объявления переменных и функций
	в начало блока кода. Это значит, что хотя объявление переменной
	или функции может находиться внутри блока кода, на самом деле оно
	обрабатывается и выполняется до того, как блок кода начнет 
	выполняться.Поднятие может вызвать некоторые интересные эффекты,
	такие как возможность использовать переменную или функцию до того,
	как она будет определена, или возможность использовать функцию до
	её вызова. Однако, важно понимать, что поднятие не влияет на порядок
	выполнения кода — блок кода всё равно будет выполняться сверху вниз.
`},hh={ques:"Область видимости (Scope)",result:`
	Область видимости (scope) в JavaScript определяет, какие переменные 
	и функции доступны в данном месте кода. Когда мы объявляем переменную
	или функцию, мы определяем ее область видимости

	Есть несколько уровней области видимости в JavaScript:

	Глобальная область видимости - это самая широкая область видимости, которая
 	включает все переменные и функции, определенные вне функций или блоков кода.
  	Эти элементы доступны везде в коде.

  	Локальная область видимости - это область видимости внутри функций или
   	блоков кода. Элементы, определенные внутри функции или блока, доступны
    только внутри этой функции или блока.

	Функциональная область видимости - это область видимости внутри функции.
	Элементы, определенные внутри функции, доступны только внутри этой функции.
`},yh={ques:"Замыкание (Closure)",result:`
	Замыкание t - это функция, которая имеет
	доступ к переменным из внешней области видимости.
`},gh={ques:"this в JavaScript",result:`
	В JavaScript «this» используется для обращения к текущему 
	экземпляру объекта или контекста, в котором он используется.
	Обычно это относится к текущему экземпляру объекта, для которого
	вызывается метод или функция. Однако значение «this» можно
	изменить, привязав его или вызвав функцию с другим значением «this».
`},Sh={ques:"Что такое чистая функция",result:`
	Чистая функция - это функция, которая удовлетворяет следующим условиям:

	Она не имеет побочных эффектов. Это означает, что она не изменяет
	состояние внешнего мира, а только возвращает результат.
	Ее результат зависит только от ее входных параметров. Это означает,
	что если входные параметры не изменяются, то и результат функции
	не изменится. Она не выполняет никаких асинхронных операций, таких как
	чтение из файла или обращение к базе данных. Если ей нужны такие
	операции, она должна принимать их в качестве параметров.
`},wh={ques:"Почему в JS функции называют объектами первого класса",result:`
	В JavaScript функции являются объектами первого класса, что означает,
	что они могут быть переданы как аргументы другим функциям, возвращены
	из других функций и присвоены переменным или свойствам объектов. Это 
	позволяет создавать гибкие и мощные системы, поскольку функции могут
	быть обработаны и использованы как любые другие данные.
`},kh={ques:"Псевдомассив arguments",result:`
	Псевдомассив arguments - это специальный массив в JavaScript, который
	содержит все аргументы, переданные в функцию. Он доступен внутри
	функции и позволяет обращаться к аргументам без необходимости
	указывать их имена.
`},Th={ques:"Разница между host-объектами и нативными объектами",result:`
	Host-объекты - это объекты, предоставляемые средой исполнения
	(браузер, движок Node.js и т.д.), в то время как нативные объекты - это
	встроенные в язык объекты, такие как массивы, строки, числа и т.д.

	Host-объекты обычно имеют специфические для данной среды методы и 
	свойства, позволяющие работать с этой средой. Например, объект window
	в браузере предоставляет методы для работы с окнами, навигацией
	по истории и т.д.

	Нативные объекты, напротив, имеют стандартизированные методы и 
	свойства, которые работают одинаково в любой среде исполнения 
	JavaScript. Например, метод sort() для массива работает одинаково
	в любом окружении.
`},Ch={ques:"Прототипное наследование",result:`
	Прототипное наследование - это механизм наследования в JavaScript,
	который позволяет объектам наследовать свойства и методы от других
	объектов без использования классической иерархии классов. Он основан
	на концепции прототипов, которые представляют собой объекты, содержащие
	свойства и методы, которые могут быть унаследованы другими объектами.
	При прототипном наследовании новый объект не наследует напрямую свойства
 	и методы другого объекта, а вместо этого создается связь между прототипами
  	объектов, которая позволяет новому объекту использовать свойства и методы
   	родительского объекта. Это делает прототипное наследование более гибким 
   	и эффективным, чем классическое наследование, и позволяет создавать
   	более модульные и масштабируемые приложения.
`},_h={ques:"NaN - это",result:`
	это специальное значение в JavaScript, которое используется для 
	обозначения некорректных результатов вычислений.

	проверить, является ли значение числом или NaN, вы можете 
	использовать метод isNaN:
`},Ph={ques:"Объектная обертка (Wrapper Objects)",result:`
	Объектные обертки - это объекты в JavaScript, которые служат
	“контейнерами” для примитивных значений. Например, когда вы 
	создаете новый примитивный тип данных, такой как число или строку,
	JavaScript автоматически создает объектную обертку для этого значения.
	Объектные обертки предоставляют дополнительные методы и свойства для работы
 	с примитивными значениями, такие как форматирование строки, сравнение 
 	чисел и т. д. Они также могут иметь свои собственные свойства и методы,
 	специфичные для конкретного типа объектной обертки.
`},xh={ques:"Проверить, является ли значение массивом",result:`
	Array.isArray(yourVariable)
	val.prototype.constructor = Array
`},Eh={ques:"boxing/unboxing",result:`
	Boxing - это процесс преобразования примитивного типа данных (например,
	числа или строки) в объект. В JavaScript это происходит автоматически,
	когда вы работаете с примитивами как с свойствами объекта или аргументами
	функции. 

	Unboxing - это обратный процесс, когда из объекта извлекается примитивное
	значение. Это также происходит автоматически при использовании объекта в
	качестве аргумента функции или свойства другого объекта.

`},Lh={ques:"Разница между оператором in и методом .hasOwnProperty()",result:`
	Оператор in используется для проверки наличия свойства или индекса
	в объекте или массиве. 

	Метод Object.hasOwnProperty() используется для проверки, было ли
	указанное свойство явно указано при создании объекта.

`},Rh={ques:"Разница между глубокой (deep) и поверхностной (shallow) копиями",result:`
	Поверхностное копирование - это создание копии данных на самом
	верхнем уровне. Оно просто присваивает ссылку на исходный объект другому
	объекту. При изменении данных в одном объекте, второй тоже меняется,
	потому что они оба ссылаются на один и тот же участок памяти.

	Глубокое копирование - это копирование всех данных внутри объекта или
	массива. При этом создаются новые данные, а исходные остаются без изменений.

	Для создания глубокой копии объекта:
		-JSON.parse(JSON.stringify(obj))
		-Рекурсивно
		-Библиотеки
`},Nh={ques:"Цепочка вызовов функций (chaining)",result:`
	Цепочка вызовов функций - это способ вызова нескольких функций 
	последовательно, когда результат выполнения одной функции передается
	в качестве аргумента следующей функции

	var obj = { method1: function() {}, method2: function() {} }

	obj.method1().method2()
`},Mh={ques:"Что такое необъявленная переменная",result:`
	Необъявленная переменная - это переменная, которая была использована
	в коде без предварительного объявления. В некоторых случаях это
	может привести к ошибке, а в некоторых - нет. В JavaScript, если
	переменная используется до того, как она была объявлена, она будет
	создана автоматически. Однако это не рекомендуется, так как может
	привести к ошибкам и непредвиденному поведению кода.
`},$h={ques:"Как передаются параметры в функцию: по ссылке или по значению",result:`
	В JavaScript параметры передаются по значению. Это значит, что
	при вызове функции создается копия аргумента и эта копия передается
	в функцию. Любые изменения, которые вы делаете с аргументом внутри
	функции, не влияют на оригинальный аргумент.
	Но если аргумент является ссылкой на объект (например, массив), 
	то изменение этого объекта внутри функции повлияет на оригинал,
	так как объект является ссылкой на данные, а не копией.
`},Dh={ques:"Что такое прототип объекта в JavaScript",result:`
	Прототип объекта в JavaScript — это объект, который содержит
	свойства и методы, доступные для всех объектов данного класса.
	Прототип определяет поведение объекта и позволяет добавлять новые
	свойства и методы без изменения исходного кода класса.
`},Oh={ques:"Как работает метод Object.create()",result:`
	Метод Object.create создает новый объект, который наследует
	свойства и методы от указанного прототипа.
	Вот как это работает:

	-Сначала создается пустой объект ({}).
	-Затем этот объект связывается с прототипом, который указан в
	качестве аргумента метода (Object.create(prototype)).
	-После этого возвращается созданный объект.

	Таким образом, мы получаем новый объект, который имеет доступ ко всем
	свойствам и методам прототипа, но при этом не наследует ничего лишнего.
`},Ih={ques:"Object.freeze() и Object.seal()",result:`
	Метод Object.freeze() делает объект неизменяемым. Это означает, 
	что вы не можете добавлять или удалять свойства из объекта, а также
	изменять значения существующих свойств.

	Метод Object.seal() делает объект доступным только для чтения. Это 
	означает, что вы можете добавлять и удалять свойства из объекта,
	но не можете изменять значения уже существующих свойств.
`},zh={ques:"Плюсы и минусы использования use strict",result:`
	Плюсы:
		-Повышает производительность и безопасность кода, предотвращая
		некоторые виды ошибок.
		-Улучшает читаемость кода, делая его более строгим и однозначным.
		-Помогает избежать проблем с совместимостью, поскольку не все 
		браузеры поддерживают все возможности стандарта ES6.

	Минусы:
		-Может замедлить выполнение кода, особенно на старых браузерах.
		-Некоторые функции могут работать по-разному в строгом режиме и обычном.
		-Не все инструменты разработки и тестирования поддерживают строгий режим.
`},qh={ques:"Плюсы и минусы иммутабельности",result:`
	Плюсы:
		-Простота: Неизменные объекты просты для понимания и использования.
		-Производительность: Неизменяемые данные могут быть оптимизированы 
		и кэшированы, улучшая производительность.
		-Безопасность: Неизменность предотвращает множество ошибок,
		включая ошибки связанные с изменением данных.
		-Функциональное программирование: Неизменяемые данные идеально
		подходят для функционального программирования.
		-Меньше ошибок: Неизменяемые объекты менее подвержены случайным
		изменениям, уменьшая вероятность ошибок.

	Минусы:
		– Сложность: Работа с неизменяемыми объектами может быть сложной,
		  особенно когда присутствуют сложные зависимости.
		– Память: Создание новых объектов для каждой операции может
		  использовать больше памяти.
		– Отладка: Отладка кода может быть сложнее, когда данные изменяются
		  во время выполнения.
		– Ошибки: После возникновения ошибки, может быть сложно вернуть 
		  систему в рабочее состояние.
`},jh={ques:"Типы ОБЪЕКТОВ JavaScript",result:`
	-Строковые объекты.
	-Числовые объекты
	-Логические объекты
	-Объектные литералы
	-Массивы 
`},Hh={ques:"Типы ошибок в JavaScript",result:`
	Есть несколько типов ошибок в JavaScript:
	-Синтаксические ошибки - возникают при неправильном написании кода. 
	 JavaScript обнаруживает такие ошибки и сообщает о них при выполнении кода.

	-Семантические ошибки - это ошибки в логике программы. Они могут возникать 
	 из-за неправильных операторов, отсутствующих переменных и т. д. Такие ошибки
	 могут приводить к неправильному выполнению кода.

	-Ошибки времени выполнения - это ошибки, возникающие во время выполнения кода.
	 Примеры таких ошибок: попытка обращения к несуществующей переменной, вызов 
	 неопределенной функции и т. п.

	-Ошибки безопасности - это ошибки, связанные с безопасностью веб-приложений. 
	 Например, SQL-инъекции, XSS-атаки и т. д.

	-Ошибки производительности - это ошибки, связанные с низкой 
	 производительностью приложения. Они могут возникать из-за неправильного 
	 использования памяти, неэффективного кода и т. д.
`},Ah={ques:"Разница между typeof и instanceof?",result:`
	instanceof — это булево выражение, которое позволяет проверить, 
	принадлежит ли объект определенному классу или его подклассу

	typeof - определяет тип
`},Fh={ques:"JavaScript статически, или динамически типизированный язык",result:`
	JavaScript является динамически типизированным языком. Это означает,
	что типы переменных определяются во время выполнения, а не во время
	компиляции, как в статически типизированных языках.
`},Uh={ques:"Регулярное выражение (Regular Expression)",result:`
	Регулярные выражения - это мощный инструмент для работы с текстовыми
	данными в JavaScript. Они позволяют задавать шаблоны для поиска,
	замены или проверки текста. С помощью регулярных выражений можно
	выполнять различные операции, такие как проверка на соответствие
	формату email, удаление лишних пробелов, замена строк и многое другое
`},Wh={ques:"Что такое полифил (polyfill)",result:`
	Полифил - это код, который добавляет функциональность, отсутствующую
	в текущем окружении. Он используется для обеспечения совместимости
	с более новыми стандартами и возможностями, чтобы приложение могло
	работать на разных платформах и браузерах.
`},Bh={ques:"expression и statement",result:`
	Выражения в JavaScript - это конструкции, которые возвращают 
	значение. К ним относятся арифметические операции, вызовы функций, 
	операторы сравнения и т.д. Выражения используются в коде для получения
	значений, выполнения операций и проверки условий.

	Инструкции в JavaScript - это команды, которые выполняют определенные
	действия. К ним относятся операторы присваивания, вызовы функций, 
	условные операторы и т.д. Инструкции используются для управления 
	потоком выполнения программы и выполнения различных операций.
`},Jh={ques:"Типы утечек памяти в JavaScript",result:`
	-Циклы событий: Когда обработчик события не удаляется после его
	 срабатывания, это может привести к утечке памяти.

	-Дублирование DOM: Если элементы DOM создаются и не удаляются, это
	 может привести к накоплению памяти.

	-Использование setInterval или setTimeout без clearInterval или 
	 clearTimeout может привести к утечке, если функция, указанная в 
	 аргументе, не завершается.

	-Неправильное использование переменных: Если переменная не 
	 уничтожается, это может вызвать утечку памяти.

	-Использование глобальных переменных: Если глобальные переменные 
	 не удаляются, они могут накапливать память.
`},Vh={ques:"Разница между примитивом и объектом",result:`
	Примитивы - это базовые типы данных, такие как числа, строки, булевы 
	значения и null. Они занимают меньше памяти и обрабатываются быстрее,
	чем объекты. Примитивы не могут иметь свойств или методов, они всегда
	имеют одно и то же значение.

	Объекты - это сложные структуры данных, которые могут иметь свойства
	и методы. Объекты могут быть созданы с помощью литералов объектов или
	с использованием конструкторов классов. Объекты занимают больше памяти,
	чем примитивы, но они могут иметь более сложную структуру и поведение
`},Qh={ques:"Почему typeof null возвращает object",result:`
	Потому что null является объектом в JavaScript. Хотя null не имеет
	типа (typeof null возвращает “object”), он все равно является 
	объектом, поскольку null === {} возвращает true.
`},Kh={ques:"Зачем нужен конструктор Proxy?",result:`
	Конструктор Proxy позволяет создать прокси-объект, который может
	быть использован для перехвата и изменения действий, выполняемых
	с оригинальным объектом. Это может быть полезно для создания классов
	с переопределением методов, для реализации AOP (Aspect-Oriented 
	Programming, аспектно-ориентированное программирование), а также 
	для обхода защиты private и protected членов класса.
`},Gh={ques:"Разница между синхронными и асинхронными функциями",result:`
	Синхронные функции блокируют выполнение кода до тех пор, пока они не
	закончат свою работу. Это может привести к “замораживанию” интерфейса,
	если функция занимает много времени для выполнения.
	Асинхронные функции позволяют выполнять код, не блокируя его. Это полезно
	для выполнения длительных операций, таких как загрузка данных из сети, без 
	“замораживания” интерфейса. Асинхронные функции обычно используют механизм
	обратных вызовов или promises для уведомления о завершении операции.
`},Xh={ques:"AJAX",result:`
	AJAX (Asynchronous JavaScript and XML) - это технология, которая 
	позволяет веб-приложениям получать данные с сервера без необходимости
	перезагрузки всей страницы. AJAX использует JavaScript для отправки 
	запросов на сервер и получения ответов в виде данных, которые затем
	могут быть отображены на странице. Это позволяет создавать более
	интерактивные и динамичные веб-приложения, которые могут обновлять
	данные без полной перезагрузки страницы.
`},Yh={ques:"Что такое same-origin policy в контексте JavaScript",result:`
	Same-origin policy - это политика безопасности в браузере, которая
	ограничивает доступ JavaScript к ресурсам на других доменах. 
	Она предотвращает выполнение скриптов с одного домена на другом домене,
	чтобы предотвратить межсайтовый скриптинг (Cross-Site Scripting, XSS).
	Однако, существуют исключения, когда same-origin policy может быть 
	отключена, например, с использованием CORS (Cross-Origin Resource Sharing).
`},Zh={ques:"Разница между микро и макрозадачами в event loop",result:`
	Микрозадачи - это короткие задачи, которые требуют небольшого количества
	ресурсов и могут быть выполнены быстро. Например, к микрозадачам можно
	отнести обновление DOM, вычисление простых математических операций и т.д.
	Микрозадачи выполняются в очереди микрозадач и не блокируют главный поток
	выполнения.

	Макрозадачи - это более сложные задачи, которые могут занимать больше
	времени на выполнение и блокировать главный поток выполнения, пока не 
	будут завершены. К макрозадачам относятся такие операции, как загрузка 
	больших файлов, выполнение тяжелых вычислений и т.п. Макрозадачи выполняются
	в отдельной очереди и не влияют на выполнение микрозадач
`},bh={ques:"Что такое промисы (Promises)",result:`
	Promises - это механизм в JavaScript, который позволяет выполнять 
	асинхронные операции без блокирования основного потока выполнения 
	программы. Promises используются, когда нам нужно выполнить какую-то
	операцию, но мы не хотим, чтобы она блокировала работу программы, 
	пока она не завершится. Например, когда мы загружаем данные из сети 
	или обрабатываем большой файл, мы можем использовать Promises, чтобы 
	программа продолжала работать, пока операция еще выполняется.
`},ty={ques:"Плюсы и минусы использовании Ajax",result:`
	Плюсы:
	-Улучшение пользовательского опыта - Ajax позволяет веб-страницам
	 обновляться частями, что делает их более интерактивными и быстрыми.
	-Уменьшение времени загрузки - поскольку Ajax загружает только 
	 необходимые данные, а не всю страницу, время загрузки уменьшается.
	-Более эффективное использование пропускной способности - Ajax загружает
	 данные небольшими частями, что позволяет использовать пропускную 
	 способность более эффективно.

	Минусы:
	-Сложность разработки - разработка Ajax-приложений требует более глубоких
	 знаний о JavaScript и XML, чем разработка традиционных веб-страниц.
	-Проблемы с безопасностью - поскольку Ajax позволяет выполнять JavaScript
	 на удаленных серверах, это может представлять угрозу безопасности.
	-Неполная поддержка браузерами - некоторые браузеры могут не поддерживать
	 все функции Ajax, что может привести к проблемам с совместимостью.
`},ny={ques:"Подходы при работе с асинхронным кодом",result:`
	Callbacks: Это самый старый и простой подход. Он заключается в том,
	что когда одна функция закончила свою работу, она вызывает другую 
	функцию, которая продолжает выполнение программы.

	Promises: Это более современный подход, который позволяет писать код в
	последовательном стиле, без необходимости использовать обратные вызовы.

	Async/Await: Это новейший подход, который появился в ES2017. Он позволяет
	писать асинхронный код в стиле синхронный, используя ключевые слова async и await.
`},ey={ques:"Преимущества использовании промисов вместо колбэков",result:`
	Promises имеют несколько преимуществ перед колбэками:
	-Promise chaining: Promises позволяют связывать несколько операций вместе,
	 делая код более читаемым и понятным.

	-Порядок выполнения: Promises обеспечивают определенный порядок выполнения
	 операций, что может быть важно в некоторых случаях.

	-Отладка: Promises упрощают отладку, так как они позволяют видеть,
	 на какой стадии выполнения находится код.
`},ry={ques:"Что такое callback-функция? Что такое Callback Hell",result:`
	Callback-функция - это функция, которая выполняется после завершения
	другой функции.

	Callback Hell - это ситуация, когда в программе
	слишком много callback-функций, и это делает код сложным для понимания и поддержки.
`},ly={ques:"Что такое async/await",result:`
	Async/await — это современный способ написания асинхронного JavaScript-кода,
	который позволяет сделать его более читаемым и удобным для работы. С помощью
	async/await вы можете писать код, который выглядит как синхронный,
	но при этом будет выполняться асинхронно.
`},oy={ques:"Плюсы и минусы асинхронного программирования",result:`
	Плюсы:
		-Улучшение производительности: Асинхронное программирование позволяет
		 выполнять несколько задач одновременно, что ускоряет работу приложения.
		-Повышение удобства использования: Асинхронные операции не блокируют 
		 основной поток выполнения кода, что улучшает пользовательский опыт, 
		 особенно при выполнении длительных операций.
		-Экономия ресурсов: Асинхронное программирование позволяет более 
		 эффективно использовать ресурсы компьютера, так как не требует постоянного 
		 переключения между задачами.
	Минусы:
		-Сложность: Асинхронное программирование может быть сложным для 
		 понимания и разработки, особенно для начинающих программистов.
		-Ошибки: Ошибки в асинхронном коде могут быть трудными для отладки,
		 так как ошибки могут возникать в неожиданных местах.
`},uy={ques:"Что такое генераторы? Когда стоит использовать генераторы",result:`
	Генераторы - это функции в JavaScript, которые позволяют создавать 
	итерируемые объекты. Генераторы могут использоваться для создания 
	бесконечных коллекций данных, таких как строки или числа. Они также 
	могут использоваться для обработки больших объемов данных, когда 
	необходимо выполнять какие-либо действия с каждым элементом коллекции. 
	Генераторы обычно используются, когда необходимо обработать большие 
	объемы данных без загрузки их всех в память сразу.
`},iy={ques:"Что такое дескрипторы свойств объектов",result:`
	Дескриптор свойства объекта - это объект, который представляет свойство 
	другого объекта. Он содержит информацию о свойстве, такую как его имя, 
	тип и значение. Дескрипторы свойств используются для доступа к свойствам 
	объекта и их изменения. Они также могут использоваться для добавления новых 
	свойств или удаления существующих.

		const person = {
		  name: 'John',
		  age: 25,
		};

		const ageDescriptor = {
		  get: (person) => person.age,
		  set: (person, age) => {
		    person.age = age;
		  },
		};
`},sy={ques:" В чем заключаются особенности геттеров и сеттеров",result:`
	Геттеры и сеттеры - это функции, которые позволяют контролировать доступ к свойствам 
	объекта. Они могут быть использованы для защиты данных или для реализации сложной 
	логики доступа к свойствам.

	Геттеры используются для получения значения свойства. Они обычно возвращают значение
	свойства, но могут выполнять дополнительные проверки или преобразования перед возвратом.

	Сеттеры используются для установки значения свойства. Они могут принимать одно 
	или несколько аргументов и могут выполнять различные проверки перед изменением 
	свойства. Сеттеры также могут использовать дополнительные параметры для указания, 
	следует ли заменить существующее значение или добавить новое значение к списку значений.
`},ay={0:{ques:"Разница между null и undefined",result:`
	-undefined - это ключевое слово в JavaScript, которое означает
	отсутствие значения.undefined обычно используется для переменных,
	которые не были созданы

	-null - это значение, которое может быть присвоено переменной 
	или свойству объекта. Оно указывает на то, что значение не было 
	определено или было удалено.
`},2:{ques:"Разница между var, let и const",result:`
	Область видимости: var может иметь глобальную или локальную
	внеблочную область видимости, в то время как let и const имеют
	только локальную область видимости.

	Переопределение: var можно переопределить, в то время как let
	и const нельзя.	Константность: const предназначено для создания
	констант, которые нельзя изменить, в то время как var и let 
	могут быть изменены.

	Синтаксис: var используется для создания переменных, let — для 
	создания локальных переменных, а const — для создания констант.
`},i:Yv,n:Zv,m:bv,c:th,b:nh,e:eh,s:rh,t:lh,l:oh,q:uh,x:ih,h:sh,o:ah,u:ch,td:fh,st:dh,f:ph,ti:mh,p:vh,sc:hh,z:yh,th:gh,mn:Sh,fc:wh,pm:kh,hn:Th,pl:Ch,na:_h,w:Ph,ar:xh,bu:Eh,ih:Lh,ds:Rh,ch:Nh,uv:Mh,af:$h,po:Dh,oc:Oh,fs:Ih,ms:zh,im:qh,to:jh,er:Hh,tt:Ah,sd:Fh,re:Uh,pf:Wh,es:Bh,lm:Jh,ob:Vh,no:Qh,pr:Kh,as:Gh,aj:Xh,sp:Yh,ma:Zh,ps:bh,da:ty,ac:ny,pp:ey,cf:ry,aa:ly,p0:oy,g:uy,k:iy,q1:sy},cy={ques:"Основные принципы ООП",result:`
	1.Инкапсуляция - сокрытие деталей реализации объекта, чтобы защитить его
	внутреннее состояние от внешнего мира.

	2.Наследование - возможность создания новых классов на основе существующих, 
	что позволяет повторно использовать код.

	3.Полиморфизм - способность объектов с одинаковой интерфейсной частью 
	выполнять разные действия в зависимости от их типа.

		interface Camera {
		    function takePicture();
		}

		class MobilePhone implements Camera {
		    function takePicture() {
		        echo "Taking photo with mobile phone";
		    }
		}

		class DSLR implements Camera {
		    function takePicture() {
		        echo "Taking photo with DSLR";
		    }
		}

`},fy={ques:"Что такое SOLID",result:`
	SOLID - это аббревиатура, обозначающая пять основных принципов, которые следует соблюдать 
	при разработке объектно-ориентированных программ:

	S - принцип единственной обязанности (Single Responsibility Principle): каждый класс 
	или модуль должен выполнять только одну конкретную обязанность.

	O - принцип открытости/закрытости (Open-Closed Principle): программы должны быть 
	открыты для добавления нового функционала, но закрыты для изменений.

	L - принцип подстановки Барбары Лисков (Liskov Substitution Principle): объекты в 
	программе могут быть заменены на их подтипы без нарушения функциональности.
	Если у нас есть класс A (не виртуальный, а вполне реально используемый в коде) 
	и отнаследованный от него класс B, то если мы заменим все использования класса A на B, 
	ничего не должно измениться в работе программы. Ведь класс B всего лишь расширяет 
	функционал класса A

	I - принцип разделения интерфейса (Interface Segregation Principle): интерфейсы должны 
	быть разделены на маленькие, специфические части.Это означает, что вместо создания одного 
	большого интерфейса для всей системы, лучше создать несколько меньших интерфейсов, 
	каждый из которых выполняет одну определенную функцию.
	ISP помогает уменьшить связанность между компонентами системы и упрощает тестирование 
	и отладку, поскольку каждый интерфейс имеет свою четко определенную цель.

	D - принцип инверсии зависимости (Dependency Inversion Principle): модули верхних 
	уровней не должны зависеть от модулей нижних уровней, а только указывать, что им нужно.
	Это означает, что при проектировании системы следует создавать абстракции для высокоуровневых 
	модулей и реализовывать их на низком уровне. Таким образом, система становится более 
	гибкой и легко изменяемой, поскольку изменения на высоком уровне не затрагивают 
	низкоуровневые компоненты и наоборот.
`},dy={ques:"Разница между классовым и прототипным наследованием",result:`
	Классовое наследование - это механизм, при котором дочерний класс наследует все методы и 
	свойства родительского класса. При создании объекта дочернего класса создается также объект 
	родительского класса, и все изменения, сделанные в объекте дочернего класса, отражаются в 
	объекте родительского класса.

	Прототипное наследование, или наследование прототипов, - это механизм, который не создает 
	иерархию классов, а позволяет добавлять свойства и методы к объектам на лету. При этом не 
	создается новый класс, а просто добавляется новый метод или свойство к прототипу объекта. 
	Это делает код более гибким и легким для изменения.
`},py={ques:"Однонаправленный поток данных и двусторонняя связь данных",result:`
	Однонаправленный поток данных означает, что данные передаются в одном направлении. 
	Например, из веб-сервера в браузер. В этом случае данные идут только в одном 
	направлении - от сервера к клиенту.

	Двунаправленная связь данных означает, что данные могут передаваться в двух направлениях. 
	Например, между клиентом и сервером. В этом случае данные могут идти как от сервера к 
	клиенту, так и от клиента к серверу.
`},my={ques:"Что такое MVC",result:`
	MVC (Model-View-Controller) - это архитектурный паттерн, который разделяет приложение 
	на три основных компонента: модель, представление и контроллер.

	-Модель представляет собой слой, который отвечает за работу с данными и бизнес-логикой. 
	Она содержит объекты, которые представляют данные, и методы для работы с этими данными.

	-Представление (View) - это интерфейс пользователя, который отображает информацию, 
	полученную от модели. Он может быть представлен в виде HTML-страницы, мобильного приложения 
	или любого другого типа интерфейса.

	-Контроллер (Controller) - это промежуточный слой между моделью и представлением. 
	Он отвечает за обработку пользовательского ввода, обновление модели и обновление 
	представления в соответствии с изменениями в модели.

	MVC позволяет разделить приложение на логические блоки, что облегчает его разработку, 
	тестирование и поддержку.
`},vy={ques:"Что такое каррирование (Currying)",result:`
	Каррирование - это процесс “разворачивания” функции с несколькими аргументами в 
	цепочку функций с одним аргументом.

	Например, у нас есть функция multiply которая принимает два аргумента:

	const multiply = (a, b) => a * b;

	Мы можем развернуть эту функцию в цепочку из двух функций с одним аргументом, используя каррирование:

	const curriedMultiply = a => b => a * b;
	const result = curriedMultiply(2)(3); // result == 6\`
`},hy={ques:"Статический метод класса (static)",result:`
	Статический метод класса может быть вызван без создания экземпляра класса. Он принадлежит 
	самому классу, а не конкретному экземпляру класса. Статические методы обычно используются
	для работы с общими ресурсами или для выполнения операций, которые не зависят от 
	конкретного экземпляра класса.

	Вызов статического метода осуществляется с использованием ключевого слова static и имени 
	метода в качестве аргумента. Например:

	MyClass.staticMethod();
`},yy={ques:"Типы паттернов в ООП",result:`
	Паттерны в ООП можно разделить на несколько категорий:

	-Порождающие паттерны: Эти паттерны используются для создания объектов. Они включают 
	в себя паттерны Builder, Factory Method, Abstract Factory, Prototype и Singleton.

	-Структурные паттерны: Структурные паттерны определяют, как объекты связаны друг с другом. 
	Примеры структурных паттернов включают Adapter, Bridge, Composite, Decorator, Facade и Proxy.

	-Поведенческие паттерны: Поведенческие паттерны описывают, как взаимодействуют объекты. Примеры 
	поведенческих паттернов включают Chain of Responsibility, Command, Interpreter, Iterator, Mediator, 
	Memento, Observer, State и Strategy.

	-Паттерны параллельного программирования: Эти паттерны помогают управлять параллелизмом 
	в приложениях. Некоторые из них включают в себя Active Object, Basic Threading, Dataflow, 
	Event-Driven, Guarded Suspension, Pipes and Filters, Reactor и Thread Pool.
`},gy={ques:"Как работает механизм прототипов в JavaScript",result:`
	Механизм прототипов в JavaScript работает путем наследования свойств и методов от 
	прототипов. Каждый объект в JavaScript имеет свой прототип, который определяет его 
	поведение и характеристики. Когда вы создаете новый объект, он получает свойства и 
	методы от своего прототипа. Если объект не имеет определенного свойства или метода, 
	то JavaScript ищет это свойство или метод в прототипе объекта и, если не находит, 
	то продолжает искать в прототипах родительских объектов, пока не найдет или не дойдет 
	до самого первого прототипа, Object.prototype. Если свойство или метод не найден ни 
	в одном из прототипов, то генерируется ошибка. Таким образом, механизм прототипов 
	позволяет JavaScript объектам наследовать свойства и поведение без использования 
	классической системы наследования классов.
`},Sy={ques:"Разница между императивным и декларативным подходами программирования",result:`
	Императивное программирование предполагает описание последовательности действий 
	для решения задачи. Это означает, что вы должны явно указывать, какие операции нужно 
	выполнить и в каком порядке. Императивное программирование обычно использует циклы, 
	условные операторы и другие конструкции для управления потоком выполнения программы.

	Декларативное программирование, с другой стороны, описывает задачу в терминах того, 
	что должно быть достигнуто, а не как это должно быть сделано. В декларативном программировании 
	вы определяете данные и правила, которым они должны удовлетворять, и программа автоматически 
	генерирует последовательность операций для достижения желаемого результата. Декларативное 
	программирование часто использует логические и математические выражения для описания задачи, 
	а также языки запросов и правил.

	Императивное программирование может быть более подходящим для решения задач, которые требуют 
	выполнения последовательности операций, таких как обработка данных или управление устройствами. 
	Декларативное программирование лучше подходит для задач, где важнее описать, что нужно получить, 
	а не как этого достичь, например, в системах баз данных или веб-приложениях.
`},wy={ques:"Что такое реактивное программирование",result:`
	Реактивное программирование (reactive programming) — это подход к разработке программного 
	обеспечения, который фокусируется на обработке потоков данных в реальном времени. Этот 
	подход используется для создания систем, которые могут быстро реагировать на изменения 
	в данных и адаптироваться к ним.

	В реактивном программировании используются так называемые реактивные библиотеки, которые 
	позволяют обрабатывать данные в режиме реального времени без необходимости постоянного 
	обновления состояния системы. Это делает реактивное программирование идеальным для 
	создания масштабируемых и высокопроизводительных систем.
`},ky={ques:"Разница между агрегацией и композицией",result:`
	Оба эти понятия относятся к принципам объектно-ориентированного проектирования, 
	но они имеют разные значения.

	Агрегация - это связь между объектами, при которой один объект (агрегат) включает в 
	себя другие объекты (части), но части не имеют прямой ссылки на агрегат. Агрегация 
	обычно используется для моделирования отношений “имеет” или “включает в себя”. Например, 
	автомобиль имеет колеса, двери и т.д.

	Композиция - это более сильная форма агрегации, при которой части имеют прямую ссылку 
	на агрегат и могут быть доступны через него. Композиция обычно используется для 
	моделирования более сильных связей между объектами, когда части являются неотъемлемой 
	частью целого. Например, человек имеет руки и ноги, которые являются его частями и 
	не могут существовать отдельно от него.
`},Ty={i:cy,s:fy,p:dy,d:py,m:my,k:vy,t:hy,n:yy,v:gy,x:Sy,r:wy,e:ky},Cy={ques:"Виды тестирования",result:`
	-Функциональное тестирование: Проверяет, что все функции
	 приложения работают корректно и соответствуют требованиям.

	-Интеграционное тестирование: Проверяет взаимодействие 
	 между различными компонентами системы.

	-Регрессионное тестирование: Проводится после внесения изменений
	 в систему, чтобы убедиться, что эти изменения не повлияли 
	 на работоспособность других функций.

	-Нагрузочное тестирование: Оценивает, как система работает
	 под большой нагрузкой.

	-Тестирование производительности: Измеряет скорость работы
	 системы и загрузку ресурсов.

	-Тестирование безопасности: Проверяет систему на уязвимости
	 и возможность взлома.

	-Ручное тестирование: Тестировщик выполняет проверку вручную, без
	 использования автоматизированных средств.

	-Автоматизированное тестирование: Тесты выполняются автоматически 
	с использованием специальных инструментов.
`},_y={ques:"Fake в unit тестировании",result:`
	В юнит-тестировании fake — это инструмент для создания фиктивных
	данных или объектов, которые имитируют реальное поведение системы,
	но при этом не требуют доступа к внешним ресурсам или базе данных.
	Fake-объекты позволяют быстро создавать тестовые сценарии и изолировать
	тесты от внешних зависимостей, что ускоряет процесс тестирования
	и улучшает его качество.
`},Py={ques:"Stub в unit тестировании",result:`
	В юнит-тестировании stub — это заглушка, которая заменяет реальную
	реализацию метода или интерфейса. Она используется для того,
	чтобы изолировать тестируемый код от зависимостей и упростить
	тестирование. Stub может просто возвращать фиксированное 
	значение или выполнять некоторые заранее определенные действия.
`},xy={ques:"Mock в unit тестировании?",result:`
	В юнит-тестировании mock — это объект, который имитирует 
	поведение другого объекта. Он позволяет тестировать код в изоляции,
	не затрагивая реальные зависимости. Mock используется для контроля
	того, какие методы будут вызваны и какие данные будут возвращены.
	Это позволяет написать более точные и надежные тесты.
`},Ey={ques:"White/Black/Grey Box-тестирование?",result:`
	-White box testing - это метод тестирования программного обеспечения,
	 при котором тестировщик имеет доступ к исходному коду программы. 
	 Этот вид тестирования позволяет обнаружить максимальное количество 
	 ошибок, так как тестировщик может исследовать внутреннюю структуру 
	 программы и использовать знания о ее работе для создания тестов.

	-Black box testing - метод тестирования, при котором тестировщику 
	неизвестны детали реализации системы. Тестировщик имеет доступ только 
	к функциональности системы, описанной в требованиях или технической 
	документации. Этот вид тестирования помогает проверить соответствие 
	системы требованиям и обнаружить ошибки в интерфейсе пользователя.

	-Grey box testing - промежуточный вид тестирования между white box 
	и black box. Тестировщику доступны некоторые детали реализации системы,
	например, структура программы или алгоритмы работы отдельных компонентов. 
	Это позволяет создать более точные и эффективные тесты, учитывая знания 
	о внутреннем устройстве системы.
`},Ly={ques:"Что такое Quality Gates",result:`
	Quality gates — это механизмы, которые определяют критерии качества
	для сборки или итерации, и только если сборка соответствует этим критериям,
	она может быть объединена в основную ветку разработки. Это помогает 
	гарантировать, что в основную ветку не попадут некачественные изменения, 
	которые могут привести к сбоям или проблемам в работе продукта. Quality 
	gates могут включать такие критерии, как количество пройденных тестов, 
	покрытие кода тестами, отсутствие серьезных дефектов и т.д.
`},Ry={ques:"Разница между TDD и BDD",result:`
	-TDD (Test-Driven Development) - это подход к разработке программного обеспечения,
	основанный на написании тестов до написания кода. Это позволяет гарантировать,
	что код, который мы пишем, соответствует нашим требованиям и ожиданиям.

	-BDD (Behavior-Driven Development) - это метод разработки программного обеспечения,
	который фокусируется на описании того, как система должна работать, а не 
	на том, как она реализована. BDD использует сценарии, называемые “тестами”, 
	которые описывают поведение системы. Эти сценарии могут быть написаны на любом
	языке, но обычно используются языки, такие как Gherkin или Cucumber.
`},Ny={ques:"UI-тестирование",result:`
	UI-тестирование (User Interface Testing) - это процесс тестирования визуального
	интерфейса приложения с целью проверки его функциональности, удобства
	использования и соответствия требованиям. Оно включает в себя тестирование
	различных элементов интерфейса, таких как кнопки, ссылки, формы, поля ввода,
	меню и другие элементы.

	Подходы к UI-тестированию включают функциональное тестирование, интеграционное
	тестирование, регрессионное тестирование, нагрузочное тестирование, 
	тестирование производительности и тестирование безопасности. Каждый из
	этих подходов имеет свои особенности и методы выполнения, но все они направлены 
	на обеспечение качества и надежности приложения.
`},My={ques:"Как можно оценить качество тестирования",result:`
	Качество тестирования можно оценить по нескольким параметрам:

	-Процент покрытых тестами модулей и функций - чем выше этот процент, 
	тем лучше покрытие тестами и тем меньше вероятность, что в не 
	покрытом тестами коде есть ошибки.

	-Количество обнаруженных ошибок - чем больше ошибок обнаружено, тем 
	выше качество тестирования.

	-Время, затраченное на тестирование - чем меньше времени затрачено 
	на тестирование, тем быстрее проект движется к завершению и тем меньше 
	вероятность появления новых ошибок.

	-Качество отчетов о покрытии тестами - отчеты должны быть полными, 
	точными и понятными для всех членов команды.

	-Оценка удовлетворенности пользователей - пользователи должны быть довольны
	работой приложения и не должны испытывать проблем или неудобств 
	при его использовании.
`},$y={ques:"Принцип FIRST в тестировании",result:`
	Принцип FIRST - это принцип тестирования, который гласит, что 
	при обнаружении ошибки необходимо как можно быстрее ее изолировать
	и устранить. Этот принцип помогает сократить время на поиск и 
	исправление ошибок, а также снижает вероятность появления новых дефектов.
`},Dy={v:Cy,f:_y,s:Py,m:xy,b:Ey,g:Ly,t:Ry,u:Ny,e:My,i:$y},Oy={ques:"Что такое бэм?",result:`
	Компонентный подход к веб-разработке. В его основе лежит принцип
	разделения интерфейса на независимые блоки. Он позволяет легко и
	быстро разрабатывать интерфейсы любой сложности и повторно использовать
	существующий код.
`},Iy={ques:"Что такое БЭМ-сущность?",result:`
	БЭМ-сущностями называются блоки, элементы и модификаторы.
`},zy={ques:"Принципы",result:`
	Помимо SOLID, есть еще несколько принципов, которые следует учитывать при разработке 
	программного обеспечения:

	-KISS (Keep It Simple, Stupid) - принцип, который гласит, что решение должно быть 
	простым и понятным.

	-YAGNI (You Aren’t Gonna Need It) - принцип, согласно которому не следует добавлять 
	новые функции, если они не нужны прямо сейчас.

	-DRY (Don’t Repeat Yourself) - принцип, который призывает избегать дублирования кода 
	и использовать общие решения для схожих задач.

	-DIP (Dependency Inversion Principle) - принцип инверсии зависимостей, который гласит,
	что высокоуровневые модули не должны зависеть от низкоуровневых, а не наоборот.

	-LSP (Liskov Substitution Principle) - принцип подстановки Лискова, который говорит о 
	том, что объекты в иерархии наследования должны быть заменяемы объектами более низкого
	уровня без изменения поведения системы.
`},qy={i:Oy,e:Iy,p:zy},jy={ques:"Что такое vue?",result:"vue - это ..."},Hy={e:jy},$r={html:Ep,css:tm,methodology:qy,react:qm,type_script:iv,web:Xv,java_script:ay,oop:Ty,testing:Dy,vue:Hy},Ay=Object.keys($r),Wo={html:"HTML и вёрстка",css:"CSS и препроцессоры",methodology:"Методология",react:"React",type_script:"TypeScript",java_script:"JavaScript",oop:"ООП",testing:"Тестирование",web:"Web",vue:"Vue"},Fy=vt.memo(({setWindowContentName:t,setIsActiveMenu:n})=>{const e=r=>{r.target.tagName==="BUTTON"&&(t(r.target.id),n(!1))};return $.jsx("div",{className:Xi.dropDown,children:$.jsx("ul",{className:Xi.dropDown_list,onClick:e,children:Ay.map(r=>$.jsx("li",{children:$.jsx(cc,{text:Wo[r],id:r,position:"menu"})},Wo[r]))})})}),Uy=vt.memo(({setWindowContentName:t,setIsActiveMenu:n})=>$.jsx("div",{className:Gi.menu_nav,children:$.jsx("ul",{className:Gi.menu_nav_list,children:$.jsx(Fy,{setWindowContentName:t,setIsActiveMenu:n})})})),Wy="_list_ques_91ie3_1",By="_window_content__answer_91ie3_5",Jy="_window_content_91ie3_5",Vy="_window_content__text_91ie3_20",Qy="_title_page_91ie3_30",Ky="_input_search_91ie3_36",Gy="_input_search_input_91ie3_41",Xy="_not_matches_91ie3_53",Yy="_button_back_91ie3_58",At={list_ques:Wy,window_content__answer:By,window_content:Jy,window_content__text:Vy,title_page:Qy,input_search:Ky,input_search_input:Gy,not_matches:Xy,button_back:Yy},Zy=(t,n)=>{const e=t.toLowerCase().trim(),r=[];for(let[l,o]of Object.entries(n))for(let[u,i]of Object.entries(o))JSON.stringify(i).toLowerCase().indexOf(e)!=-1&&r.push([u,i,l]);return r},by=(t,n=300)=>{let e=null;return(...r)=>{window.clearTimeout(e),e=setTimeout(()=>{t(...r)},n)}};function t0({windowContentName:t,setIsActiveMenu:n,setWindowContentName:e}){const[r,l]=vt.useState(null),[o,u]=vt.useState(""),[i,s]=vt.useState(0),f=by(g=>{if(g.target){const S=g.target.value.trim().toLowerCase();u(S)}},800),v=()=>{l(null),n(!1),setTimeout(()=>window.scrollTo(0,i),0)},m=vt.useMemo(()=>{const g=w=>{const D=w.target.parentElement.getAttribute("data-name");if(D&&e(D),w.target.id){s(window.scrollY);const c=w.target.id;l(c),window.scrollTo(0,0)}},S=o?Zy(o,$r):Object.entries($r[t]);return $.jsx(kr.Fragment,{children:S.length>0?$.jsx("ol",{className:At.list_ques,onClick:g,children:S.map((w,D)=>{var c;return $.jsx("li",{"data-name":w[2]?w[2]:"",children:$.jsx(cc,{id:w[0],text:(c=w[1])==null?void 0:c.ques})},w[0]+D)})}):$.jsx("div",{className:At.not_matches,children:"Совпадений не найдено"})})},[t,o]),p=vt.useMemo(()=>{var S;const g=$r[t];if(r)return $.jsxs("article",{className:At.window_content__answer,children:[$.jsx("h1",{children:(S=g==null?void 0:g[r])==null?void 0:S.ques}),$.jsx("div",{className:At.window_content__text,children:$.jsx("p",{children:g==null?void 0:g[r].result})})]})},[t,r]);return $.jsxs("div",{className:At.window_content,children:[!r&&$.jsxs(kr.Fragment,{children:[$.jsx("div",{className:At.input_search,children:$.jsx("input",{className:At.input_search_input,type:"text",onChange:f,placeholder:"Поиск по содержимому всех тем"})}),$.jsx("h1",{className:At.title_page,children:Wo[t]})]}),r?$.jsxs(kr.Fragment,{children:[$.jsx("button",{className:At.button_back,onClick:v,children:"BACK"}),p]}):m]})}function n0(){const[t,n]=vt.useState(""),[e,r]=vt.useState(!0),l=()=>{r(!0),n("")};return $.jsx("main",{children:$.jsxs("div",{className:Ki.wrapper,children:[$.jsx("button",{onClick:l,className:Ki.open_menu,children:"MENU"}),!!t&&$.jsx(t0,{windowContentName:t,setWindowContentName:n,setIsActiveMenu:r}),e&&$.jsx(Uy,{setWindowContentName:n,setIsActiveMenu:r})]})})}Gl.createRoot(document.getElementById("root")).render($.jsx(kr.StrictMode,{children:$.jsx(n0,{})}));

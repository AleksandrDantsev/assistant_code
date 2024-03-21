(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yi={exports:{}},rl={},Zi={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),pc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Au=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var bi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ts={};function on(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||bi}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ns(){}ns.prototype=on.prototype;function Jo(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||bi}var Vo=Jo.prototype=new ns;Vo.constructor=Jo;es(Vo,on.prototype);Vo.isPureReactComponent=!0;var Fu=Array.isArray,rs=Object.prototype.hasOwnProperty,$o={current:null},ls={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,l={},o=null,u=null;if(t!=null)for(r in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(o=""+t.key),t)rs.call(t,r)&&!ls.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];l.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:Kn,type:e,key:o,ref:u,props:l,_owner:$o.current}}function Pc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function _c(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uu=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_c(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Kn:case pc:u=!0}}if(u)return u=e,l=l(u),e=r===""?"."+Tl(u,0):r,Fu(l)?(n="",e!=null&&(n=e.replace(Uu,"$&/")+"/"),Sr(l,t,n,"",function(f){return f})):l!=null&&(Qo(l)&&(l=Pc(l,n+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(Uu,"$&/")+"/")+e)),t.push(l)),1;if(u=0,r=r===""?".":r+":",Fu(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+Tl(o,i);u+=Sr(o,t,n,s,l)}else if(s=Cc(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+Tl(o,i++),u+=Sr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},wr={transition:null},Ec={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:wr,ReactCurrentOwner:$o};R.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=on;R.Fragment=mc;R.Profiler=hc;R.PureComponent=Jo;R.StrictMode=vc;R.Suspense=wc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),l=e.key,o=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,u=$o.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)rs.call(t,s)&&!ls.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];r.children=i}return{$$typeof:Kn,type:e.type,key:l,ref:o,props:r,_owner:u}};R.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yc,_context:e},e.Consumer=e};R.createElement=os;R.createFactory=function(e){var t=os.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Sc,render:e}};R.isValidElement=Qo;R.lazy=function(e){return{$$typeof:Tc,_payload:{_status:-1,_result:e},_init:xc}};R.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return ie.current.useCallback(e,t)};R.useContext=function(e){return ie.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};R.useEffect=function(e,t){return ie.current.useEffect(e,t)};R.useId=function(){return ie.current.useId()};R.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ie.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};R.useRef=function(e){return ie.current.useRef(e)};R.useState=function(e){return ie.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ie.current.useTransition()};R.version="18.2.0";Zi.exports=R;var ve=Zi.exports;const kr=dc(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=ve,Rc=Symbol.for("react.element"),Nc=Symbol.for("react.fragment"),Mc=Object.prototype.hasOwnProperty,Dc=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oc={key:!0,ref:!0,__self:!0,__source:!0};function us(e,t,n){var r,l={},o=null,u=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)Mc.call(t,r)&&!Oc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rc,type:e,key:o,ref:u,props:l,_owner:Dc.current}}rl.Fragment=Nc;rl.jsx=us;rl.jsxs=us;Yi.exports=rl;var D=Yi.exports,Kl={},is={exports:{}},Se={},ss={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,E){var L=C.length;C.push(E);e:for(;0<L;){var J=L-1>>>1,K=C[J];if(0<l(K,E))C[J]=E,C[L]=K,L=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var E=C[0],L=C.pop();if(L!==E){C[0]=L;e:for(var J=0,K=C.length,er=K>>>1;J<er;){var yt=2*(J+1)-1,kl=C[yt],gt=yt+1,tr=C[gt];if(0>l(kl,L))gt<K&&0>l(tr,kl)?(C[J]=tr,C[gt]=L,J=gt):(C[J]=kl,C[yt]=L,J=yt);else if(gt<K&&0>l(tr,L))C[J]=tr,C[gt]=L,J=gt;else break e}}return E}function l(C,E){var L=C.sortIndex-E.sortIndex;return L!==0?L:C.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var u=Date,i=u.now();e.unstable_now=function(){return u.now()-i}}var s=[],f=[],v=1,m=null,p=3,g=!1,S=!1,w=!1,O=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var E=n(f);E!==null;){if(E.callback===null)r(f);else if(E.startTime<=C)r(f),E.sortIndex=E.expirationTime,t(s,E);else break;E=n(f)}}function h(C){if(w=!1,d(C),!S)if(n(s)!==null)S=!0,Sl(T);else{var E=n(f);E!==null&&wl(h,E.startTime-C)}}function T(C,E){S=!1,w&&(w=!1,c(x),x=-1),g=!0;var L=p;try{for(d(E),m=n(s);m!==null&&(!(m.expirationTime>E)||C&&!Ee());){var J=m.callback;if(typeof J=="function"){m.callback=null,p=m.priorityLevel;var K=J(m.expirationTime<=E);E=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(s)&&r(s),d(E)}else r(s);m=n(s)}if(m!==null)var er=!0;else{var yt=n(f);yt!==null&&wl(h,yt.startTime-E),er=!1}return er}finally{m=null,p=L,g=!1}}var P=!1,_=null,x=-1,B=5,N=-1;function Ee(){return!(e.unstable_now()-N<B)}function an(){if(_!==null){var C=e.unstable_now();N=C;var E=!0;try{E=_(!0,C)}finally{E?cn():(P=!1,_=null)}}else P=!1}var cn;if(typeof a=="function")cn=function(){a(an)};else if(typeof MessageChannel<"u"){var ju=new MessageChannel,fc=ju.port2;ju.port1.onmessage=an,cn=function(){fc.postMessage(null)}}else cn=function(){O(an,0)};function Sl(C){_=C,P||(P=!0,cn())}function wl(C,E){x=O(function(){C(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,Sl(T))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var E=3;break;default:E=p}var L=p;p=E;try{return C()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,E){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=p;p=C;try{return E()}finally{p=L}},e.unstable_scheduleCallback=function(C,E,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=L+K,C={id:v++,callback:E,priorityLevel:C,startTime:L,expirationTime:K,sortIndex:-1},L>J?(C.sortIndex=L,t(f,C),n(s)===null&&C===n(f)&&(w?(c(x),x=-1):w=!0,wl(h,L-J))):(C.sortIndex=K,t(s,C),S||g||(S=!0,Sl(T))),C},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(C){var E=p;return function(){var L=p;p=E;try{return C.apply(this,arguments)}finally{p=L}}}})(as);ss.exports=as;var Ic=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=ve,ge=Ic;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fs=new Set,Dn={};function Mt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Dn[e]=t,e=0;e<t.length;e++)fs.add(t[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wu={},Bu={};function zc(e){return Xl.call(Bu,e)?!0:Xl.call(Wu,e)?!1:qc.test(e)?Bu[e]=!0:(Wu[e]=!0,!1)}function Hc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jc(e,t,n,r){if(t===null||typeof t>"u"||Hc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,o,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=u}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Go=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Go,Ko);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Go,Ko);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Go,Ko);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xo(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jc(t,n,l,r)&&(n=null),r||l===null?zc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),It=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),ps=Symbol.for("react.context"),Zo=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),bo=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),Ju=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Cl;function Sn(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var Pl=!1;function _l(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),u=l.length-1,i=o.length-1;1<=u&&0<=i&&l[u]!==o[i];)i--;for(;1<=u&&0<=i;u--,i--)if(l[u]!==o[i]){if(u!==1||i!==1)do if(u--,i--,0>i||l[u]!==o[i]){var s=`
`+l[u].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=u&&0<=i);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Ac(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function eo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case It:return"Portal";case Yl:return"Profiler";case Yo:return"StrictMode";case Zl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case Zo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bo:return t=e.displayName||null,t!==null?t:eo(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return eo(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eo(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uc(e){var t=vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Uc(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function to(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ys(e,t){t=t.checked,t!=null&&Xo(e,"checked",t,!1)}function no(e,t){ys(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&ro(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ro(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function $t(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function lo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function gs(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ss(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ss(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Ts(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ks(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Bc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(e,t){if(t){if(Bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,Qt=null,Gt=null;function Ku(e){if(e=Zn(e)){if(typeof ao!="function")throw Error(y(280));var t=e.stateNode;t&&(t=sl(t),ao(e.stateNode,e.type,t))}}function Cs(e){Qt?Gt?Gt.push(e):Gt=[e]:Qt=e}function Ps(){if(Qt){var e=Qt,t=Gt;if(Gt=Qt=null,Ku(e),t)for(e=0;e<t.length;e++)Ku(t[e])}}function _s(e,t){return e(t)}function xs(){}var xl=!1;function Es(e,t,n){if(xl)return e(t,n);xl=!0;try{return _s(e,t,n)}finally{xl=!1,(Qt!==null||Gt!==null)&&(xs(),Ps())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var co=!1;if($e)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){co=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{co=!1}function Jc(e,t,n,r,l,o,u,i,s){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var Pn=!1,Ir=null,qr=!1,fo=null,Vc={onError:function(e){Pn=!0,Ir=e}};function $c(e,t,n,r,l,o,u,i,s){Pn=!1,Ir=null,Jc.apply(Vc,arguments)}function Qc(e,t,n,r,l,o,u,i,s){if($c.apply(this,arguments),Pn){if(Pn){var f=Ir;Pn=!1,Ir=null}else throw Error(y(198));qr||(qr=!0,fo=f)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ls(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xu(e){if(Dt(e)!==e)throw Error(y(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xu(l),e;if(o===r)return Xu(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var u=!1,i=l.child;i;){if(i===n){u=!0,n=l,r=o;break}if(i===r){u=!0,r=l,n=o;break}i=i.sibling}if(!u){for(i=o.child;i;){if(i===n){u=!0,n=o,r=l;break}if(i===r){u=!0,r=o,n=l;break}i=i.sibling}if(!u)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Rs(e){return e=Gc(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ns(e);if(t!==null)return t;e=e.sibling}return null}var Ms=ge.unstable_scheduleCallback,Yu=ge.unstable_cancelCallback,Kc=ge.unstable_shouldYield,Xc=ge.unstable_requestPaint,V=ge.unstable_now,Yc=ge.unstable_getCurrentPriorityLevel,tu=ge.unstable_ImmediatePriority,Ds=ge.unstable_UserBlockingPriority,zr=ge.unstable_NormalPriority,Zc=ge.unstable_LowPriority,Os=ge.unstable_IdlePriority,ll=null,je=null;function bc(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:nf,ef=Math.log,tf=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var ur=64,ir=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var i=u&~l;i!==0?r=kn(i):(o&=u,o!==0&&(r=kn(o)))}else u=n&~l,u!==0?r=kn(u):o!==0&&(r=kn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-De(o),i=1<<u,s=l[u];s===-1?(!(i&n)||i&r)&&(l[u]=rf(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Is(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function of(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function qs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zs,ru,Hs,js,As,mo=!1,sr=[],lt=null,ot=null,ut=null,qn=new Map,zn=new Map,et=[],uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(t.pointerId)}}function pn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sf(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return ot=pn(ot,e,t,n,r,l),!0;case"mouseover":return ut=pn(ut,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return qn.set(o,pn(qn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,zn.set(o,pn(zn.get(o)||null,e,t,n,r,l)),!0}return!1}function Fs(e){var t=kt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ls(n),t!==null){e.blockedOn=t,As(e.priority,function(){Hs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);so=r,n.target.dispatchEvent(r),so=null}else return t=Zn(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){Tr(e)&&n.delete(t)}function af(){mo=!1,lt!==null&&Tr(lt)&&(lt=null),ot!==null&&Tr(ot)&&(ot=null),ut!==null&&Tr(ut)&&(ut=null),qn.forEach(bu),zn.forEach(bu)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,mo||(mo=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,af)))}function Hn(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),ot!==null&&mn(ot,e),ut!==null&&mn(ut,e),qn.forEach(t),zn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Fs(n),n.blockedOn===null&&et.shift()}var Kt=Xe.ReactCurrentBatchConfig,jr=!0;function cf(e,t,n,r){var l=I,o=Kt.transition;Kt.transition=null;try{I=1,lu(e,t,n,r)}finally{I=l,Kt.transition=o}}function ff(e,t,n,r){var l=I,o=Kt.transition;Kt.transition=null;try{I=4,lu(e,t,n,r)}finally{I=l,Kt.transition=o}}function lu(e,t,n,r){if(jr){var l=vo(e,t,n,r);if(l===null)Hl(e,t,r,Ar,n),Zu(e,r);else if(sf(l,e,t,n,r))r.stopPropagation();else if(Zu(e,r),t&4&&-1<uf.indexOf(e)){for(;l!==null;){var o=Zn(l);if(o!==null&&zs(o),o=vo(e,t,n,r),o===null&&Hl(e,t,r,Ar,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Ar=null;function vo(e,t,n,r){if(Ar=null,e=eu(r),e=kt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ls(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case tu:return 1;case Ds:return 4;case zr:case Zc:return 16;case Os:return 536870912;default:return 16}default:return 16}}var nt=null,ou=null,Cr=null;function Ws(){if(Cr)return Cr;var e,t=ou,n=t.length,r,l="value"in nt?nt.value:nt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[o-r];r++);return Cr=l.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function ei(){return!1}function we(e){function t(n,r,l,o,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:ei,this.isPropagationStopped=ei,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=we(un),Yn=U({},un,{view:0,detail:0}),df=we(Yn),Ll,Rl,vn,ol=U({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ll=e.screenX-vn.screenX,Rl=e.screenY-vn.screenY):Rl=Ll=0,vn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),ti=we(ol),pf=U({},ol,{dataTransfer:0}),mf=we(pf),vf=U({},Yn,{relatedTarget:0}),Nl=we(vf),hf=U({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=we(hf),gf=U({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=we(gf),wf=U({},un,{data:0}),ni=we(wf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function iu(){return Pf}var _f=U({},Yn,{key:function(e){if(e.key){var t=kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=we(_f),Ef=U({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ri=we(Ef),Lf=U({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Rf=we(Lf),Nf=U({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mf=we(Nf),Df=U({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Of=we(Df),If=[9,13,27,32],su=$e&&"CompositionEvent"in window,_n=null;$e&&"documentMode"in document&&(_n=document.documentMode);var qf=$e&&"TextEvent"in window&&!_n,Bs=$e&&(!su||_n&&8<_n&&11>=_n),li=" ",oi=!1;function Js(e,t){switch(e){case"keyup":return If.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zt=!1;function zf(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(oi=!0,li);case"textInput":return e=t.data,e===li&&oi?null:e;default:return null}}function Hf(e,t){if(zt)return e==="compositionend"||!su&&Js(e,t)?(e=Ws(),Cr=ou=nt=null,zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bs&&t.locale!=="ko"?null:t.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jf[e.type]:t==="textarea"}function $s(e,t,n,r){Cs(r),t=Fr(t,"onChange"),0<t.length&&(n=new uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xn=null,jn=null;function Af(e){ra(e,0)}function ul(e){var t=At(e);if(hs(t))return e}function Ff(e,t){if(e==="change")return t}var Qs=!1;if($e){var Ml;if($e){var Dl="oninput"in document;if(!Dl){var ii=document.createElement("div");ii.setAttribute("oninput","return;"),Dl=typeof ii.oninput=="function"}Ml=Dl}else Ml=!1;Qs=Ml&&(!document.documentMode||9<document.documentMode)}function si(){xn&&(xn.detachEvent("onpropertychange",Gs),jn=xn=null)}function Gs(e){if(e.propertyName==="value"&&ul(jn)){var t=[];$s(t,jn,e,eu(e)),Es(Af,t)}}function Uf(e,t,n){e==="focusin"?(si(),xn=t,jn=n,xn.attachEvent("onpropertychange",Gs)):e==="focusout"&&si()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(jn)}function Bf(e,t){if(e==="click")return ul(t)}function Jf(e,t){if(e==="input"||e==="change")return ul(t)}function Vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Vf;function An(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function ai(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n=ai(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ai(n)}}function Ks(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ks(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xs(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $f(e){var t=Xs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ks(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ci(n,o);var u=ci(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qf=$e&&"documentMode"in document&&11>=document.documentMode,Ht=null,ho=null,En=null,yo=!1;function fi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||Ht==null||Ht!==Or(r)||(r=Ht,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&An(En,r)||(En=r,r=Fr(ho,"onSelect"),0<r.length&&(t=new uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ol={},Ys={};$e&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function il(e){if(Ol[e])return Ol[e];if(!jt[e])return e;var t=jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return Ol[e]=t[n];return e}var Zs=il("animationend"),bs=il("animationiteration"),ea=il("animationstart"),ta=il("transitionend"),na=new Map,di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){na.set(e,t),Mt(t,[e])}for(var Il=0;Il<di.length;Il++){var ql=di[Il],Gf=ql.toLowerCase(),Kf=ql[0].toUpperCase()+ql.slice(1);mt(Gf,"on"+Kf)}mt(Zs,"onAnimationEnd");mt(bs,"onAnimationIteration");mt(ea,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(ta,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function pi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function ra(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var u=r.length-1;0<=u;u--){var i=r[u],s=i.instance,f=i.currentTarget;if(i=i.listener,s!==o&&l.isPropagationStopped())break e;pi(l,i,f),o=s}else for(u=0;u<r.length;u++){if(i=r[u],s=i.instance,f=i.currentTarget,i=i.listener,s!==o&&l.isPropagationStopped())break e;pi(l,i,f),o=s}}}if(qr)throw e=fo,qr=!1,fo=null,e}function z(e,t){var n=t[To];n===void 0&&(n=t[To]=new Set);var r=e+"__bubble";n.has(r)||(la(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),la(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[fr]){e[fr]=!0,fs.forEach(function(n){n!=="selectionchange"&&(Xf.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,zl("selectionchange",!1,t))}}function la(e,t,n,r){switch(Us(t)){case 1:var l=cf;break;case 4:l=ff;break;default:l=lu}n=l.bind(null,t,n,e),l=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var s=u.tag;if((s===3||s===4)&&(s=u.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;u=u.return}for(;i!==null;){if(u=kt(i),u===null)return;if(s=u.tag,s===5||s===6){r=o=u;continue e}i=i.parentNode}}r=r.return}Es(function(){var f=o,v=eu(n),m=[];e:{var p=na.get(e);if(p!==void 0){var g=uu,S=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":g=xf;break;case"focusin":S="focus",g=Nl;break;case"focusout":S="blur",g=Nl;break;case"beforeblur":case"afterblur":g=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rf;break;case Zs:case bs:case ea:g=yf;break;case ta:g=Mf;break;case"scroll":g=df;break;case"wheel":g=Of;break;case"copy":case"cut":case"paste":g=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ri}var w=(t&4)!==0,O=!w&&e==="scroll",c=w?p!==null?p+"Capture":null:p;w=[];for(var a=f,d;a!==null;){d=a;var h=d.stateNode;if(d.tag===5&&h!==null&&(d=h,c!==null&&(h=In(a,c),h!=null&&w.push(Un(a,h,d)))),O)break;a=a.return}0<w.length&&(p=new g(p,S,null,n,v),m.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==so&&(S=n.relatedTarget||n.fromElement)&&(kt(S)||S[Qe]))break e;if((g||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=f,S=S?kt(S):null,S!==null&&(O=Dt(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=f),g!==S)){if(w=ti,h="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(w=ri,h="onPointerLeave",c="onPointerEnter",a="pointer"),O=g==null?p:At(g),d=S==null?p:At(S),p=new w(h,a+"leave",g,n,v),p.target=O,p.relatedTarget=d,h=null,kt(v)===f&&(w=new w(c,a+"enter",S,n,v),w.target=d,w.relatedTarget=O,h=w),O=h,g&&S)t:{for(w=g,c=S,a=0,d=w;d;d=Ot(d))a++;for(d=0,h=c;h;h=Ot(h))d++;for(;0<a-d;)w=Ot(w),a--;for(;0<d-a;)c=Ot(c),d--;for(;a--;){if(w===c||c!==null&&w===c.alternate)break t;w=Ot(w),c=Ot(c)}w=null}else w=null;g!==null&&mi(m,p,g,w,!1),S!==null&&O!==null&&mi(m,O,S,w,!0)}}e:{if(p=f?At(f):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var T=Ff;else if(ui(p))if(Qs)T=Jf;else{T=Wf;var P=Uf}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Bf);if(T&&(T=T(e,f))){$s(m,T,n,v);break e}P&&P(e,p,f),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&ro(p,"number",p.value)}switch(P=f?At(f):window,e){case"focusin":(ui(P)||P.contentEditable==="true")&&(Ht=P,ho=f,En=null);break;case"focusout":En=ho=Ht=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,fi(m,n,v);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":fi(m,n,v)}var _;if(su)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else zt?Js(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Bs&&n.locale!=="ko"&&(zt||x!=="onCompositionStart"?x==="onCompositionEnd"&&zt&&(_=Ws()):(nt=v,ou="value"in nt?nt.value:nt.textContent,zt=!0)),P=Fr(f,x),0<P.length&&(x=new ni(x,e,null,n,v),m.push({event:x,listeners:P}),_?x.data=_:(_=Vs(n),_!==null&&(x.data=_)))),(_=qf?zf(e,n):Hf(e,n))&&(f=Fr(f,"onBeforeInput"),0<f.length&&(v=new ni("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:f}),v.data=_))}ra(m,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=In(e,n),o!=null&&r.unshift(Un(e,o,l)),o=In(e,t),o!=null&&r.push(Un(e,o,l))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mi(e,t,n,r,l){for(var o=t._reactName,u=[];n!==null&&n!==r;){var i=n,s=i.alternate,f=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&f!==null&&(i=f,l?(s=In(n,o),s!=null&&u.unshift(Un(n,s,i))):l||(s=In(n,o),s!=null&&u.push(Un(n,s,i)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Yf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function vi(e){return(typeof e=="string"?e:""+e).replace(Yf,`
`).replace(Zf,"")}function dr(e,t,n){if(t=vi(t),vi(e)!==t&&n)throw Error(y(425))}function Ur(){}var go=null,So=null;function wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,hi=typeof Promise=="function"?Promise:void 0,ed=typeof queueMicrotask=="function"?queueMicrotask:typeof hi<"u"?function(e){return hi.resolve(null).then(e).catch(td)}:ko;function td(e){setTimeout(function(){throw e})}function jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),He="__reactFiber$"+sn,Wn="__reactProps$"+sn,Qe="__reactContainer$"+sn,To="__reactEvents$"+sn,nd="__reactListeners$"+sn,rd="__reactHandles$"+sn;function kt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yi(e);e!==null;){if(n=e[He])return n;e=yi(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[He]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function sl(e){return e[Wn]||null}var Co=[],Ft=-1;function vt(e){return{current:e}}function H(e){0>Ft||(e.current=Co[Ft],Co[Ft]=null,Ft--)}function q(e,t){Ft++,Co[Ft]=e.current,e.current=t}var pt={},le=vt(pt),fe=vt(!1),xt=pt;function bt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Wr(){H(fe),H(le)}function gi(e,t,n){if(le.current!==pt)throw Error(y(168));q(le,t),q(fe,n)}function oa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Fc(e)||"Unknown",l));return U({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,xt=le.current,q(le,e),q(fe,fe.current),!0}function Si(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=oa(e,t,xt),r.__reactInternalMemoizedMergedChildContext=e,H(fe),H(le),q(le,e)):H(fe),q(fe,n)}var We=null,al=!1,Al=!1;function ua(e){We===null?We=[e]:We.push(e)}function ld(e){al=!0,ua(e)}function ht(){if(!Al&&We!==null){Al=!0;var e=0,t=I;try{var n=We;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,al=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),Ms(tu,ht),l}finally{I=t,Al=!1}}return null}var Ut=[],Wt=0,Jr=null,Vr=0,ke=[],Te=0,Et=null,Be=1,Je="";function St(e,t){Ut[Wt++]=Vr,Ut[Wt++]=Jr,Jr=e,Vr=t}function ia(e,t,n){ke[Te++]=Be,ke[Te++]=Je,ke[Te++]=Et,Et=e;var r=Be;e=Je;var l=32-De(r)-1;r&=~(1<<l),n+=1;var o=32-De(t)+l;if(30<o){var u=l-l%5;o=(r&(1<<u)-1).toString(32),r>>=u,l-=u,Be=1<<32-De(t)+l|n<<l|r,Je=o+e}else Be=1<<o|n<<l|r,Je=e}function cu(e){e.return!==null&&(St(e,1),ia(e,1,0))}function fu(e){for(;e===Jr;)Jr=Ut[--Wt],Ut[Wt]=null,Vr=Ut[--Wt],Ut[Wt]=null;for(;e===Et;)Et=ke[--Te],ke[Te]=null,Je=ke[--Te],ke[Te]=null,Be=ke[--Te],ke[Te]=null}var ye=null,he=null,j=!1,Me=null;function sa(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,he=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Be,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,he=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _o(e){if(j){var t=he;if(t){var n=t;if(!wi(e,t)){if(Po(e))throw Error(y(418));t=it(n.nextSibling);var r=ye;t&&wi(e,t)?sa(r,n):(e.flags=e.flags&-4097|2,j=!1,ye=e)}}else{if(Po(e))throw Error(y(418));e.flags=e.flags&-4097|2,j=!1,ye=e}}}function ki(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!j)return ki(e),j=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wo(e.type,e.memoizedProps)),t&&(t=he)){if(Po(e))throw aa(),Error(y(418));for(;t;)sa(e,t),t=it(t.nextSibling)}if(ki(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ye?it(e.stateNode.nextSibling):null;return!0}function aa(){for(var e=he;e;)e=it(e.nextSibling)}function en(){he=ye=null,j=!1}function du(e){Me===null?Me=[e]:Me.push(e)}var od=Xe.ReactCurrentBatchConfig;function Re(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $r=vt(null),Qr=null,Bt=null,pu=null;function mu(){pu=Bt=Qr=null}function vu(e){var t=$r.current;H($r),e._currentValue=t}function xo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Qr=e,pu=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(pu!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Qr===null)throw Error(y(308));Bt=e,Qr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var Tt=null;function hu(e){Tt===null?Tt=[e]:Tt.push(e)}function ca(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,hu(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,hu(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}function Ti(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var l=e.updateQueue;be=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,f=s.next;s.next=null,u===null?o=f:u.next=f,u=s;var v=e.alternate;v!==null&&(v=v.updateQueue,i=v.lastBaseUpdate,i!==u&&(i===null?v.firstBaseUpdate=f:i.next=f,v.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;u=0,v=f=s=null,i=o;do{var p=i.lane,g=i.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,w=i;switch(p=t,g=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){m=S.call(g,m,p);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S=="function"?S.call(g,m,p):S,p==null)break e;m=U({},m,p);break e;case 2:be=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[i]:p.push(i))}else g={eventTime:g,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},v===null?(f=v=g,s=m):v=v.next=g,u|=p;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;p=i,i=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(v===null&&(s=m),l.baseState=s,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Rt|=u,e.lanes=u,e.memoizedState=m}}function Ci(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var da=new cs.Component().refs;function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ct(e),o=Ve(r,l);o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(Oe(t,e,l,r),_r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ct(e),o=Ve(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(Oe(t,e,l,r),_r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ct(e),l=Ve(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Oe(t,e,r,n),_r(t,e,r))}};function Pi(e,t,n,r,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,u):t.prototype&&t.prototype.isPureReactComponent?!An(n,r)||!An(l,o):!0}function pa(e,t,n){var r=!1,l=pt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=de(t)?xt:le.current,r=t.contextTypes,o=(r=r!=null)?bt(e,l):pt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function _i(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Lo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=da,yu(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=de(t)?xt:le.current,l.context=bt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Gr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var i=l.refs;i===da&&(i=l.refs={}),u===null?delete i[o]:i[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xi(e){var t=e._init;return t(e._payload)}function ma(e){function t(c,a){if(e){var d=c.deletions;d===null?(c.deletions=[a],c.flags|=16):d.push(a)}}function n(c,a){if(!e)return null;for(;a!==null;)t(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function l(c,a){return c=ft(c,a),c.index=0,c.sibling=null,c}function o(c,a,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<a?(c.flags|=2,a):d):(c.flags|=2,a)):(c.flags|=1048576,a)}function u(c){return e&&c.alternate===null&&(c.flags|=2),c}function i(c,a,d,h){return a===null||a.tag!==6?(a=$l(d,c.mode,h),a.return=c,a):(a=l(a,d),a.return=c,a)}function s(c,a,d,h){var T=d.type;return T===qt?v(c,a,d.props.children,h,d.key):a!==null&&(a.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ze&&xi(T)===a.type)?(h=l(a,d.props),h.ref=hn(c,a,d),h.return=c,h):(h=Mr(d.type,d.key,d.props,null,c.mode,h),h.ref=hn(c,a,d),h.return=c,h)}function f(c,a,d,h){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Ql(d,c.mode,h),a.return=c,a):(a=l(a,d.children||[]),a.return=c,a)}function v(c,a,d,h,T){return a===null||a.tag!==7?(a=_t(d,c.mode,h,T),a.return=c,a):(a=l(a,d),a.return=c,a)}function m(c,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=$l(""+a,c.mode,d),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return d=Mr(a.type,a.key,a.props,null,c.mode,d),d.ref=hn(c,null,a),d.return=c,d;case It:return a=Ql(a,c.mode,d),a.return=c,a;case Ze:var h=a._init;return m(c,h(a._payload),d)}if(wn(a)||fn(a))return a=_t(a,c.mode,d,null),a.return=c,a;mr(c,a)}return null}function p(c,a,d,h){var T=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return T!==null?null:i(c,a,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===T?s(c,a,d,h):null;case It:return d.key===T?f(c,a,d,h):null;case Ze:return T=d._init,p(c,a,T(d._payload),h)}if(wn(d)||fn(d))return T!==null?null:v(c,a,d,h,null);mr(c,d)}return null}function g(c,a,d,h,T){if(typeof h=="string"&&h!==""||typeof h=="number")return c=c.get(d)||null,i(a,c,""+h,T);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rr:return c=c.get(h.key===null?d:h.key)||null,s(a,c,h,T);case It:return c=c.get(h.key===null?d:h.key)||null,f(a,c,h,T);case Ze:var P=h._init;return g(c,a,d,P(h._payload),T)}if(wn(h)||fn(h))return c=c.get(d)||null,v(a,c,h,T,null);mr(a,h)}return null}function S(c,a,d,h){for(var T=null,P=null,_=a,x=a=0,B=null;_!==null&&x<d.length;x++){_.index>x?(B=_,_=null):B=_.sibling;var N=p(c,_,d[x],h);if(N===null){_===null&&(_=B);break}e&&_&&N.alternate===null&&t(c,_),a=o(N,a,x),P===null?T=N:P.sibling=N,P=N,_=B}if(x===d.length)return n(c,_),j&&St(c,x),T;if(_===null){for(;x<d.length;x++)_=m(c,d[x],h),_!==null&&(a=o(_,a,x),P===null?T=_:P.sibling=_,P=_);return j&&St(c,x),T}for(_=r(c,_);x<d.length;x++)B=g(_,c,x,d[x],h),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?x:B.key),a=o(B,a,x),P===null?T=B:P.sibling=B,P=B);return e&&_.forEach(function(Ee){return t(c,Ee)}),j&&St(c,x),T}function w(c,a,d,h){var T=fn(d);if(typeof T!="function")throw Error(y(150));if(d=T.call(d),d==null)throw Error(y(151));for(var P=T=null,_=a,x=a=0,B=null,N=d.next();_!==null&&!N.done;x++,N=d.next()){_.index>x?(B=_,_=null):B=_.sibling;var Ee=p(c,_,N.value,h);if(Ee===null){_===null&&(_=B);break}e&&_&&Ee.alternate===null&&t(c,_),a=o(Ee,a,x),P===null?T=Ee:P.sibling=Ee,P=Ee,_=B}if(N.done)return n(c,_),j&&St(c,x),T;if(_===null){for(;!N.done;x++,N=d.next())N=m(c,N.value,h),N!==null&&(a=o(N,a,x),P===null?T=N:P.sibling=N,P=N);return j&&St(c,x),T}for(_=r(c,_);!N.done;x++,N=d.next())N=g(_,c,x,N.value,h),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?x:N.key),a=o(N,a,x),P===null?T=N:P.sibling=N,P=N);return e&&_.forEach(function(an){return t(c,an)}),j&&St(c,x),T}function O(c,a,d,h){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:e:{for(var T=d.key,P=a;P!==null;){if(P.key===T){if(T=d.type,T===qt){if(P.tag===7){n(c,P.sibling),a=l(P,d.props.children),a.return=c,c=a;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ze&&xi(T)===P.type){n(c,P.sibling),a=l(P,d.props),a.ref=hn(c,P,d),a.return=c,c=a;break e}n(c,P);break}else t(c,P);P=P.sibling}d.type===qt?(a=_t(d.props.children,c.mode,h,d.key),a.return=c,c=a):(h=Mr(d.type,d.key,d.props,null,c.mode,h),h.ref=hn(c,a,d),h.return=c,c=h)}return u(c);case It:e:{for(P=d.key;a!==null;){if(a.key===P)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){n(c,a.sibling),a=l(a,d.children||[]),a.return=c,c=a;break e}else{n(c,a);break}else t(c,a);a=a.sibling}a=Ql(d,c.mode,h),a.return=c,c=a}return u(c);case Ze:return P=d._init,O(c,a,P(d._payload),h)}if(wn(d))return S(c,a,d,h);if(fn(d))return w(c,a,d,h);mr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(n(c,a.sibling),a=l(a,d),a.return=c,c=a):(n(c,a),a=$l(d,c.mode,h),a.return=c,c=a),u(c)):n(c,a)}return O}var tn=ma(!0),va=ma(!1),bn={},Ae=vt(bn),Bn=vt(bn),Jn=vt(bn);function Ct(e){if(e===bn)throw Error(y(174));return e}function gu(e,t){switch(q(Jn,t),q(Bn,e),q(Ae,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oo(t,e)}H(Ae),q(Ae,t)}function nn(){H(Ae),H(Bn),H(Jn)}function ha(e){Ct(Jn.current);var t=Ct(Ae.current),n=oo(t,e.type);t!==n&&(q(Bn,e),q(Ae,n))}function Su(e){Bn.current===e&&(H(Ae),H(Bn))}var A=vt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function wu(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var xr=Xe.ReactCurrentDispatcher,Ul=Xe.ReactCurrentBatchConfig,Lt=0,F=null,Q=null,X=null,Xr=!1,Ln=!1,Vn=0,ud=0;function te(){throw Error(y(321))}function ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function Tu(e,t,n,r,l,o){if(Lt=o,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xr.current=e===null||e.memoizedState===null?cd:fd,e=n(r,l),Ln){o=0;do{if(Ln=!1,Vn=0,25<=o)throw Error(y(301));o+=1,X=Q=null,t.updateQueue=null,xr.current=dd,e=n(r,l)}while(Ln)}if(xr.current=Yr,t=Q!==null&&Q.next!==null,Lt=0,X=Q=F=null,Xr=!1,t)throw Error(y(300));return e}function Cu(){var e=Vn!==0;return Vn=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?F.memoizedState=X=e:X=X.next=e,X}function xe(){if(Q===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=X===null?F.memoizedState:X.next;if(t!==null)X=t,Q=e;else{if(e===null)throw Error(y(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?F.memoizedState=X=e:X=X.next=e}return X}function $n(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=xe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Q,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var i=u=null,s=null,f=o;do{var v=f.lane;if((Lt&v)===v)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(i=s=m,u=r):s=s.next=m,F.lanes|=v,Rt|=v}f=f.next}while(f!==null&&f!==o);s===null?u=r:s.next=i,Ie(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,F.lanes|=o,Rt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=xe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);Ie(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ya(){}function ga(e,t){var n=F,r=xe(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,Pu(ka.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Qn(9,wa.bind(null,n,r,l,t),void 0,null),Y===null)throw Error(y(349));Lt&30||Sa(n,t,l)}return l}function Sa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wa(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&Ca(e)}function ka(e,t,n){return n(function(){Ta(t)&&Ca(e)})}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Ca(e){var t=Ge(e,1);t!==null&&Oe(t,e,1,-1)}function Ei(e){var t=ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=ad.bind(null,F,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pa(){return xe().memoizedState}function Er(e,t,n,r){var l=ze();F.flags|=e,l.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=xe();r=r===void 0?null:r;var o=void 0;if(Q!==null){var u=Q.memoizedState;if(o=u.destroy,r!==null&&ku(r,u.deps)){l.memoizedState=Qn(t,n,o,r);return}}F.flags|=e,l.memoizedState=Qn(1|t,n,o,r)}function Li(e,t){return Er(8390656,8,e,t)}function Pu(e,t){return fl(2048,8,e,t)}function _a(e,t){return fl(4,2,e,t)}function xa(e,t){return fl(4,4,e,t)}function Ea(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function La(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Ea.bind(null,t,e),n)}function _u(){}function Ra(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ku(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Na(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ku(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ma(e,t,n){return Lt&21?(Ie(n,t)||(n=Is(),F.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function id(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{I=n,Ul.transition=r}}function Da(){return xe().memoizedState}function sd(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oa(e))Ia(t,n);else if(n=ca(e,t,n,r),n!==null){var l=ue();Oe(n,e,r,l),qa(n,t,r)}}function ad(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oa(e))Ia(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,i=o(u,n);if(l.hasEagerState=!0,l.eagerState=i,Ie(i,u)){var s=t.interleaved;s===null?(l.next=l,hu(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ca(e,t,l,r),n!==null&&(l=ue(),Oe(n,e,r,l),qa(n,t,r))}}function Oa(e){var t=e.alternate;return e===F||t!==null&&t===F}function Ia(e,t){Ln=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}var Yr={readContext:_e,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},cd={readContext:_e,useCallback:function(e,t){return ze().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Li,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Er(4194308,4,Ea.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){return Er(4,2,e,t)},useMemo:function(e,t){var n=ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sd.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=ze();return e={current:e},t.memoizedState=e},useState:Ei,useDebugValue:_u,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=Ei(!1),t=e[0];return e=id.bind(null,e[1]),ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,l=ze();if(j){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Y===null)throw Error(y(349));Lt&30||Sa(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Li(ka.bind(null,r,o,e),[e]),r.flags|=2048,Qn(9,wa.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ze(),t=Y.identifierPrefix;if(j){var n=Je,r=Be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ud++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fd={readContext:_e,useCallback:Ra,useContext:_e,useEffect:Pu,useImperativeHandle:La,useInsertionEffect:_a,useLayoutEffect:xa,useMemo:Na,useReducer:Wl,useRef:Pa,useState:function(){return Wl($n)},useDebugValue:_u,useDeferredValue:function(e){var t=xe();return Ma(t,Q.memoizedState,e)},useTransition:function(){var e=Wl($n)[0],t=xe().memoizedState;return[e,t]},useMutableSource:ya,useSyncExternalStore:ga,useId:Da,unstable_isNewReconciler:!1},dd={readContext:_e,useCallback:Ra,useContext:_e,useEffect:Pu,useImperativeHandle:La,useInsertionEffect:_a,useLayoutEffect:xa,useMemo:Na,useReducer:Bl,useRef:Pa,useState:function(){return Bl($n)},useDebugValue:_u,useDeferredValue:function(e){var t=xe();return Q===null?t.memoizedState=e:Ma(t,Q.memoizedState,e)},useTransition:function(){var e=Bl($n)[0],t=xe().memoizedState;return[e,t]},useMutableSource:ya,useSyncExternalStore:ga,useId:Da,unstable_isNewReconciler:!1};function rn(e,t){try{var n="",r=t;do n+=Ac(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pd=typeof WeakMap=="function"?WeakMap:Map;function za(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){br||(br=!0,Ao=r),Ro(e,t)},n}function Ha(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ro(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ro(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Ri(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ed.bind(null,e,t,n),t.then(e,e))}function Ni(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mi(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var md=Xe.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?va(t,null,n,r):tn(t,e.child,n,r)}function Di(e,t,n,r,l){n=n.render;var o=t.ref;return Xt(t,l),r=Tu(e,t,n,r,o,l),n=Cu(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(j&&n&&cu(t),t.flags|=1,oe(e,t,r,l),t.child)}function Oi(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ja(e,t,o,r,l)):(e=Mr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:An,n(u,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function ja(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(An(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return No(e,t,n,r,l)}function Aa(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Vt,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Vt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(Vt,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(Vt,me),me|=r;return oe(e,t,l,n),t.child}function Fa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function No(e,t,n,r,l){var o=de(n)?xt:le.current;return o=bt(t,o),Xt(t,l),n=Tu(e,t,n,r,o,l),r=Cu(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(j&&r&&cu(t),t.flags|=1,oe(e,t,n,l),t.child)}function Ii(e,t,n,r,l){if(de(n)){var o=!0;Br(t)}else o=!1;if(Xt(t,l),t.stateNode===null)Lr(e,t),pa(t,n,r),Lo(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,i=t.memoizedProps;u.props=i;var s=u.context,f=n.contextType;typeof f=="object"&&f!==null?f=_e(f):(f=de(n)?xt:le.current,f=bt(t,f));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function";m||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==r||s!==f)&&_i(t,u,r,f),be=!1;var p=t.memoizedState;u.state=p,Gr(t,r,u,l),s=t.memoizedState,i!==r||p!==s||fe.current||be?(typeof v=="function"&&(Eo(t,n,v,r),s=t.memoizedState),(i=be||Pi(t,n,i,r,p,s,f))?(m||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),u.props=r,u.state=s,u.context=f,r=i):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,fa(e,t),i=t.memoizedProps,f=t.type===t.elementType?i:Re(t.type,i),u.props=f,m=t.pendingProps,p=u.context,s=n.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=de(n)?xt:le.current,s=bt(t,s));var g=n.getDerivedStateFromProps;(v=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==m||p!==s)&&_i(t,u,r,s),be=!1,p=t.memoizedState,u.state=p,Gr(t,r,u,l);var S=t.memoizedState;i!==m||p!==S||fe.current||be?(typeof g=="function"&&(Eo(t,n,g,r),S=t.memoizedState),(f=be||Pi(t,n,f,r,p,S,s)||!1)?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,S,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,S,s)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),u.props=r,u.state=S,u.context=s,r=f):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Mo(e,t,n,r,o,l)}function Mo(e,t,n,r,l,o){Fa(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&Si(t,n,!1),Ke(e,t,o);r=t.stateNode,md.current=t;var i=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,i,o)):oe(e,t,i,o),t.memoizedState=r.state,l&&Si(t,n,!0),t.child}function Ua(e){var t=e.stateNode;t.pendingContext?gi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gi(e,t.context,!1),gu(e,t.containerInfo)}function qi(e,t,n,r,l){return en(),du(l),t.flags|=256,oe(e,t,n,r),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wa(e,t,n){var r=t.pendingProps,l=A.current,o=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),q(A,l&1),e===null)return _o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=r.children,e=r.fallback,o?(r=t.mode,o=t.child,u={mode:"hidden",children:u},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=u):o=ml(u,r,0,null),e=_t(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Oo(n),t.memoizedState=Do,e):xu(t,u));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return vd(e,t,u,r,i,l,n);if(o){o=r.fallback,u=t.mode,l=e.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(u&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ft(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?o=ft(i,o):(o=_t(o,u,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,u=e.child.memoizedState,u=u===null?Oo(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,t.memoizedState=Do,r}return o=e.child,e=o.sibling,r=ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xu(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&du(r),tn(t,e.child,null,n),e=xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vd(e,t,n,r,l,o,u){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(y(422))),vr(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),o=_t(o,l,u,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tn(t,e.child,null,u),t.child.memoizedState=Oo(u),t.memoizedState=Do,o);if(!(t.mode&1))return vr(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(y(419)),r=Jl(o,r,void 0),vr(e,t,u,r)}if(i=(u&e.childLanes)!==0,ce||i){if(r=Y,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|u)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Oe(r,e,l,-1))}return Du(),r=Jl(Error(y(421))),vr(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ld.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,he=it(l.nextSibling),ye=t,j=!0,Me=null,e!==null&&(ke[Te++]=Be,ke[Te++]=Je,ke[Te++]=Et,Be=e.id,Je=e.overflow,Et=t),t=xu(t,r.children),t.flags|=4096,t)}function zi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xo(e.return,t,n)}function Vl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Ba(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zi(e,n,t);else if(e.tag===19)zi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hd(e,t,n){switch(t.tag){case 3:Ua(t),en();break;case 5:ha(t);break;case 1:de(t.type)&&Br(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;q($r,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Wa(e,t,n):(q(A,A.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);q(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ba(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Aa(e,t,n)}return Ke(e,t,n)}var Ja,Io,Va,$a;Ja=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Io=function(){};Va=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Ae.current);var o=null;switch(n){case"input":l=to(e,l),r=to(e,r),o=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),o=[];break;case"textarea":l=lo(e,l),r=lo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}uo(n,r);var u;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var i=l[f];for(u in i)i.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Dn.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(i=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&s!==i&&(s!=null||i!=null))if(f==="style")if(i){for(u in i)!i.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in s)s.hasOwnProperty(u)&&i[u]!==s[u]&&(n||(n={}),n[u]=s[u])}else n||(o||(o=[]),o.push(f,n)),n=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&z("scroll",e),o||i===s||(o=[])):(o=o||[]).push(f,s))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};$a=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yd(e,t,n){var r=t.pendingProps;switch(fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return de(t.type)&&Wr(),ne(t),null;case 3:return r=t.stateNode,nn(),H(fe),H(le),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Wo(Me),Me=null))),Io(e,t),ne(t),null;case 5:Su(t);var l=Ct(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Va(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=Ct(Ae.current),pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[Wn]=o,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)z(Tn[l],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Vu(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":Qu(r,o),z("invalid",r)}uo(n,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var i=o[u];u==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,i,e),l=["children",""+i]):Dn.hasOwnProperty(u)&&i!=null&&u==="onScroll"&&z("scroll",r)}switch(n){case"input":lr(r),$u(r,o,!0);break;case"textarea":lr(r),Gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ss(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[He]=t,e[Wn]=r,Ja(e,t,!1,!1),t.stateNode=e;e:{switch(u=io(n,r),n){case"dialog":z("cancel",e),z("close",e),l=r;break;case"iframe":case"object":case"embed":z("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)z(Tn[l],e);l=r;break;case"source":z("error",e),l=r;break;case"img":case"image":case"link":z("error",e),z("load",e),l=r;break;case"details":z("toggle",e),l=r;break;case"input":Vu(e,r),l=to(e,r),z("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),z("invalid",e);break;case"textarea":Qu(e,r),l=lo(e,r),z("invalid",e);break;default:l=r}uo(n,l),i=l;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?Ts(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ws(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&z("scroll",e):s!=null&&Xo(e,o,s,u))}switch(n){case"input":lr(e),$u(e,r,!1);break;case"textarea":lr(e),Gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$t(e,!!r.multiple,o,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)$a(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Jn.current),Ct(Ae.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ne(t),null;case 13:if(H(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&he!==null&&t.mode&1&&!(t.flags&128))aa(),en(),t.flags|=98560,o=!1;else if(o=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[He]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Me!==null&&(Wo(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):Du())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Io(e,t),e===null&&Fn(t.stateNode.containerInfo),ne(t),null;case 10:return vu(t.type._context),ne(t),null;case 17:return de(t.type)&&Wr(),ne(t),null;case 19:if(H(A),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)yn(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Kr(e),u!==null){for(t.flags|=128,yn(o,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&V()>ln&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!j)return ne(t),null}else 2*V()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(n=o.last,n!==null?n.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=V(),t.sibling=null,n=A.current,q(A,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function gd(e,t){switch(fu(t),t.tag){case 1:return de(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),H(fe),H(le),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(H(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(A),null;case 4:return nn(),null;case 10:return vu(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var hr=!1,re=!1,Sd=typeof WeakSet=="function"?WeakSet:Set,k=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function qo(e,t,n){try{n()}catch(r){W(e,t,r)}}var Hi=!1;function wd(e,t){if(go=jr,e=Xs(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,i=-1,s=-1,f=0,v=0,m=e,p=null;t:for(;;){for(var g;m!==n||l!==0&&m.nodeType!==3||(i=u+l),m!==o||r!==0&&m.nodeType!==3||(s=u+r),m.nodeType===3&&(u+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break t;if(p===n&&++f===l&&(i=u),p===o&&++v===r&&(s=u),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},jr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,O=S.memoizedState,c=t.stateNode,a=c.getSnapshotBeforeUpdate(t.elementType===t.type?w:Re(t.type,w),O);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(h){W(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return S=Hi,Hi=!1,S}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&qo(t,n,o)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qa(e){var t=e.alternate;t!==null&&(e.alternate=null,Qa(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Wn],delete t[To],delete t[nd],delete t[rd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ga(e){return e.tag===5||e.tag===3||e.tag===4}function ji(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ga(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}function jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),e=e.sibling}var Z=null,Ne=!1;function Ye(e,t,n){for(n=n.child;n!==null;)Ka(e,t,n),n=n.sibling}function Ka(e,t,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:re||Jt(n,t);case 6:var r=Z,l=Ne;Z=null,Ye(e,t,n),Z=r,Ne=l,Z!==null&&(Ne?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Ne?(e=Z,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),Hn(e)):jl(Z,n.stateNode));break;case 4:r=Z,l=Ne,Z=n.stateNode.containerInfo,Ne=!0,Ye(e,t,n),Z=r,Ne=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&(o&2||o&4)&&qo(n,t,u),l=l.next}while(l!==r)}Ye(e,t,n);break;case 1:if(!re&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){W(n,t,i)}Ye(e,t,n);break;case 21:Ye(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ye(e,t,n),re=r):Ye(e,t,n);break;default:Ye(e,t,n)}}function Ai(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sd),t.forEach(function(r){var l=Rd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,u=t,i=u;e:for(;i!==null;){switch(i.tag){case 5:Z=i.stateNode,Ne=!1;break e;case 3:Z=i.stateNode.containerInfo,Ne=!0;break e;case 4:Z=i.stateNode.containerInfo,Ne=!0;break e}i=i.return}if(Z===null)throw Error(y(160));Ka(o,u,l),Z=null,Ne=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(f){W(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xa(t,e),t=t.sibling}function Xa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),qe(e),r&4){try{Rn(3,e,e.return),dl(3,e)}catch(w){W(e,e.return,w)}try{Rn(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Le(t,e),qe(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Le(t,e),qe(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(w){W(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&ys(l,o),io(i,u);var f=io(i,o);for(u=0;u<s.length;u+=2){var v=s[u],m=s[u+1];v==="style"?Ts(l,m):v==="dangerouslySetInnerHTML"?ws(l,m):v==="children"?On(l,m):Xo(l,v,m,f)}switch(i){case"input":no(l,o);break;case"textarea":gs(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?$t(l,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?$t(l,!!o.multiple,o.defaultValue,!0):$t(l,!!o.multiple,o.multiple?[]:"",!1))}l[Wn]=o}catch(w){W(e,e.return,w)}}break;case 6:if(Le(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){W(e,e.return,w)}}break;case 3:if(Le(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Le(t,e),qe(e);break;case 13:Le(t,e),qe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ru=V())),r&4&&Ai(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(re=(f=re)||v,Le(t,e),re=f):Le(t,e),qe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(k=e,v=e.child;v!==null;){for(m=k=v;k!==null;){switch(p=k,g=p.child,p.tag){case 0:case 11:case 14:case 15:Rn(4,p,p.return);break;case 1:Jt(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:Jt(p,p.return);break;case 22:if(p.memoizedState!==null){Ui(m);continue}}g!==null?(g.return=p,k=g):Ui(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,s=m.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=ks("display",u))}catch(w){W(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(w){W(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),qe(e),r&4&&Ai(e);break;case 21:break;default:Le(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ga(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var o=ji(e);jo(e,o,l);break;case 3:case 4:var u=r.stateNode.containerInfo,i=ji(e);Ho(e,i,u);break;default:throw Error(y(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e,t,n){k=e,Ya(e)}function Ya(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||hr;if(!u){var i=l.alternate,s=i!==null&&i.memoizedState!==null||re;i=hr;var f=re;if(hr=u,(re=s)&&!f)for(k=l;k!==null;)u=k,s=u.child,u.tag===22&&u.memoizedState!==null?Wi(l):s!==null?(s.return=u,k=s):Wi(l);for(;o!==null;)k=o,Ya(o),o=o.sibling;k=l,hr=i,re=f}Fi(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):Fi(e)}}function Fi(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ci(t,o,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ci(t,u,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Hn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&zo(t)}catch(p){W(t,t.return,p)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Ui(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Wi(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(s){W(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){W(t,l,s)}}var o=t.return;try{zo(t)}catch(s){W(t,o,s)}break;case 5:var u=t.return;try{zo(t)}catch(s){W(t,u,s)}}}catch(s){W(t,t.return,s)}if(t===e){k=null;break}var i=t.sibling;if(i!==null){i.return=t.return,k=i;break}k=t.return}}var Td=Math.ceil,Zr=Xe.ReactCurrentDispatcher,Eu=Xe.ReactCurrentOwner,Pe=Xe.ReactCurrentBatchConfig,M=0,Y=null,$=null,b=0,me=0,Vt=vt(0),G=0,Gn=null,Rt=0,pl=0,Lu=0,Nn=null,ae=null,Ru=0,ln=1/0,Ue=null,br=!1,Ao=null,at=null,yr=!1,rt=null,el=0,Mn=0,Fo=null,Rr=-1,Nr=0;function ue(){return M&6?V():Rr!==-1?Rr:Rr=V()}function ct(e){return e.mode&1?M&2&&b!==0?b&-b:od.transition!==null?(Nr===0&&(Nr=Is()),Nr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e):1}function Oe(e,t,n,r){if(50<Mn)throw Mn=0,Fo=null,Error(y(185));Xn(e,n,r),(!(M&2)||e!==Y)&&(e===Y&&(!(M&2)&&(pl|=n),G===4&&tt(e,b)),pe(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=V()+500,al&&ht()))}function pe(e,t){var n=e.callbackNode;lf(e,t);var r=Hr(e,e===Y?b:0);if(r===0)n!==null&&Yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yu(n),t===1)e.tag===0?ld(Bi.bind(null,e)):ua(Bi.bind(null,e)),ed(function(){!(M&6)&&ht()}),n=null;else{switch(qs(r)){case 1:n=tu;break;case 4:n=Ds;break;case 16:n=zr;break;case 536870912:n=Os;break;default:n=zr}n=oc(n,Za.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Za(e,t){if(Rr=-1,Nr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Yt()&&e.callbackNode!==n)return null;var r=Hr(e,e===Y?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var l=M;M|=2;var o=ec();(Y!==e||b!==t)&&(Ue=null,ln=V()+500,Pt(e,t));do try{_d();break}catch(i){ba(e,i)}while(!0);mu(),Zr.current=o,M=l,$!==null?t=0:(Y=null,b=0,t=G)}if(t!==0){if(t===2&&(l=po(e),l!==0&&(r=l,t=Uo(e,l))),t===1)throw n=Gn,Pt(e,0),tt(e,r),pe(e,V()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cd(l)&&(t=tl(e,r),t===2&&(o=po(e),o!==0&&(r=o,t=Uo(e,o))),t===1))throw n=Gn,Pt(e,0),tt(e,r),pe(e,V()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,ae,Ue);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Ru+500-V(),10<t)){if(Hr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ko(wt.bind(null,e,ae,Ue),t);break}wt(e,ae,Ue);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-De(r);o=1<<u,u=t[u],u>l&&(l=u),r&=~o}if(r=l,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Td(r/1960))-r,10<r){e.timeoutHandle=ko(wt.bind(null,e,ae,Ue),r);break}wt(e,ae,Ue);break;case 5:wt(e,ae,Ue);break;default:throw Error(y(329))}}}return pe(e,V()),e.callbackNode===n?Za.bind(null,e):null}function Uo(e,t){var n=Nn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=tl(e,t),e!==2&&(t=ae,ae=n,t!==null&&Wo(t)),e}function Wo(e){ae===null?ae=e:ae.push.apply(ae,e)}function Cd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Lu,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Bi(e){if(M&6)throw Error(y(327));Yt();var t=Hr(e,0);if(!(t&1))return pe(e,V()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=po(e);r!==0&&(t=r,n=Uo(e,r))}if(n===1)throw n=Gn,Pt(e,0),tt(e,t),pe(e,V()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ae,Ue),pe(e,V()),null}function Nu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=V()+500,al&&ht())}}function Nt(e){rt!==null&&rt.tag===0&&!(M&6)&&Yt();var t=M;M|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,M=t,!(M&6)&&ht()}}function Mu(){me=Vt.current,H(Vt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:nn(),H(fe),H(le),wu();break;case 5:Su(r);break;case 4:nn();break;case 13:H(A);break;case 19:H(A);break;case 10:vu(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(Y=e,$=e=ft(e.current,null),b=me=t,G=0,Gn=null,Lu=pl=Rt=0,ae=Nn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var u=o.next;o.next=l,r.next=u}n.pending=r}Tt=null}return e}function ba(e,t){do{var n=$;try{if(mu(),xr.current=Yr,Xr){for(var r=F.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(Lt=0,X=Q=F=null,Ln=!1,Vn=0,Eu.current=null,n===null||n.return===null){G=1,Gn=t,$=null;break}e:{var o=e,u=n.return,i=n,s=t;if(t=b,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,v=i,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var g=Ni(u);if(g!==null){g.flags&=-257,Mi(g,u,i,o,t),g.mode&1&&Ri(o,f,t),t=g,s=f;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if(!(t&1)){Ri(o,f,t),Du();break e}s=Error(y(426))}}else if(j&&i.mode&1){var O=Ni(u);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Mi(O,u,i,o,t),du(rn(s,i));break e}}o=s=rn(s,i),G!==4&&(G=2),Nn===null?Nn=[o]:Nn.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=za(o,s,t);Ti(o,c);break e;case 1:i=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(at===null||!at.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var h=Ha(o,i,t);Ti(o,h);break e}}o=o.return}while(o!==null)}nc(n)}catch(T){t=T,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function ec(){var e=Zr.current;return Zr.current=Yr,e===null?Yr:e}function Du(){(G===0||G===3||G===2)&&(G=4),Y===null||!(Rt&268435455)&&!(pl&268435455)||tt(Y,b)}function tl(e,t){var n=M;M|=2;var r=ec();(Y!==e||b!==t)&&(Ue=null,Pt(e,t));do try{Pd();break}catch(l){ba(e,l)}while(!0);if(mu(),M=n,Zr.current=r,$!==null)throw Error(y(261));return Y=null,b=0,G}function Pd(){for(;$!==null;)tc($)}function _d(){for(;$!==null&&!Kc();)tc($)}function tc(e){var t=lc(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?nc(e):$=t,Eu.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gd(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,$=null;return}}else if(n=yd(n,t,me),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);G===0&&(G=5)}function wt(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,xd(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function xd(e,t,n,r){do Yt();while(rt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(of(e,o),e===Y&&($=Y=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,oc(zr,function(){return Yt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var u=I;I=1;var i=M;M|=4,Eu.current=null,wd(e,n),Xa(n,e),$f(So),jr=!!go,So=go=null,e.current=n,kd(n),Xc(),M=i,I=u,Pe.transition=o}else e.current=n;if(yr&&(yr=!1,rt=e,el=l),o=e.pendingLanes,o===0&&(at=null),bc(n.stateNode),pe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(br)throw br=!1,e=Ao,Ao=null,e;return el&1&&e.tag!==0&&Yt(),o=e.pendingLanes,o&1?e===Fo?Mn++:(Mn=0,Fo=e):Mn=0,ht(),null}function Yt(){if(rt!==null){var e=qs(el),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,el=0,M&6)throw Error(y(331));var l=M;for(M|=4,k=e.current;k!==null;){var o=k,u=o.child;if(k.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var f=i[s];for(k=f;k!==null;){var v=k;switch(v.tag){case 0:case 11:case 15:Rn(8,v,o)}var m=v.child;if(m!==null)m.return=v,k=m;else for(;k!==null;){v=k;var p=v.sibling,g=v.return;if(Qa(v),v===f){k=null;break}if(p!==null){p.return=g,k=p;break}k=g}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var O=w.sibling;w.sibling=null,w=O}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&u!==null)u.return=o,k=u;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rn(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,k=c;break e}k=o.return}}var a=e.current;for(k=a;k!==null;){u=k;var d=u.child;if(u.subtreeFlags&2064&&d!==null)d.return=u,k=d;else e:for(u=a;k!==null;){if(i=k,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:dl(9,i)}}catch(T){W(i,i.return,T)}if(i===u){k=null;break e}var h=i.sibling;if(h!==null){h.return=i.return,k=h;break e}k=i.return}}if(M=l,ht(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function Ji(e,t,n){t=rn(n,t),t=za(e,t,1),e=st(e,t,1),t=ue(),e!==null&&(Xn(e,1,t),pe(e,t))}function W(e,t,n){if(e.tag===3)Ji(e,e,n);else for(;t!==null;){if(t.tag===3){Ji(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=rn(n,e),e=Ha(t,e,1),t=st(t,e,1),e=ue(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function Ed(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(b&n)===n&&(G===4||G===3&&(b&130023424)===b&&500>V()-Ru?Pt(e,0):Lu|=n),pe(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):t=1);var n=ue();e=Ge(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function Ld(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Rd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),rc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,hd(e,t,n);ce=!!(e.flags&131072)}else ce=!1,j&&t.flags&1048576&&ia(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var l=bt(t,le.current);Xt(t,n),l=Tu(null,t,r,e,l,n);var o=Cu();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(o=!0,Br(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yu(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Lo(t,r,e,n),t=Mo(null,t,r,!0,o,n)):(t.tag=0,j&&o&&cu(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Md(r),e=Re(r,e),l){case 0:t=No(null,t,r,e,n);break e;case 1:t=Ii(null,t,r,e,n);break e;case 11:t=Di(null,t,r,e,n);break e;case 14:t=Oi(null,t,r,Re(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),No(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ii(e,t,r,l,n);case 3:e:{if(Ua(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,fa(e,t),Gr(t,r,null,n);var u=t.memoizedState;if(r=u.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=rn(Error(y(423)),t),t=qi(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=qi(e,t,r,n,l);break e}else for(he=it(t.stateNode.containerInfo.firstChild),ye=t,j=!0,Me=null,n=va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ha(t),e===null&&_o(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,wo(r,l)?u=null:o!==null&&wo(r,o)&&(t.flags|=32),Fa(e,t),oe(e,t,u,n),t.child;case 6:return e===null&&_o(t),null;case 13:return Wa(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Di(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,u=l.value,q($r,r._currentValue),r._currentValue=u,o!==null)if(Ie(o.value,u)){if(o.children===l.children&&!fe.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){u=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ve(-1,n&-n),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?s.next=s:(s.next=v.next,v.next=s),f.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),xo(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)u=o.type===t.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(y(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),xo(u,n,t),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===t){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=_e(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Oi(e,t,r,l,n);case 15:return ja(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Lr(e,t),t.tag=1,de(r)?(e=!0,Br(t)):e=!1,Xt(t,n),pa(t,r,l),Lo(t,r,l,n),Mo(null,t,r,!0,e,n);case 19:return Ba(e,t,n);case 22:return Aa(e,t,n)}throw Error(y(156,t.tag))};function oc(e,t){return Ms(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Nd(e,t,n,r)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Md(e){if(typeof e=="function")return Ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zo)return 11;if(e===bo)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,l,o){var u=2;if(r=e,typeof e=="function")Ou(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case qt:return _t(n.children,l,o,t);case Yo:u=8,l|=8;break;case Yl:return e=Ce(12,n,t,l|2),e.elementType=Yl,e.lanes=o,e;case Zl:return e=Ce(13,n,t,l),e.elementType=Zl,e.lanes=o,e;case bl:return e=Ce(19,n,t,l),e.elementType=bl,e.lanes=o,e;case ms:return ml(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:u=10;break e;case ps:u=9;break e;case Zo:u=11;break e;case bo:u=14;break e;case Ze:u=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(u,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function _t(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=ms,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Iu(e,t,n,r,l,o,u,i,s){return e=new Dd(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),e}function Od(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e){if(!e)return pt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(de(n))return oa(e,n,t)}return t}function ic(e,t,n,r,l,o,u,i,s){return e=Iu(n,r,!0,e,l,o,u,i,s),e.context=uc(null),n=e.current,r=ue(),l=ct(n),o=Ve(r,l),o.callback=t??null,st(n,o,l),e.current.lanes=l,Xn(e,l,r),pe(e,r),e}function vl(e,t,n,r){var l=t.current,o=ue(),u=ct(l);return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(o,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,u),e!==null&&(Oe(e,l,u,o),_r(e,l,u)),u}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qu(e,t){Vi(e,t),(e=e.alternate)&&Vi(e,t)}function Id(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function zu(e){this._internalRoot=e}hl.prototype.render=zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));vl(e,t,null,null)};hl.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){vl(null,e,null,null)}),t[Qe]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Fs(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $i(){}function qd(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=nl(u);o.call(f)}}var u=ic(t,r,e,0,null,!1,!1,"",$i);return e._reactRootContainer=u,e[Qe]=u.current,Fn(e.nodeType===8?e.parentNode:e),Nt(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var f=nl(s);i.call(f)}}var s=Iu(e,0,!1,null,null,!1,!1,"",$i);return e._reactRootContainer=s,e[Qe]=s.current,Fn(e.nodeType===8?e.parentNode:e),Nt(function(){vl(t,s,n,r)}),s}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var i=l;l=function(){var s=nl(u);i.call(s)}}vl(t,u,e,l)}else u=qd(n,t,e,l,r);return nl(u)}zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(nu(t,n|1),pe(t,V()),!(M&6)&&(ln=V()+500,ht()))}break;case 13:Nt(function(){var r=Ge(e,1);if(r!==null){var l=ue();Oe(r,e,1,l)}}),qu(e,1)}};ru=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ue();Oe(t,e,134217728,n)}qu(e,134217728)}};Hs=function(e){if(e.tag===13){var t=ct(e),n=Ge(e,t);if(n!==null){var r=ue();Oe(n,e,t,r)}qu(e,t)}};js=function(){return I};As=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};ao=function(e,t,n){switch(t){case"input":if(no(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(y(90));hs(r),no(r,l)}}}break;case"textarea":gs(e,n);break;case"select":t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}};_s=Nu;xs=Nt;var zd={usingClientEntryPoint:!1,Events:[Zn,At,sl,Cs,Ps,Nu]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hd={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rs(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Id,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{ll=gr.inject(Hd),je=gr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zd;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(t))throw Error(y(200));return Od(e,t,null,n)};Se.createRoot=function(e,t){if(!Hu(e))throw Error(y(299));var n=!1,r="",l=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Iu(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Fn(e.nodeType===8?e.parentNode:e),new zu(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Rs(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Nt(e)};Se.hydrate=function(e,t,n){if(!yl(t))throw Error(y(200));return gl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Hu(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",u=sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=ic(t,null,e,1,n??null,l,!1,o,u),e[Qe]=t.current,Fn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};Se.render=function(e,t,n){if(!yl(t))throw Error(y(200));return gl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!yl(e))throw Error(y(40));return e._reactRootContainer?(Nt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};Se.unstable_batchedUpdates=Nu;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};Se.version="18.2.0-next-9e3b772b8-20220608";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),is.exports=Se;var jd=is.exports,Qi=jd;Kl.createRoot=Qi.createRoot,Kl.hydrateRoot=Qi.hydrateRoot;const Ad="_wrapper_10uzp_5",Fd="_open_menu_10uzp_12",Gi={wrapper:Ad,open_menu:Fd},Ud="_menu_nav_qd97o_1",Wd="_menu_nav_list_qd97o_14",Ki={menu_nav:Ud,menu_nav_list:Wd},Bd="_menu_button_ubtac_1",Jd="_menu_popup_ubtac_19",Gl={menu_button:Bd,menu_popup:Jd},cc=ve.memo(({text:e,id:t,position:n})=>D.jsx("button",{className:n==="menu"?Gl.menu_button+" "+Gl.menu_popup:Gl.menu_button,id:t||null,children:e})),Vd="_dropDown_5n42j_1",$d="_dropDown_list_5n42j_5",Xi={dropDown:Vd,dropDown_list:$d},Qd={i:{ques:"Что такое HTML",result:`
	HTML (Hyper Text Markup Language) - это язык разметки гипертекста, 
	используемый для создания веб-страниц. Он определяет структуру веб-страницы, 
	размещая текст, изображения и другие элементы на странице. С помощью HTML 
	можно создать заголовки, абзацы, списки, таблицы и многие другие элементы. 
	Кроме того, HTML позволяет добавлять ссылки на другие веб-страницы или ресурсы, 
	такие как изображения или видео. Таким образом, HTML является основным языком, 
	используемым для создания веб-сайтов и веб-приложений.
`},sl:{ques:"Что такое HTML-элемент? Какова его структура?",result:`
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
`},t:{ques:"Типы верстки",result:`
	1.Фиксированная - все элементы на странице жесткои зафиксированы 
	статическими размерами,	не меняют свой размер при изменении окна

	2.Резиновая - блоки меняют свой размер в зависимости от размера экрана,
	без перестроения элементов

	3.Адаптивная - блоки меняют свой размер и расположение при достижении 
	определенного размера экрана, но не тянуться при ресайзе окна

	4.Отзывчивая - совмещает в себе резиновую и адаптивную верстку
`},a:{ques:"Что такое атрибуты в HTML",result:`
	Атрибуты в HTML - это дополнительные параметры, которые можно использовать 
	для настройки элементов. Они указываются в открывающем теге элемента, и их 
	значения заключаются в двойные кавычки. Например:

	Атрибуты могут использоваться для определения размера, положения, стиля и 
	других свойств элементов. Они также могут быть использованы для добавления 
	дополнительной информации о содержимом элемента, такой как заголовок или 
	альтернативный текст для изображений.
`},g:{ques:"Глобальные атрибуты есть в HTML",result:`
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
`},k:{ques:"Что такое категории контента в HTML5",result:`
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
`},d:{ques:"Что такое doctype? И для чего он используется",result:`
	Doctype - это декларация типа документа, которая указывает, какой версией 
	HTML или XHTML является документ. Он используется для того, чтобы сообщить 
	браузеру, какую версию HTML или XHTML следует использовать для отображения 
	документа. Это также помогает обеспечить правильное отображение документа и 
	предотвращает появление ошибок, связанных с несовместимостью версий.
`},st:{ques:"Базовая структуру HTML-страницы",result:`
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
`},v:{ques:"Что такое валидация? Типы проверок HTML документа",result:`
	Валидация - это процесс проверки правильности и соответствия стандартам HTML-кода.

	Основные типы проверок:

	-Проверка на соответствие стандартам W3C (World Wide Web Consortium).
	-Проверка на наличие ошибок в коде (например, незакрытые теги, дублирующиеся 
	идентификаторы и т.д.).
	-Проверка на совместимость с различными браузерами и устройствами.
	-Проверка на безопасность (отсутствие уязвимостей и кросс-браузерных проблем).
`},s:{ques:"Семантические теги",result:`
	Семантика - это смысл и значение элементов HTML. Семантические теги - это теги, которые 
	имеют конкретное значение и используются для описания структуры и содержания веб-страницы

`},f:{ques:"Как семантически правильно сверстать картинку с подписью",result:`
	<figure>
        <img src="/path/to/image.jpg" alt="Image description">
        <figcaption>Figure caption</figcaption>
    </figure>
`},l:{ques:"Типы списков в HTML",result:`
	В HTML существует несколько типов списков:

	-неупорядоченные списки (unordered lists) - используются для перечисления 
	пунктов, не имеющих определенного порядка. Для создания такого списка 
	используется тег <ul>;

	-упорядоченные списки (ordered lists) - используются для нумерации пунктов. 
	Тег для создания такого списка - <ol>;

	-определения списка (definition lists) - используются для создания списка, 
	каждый элемент которого состоит из двух частей: термина и его определения. 
	Тег для такого списка - <dl>.
`},da:{ques:"Разница между <script>, <script async> и <script defer>",result:`
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
`},dl:{ques:"Тег <datalist>",result:`

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
`},z:{ques:"<link> для подключения CSS внутри тэга <head>, а <script> JS ставить перед закрывающимся тэгом </body>",result:`

	Подключение CSS внутри тега <head> является хорошей практикой, так как это 
	позволяет браузеру начать парсинг и применение стилей сразу после загрузки 
	документа. Это ускоряет процесс визуализации страницы и делает его более 
	плавным для пользователя.

	С другой стороны, подключение JS перед закрывающимся тегом </body> позволяет 
	загрузить и выполнить скрипт после загрузки всего содержимого страницы. Это 
	помогает избежать проблем с блокировкой рендеринга и улучшить производительность, 
	так как браузер может продолжать загрузку и обработку страницы, пока JS еще выполняется.
`},m:{ques:"Что такое мета-тэги",result:`

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
`},w:{ques:"meta-теге с name=viewport",result:`
	Meta-тег viewport используется для указания размеров и ориентации экрана мобильного 
	устройства или планшета, на котором отображается веб-страница. Это позволяет 
	веб-приложению адаптировать свой интерфейс для лучшего отображения на различных устройствах.

	Вот пример использования meta-тега viewport:
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	Этот тег говорит браузеру устройства, что ширина веб-страницы должна быть равна ширине 
	экрана устройства, и что масштаб страницы должен быть установлен на 100%.
`},cv:{ques:"Что такое элемент <canvas>",result:`

	<canvas> - векторный

	Элемент <canvas> используется для рисования 2D графики на веб-страницах. 
	С его помощью можно создавать анимацию, игры, визуализировать данные и многое 
	другое. На канве можно рисовать линии, фигуры, текст, а также загружать изображения 
	и работать с ними. Данные на канве можно обрабатывать с помощью JavaScript.
`},av:{ques:"Свойство valueAsNumber",result:`

	<canvas> - векторный

	valueAsNumber - это свойство, которое позволяет получить числовое значение
	элемента input. Оно может быть полезно, если вы хотите работать с введенными 
	данными как с числами, а не как со строками. Например, если у вас есть поле 
	для ввода числа, вы можете получить его значение с помощью valueAsNumber и 
	выполнить какие-то операции над ним.

	<input type="number" valueAsNumber>
`},tr:{ques:"Что такое атрибут target",result:`

	Атрибут target используется для указания окна или фрейма, в который должна 
	загружаться страница при выполнении ссылки.

	Он может принимать следующие значения:

	-_blank - открыть ссылку в новом окне
	-_self - загрузить ссылку в текущем окне
	-_parent - загрузить ссылку в родительском окне, если оно есть
	-_top - загрузить ссылку в верхнем уровне документа, если возможно
	-имя фрейма - загрузить ссылку в указанном фрейме
`},ac:{ques:"ApplicationCache в HTML5",result:`

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
`},sc:{ques:"Что такое srcset",result:`

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
`},nv:{ques:"Как семантически верно сверстать навигационное меню",result:`
	<nav>
	  <ul>
	    <li><a href="#">Пункт меню 1</a></li>
	    <li><a href="#">Пункт меню 2</a></li>
	    <li><a href="#">Пункт меню 3</a></li>
	  </ul>
	</nav>
`},fr:{ques:"Что такое <iframe>",result:`
	Если кратко, то iframe — это HTML-тег, который позволяет встроить 
	один документ в другой. Например, с его помощью можно вставить на 
	сайт видео с YouTube или стороннюю веб-страницу.
`},sb:{ques:"Для чего используются тэги <sub> и <sup>",result:`
	Тэг <sub> используется для создания нижнего индекса (например, в химических формулах). 

	Тэг <sup> используется для создания верхнего индекса (например, степени или порядковые
	 числительные).
`},hd:{ques:"Как можно скрыть элемент разметки не используя CSS и JS",result:`
	Можно использовать атрибут hidden в HTML:

	<div hidden> скрытый элемент </div>
`},mp:{ques:"<meter> и <progress> html",result:`
	-Тег <meter> используется для отображения относительного значения или состояния.
	-Тег <progress> используется для индикации прогресса выполнения задачи.

	<meter id="speedometer" min="0" max="100" value="75">
  		75%
	</meter>

	<progress max="100">
  		<progress-bar style="width:20%;" role="progressbar" aria-valuenow="20" 
  		aria-valuemin="0" aria-valuemax="100"></progress-bar>
	</progress>
`},op:{ques:"Как можно сгруппировать опции внутри тэга <select>",result:`
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
`},ek:{ques:"Для чего используется атрибут enterkeyhint",result:`
	Атрибут enterkeyhint используется для указания того, какой тип ввода 
	ожидается после нажатия клавиши Enter. Возможные значения:

	-enter - ожидается ввод текста.
	-done - ожидается завершение ввода.
	-next - ожидается переход к следующему полю ввода.
	-go - ожидается выполнение действия “перейти”.
	-search - ожидается запуск поиска.
	-send - ожидается отправка формы.

	Значение по умолчанию зависит от браузера и операционной системы.
`},nl:{ques:" Для чего используют атрибут novalidate",result:`
	Атрибут novalidate используется для отключения валидации формы по 
	умолчанию. Валидация формы - это процесс проверки правильности введенных 
	данных, чтобы убедиться, что они соответствуют требованиям. Отключение 
	валидации может быть полезно, если вы хотите создать форму, которая будет 
	отправлять данные без проверки, или если вы хотите настроить свою собственную 
	валидацию.
`},im:{ques:"Для чего используют атрибут inputmode",result:`
	Атрибут inputmode используется для определения того, какой тип данных 
	ожидается от пользователя. Он может иметь следующие значения:

	-text - обычный текст;
	-tel - номер телефона;
	-url - URL;
	-email - адрес электронной почты;
	-decimal - число с десятичной точкой;
	-search - поисковый запрос.
`},pt:{ques:" Для чего используется атрибут pattern",result:`
	Атрибут pattern используется для определения регулярного выражения, 
	которое будет использоваться для проверки введённого пользователем значения 
	атрибуту data-pattern. Если значение не соответствует регулярному выражению, 
	то значение считается недействительным.

	<input type="text" id="fname" name="fname" pattern="[a-zA-Zа-яА-ЯёЁ]+">

	<!-- здесь мы проверяем, состоит ли введённое значение из букв латинского и русского алфавита -->
`},pf:{ques:"Способы улучшения производительности веб-страницы при использовании HTML",result:`
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
`},sa:{ques:"Основные атрибуты HTML-форм? Как они влияют на отправку данных с веб-страницы",result:`
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
`}},Gd={i:{ques:"Что такое css?",result:`
	css - это каскадные таблицы стилей,CSS используется для определения 
	стилей (правил) оформления документов — включая дизайн, вёрстку и 
	вариации макета для различных устройств и размеров экрана.
`},p:{ques:"Приоритеты селекторов",result:`
	По убыванию:
	1.Important
	2.Инлайн стили
	3.ID
	4.Селектор классов
	5.Cелектор тегов
`},e:{ques:"Способы добавить CSS на страницу",result:`
	1.Подключить файл к документу
	2.Прописать инлайн стили
	3.Прописать стили через тег style
`},a:{ques:"Позиционирование",result:`
	1.static — дефолтное состояние
	2.absolute — данное значение задает абсолютное позиционирование элемента.
	3.fixed — фиксированное позиционирование относительно окна элемента.
	4.sticky — это совмещение относительного и фиксированного позиционирования. 
	5.relative — относительное позиционирование элемента.
`},b:{ques:"Блочная модель css",result:`
	Блочная модель - это правила по которым браузер определяет размер 
	элемента на странице, его ширину и высоту

	Блочная модель состоит из нескольких CSS-свойств

	1.контентная часть 
	2.padding 
	3.margin 
	4.border
`},s:{ques:"Cелектор и какие селекторы существуют",result:`
	С помощью селекторов мы определяем, к каким элементам нужно применить
	стили, перечисленные внутри фигурных скобок.

	1.Селектор по тегу 
	2.Селектор по классу
	3.Селектор по id
	4.Универсальный селектор (*)
	5.Селекторы по атрибуту [attr]
`},sa:{ques:"Что такое специфичность селектора?",result:`
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
`},r:{ques:"Разница между Normalize.css и Reset CSS??",result:`
	reset.css – как и видно по названию файла, сбрасывает большинство
	стилей браузера, которые в нем заданы по умолчанию

	normalize.css – этот файл не только задает стили по умолчанию 
	там где это необходимо, но и исправляет некоторые недостатки
	старых браузеров
`},k:{ques:"Разница между классом и идентификатором?",result:`
	Классы (class) - это механизм, позволяющий задавать одно и то
	же свойство стиля для нескольких элементов веб-страницы.

	Идентификаторы (id) - атрибут id указывает уникальный 
	идентификатор для элемента HTML (значение должно быть уникальным
 	в HTML-документе).

 	Поиск по классу выполняется за О(n), по id - за О(1)
`},u:{ques:"CSS спрайт?",result:`
	CSS-спрайт – способ объединить много изображений в одно, чтобы:

	-Сократить количество обращений к серверу.
	-Загрузить несколько изображений сразу, включая те, которые 
	 понадобятся в будущем.
	-Если у изображений сходная палитра, то объединённое изображение 
	 будет меньше по размеру, чем совокупность исходных картинок.
`},v:{ques:"Вендорный префикс?",result:`
	Вендорный префикс (vendor prefix) — приставка к свойству CSS,
	обеспечивающая поддержку браузерами, в которых определенная
	функция ещё не внедрена на постоянной основе (находится в стадии
	разработки или тестирования). 
	Пример вендорного префикса:	 -webkit- или -moz-.
`},f:{ques:"Что такое псевдоэлементы?",result:`
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
`},c:{ques:"Схлопывание внешних отступов?",result:`
	Отступы margin-top и margin-bottom иногда объединяются в один,
	с размером равным наибольшему из них (или размеру одного, если они равны)
`},pr:{ques:"css препроцессоры",result:`
	CSS препроцессор (от англ. CSS preprocessor) — это надстройка над CSS,
	которая добавляет ранее недоступные возможности для CSS, с помощью 
	новых синтаксических конструкций.
	предоставляет удобные синтаксические конструкции для разработчика,
	чтобы упростить, и тем самым, ускорить разработку

	Less
	Sass (SCSS)
	Stylus
`},q:{ques:"Контекст наложения",result:`
	Контекст наложения это концепция трёхмерного расположения 
	HTML-элементов вдоль оси Z по отношению к пользователю


`},sp:{ques:"Как с помощью CSS определить, поддерживается ли свойство в браузере?",result:`
	Через CSS директиву под названием @supports.

	@supports (display: flex) {
   		/* Стили */
	}
`},g:{ques:"Глобальные ключевые слова в CSS?",result:`
	Для всех свойств CSS, помимо их стандартных значений, можно задать
	значения в виде ключевых слов:

	-initial - сбрасывает все указанные значения свойства для конкретного
			   блока до этих самых значений по умолчанию.;
	-inherit - наследует стиль от родителя;
	-unset - сбрасывает значение до умолчания
	-revert - сбрасывает значение свойства до указанного в стилях браузера.
`},cc:{ques:"currentColor в CSS?",result:`
	Используется для добавления существующего color, чтобы не
	дублировать цвет

	.element {
  		color: darkblue;
  		box-shadow: 0 0 5px currentColor;
	}
`},fl:{ques:"Фильтры в CSS?",result:`
	
	Blur – размытие
	Brightness – яркость
	Contrast – контраст
	Grayscale – обесцвечивание
	Hue-rotate – замена цветов
	Invert – инверсия цветов
	Opacity – прозрачность
	Saturate – насыщенностьox-shadow: 0 0 5px currentColor;

`},fl:{ques:"Псевдокласс :invalid?",result:`
	Применяется к полям формы, содержимое которых не соответствует 
	указанному типу. Например, для type="number" должно вводиться 
	число, а не буквы, для type="email" корректный адрес электронной почты.
`},fl:{ques:"Свойство display в CSS?",result:`
	display влияет сразу на две вещи: на расположение самого бокса в потоке и 
	на расположение дочерних элементов внутри бокса.

	-none
	-flex
	-block
	-inline
	-inline-block
	-table

	list-item, run-in
`},z:{ques:"Свойство float в CSS?",result:`
	Свойство float CSS указывает, что элемент должен быть взят из нормального 
	потока и помещён вдоль левой или правой стороны его контейнера, где текст
	и встроенные элементы будут обтекать его.

`},tr:{ques:"Свойство text-rendering?",result:`
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

`},td:{ques:"Свойство text-decoration-skip-ink?",result:`
	Свойство text-decoration-skip-ink управляет внешним видом верхнего
	и нижнего подчёркиваний.

`},sg:{ques:"Свойство scrollbar-gutter?",result:`
	scrollbar-gutter решает проблему с «прыгающей» шириной контента при
	появлении или скрытии скроллбара.
`},br:{ques:"Краткая форма записи свойств?",result:`
	Сокращённые свойства - это такие CSS-свойства, которые позволяют
	одновременно устанавливать значения нескольких других свойств.

	.btn {
  		background: red;
	}
`},ct:{ques:"Контейнерные запросы?",result:`
	Контейнерные запросы похожи на медиа-запросы; единственная разница в том,
	что они делают контейнер или элемент отзывчивым на основе пространства, 
	доступного для контейнера, а не области просмотра всего экрана.
`},m:{ques:"prefers-reduced-motion?",result:`
	Одно из значений директивы @media для проверки пользовательских
	настроек воспроизведения анимации.Медиа-запрос prefers-reduced-motion
	позволяет определить, отключена или уменьшена анимация в системе
	и применять стили CSS, которые это учитывают.
`}},Kd={i:{ques:"Что такое бэм?",result:`
	Компонентный подход к веб-разработке. В его основе лежит принцип
	разделения интерфейса на независимые блоки. Он позволяет легко и
	быстро разрабатывать интерфейсы любой сложности и повторно использовать
	существующий код
`},e:{ques:"Что такое БЭМ-сущность?",result:`
	БЭМ-сущностями называются блоки, элементы и модификаторы.
`},p:{ques:"Принципы",result:`
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
`}},Xd={i:{ques:"Что такое react?",result:`
	React - это библиотека JavaScript, которая используется
	для создания пользовательских интерфейсов. Она была 
	создана компанией Facebook и стала очень популярной 
	среди разработчиков. React позволяет создавать компоненты
	интерфейса, которые могут быть использованы многократно.
	Это ускоряет процесс разработки и делает код более 
	организованным.
`},h:{ques:"Особенности react?",result:`
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
`},r:{ques:"Что такое Virtual DOM",result:`
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
`},k:{ques:"Атрибут key при рендере?",result:`
	Атрибут key используется React при определении порядка 
	рендеринга элементов в списке. Если у элементов списка 
	нет уникального ключа, React не сможет определить порядок 
	рендеринга и может возникнуть ошибка или неожиданные результаты.

	При использовании ключей React может определить порядок 
	рендеринга, гарантируя тем самым корректную работу вашего 
	приложения. Ключи должны быть уникальными для каждого 
	элемента списка, и рекомендуется использовать значения, 
	которые однозначно идентифицируют каждый элемент.
`},p:{ques:"PureComponent",result:`
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
`},c:{ques:"Higher-Order Component / HOC",result:`
	Компонент высшего порядка - это функция, которая принимает 
	компонент в качестве аргумента и возвращает другой компонент.
	HOC позволяет расширять функциональность компонента без изменения
	его исходного кода. Например, можно создать HOC, который добавляет
	авторизацию к компоненту, не изменяя сам компонент.
`},q:{ques:"Жизненный цикл компонентов React",result:`
	1.Инициализация
	2.Монтирование
	3.Обновление
	4.Размонтирование
`},t:{ques:"Что такое Portal",result:`
	Порталы - это способ визуализации элемента в узле DOM, 
	который существует вне иерархии DOM родительского компонента.
	Это полезно для компонентов таких как модальные окна, тултипы, и др

	ReactDOM.createPortal(элемент который, элемент куда) 
`},b:{ques:"Что такое React хуки",result:`
	React Hooks – это механизм, позволяющий использовать состояние
	и некоторые другие возможности React внутри функциональных 
	компонентов, не прибегая к классам. Они были представлены в React
	16.8 и позволяют упростить и улучшить код компонентов.

	С помощью Hooks можно работать с состоянием, использовать эффекты
	(например, обработку жизненного цикла компонента или асинхронные
	операции), а также применять другие функции React. При этом Hooks
	не заменяют полностью классы, а лишь упрощают их использование.
`},j:{ques:"Что Такое JSX?",result:`
	JSX — это язык разметки, который используется для создания 
	пользовательских интерфейсов (UI) на основе HTML. Он является 
	расширением языка JavaScript и позволяет создавать элементы HTML, 
	такие как div, span, input и др., прямо в коде JavaScript. JSX 
	также позволяет определять стили CSS и обрабатывать события 
	JavaScript внутри одного файла.
`},s:{ques:"Разница между состоянием(state) и пропсами(props)?",result:`
	Состояние (state) компонента - это внутренняя переменная, которая
	хранит данные компонента. Состояние изменяется при выполнении 
	определенных действий, например, при нажатии на кнопку.

	Пропсы (props) - это входные данные, которые передаются компоненту 
	от родительского компонента. Пропсы используются для передачи данных 
	между компонентами и не могут быть изменены внутри компонента.

	Основное различие между состоянием и пропсами заключается в том, 
	что состояние изменяется внутри компонента, в то время как пропсы 
	передаются извне и не могут быть изменены.
`},f:{ques:"Что такое React Fiber",result:`
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
`},y:{ques:"Синтетические события в react",result:`
	Синтетические события в React — это механизм, который позволяет
	компонентам обрабатывать пользовательские события, такие как клики,
	изменения форм и т. д. Это позволяет улучшить производительность
	и гибкость приложения.

	Синтетические события отличаются от обычных тем, что они 
	обрабатываются на уровне компонентов в React, а не на уровне DOM. 
	Это позволяет упростить обработку событий и сделать код более модульным. 
	Кроме того, синтетические события позволяют использовать хуки, что 
	делает код еще более читаемым и удобным для разработки.
`},m:{ques:"Что такое компонент-переключатель (Switching Component)",result:`
	Компонент-переключатель в React используется для отображения или 
	скрытия другого компонента в зависимости от определенного условия. 
	Он принимает условие в качестве параметра и возвращает один из 
	двух компонентов: либо первый компонент, либо второй.
`},d:{ques:"Что такое React DOM",result:`
	React DOM - это библиотека, которая позволяет отображать react 
	компоненты на странице. Она взаимодействует с браузером и рендерит 
	компоненты на страницу. React DOM используется вместе с React, чтобы
	создавать интерактивные и динамические веб-страницы.
`},z:{ques:"Разница между компонентом и контейнером",result:`
	Компонент - это минимальная функциональная единица приложения React,
	которая может состоять из текста, изображений, форм и других элементов.
	Компоненты используются для создания пользовательского интерфейса приложения.

	Контейнеры - это также компоненты, но они используются для управления 
	состоянием и данными в приложении. Они отвечают за обработку данных, 
	поступающих от пользователей, и отправку их на сервер. Контейнеры также 
	могут управлять состоянием компонентов и обновлять их при изменении данных.
`},n:{ques:"Что такое «опрос» (Polling)",result:`
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
`},n:{ques:"Что такое «опрос» (Polling)",result:`
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
`},u:{ques:"ReactDOMServer",result:`
	ReactDOMServer — это модуль в React, который позволяет 
	работать с HTML на стороне сервера. Он используется для 
	создания и управления HTML-разметкой на сервере, что может 
	быть полезно при создании статических сайтов или при 
	рендеринге React-компонентов на сервере.
`},e:{ques:"Что такое предохранители (Error Boundaries)",result:`
	Предохранители (Error Boundaries) - это специальные компоненты
	в React, которые позволяют обрабатывать ошибки, возникающие
	в дочерних компонентах. Они помогают предотвратить падение
	всего приложения, если один из компонентов выдает ошибку. 
	Предохранители могут показать пользователю уведомление об 
	ошибке или скрыть проблемный компонент
`},2:{ques:"Разница между рендерингом и монтированием",result:`
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
`},po:{ques:"События указателя (Pointer Events)",result:`
	События указателя в React - это события, которые возникают 
	при взаимодействии пользователя с указателем, таким как мышь 
	или сенсорный экран. Они используются для обработки действий 
	пользователя, таких как нажатия, движения мыши и жесты.
`},a:{ques:"Инверсия наследования (Inheritance Inversion)",result:`
	Инверсия наследования в React - это принцип, согласно которому 
	компоненты должны принимать свойства и состояния от своих родителей,
	а не передавать их вниз по дереву компонентов. Это помогает 
	сохранить структуру приложения простой и понятной, а также 
	облегчает изменение и расширение компонентов в будущем
`},de:{ques:"Разница между классовым и функциональным компонентами",result:`
	Классные компоненты предоставляют дополнительные возможности,
	такие как состояние и методы жизненного цикла, которых нет в функциональных
	компонентах. Функциональные компоненты, как правило, проще 
	и используются для более простых задач.
`},w:{ques:" Разница между useEffect() и componentDidMount()",result:`
	useEffect в React используется для выполнения кода после 
	монтирования компонента или после изменения его пропов. 
	Он также может использоваться для очистки ресурсов, когда 
	компонент размонтируется. componentDidMount - это метод жизненного
	цикла компонента, который выполняется только один раз после монтирования 
	компонента. Он не может использоваться для очистки ресурсов 
	при размонтировании компонента.
`},hp:{ques:"Преимущества хуков",result:`
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
`},l:{ques:"Lifting State Up",result:`
	Поднятие состояния вверх (lifting state up) – это принцип 
	организации структуры компонента в React, при котором состояние 
	выносится на уровень ближайшего родительского компонента, 
	который владеет данными, необходимыми для работы этого состояния. 
	Это позволяет улучшить структуру компонента, уменьшить его 
	сложность и улучшить его повторное использование
`},su:{ques:"Что делает метод shouldComponentUpdate",result:`
	Метод shouldComponentUpdate в React определяет, нужно 
	ли обновлять компонент при следующем рендере. Он принимает 
	пропсы и состояние компонента и возвращает true или false. 
	Если метод возвращает false, компонент не будет обновляться 
	при следующем рендере, что может повысить производительность 
	приложения.
`},fi:{ques:"Как реализовать однократное выполнение операции при начальном рендеринге?",result:`
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
`},uu:{ques:"useImperativeHandle(), useLayoutEffect()",result:`
	-useImperativeHandle - этот хук используется для предоставления 
	доступа к методам и свойствам компонента из родительского компонента. 
	Это может быть полезно, например, для доступа к данным формы 
	из родительского компонента.

	-useLayoutEffect - этот хук вызывается после того, как компонент 
	отрисован, но до того, как он отображается на экране. Он может 
	использоваться для выполнения операций, которые должны произойти 
	после того, как компонент отрисован, например для анимации.
`},o:{ques:"Что такое реактивность",result:`
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
`},sf:{ques:"Лучшие практики безопасности в React",result:`
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
`},rx:{ques:"Что такое Redux? Ключевые принципы Redux",result:`
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
`},rc:{ques:"Ключевые концепции Redux",result:`
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
`},ss:{ques:"Что такое «единственный источник истины» (Single Source of Truth)",result:`
	Единственный источник истины” (Single Source of Truth, SST) - это принцип, 
	который гласит, что все данные должны храниться в одном централизованном месте. 
	Это позволяет избежать дублирования данных и обеспечивает согласованность информации 
	в системе. SST обычно реализуется с помощью систем управления состоянием, 
	таких как Redux или Flux.
`},rd:{ques:"Что такое редьюсер (Reducer)",result:`
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
`},st:{ques:"Разница между React State и Redux State",result:`
	React state существует только на уровне одного компонента и используется для 
	хранения данных, которые изменяются внутри этого компонента. React state 
	принадлежит самому компоненту и не может быть напрямую изменено другими компонентами.

	Redux state, с другой стороны, существует на уровне всего приложения и может 
	быть изменено и использовано любыми компонентами этого приложения. Redux state 
	обычно используется для координации взаимодействия между различными компонентами 
	и обеспечения согласованности данных в приложении.
`},rp:{ques:"Как выглядит поток данных в Redux-приложении",result:`
	1.Пользователь взаимодействует с компонентом.
	2.Компонент отправляет действие в хранилище состояния.
	3.Редьюсер обрабатывает действие и обновляет хранилище состояния.
	4.Хранилище состояния отправляет новые данные обратно в компонент через пропсы.
	5.Компонент обновляет свое представление на основе новых данных.
`}},Yd={i:{ques:"Что такое TypeScript",result:`
	TypeScript - это язык программирования, разработанный компанией Microsoft.
	Он является надмножеством языка JavaScript и добавляет к нему статическую 
	типизацию, конструкции, упрощающие написание кода, и другие возможности. 
	TypeScript программы можно скомпилировать в обычный JavaScript, который 
	может быть выполнен в браузере или на сервере. Это позволяет использовать 
	преимущества TypeScript, не требуя изменений в коде, который использует 
	JavaScript.
`},s:{ques:"Назовите особенности TypeScript",result:`
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
`},p:{ques:"Плюсы использования TypeScript?",result:`
	-Более строгий контроль типов.
	-Более читаемый код.
	-Совместимость с JavaScript.
	-Поддерживается многими инструментами.
	-Может улучшить производительность.
`},t:{ques:"Типы в TypeScript?",result:`
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
`},d:{ques:"Декораторы",result:`
	TypeScript поддерживает различные типы данных, включая:
	
	Декораторы в TypeScript позволяют добавлять дополнительные метаданные к 
	классам, методам, свойствам и параметрам. Они позволяют изменять поведение 
	класса, метода, свойства или параметра без необходимости изменения исходного 
	кода. Например, декоратор может использоваться для добавления логирования или 
	для изменения поведения метода при определенных условиях.
`},f:{ques:"Что такое перегрузка функций",result:`
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
`},r:{ques:"Поддерживает ли TypeScript перегрузку функций",result:`
	Да, TypeScript поддерживает перегрузку функций. Вы можете определить несколько 
	функций с одним и тем же именем, но с разными наборами параметров. TypeScript 
	будет выбирать наиболее подходящую функцию на основе типов аргументов.
`},o:{ques:"Разница между type и  interface в typescript",result:`
	Типы в TypeScript более гибкие и могут определять примитивы, пересечения, 
	объединения, кортежи или различные типы данных, а интерфейсы используются 
	для описания формы объекта. Типы используют ключевое слово type для создания 
	нового типа, а интерфейсы — ключевое слово interface для объявления интерфейса.
`},k:{ques:"Что такое директивы с тремя наклонными чертами (Triple-Slash Directives), их типы",result:`
	Директивы с тремя наклонными чертами используются в TypeScript для того, чтобы пометить 
	какие-то части кода как комментарии или для указания того, что код является временным 
	и его не нужно компилировать.

	Существует два типа директив с тремя наклонными чертами:

	// / - используются для комментариев в коде, которые не будут компилироваться;
	// /** - используются для указания временных участков кода, которые также не будут 
	компилироваться.

	Эти директивы очень полезны для временного отключения частей кода во время 
	разработки, чтобы не нарушать его работу.
`},w:{ques:" Что такое внешние объявления переменных (ambient declaration) ",result:`
	Внешние объявления переменных используются для объявления глобальных переменных 
	или функций, которые могут использоваться в коде, но не обязательно должны 
	быть определены в текущем файле. Это позволяет использовать общие API без 
	необходимости импортировать все определения в каждый файл. Например:

	declare var window: any;

	Это объявление говорит TypeScript, что переменная window существует в глобальной 
	области видимости и имеет тип any.
`},a:{ques:"Абстрактный класс в TypeScript",result:`
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
	        console.log(Woof!);
	    }
	    walk() {
	        console.log(Walking...);
	    }
	}

	class Cat extends Animal {
	    bark() {
	        console.log(Meow!);
	    }
	    walk() {
	        console.log(Tiptoeing...);
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
`},q:{ques:" Какие элементы ООП поддерживаются в TypeScript",result:`
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
`},m:{ques:"Модификаторы доступа в TypeScript",result:`
	Да, TypeScript поддерживает модификаторы доступа. Вы можете использовать 
	ключевые слова: 
	-public 
	-private 
	-protected 

	Используются для управления доступом к членам класса. 
	Public члены доступны из любого места, 
	private члены могут быть доступны только из текущего класса, 
	а protected члены могут быть доступны из текущего класса и его потомков.
`},e:{ques:"Internal Module и External Module",result:`
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
`},n:{ques:"Перечисление (enum)",result:`
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
`},ni:{ques:"NoImplicitAny",result:`
	NoImplicitAny используется в TypeScript для предотвращения неявного 
	приведения любых значений к типу any(нужно обязательно указывать тип). Это позволяет обеспечить более 
	строгий контроль типов и избежать неожиданного поведения, связанного с 
	приведением значений к any. Кроме того, это помогает выявлять ошибки 
	на этапе компиляции и улучшать качество кода.
`},v:{ques:"“Объединение” (|) и “Пересечение” (&) typescript",result:`
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
`},g:{ques:"Generic",result:`
	Общие типы (generic) в TypeScript позволяют создавать классы, интерфейсы, функции и т.д., 
	которые могут работать с различными типами данных без необходимости их явного указания. 
	Это позволяет использовать один и тот же код для работы с разными типами данных, что может 
	упростить код и улучшить его производительность.

	Например, можно создать общий класс Animal без указания конкретного типа животного:

	class Animal<T> {
		name: T;

		constructor(name: T) {
		this.name = name;
	}
		speak() {
			console.log(Animal name is: @{this.name});
		}
	}

	let dog = new Animal<string>(“Dog”);
	dog.speak(); // Outputs: “Animal name is: Dog”

`},l:{ques:"Какие области видимости доступны в TypeScript",result:`
	В TypeScript доступны следующие области видимости:

	-Глобальная область видимости (Global Scope)

	-Локальная область видимости функции (Function Local Scope)

	-Область видимости модуля (Module Scope)

	-Частная область видимости класса (Class Private Scope)

	-Каждая из этих областей видимости имеет свои особенности и правила 
	 видимости для переменных и функций.

`},x:{ques:"Что такое .map файл, как и зачем его использовать",result:`
	map файл - это файл, который содержит информацию о том, как исходный код 
	TypeScript был преобразован в JavaScript. Он содержит информацию о типах, 
	именах переменных и функциях, а также о других элементах исходного кода.

	.map файлы используются для отладки TypeScript кода в инструментах разработчика, 
	таких как Visual Studio Code или WebStorm. Они позволяют видеть исходные имена 
	переменных и функций в JavaScript коде, что облегчает отладку и понимание кода.

	Использование .map файлов также может помочь улучшить производительность 
	JavaScript кода, так как они позволяют избежать лишних преобразований имен 
	переменных и функций при компиляции TypeScript кода.
`},j:{ques:"Можно ли использовать TypeScript в серверной разработке",result:`
	Да, TypeScript можно использовать в серверной разработке. Он широко 
	используется в Node.js для создания серверных приложений. TypeScript 
	позволяет добавлять статическую типизацию к JavaScript-коду, что улучшает
	его читаемость и помогает обнаруживать ошибки на ранних стадиях разработки.
`},y:{ques:"Ключевое слово declare",result:`
	Ключевое слово declare используется в TypeScript для того, чтобы указать, что 
	некоторый элемент существует, даже если его ещё не существует в коде. Это может
	быть полезным при определении интерфейсов или типов, которые будут реализованы 
	или заполнены позже.
`},4:{ques:"Разница между типами void, never и unknown",result:`
	-Типы void, never, and unknown в TypeScript имеют следующие различия:

	-Тип void указывает на то, что функция или метод не возвращает значение.

	-Тип never обозначает значение, которое не может возникнуть в 
	результате выполнения программы.

	-Тип unknown используется для обозначения значений неизвестного типа. 
	 Он позволяет обрабатывать такие значения безопасным способом, не вызывая ошибок типа.
`},u:{ques:"Как вы отлавливаете ошибки в TypeScript коде",result:`
	В TypeScript есть несколько способов отлова ошибок в коде:

	-Использование строгой типизации: TypeScript позволяет определить типы для переменных 
	и параметров функций, что помогает обнаруживать ошибки, связанные с несовместимостью типов.

	-Обработка ошибок с помощью операторов try/catch: Этот подход позволяет перехватывать ошибки 
	времени выполнения и обрабатывать их соответствующим образом.

	-Применение аннотаций @ts-ignore и @ts-expect-error: Эти аннотации позволяют временно подавить 
	или явно указать на наличие ошибки в коде соответственно.

	-Использование инструментария для линтинга кода, такого как tslint или eslint, которые могут 
	обнаруживать различные виды ошибок в коде и выдавать предупреждения.
`}},Zd={i:{ques:"Что такое прогрессивный рендеринг",result:`
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
`},p:{ques:" Progressive Web Application (PWA)",result:`
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
`},z:{ques:"Что происходит при введение запроса в строку",result:`
	При вводе запроса в адресной строке браузера, запрос передаётся на сервер для обработки. 
	Сервер разбирает запрос на составляющие, такие как метод (GET, POST и т. д.), путь к ресурсу 
	и параметры запроса. Затем сервер ищет соответствующий файл (или ресурс) на своём сервере, 
	который соответствует указанному пути в запросе. Если файл найден, сервер обрабатывает его 
	и отправляет обратно браузеру в виде HTML-страницы или другого типа контента. Если файл не 
	найден, сервер возвращает ошибку.
`},c:{ques:"Кроссбраузерность",result:`
	Кроссбраузерность — это свойство веб-сайта или веб-приложения отображаться и работать 
	одинаково во всех популярных браузерах. Это очень важно, потому что разные браузеры 
	имеют разные функции и возможности, и если ваш сайт не работает правильно во всех 
	браузерах, пользователи могут столкнуться с проблемами.

	Чтобы обеспечить кроссбраузерность, разработчики должны учитывать различия между 
	браузерами и использовать стандарты и технологии, которые работают во всех браузерах. 
	Это может включать в себя использование определенных функций HTML, CSS и JavaScript, 
	а также тестирование сайта в разных браузерах для проверки его работы.
`},o:{ques:"Что такое OSI модель",result:`
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
`},d:{ques:"Поток документа",result:`
	Поток документа HTML - это последовательность элементов, формирующих структуру веб-страницы. 
	Каждый элемент представлен тегом, который имеет свой открывающий и закрывающий парный тег. 
	Например, тег открывает элемент, а - закрывает его. Между этими тегами находится содержимое элемента.

	Элементы могут быть вложенными, то есть один элемент может находиться внутри другого. Например, 
	элемент может содержать в себе другие элементы, такие как , и т.д.
`},m:{ques:"Разница между адаптивным и отзывчивым дизайном",result:`
	Адаптивный дизайн (adaptive design) - это подход к созданию сайтов и приложений, 
	который предполагает создание нескольких вариантов дизайна для разных устройств и 
	разрешений экрана. Такой дизайн позволяет сайту или приложению выглядеть хорошо на любом 
	устройстве, но при этом может потребоваться больше времени и ресурсов на его разработку.

	Отзывчивый дизайн (responsive design) - это другой подход, который заключается в создании 
	одного универсального дизайна, который будет автоматически подстраиваться под разные 
	устройства и разрешения экрана. Такой подход требует меньше времени и ресурсов на разработку, 
	но может не обеспечить такого же качества отображения на всех устройствах, как адаптивный дизайн.
`},g:{ques:" Разница между Progressive Enhancement и Graceful Degradation",result:`
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
`},w:{ques:"Что такое Веб-компоненты и какие технологии в них используются",result:`
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
`},r:{ques:"Что такое REST",result:`
	REST (Representational State Transfer) - это архитектурный стиль построения распределенных 
	программных систем. Он основан на использовании стандартных технологий, таких 
	как HTTP, URL и JSON, и не требует специфического программного обеспечения или баз данных.

	REST позволяет создавать масштабируемые, гибкие и легко обслуживаемые системы, которые 
	могут работать с большим количеством устройств и сервисов. Он также обеспечивает хорошую 
	производительность и безопасность благодаря использованию стандартных протоколов 
	и форматов данных.
`},f:{ques:"RESTful api",result:`
	REST (Representational State Transfer) — это архитектурный стиль для построения распределенных 
	приложений. RESTful API — это API, которое следует принципам REST. Такие API обычно 
	используют стандартные протоколы, такие как HTTP, для обмена данными. Например, GET запрос 
	может использоваться для получения данных, POST — для создания новых ресурсов, PUT — для 
	обновления существующих и т.д.

	Кроме того, RESTful API обычно следуют принципу кеширования, что позволяет повысить 
	производительность системы. Если сервер возвращает определенный ответ на определенный запрос, 
	клиент может сохранить этот ответ и использовать его в дальнейшем, не запрашивая 
	его снова у сервера.
`},a:{ques:"Принципы REST-архитектуры",result:`
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
`},l:{ques:"Разница между layout, painting и compositing",result:`
	-Layout - это процесс определения размеров и положения элементов на экране. Во время 
	этого процесса браузер решает, как элементы будут располагаться на странице, и вычисляет их размеры.

	-Painting - это процесс рисования элементов на экране. Браузер берет информацию о размерах 
	и положении элементов из layout и рисует их на экране.

	-Compositing - это процесс объединения нескольких элементов в одно изображение. Во время 
	compositing браузер объединяет все нарисованные элементы в одно изображение, которое 
	затем отображается на экране.
`},u:{ques:"Что такое Flash Of Unstyled Content (FOUC)? Как его избежать",result:`
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
`},h:{ques:"History API в браузере",result:`
	History API - это инструмент, который позволяет приложениям работать с 
	историей браузера. Он позволяет получать информацию о предыдущих страницах, 
	добавлять и удалять элементы из истории, а также управлять тем, как 
	пользователь перемещается по страницам.
`},v:{ques:"Что такое веб-хранилище (web storage)",result:`
	Веб-хранилище - это механизм, который позволяет хранить данные на стороне 
	пользователя в браузере. Это может быть полезно для сохранения состояния 
	приложения, пользовательских настроек и другой информации. Веб-хранилище 
	доступно через JavaScript и имеет несколько различных типов, включая 
	локальное хранилище(localStorage) и сессионное хранилище(sessionStorage).
`},k:{ques:"Разница между cookie, sessionStorage и localStorage",result:`
	Основное различие между cookie, sessionStorage и localStorage заключается в том, как долго они сохраняются на устройстве пользователя:

	-Cookies хранятся на устройстве до тех пор, пока пользователь не удалит их 
	вручную или не истечет срок их действия.

	-SessionStorage сохраняет данные только во время активной сессии браузера. 
	Когда пользователь закрывает браузер, все данные удаляются.

	-LocalStorage сохраняет данные на устройстве пользователя до тех пор, 
	пока они не будут удалены явно.
`},s:{ques:"Способы уменьшения времени загрузки веб-страницы",result:`
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
`},x:{ques:"Core Web Vitals и метрики",result:`
	Core Web Vitals - это набор показателей, разработанных компанией Google, для оценки производительности 
	и пользовательского опыта на сайтах. Основные метрики, входящие в Core Web Vitals, включают:


	-Largest Contentful Paint (LCP) - измеряет время, за которое на странице появляется основное содержание.

	-First Input Delay (FID) - измеряет задержку между вводом пользователя и реакцией страницы на этот ввод.

	-Cumulative Layout Shift (CLS) - оценивает стабильность макета страницы, то есть насколько часто элементы 
	 страницы перемещаются при загрузке новых ресурсов.


	Эти метрики помогают оценить производительность сайта и улучшить пользовательский опыт, 
	делая загрузку страниц быстрее и стабильнее.
`},x:{ques:"Core Web Vitals и метрики",result:`
	Core Web Vitals - это набор показателей, разработанных компанией Google, для оценки производительности 
	и пользовательского опыта на сайтах. Основные метрики, входящие в Core Web Vitals, включают:


	-Largest Contentful Paint (LCP) - измеряет время, за которое на странице появляется основное содержание.

	-First Input Delay (FID) - измеряет задержку между вводом пользователя и реакцией страницы на этот ввод.

	-Cumulative Layout Shift (CLS) - оценивает стабильность макета страницы, то есть насколько часто элементы 
	 страницы перемещаются при загрузке новых ресурсов.


	Эти метрики помогают оценить производительность сайта и улучшить пользовательский опыт, 
	делая загрузку страниц быстрее и стабильнее.
`},j:{ques:"Разница между preload, prefetch, preconnect и prerender",result:`
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
`},e:{ques:"Для чего нужен паттерн PRPL",result:`
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
`},t:{ques:"Что такое HTTP",result:`
	HTTP (Hypertext Transfer Protocol) - это протокол передачи гипертекста, который 
	используется для обмена данными между веб-серверами и браузерами. Он отвечает 
	за передачу информации, такой как HTML-страницы, изображения, JavaScript и другие 
	ресурсы, необходимые для отображения веб-страниц. HTTP также используется для 
	обработки запросов от браузеров и отправки ответов обратно на них.
`},b:{ques:"Из чего состоит HTTP-запрос",result:`
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
`},0:{ques:"Что такое HTTP cookie? Для чего они используются",result:`
	HTTP cookie - это небольшой фрагмент данных, который отправляется веб-сервером 
	в браузер и сохраняется на компьютере пользователя. Они используются для хранения 
	информации о пользователе, такой как настройки, предпочтения и данные для входа. 
	С помощью HTTP cookie веб-сайты могут отслеживать поведение пользователя на сайте 
	и предоставлять ему персонализированный опыт.
`},n:{ques:"Разница между HTTP и HTTPS",result:`
	HTTPS - это безопасный вариант HTTP, который использует шифрование для защиты 
	данных между клиентом и сервером. Он обеспечивает большую безопасность, чем 
	обычный HTTP, так как данные передаются в зашифрованном виде и защищены от 
	перехвата. Кроме того, HTTPS часто ассоциируется с сертификатами безопасности, 
	которые подтверждают подлинность сайта и защищают от man-in-the-middle атак.
`},t2:{ques:"Разница между HTTP/1 и HTTP/2",result:`
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
`},w2:{ques:"Как работает мультиплексирование в HTTP/2",result:`
	Мультиплексирование - это механизм, который позволяет передавать несколько 
	потоков данных через одно соединение. В HTTP/2 мультиплексирование работает 
	путем разделения соединения на несколько логических каналов, каждый из которых 
	может передавать свой поток данных. Это позволяет увеличить пропускную способность 
	и снизить задержки при передаче данных.
`},ts:{ques:"Что такое “трехстороннее рукопожатие” (Triple handshake)",result:`
	“Тройное рукопожатие” (Triple handshake) - это процесс установления безопасного 
	соединения между клиентом и сервером в протоколе HTTPS. Этот процесс включает в себя три этапа:

	1.Клиент отправляет запрос на установление соединения, указывая в нем, что он поддерживает 
	протокол TLS (Transport Layer Security).

	2.Сервер отвечает на запрос, подтверждая, что он также поддерживает TLS, и предлагает список 
	доступных алгоритмов шифрования.

	3.Клиент выбирает один из предложенных алгоритмов и отправляет подтверждение серверу. После 
	этого устанавливается безопасное соединение и начинается передача данных.
`},pu:{ques:"Разница между PUT и POST-запросами",result:`
	PUT и POST являются методами HTTP, используемыми для отправки запросов на сервер. 

	Вот основные различия между ними:

	-Цель: PUT используется для обновления ресурсов, а POST - для создания новых ресурсов.

	-Синтаксис: PUT требует указания полного URI ресурса, в то время как POST использует 
	тело запроса для передачи данных.

	-Безопасность: PUT более безопасен, так как он проверяет, существует ли уже ресурс, 
	прежде чем пытаться его обновить. POST не делает такой проверки и может привести к 
	дублированию или другим ошибкам, если не используется должным образом
`},d2:{ques:"Разница между протоколами TCP и UDP",result:`
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
`},ws:{ques:"Что такое WebSocket",result:`
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
`},ws:{ques:"Что такое WebSocket",result:`
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
`},dt:{ques:"Разница между Long-Polling, Websockets и Server-Sent Events",result:`
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
`},jp:{ques:"Как работает JSONP",result:`
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
`},in:{ques:"Что такое IndexedDB в браузере? Преимущества IndexedDB",result:`
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
`},sw:{ques:"Что такое Service Workers",result:`
	Service Workers – это специальные программы, которые работают в фоне и выполняют 
	различные задачи, связанные с улучшением пользовательского опыта. Например, они 
	могут кэшировать данные, обрабатывать push-уведомления, управлять доступом к сети 
	и многое другое.

	Service Workers работают на уровне браузера и не влияют на основной процесс 
	выполнения JavaScript-программы. Они могут быть активированы в любое время и 
	выполнять свои задачи, не мешая основной программе.
`},ww:{ques:"Что такое Web Workers",result:`
	Web Workers - это технология, которая позволяет выполнять JavaScript-код в 
	отдельном потоке, не блокируя основной поток пользовательского интерфейса. 
	Это может быть полезно, например, для выполнения длинных операций или для 
	обработки большого количества данных. Web Workers создаются с помощью объекта 
	Worker, который принимает код JavaScript, который нужно выполнить, и создает 
	новый поток для его выполнения.
`},w5:{ques:"Что такое Web Worklet",result:`
	Web Worklet - это новая технология, которая позволяет использовать нативные 
	функции операционной системы в веб-приложениях. Она позволяет использовать 
	функции, которые обычно доступны только в нативных приложениях, в веб-приложениях. 
	Например, можно использовать функции графического процессора для обработки изображений 
	или функции аудио API для работы с аудио. Web Worklet также позволяет использовать 
	нативные шрифты в веб-приложениях, что может улучшить внешний вид сайта.
`},dd:{ques:"Механизм установки сеанса между клиентом и сервером",result:`
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
`},ap:{ques:"Что Такое API",result:`
	API (Application Programming Interface) - это набор правил и процедур, которые 
	позволяют разным программам взаимодействовать друг с другом. Он определяет, каким 
	образом одна программа может получить доступ к функциям другой программы.

	API могут быть как открытыми, так и проприетарными. Открытые API доступны для 
	использования всеми желающими, а проприетарные - только для пользователей конкретной 
	программы или сервиса.

	Одним из самых известных примеров API является Microsoft Office API, который позволяет 
	разработчикам создавать программы, работающие с документами Microsoft Office
`},cd:{ques:"Что такое CDN",result:`
	CDN (Content Delivery Network) - это сеть серверов, расположенных в разных 
	точках мира, которые используются для быстрой доставки контента пользователям. 
	Когда пользователь запрашивает страницу или файл, CDN определяет, где находится 
	ближайший сервер с копией этого контента, и перенаправляет запрос на этот сервер. 
	Это ускоряет загрузку страниц и файлов, так как пользователю не приходится ждать, 
	пока запрос дойдет до удаленного сервера и вернется обратно.
`},ip:{ques:" Что такое IP-адрес",result:`
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
`},hd:{ques:"Разница между host и domain",result:`
	Host - это устройство, подключенное к сети, например компьютер, сервер или другое устройство. 
	Host имеет уникальный IP адрес, который позволяет другим устройствам находить его в сети. 
	Host может иметь несколько IP адресов, если он подключен к нескольким сетям.

	Domain - это имя, которое указывает на хост в интернете. Domain может быть зарегистрирован 
	в системе доменных имен (DNS), которая переводит доменные имена в IP адреса. Domain может 
	указывать на один хост или на несколько хостов, в зависимости от настроек DNS.

	Разница между host и domain заключается в том, что host - это физическое устройство, а 
	domain - это просто имя, которое указывает на это устройство. Host имеет уникальные IP 
	адреса, а domain может указывать на несколько хостов с разными IP адресами.
`},ur:{ques:"Разница между URI и URL",result:`
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
`},ur:{ques:"Разница между URI и URL",result:`
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
`},qq:{ques:"Разница между монолитной и микросервисной архитектурами",result:`
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
`}},bd={i:{ques:"Что такое DOM?",result:`
	DOM - это объектная модель документа, которую браузер
	создает в памяти компьютера на основании HTML-кода, 
	полученного им от сервера.
`},n:{ques:"Типы узлов DOM?",result:`
	1.элемент
	2.атрибут
	3.текстовый узел
	4.комментарий
	5.сам документ
	6.узел типа документа  
`},m:{ques:"Методы JavaScript для поиска элементов на странице",result:`
	1.querySelector
	2.querySelectorAll
	3.getElementById
	4.getElementsByClassName
	5.getElementsByTagName
	6.getElementsByName  
`},c:{ques:"Свойства для перемещения по dom-дереву",result:`
	Получение текст-узлов и элементов
		1.childNodes, firstChild, lastChild - дочерние узлы и элементы
		2.previousSibling, nextSibling - соседние элементы

	Получение только элементов
		1.children , firstElementChild, lastElementChild  - дочерние узлы 
		и элементы
		2.previousElementSibling, nextElementSibling  - соседние элементы
		3.parentElement – родитель-элемент.
`},b:{ques:"Что такое BOM?",result:`
	BOM - это объектная модель браузера, он нужен чтобы работать со всем, 
	кроме документа.

	Содержит такие объекты как:
	-navigator - даёт информацию о самом браузере и операционной системе,
	-location - позволяет получить текущий URL и перенаправить браузер 
	 по новому адресу

	Функции alert/confirm/prompt тоже являются частью BOM
`},e:{ques:"Виды событий Event?",result:`
	События DOM присылаются чтобы уведомить код о том, что интересующие его
	действия произошли. События могут возникать в результате действий 
	пользователя, таких как использование мыши или изменение размера окна,
	изменения состояния	базовой среды (например, низкий заряд батареи 
	или мультимедийные события из операционной системы) и других причин.

	Например:
		-online: Браузер получил доступ к сети.
		-offline: Браузер потерял доступ к сети.
`},s:{ques:"media выражения в JavaScript",result:`
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
`},t:{ques:"event.target и event.currentTarget",result:`
	event.target — это ссылка на исходный элемент на котором произошло 
	событие, в процессе всплытия он неизменен. 

	event.currentTarget — это текущий элемент до которого дошло всплытие,
	на нём сейчас выполняется обработчик.
`},l:{ques:"события load и DOMContentLoaded",result:`
	DOMContentLoaded — происходит, когда браузер разобрал HTML-страницу
	и составил DOM-дерево;

	load — происходит, когда загрузилась и HTML
	страница, и все ресурсы для её отображения пользователю: стили, 
	картинки и так далее.
`},q:{ques:"Метод EventTarget.addEventListener()",result:`
	addEventListener принимает 3 параметра:
		1. Тип события
		2. Коллбэк-функцию
		3. Объект-опции:
				-{once: Boolean} указывает, что обработчик должен быть 
				вызван не более одного раза после добавления. Если 
				true, обработчик автоматически удаляется при вызове.
`},x:{ques:"JSON и XML",result:`
	Они позволяют стандартизированно обмениваться данными между различными
	приложениями, платформами или системами.

	Отличия:
		-XML представляет данные в виде дерева, а в JSON используется система 
		на основе пар «ключ-значение»

		-JSON поддерживает только ограниченный диапазон типов данных, таких 
		как строки, числа и объекты.XML более гибкий и поддерживает сложные
		типы данных, такие как двоичные данные и временные метки.

		-Синтаксический анализ JSON безопаснее, чем XML.
`},h:{ques:"Как узнать об использовании метода event.preventDefault()?",result:`
	Для этого мы можем использовать свойство event.defaulPrevented, 
	которое возвращает логическое значение, служащее индикатором применения 
	к элементу метода event.preventDefault.
`},o:{ques:"Intersection Observer",result:`
	браузерный API, который позволяет асинхронно отслеживать пересечение
	элемента с его родителем или областью видимости документа и подгружать 
	дополнительные элементы по мере того как они попадают в область видимости

	const observer = new IntersectionObserver(callback, options)
`},u:{ques:"URLSearchParams",result:`
	API для формирования строки поисковых параметров, которую потом можно
	использовать для формирования полного адреса.
`},td:{ques:"Типы данных в JavaScript",result:`
	Числа, строки, булевые значения, null, undefined, объекты, symbol, массивы, date 
`},st:{ques:"Strict mode",result:`
	В этом режиме запрещается использовать некоторые конструкции, которые
	могут привести к ошибкам, такие как автоматическое приведение типов
	или обращение к переменным, которые не были объявлены.Также в строгом
	режиме выполняется более строгая проверка типов при преобразовании 
	значений. Например, если вы попытаетесь преобразовать строку в число,
	то получите ошибку, если строка не может быть преобразована в число.
	В общем, строгий режим помогает вам писать более надежный и безопасный код,
 	предотвращая некоторые типичные ошибки.
`},f:{ques:"Разница между function declaration и function expression",result:`
	-Function declaration создается до выполнения кода, а функция 
	expression создается во время выполнения

	-Функция declaration может быть вызвана до ее определения, тогда
	как функция expression должна быть определена до ее вызова.

	-Function declaration - именованная, Function expression - анонимная
`},0:{ques:"Разница между null и undefined",result:`
	-undefined - это ключевое слово в JavaScript, которое означает
	отсутствие значения.undefined обычно используется для переменных,
	которые не были созданы

	-null - это значение, которое может быть присвоено переменной 
	или свойству объекта. Оно указывает на то, что значение не было 
	определено или было удалено.
`},ti:{ques:"Типы таймеров в JavaScript",result:`
	В JavaScript есть два основных типа таймеров:

	setTimeout - запускает функцию или код через определенное 
	количество миллисекунд.

	setInterval - запускает функцию или код периодически с 
	определенным интервалом в миллисекундах.
`},p:{ques:"Поднятие (Hoisting)",result:`
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
`},sc:{ques:"Область видимости (Scope)",result:`
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
`},z:{ques:"Замыкание (Closure)",result:`
	Замыкание t - это функция, которая имеет
	доступ к переменным из внешней области видимости.
`},th:{ques:"this в JavaScript",result:`
	В JavaScript «this» используется для обращения к текущему 
	экземпляру объекта или контекста, в котором он используется.
	Обычно это относится к текущему экземпляру объекта, для которого
	вызывается метод или функция. Однако значение «this» можно
	изменить, привязав его или вызвав функцию с другим значением «this».
`},mn:{ques:"Что такое чистая функция",result:`
	Чистая функция - это функция, которая удовлетворяет следующим условиям:

	Она не имеет побочных эффектов. Это означает, что она не изменяет
	состояние внешнего мира, а только возвращает результат.
	Ее результат зависит только от ее входных параметров. Это означает,
	что если входные параметры не изменяются, то и результат функции
	не изменится. Она не выполняет никаких асинхронных операций, таких как
	чтение из файла или обращение к базе данных. Если ей нужны такие
	операции, она должна принимать их в качестве параметров.
`},fc:{ques:"Почему в JS функции называют объектами первого класса",result:`
	В JavaScript функции являются объектами первого класса, что означает,
	что они могут быть переданы как аргументы другим функциям, возвращены
	из других функций и присвоены переменным или свойствам объектов. Это 
	позволяет создавать гибкие и мощные системы, поскольку функции могут
	быть обработаны и использованы как любые другие данные.
`},pm:{ques:"Псевдомассив arguments",result:`
	Псевдомассив arguments - это специальный массив в JavaScript, который
	содержит все аргументы, переданные в функцию. Он доступен внутри
	функции и позволяет обращаться к аргументам без необходимости
	указывать их имена.
`},hn:{ques:"Разница между host-объектами и нативными объектами",result:`
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
`},pl:{ques:"Прототипное наследование",result:`
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
`},na:{ques:"NaN - это",result:`
	это специальное значение в JavaScript, которое используется для 
	обозначения некорректных результатов вычислений.

	проверить, является ли значение числом или NaN, вы можете 
	использовать метод isNaN:
`},w:{ques:"Объектная обертка (Wrapper Objects)",result:`
	Объектные обертки - это объекты в JavaScript, которые служат
	“контейнерами” для примитивных значений. Например, когда вы 
	создаете новый примитивный тип данных, такой как число или строку,
	JavaScript автоматически создает объектную обертку для этого значения.
	Объектные обертки предоставляют дополнительные методы и свойства для работы
 	с примитивными значениями, такие как форматирование строки, сравнение 
 	чисел и т. д. Они также могут иметь свои собственные свойства и методы,
 	специфичные для конкретного типа объектной обертки.
`},ar:{ques:"Проверить, является ли значение массивом",result:`
	Array.isArray(yourVariable)
	val.prototype.constructor = Array
`},bu:{ques:"boxing/unboxing",result:`
	Boxing - это процесс преобразования примитивного типа данных (например,
	числа или строки) в объект. В JavaScript это происходит автоматически,
	когда вы работаете с примитивами как с свойствами объекта или аргументами
	функции. 

	Unboxing - это обратный процесс, когда из объекта извлекается примитивное
	значение. Это также происходит автоматически при использовании объекта в
	качестве аргумента функции или свойства другого объекта.

`},ih:{ques:"Разница между оператором in и методом .hasOwnProperty()",result:`
	Оператор in используется для проверки наличия свойства или индекса
	в объекте или массиве. 

	Метод Object.hasOwnProperty() используется для проверки, было ли
	указанное свойство явно указано при создании объекта.

`},ds:{ques:"Разница между глубокой (deep) и поверхностной (shallow) копиями",result:`
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
`},ch:{ques:"Цепочка вызовов функций (chaining)",result:`
	Цепочка вызовов функций - это способ вызова нескольких функций 
	последовательно, когда результат выполнения одной функции передается
	в качестве аргумента следующей функции

	var obj = { method1: function() {}, method2: function() {} }

	obj.method1().method2()
`},uv:{ques:"Что такое необъявленная переменная",result:`
	Необъявленная переменная - это переменная, которая была использована
	в коде без предварительного объявления. В некоторых случаях это
	может привести к ошибке, а в некоторых - нет. В JavaScript, если
	переменная используется до того, как она была объявлена, она будет
	создана автоматически. Однако это не рекомендуется, так как может
	привести к ошибкам и непредвиденному поведению кода.
`},af:{ques:"Как передаются параметры в функцию: по ссылке или по значению",result:`
	В JavaScript параметры передаются по значению. Это значит, что
	при вызове функции создается копия аргумента и эта копия передается
	в функцию. Любые изменения, которые вы делаете с аргументом внутри
	функции, не влияют на оригинальный аргумент.
	Но если аргумент является ссылкой на объект (например, массив), 
	то изменение этого объекта внутри функции повлияет на оригинал,
	так как объект является ссылкой на данные, а не копией.
`},po:{ques:"Что такое прототип объекта в JavaScript",result:`
	Прототип объекта в JavaScript — это объект, который содержит
	свойства и методы, доступные для всех объектов данного класса.
	Прототип определяет поведение объекта и позволяет добавлять новые
	свойства и методы без изменения исходного кода класса.
`},oc:{ques:"Как работает метод Object.create()",result:`
	Метод Object.create создает новый объект, который наследует
	свойства и методы от указанного прототипа.
	Вот как это работает:

	-Сначала создается пустой объект ({}).
	-Затем этот объект связывается с прототипом, который указан в
	качестве аргумента метода (Object.create(prototype)).
	-После этого возвращается созданный объект.

	Таким образом, мы получаем новый объект, который имеет доступ ко всем
	свойствам и методам прототипа, но при этом не наследует ничего лишнего.
`},fs:{ques:"Object.freeze() и Object.seal()",result:`
	Метод Object.freeze() делает объект неизменяемым. Это означает, 
	что вы не можете добавлять или удалять свойства из объекта, а также
	изменять значения существующих свойств.

	Метод Object.seal() делает объект доступным только для чтения. Это 
	означает, что вы можете добавлять и удалять свойства из объекта,
	но не можете изменять значения уже существующих свойств.
`},ms:{ques:"Плюсы и минусы использования use strict",result:`
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
`},im:{ques:"Плюсы и минусы иммутабельности",result:`
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
`},to:{ques:"Типы ОБЪЕКТОВ JavaScript",result:`
	-Строковые объекты.
	-Числовые объекты
	-Логические объекты
	-Объектные литералы
	-Массивы 
`},er:{ques:"Типы ошибок в JavaScript",result:`
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
`},tt:{ques:"Разница между typeof и instanceof?",result:`
	instanceof — это булево выражение, которое позволяет проверить, 
	принадлежит ли объект определенному классу или его подклассу

	typeof - определяет тип
`},sd:{ques:"JavaScript статически, или динамически типизированный язык",result:`
	JavaScript является динамически типизированным языком. Это означает,
	что типы переменных определяются во время выполнения, а не во время
	компиляции, как в статически типизированных языках.
`},re:{ques:"Регулярное выражение (Regular Expression)",result:`
	Регулярные выражения - это мощный инструмент для работы с текстовыми
	данными в JavaScript. Они позволяют задавать шаблоны для поиска,
	замены или проверки текста. С помощью регулярных выражений можно
	выполнять различные операции, такие как проверка на соответствие
	формату email, удаление лишних пробелов, замена строк и многое другое
`},pf:{ques:"Что такое полифил (polyfill)",result:`
	Полифил - это код, который добавляет функциональность, отсутствующую
	в текущем окружении. Он используется для обеспечения совместимости
	с более новыми стандартами и возможностями, чтобы приложение могло
	работать на разных платформах и браузерах.
`},es:{ques:"expression и statement",result:`
	Выражения в JavaScript - это конструкции, которые возвращают 
	значение. К ним относятся арифметические операции, вызовы функций, 
	операторы сравнения и т.д. Выражения используются в коде для получения
	значений, выполнения операций и проверки условий.

	Инструкции в JavaScript - это команды, которые выполняют определенные
	действия. К ним относятся операторы присваивания, вызовы функций, 
	условные операторы и т.д. Инструкции используются для управления 
	потоком выполнения программы и выполнения различных операций.
`},lm:{ques:"Типы утечек памяти в JavaScript",result:`
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
`},ob:{ques:"Разница между примитивом и объектом",result:`
	Примитивы - это базовые типы данных, такие как числа, строки, булевы 
	значения и null. Они занимают меньше памяти и обрабатываются быстрее,
	чем объекты. Примитивы не могут иметь свойств или методов, они всегда
	имеют одно и то же значение.

	Объекты - это сложные структуры данных, которые могут иметь свойства
	и методы. Объекты могут быть созданы с помощью литералов объектов или
	с использованием конструкторов классов. Объекты занимают больше памяти,
	чем примитивы, но они могут иметь более сложную структуру и поведение
`},no:{ques:"Почему typeof null возвращает object",result:`
	Потому что null является объектом в JavaScript. Хотя null не имеет
	типа (typeof null возвращает “object”), он все равно является 
	объектом, поскольку null === {} возвращает true.
`},pr:{ques:"Зачем нужен конструктор Proxy?",result:`
	Конструктор Proxy позволяет создать прокси-объект, который может
	быть использован для перехвата и изменения действий, выполняемых
	с оригинальным объектом. Это может быть полезно для создания классов
	с переопределением методов, для реализации AOP (Aspect-Oriented 
	Programming, аспектно-ориентированное программирование), а также 
	для обхода защиты private и protected членов класса.
`},as:{ques:"Разница между синхронными и асинхронными функциями",result:`
	Синхронные функции блокируют выполнение кода до тех пор, пока они не
	закончат свою работу. Это может привести к “замораживанию” интерфейса,
	если функция занимает много времени для выполнения.
	Асинхронные функции позволяют выполнять код, не блокируя его. Это полезно
	для выполнения длительных операций, таких как загрузка данных из сети, без 
	“замораживания” интерфейса. Асинхронные функции обычно используют механизм
	обратных вызовов или promises для уведомления о завершении операции.
`},aj:{ques:"AJAX",result:`
	AJAX (Asynchronous JavaScript and XML) - это технология, которая 
	позволяет веб-приложениям получать данные с сервера без необходимости
	перезагрузки всей страницы. AJAX использует JavaScript для отправки 
	запросов на сервер и получения ответов в виде данных, которые затем
	могут быть отображены на странице. Это позволяет создавать более
	интерактивные и динамичные веб-приложения, которые могут обновлять
	данные без полной перезагрузки страницы.
`},sp:{ques:"Что такое same-origin policy в контексте JavaScript",result:`
	Same-origin policy - это политика безопасности в браузере, которая
	ограничивает доступ JavaScript к ресурсам на других доменах. 
	Она предотвращает выполнение скриптов с одного домена на другом домене,
	чтобы предотвратить межсайтовый скриптинг (Cross-Site Scripting, XSS).
	Однако, существуют исключения, когда same-origin policy может быть 
	отключена, например, с использованием CORS (Cross-Origin Resource Sharing).
`},ma:{ques:"Разница между микро и макрозадачами в event loop",result:`
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
`},ps:{ques:"Что такое промисы (Promises)",result:`
	Promises - это механизм в JavaScript, который позволяет выполнять 
	асинхронные операции без блокирования основного потока выполнения 
	программы. Promises используются, когда нам нужно выполнить какую-то
	операцию, но мы не хотим, чтобы она блокировала работу программы, 
	пока она не завершится. Например, когда мы загружаем данные из сети 
	или обрабатываем большой файл, мы можем использовать Promises, чтобы 
	программа продолжала работать, пока операция еще выполняется.
`},da:{ques:"Плюсы и минусы использовании Ajax",result:`
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
`},ac:{ques:"Подходы при работе с асинхронным кодом",result:`
	Callbacks: Это самый старый и простой подход. Он заключается в том,
	что когда одна функция закончила свою работу, она вызывает другую 
	функцию, которая продолжает выполнение программы.

	Promises: Это более современный подход, который позволяет писать код в
	последовательном стиле, без необходимости использовать обратные вызовы.

	Async/Await: Это новейший подход, который появился в ES2017. Он позволяет
	писать асинхронный код в стиле синхронный, используя ключевые слова async и await.
`},pp:{ques:"Преимущества использовании промисов вместо колбэков",result:`
	Promises имеют несколько преимуществ перед колбэками:
	-Promise chaining: Promises позволяют связывать несколько операций вместе,
	 делая код более читаемым и понятным.

	-Порядок выполнения: Promises обеспечивают определенный порядок выполнения
	 операций, что может быть важно в некоторых случаях.

	-Отладка: Promises упрощают отладку, так как они позволяют видеть,
	 на какой стадии выполнения находится код.
`},cf:{ques:"Что такое callback-функция? Что такое Callback Hell",result:`
	Callback-функция - это функция, которая выполняется после завершения
	другой функции.

	Callback Hell - это ситуация, когда в программе
	слишком много callback-функций, и это делает код сложным для понимания и поддержки.
`},aa:{ques:"Что такое async/await",result:`
	Async/await — это современный способ написания асинхронного JavaScript-кода,
	который позволяет сделать его более читаемым и удобным для работы. С помощью
	async/await вы можете писать код, который выглядит как синхронный,
	но при этом будет выполняться асинхронно.
`},p0:{ques:"Promise.all(), Promise.any() и Promise.race()",result:`
	-Promise.all() используется для ожидания завершения всех промисов из массива

	-Promise.any() - для ожидания завершения любого промиса из 
	 массива (возвращает индекс элемента)

	-Promise.race() - для ожидания завершения первого промиса из массива
`},p0:{ques:"Плюсы и минусы асинхронного программирования",result:`
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
`},g:{ques:"Что такое генераторы? Когда стоит использовать генераторы",result:`
	Генераторы - это функции в JavaScript, которые позволяют создавать 
	итерируемые объекты. Генераторы могут использоваться для создания 
	бесконечных коллекций данных, таких как строки или числа. Они также 
	могут использоваться для обработки больших объемов данных, когда 
	необходимо выполнять какие-либо действия с каждым элементом коллекции. 
	Генераторы обычно используются, когда необходимо обработать большие 
	объемы данных без загрузки их всех в память сразу.
`},k:{ques:"Что такое дескрипторы свойств объектов",result:`
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
`},q1:{ques:" В чем заключаются особенности геттеров и сеттеров",result:`
	Геттеры и сеттеры - это функции, которые позволяют контролировать доступ к свойствам 
	объекта. Они могут быть использованы для защиты данных или для реализации сложной 
	логики доступа к свойствам.

	Геттеры используются для получения значения свойства. Они обычно возвращают значение
	свойства, но могут выполнять дополнительные проверки или преобразования перед возвратом.

	Сеттеры используются для установки значения свойства. Они могут принимать одно 
	или несколько аргументов и могут выполнять различные проверки перед изменением 
	свойства. Сеттеры также могут использовать дополнительные параметры для указания, 
	следует ли заменить существующее значение или добавить новое значение к списку значений.
`}},ep={i:{ques:"Основные принципы ООП",result:`
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

`},s:{ques:"Что такое SOLID",result:`
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
`},p:{ques:"Разница между классовым и прототипным наследованием",result:`
	Классовое наследование - это механизм, при котором дочерний класс наследует все методы и 
	свойства родительского класса. При создании объекта дочернего класса создается также объект 
	родительского класса, и все изменения, сделанные в объекте дочернего класса, отражаются в 
	объекте родительского класса.

	Прототипное наследование, или наследование прототипов, - это механизм, который не создает 
	иерархию классов, а позволяет добавлять свойства и методы к объектам на лету. При этом не 
	создается новый класс, а просто добавляется новый метод или свойство к прототипу объекта. 
	Это делает код более гибким и легким для изменения.
`},d:{ques:"Однонаправленный поток данных и двусторонняя связь данных",result:`
	Однонаправленный поток данных означает, что данные передаются в одном направлении. 
	Например, из веб-сервера в браузер. В этом случае данные идут только в одном 
	направлении - от сервера к клиенту.

	Двунаправленная связь данных означает, что данные могут передаваться в двух направлениях. 
	Например, между клиентом и сервером. В этом случае данные могут идти как от сервера к 
	клиенту, так и от клиента к серверу.
`},m:{ques:"Что такое MVC",result:`
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
`},k:{ques:"Что такое каррирование (Currying)",result:`
	Каррирование - это процесс “разворачивания” функции с несколькими аргументами в 
	цепочку функций с одним аргументом.

	Например, у нас есть функция multiply которая принимает два аргумента:

	const multiply = (a, b) => a * b;

	Мы можем развернуть эту функцию в цепочку из двух функций с одним аргументом, используя каррирование:

	const curriedMultiply = a => b => a * b;
	const result = curriedMultiply(2)(3); // result == 6
`},t:{ques:"Статический метод класса (static)",result:`
	Статический метод класса может быть вызван без создания экземпляра класса. Он принадлежит 
	самому классу, а не конкретному экземпляру класса. Статические методы обычно используются
	для работы с общими ресурсами или для выполнения операций, которые не зависят от 
	конкретного экземпляра класса.

	Вызов статического метода осуществляется с использованием ключевого слова static и имени 
	метода в качестве аргумента. Например:

	MyClass.staticMethod();
`},n:{ques:"Что такое паттерн, или шаблон проектирования",result:`
	Шаблон проектирования, или паттерн проектирования — это решение часто возникающей 
	проблемы или задачи в проектировании программного обеспечения. Шаблоны упрощают разработку 
	программного обеспечения, позволяя разработчикам использовать уже готовые решения для 
	типичных задач. Существует множество различных шаблонов, каждый из которых предназначен 
	для решения определенной проблемы или задачи.
`},n:{ques:"Типы паттернов в ООП",result:`
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
`},v:{ques:"Как работает механизм прототипов в JavaScript",result:`
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
`},x:{ques:"Разница между императивным и декларативным подходами программирования",result:`
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
`},r:{ques:"Что такое реактивное программирование",result:`
	Реактивное программирование (reactive programming) — это подход к разработке программного 
	обеспечения, который фокусируется на обработке потоков данных в реальном времени. Этот 
	подход используется для создания систем, которые могут быстро реагировать на изменения 
	в данных и адаптироваться к ним.

	В реактивном программировании используются так называемые реактивные библиотеки, которые 
	позволяют обрабатывать данные в режиме реального времени без необходимости постоянного 
	обновления состояния системы. Это делает реактивное программирование идеальным для 
	создания масштабируемых и высокопроизводительных систем.
`},e:{ques:"Разница между агрегацией и композицией",result:`
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
`}},tp={v:{ques:"Виды тестирования",result:`
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
`},f:{ques:"Fake в unit тестировании",result:`
	В юнит-тестировании fake — это инструмент для создания фиктивных
	данных или объектов, которые имитируют реальное поведение системы,
	но при этом не требуют доступа к внешним ресурсам или базе данных.
	Fake-объекты позволяют быстро создавать тестовые сценарии и изолировать
	тесты от внешних зависимостей, что ускоряет процесс тестирования
	и улучшает его качество.
`},s:{ques:"Stub в unit тестировании",result:`
	В юнит-тестировании stub — это заглушка, которая заменяет реальную
	реализацию метода или интерфейса. Она используется для того,
	чтобы изолировать тестируемый код от зависимостей и упростить
	тестирование. Stub может просто возвращать фиксированное 
	значение или выполнять некоторые заранее определенные действия.
`},m:{ques:"Mock в unit тестировании?",result:`
	В юнит-тестировании mock — это объект, который имитирует 
	поведение другого объекта. Он позволяет тестировать код в изоляции,
	не затрагивая реальные зависимости. Mock используется для контроля
	того, какие методы будут вызваны и какие данные будут возвращены.
	Это позволяет написать более точные и надежные тесты.
`},b:{ques:"White/Black/Grey Box-тестирование?",result:`
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
`},g:{ques:"Что такое Quality Gates",result:`
	Quality gates — это механизмы, которые определяют критерии качества
	для сборки или итерации, и только если сборка соответствует этим критериям,
	она может быть объединена в основную ветку разработки. Это помогает 
	гарантировать, что в основную ветку не попадут некачественные изменения, 
	которые могут привести к сбоям или проблемам в работе продукта. Quality 
	gates могут включать такие критерии, как количество пройденных тестов, 
	покрытие кода тестами, отсутствие серьезных дефектов и т.д.
`},t:{ques:"Разница между TDD и BDD",result:`
	-TDD (Test-Driven Development) - это подход к разработке программного обеспечения,
	основанный на написании тестов до написания кода. Это позволяет гарантировать,
	что код, который мы пишем, соответствует нашим требованиям и ожиданиям.

	-BDD (Behavior-Driven Development) - это метод разработки программного обеспечения,
	который фокусируется на описании того, как система должна работать, а не 
	на том, как она реализована. BDD использует сценарии, называемые “тестами”, 
	которые описывают поведение системы. Эти сценарии могут быть написаны на любом
	языке, но обычно используются языки, такие как Gherkin или Cucumber.
`},u:{ques:"UI-тестирование",result:`
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
`},e:{ques:"Как можно оценить качество тестирования",result:`
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
`},i:{ques:"Принцип FIRST в тестировании",result:`
	Принцип FIRST - это принцип тестирования, который гласит, что 
	при обнаружении ошибки необходимо как можно быстрее ее изолировать
	и устранить. Этот принцип помогает сократить время на поиск и 
	исправление ошибок, а также снижает вероятность появления новых дефектов.
`}},Dr={html:Qd,css:Gd,methodology:Kd,react:Xd,type_script:Yd,web:Zd,java_script:bd,oop:ep,testing:tp},np=Object.keys(Dr),Bo={html:"HTML и вёрстка",css:"CSS и препроцессоры",methodology:"Методология",react:"React",type_script:"TypeScript",java_script:"JavaScript",oop:"ООП",testing:"Тестирование",web:"Web"},rp=ve.memo(({setWindowContentName:e,setIsActiveMenu:t})=>{const n=r=>{r.target.tagName==="BUTTON"&&(e(r.target.id),t(!1))};return D.jsx("div",{className:Xi.dropDown,children:D.jsx("ul",{className:Xi.dropDown_list,onClick:n,children:np.map(r=>D.jsx("li",{children:D.jsx(cc,{text:Bo[r],id:r,position:"menu"})},Bo[r]))})})}),lp=ve.memo(({setWindowContentName:e,setIsActiveMenu:t})=>D.jsx("div",{className:Ki.menu_nav,children:D.jsx("ul",{className:Ki.menu_nav_list,children:D.jsx(rp,{setWindowContentName:e,setIsActiveMenu:t})})})),op="_list_ques_1pdob_1",up="_window_content__answer_1pdob_5",ip="_window_content_1pdob_5",sp="_window_content__text_1pdob_20",ap="_title_page_1pdob_30",cp="_input_search_1pdob_36",fp="_input_search_input_1pdob_41",dp="_not_matches_1pdob_53",pp="_button_back_1pdob_58",Fe={list_ques:op,window_content__answer:up,window_content:ip,window_content__text:sp,title_page:ap,input_search:cp,input_search_input:fp,not_matches:dp,button_back:pp},mp=(e,t)=>{const n=e.toLowerCase().trim(),r=[];for(let[l,o]of Object.entries(t))for(let[u,i]of Object.entries(o))JSON.stringify(i).toLowerCase().indexOf(n)!=-1&&r.push([u,i,l]);return r},vp=(e,t=300)=>{let n=null;return(...r)=>{window.clearTimeout(n),n=setTimeout(()=>{e(...r)},t)}};function hp({windowContentName:e,setIsActiveMenu:t,setWindowContentName:n}){const[r,l]=ve.useState(null),[o,u]=ve.useState(""),[i,s]=ve.useState(0),f=vp(g=>{if(g.target){const S=g.target.value.trim().toLowerCase();u(S)}},800),v=()=>{l(null),t(!1),setTimeout(()=>window.scrollTo(0,i),0)},m=ve.useMemo(()=>{const g=w=>{const O=w.target.parentElement.getAttribute("data-name");if(O&&n(O),w.target.id){s(window.scrollY);const c=w.target.id;l(c),window.scrollTo(0,0)}},S=o?mp(o,Dr):Object.entries(Dr[e]);return D.jsx(kr.Fragment,{children:S.length>0?D.jsx("ol",{className:Fe.list_ques,onClick:g,children:S.map((w,O)=>{var c;return D.jsx("li",{"data-name":w[2]?w[2]:"",children:D.jsx(cc,{id:w[0],text:(c=w[1])==null?void 0:c.ques})},w[0]+O)})}):D.jsx("div",{className:Fe.not_matches,children:"Совпадений не найдено"})})},[e,o]),p=ve.useMemo(()=>{var S;const g=Dr[e];if(r)return D.jsxs("article",{className:Fe.window_content__answer,children:[D.jsx("h1",{children:(S=g==null?void 0:g[r])==null?void 0:S.ques}),D.jsx("div",{className:Fe.window_content__text,children:D.jsx("p",{children:g==null?void 0:g[r].result})})]})},[e,r]);return D.jsxs("div",{className:Fe.window_content,children:[!r&&D.jsxs(kr.Fragment,{children:[D.jsx("div",{className:Fe.input_search,children:D.jsx("input",{className:Fe.input_search_input,type:"text",onChange:f,placeholder:"Поиск по содержимому всех тем"})}),D.jsx("h1",{className:Fe.title_page,children:Bo[e]})]}),r?D.jsxs(kr.Fragment,{children:[D.jsx("button",{className:Fe.button_back,onClick:v,children:"BACK"}),p]}):m]})}function yp(){const[e,t]=ve.useState(""),[n,r]=ve.useState(!0),l=()=>{r(!0),t("")};return D.jsx("main",{children:D.jsxs("div",{className:Gi.wrapper,children:[D.jsx("button",{onClick:l,className:Gi.open_menu,children:"MENU"}),!!e&&D.jsx(hp,{windowContentName:e,setWindowContentName:t,setIsActiveMenu:r}),n&&D.jsx(lp,{setWindowContentName:t,setIsActiveMenu:r})]})})}Kl.createRoot(document.getElementById("root")).render(D.jsx(kr.StrictMode,{children:D.jsx(yp,{})}));

(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{275:function(e,t,r){const i=r(22),s=r(81),{c1:n,namedNode:o,$_PREFIX_CACHE:u}=i,a=/[&"<>']/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"},h=/^xml/i,c=e=>e.replace(a,e=>l[e]),p=/([A-Za-z_][A-Za-z_.0-9-]*)$/,f=/([A-Za-z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}][A-Za-z_.0-9\-\u00b7\u203f-\u2040\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]*$)/u;function _(e,t,r,i){if(i.isNamedNode)r+=' rdf:resource="'+c(i.value)+'"/>';else if(i.isLiteral)i.isLanguaged?r+=' xml:lang="'+i.language+'"':i.isDatatyped&&(r+=' rdf:datatype="'+c(i.datatype.value)+'"'),r+=">"+c(i.value)+"</"+t+">";else{if(!i.isBlankNode)throw new Error(`Not allowed to serialize term type '${i.termType}' as object in XML serializer.`);r+=' rdf:nodeID="'+c(i.value)+'"/>'}return r}function d(e,t){let r,i,s,n,o=e._h_prefixes,a=t.value;{let e=p.exec(a);if(e)r=a.slice(0,e.index),i=e[1];else{if(e=f.exec(a),!e)throw new Error(`Cannot serialize predicate <${a}> into an XML qname`);r=a.slice(0,e.index),i=e[1]}}e:for(;;){t:for(;;){if(o[u]){let e=o[u]._h_inverse;if(r in e){let t=e[r];s=(t?t+":":"")+i,n="<"+s;break e}break}for(let e in o){if(o[e]===r){s=(e?e+":":"")+i,n="<"+s;break t}}break}let t="__g"+e._c_prefixes_tmp++;s=t+":"+i,n="<"+s+" xmlns:"+t+'="'+r+'"';break}return[s,n]}class b extends s{constructor(e={}){let t=e.prefixes;delete e.prefixes,super(e),this._b_prefixes_open=!0,this._c_prefixes_tmp=0,this._kt_subject=null;let r='<?xml version="1.0" encoding="utf-8"?>\n<rdf:RDF\n\txmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"';this._update_prefixes({rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#"}),t?this.push(r+this._serialize_prefixes(t)):this.push(r)}_serialize_prefixes(e,t=!1){if(!this._b_prefixes_open)return;let r=this._h_prefixes,i="";for(let s in e)if(s in r){if(e[s]!==r[s]||t)throw new Error(`Cannot change prefixes in RDF/XML serializer. Attempted to modify '${s}' from <${r[s]}> to <${e[s]}>`)}else{if(h.test(s))throw new Error(`Cannot serialize prefix '${s}' since it is reserved under the blanket XML namespace.`);i+=`\n\txmlns${s?":"+s:""}="${o(e[s]).value}"`}return i&&this._update_prefixes(e,!0),i}_serialize_c3r(e){let t="";this._b_prefixes_open&&(t+=">",this._b_prefixes_open=!1);let r=this._h_prefixes;null!==this._kt_subject&&(t+="\n\t</rdf:Description>",this._kt_subject=null);for(let i in e){let s="",o=n(i,r);if(!o.termType)continue;if(!o.isNamedNode&&!o.isBlankNode)throw new Error(`Cannot use ${o.termType} term type in subject position`);if(o.isNamedNode)s+='\n\n\t<rdf:Description rdf:about="'+c(o.value)+'">';else{if(!o.isBlankNode)throw new Error(`Not allowed to serialize term type '${o.termType}' as subject in XML serializer.`);s+='\n\n\t<rdf:Description rdf:nodeID="'+c(o.value)+'">'}let u=!1,a=e[i];for(let e in a){let t=n(e,r);if(!t.termType)continue;if(!t.isNamedNode)throw new Error(`Cannot use ${t.termType} term type in subject position`);let[i,o]=d(this,t),l="";for(let t of a[e]){let e=n(t,r);e.termType&&(l+="\n\t\t"+_(0,i,o,e))}l&&(s+=l,u=!0)}u&&(t+=s+"\n\t</rdf:Description>")}return t}_serialize_quad(e){let t=i.from.quad(e);this._b_prefixes_open&&(this._s_push+=">",this._b_prefixes_open=!1);let{subject:r,predicate:s,object:n}=t,[o,u]=d(this,s),a="\n\t\t"+_(0,o,u,n);if(r.equals(this._kt_subject))this._s_push+=a;else{if(!r.isNamedNode&&!r.isBlankNode)throw new Error(`Cannot use ${r.termType} term type in subject position`);let e;if(r.isNamedNode)e='\n\n\t<rdf:Description rdf:about="'+c(r.value)+'">'+a;else{if(!r.isBlankNode)throw new Error(`Not allowed to serialize term type '${r.termType}' as subject in XML serializer.`);e='\n\n\t<rdf:Description rdf:nodeID="'+c(r.value)+'">'+a}this._kt_subject?this._s_push+="\n\t</rdf:Description>"+e:this._s_push+=e,this._kt_subject=r}}_flush(){b._flush_buffer(this),this._b_prefixes_open&&(this.push(">"),this._b_prefixes_open=!1),this._kt_subject?this.push("\n\t</rdf:Description>\n</rdf:RDF>\n"):this.push("\n</rdf:RDF>\n"),this.push(null)}}Object.assign(b,{_serialize_comment:s.prototype._serialize_hash_comment}),e.exports=function(e){return new b(e)}},28:function(e,t,r){(function(t,i){function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=r(11);class a extends u.Readable{constructor(e={}){if(super(e),e.iterator)throw new Error("readable stream iterator shortcut not yet implemented")}until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}bucket(e="utf8"){return this._readableState.objectMode?new Promise((e,t)=>{let r=[];this.pipe(new u.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(r)})}):"utf8"===e||"utf-8"===e?new Promise((t,r)=>{let i="";this.setEncoding(e),this.pipe(new u.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",e=>{r(e)}).on("finish",()=>{t(i)})}):"buffer"===e?new Promise((e,r)=>{let i=t.from([]);this.pipe(new u.Writable({decodeStrings:!0,write(e,r,s){i=t.concat([i,e],i.length+e.length),s()}})).on("error",e=>{r(e)}).on("finish",()=>{e(i)})}):void 0}}class l extends u.Writable{until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}import(e){return e.on("data",e=>this.write(e)).on("end",()=>this.end()).on("error",e=>this.emit("error",e)),this}}class h extends u.Duplex{until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}bucket(e="utf8"){return this._readableState.objectMode?new Promise((e,t)=>{let r=[];this.pipe(new u.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(r)})}):"utf8"===e||"utf-8"===e?new Promise((t,r)=>{let i="";this.setEncoding(e),this.pipe(new u.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",e=>{r(e)}).on("finish",()=>{t(i)})}):"buffer"===e?new Promise((e,r)=>{let i=t.from([]);this.pipe(new u.Writable({decodeStrings:!0,write(e,r,s){i=t.concat([i,e],i.length+e.length),s()}})).on("error",e=>{r(e)}).on("finish",()=>{e(i)})}):void 0}}class c extends u.Transform{until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}bucket(e="utf8"){return this._readableState.objectMode?new Promise((e,t)=>{let r=[];this.pipe(new u.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(r)})}):"utf8"===e||"utf-8"===e?new Promise((t,r)=>{let i="";this.setEncoding(e),this.pipe(new u.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",e=>{r(e)}).on("finish",()=>{t(i)})}):"buffer"===e?new Promise((e,r)=>{let i=t.from([]);this.pipe(new u.Writable({decodeStrings:!0,write(e,r,s){i=t.concat([i,e],i.length+e.length),s()}})).on("error",e=>{r(e)}).on("finish",()=>{e(i)})}):void 0}import(e){return e.on("data",e=>this.write(e)).on("end",()=>this.end()).on("error",e=>this.emit("error",e)),this}demolish(e){if(this.push=e=>{if(null!==e)throw new Error("[ERR_STREAM_DESTROYED]: Cannot push after stream was destroyed")},this.emit=function(e,...t){"end"!==e&&Object.getPrototypeOf(this).emit.apply(this,[e,...t])},e)return u.Transform.prototype.destroy.call(this,e)}}const p=new Function("try {return this===global;}catch(e){return false;}")(),[f,_]=void 0===i?[!0,!1]:i.browser?[!0,!0]:"undefined"===i.versions||"undefined"===i.versions.node?[!0,!1]:[!1,!1];(_||p&&+/^v(\d+)/.exec(i.version)[1]<10)&&(c.prototype.destroy=h.prototype.destroy=function(e,t){this._readableState.destroyed=!0,this._writableState.destroyed=!0;let r=()=>{this._writableState.emitClose&&this._readableState.emitClose&&this.emit("close")};return this._destroy(e||null,e=>{!t&&e?(i.nextTick(()=>{this.emit("error",e),r()}),this._writableState.errorEmitted=!0):(i.nextTick(r),t&&t(e))}),this},c.prototype._destroy=h.prototype._destroy=(e,t)=>t(e));class d extends c{constructor(e={}){super(n(n({},e),{},{writableObjectMode:!0,readableObjectMode:!0})),this._as_inputs=new Set,this.on("pipe",e=>{this._as_inputs.add(e),e.on("prefix",(...e)=>{this.emit("prefix",...e)}).on("comment",(...e)=>{this.emit("comment",...e)})}),this.on("unpipe",e=>{this._as_inputs.delete(e)})}_destroy(){for(let e of this._as_inputs)e.destroy()}}class b extends d{_transform(e,t,r){r(null,JSON.stringify(e.isolate())+"\n")}}class w extends d{_transform(e,t,r){r(null,{type:"quad",value:e})}}c.QuadsToOther=d,e.exports=n(n({},u),{},{Readable:a,Writable:l,Duplex:h,Transform:c,QuadsToOther:d,quads_to_json:()=>new b,quads_to_writable:()=>new w,source:(e,r=null)=>(r||"string"!=typeof e||(r="utf8"),new a({objectMode:!r&&"string"!=typeof e&&!t.isBuffer(e),read(){this.push(e,r),this.push(null)}}))})}).call(this,r(12).Buffer,r(13))},81:function(e,t,r){function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}if("function"!=typeof queueMicrotask){let e=Promise.resolve();try{queueMicrotask=t=>e.then(t).catch(e=>setTimeout(()=>{throw e},0))}catch(e){}}const o=r(22),u=r(28);class a extends u.Transform{static _flush_buffer(e){e._s_push&&(e.push(e._s_push),e._s_push="")}constructor(e={}){super({writableObjectMode:!0,readableObjectMode:!1});let{prefixes:t={}}=e;this._s_push="",this._n_max_buffer=e.max_buffer||e.maxBuffer||32768,this._h_prefixes=o.cache_prefixes(t||{}),this.on("pipe",e=>{e.on("prefix",(e,t)=>{this.write({type:"prefixes",value:{[e]:t}})}),e.on("comment",e=>{this.write({type:"comment",value:e})})}),e.close&&this.once("close",e.close),e.drain&&this.on("drain",e.drain),e.error&&this.on("error",e.error),e.finish&&this.once("finish",e.finish),e.data&&this.on("data",e.data),e.end&&this.once("end",e.end),e.warning&&this.on("warning",e.warning)}_serialize_hash_comment(e){return"# "+e.replace(/\n/g,"\n# ")+"\n"}_serialize_newlines(e=1){return"\n".repeat(e)}_serialize_c4r(e){let t=this._h_prefixes,r=[],i="";for(let t in e)"*"!==t&&r.push(t),i+=this._serialize_c3r(e[t]);if(r.length){let e="Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: "+r.map(e=>o.c1(e,t).verbose()).join(", ");this.emit("warning",e)||console.warn(e)}return i}_serialize_c3(){throw new Error("Write event type 'c3' not supported by "+this.constructor.name)}_serialize_c4(){throw new Error("Write event type 'c4' not supported by "+this.constructor.name)}_serialize_c3r(){throw new Error("Write event type 'c3r' should have been implemented by subclass "+this.constructor.name)}_serialize_quad(){throw new Error("Write event type 'quad' should have been implemented by subclass "+this.constructor.name)}_serialize_comment(){}_update_prefixes(e,t=!1){let r=s(s({},this._h_prefixes),e);this._h_prefixes=o.cachePrefixes(r||{},t)}_transform(e,t,r){let i;try{i=this.serialize(e)}catch(e){return r(e),e}if(i)a._flush_buffer(this),this.push(i);else{let e=this._s_push.length;e>this._n_max_buffer?a._flush_buffer(this):e&&queueMicrotask(()=>a._flush_buffer(this))}r()}_queue(e){this._s_push+=e,this._s_push.length>this._n_max_buffer?a._flush_buffer(this):queueMicrotask(()=>a._flush_buffer(this))}serialize(e){switch(e.type){case void 0:return this._serialize_quad(e);case"c3r":return this._serialize_c3r(e.value);case"c4r":return this._serialize_c4r(e.value);case"array":{let t="";for(let r of e.value){let e=this.serialize(r);e?t+=e:this._s_push&&(t+=this._s_push,this._s_push="")}return t}case"quad":return this._serialize_quad(e.value);case"c3":return this._serialize_c3(e.value);case"c4":return this._serialize_c4(e.value);case"prefixes":return this._serialize_prefixes(e.value);case"comment":return this._serialize_comment(e.value);case"newline":case"newlines":return this._serialize_newlines(e.value);default:throw new Error(`no such writable data event type for RDF stream: '${e.type}'`)}}rinse(){this._reset(),a._flush_buffer(this)}_flush(){a._flush_buffer(this),this.push(null)}}Object.assign(a.prototype,{isGraphyWritable:!0,_serialize_prefixes:a.prototype._update_prefixes}),e.exports=a}}]);
//# sourceMappingURL=8872c2b9126ac743092e.js.map
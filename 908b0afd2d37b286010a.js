(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,r){const i=r(22),s=r(81),n=/^`\[[^\]]+\](.*)$/,o=new Map([[Date,e=>i.dateTime(e)],[Number,e=>i.number(e)]]);e.exports=class extends s{constructor(e={}){super(e);let{lists:t=null}=e,r=o;if(e.coercions){r=new Map(r);for(let[t,i]of e.coercions)r.set(t,i)}let i={first:">http://www.w3.org/1999/02/22-rdf-syntax-ns#first",rest:">http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",nil:">http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"};if(t){let{first:e=null,rest:r=null,nil:s=null}=t;e&&(i.first=e),r&&(i.rest=r),s&&(i.nil=s)}Object.assign(this,{_xc_state:0,_hm_coercions:r,_g_lists:i})}_serialize_comment(e,t){let r="";if(2!==this._xc_state&&(r+="\n",this._xc_state=2),t&&t.width){let r=t.width,i=[];for(;e.length>r;){let t=e.slice(0,r+1),s=/^(.*[^\s])\s+/.exec(t);if(s){let t=s[1];i.push(t),e=e.slice(t.length).replace(/^\s+/,"")}else i.push(e.slice(0,r)),e=e.slice(r)}e=i.join("\n")}return r+(super._serialize_comment(e)||"")}_transcode_list(e,t=this._g_lists){if(e.length){let r=e[0],i=r;return Array.isArray(r)&&(i=this._transcode_list(r,t)),{[t.first]:i,[t.rest]:1===e.length?t.nil:this._transcode_list(e.slice(1),t)}}return t.nil}_apply_directive(e,t){let r,i=n.exec(e);if(!i)throw new Error(`Invalid writable data event directive string: "${e}"`);try{r=JSON.parse(i[1])}catch(e){throw new Error(`Unable to parse JSON in writable data event directive: "${i[1]}"`)}let s=r.type;switch(s){case"comment":if(this._serialize_comment)return{write:this._serialize_comment(t+"",r)};break;case"newlines":if(this._serialize_newlines)return{write:this._serialize_newlines(t)};break;case"config":switch(r.value){case"lists":{let e=this._a_list_serializers;e.push(this._serialize_list_object);let r=this._g_lists,i={first:t.first||r.first,rest:t.rest||r.rest,nil:t.nil||r.nil};return this._serialize_list_object=function(e,t){let r=this._transcode_list(e,i);return this._encode_objects(r,t)},{exit:()=>{this._serialize_list_object=e.pop()}}}default:throw new Error(`No such config key '${r.value}'`)}default:throw new Error(`Invalid writable data event directive type: '${s}'`)}return{}}_serialize_c4(e){let t=this._h_prefixes,r=[],s="";for(let t in e)"*"!==t&&r.push(t),s+=this._serialize_c3(e[t]);if(r.length){let e="Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: "+r.map(e=>i.c1(e,t).verbose()).join(", ");this.emit("warning",e)||console.warn(e)}return s}}},28:function(e,t,r){(function(t,i){function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(11);class l extends a.Readable{constructor(e={}){if(super(e),e.iterator)throw new Error("readable stream iterator shortcut not yet implemented")}until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}bucket(e="utf8"){return this._readableState.objectMode?new Promise((e,t)=>{let r=[];this.pipe(new a.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(r)})}):"utf8"===e||"utf-8"===e?new Promise((t,r)=>{let i="";this.setEncoding(e),this.pipe(new a.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",e=>{r(e)}).on("finish",()=>{t(i)})}):"buffer"===e?new Promise((e,r)=>{let i=t.from([]);this.pipe(new a.Writable({decodeStrings:!0,write(e,r,s){i=t.concat([i,e],i.length+e.length),s()}})).on("error",e=>{r(e)}).on("finish",()=>{e(i)})}):void 0}}class h extends a.Writable{until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}import(e){return e.on("data",e=>this.write(e)).on("end",()=>this.end()).on("error",e=>this.emit("error",e)),this}}class c extends a.Duplex{until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}bucket(e="utf8"){return this._readableState.objectMode?new Promise((e,t)=>{let r=[];this.pipe(new a.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(r)})}):"utf8"===e||"utf-8"===e?new Promise((t,r)=>{let i="";this.setEncoding(e),this.pipe(new a.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",e=>{r(e)}).on("finish",()=>{t(i)})}):"buffer"===e?new Promise((e,r)=>{let i=t.from([]);this.pipe(new a.Writable({decodeStrings:!0,write(e,r,s){i=t.concat([i,e],i.length+e.length),s()}})).on("error",e=>{r(e)}).on("finish",()=>{e(i)})}):void 0}}class u extends a.Transform{until(e,t){return new Promise((r,i)=>{this.on("error",e=>{i(e)}),t?this.once(e,(...e)=>{r(this,...e)}):this.once(e,r)})}bucket(e="utf8"){return this._readableState.objectMode?new Promise((e,t)=>{let r=[];this.pipe(new a.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",e=>{t(e)}).on("finish",()=>{e(r)})}):"utf8"===e||"utf-8"===e?new Promise((t,r)=>{let i="";this.setEncoding(e),this.pipe(new a.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",e=>{r(e)}).on("finish",()=>{t(i)})}):"buffer"===e?new Promise((e,r)=>{let i=t.from([]);this.pipe(new a.Writable({decodeStrings:!0,write(e,r,s){i=t.concat([i,e],i.length+e.length),s()}})).on("error",e=>{r(e)}).on("finish",()=>{e(i)})}):void 0}import(e){return e.on("data",e=>this.write(e)).on("end",()=>this.end()).on("error",e=>this.emit("error",e)),this}demolish(e){if(this.push=e=>{if(null!==e)throw new Error("[ERR_STREAM_DESTROYED]: Cannot push after stream was destroyed")},this.emit=function(e,...t){"end"!==e&&Object.getPrototypeOf(this).emit.apply(this,[e,...t])},e)return a.Transform.prototype.destroy.call(this,e)}}const p=new Function("try {return this===global;}catch(e){return false;}")(),[f,_]=void 0===i?[!0,!1]:i.browser?[!0,!0]:"undefined"===i.versions||"undefined"===i.versions.node?[!0,!1]:[!1,!1];(_||p&&+/^v(\d+)/.exec(i.version)[1]<10)&&(u.prototype.destroy=c.prototype.destroy=function(e,t){this._readableState.destroyed=!0,this._writableState.destroyed=!0;let r=()=>{this._writableState.emitClose&&this._readableState.emitClose&&this.emit("close")};return this._destroy(e||null,e=>{!t&&e?(i.nextTick(()=>{this.emit("error",e),r()}),this._writableState.errorEmitted=!0):(i.nextTick(r),t&&t(e))}),this},u.prototype._destroy=c.prototype._destroy=(e,t)=>t(e));class d extends u{constructor(e={}){super(n(n({},e),{},{writableObjectMode:!0,readableObjectMode:!0})),this._as_inputs=new Set,this.on("pipe",e=>{this._as_inputs.add(e),e.on("prefix",(...e)=>{this.emit("prefix",...e)}).on("comment",(...e)=>{this.emit("comment",...e)})}),this.on("unpipe",e=>{this._as_inputs.delete(e)})}_destroy(){for(let e of this._as_inputs)e.destroy()}}class w extends d{_transform(e,t,r){r(null,JSON.stringify(e.isolate())+"\n")}}class b extends d{_transform(e,t,r){r(null,{type:"quad",value:e})}}u.QuadsToOther=d,e.exports=n(n({},a),{},{Readable:l,Writable:h,Duplex:c,Transform:u,QuadsToOther:d,quads_to_json:()=>new w,quads_to_writable:()=>new b,source:(e,r=null)=>(r||"string"!=typeof e||(r="utf8"),new l({objectMode:!r&&"string"!=typeof e&&!t.isBuffer(e),read(){this.push(e,r),this.push(null)}}))})}).call(this,r(12).Buffer,r(13))},81:function(e,t,r){function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}if("function"!=typeof queueMicrotask){let e=Promise.resolve();try{queueMicrotask=t=>e.then(t).catch(e=>setTimeout(()=>{throw e},0))}catch(e){}}const o=r(22),a=r(28);class l extends a.Transform{static _flush_buffer(e){e._s_push&&(e.push(e._s_push),e._s_push="")}constructor(e={}){super({writableObjectMode:!0,readableObjectMode:!1});let{prefixes:t={}}=e;this._s_push="",this._n_max_buffer=e.max_buffer||e.maxBuffer||32768,this._h_prefixes=o.cache_prefixes(t||{}),this.on("pipe",e=>{e.on("prefix",(e,t)=>{this.write({type:"prefixes",value:{[e]:t}})}),e.on("comment",e=>{this.write({type:"comment",value:e})})}),e.close&&this.once("close",e.close),e.drain&&this.on("drain",e.drain),e.error&&this.on("error",e.error),e.finish&&this.once("finish",e.finish),e.data&&this.on("data",e.data),e.end&&this.once("end",e.end),e.warning&&this.on("warning",e.warning)}_serialize_hash_comment(e){return"# "+e.replace(/\n/g,"\n# ")+"\n"}_serialize_newlines(e=1){return"\n".repeat(e)}_serialize_c4r(e){let t=this._h_prefixes,r=[],i="";for(let t in e)"*"!==t&&r.push(t),i+=this._serialize_c3r(e[t]);if(r.length){let e="Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: "+r.map(e=>o.c1(e,t).verbose()).join(", ");this.emit("warning",e)||console.warn(e)}return i}_serialize_c3(){throw new Error("Write event type 'c3' not supported by "+this.constructor.name)}_serialize_c4(){throw new Error("Write event type 'c4' not supported by "+this.constructor.name)}_serialize_c3r(){throw new Error("Write event type 'c3r' should have been implemented by subclass "+this.constructor.name)}_serialize_quad(){throw new Error("Write event type 'quad' should have been implemented by subclass "+this.constructor.name)}_serialize_comment(){}_update_prefixes(e,t=!1){let r=s(s({},this._h_prefixes),e);this._h_prefixes=o.cachePrefixes(r||{},t)}_transform(e,t,r){let i;try{i=this.serialize(e)}catch(e){return r(e),e}if(i)l._flush_buffer(this),this.push(i);else{let e=this._s_push.length;e>this._n_max_buffer?l._flush_buffer(this):e&&queueMicrotask(()=>l._flush_buffer(this))}r()}_queue(e){this._s_push+=e,this._s_push.length>this._n_max_buffer?l._flush_buffer(this):queueMicrotask(()=>l._flush_buffer(this))}serialize(e){switch(e.type){case void 0:return this._serialize_quad(e);case"c3r":return this._serialize_c3r(e.value);case"c4r":return this._serialize_c4r(e.value);case"array":{let t="";for(let r of e.value){let e=this.serialize(r);e?t+=e:this._s_push&&(t+=this._s_push,this._s_push="")}return t}case"quad":return this._serialize_quad(e.value);case"c3":return this._serialize_c3(e.value);case"c4":return this._serialize_c4(e.value);case"prefixes":return this._serialize_prefixes(e.value);case"comment":return this._serialize_comment(e.value);case"newline":case"newlines":return this._serialize_newlines(e.value);default:throw new Error(`no such writable data event type for RDF stream: '${e.type}'`)}}rinse(){this._reset(),l._flush_buffer(this)}_flush(){l._flush_buffer(this),this.push(null)}}Object.assign(l.prototype,{isGraphyWritable:!0,_serialize_prefixes:l.prototype._update_prefixes}),e.exports=l}}]);
//# sourceMappingURL=908b0afd2d37b286010a.js.map
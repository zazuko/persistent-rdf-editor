(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{25:function(e,t){e.exports=class{constructor(e,t){this.Impl=e,this.options=t}import(e,t){const s=new this.Impl(e,Object.assign({},this.options,t));return e.on("end",()=>{s.readable||s.emit("end")}),e.on("error",e=>{s.emit("error",e)}),s}}},254:function(e,t,s){const r=s(11),a=s(255),n=s(256);class o extends r{constructor(e,{encoding:t="object"}={}){if(super({objectMode:!0,read:()=>{}}),"object"===t&&(this.encoder=new a(this)),"string"===t&&(this.encoder=new n(this)),!this.encoder)throw new Error("unknown encoding: "+t);e.on("data",e=>{const t={};let s=t;"DefaultGraph"!==e.graph.termType&&(t["@id"]=e.graph.value,t["@graph"]={},s=t["@graph"]),s["@id"]=o.subjectValue(e.subject),"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"===e.predicate.value?s["@type"]=o.subjectValue(e.object):s[e.predicate.value]=o.objectValue(e.object),this.encoder.push(t)}),e.on("end",()=>this.encoder.end()),e.on("error",e=>this.emit("error",e))}static subjectValue(e){return"BlankNode"===e.termType?"_:"+e.value:e.value}static objectValue(e){return"NamedNode"===e.termType?{"@id":e.value}:"BlankNode"===e.termType?{"@id":"_:"+e.value}:e.language?{"@language":e.language,"@value":e.value}:e.datatype&&"http://www.w3.org/2001/XMLSchema#string"!==e.datatype.value?{"@type":e.datatype.value,"@value":e.value}:e.value}}e.exports=o},255:function(e,t){e.exports=class{constructor(e){this.stream=e,this.array=[]}push(e){this.array.push(e)}end(){this.stream.push(this.array),this.stream.push(null)}}},256:function(e,t){e.exports=class{constructor(e){this.stream=e,this.first=!0,this.stream.push("[")}push(e){this.first?this.first=!1:this.stream.push(","),this.stream.push(JSON.stringify(e))}end(){this.stream.push("]"),this.stream.push(null)}}},272:function(e,t,s){const r=s(254),a=s(25);e.exports=class extends a{constructor(e){super(r,e)}}}}]);
//# sourceMappingURL=c4745df577671630edc6.js.map
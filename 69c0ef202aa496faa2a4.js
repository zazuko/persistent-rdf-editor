(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(t,e){},134:function(t,e){},135:function(t,e){},136:function(t,e){},222:function(t,e,n){const r=n(126),a=n(127),o=n(72),s=n(11);class i extends s{constructor(t,{baseIRI:e="",context:n=null,factory:a=o}={}){super({objectMode:!0,read:()=>{}}),this.baseIRI=e,this.context=n,this.factory=a;const s=r({encoding:"string"},t=>{t?this.parse(t).then(()=>{this.push(null)}).catch(t=>{this.emit("error",t)}):this.push(null)});t.pipe(s),t.on("error",t=>{this.emit("error",t)})}term(t){switch(t.termType){case"NamedNode":return t.value.startsWith("null:/")?this.factory.namedNode(t.value.slice(6)):this.factory.namedNode(t.value);case"BlankNode":return this.factory.blankNode(t.value.substr(2));case"Literal":return this.factory.literal(t.value,t.language||this.factory.namedNode(t.datatype.value));case"DefaultGraph":return this.factory.defaultGraph();default:throw Error("unknown termType: "+t.termType)}}parse(t){return i.toPlainObject(t).then(t=>{"object"==typeof t["@context"]&&Object.keys(t["@context"]).forEach(e=>{this.emit("prefix",e,this.factory.namedNode(t["@context"][e]))});const e={base:this.baseIRI||"null:/"};return this.context&&(e.expandContext=this.context),a.promises.toRDF(t,e)}).then(t=>{t.forEach(t=>{this.push(this.factory.quad(this.term(t.subject),this.term(t.predicate),this.term(t.object),this.term(t.graph)))})})}static toPlainObject(t){return"string"==typeof t?new Promise((e,n)=>{try{e(JSON.parse(t))}catch(t){n(t)}}):"object"==typeof t?Promise.resolve(t):Promise.reject(new Error("unknown type"))}}t.exports=i},269:function(t,e,n){const r=n(222),a=n(25);t.exports=class extends a{constructor(t){super(r,t)}}},41:function(t,e){function n(){this.value=""}n.prototype.equals=function(t){return!!t&&t.termType===this.termType},n.prototype.termType="DefaultGraph",t.exports=n},42:function(t,e){function n(t){this.value=t}n.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value},n.prototype.termType="NamedNode",t.exports=n},72:function(t,e,n){var r=n(73);t.exports=r},73:function(t,e,n){var r=n(74),a=n(41),o=n(75),s=n(42),i=n(76),u=n(77);function p(){}p.namedNode=function(t){return new s(t)},p.blankNode=function(t){return new r(t)},p.literal=function(t,e){return"string"==typeof e?-1===e.indexOf(":")?new o(t,e):new o(t,null,p.namedNode(e)):new o(t,null,e)},p.defaultGraph=function(){return p.defaultGraphInstance},p.variable=function(t){return new u(t)},p.triple=function(t,e,n){return p.quad(t,e,n)},p.quad=function(t,e,n,r){return new i(t,e,n,r||p.defaultGraphInstance)},p.defaultGraphInstance=new a,t.exports=p},74:function(t,e){function n(t){this.value=t||"b"+ ++n.nextId}n.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value},n.prototype.termType="BlankNode",n.nextId=0,t.exports=n},75:function(t,e,n){var r=n(42);function a(t,e,n){this.value=t,this.datatype=a.stringDatatype,this.language="",e?(this.language=e,this.datatype=a.langStringDatatype):n&&(this.datatype=n)}a.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)},a.prototype.termType="Literal",a.langStringDatatype=new r("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),a.stringDatatype=new r("http://www.w3.org/2001/XMLSchema#string"),t.exports=a},76:function(t,e,n){var r=n(41);function a(t,e,n,a){this.subject=t,this.predicate=e,this.object=n,this.graph=a||new r}a.prototype.equals=function(t){return!!t&&("Quad"===t.termType||!t.termType)&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)},a.prototype.termType="Quad",a.prototype.value="",t.exports=a},77:function(t,e){function n(t){this.value=t}n.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value},n.prototype.termType="Variable",t.exports=n}}]);
//# sourceMappingURL=69c0ef202aa496faa2a4.js.map
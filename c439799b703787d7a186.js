(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{145:function(t,n,r){"use strict";r.r(n),r.d(n,"acl",(function(){return j})),r.d(n,"as",(function(){return P})),r.d(n,"cc",(function(){return N})),r.d(n,"cnt",(function(){return G})),r.d(n,"constant",(function(){return L})),r.d(n,"csvw",(function(){return M})),r.d(n,"ctag",(function(){return J})),r.d(n,"dash",(function(){return _})),r.d(n,"dbo",(function(){return B})),r.d(n,"dc11",(function(){return R})),r.d(n,"dcat",(function(){return A})),r.d(n,"dcterms",(function(){return H})),r.d(n,"discipline",(function(){return Q})),r.d(n,"doap",(function(){return W})),r.d(n,"dpv",(function(){return Z})),r.d(n,"dqv",(function(){return nt})),r.d(n,"dtype",(function(){return et})),r.d(n,"duv",(function(){return ut})),r.d(n,"earl",(function(){return wt})),r.d(n,"foaf",(function(){return dt})),r.d(n,"frbr",(function(){return at})),r.d(n,"geo",(function(){return ft})),r.d(n,"geof",(function(){return gt})),r.d(n,"geor",(function(){return vt})),r.d(n,"gml",(function(){return yt})),r.d(n,"gn",(function(){return qt})),r.d(n,"gr",(function(){return kt})),r.d(n,"grddl",(function(){return jt})),r.d(n,"gtfs",(function(){return Pt})),r.d(n,"http",(function(){return Nt})),r.d(n,"hydra",(function(){return Gt})),r.d(n,"ical",(function(){return Lt})),r.d(n,"ldp",(function(){return Mt})),r.d(n,"lvont",(function(){return Jt})),r.d(n,"ma",(function(){return _t})),r.d(n,"oa",(function(){return Bt})),r.d(n,"og",(function(){return Rt})),r.d(n,"org",(function(){return At})),r.d(n,"owl",(function(){return Ht})),r.d(n,"prefix",(function(){return Qt})),r.d(n,"prov",(function(){return Wt})),r.d(n,"qb",(function(){return Zt})),r.d(n,"qkdv",(function(){return nn})),r.d(n,"quantitykind",(function(){return en})),r.d(n,"qudt",(function(){return un})),r.d(n,"rdau",(function(){return wn})),r.d(n,"rdf",(function(){return sn})),r.d(n,"rdfa",(function(){return pn})),r.d(n,"rdfs",(function(){return hn})),r.d(n,"rev",(function(){return ln})),r.d(n,"rico",(function(){return mn})),r.d(n,"rif",(function(){return bn})),r.d(n,"rr",(function(){return xn})),r.d(n,"rss",(function(){return On})),r.d(n,"schema",(function(){return Tn})),r.d(n,"sd",(function(){return Dn})),r.d(n,"sdmx",(function(){return Sn})),r.d(n,"sem",(function(){return In})),r.d(n,"sf",(function(){return En})),r.d(n,"sh",(function(){return Xn})),r.d(n,"shex",(function(){return $n})),r.d(n,"sioc",(function(){return zn})),r.d(n,"skos",(function(){return Cn})),r.d(n,"skosxl",(function(){return Vn})),r.d(n,"sosa",(function(){return Fn})),r.d(n,"sou",(function(){return Kn})),r.d(n,"ssn",(function(){return Un})),r.d(n,"test",(function(){return Yn})),r.d(n,"time",(function(){return tr})),r.d(n,"unit",(function(){return rr})),r.d(n,"v",(function(){return or})),r.d(n,"vaem",(function(){return cr})),r.d(n,"vann",(function(){return ir})),r.d(n,"vcard",(function(){return sr})),r.d(n,"_void",(function(){return pr})),r.d(n,"vs",(function(){return hr})),r.d(n,"wdr",(function(){return lr})),r.d(n,"wdrs",(function(){return mr})),r.d(n,"wgs",(function(){return br})),r.d(n,"xhv",(function(){return xr})),r.d(n,"xkos",(function(){return Or})),r.d(n,"xml",(function(){return Tr})),r.d(n,"xsd",(function(){return Dr}));var e={};r.r(e),r.d(e,"namedNode",(function(){return a})),r.d(e,"defaultGraphInstance",(function(){return p})),r.d(e,"blankNode",(function(){return f})),r.d(e,"literal",(function(){return h})),r.d(e,"defaultGraph",(function(){return g})),r.d(e,"variable",(function(){return l})),r.d(e,"quad",(function(){return v})),r.d(e,"triple",(function(){return m}));var o={};r.r(o),r.d(o,"namedNode",(function(){return a})),r.d(o,"defaultGraphInstance",(function(){return p})),r.d(o,"blankNode",(function(){return f})),r.d(o,"literal",(function(){return h})),r.d(o,"defaultGraph",(function(){return g})),r.d(o,"variable",(function(){return l})),r.d(o,"quad",(function(){return v})),r.d(o,"triple",(function(){return m})),r.d(o,"default",(function(){return q}));class u{constructor(t){this.value=t||"b"+ ++u.nextId}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}get termType(){return"BlankNode"}}u.nextId=0;class c{get value(){return""}equals(t){return!!t&&t.termType===this.termType}get termType(){return"DefaultGraph"}}class w{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}get termType(){return"NamedNode"}}class i{constructor(t,n,r){this.value=t,this.datatype=i.stringDatatype,this.language="",n?(this.language=n,this.datatype=i.langStringDatatype):r&&(this.datatype=r)}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)}get termType(){return"Literal"}}i.langStringDatatype=new w("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),i.stringDatatype=new w("http://www.w3.org/2001/XMLSchema#string");class d{constructor(t,n,r,e){this.subject=t,this.predicate=n,this.object=r,this.graph=e||new c}equals(t){return!!t&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)}}class s{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}get termType(){return"Variable"}}function a(t){return new w(t)}const p=new c;function f(t){return new u(t)}function h(t,n){return"string"==typeof n?-1===n.indexOf(":")?new i(t,n):new i(t,null,a(n)):new i(t,null,n)}function g(){return p}function l(t){return new s(t)}function v(t,n,r,e){return new d(t,n,r,e||p)}function m(t,n,r){return v(t,n,r)}function y(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function b(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var q=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){b(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({},e);const x={apply:(t,n,r)=>t(r[0]),get:(t,n)=>t(n)};function k(t,{factory:n=o}={}){const r=(r="")=>n.namedNode(`${t}${r.raw||r}`);return"undefined"==typeof Proxy?r:new Proxy(r,x)}const O=k("http://www.w3.org/ns/auth/acl#"),j=O,T=k("https://www.w3.org/ns/activitystreams#"),P=T,D=k("http://creativecommons.org/ns#"),N=D,S=k("http://www.w3.org/2011/content#"),G=S,I=k("http://qudt.org/vocab/constant/"),L=I,E=k("http://www.w3.org/ns/csvw#"),M=E,X=k("http://commontag.org/ns#"),J=X,$=k("http://datashapes.org/dash#"),_=$,z=k("http://dbpedia.org/ontology/"),B=z,C=k("http://purl.org/dc/elements/1.1/"),R=C,V=k("http://www.w3.org/ns/dcat#"),A=V,F=k("http://purl.org/dc/terms/"),H=F,K=k("http://qudt.org/vocab/discipline/"),Q=K,U=k("http://usefulinc.com/ns/doap#"),W=U,Y=k("http://www.w3.org/ns/dpv#"),Z=Y,tt=k("http://www.w3.org/ns/dqv#"),nt=tt,rt=k("http://www.linkedmodel.org/schema/dtype#"),et=rt,ot=k("http://www.w3.org/ns/duv#"),ut=ot,ct=k("https://www.w3.org/ns/earl#"),wt=ct,it=k("http://xmlns.com/foaf/0.1/"),dt=it,st=k("http://purl.org/vocab/frbr/core#"),at=st,pt=k("http://www.opengis.net/ont/geosparql#"),ft=pt,ht=k("http://www.opengis.net/def/function/geosparql/"),gt=ht,lt=k("http://www.opengis.net/def/rule/geosparql/"),vt=lt,mt=k("http://www.opengis.net/ont/gml#"),yt=mt,bt=k("http://www.geonames.org/ontology#"),qt=bt,xt=k("http://purl.org/goodrelations/v1#"),kt=xt,Ot=k("http://www.w3.org/2003/g/data-view#"),jt=Ot,Tt=k("http://vocab.gtfs.org/terms#"),Pt=Tt,Dt=k("http://www.w3.org/2011/http#"),Nt=Dt,St=k("http://www.w3.org/ns/hydra/core#"),Gt=St,It=k("http://www.w3.org/2002/12/cal/icaltzd#"),Lt=It,Et=k("http://www.w3.org/ns/ldp#"),Mt=Et,Xt=k("http://lexvo.org/ontology#"),Jt=Xt,$t=k("http://www.w3.org/ns/ma-ont#"),_t=$t,zt=k("http://www.w3.org/ns/oa#"),Bt=zt,Ct=k("http://ogp.me/ns#"),Rt=Ct,Vt=k("http://www.w3.org/ns/org#"),At=Vt,Ft=k("http://www.w3.org/2002/07/owl#"),Ht=Ft,Kt=k("http://qudt.org/vocab/prefix/"),Qt=Kt,Ut=k("http://www.w3.org/ns/prov#"),Wt=Ut,Yt=k("http://purl.org/linked-data/cube#"),Zt=Yt,tn=k("http://qudt.org/vocab/dimensionvector/"),nn=tn,rn=k("http://qudt.org/vocab/quantitykind/"),en=rn,on=k("http://qudt.org/schema/qudt/"),un=on,cn=k("http://rdaregistry.info/Elements/u/"),wn=cn,dn=k("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),sn=dn,an=k("http://www.w3.org/ns/rdfa#"),pn=an,fn=k("http://www.w3.org/2000/01/rdf-schema#"),hn=fn,gn=k("http://purl.org/stuff/rev#"),ln=gn,vn=k("https://www.ica.org/standards/RiC/ontology#"),mn=vn,yn=k("http://www.w3.org/2007/rif#"),bn=yn,qn=k("http://www.w3.org/ns/r2rml#"),xn=qn,kn=k("http://purl.org/rss/1.0/"),On=kn,jn=k("http://schema.org/"),Tn=jn,Pn=k("http://www.w3.org/ns/sparql-service-description#"),Dn=Pn,Nn=k("http://purl.org/linked-data/sdmx#"),Sn=Nn,Gn=k("http://semanticweb.cs.vu.nl/2009/11/sem/"),In=Gn,Ln=k("http://www.opengis.net/ont/sf#"),En=Ln,Mn=k("http://www.w3.org/ns/shacl#"),Xn=Mn,Jn=k("http://www.w3.org/ns/shex#"),$n=Jn,_n=k("http://rdfs.org/sioc/ns#"),zn=_n,Bn=k("http://www.w3.org/2004/02/skos/core#"),Cn=Bn,Rn=k("http://www.w3.org/2008/05/skos-xl#"),Vn=Rn,An=k("http://www.w3.org/ns/sosa/"),Fn=An,Hn=k("http://qudt.org/vocab/sou/"),Kn=Hn,Qn=k("http://www.w3.org/ns/ssn/"),Un=Qn,Wn=k("http://www.w3.org/2006/03/test-description#"),Yn=Wn,Zn=k("http://www.w3.org/2006/time#"),tr=Zn,nr=k("http://qudt.org/vocab/unit/"),rr=nr,er=k("http://rdf.data-vocabulary.org/#"),or=er,ur=k("http://www.linkedmodel.org/schema/vaem#"),cr=ur,wr=k("http://purl.org/vocab/vann/"),ir=wr,dr=k("http://www.w3.org/2006/vcard/ns#"),sr=dr,ar=k("http://rdfs.org/ns/void#"),pr=ar,fr=k("http://www.w3.org/2003/06/sw-vocab-status/ns#"),hr=fr,gr=k("http://www.w3.org/2007/05/powder#"),lr=gr,vr=k("http://www.w3.org/2007/05/powder-s#"),mr=vr,yr=k("http://www.w3.org/2003/01/geo/wgs84_pos#"),br=yr,qr=k("http://www.w3.org/1999/xhtml/vocab#"),xr=qr,kr=k("http://rdf-vocabulary.ddialliance.org/xkos#"),Or=kr,jr=k("http://www.w3.org/XML/1998/namespace"),Tr=jr,Pr=k("http://www.w3.org/2001/XMLSchema#"),Dr=Pr}}]);
//# sourceMappingURL=c439799b703787d7a186.js.map
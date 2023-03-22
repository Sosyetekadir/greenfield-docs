import{p as Q,d as B,s as X,D as H,a as Z,S as F,b as j,c as I}from"./styles-d6bd7a5e-64de6063.js";import{G as tt}from"./layout-9c9a502a.js";import{l,c as g,h as x,y as et,i as ot,k as G}from"./mermaid.core-f4a4509e.js";import{r as st}from"./index-f9d09cc9-6e93c4a6.js";import"./isPlainObject-ddf8421f.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";import"./app-770b0b9b.js";import"./framework-a045178c.js";import"./edges-65da65dc-29e921fa.js";import"./svgDraw-6a237a99-03c66c98.js";const b="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",lt="note",at="noteGroup",p="statediagram",dt="state",Et=`${p}-${dt}`,U="transition",St="note",Tt="note-edge",pt=`${U} ${Tt}`,_t=`${p}-${St}`,ut="cluster",Dt=`${p}-${ut}`,ft="cluster-alt",ht=`${p}-${ft}`,V="parent",Y="note",At="state",N="----",bt=`${N}${Y}`,M=`${N}${V}`,W="fill:none",z="fill: #333",m="c",q="text",K="normal";let y={},E=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){l.trace("Extracting classes"),n.db.clear();try{return n.parser.parse(t),n.db.extract(n.db.getRootDocV2()),n.db.getClasses()}catch(e){return e}};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",c=N){const i=e!==null&&e.length>0?`${c}${e}`:"";return`${At}-${t}${i}-${n}`}const A=(t,n,e,c,i,r)=>{const o=e.id,_=$t(c[o]);if(o!=="root"){let T=b;e.start===!0&&(T=nt),e.start===!1&&(T=ct),e.type!==H&&(T=e.type),y[o]||(y[o]={id:o,shape:T,description:G.sanitizeText(o,g()),classes:`${_} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=b,s.description=e.description),s.description=G.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=b),!s.type&&e.doc&&(l.info("Setting cluster for ",o,w(e)),s.type="group",s.dir=w(e),s.shape=e.type===Z?it:rt,s.classes=s.classes+" "+Dt+" "+(r?ht:""));const u={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,E),type:s.type,padding:15};if(e.note){const a={labelStyle:"",shape:lt,labelText:e.note.text,classes:_t,style:"",id:o+bt+"-"+E,domId:R(o,E,Y),type:s.type,padding:15},d={labelStyle:"",shape:at,labelText:e.note.text,classes:s.classes,style:"",id:o+M,domId:R(o,E,V),type:"group",padding:0};E++;const D=o+M;t.setNode(D,d),t.setNode(a.id,a),t.setNode(o,u),t.setParent(o,D),t.setParent(a.id,D);let S=o,f=a.id;e.note.position==="left of"&&(S=a.id,f=o),t.setEdge(S,f,{arrowhead:"none",arrowType:"",style:W,labelStyle:"",classes:pt,arrowheadStyle:z,labelpos:m,labelType:q,thickness:K})}else t.setNode(o,u)}n&&n.id!=="root"&&(l.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(l.trace("Adding nodes children "),xt(t,e,e.doc,c,i,!r))},xt=(t,n,e,c,i,r)=>{l.trace("items",e),e.forEach(o=>{switch(o.stmt){case j:A(t,n,o,c,i,r);break;case H:A(t,n,o,c,i,r);break;case F:{A(t,n,o.state1,c,i,r),A(t,n,o.state2,c,i,r);const _={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:W,labelStyle:"",label:G.sanitizeText(o.description,g()),arrowheadStyle:z,labelpos:m,labelType:q,thickness:K,classes:U};t.setEdge(o.state1.id,o.state2.id,_,E),E++}break}})},w=(t,n=I)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const i=t.doc[c];i.stmt==="dir"&&(e=i.value)}return e},Ct=function(t,n,e,c){l.info("Drawing state diagram (v2)",n),y={},c.db.getDirection();const{securityLevel:i,state:r}=g(),o=r.nodeSpacing||50,_=r.rankSpacing||50;l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),l.info(c.db.getRootDocV2());const T=c.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:w(c.db.getRootDocV2()),nodesep:o,ranksep:_,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,c.db.getRootDocV2(),T,c.db,!0);let u;i==="sandbox"&&(u=x("#i"+n));const a=i==="sandbox"?x(u.nodes()[0].contentDocument.body):x("body"),d=a.select(`[id="${n}"]`),D=a.select("#"+n+" g");st(D,s,["barb"],p,n);const S=8;et.insertTitle(d,"statediagramTitleText",r.titleTopMargin,c.db.getDiagramTitle());const f=d.node().getBBox(),L=f.width+S*2,P=f.height+S*2;d.attr("class",p);const k=d.node().getBBox();ot(d,P,L,r.useMaxWidth);const v=`${k.x-S} ${k.y-S} ${L} ${P}`;l.debug(`viewBox ${v}`),d.attr("viewBox",v);const J=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of J){const O=$.getBBox(),h=document.createElementNS("http://www.w3.org/2000/svg",b);h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",O.width),h.setAttribute("height",O.height),$.insertBefore(h,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Ut={parser:Q,db:B,renderer:Rt,styles:X,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Ut as diagram};

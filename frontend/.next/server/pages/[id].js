"use strict";(()=>{var e={};e.id=112,e.ids=[112],e.modules={8e3:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>f,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>S});var s=r(7093),n=r(5244),i=r(1323),l=r(5253),o=r(389),c=r(2223),d=e([c]);c=(d.then?(await d)():d)[0];let p=(0,i.l)(c,"default"),u=(0,i.l)(c,"getStaticProps"),m=(0,i.l)(c,"getStaticPaths"),x=(0,i.l)(c,"getServerSideProps"),g=(0,i.l)(c,"config"),h=(0,i.l)(c,"reportWebVitals"),S=(0,i.l)(c,"unstable_getStaticProps"),y=(0,i.l)(c,"unstable_getStaticPaths"),b=(0,i.l)(c,"unstable_getStaticParams"),j=(0,i.l)(c,"unstable_getServerProps"),P=(0,i.l)(c,"unstable_getServerSideProps"),f=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/[id]",pathname:"/[id]",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:c});a()}catch(e){a(e)}})},2223:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>h,getStaticPaths:()=>x,getStaticProps:()=>g});var s=r(997),n=r(1386),i=r(4330),l=r(1664),o=r.n(l),c=r(2091),d=r(1578),p=r(1377),u=r(5460),m=e([i]);i=(m.then?(await m)():m)[0];let x=async()=>({paths:(0,i.Le)().map(e=>({params:{id:e.params.id},locale:e.locale})),fallback:!1}),g=async({params:e,locale:t})=>({props:{postData:await (0,i.AU)(e?.id,t??"en"),...await (0,u.serverSideTranslations)(t,["common"])}}),h=({postData:e})=>{let{t}=(0,p.useTranslation)();return e?s.jsx(n.Z,{children:s.jsx("section",{className:"content-section",children:(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)(o(),{href:"/#blog",className:"inline-flex items-center mb-4",children:[s.jsx(c.x_l,{className:"mr-2"})," ",t("common:back-to-blog")]}),(0,s.jsxs)("article",{className:"post-content",children:[s.jsx("p",{className:"text-gray-600 text-right",children:e.date?(0,d.WU)(new Date(e.date),"d MMMM yyyy"):"No date provided"}),s.jsx("h2",{children:e.title}),s.jsx("div",{dangerouslySetInnerHTML:{__html:e.contentHtml}})]})]})})}):s.jsx(n.Z,{children:s.jsx("section",{className:"content-section",children:s.jsx("div",{className:"p-4",children:s.jsx("p",{children:"Sorry, the requested post could not be found."})})})})};a()}catch(e){a(e)}})},4330:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{AU:()=>x,Le:()=>h});var s=r(7147),n=r.n(s),i=r(1017),l=r.n(i),o=r(8076),c=r.n(o),d=r(1774),p=r(7740),u=r(7984),m=e([d,p,u]);[d,p,u]=m.then?(await m)():m;let g=l().join(process.cwd(),"content","blog-posts"),h=()=>n().readdirSync(g).map(e=>({params:{id:e.replace(/\.md$/,"")},locale:e.split("-")[0]}));async function x(e,t="en"){let r=`${e}.md`,a=l().join(g,r);try{let t=n().readFileSync(a,"utf8"),r=c()(t),s=(await (0,d.remark)().use(p.default,{sanitize:!1}).use(u.default).process(r.content)).toString();return{id:e,title:r.data.title||"No Title",date:r.data.date||"No Date",thumbnail:r.data.thumbnail||null,tldr:r.data.tldr||r.content.replace(/(#+\s.*)|(\!\[.*\]\(.*\))/g,"").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/(\*\*|__)(.*?)\1/g,"$2").replace(/\*(.*?)\*/g,"$1").replace(/`{1,3}(.*?)`{1,3}/g,"$1").replace(/<\/?[^>]+(>|$)/g,"").trim().slice(0,350)+"...",contentHtml:s}}catch(e){return console.error(`Failed to read markdown file: ${a}`,e),null}}a()}catch(e){a(e)}})},8076:e=>{e.exports=require("gray-matter")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},9816:e=>{e.exports=require("styled-jsx/style")},1774:e=>{e.exports=import("remark")},7984:e=>{e.exports=import("remark-breaks")},7740:e=>{e.exports=import("remark-html")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[859,620,578,479],()=>r(8e3));module.exports=a})();
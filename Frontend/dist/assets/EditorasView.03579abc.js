import{A as u}from"./editoras.5c315c38.js";import{_,o,c as l,a as t,w as h,v as m,d as p,F as v,r as b,t as n}from"./index.cd9cced1.js";import"./index.a270d04d.js";const i=new u,w={data(){return{editora:{},editoras:[]}},async created(){this.editoras=await i.buscarTodasAsEditoras()},methods:{async salvar(){this.editora.id?await i.atualizarEditora(this.editora):await i.adicionarEditora(this.editora),this.editoras=await i.buscarTodasAsEditoras(),this.editora={}},async excluir(r){await i.excluirEditora(r.id),this.editoras=await i.buscarTodasAsEditoras()},editar(r){Object.assign(this.editora,r)}}},f={class:"edi_princ"},E={class:"container"},y=t("div",{class:"title"},[t("h2",null,"Gerenciamento de editoras")],-1),A={class:"form-input"},k={class:"edi_list-items"},x=t("thead",{class:"edi_thead"},[t("tr",null,[t("td",null,"ID"),t("td",null,"editora"),t("td",null,"A\xE7\xF5es")])],-1),g=["onClick"],C=["onClick"];function T(r,s,B,D,d,e){return o(),l("div",f,[t("div",E,[y,t("div",A,[h(t("input",{class:"edi_form-input",type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>d.editora.nome=a),onKeyup:s[1]||(s[1]=p((...a)=>e.salvar&&e.salvar(...a),["enter"])),placeholder:"Cadastre uma Editora"},null,544),[[m,d.editora.nome]]),t("button",{class:"but-salvar",onClick:s[2]||(s[2]=(...a)=>e.salvar&&e.salvar(...a))},"Salvar")])]),t("div",k,[t("table",null,[x,t("tbody",null,[(o(!0),l(v,null,b(d.editoras,a=>(o(),l("tr",{key:a.id},[t("td",null,n(a.id),1),t("td",null,n(a.nome),1),t("td",null,[t("button",{class:"but-apagar",onClick:c=>e.excluir(a)},"Apagar",8,g),t("button",{class:"but-apagar",onClick:c=>e.editar(a)},"Editar",8,C)])]))),128))])])])])}var S=_(w,[["render",T]]);export{S as default};

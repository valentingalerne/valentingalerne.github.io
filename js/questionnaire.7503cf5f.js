(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["questionnaire"],{"2ea7":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[t("h1",[e._v("Questionnaire")]),[t("div",[e._l(e.myJson.questions,(function(e){return t("div",{key:e.numQuestion,staticClass:"Question shadow"},[t("Question",{attrs:{data:e}})],1)})),t("br"),t("button",{staticClass:"btn btn-outline-secondary",on:{click:function(n){return e.addDB()}}},[e._v("Envoyer le formulaire")])],2)]],2)},o=[],r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[e._v(e._s(e.data.question))]),t("div",{staticClass:"alignReponses"},[t("input",{attrs:{type:"radio",name:"reponse",value:"data.reponse[0].value"}}),e._v(e._s(e.data.reponse[0].value)),t("br"),t("input",{attrs:{type:"radio",name:"reponse",value:"data.reponse[1].value"}}),e._v(e._s(e.data.reponse[1].value)),t("br"),t("input",{attrs:{type:"radio",name:"reponse",value:"data.reponse[2].value"}}),e._v(e._s(e.data.reponse[2].value)),t("br")])])},u=[],a=t("beb6"),i={name:"data",props:{data:Object},data:function(){return{myJson:a}}},l=i,c=(t("b725"),t("2877")),p=Object(c["a"])(l,r,u,!1,null,null,null),d=p.exports,v=t("16b2"),m=new v["a"]("questions"),b="http://localhost:5984/test",f={data:function(){return{myJson:a,id:"",tabReponses:[{id:0,reponse:""}],idQuestion:"",reponseQuestion:""}},components:{Question:d},mounted:function(){localStorage.idUser&&(this.id=localStorage.idUser)},methods:{addDB:function(){var e={id:this.id,tabReponses:null,idQuestion:null,reponseQuestion:null};m.put(e).then((function(e,n){})),m.get(e.nom).then((function(e,n){})),m.replicate.to(b)}}},R=f,_=Object(c["a"])(R,s,o,!1,null,null,null);n["default"]=_.exports},"9b25":function(e,n,t){},b725:function(e,n,t){"use strict";var s=t("9b25"),o=t.n(s);o.a},beb6:function(e){e.exports=JSON.parse('{"questions":[{"numQuestion":"1","question":"Pourquoi les chaussures de sécurité sont-elles obligatoires ?","reponse":[{"numeroReponse":"1","value":"L\'écrasement des orteils"},{"numeroReponse":"2","value":"La pluie"},{"numeroReponse":"3","value":"La perforation plantaire"}]},{"numQuestion":"2","question":"Quelle est la bonne conduite à tenir en cas d\'accident ?","reponse":[{"numeroReponse":"1","value":"Alerter les secours - Protéger la victime - Rassurer la victime"},{"numeroReponse":"2","value":"Protéger la victime –Se protéger- Alerter les secours - Rassurer la victime"},{"numeroReponse":"3","value":"Rassurer la victime - Alerter les secours - Protéger la victime"}]},{"numQuestion":"2","question":"Que faire lorsque l\'on intervient sur un circuit électrique ?","reponse":[{"numeroReponse":"1","value":"Rien de particulier"},{"numeroReponse":"2","value":"Couper le courant du circuit en question"},{"numeroReponse":"3","value":"Eteindre la lumière"}]}]}')}}]);
//# sourceMappingURL=questionnaire.7503cf5f.js.map
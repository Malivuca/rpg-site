(this["webpackJsonprpg-site"]=this["webpackJsonprpg-site"]||[]).push([[0],{111:function(e,n,t){e.exports=t.p+"static/media/google.9da4d348.svg"},120:function(e,n,t){e.exports=t.p+"static/media/campire2.85cb1f0d.jpeg"},130:function(e,n,t){e.exports=t.p+"static/media/Logo2.33a29fe5.png"},139:function(e,n,t){e.exports=t(171)},171:function(e,n,t){"use strict";t.r(n);var a,r,i,l,o,c,s,u,d,m,p,b,g,h,x,f,E,v,y,w,j,O,k,S,z,C,F,I,L,T,D,G,A,W,M,B,P,R,N,U,H,q,V,J,_,Q,Y,K,X,Z,$,ee,ne,te,ae,re,ie,le,oe,ce,se,ue,de,me,pe,be,ge=t(0),he=t.n(ge),xe=t(14),fe=t.n(xe),Ee=t(12),ve=t(56),ye=t(41),we=t(49),je=t(15),Oe=t(37),ke=t(66),Se=t(84),ze=t(55),Ce=t(85),Fe=(t(147),t(8)),Ie=(a=Object(ke.persist)("object"),o=function(){function e(n){Object(Oe.a)(this,e),this.rootStore=void 0,Object(Se.a)(this,"loginStatus",i,this),Object(Se.a)(this,"hydrating",l,this),this.rootStore=n}return Object(ze.a)(e,[{key:"setHydrating",value:function(e){this.hydrating=e}},{key:"setLoggedIn",value:function(e){this.loginStatus.loggedIn=e}}]),e}(),r=o,i=Object(Ce.a)(r.prototype,"loginStatus",[a,Fe.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{loggedIn:!1}}}),l=Object(Ce.a)(r.prototype,"hydrating",[Fe.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),r),Le=Object(ke.create)({storage:localStorage,jsonify:!0}),Te=Object(ge.createContext)(new function e(){var n=this;Object(Oe.a)(this,e),this.userStore=new Ie(this),this.userStore.setHydrating(!0),Promise.all([Le("user",this.userStore)]).then((function(){n.userStore.setHydrating(!1)}))}),De=t(5),Ge=t(208),Ae=t(205),We=t(211),Me=t(209),Be=t(210),Pe=t(119),Re=t.n(Pe),Ne=t(44),Ue=t.n(Ne),He=t(216),qe=t(10),Ve=t.n(qe),Je=t(17),_e=t(109),Qe=t.n(_e),Ye=t(110),Ke=t.n(Ye),Xe=new ye.a,Ze="http://localhost:3333/",$e=Ke.a.create({baseURL:Ze}),en=function(){return Xe.get("token")},nn=function(){var e=Object(Je.a)(Ve.a.mark((function e(n,t){var a,r;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:n,password:t},console.log(n,t),e.prev=2,e.next=5,$e.post("auth/sign-in",a);case 5:if(r=e.sent,console.log("Response: ",r),!(r.status>=200&&r.status<300)){e.next=11;break}return Xe.set("token",r.data.token),Xe.set("refreshToken",r.data.refreshToken),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 14:return e.prev=14,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t){return e.apply(this,arguments)}}(),tn=function(){var e=Object(Je.a)(Ve.a.mark((function e(n,t,a,r){var i,l;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={username:t,email:n,password:a,passwordConfirmation:r},e.prev=1,e.next=4,$e.post("auth/sign-up",i);case 4:if(l=e.sent,console.log("Response:",l),!(l.status>=200&&l.status<300)){e.next=10;break}return Xe.set("token",l.data.token),Xe.set("refreshToken",l.data.refreshToken),e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 13:return e.prev=13,e.t0=e.catch(1),console.log("ERROR: ",e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n,t,a,r){return e.apply(this,arguments)}}(),an=function(){var e=Object(Je.a)(Ve.a.mark((function e(){var n;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/friend-list",{headers:{Authorization:"Bearer ".concat(en())}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rn=function(){var e=Object(Je.a)(Ve.a.mark((function e(){var n;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/add-friend",{headers:{Authorization:"Bearer ".concat(en())}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ln=function(){var e=Object(Je.a)(Ve.a.mark((function e(n){var t;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e.post("/add-friend/".concat(n),null,{headers:{Authorization:"Bearer ".concat(en())}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),on=function(){var e=Object(Je.a)(Ve.a.mark((function e(n){var t;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e.put("/add-friend/".concat(n),{headers:{Authorization:"Bearer ".concat(en())}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),cn=t(207),sn=t(215),un=t(217),dn=t(111),mn=t.n(dn),pn=t(4),bn=new ye.a,gn=Object(ve.a)((function(){var e=Object(ge.useContext)(Te),n=Object(ge.useState)(""),t=Object(Ee.a)(n,2),a=t[0],r=t[1],i=Object(ge.useState)(""),l=Object(Ee.a)(i,2),o=l[0],c=l[1],s=Object(ge.useState)(""),u=Object(Ee.a)(s,2),d=u[0],m=u[1],p=Object(ge.useState)(""),b=Object(Ee.a)(p,2),g=b[0],h=b[1],x=function(){var n=Object(Je.a)(Ve.a.mark((function n(){return Ve.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(a?"":"Voce deve preencher o campo Email"),h(d?"":"Voce deve preencher o campo Senha"),n.next=4,nn(a,d);case 4:if(!n.sent){n.next=6;break}e.userStore.setLoggedIn(!0);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(n,t){console.log("Google response",n),t?(bn.set("token",n.tokenId),e.userStore.setLoggedIn(!0)):console.log(n)};return he.a.createElement(hn,null,he.a.createElement(xn,null,"Bem vindo"),he.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x()}},he.a.createElement(sn.a,{value:a,onChange:function(e){return[r(e.target.value),c("")]},label:"Usu\xe1rio",variant:"outlined",fullWidth:!0}),he.a.createElement(sn.a,{value:d,onChange:function(e){return[m(e.target.value),h("")]},label:"Senha",variant:"outlined",type:"password",fullWidth:!0}),o?he.a.createElement(un.a,{severity:"error"},o):null,g?he.a.createElement(un.a,{severity:"error"},g):null,he.a.createElement(fn,{type:"submit",variant:"contained",size:"large",onClick:x,fullWidth:!0},"Entrar")),he.a.createElement(Qe.a,{clientId:"736423435956-4tp7t676eqltolhm3srflm6bmkcit5nq.apps.googleusercontent.com",render:function(e){return he.a.createElement(En,{startIcon:he.a.createElement("img",{alt:"google",src:mn.a}),onClick:e.onClick,disabled:e.disabled},"Entrar com o Google")},onSuccess:function(e){return f(e,!0)},onFailure:function(e){return f(e,!1)},cookiePolicy:"single_host_origin"}))})),hn=pn.b.div(c||(c=Object(De.a)(["\n  display: flex;\n  flex-flow: column wrap;\n\n  div {\n    margin-bottom: 5px;\n  }\n\n  form {\n    margin-bottom: 10px;\n  }\n"]))),xn=pn.b.h1(s||(s=Object(De.a)(["\n  font-family: Grenze Gotisch, cursive;\n  font-size: 40px;\n  font-weight: 400;\n  text-align: center;\n  /* line-height: 30px; */\n  margin-bottom: 10px;\n"]))),fn=Object(pn.b)(cn.a)(u||(u=Object(De.a)(["\n  font-family: 'Grenze Gotisch', cursive;\n  font-size: 24px;\n  text-transform: none;\n  line-height: 17px;\n  color: white;\n  background-color: rgba(255, 85, 85, 1);\n  &:hover {\n    background-color: rgba(255, 85, 85, 0.9);\n  }\n"]))),En=Object(pn.b)(cn.a)(d||(d=Object(De.a)(["\n  text-transform: none;\n  font-weight: 420;\n"]))),vn=Object(pn.b)(cn.a)(m||(m=Object(De.a)(["\n  font-family: 'Grenze Gotisch', cursive;\n  font-size: 24px;\n  text-transform: none;\n  line-height: 17px;\n  color: white;\n  background-color: rgba(255, 85, 85, 1);\n\n  :hover {\n    background-color: rgba(255, 85, 85, 0.9);\n  }\n"]))),yn=function(){var e=he.a.useContext(Te),n=Object(ge.useState)(""),t=Object(Ee.a)(n,2),a=t[0],r=t[1],i=Object(ge.useState)(""),l=Object(Ee.a)(i,2),o=l[0],c=l[1],s=Object(ge.useState)(""),u=Object(Ee.a)(s,2),d=u[0],m=u[1],p=Object(ge.useState)(""),b=Object(Ee.a)(p,2),g=b[0],h=b[1],x=function(){var n=Object(Je.a)(Ve.a.mark((function n(){return Ve.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn(a,o,d,g);case 2:if(!n.sent){n.next=4;break}e.userStore.setLoggedIn(!0);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return he.a.createElement(Ge.a,{container:!0,direction:"column",spacing:2},he.a.createElement(Ge.a,{item:!0},he.a.createElement(sn.a,{style:{marginTop:"15px"},value:a,onChange:function(e){return r(e.target.value)},label:"Email",variant:"outlined",type:"email",fullWidth:!0})),he.a.createElement(Ge.a,{item:!0},he.a.createElement(sn.a,{label:"Nome de usu\xe1rio",value:o,onChange:function(e){return c(e.target.value)},variant:"outlined",fullWidth:!0})),he.a.createElement(Ge.a,{item:!0},he.a.createElement(sn.a,{label:"Senha",value:d,onChange:function(e){return m(e.target.value)},variant:"outlined",type:"password",fullWidth:!0})),he.a.createElement(Ge.a,{item:!0},he.a.createElement(sn.a,{label:"Confirmar senha",value:g,onChange:function(e){return h(e.target.value)},variant:"outlined",type:"password",fullWidth:!0})),he.a.createElement(Ge.a,{item:!0},he.a.createElement(vn,{onClick:x,variant:"contained",size:"large",fullWidth:!0},"Cadastrar")))},wn=Object(pn.b)(Ae.a)(p||(p=Object(De.a)(["\n  padding: 20px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.9);\n  /* font-family: 'Grenze Gotisch', cursive; font-size: 40px; */\n  width: min(400px, 100vw);\n\n  @media (max-width: 600px) {\n    margin: auto;\n  }\n"]))),jn=function(){var e=Object(ge.useState)("signin"),n=Object(Ee.a)(e,2),t=n[0],a=n[1];return he.a.createElement(He.b,{injectFirst:!0},he.a.createElement(wn,{elevation:3},he.a.createElement(gn,null),he.a.createElement(Me.a,{style:{marginTop:"15px"},button:!0,onClick:function(){a("signin"===t?"signup":"signin")}},he.a.createElement(Be.a,{primary:"Ainda n\xe3o \xe9 um membro?"}),"signup"===t?he.a.createElement(Re.a,null):he.a.createElement(Ue.a,null)),he.a.createElement(We.a,{in:"signup"===t},he.a.createElement(yn,null))))},On=t(40),kn=t.n(On),Sn=pn.b.div(b||(b=Object(De.a)(["\n  /* Div size and position */\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  /* Background image settings */\n  background-image: url(",");\n  background-size: max(100vw, 1280px) max(100vh, 720px);\n  background-repeat: no-repeat;\n\n  overflow-x: hidden;\n"])),kn.a),zn=Object(pn.b)(Ge.a)(g||(g=Object(De.a)(["\n  padding: 20px;\n  height: 100vh;\n\n  /* Custom padding for mobile */\n  @media (max-width: 600px) {\n    padding: 10px;\n  }\n"]))),Cn=function(){return he.a.createElement(Sn,null,he.a.createElement(zn,{container:!0,justify:"flex-end",alignItems:"center"},he.a.createElement(jn,null)))},Fn=t(75),In=t(74),Ln=t(120),Tn=t.n(Ln),Dn=Object(pn.a)(h||(h=Object(De.a)(['\n  :root {\n    --color-background: rgb(22, 20, 26);\n    --color-primary-lighter: #9871F5;\n    --color-primary-light: #916BEA;\n    --color-primary: rgb(33, 34, 44);\n    --color-primary-dark: #774DD6;\n    --color-primary-darker: #6842C2;\n    --color-secondary: #04D361;\n    --color-secondary-dark: #04BF58;\n    --color-title-in-primary: #FFFFFF;\n    --color-text-in-primary: #D4C2FF;\n    --color-text-title: #32264D;\n    --color-text-complement: #9C98A6;\n    --color-text-base: #ffffff;\n    --color-line-in-white: #E6E6F0;\n    --color-input-background: #F8F8FC;\n    --color-button-text: #FFFFFF;\n    --color-box-base: #FFFFFF;\n    --color-box-footer: #FAFAFC;\n    font-size: 14px;\n  } \n  * {\n      /* Fixes a bug where "width: 100%" is larger than actual viewport width */\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    /* -webkit-box-pack: center; */\n\n    /* Default margin and padding for all elements */\n    margin: 0;\n    padding: 0;\n    \n    /* Removes highlighting on touch for mobile devices */\n    -webkit-tap-highlight-color: transparent;\n    /* -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none; */\n    /* user-select: none; */\n  }\n  html, body, #root {\n    height: 100vh;\n    width: 100vw;\n  }\n  body {\n    background-color: var(--color-background)\n  } \n  body,\n  input,\n  textarea,\n  button {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    color: var(--color-text-base);\n  }\n  @media (max-width: 700px) {\n    :root {\n      font-size: 14px;\n    }\n  }\n']))),Gn=Object(pn.b)(we.b)(x||(x=Object(De.a)(["\n  display: flex;\n  text-decoration: none;\n  color: white;\n\n  :hover {\n    text-decoration: ",";\n  }\n"])),(function(e){return e.underline?"underline":"none"})),An=t(121),Wn=t.n(An),Mn=pn.b.div(f||(f=Object(De.a)(["\n  width: ",";\n  height: ",";\n\n  background-color: rgb(34, 34, 44);\n  border-radius: 20px;\n  align-items: center;\n\n  font-family: 'Grenze Gotisch', cursive;\n  color: white;\n  font-size: 20px;\n  transition: 300ms;\n  :hover {\n    cursor: pointer;\n    transform: scale(1.05);\n  }\n"])),(function(e){return e.small?"110px":"220px"}),(function(e){return e.small?"110px":"220px"})),Bn=pn.b.div(E||(E=Object(De.a)(["\n  width: 100%;\n  height: 85%;\n  border-radius: 20px 20px 0px 0px;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  /* background-color: blue; */\n"])),(function(e){return e.image})),Pn=pn.b.div(v||(v=Object(De.a)(["\n  /* background-color: red; */\n  text-align: center;\n  border-radius: 20px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0px 10px;\n"]))),Rn=function(e){var n=e.empty,t=e.image,a=e.small;return he.a.createElement(he.a.Fragment,null,n?he.a.createElement(Gn,{to:"/story/create"},he.a.createElement(Mn,{small:a},he.a.createElement(Ge.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100%",width:"100%",borderRadius:"20px"}},he.a.createElement(Ge.a,{item:!0},he.a.createElement(Wn.a,{style:{width:"64px",height:"64px"}}))))):he.a.createElement(we.c,{to:"/story/description",style:{textDecoration:"none"}},he.a.createElement(Mn,null,he.a.createElement(Bn,{image:t}),he.a.createElement(Pn,null,"As historias de Veloster"))))},Nn=t(212),Un=t(219),Hn=pn.b.div(y||(y=Object(De.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]))),qn=pn.b.div(w||(w=Object(De.a)(["\n  display: flex;\n  margin-left: 8px;\n"]))),Vn=Object(pn.b)(Un.a)(j||(j=Object(De.a)(["\n  background-color: rgba(247, 157, 32, 1);\n\n  :hover {\n    filter: brightness(70%);\n    cursor: pointer;\n  }\n"]))),Jn=function(e){var n=e.name,t=e.size;e.id;return he.a.createElement(Hn,null,he.a.createElement(Gn,{underline:!0,to:"/user"},he.a.createElement(qn,null,"small"===t?null:he.a.createElement("h4",null,n))),he.a.createElement(Gn,{to:"/user"},he.a.createElement(Nn.a,{overlap:"circle",color:"primary",variant:"dot"},he.a.createElement(Vn,{alt:"profile-pic"},n&&n[0]))))},_n=["Gustavo Lopes","Miguel Demarque","Luis Felipe","Nicolas Gen","Leonel P","Yves"],Qn=function(){return he.a.createElement(Ge.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",spacing:2,style:{minWidth:"200px",width:"200px"}},he.a.createElement(Ge.a,{item:!0},he.a.createElement("h3",{style:{margin:0}},"Lista de amigos")),_n.map((function(e,n){return he.a.createElement(Ge.a,{item:!0,key:n},he.a.createElement(Jn,{name:e}))})),he.a.createElement(Ge.a,{item:!0},he.a.createElement(Gn,{to:"/"},he.a.createElement("h5",{style:{margin:0}},"Ver todos amigos"))))},Yn=function(e){Object(Fn.a)(t,e);var n=Object(In.a)(t);function t(e){var a;return Object(Oe.a)(this,t),(a=n.call(this,e)).state={},a}return Object(ze.a)(t,[{key:"render",value:function(){var e=this.props.width;return he.a.createElement(Kn,null,he.a.createElement(Xn,null,he.a.createElement("h1",null,"Minhas historias"),he.a.createElement(et,null,he.a.createElement(Zn,null,he.a.createElement($n,null,he.a.createElement(Rn,{image:Tn.a})),he.a.createElement($n,null,he.a.createElement(Rn,{image:kn.a,small:!0})),he.a.createElement($n,null,he.a.createElement(Rn,{empty:!0})),he.a.createElement($n,null,he.a.createElement(Rn,{empty:!0})),he.a.createElement($n,null,he.a.createElement(Rn,{empty:!0})),he.a.createElement($n,null,he.a.createElement(Rn,{empty:!0})),he.a.createElement($n,null,he.a.createElement(Rn,{empty:!0})),he.a.createElement($n,null,he.a.createElement(Rn,{empty:!0}))),e>738?he.a.createElement(Qn,null):null)))}}]),t}(he.a.Component),Kn=pn.b.div(O||(O=Object(De.a)(["\n  display: flex;\n  padding-top: 80px;\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n  overflow: hidden;\n\n  @media (max-width: 600px) {\n    padding-top: 60px;\n  }\n"]))),Xn=pn.b.div(k||(k=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 40px;\n\n  @media (max-width: 738px) {\n    padding: 20px 20px;\n    align-items: center;\n  }\n"]))),Zn=pn.b.div(S||(S=Object(De.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  padding-top: 20px;\n\n  @media (max-width: 738px) {\n    justify-content: center;\n  }\n"]))),$n=pn.b.div(z||(z=Object(De.a)(["\n  display: flex;\n  margin-right: 20px;\n  margin-bottom: 20px;\n\n  @media (max-width: 480px) {\n    margin-right: 0;\n  }\n"]))),et=pn.b.div(C||(C=Object(De.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n"]))),nt=Yn,tt=pn.b.div(F||(F=Object(De.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),at=pn.b.div(I||(I=Object(De.a)(["\n  display: flex;\n  background-color: white;\n  width: 128px;\n  height: 128px;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  box-shadow: 0px 0px 1px 5px orange;\n\n  @media (max-width: 600px) {\n    width: 64px;\n    height: 64px;\n  }\n\n  border-radius: 50%;\n"])),(function(e){return e.image})),rt=pn.b.div(L||(L=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  /* margin-right: 100px; */\n  /* background-color: red; */\n"]))),it=pn.b.div(T||(T=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  /* background-color: blue; */\n  max-width: 300px;\n\n  @media (max-width: 600px) {\n    max-width: 220px;\n  }\n"]))),lt=function(){return he.a.createElement(tt,null,he.a.createElement(rt,null,he.a.createElement("h1",null,"Miguel Demarque"),he.a.createElement("h4",null,"Floresta dos anoes"),he.a.createElement(it,null,he.a.createElement("h3",null,"Bio"),he.a.createElement("h5",null,"Ola sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla sou o miguel"))),he.a.createElement(at,{image:kn.a}))},ot=pn.b.div(D||(D=Object(De.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  cursor: pointer;\n\n  :hover {\n    filter: brightness(85%);\n  }\n"]))),ct=function(e){var n=e.label,t=e.onClick;return he.a.createElement(ot,{onClick:function(){t(n)}},n)},st=function(e){Object(Fn.a)(t,e);var n=Object(In.a)(t);function t(e){var a;return Object(Oe.a)(this,t),(a=n.call(this,e)).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(ze.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,n=this.props.children,t=this.state.activeTab;return he.a.createElement(ut,null,he.a.createElement(dt,{className:"tab-list"},n.map((function(n){var t=n.props.label;return he.a.createElement(ct,{key:t,label:t,onClick:e})}))),he.a.createElement("div",{className:"tab-content"},n.map((function(e){if(e.props.label===t)return e.props.children}))))}}]),t}(ge.Component),ut=pn.b.div(G||(G=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),dt=pn.b.div(A||(A=Object(De.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n  border-bottom: 1px solid rgb(56, 68, 77);\n"]))),mt=st,pt=t(206),bt=t(122),gt=t.n(bt),ht=t(123),xt=t.n(ht),ft=pn.b.div(W||(W=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n"]))),Et=pn.b.div(M||(M=Object(De.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid rgb(56, 68, 77);\n  width: 100%;\n"]))),vt=pn.b.div(B||(B=Object(De.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  :hover {\n    text-decoration: underline;\n  }\n"]))),yt=function(){var e=he.a.useState([]),n=Object(Ee.a)(e,2),t=n[0],a=n[1],r=he.a.useState([]),i=Object(Ee.a)(r,2),l=i[0],o=i[1],c=he.a.useState(!1),s=Object(Ee.a)(c,2),u=(s[0],s[1]);return he.a.useEffect((function(){Object(Je.a)(Ve.a.mark((function e(){var n;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.t0=a,e.next=4,an();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=8,rn();case 8:n=e.sent,o(n.data),u(!1);case 11:case"end":return e.stop()}}),e)})))()}),[]),he.a.createElement(ft,null,l.length>0?l.map((function(e,n){return he.a.createElement(Et,{key:e.id},he.a.createElement(Jn,{name:e.username}),he.a.createElement(vt,null,he.a.createElement(pt.a,{onClick:function(){return on(e.id)}},he.a.createElement(gt.a,{style:{color:"green"}})),he.a.createElement(pt.a,null,he.a.createElement(xt.a,{style:{color:"red"}}))))})):null,t.length>0?t.map((function(e,n){return he.a.createElement(Et,{key:e.id},he.a.createElement(Jn,{name:e.username}),he.a.createElement(vt,null,"Remover"))})):null)},wt=t(89),jt=function(e){var n=Object.assign({},e);return he.a.createElement(sn.a,Object.assign({},n,{InputProps:Object(wt.a)({style:{backgroundColor:"rgb(34,34,44)"}},n.InputProps),inputProps:{style:{color:"white"}},InputLabelProps:Object(wt.a)({style:{color:"grey"}},n.InputLabelProps)}))},Ot=t(213),kt=t(125),St=t.n(kt),zt=t(124),Ct=t.n(zt),Ft=new ye.a,It=pn.b.div(P||(P=Object(De.a)(["\n  display: flex;\n  padding-top: 80px;\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n\n  @media (max-width: 600px) {\n    padding-top: 60px;\n  }\n"]))),Lt=pn.b.div(R||(R=Object(De.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  margin-top: 15px;\n\n  @media (max-width: 650px) {\n    justify-content: center;\n  }\n"]))),Tt=pn.b.div(N||(N=Object(De.a)(["\n  display: flex;\n  margin-right: 20px;\n  margin-bottom: 20px;\n"]))),Dt=pn.b.div(U||(U=Object(De.a)(["\n  display: flex;\n"]))),Gt=pn.b.div(H||(H=Object(De.a)(["\n  display: flex;\n  padding-top: 20px;\n  width: 100%;\n  flex-direction: column;\n  /* background-color: red; */\n  margin: 0 25%;\n  max-width: 800px;\n\n  @media (max-width: 1200px) {\n    margin: 0 15%;\n    max-width: 600px;\n  }\n\n  @media (max-width: 600px) {\n    margin: 0 20px;\n    max-width: 600px;\n\n    h1 {\n      font-size: 20px;\n    }\n    h4 {\n      font-size: 12px;\n    }\n    h3 {\n      font-size: 15px;\n    }\n    h5 {\n      font-size: 11px;\n    }\n  }\n"]))),At=function(){var e=he.a.useContext(Te),n=he.a.useState(""),t=Object(Ee.a)(n,2),a=t[0],r=t[1];return he.a.createElement(It,null,he.a.createElement(Gt,null,he.a.createElement(lt,null),he.a.createElement("br",null),he.a.createElement(cn.a,{onClick:function(){return ln(4)},color:"primary"},"Adicionar Teste"),he.a.createElement(cn.a,{color:"primary",onClick:function(){Ft.remove("token",{path:"/"}),Ft.remove("refreshToken",{path:"/"}),e.userStore.setLoggedIn(!1)}},"Logout"),he.a.createElement(mt,null,he.a.createElement(Dt,{label:"Hist\xf3rias"},he.a.createElement(Lt,null,he.a.createElement(Tt,null,he.a.createElement(Rn,null)),he.a.createElement(Tt,null,he.a.createElement(Rn,{empty:!0})),he.a.createElement(Tt,null,he.a.createElement(Rn,{empty:!0})))),he.a.createElement(Dt,{label:"Amigos"},he.a.createElement(jt,{label:"Adicionar amigo",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Digite o nome do usu\xe1rio",variant:"filled",fullWidth:!0,style:{marginTop:"10px",marginBottom:"10px",display:"flex",alignItems:"center"},InputLabelProps:{style:{color:"grey",marginTop:"-5px"}},InputProps:{startAdornment:he.a.createElement(Ot.a,{position:"start"},he.a.createElement(Ct.a,{style:{color:"white"}})),endAdornment:he.a.createElement(Ot.a,{position:"end"},he.a.createElement(pt.a,{onClick:function(){return ln(a)}},he.a.createElement(St.a,{style:{color:"white"}})))}}),he.a.createElement(yt,null)))))},Wt=t(218),Mt=pn.b.div(q||(q=Object(De.a)(["\n  padding-top: 80px;\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n\n  @media (max-width: 600px) {\n    padding-top: 60px;\n  }\n"]))),Bt=pn.b.div(V||(V=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 20px 10px 20px;\n"]))),Pt=pn.b.div(J||(J=Object(De.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n  min-width: 600px;\n\n  @media (max-width: 650px) {\n    min-width: 90vw;\n    /* width: 100%; */\n  }\n"]))),Rt=pn.b.div(_||(_=Object(De.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid rgb(56, 68, 77);\n  width: 100%;\n"]))),Nt=pn.b.div(Q||(Q=Object(De.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ut=function(){var e=Object(ge.useState)(!1),n=Object(Ee.a)(e,2),t=n[0],a=n[1],r=Object(ge.useState)(""),i=Object(Ee.a)(r,2),l=i[0],o=(i[1],Object(ge.useState)("")),c=Object(Ee.a)(o,2),s=c[0],u=(c[1],Object(ge.useState)([])),d=Object(Ee.a)(u,2),m=d[0],p=d[1];he.a.useEffect((function(){Object(Je.a)(Ve.a.mark((function e(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,an();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]);return he.a.createElement(Mt,null,he.a.createElement(Bt,null,he.a.createElement(Pt,null,he.a.createElement("h1",null,"Crie sua historia!")),he.a.createElement(Pt,null,he.a.createElement(jt,{label:"Nome da hist\xf3ria",variant:"filled",value:l,fullWidth:!0})),he.a.createElement(Pt,null,he.a.createElement(jt,{label:"Descri\xe7\xe3o da hist\xf3ria (Opcional)",value:s,variant:"filled",multiline:!0,rows:4,fullWidth:!0})),he.a.createElement(Pt,null,he.a.createElement(cn.a,{onClick:function(){return a(!t)},style:{color:"white",textTransform:"none"},endIcon:t?he.a.createElement(Ue.a,{style:{transform:"rotate(180deg)",transition:"300ms"}}):he.a.createElement(Ue.a,{style:{transition:"300ms"}}),fullWidth:!0},"Adicionar participantes")),he.a.createElement(We.a,{in:t},he.a.createElement(Pt,null,m.map((function(e){return he.a.createElement(Rt,{key:e.id},he.a.createElement(Jn,{name:e.username}),he.a.createElement(Nt,null,he.a.createElement(Wt.a,{onChange:function(e){return function(e){console.log(e.target.checked),console.log(e.target.value)}(e)},value:e.id,style:{color:"white"}})))})))),he.a.createElement(Pt,null,he.a.createElement(cn.a,{style:{color:"white",backgroundColor:"rgb(33, 34, 44)",textTransform:"none"},fullWidth:!0},"Finalizar"))))},Ht=pn.b.div(Y||(Y=Object(De.a)(["\n  padding-top: 80px;\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n\n  @media (max-width: 600px) {\n    padding-top: 60px;\n  }\n"]))),qt=pn.b.div(K||(K=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 20px 10px 20px;\n"]))),Vt=pn.b.div(X||(X=Object(De.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n  min-width: 600px;\n\n  @media (max-width: 650px) {\n    min-width: 90vw;\n    /* width: 100%; */\n  }\n"]))),Jt=function(){var e=he.a.useState(!1),n=Object(Ee.a)(e,2),t=n[0],a=n[1];return he.a.useEffect((function(){})),he.a.createElement(Ht,null,he.a.createElement(qt,null,he.a.createElement(Vt,null,he.a.createElement("h1",null,"Editar dados da hist\xf3ria")),he.a.createElement(Vt,null,he.a.createElement(jt,{label:"Nome da hist\xf3ria",variant:"filled",fullWidth:!0})),he.a.createElement(Vt,null,he.a.createElement(jt,{label:"Descri\xe7\xe3o da hist\xf3ria (Opcional)",variant:"filled",multiline:!0,rows:4,fullWidth:!0})),he.a.createElement(Vt,null,he.a.createElement(cn.a,{onClick:function(){return a(!t)},style:{color:"white",textTransform:"none"},endIcon:t?he.a.createElement(Ue.a,{style:{transform:"rotate(180deg)",transition:"300ms"}}):he.a.createElement(Ue.a,{style:{transition:"300ms"}}),fullWidth:!0},"Adicionar participantes")),he.a.createElement(We.a,{in:t},he.a.createElement(Vt,null,he.a.createElement(yt,null))),he.a.createElement(Vt,null,he.a.createElement(cn.a,{style:{color:"white",backgroundColor:"rgb(33, 34, 44)",textTransform:"none"},fullWidth:!0},"Finalizar"))))},_t=t(127),Qt=t.n(_t),Yt=t(126),Kt=t.n(Yt),Xt=t(73),Zt=t.n(Xt),$t=pn.b.div(Z||(Z=Object(De.a)(["\n  /* Makes div float */\n  position: fixed;\n  /* Makes div stay at the top */\n  bottom: 0px;\n  /* Makes div stay in front of almost everything else in the screen */\n  z-index: 9998;\n  /* Dimensions */\n  height: 80px;\n  width: 100%;\n  /* Defines itens arrangement in the div */\n  justify-content: space-around;\n  /* Styling */\n  color: white;\n  padding: 0 30px;\n  background-color: rgb(34, 34, 44);\n  transition: 300ms;\n  display: none;\n\n  @media (max-width: 700px) {\n    display: flex;\n    height: 60px;\n  }\n"]))),ea=pn.b.div($||($=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  /* background-color: red; */\n  /* margin-right: 2px; */\n"]))),na=pn.b.div(ee||(ee=Object(De.a)(["\n  display: flex;\n"]))),ta=function(e){e.width;return he.a.createElement($t,null,he.a.createElement(ea,null,he.a.createElement(Kt.a,null),he.a.createElement(na,null,"Escrever")),he.a.createElement(ea,null,he.a.createElement(Qt.a,null),he.a.createElement(na,null,"Editar")),he.a.createElement(ea,null,he.a.createElement(Zt.a,null),he.a.createElement(na,null,"Apagar")))},aa=t(128),ra=t.n(aa),ia=t(129),la=t.n(ia),oa=pn.b.div(ne||(ne=Object(De.a)(["\n  padding-top: 80px;\n\n  @media (max-width: 700px) {\n    padding-top: 60px;\n    padding-bottom: 80px;\n  }\n"]))),ca=pn.b.div(te||(te=Object(De.a)(["\n  width: 100%;\n  max-width: 1200px;\n\n  @media (min-width: 700px) {\n    padding-top: 30px;\n    display: grid;\n    margin: 0 auto;\n    grid-template-columns: 320px 320px 170px 1fr;\n    column-gap: 15px;\n    grid-template-rows: auto;\n    grid-template-areas:\n      'image image actions participants'\n      'title title . participants'\n      'description description . participants';\n  }\n"]))),sa=pn.b.div(ae||(ae=Object(De.a)(["\n  display: flex;\n\n  grid-area: image;\n\n  width: 640px;\n  height: 360px;\n\n  background-image: url(",");\n  background-size: 100% 100%;\n\n  @media (max-width: 700px) {\n    height: 250px;\n    width: 100%;\n  }\n"])),kn.a),ua=pn.b.div(re||(re=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  grid-area: actions;\n\n  justify-content: center;\n  /* margin-left: 16px; */\n  /* justify-self: start; */\n\n  button:not(:first-child),\n  a {\n    margin-top: 20px;\n  }\n\n  @media (max-width: 700px) {\n    visibility: hidden;\n  }\n"]))),da=pn.b.div(ie||(ie=Object(De.a)(["\n  display: flex;\n\n  grid-area: title;\n\n  padding: 10px 10px;\n  /* justify-content: center; */\n  text-align: center;\n\n  font-family: Grenze Gotisch;\n  line-height: 32px;\n  font-size: 32px;\n  margin-top: 18px;\n\n  @media (max-width: 700px) {\n    font-size: 24px;\n  }\n"]))),ma=pn.b.div(le||(le=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  grid-area: participants;\n\n  justify-self: right;\n\n  /* padding-right: 20px;\n  padding-left: 20px; */\n\n  h2 {\n    font-family: Grenze Gotisch;\n    line-height: 24px;\n    font-size: 32px;\n    font-weight: 500;\n\n    @media (max-width: 700px) {\n      font-size: 24px;\n    }\n  }\n\n  div:not(:first-child) {\n    margin-top: 10px;\n  }\n"]))),pa=pn.b.div(oe||(oe=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  grid-area: description;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 18px;\n  /* align-items: center;\n  text-align: center; */\n\n  h2 {\n    font-family: Grenze Gotisch;\n    line-height: 20px;\n    font-size: 32px;\n    font-weight: 500;\n    margin-bottom: 16px;\n\n    @media (max-width: 700px) {\n      font-size: 24px;\n    }\n  }\n\n  p:last-child {\n    margin-top: 10px;\n    line-height: 20px;\n  }\n"]))),ba=pn.b.div(ce||(ce=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 30px;\n  background-color: var(--color-primary);\n  width: 280px;\n  box-shadow: 1px 1px 5px 0 black;\n\n  div:not(:first-child) {\n    margin-top: 30px;\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]))),ga=(pn.b.div(se||(se=Object(De.a)(["\n  display: flex;\n  padding: 30px;\n  background-color: var(--color-primary);\n  /* width: 280px; */\n  box-shadow: 1px 1px 5px 0 black;\n\n  div:not(:first-child) {\n    margin-top: 30px;\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]))),pn.b.div(ue||(ue=Object(De.a)(["\n  border-bottom: 1px solid rgb(56, 68, 77);\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n\n  @media (min-width: 700px) {\n    display: none;\n  }\n"])))),ha=pn.b.div(de||(de=Object(De.a)(["\n  display: flex;\n  border-bottom: 1px solid rgb(56, 68, 77);\n  margin-top: 10px;\n  margin-bottom: 32px;\n  width: 100%;\n\n  @media (max-width: 700px) {\n    display: none;\n  }\n"]))),xa=function(e){var n=e.width;return he.a.createElement(oa,null,he.a.createElement(ca,null,he.a.createElement(sa,null),n>700?he.a.createElement(ua,null,he.a.createElement(cn.a,{style:{color:"white",backgroundColor:"rgb(33, 34, 44)",textTransform:"none",width:"150px",boxShadow:"1px 1px 5px 0 black"},endIcon:he.a.createElement(ra.a,null)},"Escrever"),he.a.createElement(Gn,{to:"/story/edit"},he.a.createElement(cn.a,{style:{color:"white",backgroundColor:"rgb(33, 34, 44)",textTransform:"none",width:"150px",boxShadow:"1px 1px 5px 0 black"},endIcon:he.a.createElement(la.a,null)},"Editar")),he.a.createElement(cn.a,{style:{color:"white",backgroundColor:"rgb(33, 34, 44)",textTransform:"none",width:"150px",boxShadow:"1px 1px 5px 0 black"},endIcon:he.a.createElement(Zt.a,null)},"Apagar")):null,he.a.createElement(da,null,"O RPG De Mesa Mais Doido Que Tem Um Titulo Gigantesco"),he.a.createElement(ga,null),he.a.createElement(pa,null,he.a.createElement(ha,null),he.a.createElement("h2",null,"Descri\xe7\xe3o"),he.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),he.a.createElement(ga,null),he.a.createElement(ma,null,he.a.createElement(ba,null,he.a.createElement("h2",null,"Mestre"),he.a.createElement(Jn,{name:"Nicolas"})),he.a.createElement(ba,null,he.a.createElement("h2",null,"Membros"),he.a.createElement(Jn,{name:"Luiz Felipe"}),he.a.createElement(Jn,{name:"Miguel Demarque"}),he.a.createElement(Jn,{name:"Gustavo Lopes"}))),he.a.createElement(ta,null)))},fa=t(130),Ea=t.n(fa),va=pn.b.div(me||(me=Object(De.a)(["\n  /* Makes div float */\n  position: fixed;\n  /* Makes div stay at the top */\n  top: 0px;\n  /* Makes div stay in front of almost everything else in the screen */\n  z-index: 9998;\n  /* Dimensions */\n  height: 80px;\n  width: 100%;\n  /* Defines itens arrangement in the div */\n  display: flex;\n  justify-content: space-between;\n  /* Styling */\n  color: white;\n  padding: 0 20px;\n  background-color: rgb(34, 34, 44);\n  transition: 300ms;\n\n  @media (max-width: 600px) {\n    height: 60px;\n  }\n"]))),ya=pn.b.div(pe||(pe=Object(De.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),wa=pn.b.div(be||(be=Object(De.a)(["\n  display: flex;\n  align-items: center;\n"]))),ja=function(e){var n=e.width;return he.a.createElement(va,null,he.a.createElement(Gn,{to:"/dashboard"},he.a.createElement(ya,null,he.a.createElement("img",{alt:"site-logo",src:Ea.a,width:"32",height:"38"}),he.a.createElement("h2",{style:{margin:"0",marginLeft:"10px"}},"RPG Storytelling"))),he.a.createElement(wa,null,he.a.createElement(Jn,{name:"Lopao del Morro",size:n<600?"small":"default"})))},Oa=Object(ve.a)((function(e){var n=e.width,t=Object(ge.useContext)(Te);return t.userStore.hydrating||t.userStore.loginStatus.loggedIn?t.userStore.loginStatus.loggedIn?he.a.createElement(we.a,null,he.a.createElement(je.d,null,he.a.createElement(je.b,{exact:!0,path:"/"},he.a.createElement(je.a,{to:"/dashboard"})),he.a.createElement(je.b,{path:"/dashboard"},he.a.createElement(ja,{width:n}),he.a.createElement(nt,{width:n})),he.a.createElement(je.b,{path:"/user"},he.a.createElement(ja,{width:n}),he.a.createElement(At,null)),he.a.createElement(je.b,{path:"/story/create"},he.a.createElement(ja,{width:n}),he.a.createElement(Ut,null)),he.a.createElement(je.b,{path:"/story/description"},he.a.createElement(ja,{width:n}),he.a.createElement(xa,{width:n})),he.a.createElement(je.b,{path:"/story/edit"},he.a.createElement(ja,{width:n}),he.a.createElement(Jt,null)))):null:he.a.createElement(we.a,null,he.a.createElement(je.d,null,he.a.createElement(je.b,{exact:!0,path:"/"},he.a.createElement(Cn,null)),he.a.createElement(je.a,{to:"/"})))})),ka=t(131),Sa=t(214),za=Object(ka.a)({typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',fontSize:18}}),Ca=new ye.a,Fa=Object(ve.a)((function(){var e=Object(ge.useState)(window.innerWidth),n=Object(Ee.a)(e,2),t=n[0],a=n[1],r=he.a.useContext(Te),i=he.a.useCallback((function(e){a(e.currentTarget.innerWidth)}),[]),l=he.a.useCallback((function(e){console.log(e)}),[]);return Object(ge.useEffect)((function(){return console.log("all cookies",Ca.getAll()),Ca.addChangeListener(l),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i),Ca.removeChangeListener(l)}}),[l,i]),Object(ge.useEffect)((function(){r.userStore.hydrating||(Ca.get("token")?r.userStore.setLoggedIn(!0):r.userStore.setLoggedIn(!1))}),[r.userStore]),console.log("hydrating:",r.userStore.hydrating,"loggedIn:",r.userStore.loginStatus.loggedIn),Object(ge.useEffect)((function(){window.scrollTo(0,0)}),[]),he.a.createElement(he.a.Fragment,null,he.a.createElement(Dn,null),he.a.createElement(Sa.a,{theme:za},he.a.createElement(Oa,{width:t})))}));fe.a.render(he.a.createElement(he.a.StrictMode,null,he.a.createElement(Fa,null)),document.getElementById("root"))},40:function(e,n,t){e.exports=t.p+"static/media/campire1.4c25125f.jpeg"}},[[139,1,2]]]);
//# sourceMappingURL=main.464399bd.chunk.js.map
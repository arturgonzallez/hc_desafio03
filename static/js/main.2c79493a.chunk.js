(this["webpackJsonppokemon-store"]=this["webpackJsonppokemon-store"]||[]).push([[0],{38:function(e,t,a){e.exports=a(74)},43:function(e,t,a){},63:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(5),s=a(15),m=(a(43),a(44),a(19)),i=a.n(m),u=(a(45),a(9)),d=a(2),p=a(12),b=a.n(p),f=a(16),E=a(36),v=a.n(E).a.create({baseURL:"https://pokeapi.co/api/v2",headers:{"Content-type":"application/json"}}),g=function(e,t){var a,n;return e=null!==(a=e)&&void 0!==a?a:12,t=null!==(n=t)&&void 0!==n?n:0,v.get("/pokemon/?limit=".concat(e,"&offset=").concat(t))},h=function(e){return v.get("/type/".concat(e))},N=function(e,t,a){var n,r;return t=null!==(n=t)&&void 0!==n?n:20,a=null!==(r=a)&&void 0!==r?r:0,v.get("/pokemon/".concat(e,"?limit=").concat(t,"&offset=").concat(a))},y=function(e,t){var a,n;return e=null!==(a=e)&&void 0!==a?a:16,t=null!==(n=t)&&void 0!==n?n:0,v.get("/type/?limit=".concat(e,"&offset=").concat(t))},k=function(e){return v.get("/type/".concat(e))},O=(a(63),a(10)),j=a(11),C=r.a.createContext({}),w=r.a.memo((function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(null),m=Object(o.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(null),E=Object(o.a)(p,2),v=E[0],N=E[1],y=Object(n.useState)("em destaque"),w=Object(o.a)(y,2),x=w[0],S=w[1],I=Object(d.g)().id,F=Object(n.useContext)(C).dispatch;Object(n.useEffect)((function(){R(I,null,null)}),[I]);var R=function(){var e=Object(f.a)(b.a.mark((function e(t,a,n){var r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=13;break}return e.next=4,h(t);case 4:return r=e.sent,e.next=7,k(t);case 7:c=e.sent,r.data.pokemon.length>20&&(r.data.pokemon=r.data.pokemon.slice(0,20)),l(r.data.pokemon),S("".concat(c.data.name)),e.next=20;break;case 13:return e.next=15,g(a,n);case 15:o=e.sent,l(o.data.results),u(o.data.previous),N(o.data.next),S("em destaque");case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t,a,n){return e.apply(this,arguments)}}(),P=function(e){var t;return null!==(t=e.name)&&void 0!==t?t:e.pokemon.name},A=function(e){var t=null;if(t=e.pokemon?e.pokemon.url:e.url){var a=t.split("/");return a[a.length-2]}return null},q=function(e){return(10.99*A(e)).toLocaleString("pt-BR")},J=function(e){return function(){e.id=A(e),e.name=P(e),e.price=q(e),F({type:"addToCart",item:e})}},T=function(){return i?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm mr-1",onClick:function(e){return B(e)}},r.a.createElement(O.a,{icon:j.a}))):r.a.createElement(r.a.Fragment,null)},$=function(){return v?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm ml-1",onClick:function(e){return L(e)}},r.a.createElement(O.a,{icon:j.b}))):r.a.createElement(r.a.Fragment,null)},B=function(e){e.preventDefault();var t=i.split("?"),a=t[t.length-1].split("&"),n=a[1].split("="),r=a[0].split("="),c=n[1],l=r[1];R(I,c,l)},L=function(e){e.preventDefault();var t=v.split("?"),a=t[t.length-1].split("&"),n=a[1].split("="),r=a[0].split("="),c=n[1],l=r[1];R(I,c,l)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,x),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 center"},T(),$())),r.a.createElement("div",{className:"list row center"},c&&c.map((function(e,t){return r.a.createElement("div",{className:"col-md-3",key:t},r.a.createElement("img",{className:"card-img-top",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(A(e),".png"),alt:P(e)}),r.a.createElement("div",{className:"card-body"},P(e),r.a.createElement("br",null),r.a.createElement("p",null,"R$ ",q(e)),r.a.createElement("button",{type:"button",name:"addItem",className:"btn btn-success btn-sm",onClick:J(e)},r.a.createElement(O.a,{icon:j.d})," Comprar")))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 center"},T(),$())),r.a.createElement("br",null))})),x=function(e){var t=e.itens,a=e.total,n=e.handleSuccess;return r.a.createElement("div",{id:"cartModal",className:"modal fade",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Finalizar Compra"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,"Voc\xea est\xe1 comprando ",r.a.createElement("b",null,t.length)," ite",t.length>1?"ns":"m","."),r.a.createElement("p",null,"O valor da sua compra \xe9 ",r.a.createElement("b",null,"R$ ",a),"."),r.a.createElement("p",null,"Para concluir clique no bot\xe3o prosseguir.")),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Voltar"),r.a.createElement("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:n},"Prosseguir")))))},S=function(e){e.itens,e.total;return r.a.createElement("div",{id:"cartModalSucesso",className:"modal fade",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Compra finalizada"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body center"},r.a.createElement("h1",null,"Parab\xe9ns!"),r.a.createElement("p",null,"Compra realizada.")),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Fechar")))))},I=function(){var e=Object(n.useContext)(C),t=e.state,a=e.dispatch,c=t.products,l=Object(n.createRef)();Object(n.useRef)((function(){c=a({type:"getProducts"})}),[t.products]);var o=function(){if(!Array.isArray(c))return 0;var e=c.reduce((function(e,t,a){return(parseFloat(t.price.replace(".","").replace(",","."))+parseFloat(e)).toFixed(2)}),0);return parseFloat(e).toLocaleString("pt-BR")},s=function(){i()("#cartModal").modal("toggle")},m=function(e){return function(){a({type:"removeItemOfCart",item:e})}},u=function(){a({type:"emptyCart",cancelled:!0})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card",ref:l},r.a.createElement("div",{className:"card-header center"},r.a.createElement("h5",{className:"card-title mt-2"},"CARRINHO")),r.a.createElement("ul",{className:"list-group list-group-flush"},c&&c.map((function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("img",{width:"50",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),alt:e.name})),r.a.createElement("div",{className:"col-md-5"},e.name),r.a.createElement("div",{className:"col-md-5 right"},"R$ ",e.price,r.a.createElement("button",{type:"button",name:"removeItem",className:"ml-1 btn btn-sm btn-outline-danger",onClick:m(e)},r.a.createElement(O.a,{icon:j.f})))))}))),r.a.createElement("div",{className:"card-body row"},r.a.createElement("div",{className:"col-md-6"},"Total: R$ ",o()),r.a.createElement("div",{className:"col-md-6 right"},c.length>0?r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:u},r.a.createElement(O.a,{icon:j.c})):"")),c.length>0?r.a.createElement("div",{className:"card-footer center"},r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:s},"FINALIZAR")):""),r.a.createElement(x,{itens:c,total:o(),handleSuccess:function(){a({type:"emptyCart"}),i()("#cartModalSucesso").modal("toggle")}}),r.a.createElement(S,null))},F=(a(70),function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)("Resultado para pesquisa"),m=Object(o.a)(s,2),i=m[0],u=m[1],p=Object(d.g)().keySearch,E=Object(n.useContext)(C).dispatch;Object(n.useEffect)((function(){v(p)}),[p]);var v=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u('Resultado da pesquisa para "'.concat(t,'"')),e.prev=1,e.next=4,N(t);case 4:404===(a=e.sent).status?l([]):l([a.data]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return(10.99*e.id).toLocaleString("pt-BR")},h=function(e){return function(){e.price=g(e),E({type:"addToCart",item:e})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,i),r.a.createElement("div",{className:"list row center"},c&&c.map((function(e,t){return r.a.createElement("div",{className:"col-md-3",key:t},r.a.createElement("img",{className:"card-img-top",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),alt:e.name}),r.a.createElement("div",{className:"card-body"},e.name,r.a.createElement("br",null),r.a.createElement("p",null,"R$ ",g(e)),r.a.createElement("button",{type:"button",name:"addItem",className:"btn btn-success btn-sm",onClick:h(e)},r.a.createElement(O.a,{icon:j.d})," Comprar")))})),0===c.length?"Nenhum resultado encontrado":""))}),R=(a(71),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Pokestore HC - Projeto desenvolvido para fins acad\xeamicos no programa Hiring Coders - Gama Academy"))))}),P=(a(72),function(){var e=Object(d.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-inline mt-2 mt-md-0"},r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("input",{className:"form-control mr-2",name:"pesquisar",type:"text",placeholder:"o que deseja encontrar?","aria-label":"Search",value:c,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()}})),r.a.createElement("button",{className:"btn btn-outline-success mb-2",type:"button",onClick:function(){c?(e.push("/search/".concat(c)),l("")):alert("Informe um termo para realizar a pesquisa.")}},r.a.createElement(O.a,{icon:j.e}))))}),A=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,l(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(e){var t=null;if(t=e.pokemon?e.pokemon.url:e.url){var a=t.split("/");return a[a.length-2]}return null};return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},c&&c.map((function(e,t){return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement(u.b,{to:"/tipos/".concat(m(e)),className:"nav-link"},e.name))}))))},q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},r.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Pokestore HC"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement(P,null),r.a.createElement(A,null)))))},J=a(17);a(73);var T=function(){var e={products:localStorage.getItem("products")&&localStorage.getItem("products").length>0?JSON.parse(localStorage.getItem("products")):[]},t=function(e,t){var a=t.find((function(t){return t.id===e.id}));return a&&(t.pop(a),Object(J.b)("Item removido do carrinho.")),localStorage.setItem("products",JSON.stringify(t)),t},a=Object(n.useCallback)((function(e,a){switch(a.type){case"addToCart":var n=function(e,t){return e.id=parseInt(e.id),t.find((function(t){return t.id===e.id}))?J.b.warn("Este item j\xe1 se encontra no carrinho."):(t.push(e),J.b.success("Item adicionado ao carrinho.")),localStorage.setItem("products",JSON.stringify(t)),t}(a.item,e.products);return Object(s.a)(Object(s.a)({},e),{},{products:n});case"getProducts":return e.products;case"emptyCart":return a.cancelled&&Object(J.b)("Todos os itens foram removidos do carrinho."),localStorage.setItem("products",JSON.stringify([])),Object(s.a)(Object(s.a)({},e),{},{products:[]});case"removeItemOfCart":return Object(s.a)(Object(s.a)({},e),{},{products:t(a.item,e.products)});default:throw new Error}}),[]),c=Object(n.useReducer)(a,e),l=Object(o.a)(c,2),m={state:l[0],dispatch:l[1]};return r.a.createElement(u.a,null,r.a.createElement(C.Provider,{value:m},r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(d.c,null,r.a.createElement(d.a,{key:"inicio",exact:!0,path:["/","/inicio"],component:w}),r.a.createElement(d.a,{key:"tipos",path:"/tipos/:id",component:w}),r.a.createElement(d.a,{key:"search",path:"/search/:keySearch",component:F}))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(I,null))))),r.a.createElement(R,null),r.a.createElement(J.a,{position:"bottom-right",autoClose:2e3})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(u.a,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.2c79493a.chunk.js.map
(this["webpackJsonpreact-currency-exchange"]=this["webpackJsonpreact-currency-exchange"]||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o);var l=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("h1",{className:"home"},"Welcome to PokeSite")))},p=n(8);var c=function(){return r.a.createElement("div",{className:"button"},r.a.createElement("body",{className:"containerSign"}),r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",{className:"signup"},"Sign Up")),r.a.createElement(p.b,{to:"/login"},r.a.createElement("button",{className:"login"},"log in")))},i=n(1),d=n.n(i),u=n(4),m=n(9);function y(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(d.a.mark((function e(){var t,n,a,r,o,s,l,p,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("signupUsername").value,n=document.getElementById("signupPassword").value,a=document.getElementById("signupError"),console.log(t),console.log(n),r={userName:t,userPassword:n},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.next=9,fetch("https://completed-poke-server.herokuapp.com/users",o);case 9:return s=e.sent,e.next=12,s.json();case 12:return"Successfully signed up"!==(l=e.sent).status&&(a.innerText=l.status,a.style.display="block"),"Successfully signed up"===l.status&&(window.location.href="#/login"),e.next=17,fetch("https://completed-poke-server.herokuapp.com/users");case 17:return p=e.sent,e.next=20,p.json();case 20:c=e.sent,console.log(c);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){return r.a.createElement("div",{className:"vertical-menu"},r.a.createElement(p.b,{to:"/"},r.a.createElement(m.a,{className:"icon-signup"})),r.a.createElement("h1",{className:"title-signup-menu"},"Signup"),r.a.createElement("form",{className:"signup-form"},r.a.createElement("h3",{id:"signupError"},"error message"),r.a.createElement("input",{type:"text",placeholder:"Username",id:"signupUsername"}),r.a.createElement("input",{type:"password",placeholder:"password",id:"signupPassword"}),r.a.createElement("button",{type:"button",onClick:y}," Create Account "),r.a.createElement("a",{href:"/login"},"Log In")))};n(12);function f(){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(d.a.mark((function e(){var t,n,a,r,o,s,l,p,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("loginUsername").value,n=document.getElementById("loginPassword").value,a=document.getElementById("loginError"),r={loginUserName:t,loginPassword:n},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.next=7,fetch("https://completed-poke-server.herokuapp.com/users/login",o);case 7:return s=e.sent,e.next=10,s.json();case 10:return"The user was successfully logged in"!==(l=e.sent).status&&(a.innerText=l.status,a.style.display="block"),"The user was successfully logged in"===l.status&&(fetch("https://completed-poke-server.herokuapp.com/signedInPost",{method:"POST",headers:{"Content-Type":"application/json"}}),window.location.href="#/pokeStats"),e.next=15,fetch("https://completed-poke-server.herokuapp.com/users");case 15:return p=e.sent,e.next=18,p.json();case 18:c=e.sent,console.log(c);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){return r.a.createElement("div",{className:"vertical-menu"},r.a.createElement(p.b,{to:"/"},r.a.createElement(m.a,{className:"icon-signup"})),r.a.createElement("h1",{className:"title-signup-menu"},"Login"),r.a.createElement("form",{className:"signup-form"},r.a.createElement("h3",{id:"loginError"},"login Error"),r.a.createElement("input",{type:"text",placeholder:"Username",id:"loginUsername"}),r.a.createElement("input",{type:"password",placeholder:"password",id:"loginPassword"}),r.a.createElement("button",{type:"button",onClick:f},"Login"),r.a.createElement("a",{href:"/signup"},"Sign up")))},b=n(2);function C(){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://completed-poke-server.herokuapp.com/signedIn");case 2:return t=e.sent,e.next=5,t.json();case 5:!1===e.sent&&(window.location.href="/404"),x();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(d.a.mark((function e(){var t,n,a,r,o,s,l,p,c,i,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("load-poke-button").style.display="none",t=document.getElementById("main-box"),n=document.getElementById("pop-up"),a=document.getElementById("pokemonName"),r=document.getElementById("icon-pop-up"),o=document.getElementById("type-card"),"https://pokeapi.co/api/v2/pokemon?limit=807",e.next=10,fetch("https://pokeapi.co/api/v2/pokemon?limit=807");case 10:return s=e.sent,e.next=13,s.json();case 13:l=e.sent,p=[],c=[],i=d.a.mark((function e(s){var i,m,y;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.push(l.results[s].name),c.push(l.results[s].url),(i=document.createElement("div")).classList.add("pokemonCard"),e.next=6,M(c[s],i);case 6:m=e.sent,y="".concat(p[s].toUpperCase(),"\n        <div class='img-container'>\n        <img src= https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(s+1,".png />\n        </div>\n        <div class='num'> ").concat(s+1," </div>\n        <div class='type-card'>Type: ").concat(m,"</div> "),i.innerHTML=y,t.appendChild(i),i.addEventListener("click",Object(u.a)(d.a.mark((function e(){var l,c,u,y,h,g,f,k,v,b,C,E,x,w,M,I,B,T,L,N,j,A,P,S,H,O,U,F;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.style.filter="blur(8px)",t.style.opacity="40%",n.style.backgroundColor=i.style.backgroundColor,a.innerText=p[s].toUpperCase(),document.getElementById("pop-up-img").src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(s+1,".png"),n.style.display="block",o.innerHTML="type: "+m,l=255,c=165,u=230,y=154,h=230,g=160,f="https://pokeapi.co/api/v2/pokemon/".concat(s+1,"/"),e.next=16,fetch(f);case 16:return k=e.sent,e.next=19,k.json();case 19:for(v=e.sent,b=document.getElementById("value"),C=document.getElementById("value2"),E=document.getElementById("value3"),x=document.getElementById("value4"),w=document.getElementById("value5"),M=document.getElementById("value6"),I=document.getElementById("progress"),B=document.getElementById("progress2"),T=document.getElementById("progress3"),L=document.getElementById("progress4"),N=document.getElementById("progress5"),j=document.getElementById("progress6"),I.style.width="10%",A=0;A<v.stats.length;A++)"hp"==v.stats[A].stat.name&&(b.innerHTML=v.stats[A].base_stat,P=b.innerHTML/l*100,I.style.width="".concat(P,"%")),"attack"==v.stats[A].stat.name&&(C.innerHTML=v.stats[A].base_stat,S=C.innerHTML/c*100,B.style.width="".concat(S,"%")),"defense"==v.stats[A].stat.name&&(E.innerHTML=v.stats[A].base_stat,H=E.innerHTML/u*100,T.style.width="".concat(H,"%")),"special-attack"==v.stats[A].stat.name&&(x.innerHTML=v.stats[A].base_stat,O=x.innerHTML/y*100,L.style.width="".concat(O,"%")),"special-defense"==v.stats[A].stat.name&&(w.innerHTML=v.stats[A].base_stat,U=w.innerHTML/h*100,N.style.width="".concat(U,"%")),"speed"==v.stats[A].stat.name&&(M.innerHTML=v.stats[A].base_stat,F=M.innerHTML/g*100,j.style.width="".concat(F,"%"));r.addEventListener("click",(function(){n.style.display="none",t.style.opacity="100%",t.style.filter="blur(0px)"}));case 35:case"end":return e.stop()}}),e)}))));case 11:case"end":return e.stop()}}),e)})),m=0;case 18:if(!(m<l.results.length)){e.next=23;break}return e.delegateYield(i(m),"t0",20);case 20:m++,e.next=18;break;case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(d.a.mark((function e(t,n){var a,r,o,s,l,p,c,i,u,m,y,h,g,f,k,v,b,C,E,x,w;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:if(r=e.sent,s="#78C850",l="#A040A0",p="#F08030",c="#A890F0",i="#6890F0",u="#A8B820",m="#A8A878",y="#E0C068",h="#F8D030",g="#EE99AC",f="#C03028",k="#F85888",v="#B8B8D0",b="#98D8D8",C="#705898",E="#B8A038",x="#7038F8",w="#705848",2!=r.types.length){e.next=47;break}return o="".concat(r.types[0].type.name," , ").concat(r.types[1].type.name),"grass"==r.types[0].type.name&&(n.style.backgroundColor=s),"poison"==r.types[0].type.name&&(n.style.backgroundColor=l),"fire"==r.types[0].type.name&&(n.style.backgroundColor=p),"flying"==r.types[0].type.name&&(n.style.backgroundColor=c),"water"==r.types[0].type.name&&(n.style.backgroundColor=i),"bug"==r.types[0].type.name&&(n.style.backgroundColor=u),"normal"==r.types[0].type.name&&(n.style.backgroundColor=m),"ground"==r.types[0].type.name&&(n.style.backgroundColor=y),"electric"==r.types[0].type.name&&(n.style.backgroundColor=h),"fairy"==r.types[0].type.name&&(n.style.backgroundColor=g),"fighting"==r.types[0].type.name&&(n.style.backgroundColor=f),"psychic"==r.types[0].type.name&&(n.style.backgroundColor=k),"steel"==r.types[0].type.name&&(n.style.backgroundColor=v),"ice"==r.types[0].type.name&&(n.style.backgroundColor=b),"ghost"==r.types[0].type.name&&(n.style.backgroundColor=C),"rock"==r.types[0].type.name&&(n.style.backgroundColor=E),"dragon"==r.types[0].type.name&&(n.style.backgroundColor=x),"dark"==r.types[0].type.name&&(n.style.backgroundColor=w),e.abrupt("return",o);case 47:return o=r.types[0].type.name,"grass"==r.types[0].type.name&&(n.style.backgroundColor=s),"poison"==r.types[0].type.name&&(n.style.backgroundColor=l),"fire"==r.types[0].type.name&&(n.style.backgroundColor=p),"flying"==r.types[0].type.name&&(n.style.backgroundColor=c),"water"==r.types[0].type.name&&(n.style.backgroundColor=i),"bug"==r.types[0].type.name&&(n.style.backgroundColor=u),"normal"==r.types[0].type.name&&(n.style.backgroundColor=m),"ground"==r.types[0].type.name&&(n.style.backgroundColor=y),"electric"==r.types[0].type.name&&(n.style.backgroundColor=h),"fairy"==r.types[0].type.name&&(n.style.backgroundColor=g),"fighting"==r.types[0].type.name&&(n.style.backgroundColor=f),"psychic"==r.types[0].type.name&&(n.style.backgroundColor=k),"steel"==r.types[0].type.name&&(n.style.backgroundColor=v),"ice"==r.types[0].type.name&&(n.style.backgroundColor=b),"ghost"==r.types[0].type.name&&(n.style.backgroundColor=C),"rock"==r.types[0].type.name&&(n.style.backgroundColor=E),"dragon"==r.types[0].type.name&&(n.style.backgroundColor=x),"dark"==r.types[0].type.name&&(n.style.backgroundColor=w),e.abrupt("return",o);case 67:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){return r.a.createElement("div",{className:"stats-bg"},r.a.createElement("nav",{className:"main-Nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#/counters"},"Counters")))),window.onload=C,r.a.createElement("div",{id:"load-poke-button",onClick:C},r.a.createElement("div",{id:"inside-card-another-div"},r.a.createElement("h1",{id:"text-on-pokeball-lul"},"Click to Load data"))),r.a.createElement("div",{id:"pop-up-container"},r.a.createElement("div",{id:"pop-up"},r.a.createElement(m.a,{id:"icon-pop-up"}),r.a.createElement("h1",{id:"pokemonName"}),r.a.createElement("div",{id:"image-container-card"},r.a.createElement("img",{id:"pop-up-img"})),r.a.createElement("div",{id:"type-card"}),r.a.createElement("div",{id:"progress-barHolder"},r.a.createElement("div",{id:"progress-bar1"},r.a.createElement("h2",{id:"stat"},"HP"),r.a.createElement("div",{id:"bar1"},r.a.createElement("div",{id:"progress"})),r.a.createElement("h2",{id:"value"},"43")),r.a.createElement("div",{id:"progress-bar2"},r.a.createElement("h2",{id:"stat2"},"Attack"),r.a.createElement("div",{id:"bar2"},r.a.createElement("div",{id:"progress2"})),r.a.createElement("h2",{id:"value2"},"43")),r.a.createElement("div",{id:"progress-bar3"},r.a.createElement("h2",{id:"stat3"},"Defense"),r.a.createElement("div",{id:"bar3"},r.a.createElement("div",{id:"progress3"})),r.a.createElement("h2",{id:"value3"},"43")),r.a.createElement("div",{id:"progress-bar4"},r.a.createElement("h2",{id:"stat4"},"Sp. Atk"),r.a.createElement("div",{id:"bar4"},r.a.createElement("div",{id:"progress4"})),r.a.createElement("h2",{id:"value4"},"43")),r.a.createElement("div",{id:"progress-bar5"},r.a.createElement("h2",{id:"stat5"},"Sp. Def"),r.a.createElement("div",{id:"bar5"},r.a.createElement("div",{id:"progress5"})),r.a.createElement("h2",{id:"value5"},"43")),r.a.createElement("div",{id:"progress-bar6"},r.a.createElement("h2",{id:"stat6"},"Speed"),r.a.createElement("div",{id:"bar6"},r.a.createElement("div",{id:"progress6"})),r.a.createElement("h2",{id:"value6"},"43"))))),r.a.createElement("div",{id:"main-box"}))};var T=function(){return r.a.createElement("div",{id:"loggedOut-bg"},r.a.createElement("h1",null,"404",r.a.createElement("br",null),"User not Logged In"))};function L(){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://completed-poke-server.herokuapp.com/signedIn");case 2:return t=e.sent,e.next=5,t.json();case 5:!1===(n=e.sent)&&(window.location.href="/404"),console.log(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(d.a.mark((function e(){var t,n,a,r,o,s,l,p,c,i,u,m,y,h,g,f,k,v,b,C,E,x,w,M,I,B,T,L,N,j,A;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main-box"),"https://pokeapi.co/api/v2/pokemon?limit=807",e.next=4,fetch("https://pokeapi.co/api/v2/pokemon?limit=807");case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=[],o=[],s=document.getElementById("counter-container"),l=document.getElementById("title-select-container"),p=document.getElementById("select-pokemon-close"),c=document.getElementById("counterCard-palceholder"),(i=document.getElementById("counter-box-container")).style.display="none",["grass","poison","fire","flying","water","bug","normal","ground","electric","fairy","fighting","psychic","steel","ice","ghost","rock","dragon","dark"],u=[],m=[],y=[],h=[],g=[],f=[],k=[],v=[],b=[],C=[],E=[],x=[],w=[],M=[],I=[],B=[],T=[],L=[],N=document.getElementById("counter-Cards-Container"),t.style.display="flex",l.style.display="block",s.style.display="none",j=d.a.mark((function e(n){var j,A,S;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.push(a.results[n].name),o.push(a.results[n].url),(j=document.createElement("div")).classList.add("pokemonCard"),e.next=6,P(o[n],j);case 6:A=e.sent,S="".concat(r[n].toUpperCase(),"\n        <div class='img-container'>\n        <img src= https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(n+1,".png />\n        </div>\n        <div class='num'> ").concat(n+1," </div>\n        <div class='type-card'>Type: ").concat(A,"</div> "),j.innerHTML=S,t.appendChild(j),"grass"==A.split(" ,")[0]&&u.push(j),"poison"==A.split(" ,")[0]&&m.push(j),"fire"==A.split(" ,")[0]&&y.push(j),"flying"==A.split(" ,")[0]&&h.push(j),"water"==A.split(" ,")[0]&&g.push(j),"bug"==A.split(" ,")[0]&&f.push(j),"normal"==A.split(" ,")[0]&&k.push(j),"ground"==A.split(" ,")[0]&&v.push(j),"electric"==A.split(" ,")[0]&&b.push(j),"fairy"==A.split(" ,")[0]&&C.push(j),"fighting"==A.split(" ,")[0]&&E.push(j),"psychic"==A.split(" ,")[0]&&x.push(j),"steel"==A.split(" ,")[0]&&w.push(j),"ice"==A.split(" ,")[0]&&M.push(j),"ghost"==A.split(" ,")[0]&&I.push(j),"rock"==A.split(" ,")[0]&&B.push(j),"dragon"==A.split(" ,")[0]&&T.push(j),"dark"==A.split(" ,")[0]&&L.push(j),j.addEventListener("click",(function(){var e=[];if(c.style.backgroundColor=j.style.backgroundColor,c.innerHTML=j.innerHTML,c.style.border="0px",t.style.display="none",s.style.display="flex",l.style.display="none",i.style.display="block",N.innerHTML="","ground"==A.split(" ,")[0])for(var n=0;n<u.length;n++){for(var a=0;a<3;a++){var r=Math.floor(Math.random()*u.length);e.push(r)}N.appendChild(u[e[0]]),N.appendChild(u[e[1]]),N.appendChild(u[e[2]]);break}if("fairy"==A.split(" ,")[0])for(var o=0;o<m.length;o++){for(var p=0;p<3;p++){var d=Math.floor(Math.random()*m.length);e.push(d)}N.appendChild(m[e[0]]),N.appendChild(m[e[1]]),N.appendChild(m[e[2]]);break}if("bug"==A.split(" ,")[0])for(var h=0;h<y.length;h++){for(var f=0;f<3;f++){var k=Math.floor(Math.random()*y.length);e.push(k)}N.appendChild(y[e[0]]),N.appendChild(y[e[1]]),N.appendChild(y[e[2]]);break}if("fighting"==A.split(" ,")[0])for(var T=0;T<x.length;T++){for(var P=0;P<3;P++){var S=Math.floor(Math.random()*x.length);e.push(S)}N.appendChild(x[e[0]]),N.appendChild(x[e[1]]),N.appendChild(x[e[2]]);break}if("steel"==A.split(" ,")[0])for(var H=0;H<g.length;H++){for(var O=0;O<3;O++){var U=Math.floor(Math.random()*g.length);e.push(U)}N.appendChild(g[e[0]]),N.appendChild(g[e[1]]),N.appendChild(g[e[2]]);break}if("grass"==A.split(" ,")[0])for(var F=0;F<y.length;F++){for(var D=0;D<3;D++){console.log(y.length);var _=Math.floor(Math.random()*y.length);e.push(_)}N.appendChild(y[e[0]]),N.appendChild(y[e[1]]),N.appendChild(y[e[2]]);break}if("ghost"==A.split(" ,")[0])for(var J=0;J<L.length;J++){for(var Y=0;Y<3;Y++){var q=Math.floor(Math.random()*L.length);e.push(q)}N.appendChild(L[e[0]]),N.appendChild(L[e[1]]),N.appendChild(L[e[2]]);break}if("electric"==A.split(" ,")[0])for(var K=0;K<v.length;K++){for(var R=0;R<3;R++){var W=Math.floor(Math.random()*v.length);e.push(W)}N.appendChild(v[e[0]]),N.appendChild(v[e[1]]),N.appendChild(v[e[2]]);break}if("flying"==A.split(" ,")[0])for(var z=0;z<b.length;z++){for(var G=0;G<3;G++){var Q=Math.floor(Math.random()*b.length);e.push(Q)}N.appendChild(b[e[0]]),N.appendChild(b[e[1]]),N.appendChild(b[e[2]]);break}if("dark"==A.split(" ,")[0])for(var V=0;V<C.length;V++){for(var X=0;X<3;X++){var Z=Math.floor(Math.random()*C.length);e.push(Z)}N.appendChild(C[e[0]]),N.appendChild(C[e[1]]),N.appendChild(C[e[2]])}if("normal"==A.split(" ,")[0])for(var $=0;$<E.length;$++){for(var ee=0;ee<3;ee++){var te=Math.floor(Math.random()*E.length);e.push(te)}N.appendChild(E[e[0]]),N.appendChild(E[e[1]]),N.appendChild(E[e[2]])}if("poison"==A.split(" ,")[0])for(var ne=0;ne<x.length;ne++){for(var ae=0;ae<3;ae++){var re=Math.floor(Math.random()*x.length);e.push(re)}N.appendChild(x[e[0]]),N.appendChild(x[e[1]]),N.appendChild(x[e[2]])}if("rock"==A.split(" ,")[0])for(var oe=0;oe<w.length;oe++){for(var se=0;se<3;se++){var le=Math.floor(Math.random()*w.length);e.push(le)}N.appendChild(w[e[0]]),N.appendChild(w[e[1]]),N.appendChild(w[e[2]]);break}if("dragon"==A.split(" ,")[0])for(var pe=0;pe<M.length;pe++){for(var ce=0;ce<3;ce++){var ie=Math.floor(Math.random()*M.length);e.push(ie)}N.appendChild(M[e[0]]),N.appendChild(M[e[1]]),N.appendChild(M[e[2]])}if("psychic"==A.split(" ,")[0])for(var de=0;de<I.length;de++){for(var ue=0;ue<3;ue++){var me=Math.floor(Math.random()*I.length);e.push(me)}N.appendChild(I[e[0]]),N.appendChild(I[e[1]]),N.appendChild(I[e[2]])}if("fire"==A.split(" ,")[0])for(var ye=0;ye<B.length;ye++){for(var he=0;he<3;he++){var ge=Math.floor(Math.random()*B.length);e.push(ge)}N.appendChild(B[e[0]]),N.appendChild(B[e[1]]),N.appendChild(B[e[2]])}if("water"==A.split(" ,")[0])for(var fe=0;fe<b.length;fe++){for(var ke=0;ke<3;ke++){var ve=Math.floor(Math.random()*b.length);e.push(ve)}N.appendChild(b[e[0]]),N.appendChild(b[e[1]]),N.appendChild(b[e[2]])}if("ice"==A.split(" ,")[0])for(var be=0;be<E.length;be++){for(var Ce=0;Ce<3;Ce++){var Ee=Math.floor(Math.random()*E.length);e.push(Ee)}N.appendChild(E[e[0]]),N.appendChild(E[e[1]]),N.appendChild(E[e[2]])}})),p.addEventListener("click",(function(){t.style.display="none",s.style.display="flex",l.style.display="none"}));case 30:case"end":return e.stop()}}),e)})),A=0;case 41:if(!(A<a.results.length)){e.next=46;break}return e.delegateYield(j(A),"t0",43);case 43:A++,e.next=41;break;case 46:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(d.a.mark((function e(t,n){var a,r,o,s,l,p,c,i,u,m,y,h,g,f,k,v,b,C,E,x,w;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:if(r=e.sent,s="#78C850",l="#A040A0",p="#F08030",c="#A890F0",i="#6890F0",u="#A8B820",m="#A8A878",y="#E0C068",h="#F8D030",g="#EE99AC",f="#C03028",k="#F85888",v="#B8B8D0",b="#98D8D8",C="#705898",E="#B8A038",x="#7038F8",w="#705848",2!=r.types.length){e.next=47;break}return o="".concat(r.types[0].type.name," , ").concat(r.types[1].type.name),"grass"==r.types[0].type.name&&(n.style.backgroundColor=s),"poison"==r.types[0].type.name&&(n.style.backgroundColor=l),"fire"==r.types[0].type.name&&(n.style.backgroundColor=p),"flying"==r.types[0].type.name&&(n.style.backgroundColor=c),"water"==r.types[0].type.name&&(n.style.backgroundColor=i),"bug"==r.types[0].type.name&&(n.style.backgroundColor=u),"normal"==r.types[0].type.name&&(n.style.backgroundColor=m),"ground"==r.types[0].type.name&&(n.style.backgroundColor=y),"electric"==r.types[0].type.name&&(n.style.backgroundColor=h),"fairy"==r.types[0].type.name&&(n.style.backgroundColor=g),"fighting"==r.types[0].type.name&&(n.style.backgroundColor=f),"psychic"==r.types[0].type.name&&(n.style.backgroundColor=k),"steel"==r.types[0].type.name&&(n.style.backgroundColor=v),"ice"==r.types[0].type.name&&(n.style.backgroundColor=b),"ghost"==r.types[0].type.name&&(n.style.backgroundColor=C),"rock"==r.types[0].type.name&&(n.style.backgroundColor=E),"dragon"==r.types[0].type.name&&(n.style.backgroundColor=x),"dark"==r.types[0].type.name&&(n.style.backgroundColor=w),e.abrupt("return",o);case 47:return o=r.types[0].type.name,"grass"==r.types[0].type.name&&(n.style.backgroundColor=s),"poison"==r.types[0].type.name&&(n.style.backgroundColor=l),"fire"==r.types[0].type.name&&(n.style.backgroundColor=p),"flying"==r.types[0].type.name&&(n.style.backgroundColor=c),"water"==r.types[0].type.name&&(n.style.backgroundColor=i),"bug"==r.types[0].type.name&&(n.style.backgroundColor=u),"normal"==r.types[0].type.name&&(n.style.backgroundColor=m),"ground"==r.types[0].type.name&&(n.style.backgroundColor=y),"electric"==r.types[0].type.name&&(n.style.backgroundColor=h),"fairy"==r.types[0].type.name&&(n.style.backgroundColor=g),"fighting"==r.types[0].type.name&&(n.style.backgroundColor=f),"psychic"==r.types[0].type.name&&(n.style.backgroundColor=k),"steel"==r.types[0].type.name&&(n.style.backgroundColor=v),"ice"==r.types[0].type.name&&(n.style.backgroundColor=b),"ghost"==r.types[0].type.name&&(n.style.backgroundColor=C),"rock"==r.types[0].type.name&&(n.style.backgroundColor=E),"dragon"==r.types[0].type.name&&(n.style.backgroundColor=x),"dark"==r.types[0].type.name&&(n.style.backgroundColor=w),e.abrupt("return",o);case 67:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(){return r.a.createElement("div",{className:"counters-bg"},window.onload=L,r.a.createElement("nav",{className:"main-Nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#/pokeStats"},"poke Stats")))),r.a.createElement("div",{id:"counter-container"},r.a.createElement("div",{id:"counterCard-palceholder",onClick:j},r.a.createElement("h1",{id:"text-on-placeholder"},"Pick a pokemon to counter"),r.a.createElement("h1",{id:"question-mark"},"?"))),r.a.createElement("div",{id:"counter-box-container"},r.a.createElement("h1",{id:"counter-title-word"},"COUNTER PICKS"),r.a.createElement("div",{id:"counter-Cards-Container"})),r.a.createElement("div",{id:"title-select-container"},r.a.createElement("h1",{id:"select-card-title"},"Select a Pokemon "),r.a.createElement(m.a,{id:"select-pokemon-close"})),r.a.createElement("div",{id:"main-box"}))};function O(){return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(c,null))}var U=function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/signup",component:g}),r.a.createElement(b.a,{exact:!0,path:"/",component:O}),r.a.createElement(b.a,{exact:!0,path:"/login",component:v}),r.a.createElement(b.a,{exact:!0,path:"/pokeStats",component:B}),r.a.createElement(b.a,{exact:!0,path:"/counters",component:H}),r.a.createElement(b.a,{exact:!0,path:"/404",component:T}))))};s.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c524ad37.chunk.js.map
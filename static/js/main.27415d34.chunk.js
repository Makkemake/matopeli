(this.webpackJsonpmatopeli=this.webpackJsonpmatopeli||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(7),s=n.n(o),i=(n(13),n(2)),u=(n(14),n(3)),l=function(e){return Object(u.a)(Array(Math.round(e)).keys())},j=(n(15),function(e){var t=e.points,n=e.setPoints,r=Object(c.useState)(parseInt(localStorage.getItem("snake-boars-size"))||30),o=Object(i.a)(r,2),s=o[0],j=o[1],b=Object(c.useState)(parseInt(localStorage.getItem("snake-boars-size"))||30),f=Object(i.a)(b,2),d=f[0],p=f[1],O=function(){for(var e=[],t=0;t<s;t++){e[t]=[];for(var n=0;n<d;n++)e[t][n]="blank"}return e},h=[{name:"tyhj\xe4",location:[]},{name:"keski",location:l(.6*d).map((function(e){return{x:Math.round(s/2),y:e+Math.ceil(.2*d)}}))},{name:"reunat",location:[].concat(Object(u.a)(l(d).map((function(e){return{x:e,y:0}}))),Object(u.a)(l(d).map((function(e){return{x:e,y:d-1}}))),Object(u.a)(l(s).map((function(e){return{x:0,y:e}}))),Object(u.a)(l(s).map((function(e){return{x:s-1,y:e}}))))},{name:"oma",location:[]}],m=function(){return h[Math.floor(Math.random()*h.length)]},x=function e(){var t={x:Math.floor(Math.random()*d),y:Math.floor(Math.random()*s)};return k.location.some((function(e){var n=e.x,a=e.y;return t.x===n&&t.y===a}))?e():t},v=Object(c.useState)(m()),y=Object(i.a)(v,2),k=y[0],S=y[1],g=Object(c.useState)(O),N=Object(i.a)(g,2),w=N[0],I=N[1],E=Object(c.useState)([{x:1,y:1}]),M=Object(i.a)(E,2),A=M[0],B=M[1],J=Object(c.useState)("right"),L=Object(i.a)(J,2),P=L[0],z=L[1],C=Object(c.useState)(x),G=Object(i.a)(C,2),K=G[0],$=G[1],F=Object(c.useState)(),R=Object(i.a)(F,2),T=R[0],U=R[1],q=Object(c.useState)(!1),D=Object(i.a)(q,2),H=D[0],Q=D[1],V=Object(c.useState)(null),W=Object(i.a)(V,2),X=W[0],Y=W[1];Object(c.useEffect)((function(){d>=10&&d<=100&&s>=10&&s<=100&&(S(m()),I(O()),$(x()))}),[d,s]);document.addEventListener("keydown",(function(e){switch(e.keyCode){case 37:z("left");break;case 38:z("top");break;case 39:z("right");break;case 40:z("bottom")}}));var Z=w.map((function(e,t){return Object(a.jsx)("div",{className:"Snake-row",children:e.map((function(e,t){return Object(a.jsx)("div",{className:"tile ".concat(e)},"${i}-${j}")}))},t)}));return function(e,t,n){var a=Object(c.useRef)();Object(c.useEffect)((function(){a.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return n(e),function(){return clearInterval(e)}}}),[t,n])}((function(){if(X){var e=[];switch(P){case"right":e.push({x:A[0].x,y:(A[0].y+1)%d});break;case"left":e.push({x:A[0].x,y:(A[0].y-1+d)%d});break;case"top":e.push({x:(A[0].x-1+s)%s,y:A[0].y});break;case"bottom":e.push({x:(A[0].x+1)%s,y:A[0].y})}if(function(){var e=A[0],t=A.slice(1,-1).find((function(t){return t.x===e.x&&t.y===e.y})),n=k.location.some((function(t){var n=t.x,a=t.y;return e.x===n&&e.y===a}));return t||n}()){Q(!0),clearInterval(T);var a=JSON.parse(localStorage.getItem("snake-points"))||[],c=prompt("Peli p\xe4\xe4ttyi! Anna nimimerkkisi:");a.push({name:c,points:t}),localStorage.setItem("snake-points",JSON.stringify(a)),window.dispatchEvent(new Event("storage"))}A.forEach((function(t){e.push(t)}));var r=A[0];r.x===K.x&&r.y===K.y?($(x),n(t+1)):e.pop(),B(e),function(){var e=O();A.forEach((function(t){e[t.x][t.y]="snake"})),e[K.x][K.y]="food",k.location.forEach((function(t){e[t.x][t.y]="obstacle"})),I(e)}()}}),150,U),Object(a.jsxs)("div",{className:"Snake-board",children:[!X&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:["Pelilaudan koko on nyt ",d," ruutua."]}),Object(a.jsx)("div",{children:"Aseta halutessasi uusi pelilaudan koko:"}),Object(a.jsx)("input",{className:"Board-size",placeholder:"Koko 10-100",type:"number",onChange:function(e){var t=parseInt(e.target.value);t<=100&&t>=10?(console.log("OK",t),p(t),j(t),localStorage.setItem("snake-board-size",t)):console.error("Ei hyv\xe4",t)}}),Object(a.jsx)("button",{className:"start",onClick:Y,children:"Aloita peli"})]}),Z,H&&Object(a.jsx)("div",{className:"Game-over",children:"Game over!"})]})}),b=(n(16),function(e){var t=e.points;return Object(a.jsxs)("div",{className:"Points",children:[t," pistett\xe4"]})}),f=(n(17),function(){return JSON.parse(localStorage.getItem("snake-points"))||[]}),d=function(){var e=Object(c.useState)(f()),t=Object(i.a)(e,2),n=t[0],r=t[1];window.addEventListener("storage",(function(){r(f())}));n.sort((function(e,t){return t-e}));return Object(a.jsxs)("div",{className:"LeaderBoard",children:[Object(a.jsx)("div",{className:"LeaderBoard-header",children:"Top 5"}),Object(a.jsx)("div",{className:"LeaderBoard-points",children:"pisteet"}),n.sort((function(e,t){return t.points-e.points})).slice(0,5).map((function(e,t){return Object(a.jsxs)("div",{children:[e.name," ",e.points]},"".concat(e.points,"-").concat(t))}))]})};var p=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:"Matopeli"}),Object(a.jsx)(b,{points:n}),Object(a.jsx)(j,{points:n,setPoints:r}),Object(a.jsx)("button",{onClick:function(){return window.location.reload()},children:"Uusi peli"}),Object(a.jsx)(d,{})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.27415d34.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),o=(n(20),n(8)),u=n(9),i=n(12),m=n(10),s=n(13),p=n(219),d=n(223),E=n(222),h=(n(22),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"Dynamic view load demo. This view includes React and react-router.")))}),f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("span",null,"Loading asynchronous view...")))},w=function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/about/"},"View 1")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/users/"},"View 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/vegardok/react-dynamic-router-load"},"Github repo"))))},b=function(e){return function(){return l.a.createElement(a.Suspense,{fallback:l.a.createElement(f,null)},l.a.createElement(e,null))}},v=b(Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(5),n.e(2)]).then(n.bind(null,220))})),y=b(Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(4),n.e(3)]).then(n.bind(null,221))})),g=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(E.a,{path:"/",exact:!0,component:h}),l.a.createElement(E.a,{path:"/about/",component:y}),l.a.createElement(E.a,{path:"/users/",component:v})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,7,6]]]);
//# sourceMappingURL=main.b0568a9a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,t,e){n.exports=e(27)},22:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(3),d=e.n(r),i=(e(22),e(11)),c=e(12),u=e(15),l=e(13),p=e(16),s=e(5),f=function(n){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){var n=this;return o.a.createElement("div",null,"\u4f60\u70b9\u51fb\u4e86 ",o.a.createElement("span",{id:"value"},this.props.n)," \u6b21",o.a.createElement("div",null,o.a.createElement("button",{id:"add1",onClick:function(){return n.props.add1()}},"+1"),o.a.createElement("button",{id:"add2",onClick:function(){return n.props.add2()}},"+2"),o.a.createElement("button",{id:"add1IfOdd",onClick:function(){return n.props.add3(n.props.n)}},"\u5982\u679c\u662f\u5947\u6570\u5c31+1"),o.a.createElement("button",{id:"add1After2Sec",onClick:function(){return n.props.add4()}},"\u4e24\u79d2\u949f\u540e+1")))}}]),t}(o.a.Component);var m=Object(s.b)(function(n){return{n:n.n}},function(n){return{add1:function(){return n({type:"add",payload:1})},add2:function(){return n({type:"add",payload:2})},add3:function(t){t%2===1&&n({type:"add",payload:1})},add4:function(){setTimeout(function(){n({type:"add",payload:1})},2e3)}}})(f);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=e(4),y=Object(b.b)(function(n,t){return void 0===n?{n:0}:"add"===t.type?{n:n.n+t.payload}:n});d.a.render(o.a.createElement(s.a,{store:y},o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.590d0c1d.chunk.js.map
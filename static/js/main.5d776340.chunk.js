(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),c=(a(13),a(14),a(6)),u=a(3),i=a(4),d=a(5),m=a(7),s=(a(15),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Please, leave a feedback"),r.a.createElement("button",{onClick:function(){return e.onSubmit("good")}},"Good"),r.a.createElement("button",{onClick:function(){return e.onSubmit("neutral")}},"Neutral"),r.a.createElement("button",{onClick:function(){return e.onSubmit("bad")}},"Bad"))});s.defaultProps={};var f=s,b=function(e){var t=function(){return e.data.good+e.data.neutral+e.data.bad};return e.data&&(e.data.bad||e.data.neutral||e.data.good)?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Statistics"),r.a.createElement("p",null,"Good: ",e.data.good),r.a.createElement("p",null,"Neutral: ",e.data.neutral),r.a.createElement("p",null,"Bad: ",e.data.bad),r.a.createElement("p",null,"Total: ",t()),r.a.createElement("p",null,"Positive feedback: ",function(){var a=t();return 0===a?"-":Math.round(100*(e.data.good+e.data.neutral)/a)+"%"}())):""};b.defaultProps={};var h=b,E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleSubmit=function(t){var a=Object(c.a)({},e.state);a[t]=e.state[t]+1,e.setState(a)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onSubmit:this.handleSubmit}),r.a.createElement(h,{data:this.state}))}}]),a}(n.Component);E.defaultProps={};var v=E;var p=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5d776340.chunk.js.map
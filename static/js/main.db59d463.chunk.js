(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),u=(n(14),n(3)),l=n(4),i=n(5),s=n(8),m=n(7),d=function(e){var t=e.name,n=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),n)},f=n(6),b=function(e){var t=e.message;return r.a.createElement("p",null,t)},p=n.n(f).a.statistic,E=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.percentage;return r.a.createElement(d,{name:"Statistic"},c>0?r.a.createElement("div",{className:p},r.a.createElement("span",null,"Good: ",t),r.a.createElement("span",null,"Neutral: ",n),r.a.createElement("span",null,"Bad: ",a),r.a.createElement("span",null,"Total: ",c," "),r.a.createElement("span",null,"Positive feedback: ",o,"%")):r.a.createElement(b,{message:"No feedback given"}))},g=function(e){var t=e.options;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return t("good")},type:"button"},"good"),r.a.createElement("button",{onClick:function(){return t("neutral")},type:"button"},"neutral"),r.a.createElement("button",{onClick:function(){return t("bad")},type:"button"},"bad"))},v=function(e){var t=e.options;return r.a.createElement(d,{name:"Please leave feedback"},r.a.createElement(g,{options:t}))},h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.stateIncrement=function(t){return e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e.sumAllState=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPercentage=function(e,t){return Math.round([e]/t*100)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.good,a=t.neutral,c=t.bad,o=this.sumAllState(),u=function(t,n){return e.countPercentage(t,n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{options:this.stateIncrement}),r.a.createElement(E,{good:n,neutral:a,bad:c,total:o,percentage:isNaN(u(n,o))?"0":"".concat(u(n,o))}))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={statistic:"feedback_statistic__295Iu"}},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.db59d463.chunk.js.map
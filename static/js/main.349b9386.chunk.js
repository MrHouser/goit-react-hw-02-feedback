(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={list:"Statistics_list__26_nT",good:"Statistics_good__3peGr",neutral:"Statistics_neutral__1ZXr7",bad:"Statistics_bad__VxYTF"}},,,,,function(t,e,a){t.exports={buttonList:"FeedbackOptions_buttonList__3Rujk",listItem:"FeedbackOptions_listItem__YfUIR",button:"FeedbackOptions_button__OHXUO"}},,,,function(t,e,a){t.exports={title:"Section_title__brN-1"}},function(t,e,a){t.exports={message:"Notification_message__2-Rpn"}},,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(9),i=a.n(s),r=(a(17),a(18),a(10)),o=a(3),l=a(4),b=a(6),d=a(5),j=a(11),u=a.n(j),h=a(0),O=function(t){var e=t.title,a=t.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{className:u.a.title,children:e}),a]})},p=a(12),x=a.n(p),f=function(t){var e=t.message;return Object(h.jsx)("p",{className:x.a.message,children:e})},_=a(7),g=a.n(_),m=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.options,a=t.onLeaveFeedback,n=Object.keys(e);return Object(h.jsx)("ul",{className:g.a.buttonList,children:n.map((function(t){return Object(h.jsx)("li",{className:g.a.listItem,children:Object(h.jsx)("button",{type:"button",onClick:a,className:g.a.button,children:t})},t)}))})}}]),a}(n.Component),v=a(2),k=a.n(v),F=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:k.a.list,children:[Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:k.a.good,children:"Good:"})," ",e]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:k.a.neutral,children:"Neutral:"})," ",a]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:k.a.bad,children:"Bad:"})," ",n]})})]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback:"," ",Object(h.jsxs)("span",{className:"".concat(s>=75&&k.a.good," ").concat(s>=50&s<75&&k.a.neutral," ").concat(s<50&&k.a.bad),children:[s,"%"]})]})]})}}]),a}(n.Component),N=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.floor(e/t.countTotalFeedback()*100)},t.handleAddFeedback=function(e){t.setState((function(t){var a=e.target.textContent.toLowerCase();return Object(r.a)({},a,t[a]+1)}))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad;return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:this.state,onLeaveFeedback:this.handleAddFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(F,{good:e,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(f,{message:"No feedback given"})})]})}}]),a}(n.Component);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.349b9386.chunk.js.map
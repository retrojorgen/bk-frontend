(this.webpackJsonpfronted=this.webpackJsonpfronted||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var r,a,o,c,i,s,l,b,d,u=t(2),j=t(1),p=t.n(j),h=t(14),m=t.n(h),f=t(3),O=t(4),x=t.n(O),g=t(8),k=t(6),v=function(e){return{arbeidsreiser:e.arbeidsreiser.map((function(e){return{km:parseInt(e.km),antall:parseInt(e.antall)}})),besoeksreiser:e.besoeksreiser.map((function(e){return{km:parseInt(e.km),antall:parseInt(e.antall)}})),utgifterBomFergeEtc:parseInt(e.utgifterBomFergeEtc)}},y=function(){var e=Object(g.a)(x.a.mark((function e(n){var t,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(v(n))},e.prev=1,e.next=4,fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",t);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),w=t(7),B=t(18),C=f.b.button(r||(r=Object(u.a)(["\n  background-color: var(--blue);\n  color: var(--white);\n  display: inline-block;\n  font-weight: 600;\n  font-size: 1.125rem;\n  text-align: center;\n  border: 3px solid transparent;\n  border-radius: 7px;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  &:hover {\n    background-color: var(--lightBlue);\n    border-color: var(--darkBlue);\n    color: var(--darkBlue);\n  }\n"]))),N=Object(f.b)(C)(a||(a=Object(u.a)(["\n  background-color: var(--lightBlue);\n  color: var(--darkBlue);\n"]))),S=Object(f.b)(C)(o||(o=Object(u.a)(["\n  font-size: 0.9rem;\n  padding: 10px 10px;\n"]))),z=f.b.button(c||(c=Object(u.a)(["\n  cursor: pointer;\n  display: inline-block;\n  background-color: transparent;\n  padding: 3px;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  border: 0;\n  color: var(--darkBlue);\n  &:hover {\n    background-color: var(--lightBlue);\n  }\n  transition: background-color 0.15s ease-in-out;\n"]))),I=f.b.fieldset(i||(i=Object(u.a)(["\n  border: 0;\n  padding: 0 0 1rem 0;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid var(--black);\n"]))),F=f.b.legend(s||(s=Object(u.a)(["\n  font-size: 1.125rem;\n  line-height: 26px;\n  font-weight: 700;\n  color: var(--blue);\n  margin-bottom: 1rem;\n"]))),T=f.b.label(l||(l=Object(u.a)(["\n  margin-bottom: 0.4rem;\n  display: block;\n  span {\n    display: block;\n    font-size: 0.9375rem;\n    font-weight: 400;\n    margin-bottom: 0.2rem;\n  }\n"]))),D=f.b.input(b||(b=Object(u.a)(["\n  font-size: 1.125rem;\n  border: 2px solid var(--black);\n  background-color: transparent;\n  -webkit-appearance: none;\n  box-shadow: none;\n  padding: 7.5px 10px;\n  line-height: 1.5;\n  position: relative;\n  max-width: 100%;\n  color: var(--black);\n"]))),E=f.b.div(d||(d=Object(u.a)(["\n  padding: 1rem;\n"]))),M=t(0);var R,J=function(e){var n=e.records,t=e.setRecords;return Object(M.jsxs)(M.Fragment,{children:[n.map((function(e,r){return Object(M.jsxs)(E,{children:[Object(M.jsxs)(T,{children:[Object(M.jsx)("span",{children:"Distance (km):"}),Object(M.jsx)(D,{type:"number",placeholder:"km",value:e.km,onChange:function(e){return t(n.map((function(n,t){return t===r?Object(w.a)(Object(w.a)({},n),{},{km:e.target.value}):n})))}})]}),Object(M.jsxs)(T,{children:[Object(M.jsx)("span",{children:"Number of days:"}),Object(M.jsx)(D,{type:"number",placeholder:"amount",value:e.antall,onChange:function(e){return t(n.map((function(n,t){return t===r?Object(w.a)(Object(w.a)({},n),{},{antall:e.target.value}):n})))}})]}),Object(M.jsx)(z,{type:"button",onClick:function(){return t(n.filter((function(e,n){return n!==r})))},children:"- remove"})]},r)})),Object(M.jsx)(S,{type:"button",onClick:function(){t([].concat(Object(B.a)(n),[{km:0,antall:0}]))},children:"+ Add location"})]})},A=f.b.div(R||(R=Object(u.a)(["\n  max-width: 550px;\n  width: 100%;\n  section {\n    padding: 2rem;\n    @media screen and (max-width: 1023px) {\n      padding: 1rem;\n    }\n  }\n  h1 {\n    margin: 0;\n    font-size: 2.25rem;\n    margin-bottom: 2rem;\n  }\n  .lead {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n    margin-bottom: 2rem;\n  }\n\n  .controls {\n    button:not(:last-child) {\n      margin-right: 0.5rem;\n    }\n  }\n"])));var K,U=function(){var e=Object(j.useState)([]),n=Object(k.a)(e,2),t=n[0],r=n[1],a=Object(j.useState)([]),o=Object(k.a)(a,2),c=o[0],i=o[1],s=Object(j.useState)([]),l=Object(k.a)(s,2),b=l[0],d=l[1],u=Object(j.useState)(0),p=Object(k.a)(u,2),h=p[0],m=p[1];function f(){return(f=Object(g.a)(x.a.mark((function e(n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,y({arbeidsreiser:t,besoeksreiser:c,utgifterBomFergeEtc:b});case 3:r=e.sent,m(r.reisefradrag);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(M.jsxs)(A,{children:[Object(M.jsxs)("section",{children:[Object(M.jsx)("h1",{children:"Calculate travel deduction for travel between home and work"}),Object(M.jsx)("p",{className:"lead",children:"This will calculate how much you can claim in travel deduction between your home and workplace. The calculator shows the rates for the income year 2020, for use with the tax return you submit in 2021."}),Object(M.jsxs)("form",{onSubmit:function(e){return function(e){return f.apply(this,arguments)}(e)},children:[Object(M.jsxs)(I,{children:[Object(M.jsx)(F,{children:"Number of travelling days per year to the workplace"}),Object(M.jsx)(J,{title:"",records:t,setRecords:r})]}),Object(M.jsxs)(I,{children:[Object(M.jsx)(F,{children:"Number of travelling days per year to other locations"}),Object(M.jsx)(J,{records:c,setRecords:i})]}),Object(M.jsxs)(I,{children:[Object(M.jsx)(F,{children:"Toll, ferry and other expenses"}),Object(M.jsx)(E,{children:Object(M.jsxs)(T,{children:[Object(M.jsx)("span",{children:"Input in NOK:"}),Object(M.jsx)(D,{type:"number",placeholder:"amount",value:b,onChange:function(e){return d(e.target.value)}})]})})]}),Object(M.jsxs)("div",{className:"controls",children:[Object(M.jsx)(C,{type:"submit",children:"Calculate"}),Object(M.jsx)(N,{type:"submit",onClick:function(){r([]),i([]),d(0),m(0)},className:"reset",children:"Tilbakestill"})]})]})]}),Object(M.jsxs)("section",{children:[Object(M.jsx)("h1",{children:"Calculated deduction"}),Object(M.jsxs)("p",{className:"lead",children:[h," NOK"]})]})]})},H=Object(f.a)(K||(K=Object(u.a)(["\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n}\n\n* {\n  box-sizing: border-box;\n}\n\n:root {\n  --blue: #1362ae;\n  --lightBlue: #cde1f9;\n  --darkBlue: #093e61;\n  --white: #fff;\n  --darkDarkBlue: #212529;\n  --black: #1d1d1b;  \n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"])));m.a.render(Object(M.jsx)(p.a.StrictMode,{children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(H,{}),Object(M.jsx)(U,{})]})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.65598074.chunk.js.map
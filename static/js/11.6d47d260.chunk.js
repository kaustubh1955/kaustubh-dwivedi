(this["webpackJsonpkaustubh-website"]=this["webpackJsonpkaustubh-website"]||[]).push([[11],{62:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(5),r=s(0),i=function(e){var t=e.label,s=e.link,a=e.value,n=e.format;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{width:"70%",children:t}),Object(r.jsx)("td",{children:s?Object(r.jsx)("a",{href:s,children:n(a)}):n(a)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,c=function(e){var t=e.data;return Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=s(21),u=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1999-10-17T09:24:00");n(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(r.jsx)(r.Fragment,{children:s})},b=[{key:"age",label:"Current age",value:Object(r.jsx)(u,{})},{key:"countries",label:"Countries visited",value:53,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"New York, NY"}],j=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Some stats about me"}),Object(r.jsx)(c,{data:b})]})},h=s(48),d=s.n(h),p=s(47),f=s(50),m=s(46),O=s.n(m),k=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return O()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],g=function(){var e=Object(a.useState)(k),t=Object(o.a)(e,2),s=t[0],n=t[1],i=Object(a.useCallback)(Object(f.a)(d.a.mark((function e(){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,n(k.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{value:Object.keys(s).includes(e.key)?s[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){i()}),[i]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Some stats about this site"}),Object(r.jsx)(c,{data:s})]})},v=s(20);t.default=function(){return Object(r.jsx)(v.a,{title:"Stats",description:"Some statistics about Kaustubh Dwivedi",children:Object(r.jsxs)("article",{className:"post",id:"stats",children:[Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(n.b,{to:"/stats",children:"Stats"})})})}),Object(r.jsx)(j,{}),Object(r.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=11.6d47d260.chunk.js.map
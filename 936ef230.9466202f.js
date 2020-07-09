(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return f}));var n=a(1),c=a(6),r=(a(0),a(167)),i={last_modified_on:"2020-04-03",$schema:"/.meta/.schemas/highlights.json",title:"Released gnet v1.1.0",description:"Released the official stable version of v1.1.0",author_github:"https://github.com/panjf2000",pr_numbers:["095ef52"],release:"1.1.0",hide_on_release_notes:!1,tags:["type: release","domain: v1.1.0"]},b={date:"2020-04-03T00:00:00.000Z",description:"Released the official stable version of v1.1.0",permalink:"/highlights/2020-04-03-released-1-1-0",readingTime:"1 min read",source:"@site/highlights/2020-04-03-released-1-1-0.md",tags:[{label:"type: release",permalink:"/highlights/tags/type-release"},{label:"domain: v1.1.0",permalink:"/highlights/tags/domain-v-1-1-0"}],title:"Released gnet v1.1.0",truncated:!1,prevItem:{title:"Released gnet v1.2.0",permalink:"/highlights/2020-05-11-released-1-2-0"},nextItem:{title:"Support new load-balancing algorithm",permalink:"/highlights/2020-03-31-supported-least-connections-load-balancing-algorithm"}},o=[{value:"Features",id:"features",children:[]},{value:"Bugfixes",id:"bugfixes",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Misc",id:"misc",children:[]}],l={rightToc:o};function f(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Support new load-balancing algorithm of least-connections ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/pull/63"}),"#63")),Object(r.b)("li",{parentName:"ul"},"Support new load-balancing algorithm of source-addr-hash ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/pull/64"}),"#64")),Object(r.b)("li",{parentName:"ul"},"Add a new API to get the number of currently active connections ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/5ae4849ac2941394b21254950ec7101081add782"}),"5ae4849"))),Object(r.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix an issue of not recycling byte-buffers ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/3b6edfdd933abab07a823bc0760c3d24b61b0879"}),"3b6edfd")),Object(r.b)("li",{parentName:"ul"},"Fix a bug of reading data from the full ring-buffer ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/a9caa26689f9ecb46a98feb3bb5513639c8beb98"}),"a9caa26"))),Object(r.b)("h2",{id:"enhancements"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Improve several methods of ring-buffer ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/828e845558c49918a647a1144eab8d9ca35887de"}),"828e845")),Object(r.b)("li",{parentName:"ul"},"Refine the range indexes when re-slicing ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/008c0c9e4c702431db6b3d4372be94ea99ac5a5e"}),"008c0c9")),Object(r.b)("li",{parentName:"ul"},"Lazily allocate memory for ring-buffers ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/095ef52c9275b5382b7e557da7bb40c5a3b156ca"}),"095ef52"))),Object(r.b)("h2",{id:"docs"},"Docs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Switch go doc to pkg.go.dev ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/b973741b7415e2e42b16e8dcf4adf6553c41ed40"}),"b973741")),Object(r.b)("li",{parentName:"ul"},"Add TechEmpower benchmarks ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/65d859b02a7766808151db5a809f8776ba708cfd"}),"65d859b")," ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/9bd48a348281542d3cac008b5525a693981ec525"}),"9bd48a3")," ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/04b473e20f51afe4b798d54b336fc72a7c5cd7b0"}),"04b473e")," ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/3743d0f26ff38fec6872be0d13eac7e7d370d4b9"}),"3743d0f")),Object(r.b)("li",{parentName:"ul"},"Improve some statements ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/cc4ccd470b0a4fabf902896df714b7fd07346216"}),"cc4ccd4"))),Object(r.b)("h2",{id:"misc"},"Misc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rename the eventloop_group.go to load_balancing.go ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/24203f4d936374666ef73c1ff7d96656c4de5fcb"}),"24203f4")),Object(r.b)("li",{parentName:"ul"},"Add unit test for ring-buffer ecf3473072d1c02ca69b469d24c5581eae041d2f ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/94246dc0fa7c0fcd02e0498e2a355f661b1403c8"}),"94246dc"))))}f.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),f=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=f(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=f(a),u=n,s=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return a?c.a.createElement(s,b({ref:t},l,{components:a})):c.a.createElement(s,b({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var l=2;l<r;l++)i[l]=a[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=(n(12),n(2)),l=n(4),j=n(0),o=function(e){var t=e.consoleOutput,n=r.a.useRef();return r.a.useEffect((function(){n.current&&(n.current.scrollTop=n.current.scrollHeight)})),Object(j.jsx)("div",{className:"console-output",ref:n,children:t.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})},d=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{class:"terminal-prompt-arrow",children:"\u279c"}),Object(j.jsx)("span",{class:"terminal-prompt-text",children:"\xa0~\xa0user@juanallegretti.com\xa0"})]})},_=function(){return Object(j.jsxs)("div",{children:["My Twitter account iiiiiis ",Object(j.jsx)("a",{href:"https://www.twitter.com/juanallegretti",children:"@JuanAllegretti"})]})},u=function(){return Object(j.jsxs)("div",{children:["My Linkedin account: ",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/juanallegretti",children:"@JuanAllegretti"})]})},b=function(){return Object(j.jsxs)("div",{children:["My Instagram account is ",Object(j.jsx)("a",{href:"https://www.instagram.com/juan.allgretti",children:"@Juan.Allegretti"})]})},h=function(){return Object(j.jsxs)("div",{children:["My GitHub repo is ",Object(j.jsx)("a",{href:"https://github.com/Juan-Allegretti",children:"@Juan-Allegretti"})]})},O=function(){return Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:"Email"}),Object(j.jsx)("dd",{children:Object(j.jsx)("a",{href:"mailto:juan.elca@gmail.com",children:"juan.elca@gmail.com"})}),Object(j.jsx)("dt",{children:"Linkedin"}),Object(j.jsxs)("dd",{children:["My Linkedin account is ",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/juanallegretti",children:"@JuanAllegretti"})]})]})},m=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"You can use any of the following commands. You can also browse your command history with ArrowUp or ArrowDown and press Tab to autocomplete."}),Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:"about"}),Object(j.jsx)("dd",{children:"A description about me"}),Object(j.jsx)("dt",{children:"github"}),Object(j.jsx)("dd",{children:"Where to find my code"}),Object(j.jsx)("dt",{children:"twitter"}),Object(j.jsx)("dd",{children:"My Twitter profile"}),Object(j.jsx)("dt",{children:"instagram"}),Object(j.jsx)("dd",{children:"My Instagram profile"}),Object(j.jsx)("dt",{children:"download_cv"}),Object(j.jsx)("dd",{children:"Check out my CV [pdf - 168KB]"}),Object(j.jsx)("dt",{children:"contact"}),Object(j.jsx)("dd",{children:"How to reach me"}),Object(j.jsx)("dt",{children:"website"}),Object(j.jsx)("dd",{children:"How I built this"}),Object(j.jsx)("dt",{children:"all"}),Object(j.jsx)("dd",{children:"Run all commands"}),Object(j.jsx)("dt",{children:"clear"}),Object(j.jsx)("dd",{children:"Clears the terminal output"})]})]})},x=function(){return Object(j.jsxs)("div",{children:["I'm a 28 years old ",Object(j.jsx)("span",{className:"terminal-glow",children:"Computer Engineer"})," graduated from ",Object(j.jsx)("a",{href:"https://www.unlam.edu.ar/",children:"Universidad Nacional de La Matanza"})," in Buenos Aires, Argentina"]})},f=function(){return Object(j.jsxs)("div",{children:["I built this personal website using React.js to practice this technology. The source code is on my ",Object(j.jsx)("a",{href:"https://github.com/Juan-Allegretti",children:"GitHub"})]})},p=function(){var e=r.a.useRef(),t=r.a.useRef(),n=r.a.useState(""),c=Object(l.a)(n,2),a=c[0],i=c[1],p=r.a.useState([]),w=Object(l.a)(p,2),g=w[0],v=w[1],y=r.a.useState([]),k=Object(l.a)(y,2),A=k[0],N=k[1],D=r.a.useState(0),J=Object(l.a)(D,2),E=J[0],M=J[1],I=["clear","all","cv"],T=["twitter","linkedin","github","instagram","website","contact","about","help"],C={twitter:Object(j.jsx)(_,{}),linkedin:Object(j.jsx)(u,{}),instagram:Object(j.jsx)(b,{}),github:Object(j.jsx)(h,{}),website:Object(j.jsx)(f,{}),contact:Object(j.jsx)(O,{}),about:Object(j.jsx)(x,{}),help:Object(j.jsx)(m,{})};r.a.useEffect((function(){var n;e.current.focus(),e.current.selectionEnd=e.current.value.length,null===(n=t.current)||void 0===n||n.scrollIntoView()}));var H=function(e){return T.includes(e)},R=function(e){return I.includes(e)},S=function(e){if("ArrowUp"===e)return A.length>0&&A.length>E?(M(E+1),A[A.length-E-1]):A[A.length-E];if("ArrowDown"===e){if(A.length>0&&E>1)return M(E-1),A[A.length-E+1];if(E<=1)return M(0),""}},L=function(e,n){var c,r=Object(j.jsx)("div",{ref:function(e){return t.current=e},className:"terminal-command-record",children:Object(j.jsxs)("span",{className:"terminal-prompt",children:[Object(j.jsx)(d,{})," ",e]})});switch(n.key){case"Tab":if(n.preventDefault(),""!==a.trim()){var l=function(e){var t=T;return t.push.apply(t,I),t.filter((function(t){return t.startsWith(e)}))}(e);1===l.length?i(l[0]):l.length>1&&-1!=l&&v([].concat(Object(s.a)(g),[r,l.join("     ")]))}break;case"ArrowUp":n.preventDefault();var o=S(n.key);i(o);break;case"ArrowDown":n.preventDefault();var _=S(n.key);i(_);break;case"Enter":if(n.preventDefault(),M(0),i(""),""==e.trim()){v([].concat(Object(s.a)(g),[r]));break}if(N([].concat(Object(s.a)(A),[e])),!H(c=e)&&!R(c)){console.log("Errror bokeeee");var u=Object(j.jsxs)("div",{className:"terminal-error-group",children:[Object(j.jsx)("span",{className:"terminal-error",children:"command not found: ".concat(e)}),Object(j.jsx)("span",{children:"Type 'help' to view a list of available commands"})]});v([].concat(Object(s.a)(g),[r,u]));break}if(H(e))v([].concat(Object(s.a)(g),[r,C[e]])),i("");else if(R(e))switch(e){case"clear":v([]),i("");break;case"all":var b=Object.keys(T).map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:["- ",Object(j.jsx)("b",{children:e})]}),":"]}),Object(j.jsx)("div",{className:"terminal-command-output",children:Object(j.jsx)("span",{children:T[e]})})]})}));v([].concat(Object(s.a)(g),[r],Object(s.a)(b))),i("");break;case"cv":!function(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.click()}("CV.txt","Juan"),i("")}}};return Object(j.jsx)("div",{className:"terminal-container",tabIndex:-1,onKeyDown:function(e){"Tab"===e.key&&e.preventDefault()},children:Object(j.jsxs)("div",{className:"terminal-content",children:[Object(j.jsx)("div",{className:"terminal-banner",children:"   _                           _ _                     _   _   _ \n  (_)_   _  __ _ _ __     __ _| | | ___  __ _ _ __ ___| |_| |_(_)\n  | | | | |/ _` | '_ \\   / _` | | |/ _ \\/ _` | '__/ _ \\ __| __| |\n  | | |_| | (_| | | | | | (_| | | |  __/ (_| | | |  __/ |_| |_| |\n _/ |\\__,_|\\__,_|_| |_|  \\__,_|_|_|\\___|\\__, |_|  \\___|\\__|\\__|_|\n|__/                                    |___/                    \n"}),Object(j.jsx)(o,{consoleOutput:g}),Object(j.jsxs)("div",{className:"terminal-input-area",children:[Object(j.jsx)(d,{}),Object(j.jsx)("input",{type:"text",ref:e,className:"terminal-input",value:a,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){return L(a,e)}})]})]})})},w=(n(14),"             _         __     _    _                 \n __ _ _ __ _(_)__ _   / _|___| |__| |_ __  __ _ _ _  \n/ _| '_/ _` | / _` | |  _/ -_) / _` | '  \\/ _` | ' \\ \n\\__|_| \\__,_|_\\__, | |_| \\___|_\\__,_|_|_|_\\__,_|_||_|\n              |___/                                  \n  \xa9 "+(new Date).getFullYear());var g=function(){return Object(j.jsx)(p,{banner:w})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8bbe11e.chunk.js.map
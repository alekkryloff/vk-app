(this["webpackJsonpvk-app"]=this["webpackJsonpvk-app"]||[]).push([[0],{135:function(e,t,n){e.exports=n(183)},142:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(47),c=n.n(s),i=n(20),l=n.n(i),r=n(31),A=n.n(r),d=n(37),u=n(15),m=n(38),p=n.n(m),E=(n(141),n(39)),v=n.n(E),f=n(40),g=n.n(f),h=n(61),C=n.n(h),b=n(50),I=n.n(b),U=n(59),j=n.n(U),k=n(34),B=n.n(k),O=n(60),y=n.n(O),w=n(58),x=n.n(w);n(142);var S=function(e){var t=e.id,s=e.fetchedUser,c=e.go,i=e.setActivePanel,r=e.data,m=e.db,E=e.findDocumentById,f=Object(a.useState)(o.a.createElement(x.a,{size:"large"})),h=Object(u.a)(f,2),b=h[0],U=h[1],k=Object(a.useState)(""),O=Object(u.a)(k,2),w=O[0],S=O[1],V=Object(a.useState)(""),Q=Object(u.a)(V,2),P=Q[0],D=Q[1],J=Object(a.useState)(""),Y=Object(u.a)(J,2),z=Y[0],N=Y[1],K=Object(a.useState)(""),H=Object(u.a)(K,2),X=H[0],W=H[1];function R(){var e;"undefined"!==typeof r.docId?(e=r.docId,m.collection("notes").doc(e).get().then((function(e){e.exists?(U(null),e.data().notes1?(S(e.data().notes1),r.notes1=e.data().notes1,console.log(r.notes1)):(S("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.notes1=""),e.data().notes2?(D(e.data().notes2),r.notes2=e.data().notes2):(D("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.notes2=""),e.data().notes3?(N(e.data().notes3),r.notes3=e.data().notes3):(N("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.notes3=""),e.data().notes4?(W(e.data().notes4),r.notes4=e.data().notes4):(W("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.notes4="")):console.log("No such document!")})),console.log(r.docId)):setTimeout((function(){R()}),100)}function M(){return(M=Object(d.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,r.userId=t.id,console.log("User ID: "+t.id),E(t.id),R();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.lastTitle="",function(){M.apply(this,arguments)}();var G=o.a.lazy((function(){return new Promise((function(e){!function e(t,n){t?n():setTimeout((function(){e(t,n)}),100)}(w,e(n.e(3).then(n.bind(null,184))))}))}));function L(e){var t=e.notesId;r.notesId=t;"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"==("1"==t?w:"2"==t?P:"3"==t?z:X)?console.log("No data in "+t):i("persik")}return o.a.createElement(p.a,{activePanel:t,popout:b},o.a.createElement(v.a,{id:t},o.a.createElement(g.a,null,"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"),s&&o.a.createElement(I.a,{title:"User Data Fetched with VK Bridge"},o.a.createElement(j.a,{before:s.photo_200?o.a.createElement(y.a,{src:s.photo_200}):null,description:s.city&&s.city.title?s.city.title:""},"".concat(s.first_name," ").concat(s.last_name))),o.a.createElement(B.a,{className:"wrapper"},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(G,{notesId:1,title:w.split("\u20aa")[0],onClick:L}),o.a.createElement(G,{notesId:2,title:P.split("\u20aa")[0],onClick:L}),o.a.createElement(G,{notesId:3,title:z.split("\u20aa")[0],onClick:L}),o.a.createElement(G,{notesId:4,title:X.split("\u20aa")[0],onClick:L}))),o.a.createElement(I.a,{title:"Navigation Example"},o.a.createElement(B.a,null,o.a.createElement(C.a,{size:"xl",level:"2",onClick:c,"data-to":"persik"},"Show me the Persik, please")))))},V=n(14),Q=n(69),P=n.n(Q),D=n(62),J=n.n(D),Y=n(63),z=n.n(Y),N=n(64),K=n.n(N),H=n(49),X=n.n(H),W=n(65),R=n.n(W),M=(n(56),n(66)),G=n.n(M),L={display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"};var T=function(e){var t=e.todo,n=e.index,a=e.onChange,s=e.removeTodo,c=[];return t.completed&&c.push("done"),o.a.createElement("li",{style:L},o.a.createElement("span",{onClick:function(){return a(t.id)},className:c.join(" ")},o.a.createElement("strong",null,++n,"."),"\xa0",t.title),o.a.createElement("img",{className:"btn2",src:G.a,onClick:function(){return s(t.id)}}))},q={listStyle:"none",margin:0,padding:0};var Z=function(e){var t=e.todos,n=e.onToggle,a=e.removeTodo;return o.a.createElement("ul",{style:q},t.map((function(e,t){return o.a.createElement(T,{todo:e,key:e.id,index:t,onChange:n,removeTodo:a})})))},F=n(41),_=n(42),$=n(44),ee=n(43),te=n(67),ne=n.n(te);n(57);var ae=function(e){var t=e.onCreate,n=Object(a.useState)(""),s=Object(u.a)(n,2),c=s[0],i=s[1];return o.a.createElement(V.b,{onSubmit:function(e){e.preventDefault(),c.trim()&&(t(c),i(""))}},o.a.createElement(V.f,{placeholder:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",value:c,onChange:function(e){return i(e.target.value)}}),o.a.createElement(V.a,{type:"submit",size:"xl"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))},oe={},se=n(68),ce=n.n(se).a.initializeApp({apiKey:"AIzaSyDiGB3YzRvrL0VQ3g2IXbMPWc7xCfn9ITQ",authDomain:"vk-app-notes.firebaseapp.com",databaseURL:"https://vk-app-notes.firebaseio.com",projectId:"vk-app-notes",storageBucket:"vk-app-notes.appspot.com",messagingSenderId:"440873597069",appId:"1:440873597069:web:971c8ee7d93805e2484ac4"}).firestore(),ie=ce.collection("notes");function le(e){ie.onSnapshot((function(t){t.forEach((function(t){t.data().id===e&&(oe.docId=t.id)}))}))}function re(e,t,n,a,o,s){ie.doc(e).set({id:t,notes1:n,notes2:a,notes3:o,notes4:s})}var Ae=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e){var a;return Object(F.a)(this,n),(a=t.call(this,e)).addTodo=function(e){if(oe.lastTitle===e)console.log("duplicate "+e),a.setState({snackbar:!0});else{oe.lastTitle=e;var t=oe.notesId;"1"==t?oe.notes1+="\u20aa"+e:"2"==t?oe.notes2+="\u20aa"+e:"3"==t?oe.notes3+="\u20aa"+e:oe.notes4+="\u20aa"+e,re(oe.docId,oe.userId,oe.notes1,oe.notes2,oe.notes3,oe.notes4),a.setState({isActive:!1}),a.props.setTodos(a.props.todos.concat({title:e,id:Date.now()+e,completed:!1}))}},a.state={isActive:!1,snackbar:null},a}return Object(_.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"btn",src:ne.a,onClick:function(){return e.setState({isActive:!0})}}),this.state.isActive&&o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-field",onClick:function(){return e.setState({isActive:!1})}}),o.a.createElement("div",{className:"modal-body"},o.a.createElement(ae,{onCreate:this.addTodo}))),this.state.snackbar&&o.a.createElement(V.e,{layout:"vertical",onClose:function(){return e.setState({snackbar:!1})}},"\u0414\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e :("))}}]),n}(o.a.Component),de=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e){var a;return Object(F.a)(this,n),(a=t.call(this,e)).deleteNotes=function(){var e=oe.notesId;"1"==e?oe.notes1="":"2"==e?oe.notes2="":"3"==e?oe.notes3="":oe.notes4="",re(oe.docId,oe.userId,oe.notes1,oe.notes2,oe.notes3,oe.notes4),a.props.setActivePanel("home")},a.state={isActive:!1},a}return Object(_.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"btn",src:X.a,onClick:function(){return e.setState({isActive:!0})}}),this.state.isActive&&o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-field",onClick:function(){return e.setState({isActive:!1})}}),o.a.createElement("div",{className:"modal-body"},o.a.createElement("span",{className:"deleteBtns"},o.a.createElement(V.a,{mode:"tertiary",size:"xl",onClick:function(){return e.deleteNotes()}},"Yes"),o.a.createElement(V.a,{style:{marginLeft:0},mode:"tertiary",size:"xl",onClick:function(){return e.setState({isActive:!1})}},"No")))))}}]),n}(o.a.Component);function ue(e){var t=e.prevTitle,n=e.setEditNotesTitleShowing,s=Object(a.useState)(""),c=Object(u.a)(s,2),i=c[0],l=c[1];return o.a.createElement(V.b,{onSubmit:function(e){if(e.preventDefault(),i.trim()){var t=oe.notesId,a="";("1"==t?oe.notes1:"2"==t?oe.notes2:"3"==t?oe.notes3:oe.notes4).split("\u20aa").slice(1).map((function(e){a+="\u20aa"+e})),a=i+a,"1"==t?oe.notes1=a:"2"==t?oe.notes2=a:"3"==t?oe.notes3=a:oe.notes4=a,re(oe.docId,oe.userId,oe.notes1,oe.notes2,oe.notes3,oe.notes4),n(!1)}},style:{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-between",alignItems:"center",marginBottom:".5rem"}},o.a.createElement(V.d,{placeholder:t,value:i,onChange:function(e){return l(e.target.value)}}),o.a.createElement(V.a,{type:"submit",size:"l"},"\u041e\u041a"))}var me=Object(V.g)();var pe=function(e){e.fetchedUser;var t=e.go,n=e.data,s=e.setNotes,c=e.setActivePanel,i=n.notesId,l="";l="1"==i?n.notes1:"2"==i?n.notes2:"3"==i?n.notes3:n.notes4;var r=0,A=Object(a.useState)(l.split("\u20aa").slice(1).map((function(e){return{title:e,id:++r+Date.now()+e,completed:!1}}))),d=Object(u.a)(A,2),m=d[0],p=d[1];n.notesTitle=l.split("\u20aa")[0];var E=Object(a.useState)(!1),f=Object(u.a)(E,2),h=f[0],C=f[1],b={notask:{display:"flex",alignItems:"center",justifyContent:"center"},li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",marginBottom:".7rem"}};return o.a.createElement(v.a,{id:"persik"},o.a.createElement(g.a,{left:o.a.createElement(P.a,{onClick:t,"data-to":"home"},me===V.c?o.a.createElement(J.a,null):o.a.createElement(z.a,null))},l.split("\u20aa")[0]),o.a.createElement(B.a,null,o.a.createElement("li",{style:b.li},o.a.createElement(de,{setActivePanel:c}),o.a.createElement("img",{className:"btn",src:R.a,onClick:function(){C(!h)}}),o.a.createElement(Ae,{todos:m,setTodos:p})),h&&o.a.createElement(ue,{prevTitle:n.notesTitle,setEditNotesTitleShowing:C}),m.length?o.a.createElement(Z,{todos:m,onToggle:function(e){p(m.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},removeTodo:function(e){p(m.filter((function(t){return t.id!==e})));var t="";m.map((function(n){n.id===e&&(t=n.title)}));var a=n.notesTitle;l.split("\u20aa").slice(1).map((function(e){e!==t&&(a+="\u20aa"+e)})),"1"==i?n.notes1=a:"2"==i?n.notes2=a:"3"==i?n.notes3=a:n.notes4=a,s(n.docId,n.userId,n.notes1,n.notes2,n.notes3,n.notes4)}}):o.a.createElement("p",{style:b.notask},"No tasks :3")),o.a.createElement("img",{className:"Persik",src:K.a,alt:"Persik The Cat"}))},Ee=function(){var e=Object(a.useState)("home"),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(null),i=Object(u.a)(c,2),r=i[0];i[1];Object(a.useEffect)((function(){l.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var o=document.createAttribute("scheme");o.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(o)}}))}),[]);var A=function(e){s(e.currentTarget.dataset.to)};return o.a.createElement(p.a,{activePanel:n},o.a.createElement(S,{id:"home",fetchedUser:r,go:A,activePanel:n,setActivePanel:s,data:oe,db:ce,findDocumentById:le}),o.a.createElement(pe,{id:"persik",fetchedUser:r,go:A,data:oe,setNotes:re,setActivePanel:s}))};l.a.send("VKWebAppInit"),c.a.render(o.a.createElement(Ee,null),document.getElementById("root"))},49:function(e,t){e.exports="data:image/png;base64,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"},56:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"},65:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUzSURBVHic3Zvfb1NlHIeftztry8aPiUgkQmAQE6PezEnQAkMuMHphohk3JsZoZGyZOC9MTEy8mH+BMUxgGxE13phdmEUCGNRgFLwgA2OC4ohK3dgm48fGBti1PV8vyuna9Zz2nLP+OKefZEnb0/ec93ne7/u2b9uBjyM7Im3SEukVCLg9h+uGlY7siLQh9AJ72R455FaCKnK/ypIM+Pn+C/38eKZDge7kXL4TYAqfPuhcgq8E5IU3ojjMD2fa7UrwjQBb8EYcSPCFAEfwRmxK8PyrgOyIdDqGBxD2sD3SIwXaeVrAvZHvwWWl/jMXfG6oaVef0G3J6VkB8mXjmzQkDuISfixWK5Px2kYUe4aaTvdaSfCkADnR2MYK2c+r1+I0JBy3H5sLMh4PzovLI8Fzi6CcaGwDmZ/zt2rgi/thSrPVfmwuyPhcrcXJOdx8fmu7oju9MHqqAnLgAZYn4ZXr2KmEvPCQqoQnzhzKrATPVIApfGYKVEJB+Kyo/uZzkQ5Ft+4JAQXhjVhIcAZvxJBQ4diGN7JAgjv49NUPVHQNcAwPWWvC4uARgd9r3LZebOT4+k4U7l7nQ8LcMmH0z6UkY67GUATp2nzu256KCJATjW2u4QGmNGp0aGi8y3R0iVMJaXiAsgtwVfaZmdZS6wBQE9SdSsiChzILKAr8dHaXHUjIgYcyCigFvBEbEkzhoUwCSglvJI8EQal9m8+d/Ni0nasOOUg54I2YSLg38ubwUGIB5YQ3UhPUuW/jHX0qWkcipkzLPjMleydYCfjMy8emtHfC7174sNATSyKg0vCI6lLtF/OOvJGiC6g4PLJP7R0+YLdBUfcCFYcX1eUEHopYAZ6At1n2mSmKAL/CQxEE+BkeFinA7/CwCAHVAA8uO18t8OACoJrgwSFEtcGDA5BqhAebMNUKDzaAqhkeCuwF5OJ7u4EDVCk8FNoMrdj2Ghve0FztmXwAD3lGViYHl5HQrgJhps9D9AhI0t5ZfQIP+YY2qb0AhAFY0QTrXwdlA8pH8JBPgNCadd+OBJ/Bg8UUkLGv61CBSaAu56DVdPAhPFhWQOB5zODBvBJ8Cg/WU6DV4vFUDAkEYDbsW3gw+V5ALh0LEaIfCOVtGV4DcYHLf7u9duoDzPY/LL+0KEdyK2AZzwLLC7acHYYgsOlxUM43lW4+wCxFcgTE47xYsNXsMNy+lLq9crVTCRUv+8xkTYHm5t7aU0PJvl1bQyocUua/PcmEN7KkPvV3c7LQ9TwFDwsqQKsP7YyOxVfteX9qydUbJu/6zOCNFK4Ez8FDzhTQWwFGJxJ0fjDN5M35X5rLzLBYwhuxluBJeMiaAt2Btesb+oClALdmdX4airFzS5jZ8d9Yqv6yN8lzp4Nn4SGjAja3bNgGPJh5cGQ8See+XwncvezsrOlKIOlleMgQoER2LzyoT4xw+WyU9rcSTBZc37ISY+UDR9n46Mtehof0XkDUlpZPo8A644A+MYKMj6afuG4tHPqohtWrLWfCXZDvUGqAeGJQPdk3XbpuFy8KYMszR55C52fjwYXwRtY9pOjrCSRXrUpvBO6AfI9SA4T++0o98slMebpdvKR+cKurVpDUTQt4gJErQsfbydnP+7XBujo1QH3gpHp4f6xsvS1BNAAReUmpvPDXgWMKNXDxwo1v6iMDc2XtZQmjPd3yWZOOvskEfpQU9NH6mTXHT9Ht/H9XfBAtSbJVJkbjMj5aC0SVMKgrBoZm+k5jzIsqjsbElce49u9BpcuRs7f7f6l0h8qd/wFT4wYlQ9UYewAAAABJRU5ErkJggg=="},66:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB8QAAAfEBnrltZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS7SURBVHiczZtNaBxlGMd/z7uJSDbZqj2kiCJ6sBXBg/kS42GTWLXWYhVEsSiIHizWgwU9eBFPHoo9+Ik38YtejLUXlWaTFExtsgl4lEI9qIitUttkJ2KTnceDO22abJKdmWc+/rfMzvu87++3M+z7zjsRmmR+qHd7QdxLKjoIUgT5GdEjxeWOL2RycrlZm7xEy+U2r7C4D+RJ0NtAPVGZqgvvlSozp1efL6sPeMP9L6rwDtC+pjicEmRvZ2X6bELjj5XayEA3ol+jDDT5eEng5WJl5qOVB68SULu//xWUw5v0c1pc+1Dx+NTvcQdsmdrIQDdoBbhz4zPl9c7K9FuX/7pSoP8g8HaL/eVKQuvwQa5IEICF4f4DIrwbqleVn/D9oc7J6h/hhmubWrlvG85NILojTDtFDnRVpt8Xb/ieu1X8GaAQuveMJUSFb2RZ1A04FX2NKPAAojtwbqJW7tsWqX2MxIQHaFOpv+pAh2KNJAMJBvCNSNkB18UeUYoS7OABuN4J/GpQKBUJxvAAvzhFjhoVS1RCAvCAHHPAIeCcXU17CcnAcw445Dor02cd7AUWzEobSkgCXqDmqz7WYIeOyswPvupDWEsoyAlv5+CNUUvURga6KciY8Tfv+eL2lMarJ2HVWmB+uO9eJ/It0GXYYaRpc/jpbUvxVNwjXWOnJoMDa1aDeZCQFjw0EQDZSkgTHtYRANlISBseNhAA6UrIAh42EQDpSMgKHloQAMlKUH+5nhU8tCgAkpEgcEZhGdhuVZMQ8I0xtJ6ErgTLhIKHkAIg1xJCw0MEAZBLCZHgIaIAyJWEyPAQQwDkQkIseIgpADKVEBseDARAJhJM4MFIAKQqwQweDAVAKhJM4cFYAPwvoSDynUKncelFFbfbEh7AWRYDcOLOqPCndV3gvJPCmv39uDEVcHlVp9xqWbeRm9RfmojzjLFZzG6BhJa0zWK6NW8iIEX4IGYSYgvIAD6IiYRYAjKEDxJbQmQBOYAPEktCJAE5gg8SWUJoATmEDxJJQigBOYYPElpCyxOhZODlHxEW7epxe9jJUksCkntuLw/Xfd2J5a50SAmb3gJpbFpkuRe5oYA0d2yykrCugCy2q7KQ0FRAlnt1aUtYIyBL+CBpSrj6dfkcwAdJS8KK1+UTgne6u+t49USUxmlIEEjsPbwF3/d3lSZmp+IUmR/qHXTOfYOlhBVvuYuWy9d6bYvfo/SYdWAEHyQRCTBbvOb8fc5rW9yfZ3iA0sTslO/7u7CdMfZ6/27d71CeMSxqDh8kEQmi+xxgdd8nBh8kAQl3OOCSQaHE4YOYShAuOZTZmGU8dbonDfggpYnZKaN3m6tOnX4Qo8CC7/sPRv2dj5PSePVk3CtBlA9d11h1FOHTCO1Tu+zXS8zb4ZNiZeaoAyj+XX9e4asQjVO/7NdLlNtBVEaLF+ovQOOJkMzNLXXecMsToEdaaB9reptESuPVk61KEJXRjovLT8nc3BKsWgxpT0+7t6XwMcLT67T/y1d9NPhng7ylsXY4Bmxd55TPixfqzwXw0GQ5rCDeSP+zwEHgrsbhi8CXri5vdExO/2Y9cMssPtB3s+/zJiqPA1sah39E5XBxfPozAV15/n/A7xrE0UXtTwAAAABJRU5ErkJggg=="},67:function(e,t){e.exports="data:image/png;base64,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"}},[[135,1,2]]]);
//# sourceMappingURL=main.719d24b9.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),o=t(8),a=t.n(o),l=(t(16),t(2)),r=t(3),s=t(6),u=t(4),d=t(5),k=t(1),m=(t(17),t(9));var p=function(e){return c.a.createElement("div",{className:"iconContainer"},e.children)};var h=function(e){var n=c.a.Children.map(e.children,function(n){return c.a.cloneElement(n,{id:e.id,skill:e.skill})});return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.skill,src:e.icon})),c.a.createElement("span",null,n))};var f=function(e){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-4"},"Runescape Skill Click"),c.a.createElement("p",{className:"lead"},"Click the skill icons! It's React!"),c.a.createElement("p",null,"Score ",e.score))};var g=function(e){return c.a.createElement("div",{className:"container"},e.children)},v=function(e){function n(){var e,t;Object(l.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).state={id:t.props.id},t.increaseScore=function(e){console.log(t.state.id,"increaseScore run"),t.props.scoreManipulator(t.state.id),t.props.setLastClicked(t.state.id)},t}return Object(d.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){console.log(this.state.id,"TSI")}},{key:"render",value:function(){return c.a.createElement("button",{type:"button",className:"btn btn-primary",id:this.props.id,onClick:this.increaseScore},"Skill")}}]),n}(c.a.Component),C=function(e){function n(){var e,t;Object(l.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).state={icons:m,lastClicked:99,score:0},t.setLastClicked=function(e){console.log(Object(k.a)(Object(k.a)(t)),"setLastClick run"),console.log(e,"sLC ID"),t.setState(function(n){return console.log(n.lastClicked),{lastClicked:e}}),console.log(t.state.lastClicked,"tsLC")},t.scoreManipulator=function(e){t.state.lastClicked!==e?t.setState(function(e){return{score:e.score+1}}):t.setState(function(e){return{score:0}})},t}return Object(d.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){console.log("app mounted")}},{key:"componentDidUpdate",value:function(){console.log(this.state.lastClicked,"cDU"),console.log(this.state.score,"cdu score")}},{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(f,{score:this.state.score}),c.a.createElement(p,null,this.state.icons.map(function(n){return c.a.createElement(h,{icon:n.icon,key:n.id,id:n.id,skill:n.skill},c.a.createElement(v,{setLastClicked:e.setLastClicked,scoreManipulator:e.scoreManipulator}))})))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports=[{id:1,skill:"Attack",icon:"iconlink"},{id:2,skill:"Crafting",icon:"iconlink"},{id:3,skill:"Firemaking",icon:"iconlink"},{id:4,skill:"Fishing",icon:"iconlink"},{id:5,skill:"Fletching",icon:"iconlink"},{id:6,skill:"Herblore",icon:"iconlink"},{id:7,skill:"Mining",icon:"iconlink"},{id:8,skill:"Ranged",icon:"iconlink"},{id:9,skill:"Slayer",icon:"iconlink"},{id:10,skill:"Smithing",icon:"iconlink"},{id:11,skill:"Woodcutting",icon:"iconlink"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.49cdce5e.chunk.js.map
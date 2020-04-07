(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return i}));t(0);var n=t(131);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o={id:"dashboard",title:"Dashboards",hide_title:!0,sidebar_label:"Dashboards"},l=[{value:"New Dashboard",id:"new-dashboard",children:[]},{value:"Dashboard Design",id:"dashboard-design",children:[]},{value:"Toolbar",id:"toolbar",children:[]},{value:"Cards",id:"cards",children:[{value:"Content (Visualization)",id:"content-visualization",children:[]},{value:"Filter Panel",id:"filter-panel",children:[]},{value:"Rich Text",id:"rich-text",children:[]},{value:"Card Toolbar",id:"card-toolbar",children:[]}]},{value:"Using Dashboards",id:"using-dashboards",children:[]}],c={rightToc:l},b="wrapper";function i({components:e,...a}){return Object(n.b)(b,r({},c,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"building-dashboards"},"Building Dashboards"),Object(n.b)("p",null,Object(n.b)("img",r({parentName:"p"},{src:"/img/dashboard/dashboard.png",alt:null}))),Object(n.b)("h2",{id:"new-dashboard"},"New Dashboard"),Object(n.b)("p",null,"To create a new dashboard, click on the ",Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/portal/btn_new_dashboard.png",alt:null})))," button in the portal. Now you can select a layout template with predefined cards, or build the dashboard from scratch, as shown below."),Object(n.b)("p",null,Object(n.b)("img",r({parentName:"p"},{src:"/img/dashboard/layouts.png",alt:null}))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note"),": the ",Object(n.b)("em",{parentName:"p"},"Consumer")," role does not have access to create new dashboards, and thus will not see the ",Object(n.b)("em",{parentName:"p"},"New Dashboard")," button. Check your role from ",Object(n.b)("a",r({parentName:"p"},{href:"/docs/portal#user"}),"My Account"),".")),Object(n.b)("h2",{id:"dashboard-design"},"Dashboard Design"),Object(n.b)("p",null,"To build a dashboard, add ",Object(n.b)("a",r({parentName:"p"},{href:"#cards"}),"Cards")," to the design work area and then add widgets (charts, tables, etc.) to each card. You can move cards by dragging them, or you can resize them by dragging their edges. The dashboard title can be changed by clicking on the title text."),Object(n.b)("p",null,Object(n.b)("img",r({parentName:"p"},{src:"/img/dashboard/design.png",alt:null}))),Object(n.b)("h2",{id:"toolbar"},"Toolbar"),Object(n.b)("p",null,"The dashboard toolbar allows you to ",Object(n.b)("em",{parentName:"p"},"Save"),", ",Object(n.b)("em",{parentName:"p"},"Share"),", add to ",Object(n.b)("em",{parentName:"p"},"Favorites"),", and add ",Object(n.b)("a",r({parentName:"p"},{href:"#cards"}),"Cards"),". Cards are dashboard content that can be visualizations, grid/tables, filters, or rich text/html. In the dashboard toolbar, you'll need to click ",Object(n.b)("em",{parentName:"p"},"Edit")," to enter design mode, which allows you to add, move, and resize cards."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/toolbar.png",alt:null})))),Object(n.b)("h2",{id:"cards"},"Cards"),Object(n.b)("p",null,"Cards are panels that hold charts, tables, filters, or other content such as rich text/html. If you selected a layout template when you first created the dashboard, then blank cards will already be in the design work area. Otherwise, you'll need to add cards from the Toolbar. New blank cards look like this:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card.png",alt:null})))),Object(n.b)("h3",{id:"content-visualization"},"Content (Visualization)"),Object(n.b)("p",null,"Content cards allow you to add report objects such as charts and grid/tables to the dashboard. Click the ",Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card_addcontent.png",alt:null})))," button in the middle of the card to add new content to the card. You can always edit the content in the future from the ",Object(n.b)("a",r({parentName:"p"},{href:"#card-toolbar"}),"Card Toolbar")," edit button."),Object(n.b)("p",null,"Clicking the ",Object(n.b)("em",{parentName:"p"},"Add")," or ",Object(n.b)("em",{parentName:"p"},"Edit")," buttons will open the Card Designer (shown below), which allows you to design new content from a ",Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/portal/btn_new_analysis.png",alt:null})))," or search existing content. When searching existing content, double-click the report to open it for designing. Once you're done designing your content, click ",Object(n.b)("em",{parentName:"p"},"Done")," and it will be added to the dashboard."),Object(n.b)("p",null,Object(n.b)("img",r({parentName:"p"},{src:"/img/dashboard/card_designer.png",alt:null}))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Important")," - when you use existing content on a dashboard card, any modifications will ",Object(n.b)("em",{parentName:"p"},"NOT")," affect the existing report. Also, any modifications to the existing report will not affect the dashboard content item.")),Object(n.b)("h3",{id:"filter-panel"},"Filter Panel"),Object(n.b)("p",null,"Filter panels are cards that contain ",Object(n.b)("em",{parentName:"p"},"global")," filters. Global filters are applied to the data in every card on the dashboard. Like regular cards, filter panels can be resized and moved to anywhere on the dashboard."),Object(n.b)("p",null,Object(n.b)("img",r({parentName:"p"},{src:"/img/dashboard/filter_panel.png",alt:null}))),Object(n.b)("h3",{id:"rich-text"},"Rich Text"),Object(n.b)("p",null,"Rich Text cards allow you to design with advanced text and image features to get a page design exactly as you like."),Object(n.b)("p",null,Object(n.b)("img",r({parentName:"p"},{src:"/img/dashboard/card_richtext.png",alt:null}))),Object(n.b)("h3",{id:"card-toolbar"},"Card Toolbar"),Object(n.b)("p",null,"The card toolbar appears in the top-right of a card when you hover your cursor over the card. The options available are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card_newwindow.png",alt:null})))," - opens the card in a new window/tab"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card_snap.png",alt:null})))," - snap fit-to-space expands the card until it bumps into other cards"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card_edit.png",alt:null})))," - edit the card content, or add new content"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card_delete.png",alt:null})))," - removes the card from the dashboard")),Object(n.b)("h2",{id:"using-dashboards"},"Using Dashboards"),Object(n.b)("p",null,"When running dashboards, you are no longer in ",Object(n.b)("a",r({parentName:"p"},{href:"#dashboard-design"}),"Design Mode"),". Although you can no longer move, resize, or edit cards, there are many interactions available."),Object(n.b)("p",null,"In the top-right of each card, you can change to any type of visualization, shown here:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/viz_selector.png",alt:null})))),Object(n.b)("p",null,"You can also click the ",Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/card_newwindow.png",alt:null})))," New Window button in the ",Object(n.b)("a",r({parentName:"p"},{href:"#card-toolbar"}),"card toolbar"),", which opens the card in a new tab."),Object(n.b)("p",null,"You can also change metrics, series, x-axis, and more from the title. In the example below, you can click on ",Object(n.b)("em",{parentName:"p"},"Total Medals")," and change it to ",Object(n.b)("em",{parentName:"p"},"Gold Medals")," to see a different metric:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},Object(n.b)("img",r({parentName:"em"},{src:"/img/dashboard/changedata.png",alt:null})))),Object(n.b)("p",null,"Lastly, you can interact with the visualization just like any other report by hovering, clicking, and so on."))}i.isMDXComponent=!0},131:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return s}));var n=t(0),r=t.n(n),o=r.a.createContext({}),l=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},c=function(e){var a=l(e.components);return r.a.createElement(o.Provider,{value:a},e.children)};var b="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),d=l(t),s=n,p=d[c+"."+s]||d[s]||i[s]||o;return t?r.a.createElement(p,Object.assign({},{ref:a},b,{components:t})):r.a.createElement(p,Object.assign({},{ref:a},b))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[b]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
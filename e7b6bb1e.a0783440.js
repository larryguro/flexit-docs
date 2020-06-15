(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(0);var a=n(131);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o={id:"administration",title:"Administration",hide_title:!0,sidebar_label:"Administration"},i=[{value:"Overview",id:"overview",children:[]},{value:"User Management",id:"user-management",children:[{value:"Adding Users",id:"adding-users",children:[]},{value:"Email Users",id:"email-users",children:[]},{value:"Impersonate User",id:"impersonate-user",children:[]}]},{value:"Groups & Roles",id:"groups--roles",children:[{value:"Adding Groups",id:"adding-groups",children:[]},{value:"Email Groups",id:"email-groups",children:[]},{value:"Impersonate Group/Role",id:"impersonate-grouprole",children:[]}]},{value:"Data Sources",id:"data-sources",children:[]},{value:"Data Models",id:"data-models",children:[]},{value:"Securing Content",id:"securing-content",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Content Database",id:"content-database",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"SMTP Email",id:"smtp-email",children:[]},{value:"Server Settings",id:"server-settings",children:[]},{value:"Backup and Restore",id:"backup-and-restore",children:[]},{value:"Samples",id:"samples",children:[]},{value:"HTTPS",id:"https",children:[]}]}],s={rightToc:i},l="wrapper";function c({components:e,...t}){return Object(a.b)(l,r({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"administration"},"Administration"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Administration is done in the FlexIt web application as shown here:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2018/05/flexit_admin_config.jpg",alt:null}))),Object(a.b)("h2",{id:"user-management"},"User Management"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/admin/users.png",alt:null}))),Object(a.b)("h3",{id:"adding-users"},"Adding Users"),Object(a.b)("p",null,"New users can be added by clicking the ",Object(a.b)("em",{parentName:"p"},"New Users")," button and doing one of the following:\n1.  ",Object(a.b)("strong",{parentName:"p"},"Bulk User Upload")," \u2013 from a .csv file\n2.  ",Object(a.b)("strong",{parentName:"p"},"Add Individual User")," \u2013 enter username, fullname, and role. The user will be emailed a link to set their own password (if using FlexIt authentication)."),Object(a.b)("p",null,"Users can also ",Object(a.b)("em",{parentName:"p"},"Self-register")," from the Login page by clicking on the ",Object(a.b)("em",{parentName:"p"},"Register")," link. This will send an email to Admin users and will also show \u201c1 new user request\u201d when the Admins log into the FlexIt portal. Once the user has been approved, they will\xa0be emailed a link to set their own password (if using FlexIt authentication)."),Object(a.b)("h3",{id:"email-users"},"Email Users"),Object(a.b)("p",null,"Send custom emails to all FlexIt users by clicking ",Object(a.b)("em",{parentName:"p"},"Send Email")," at the top of the Users page, or send to individual users from the ellipsis next to the user name."),Object(a.b)("h3",{id:"impersonate-user"},"Impersonate User"),Object(a.b)("p",null,"Administrators can impersonate individual users, which gives them the ability to see FlexIt ",Object(a.b)("em",{parentName:"p"},"exactly")," as that person sees it. This is helpful for ensuring everything works as expected when securing folders, reports, FlexIt features, and more. When impersonating, you'll see that person's name in the top-right and you will not be able to edit or save any of that users content. Click ",Object(a.b)("em",{parentName:"p"},"Stop Impersonating")," at the top-right to get back to your regular user profile."),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/admin/impersonate.png",alt:null}))),Object(a.b)("h2",{id:"groups--roles"},"Groups & Roles"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/admin/groups_and_roles.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Roles")," define what features of FlexIt users have access to. ",Object(a.b)("em",{parentName:"p"},"Groups")," define what data and content (folders, reports, dashboards, etc.) a set of users has access to. Both groups and roles can be used to secure content and data, but only roles can define application functionality (e.g. create new dashboard)."),Object(a.b)("p",null,"FlexIt has default groups and roles that cannot be modified or removed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Admin")," - Full control over entire application"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Author")," - Ability to create, browse, and run reports"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Consumer")," - Ability to browse and run reports"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Authenticated")," - All authenticated users. Anyone that can log into FlexIt is in this group. Users cannot be individually assigned to this group."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Public")," - Everyone, no authentication required. See note below.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Public Group")," - to use the ",Object(a.b)("em",{parentName:"p"},"Public")," group, you must enable the ",Object(a.b)("em",{parentName:"p"},"Allow Public Access?")," setting under ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/administration#authentication"}),"Administration > Configuration > Authentication"))),Object(a.b)("h3",{id:"adding-groups"},"Adding Groups"),Object(a.b)("p",null,"New groups can be added by clicking the ",Object(a.b)("em",{parentName:"p"},"New Group")," button at the top of the Groups & Roles page. Once the group is added, you can then add users and/or groups to this group. When you add groups to groups, you are ",Object(a.b)("em",{parentName:"p"},"nesting")," them, which gives child groups access to everything the parent group has access to."),Object(a.b)("h3",{id:"email-groups"},"Email Groups"),Object(a.b)("p",null,"Send custom emails to users in a group by clicking the ellipsis next to the group name and selecting ",Object(a.b)("em",{parentName:"p"},"Send Message"),"."),Object(a.b)("h3",{id:"impersonate-grouprole"},"Impersonate Group/Role"),Object(a.b)("p",null,"Administrators can impersonate a group/role, which gives them the ability to see FlexIt ",Object(a.b)("em",{parentName:"p"},"exactly")," as a person in that group/role sees it. This is helpful for ensuring everything works as expected when securing folders, reports, FlexIt features, and more. To impersonate a group, click on the ellipsis next to the group and select ",Object(a.b)("em",{parentName:"p"},"Impersonate XYZ Group"),"."),Object(a.b)("h2",{id:"data-sources"},"Data Sources"),Object(a.b)("p",null,"Data sources are the connection details for the underlying databases and other sources used to pull data for reporting."),Object(a.b)("h2",{id:"data-models"},"Data Models"),Object(a.b)("p",null,"Data models are the presentation layer (a.k.a business view, metadata layer) the report and dashboard authors see when they create new content. Data models connect to underlying data sources and define metadata such as relationships between entities, user-friendly names (e.g. First Name instead of F_NAME), calculations, formatting, drill paths, and more. See the Data Models (Business Views)\u201d knowledge base article for detailed instructions on how to create metadata models."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Read the full guide: ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/datamodeling"}),"Data Models (Business Views)"))),Object(a.b)("h2",{id:"securing-content"},"Securing Content"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Data Models")," and content (folders, reports, dashboards) can be secured at the user or group/role levels. To apply security, locate the item, click the ellipsis to the right, and select ",Object(a.b)("em",{parentName:"p"},"Security"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"There is no need to assign the ",Object(a.b)("em",{parentName:"p"},"Admin")," role to data models or other content since it has access to everything.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Data Model Security")),Object(a.b)("p",null,"When a data model is first created, only the ",Object(a.b)("em",{parentName:"p"},"Admin")," role has permissions. Add users, groups and roles to the desired data model. Data model security overrides ",Object(a.b)("em",{parentName:"p"},"Content Security"),". For example, if you give permission for a group to access a specific report, that group must also have access to the data model otherwise they will be denied access."),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/security_datamodel.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Content Security")),Object(a.b)("p",null,"Add users, groups and roles to the desired folders, reports and dashboards. You can assign security at the ",Object(a.b)("em",{parentName:"p"},"Shared Content")," level (highest) down to individual content items (lowest)."),Object(a.b)("p",null,"If no security is applied to lower-level items, then security is inherited from higher-level items. In the example below, security for the ",Object(a.b)("em",{parentName:"p"},"Samples (Olympic Data)")," folder is inherited from ",Object(a.b)("em",{parentName:"p"},"Shared Content"),"."),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/security_folder1.png",alt:null}))),Object(a.b)("p",null,"To apply security on the ",Object(a.b)("em",{parentName:"p"},"Samples (Olympic Data)")," folder, click the red ",Object(a.b)("em",{parentName:"p"},"Override")," button at the top-right and add desired users, groups and roles. Once added, click the ",Object(a.b)("em",{parentName:"p"},"Read-only")," checkbox if you want them to have read-only access. Read-only access prevents from creating, editing, or removing any content."),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/security_folder2.png",alt:null}))),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The FlexIt configuration settings can be managed under the \u201cAdministration > Configuration\u201d menu, as shown here:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",r({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2018/05/flexit_admin_config.jpg",alt:null}))),Object(a.b)("p",null,"Details for each of the configuration settings can be found below."),Object(a.b)("h3",{id:"content-database"},"Content Database"),Object(a.b)("p",null,"The content database is where everything (reports, dashboards, users, groups, folders, etc.) is stored. By default, FlexIt comes with an enterprise-grade PostgresSQL 10 deployment that is production-ready. See the \u201cInstall and Configure FlexIt Server\u201d knowledge base document for details on managing this database. If you do not use the default database, or would like to change to another database, you can change the settings under \u201cConfiguration > Content Database,\u201d as shown below:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_content.jpg",alt:null}))),Object(a.b)("h3",{id:"authentication"},"Authentication"),Object(a.b)("p",null,"By default, authentication is handled by storing secured credentials in the FlexIt Content Store database. You may also use other authentication methods like LDAP (Lightweight Directory Authentication Protocol), Active Directory, or SAML based Single Sign On from providers like Okta, OneLogin, etc. Each method is shown below:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"FlexIt Authentication")),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_auth_flex.jpg",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"LDAP/Active Directory")),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_auth_ldap.jpg",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"SAML Single Sign On Provider")),Object(a.b)("p",null,"See also:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"/docs/saml"}),"Set up SAML based Single Sign-On in Okta"))),Object(a.b)("p",null,"For the \u201cSAML Configuration\u201d section, the identity provider (Okta, OneLogin, etc.) will provide you with the following when you set up a new application in their tool:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Entry Point URL, also called \u201cIdentity Provider Single Sign-On URL\u201d or \u201cACS (Consumer) URL\u201d"),Object(a.b)("li",{parentName:"ul"},"Identity Provider Issuer, also called \u201cIssuer URL\u201d"),Object(a.b)("li",{parentName:"ul"},"X.509 Certificate")),Object(a.b)("p",null,"The \u201cUser Attribute Statements\u201d and \u201cGroup Attribute Statements\u201d should match the names used in step 7 above. Note the following options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u201cSync Provider Groups?\u201d defaults to \u201cnone\u201d. Set it to \u201cseed\u201d if you want FlexIt to automatically assign the user group ONLY on the first login. Set it to \u201csync\u201d if you always want FlexIt to use the Okta groups. If you use \u201cseed\u201d or \u201csync\u201d, FlexIt will automatically assign the Okta group \u201cFlexIt Admin\u201d to the \u201cAdmin\u201d role, \u201cFlexIt Author\u201d to the \u201cAuthor\u201d role, and \u201cFlexIt Consumer\u201d to the \u201cConsumer\u201d role. Note that the Okta group names must be assigned to the FlexIt Analytics application and exactly match FlexIt ","[Admin, Author, Consumer]","."),Object(a.b)("li",{parentName:"ul"},"\u201cDefault Group\u201d defaults to \u201cnone\u201d. If a user is assigned to the FlexIt Analytics application in Okta, but is not part of any Okta groups, you can automatically assign them either as a \u201cConsumer\u201d or \u201cAuthor\u201d in FlexIt.")),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_config_saml.png",alt:null}))),Object(a.b)("h3",{id:"smtp-email"},"SMTP Email"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Warning: To properly secure your email transmissions, configure your own SMTP server!")),Object(a.b)("p",null,"By default, FlexIt comes with a development SMTP server configuration so that you don\u2019t have to configure anything to test FlexIt. For production purposes and to properly secure your email transmissions, you may want to use your own SMTP server. Configuration details are shown below:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_smtp.jpg",alt:null}))),Object(a.b)("h3",{id:"server-settings"},"Server Settings"),Object(a.b)("p",null,"You can change the host name, port, and number of processes to use for load balancing, as shown below:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_server.jpg",alt:null}))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Click the View Servers button at the top to manage the individual server processes.")),Object(a.b)("h3",{id:"backup-and-restore"},"Backup and Restore"),Object(a.b)("p",null,"Back up and restore the entire content database, or individual reports, folders, dashboards, models, etc. Backups are stored in physical .zip files on your server under the installation directory \u201c","[installdir]","/deployments\u201d."),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_backup.jpg",alt:null}))),Object(a.b)("h3",{id:"samples"},"Samples"),Object(a.b)("p",null,"If you want to deploy the samples data to any database, change the setting here and Save:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2018/09/flexit_admin_samples.jpg",alt:null}))),Object(a.b)("h3",{id:"https"},"HTTPS"),Object(a.b)("p",null,"To enable https on the server, you must place both the Private Key and Certificate file on the server under the \u201c","[installdir]","/config/certs\u201d folder. The Private Key must be in a PEM file named \u201cprivatekey.pem\u201d. The Certificate can be in a file named \u201ccertificate.pem\u201d or \u201ccertificate.cert\u201d. You may also need to change the port to 443, see the Server Settings administration section. Restart the server for changes to take affect."))}c.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,d=p[s+"."+u]||p[u]||c[u]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
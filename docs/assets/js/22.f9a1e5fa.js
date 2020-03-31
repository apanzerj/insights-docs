(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{266:function(e,t,a){"use strict";a.r(t);var s=a(28),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"membership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#membership"}},[e._v("#")]),e._v(" Membership")]),e._v(" "),a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.9.0/css/all.css"}}),e._v(" "),a("p",[e._v("For each organization, there are two levels of access:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("members")]),e._v(" can view any data in the Insights dashboard, but cannot make changes")]),e._v(" "),a("li",[a("strong",[e._v("admins")]),e._v(" can make changes, install the Insights Agent, and access the API")])]),e._v(" "),a("h2",{attrs:{id:"managing-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-members"}},[e._v("#")]),e._v(" Managing Members")]),e._v(" "),a("p",[e._v("To add a new user to your organization, go to your organization's settings page.\nYou can then enter an email address, and decide what their level of access should be. For "),a("strong",[e._v("members")]),e._v(" you can further restrict access to particular clusters by unchecking "),a("strong",[e._v("All Clusters")]),e._v(" and clicking the check boxes next to each cluster that user should have access to.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/new-member.png"),alt:"add a user"}}),e._v(" "),a("p",[e._v("Once a user has been added to the organization, you can edit their access by clicking the\n"),a("i",{staticClass:"text-warning fa fa-user-cog"}),e._v("\nicon next to their name")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/edit-member.png"),alt:"edit a user"}}),e._v(" "),a("h2",{attrs:{id:"namespace-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespace-restrictions"}},[e._v("#")]),e._v(" Namespace Restrictions")]),e._v(" "),a("p",[e._v("Particular namespaces can be hidden from the UI for member users. This is helpful\nif members don't need to see issues e.g. related to "),a("code",[e._v("kube-system")]),e._v(".")]),e._v(" "),a("p",[e._v("To hide a particular namespace from the UI, you can add the following annotation to it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("insights.fairwinds.com/adminOnly=true\n")])])]),a("p",[e._v("Note that this "),a("strong",[e._v("will not")]),e._v(" prevent member users from accessing data about those namespaces -\nthey will still be able to view the raw reports, which may contain information about those\nnamespaces. These namespaces will only be hidden from the Action Items table and other\nvisual interfaces.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
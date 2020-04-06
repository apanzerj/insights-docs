(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cluster-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster-summary"}},[e._v("#")]),e._v(" Cluster Summary")]),e._v(" "),s("p",[e._v("The Cluster Summary page gives an overview of your cluster. You can find\nthe following information here:")]),e._v(" "),s("ul",[s("li",[e._v("Current version of the Insights Agent")]),e._v(" "),s("li",[e._v("Last report time (for the workloads report)")]),e._v(" "),s("li",[e._v("Kubernetes statistics\n"),s("ul",[s("li",[e._v("Version")]),e._v(" "),s("li",[e._v("Nodes")]),e._v(" "),s("li",[e._v("Namespaces")]),e._v(" "),s("li",[e._v("Workloads")]),e._v(" "),s("li",[e._v("Pods")])])]),e._v(" "),s("li",[e._v("Scores")]),e._v(" "),s("li",[e._v("Cost estimates")])]),e._v(" "),s("h2",{attrs:{id:"scores"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scores"}},[e._v("#")]),e._v(" Scores")]),e._v(" "),s("p",[e._v("Cluster scores are computed using the total severity of action items in the table,\nand normalized by the number of workloads you have running in your cluster.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/img/cluster-scores.png"),alt:"cluster scores"}}),e._v(" "),s("p",[e._v("For example, say you have two "),s("strong",[e._v("Security")]),e._v(" action items, one with severity\n"),s("code",[e._v("0.5")]),e._v(", and one with severity "),s("code",[e._v("0.25")]),e._v(". If you have "),s("code",[e._v("10")]),e._v(" workloads running\nin your cluster, this will give you a score of:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1.0 - (0.5 + 0.25) / 10.0\n= 1.0 - .075\n= .925\n= 92.5%\n")])])]),s("p",[e._v("The "),s("strong",[e._v("Overall")]),e._v(" score is an average of the "),s("strong",[e._v("Security")]),e._v(", "),s("strong",[e._v("Efficiency")]),e._v(", and "),s("strong",[e._v("Reliability")]),e._v(" scores.")]),e._v(" "),s("h2",{attrs:{id:"cost-estimates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cost-estimates"}},[e._v("#")]),e._v(" Cost Estimates")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/img/cost-estimates.png"),alt:"cluster cost estimates"}}),e._v(" "),s("p",[e._v("We estimate costs based on pricing for AWS reserved EC2 instances.")]),e._v(" "),s("p",[e._v("We use the numbers provided by AWS to come up with average per-CPU and per-GB-RAM costs.\nWe multiply these by the resources available in your cluster, and use the maximum of CPU and RAM pricing to come up with the final number.")]),e._v(" "),s("p",[e._v("This results in a conservative estimate - your bill will likely be less.")]),e._v(" "),s("h3",{attrs:{id:"utilization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utilization"}},[e._v("#")]),e._v(" Utilization")]),e._v(" "),s("p",[e._v("Cost estimates also show percent utilization. This totals up the limits and requests set by\neach workload running in your cluster, and shows them as a percentage of the total node\ncapacity.")]),e._v(" "),s("p",[e._v("We recommend aiming for about 75% utilization for requests, and 90% utilization for limits.")])])}),[],!1,null,null,null);t.default=r.exports}}]);
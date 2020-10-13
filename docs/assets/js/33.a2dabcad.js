(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{379:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"goldilocks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#goldilocks"}},[e._v("#")]),e._v(" Goldilocks")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/FairwindsOps/goldilocks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Goldilocks"),r("OutboundLink")],1),e._v(" watches your Kubernetes\ndeployments and makes recommendations for resource requests and limits\nbased on actual usage.")]),e._v(" "),r("p",[e._v("Goldilocks utilizes the\n"),r("a",{attrs:{href:"https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler",target:"_blank",rel:"noopener noreferrer"}},[e._v("vertical-pod-autoscaler"),r("OutboundLink")],1),e._v("\nin recommendation mode to extract suggested CPU and Memory limits/requests.")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("Make sure you have\n"),r("a",{attrs:{href:"https://github.com/kubernetes-sigs/metrics-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("metrics-server"),r("OutboundLink")],1),e._v("\ninstalled in your cluster.")]),e._v(" "),r("p",[e._v("You'll also need\n"),r("a",{attrs:{href:"https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler",target:"_blank",rel:"noopener noreferrer"}},[e._v("vertical-pod-autoscaler"),r("OutboundLink")],1),e._v(".\nGoldilocks will install this for you by default, but if you're managing\nyour own VPA installation, you can "),r("code",[e._v("--set goldilocks.installVPA=false")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"remediation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remediation"}},[e._v("#")]),e._v(" Remediation")]),e._v(" "),r("p",[e._v("Goldilocks Action Items will suggest particular amounts for CPU and Memory limits/requests.\nYou can copy/paste these recommendations into your workload configuration.")]),e._v(" "),r("p",[e._v("If Goldilocks is making recommendations for a third-party application, you can likely set\nits requests/limits using its helm chart, or by editing its installation YAML by hand.")])])}),[],!1,null,null,null);t.default=a.exports}}]);
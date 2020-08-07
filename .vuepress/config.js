module.exports = {
  title: "Fairwinds Insights Documentation",
  description: "Documentation for the Fairwinds Insights Kubernetes auditing platform",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    docsRepo: 'FairwindsOps/insights-docs',
    editLinks: true,
    editLinkText: 'Help us improve this page',
    logo: '/img/logo.svg',
    heroText: "",
    sidebar: [
      ['/', 'Home'],
      ["/release-notes", "Release Notes"],
    {
      title: "Installation",
      collapsable: false,
      children: [
        '/installation/getting-started',
        '/installation/insights-agent',
      ],
    }, {
      title: "Features",
      children: [
        "/features/cluster-summary",
        "/features/action-items",
        "/features/cluster-comparison",
        "/features/workloads",
        "/features/add-ons",
        "/features/rbac",
        "/features/continuous-integration",
      ],
    }, {
      title: "Reports",
      sidebarDepth: 0,
      children: [
        "/reports/polaris",
        "/reports/goldilocks",
        "/reports/trivy",
        "/reports/kubesec",
        "/reports/kube-hunter",
        "/reports/release-watcher",
        "/reports/rbac-reporter",
        "/reports/workloads",
        "/reports/rbac-requirements",
        "/reports/new",
      ],
    }, {
      title: "Integrations",
      children: [
        "/integrations/slack",
        "/integrations/datadog",
      ],
    }, {
      title: "Management",
      children: [
        "/management/membership",
        "/management/delete",
      ],
    }, {
      title: "API Access",
      children: [
        "/api/authentication",
        "/api/clusters",
        "/api/reports",
        "/api/custom-reports",
      ],
    }],
  },
  plugins: {
    'vuepress-plugin-clean-urls': {
      normalSuffix: '/',
      notFoundPath: '/404.html',
    },
  },
}

module.exports = {
  title: "Fairwinds Insights Documentation",
  description: "Documentation for the Fairwinds Insights Kubernetes auditing platform",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  base: '/insights-docs/',
  themeConfig: {
    docsRepo: 'FairwindsOps/insights-docs',
    editLinks: true,
    editLinkText: 'Help us improve this page',
    logo: '/img/logo.svg',
    heroText: "",
    sidebar: [
      ['/intro', 'Home'],
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
        "/features/action-items",
        "/features/cluster-comparison",
        "/features/workloads",
        "/features/add-ons",
        "/features/rbac",
      ],
    }, {
      title: "Plugins",
      children: [
        "/plugins/new",
        "/plugins/polaris",
        "/plugins/goldilocks",
        "/plugins/trivy",
        "/plugins/kubesec",
        "/plugins/kube-hunter",
        "/plugins/release-watcher",
        "/plugins/rbac-reporter",
        "/plugins/workloads",
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
    /*
    'vuepress-plugin-clean-urls': {
      normalSuffix: '',
      notFoundPath: '/404.html',
    },
    redirect: {
      redirectors: [
        {
          base: '/',
          alternative: [
            'intro',
          ],
        },
      ],
    },
    */
  },
}

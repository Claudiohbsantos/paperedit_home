module.exports = {
  title: "PaperEdit",
  // tagline: "Cut audio on paper",
  url: "https://home.paperedit.app",
  baseUrl: "/",
  favicon: "imgs/favicon.ico",
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PaperEdit",
      logo: {
        alt: "PaperEdit Logo",
        src: "imgs/favicon.svg",
      },
      links: [
        {
          href: "https://paperedit.app",
          label: "App",
          position: "left",
        },
        {
          to: "docs/about",
          label: "About",
          position: "left",
        },
        {
          to: "docs/",
          label: "Docs",
          position: "left",
        },
        // {
        //   to: "docs/",
        //   label: "Donate",
        //   position: "right",
        //   className: "donate-btn",
        // },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Claudio Santos`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "about",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

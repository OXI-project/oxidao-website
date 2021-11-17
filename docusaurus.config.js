// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OXI DAO',
  tagline: 'Organizacion Autónoma Decentralizada del projecto OXI',
  url: 'https://oxidao.cl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OXI-project', // Usually your GitHub org/user name.
  projectName: 'oxidao-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/OXI-project/oxidao-website/edit/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/OXI-project/oxidao-website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        /* title: 'OXI DAO', */
        logo: {
          alt: 'OXI DAO Logo',
          src: 'img/oxi-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Descripción',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/OXI-project',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Descripción',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/oxidao',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/oxidao',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OXI-project',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OXI Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

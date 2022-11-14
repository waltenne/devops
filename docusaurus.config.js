// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guia DevOps Brasil',
  url: 'https://guiadevopsbrasi.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'comunity', // Usually your GitHub org/user name.
  projectName: 'guiadevopsbrasil', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-Br',
    locales: ['pt-Br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        blog: {
          showReadingTime: false,
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
        title: 'Guia DevOps Brasil',
        logo: {
          alt: 'Bandeira Brasil',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Começe Aqui',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/waltenne/guiadevopsbrasil',
            label: 'Guia DevOps Brasil on Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Comunidade',
            items: [
              {
                label: 'DevOps Brasil - Twitter',
                href: 'https://twitter.com/i/communities/1497739231233458178',
              },
              {
                label: 'LinuxTips - Discord',
                href: 'https://discord.gg/ZmYRAuw?utm_medium=social&utm_source=linktree&utm_campaign=servidor+da+linuxtips+no+discord',
              }              ,
              {
                label: 'MentoriaIaC',
                href: 'https://mentoriaiac.com/',
              }
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/waltenne',
              },
              {
                label: 'Linkedin',
                href: 'https://t.co/aYYwgUbxf5',
              }
              ,
              {
                label: 'Github',
                href: 'https://github.com/waltenne',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Guia DevOps Brasil, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

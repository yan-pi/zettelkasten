import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <h4>⚡ Yan Zettelkasten</h4>,
  head: "Yan's Zettelkasten",
  faviconGlyph: '⚡',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Yan Zettel',
    };
  },
  primaryHue: {
    light: 29,
    dark: 29,
  },
  project: {
    link: 'https://github.com/yan-pi/zettelkasten/tree/main',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/yan-pi/zettelkasten/tree/main',
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: 'Made With Nextra Docs Template',
  },
};

export default config;

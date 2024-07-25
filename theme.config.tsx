import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}`
  : 'https://yan-zettelkasten.vercel.app/'

const config: DocsThemeConfig = {
  logo: <strong>⚡ Yan Fernandes</strong>,
  faviconGlyph: '⚡',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Yan Zettelkasten'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      `${baseUrl}` +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Nextra'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
      </>
    )
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: {
    light: 29,
    dark: 29,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  project: {
    link: 'https://github.com/yan-pi/zettelkasten/tree/main',
  },
  chat: {
    link: 'https://discord.gg/7GBXS29P3k',
  },
  docsRepositoryBase: 'https://github.com/yan-pi/zettelkasten/tree/main',
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <span>
        CC-BY-4.0 license {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/yan-pi/zettelkasten/tree/main?tab=CC-BY-4.0-1-ov-file" target="_blank">
          Yan Fernandes
        </a>
        .
      </span>
    )
  }
};

export default config;

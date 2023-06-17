import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Head from "./components/head";
import NavLogo from "./components/nav-logo";

const config: DocsThemeConfig = {
  logo: <NavLogo />,
  head: <Head />,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – O3 Docs",
    };
  },
  project: {
    link: "https://github.com/denniskigen/o3-docs",
  },
  docsRepositoryBase: "https://github.com/denniskigen/o3-docs/blob/main",
  footer: {
    text: `© ${new Date().getFullYear()} OpenMRS`,
  },
  nextThemes: {
    defaultTheme: "system",
  },
};

export default config;

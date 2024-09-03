import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{fontWeight: 800}}>Cracking the Coding Interview <i style={{fontSize: '0.8em', fontWeight:'400'}}>with Java</i></span>,
  project: {
    link: 'https://github.com/ITKOO/cracking-coding-interview',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config

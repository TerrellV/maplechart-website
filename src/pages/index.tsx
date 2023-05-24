import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';
import CodeExamples from '@site/docs/endpoints/code_examples';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero hero--primary home-hero">
      <div className="container">
        <h1 className="hero__title">{siteConfig.title + "🍁"}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--secondary button--outline button--med"
            to="/docs/intro">
            View API Docs →
          </Link>
        </div>
      </div>
    </header>
  );
}

const code_block = `\
import json
import requests

params={""}
r = requests.get("https://api.maplechart.com/v1/signals/sma-200d/history?pair=btc-usd")
data = r.json()["data"]
`

const text_blocks = [
  {
    title: "Get started in minutes",
    text: `Start using MapleChart's public api without needing to sign up,
    register, or obtain an api key.
    `
  },
  {
    title: "Focus on what matters",
    text: `Stop spending time storing, updating, and calculating timeseries data.
    Pull the data you need, when you need it.
    `
  },
  {
    title: "Discover new insights",
    text: `Combine popular indicators you know and love, with newly added indicators to find
    new and interesting things.
    `
  }
]

function HomeTextBlock({title, text}) {
  return <div className='text--left padding-horiz--md'>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
}

function HomepageContent() {
  const { siteConfig } = useDocusaurusContext();
  return <div className="container padding-top--xl padding-bottom--xl">
    <div className='row'>
    {
      text_blocks.map(i => (
        <div className='col col--4'>
          <HomeTextBlock title={i.title} text={i.text} />
        </div>
      ))
    }
    </div>
    <div className='row'>
      <CodeExamples url="https://api.maplechart.com/v1/signals/sma-200d/history?pair=btc-usd"/>
    </div>
  </div>
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main id="main-landing-content">
        <HomepageContent />
      </main>
    </Layout>
  );
}

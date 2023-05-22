import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free to Use',
    description: (
      <>
        MapleChart API was designed to be open and accessible. With an extremely low barrier for entry, you can quickly start fetching data.
      </>
    ),
  },
  {
    title: 'Focus on what matters',
    description: (
      <>
        The goal of this service is to abstract away the complexity and nuance of managing timeseries crypto data.
      </>
    ),
  },
  {
    title: 'Powered by CoinGecko',
    description: (
      <>
        MapleChart API reference data such as price, volume, marketcap, etc. is sourced from coingecko's public api. Otherwise this NOT provided by or supported by coingecko in any way.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

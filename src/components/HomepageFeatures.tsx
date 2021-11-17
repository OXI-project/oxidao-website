/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dinero "Oxidable"',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Queremos experimentar con dinero que se "oxida", es decir va perdiendo su valor a medida
        que pasa el tiempo. Queremos probar si esto desincentiva el estancamiento y hace fluir 
        el dinero mas rapidamente.
      </>
    ),
  },
  {
    title: 'Organizacion Autónoma Descentralizada (DAO)',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Las decisiones de este proyecto se toman en comunidad. Queremos experimentar con 
        una organización que decide por medio de votación cuadratica las decisiones de financiamiento
        y parametros del sistema.
      </>
    ),
  },
  {
    title: 'Desarrollo Comunitario',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        La comunidad es mas importante que la tecnología. Entendemos que este experimento 
        es un experimento social y que la comunidad que lo implementa tiene todo el control sobre el.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
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

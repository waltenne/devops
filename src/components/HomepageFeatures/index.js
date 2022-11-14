import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comunicação',
    Svg: require('@site/static/img/comunicacao.svg').default,
    description: (
      <>A comunicação de DevOps deve criar meios e processos para garantir as demandas e necessidades das relações das equipe Dev e Operação.
      </>
    ),
  },
  {
    title: 'Colaboração',
    Svg: require('@site/static/img/colaboracao.svg').default,
    description: (
      <>Colaborar é se comprometer com a possibilidade de produzir um resultado maior do que aquele que seria desenvolvido isoladamente.
      </>
    ),
  },
  {
    title: 'Automação',
    Svg: require('@site/static/img/automacao.svg').default,
    description: (
      <>Criação de processos para que diversas atividades rotineiras que demandam muito tempo, possam ser realizadas automaticamente, muito mais rápido. 
      </>
    ),
  },
  {
    title: 'Monitoração',
    Svg: require('@site/static/img/monitoracao.svg').default,
    description: (
      <>Uso de ferramentas para se obter metricas com isso é possível gerar insights sobre os processos e estabelecer melhorias.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

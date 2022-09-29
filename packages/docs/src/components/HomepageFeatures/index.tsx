import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import MountainIcon from '@site/static/img/undraw_docusaurus_mountain.svg'
import TreeIcon from '@site/static/img/undraw_docusaurus_tree.svg'
import ReactIcon from '@site/static/img/undraw_docusaurus_react.svg'

interface FeatureItem {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Explore the files',
    Svg: MountainIcon,
    description: (
      <>
        You can check out all the files using{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="http://192.168.0.3:8006/"
        >
          FileBrowser
        </a>
      </>
    ),
  },
  {
    title: 'Stream videos',
    Svg: TreeIcon,
    description: (
      <>
        Watch some videos using{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://app.plex.tv/"
        >
          Plex
        </a>
      </>
    ),
  },
  {
    title: 'Stream music',
    Svg: ReactIcon,
    description: (
      <>
        Listen to some music using{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jellyfin-music-client.vercel.app/"
        >
          Jellyfin
        </a>
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function HomepageFeatures(): JSX.Element {
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
  )
}

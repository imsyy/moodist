import { BiMoney, BiUserCircle, BiLogoGithub } from 'react-icons/bi/index';
import { BsSoundwave, BsStars } from 'react-icons/bs/index';
import { RxMixerHorizontal } from 'react-icons/rx/index';

import { Balancer } from 'react-wrap-balancer';

import { Container } from '@/components/container';
import { count as soundCount } from '@/lib/sounds';

import styles from './features.module.css';

export function Features() {
  const count = soundCount();

  const features = [
    {
      Icon: BiMoney,
      body: '尽情沉浸在声音中，完全免费',
      id: 'free-access',
      label: '免费使用',
    },
    {
      Icon: BiUserCircle,
      body: '无需注册，立即体验',
      id: 'no-registration',
      label: '免注册',
    },
    {
      Icon: BsSoundwave,
      body: `探索 ${count} 种独特的声音场景，从雨林到城市风光应有尽有`,
      id: 'diverse-sounds',
      label: '多样化声音',
    },
    {
      Icon: RxMixerHorizontal,
      body: '通过混合和调整声音，打造属于你的完美声音场景',
      id: 'customizable-mixes',
      label: '可定制混音',
    },
    {
      Icon: BiLogoGithub,
      body: '参与贡献与协作，让好产品变得更好',
      id: 'open-source',
      label: '开源',
      link: {
        label: '源码地址',
        url: 'https://github.com/remvze/moodist',
      },
    },
    {
      Icon: BsStars,
      body: '沉浸式体验，专注于声音而非技术',
      id: 'seamless-experience',
      label: '无缝体验',
    },
    {
      Icon: BsStars,
      body: '轻松分享你的定制声音混音，传播平静与舒适',
      id: 'share-selections',
      label: '分享混音',
    },
    {
      Icon: BsStars,
      body: '保存你喜欢的混音，随时回到你的声音避风港',
      id: 'save-presets',
      label: '保存预设',
      soon: true,
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <Container>
        <div className={styles.iconContainer}>
          <div className={styles.tail} />
          <div className={styles.icon}>
            <BsStars />
          </div>
        </div>

        <h2 className={styles.title}>Features</h2>

        <div className={styles.features}>
          {features.map(feature => (
            <div className={styles.reason} key={feature.id}>
              <div className={styles.icon}>
                <feature.Icon />
              </div>
              <h3 className={styles.label}>{feature.label}</h3>
              <p className={styles.body}>
                <Balancer>{feature.body}</Balancer>
              </p>

              {feature.link && (
                <a className={styles.link} href={feature.link.url}>
                  {feature.link.label}
                </a>
              )}

              {feature.soon && <div className={styles.soon}>Coming Soon</div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

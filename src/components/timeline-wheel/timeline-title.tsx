import styles from './timeline-title.module.css';

export const TimelineTitle = () => {
  return (
    <p className={styles['timeline-title']} style={{ gridArea: '1 / 1' }}>
      <span className={styles['timeline-title__text_blue']}>
        2015
      </span>
      &nbsp;&nbsp;
      <span className={styles['timeline-title__text_pink']}>
        2022
      </span>
    </p>
  )
}
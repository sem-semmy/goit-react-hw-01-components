// import styles from ''
// import s from './Statistics.module.css';

import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
      
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={styles.item} key={id}>
              <span className="label">{label} </span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// Statistics.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;

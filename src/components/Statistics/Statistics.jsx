import PropTypes from 'prop-types';
import css from "components/Statistics/Statistics.module.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, props }) => {
    return <section className={css.statisticsSection}>
        <h1 className={css.sectionTitle}>STATISTICS</h1>
        <div className={css.statisticContainer}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {props.map(({ id, label, percentage }) => (
                    <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}</span>
                    </li>
                ))}
            </ul>
        </div>
        
    </section>
};

Statistics.propTypes = {
  title: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};
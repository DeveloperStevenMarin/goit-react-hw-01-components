import PropTypes from 'prop-types';
import "./Statistics.module.css";

const getRandomColor = () => {
  const r = (Math.round(Math.random() * 127) + 127).toString(16);
  const g = (Math.round(Math.random() * 127) + 127).toString(16);
  const b = (Math.round(Math.random() * 127) + 127).toString(16);
  return '#' + r + g + b;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((item, index) => (
          <li
            className="item"
            key={index}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

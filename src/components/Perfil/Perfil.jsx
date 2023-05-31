import PropTypes from 'prop-types';
import style from './Perfil.module.css';

export const Perfil = ({ user }) => {
  const { avatar, tag, username, location, stats } = user;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={tag} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats_item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Perfil.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};




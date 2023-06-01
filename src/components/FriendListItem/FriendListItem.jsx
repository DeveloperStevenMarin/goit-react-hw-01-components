import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  return (
    <li className="friend-list-item" key={friend.id}>
      <span
        className={`status ${friend.isOnline ? 'online' : 'offline'}`}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

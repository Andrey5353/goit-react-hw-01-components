import PropTypes from 'prop-types';
import css from 'components/Profile/UserInfo.module.css'

export const UserInfo = ({ avatar, username, tag, location}) => {
    return (
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
    )
};

UserInfo.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};
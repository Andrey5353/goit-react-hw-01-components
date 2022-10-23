import PropTypes from 'prop-types';
import css from 'components/Profile/UserInfo.module.css'

export const UserInfo = ({ avatar, username, tag, location}) => {
    return (
        <div className={css.description}>
            <div className={css.avatarCont}>
                  <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            </div>
          
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    )
};

UserInfo.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};
import PropTypes from 'prop-types';
import css from 'components/Profile/UserStats.module.css'

export const UserStats = ({ followers, views, likes }) => {
    return (
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    )
};

UserStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
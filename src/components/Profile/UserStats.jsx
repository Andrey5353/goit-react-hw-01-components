import PropTypes from 'prop-types';
import css from 'components/Profile/UserStats.module.css'

export const UserStats = ({ followers, views, likes }) => {
    return (
        <ul className={css.stats}>
            <li className={css.stats_item}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.stats_item}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.stats_item}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    )
};

UserStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
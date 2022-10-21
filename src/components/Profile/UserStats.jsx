import Stats from 'components/Profile/user.json';

export const UserStats = () => {
    return (
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{Stats.stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{Stats.stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{Stats.stats.likes}</span>
            </li>
        </ul>
    )
};
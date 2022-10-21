import Info from 'components/Profile/user.json'

export const UserInfo = () => {
    return (
        <ul>
            <p className="name">{Info.username}</p>
            <p className="tag">{Info.tag}</p>
            <p className="location">{Info.location}</p>
        </ul>
    )
};
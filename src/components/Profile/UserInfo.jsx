import Info from 'components/Profile/user.json'

export const UserInfo = () => {
    return (
        <div class="description">
            <img
                src={Info.avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{Info.username}</p>
            <p className="tag">{Info.tag}</p>
            <p className="location">{Info.location}</p>
        </div>
    )
};
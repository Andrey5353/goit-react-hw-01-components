import UserImg from 'components/Profile/user.json';

export const UserAvatar = () => {
    return <img
      src={UserImg.avatar}
      alt="User avatar"
      className="avatar"
    />
}
import { VscCircleLargeFilled } from 'react-icons/vsc';
import css from 'components/FriendList/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
            <VscCircleLargeFilled className={`${css.status} ${css[isOnline]}`} />
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};
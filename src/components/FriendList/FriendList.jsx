import PropTypes from 'prop-types';
import css from "components/FriendList/FriendList.module.css";
import { FriendListItem } from "components/FriendList/FriendListItem/FriendListItem";

export const FriendList = ({ props }) => {
    return (
        <section className={css.friendSection}>
            <h1 className={css.sectionTitle}>FRIANDS</h1>
            <ul className={css.friendList}>
                {props.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline}
                    />
                ))}
            </ul>
        </section>
       
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }))    
};
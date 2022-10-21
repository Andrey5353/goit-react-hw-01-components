import { UserInfo } from "./UserInfo";
import { UserStats } from "./UserStats";
import css from 'components/Profile/Profile.module.css'

export const Profile = ({ props }) => {
    return (
        <>
            <h1 className={css.section_title}>USER PROFILES</h1>
            <div className={css.profile} >
                {props.map(({ username, avatar, tag, location, stats }) => (
                    <div className={css.userCard} key={username}>
                        <UserInfo
                            avatar={avatar}
                            username={username}
                            tag={`@${tag}`}
                            location={location}
                        />
                        <UserStats
                            followers={stats.followers}
                            views={stats.views}
                            likes={stats.likes}
                        />
                    </div>
                ))
                }
            </div>
        </>
    )
};
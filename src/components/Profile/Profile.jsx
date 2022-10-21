import { UserInfo } from "./UserInfo";
import { UserStats } from "./UserStats";

export const Profile = ({ props }) => {
    return (
        <div className="profile" >
            <h1>USER PROFILES</h1>
            {props.map(({ username, avatar, tag, location, stats}) => (
                <div className="userCard" key={username}>
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
    )
};
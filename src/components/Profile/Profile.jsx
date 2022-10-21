import { UserAvatar } from "./UserImg";
import { UserInfo } from "./UserInfo";
import { UserStats } from "./UserStats";

export const Profile = () => {
    return (
        <div className="section">
            <div className="container">
                <UserAvatar />
                <UserInfo />
                <UserStats />
            </div>
        </div>
    )
};
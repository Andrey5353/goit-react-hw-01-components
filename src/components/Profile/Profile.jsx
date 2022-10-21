import { UserInfo } from "./UserInfo";
import { UserStats } from "./UserStats";

export const Profile = () => {
    return (
        <div className="profile">
            <h1>USER PROFILES</h1>
            <UserInfo />
            <UserStats />
        </div>
    )
};
import { Profile } from "./Profile/Profile";
import UserData from "data/user.json"

export const App = () => {
  return (
    <main>
      <Profile props={UserData}/>
    </main>
  );
};

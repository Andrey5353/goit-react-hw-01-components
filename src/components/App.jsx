import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import UserData from "data/user.json";
import StatisticsData from "data/data.json";

export const App = () => {
  return (
    <main>
      <Profile props={UserData} />
      <Statistics title="Upload stats" props={StatisticsData}/>
    </main>
  );
};

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import UserData from "data/user.json";
import StatisticsData from "data/data.json";
import FriendsData from "data/friends.json";
import TransactionsDate from "data/transactions.json";

export const App = () => {
  return (
    <main>
      <Profile props={UserData} />
      <Statistics title="Upload stats" props={StatisticsData} />
      <FriendList props={FriendsData} />
      <TransactionHistory props={TransactionsDate} />
    </main>
  );
};

import { Perfil } from 'components/Perfil/Perfil';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '.././data/user.json'
import stats from ".././data/stats.json";
import friends from '.././data/friends.json'
import transactions from '.././data/transactions.json'



export const App = () => {
  return (
    <div className='app-container'>
      <Perfil user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends}/>
      <TransactionHistory items= {transactions}/>
    </div>
  );
};
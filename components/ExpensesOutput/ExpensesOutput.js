import {View, Text, FlatList} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY = [
  {
    id: 'e1',
    discrption: 'pair of shirt',
    amount: 343,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    discrption: 'pair ice',
    amount: 343,
    date: new Date('2021-11-19'),
  },
  {
    id: 'e3',
    discrption: ' shirt',
    amount: 343,
    date: new Date('2021-12-02'),
  },
  {
    id: 'e4',
    discrption: 'part',
    amount: 343,
    date: new Date('2021-08-19'),
  },
];
function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList  expenses={DUMMY}/>
    </View>
  );
}
export default ExpensesOutput;

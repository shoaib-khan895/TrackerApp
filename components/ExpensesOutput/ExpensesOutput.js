import {View, Text, FlatList, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constans/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY = [
  {
    id: 'e1',
    description: 'pair of shirt',
    amount: 1,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'pair ice',
    amount: 2,
    date: new Date('2021-11-19'),
  },
  {
    id: 'e3',
    description: ' shirt',
    amount: 3,
    date: new Date('2021-12-02'),
  },
  {
    id: 'e4',
    description: 'part',
    amount: 4,
    date: new Date('2021-08-19'),
  },
  {
    id: 'e5',
    description: 'pair of shirt',
    amount: 5,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e6',
    description: 'pair ice',
    amount: 6,
    date: new Date('2021-11-19'),
  },
  {
    id: 'e7',
    description: ' shirt',
    amount: 7,
    date: new Date('2021-12-02'),
  },
  {
    id: 'e8',
    description: 'part',
    amount: 8,
    date: new Date('2021-08-19'),
  },
  {
    id: 'e9',
    description: 'pair of shirt',
    amount: 9,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e10',
    description: 'pair ice',
    amount: 10,
    date: new Date('2021-11-19'),
  },
  {
    id: 'e11',
    description: ' shirt',
    amount: 11,
    date: new Date('2021-12-02'),
  },
  {
    id: 'e12',
    description: 'part',
    amount: 12,
    date: new Date('2021-08-19'),
  },
];
function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.contanier}>
      <ExpensesSummary expenses={DUMMY} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  contanier: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});

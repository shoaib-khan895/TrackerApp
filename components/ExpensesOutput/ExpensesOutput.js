import {View, Text, FlatList, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constans/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';


function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.contanier}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
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

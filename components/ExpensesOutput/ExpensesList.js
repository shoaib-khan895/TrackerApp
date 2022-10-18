import {View, Text, FlatList} from 'react-native';

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.discrption}</Text>;
}
function ExpensesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}></FlatList>
  );
}
export default ExpensesList;

import {useNavigation} from '@react-navigation/native';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constans/styles';
import {getformatedDate} from '../../util/date';

function ExpenseItem({id, description, date, amount}) {
  const navigation = useNavigation();

  function expensesPressHandler() {
    navigation.navigate('ManageExpenses', {expenseId: id});
  }

  return (
    <Pressable
      onPress={expensesPressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.Expenseitem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getformatedDate(date)}</Text>
        </View>
        <View style={styles.amountcontainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  Expenseitem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountcontainer: {
    padding: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});

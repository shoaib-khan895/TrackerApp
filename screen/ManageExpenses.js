import {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constans/styles';

function ManageExpenses({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'edit' : 'Add',
    });
  }, [navigation, isEditing]);
  function deleteExpenseHadler() {}
  return (
    <View style={styles.overAllContainer}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton sign="-" onPress={deleteExpenseHadler} />
        </View>
      )}
    </View>
  );
}
export default ManageExpenses;

const styles = StyleSheet.create({
  overAllContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

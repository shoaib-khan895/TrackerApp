import {ImagePickerIOS, Pressable, StyleSheet, View, Text} from 'react-native';

function IconButton({sign,onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed}>
      <View style={styles.buttonContanier}>
        <Text style={{fontSize: 20, color: 'red'}}>{sign}</Text>
      </View>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  buttonContanier: {
    borderRadius: 24,
    padding: 4,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.greenPale,
    borderRadius: 30
  },
  buttonText: {
    fontWeight: 600,
    fontSize: 13,
    textAlign: 'center'
  }
})

export default styles
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: colors.greenCarlsberg,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: [
      {
        offsetX: 1,
        offsetY: 5,
        blurRadius: 5,
        spreadDistance: 2,
        color: 'rgba(0, 0, 0, 0.1)', // Using rgba for color
      },
    ],
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#FFF',
    fontWeight: 700
  },
  description: {
    fontSize: 11,
    color: '#FFF',
    fontWeight: 400
  }
})

export default styles
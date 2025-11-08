import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  boxShadow: {
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
  boxShadow2: {
    boxShadow: [
      {
        offsetX: 1,
        offsetY: 1,
        blurRadius: 3,
        spreadDistance: 1,
        color: 'rgba(0, 0, 0, 0.05)', // Using rgba for color
      },
    ],
  },
  backgroundOpacity: {
    backgroundColor: `rgba(0, 0, 255, .20)`,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 1.5
  }
})

export default globalStyles
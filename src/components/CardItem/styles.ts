import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 15,
  },
  cardInfo: {
    padding: 10,
    width: '90%',
    borderRadius: 15,
    marginBottom: 10,
    borderColor: `rgba(255, 255, 255, 0.25)`,
    borderWidth: 1.2
  },
  cardTitle: {
    color: '#FFF',
    fontWeight: 700,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  cardDetail: {
    color: '#FFF',
    fontWeight: 500,
    fontSize: 11
  },
  image: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden',
    boxSizing: 'content-box',
  }
})

export default styles
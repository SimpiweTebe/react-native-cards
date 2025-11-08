import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import CardItem, { CardProps } from './src/components/CardItem/CardItem';
import globalStyles from './src/styles/globalStyles';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderBlock from './src/components/HeaderBlock/HeaderBlock';
import { characters } from './src/data';

function App() {

  const charactersList: CardProps[] = characters

  return (
    <SafeAreaProvider style={{ backgroundColor: '#282828'}}>
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <HeaderBlock 
          title='Item shop updated daily'
          description='Check here daily to see the updated item shop'
        />
        <View style={styles.grid}>
          {
            charactersList.map(item => <CardItem key={item.id} name={item.name} details={item.details} image={item.image} />)
          }
        </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
     flexWrap: 'wrap'
  }
})

export default App;

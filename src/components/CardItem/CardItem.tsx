import { View, Pressable, ImageBackground, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles';

export type CardProps = {
  id?: number
  name: string
  details: string
  image: any
}

export default function CardItem(props: CardProps) {
  return (
    <Pressable style={styles.container}>
      <ImageBackground source={props.image} resizeMode="cover" style={styles.image}>
        <View style={[styles.cardInfo, globalStyles.backgroundOpacity, globalStyles.boxShadow2]}>
          <Text style={[styles.cardTitle, globalStyles.textShadow]}>{props.name}</Text>
          <Text  style={[styles.cardDetail, globalStyles.textShadow]}>{props.details}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}
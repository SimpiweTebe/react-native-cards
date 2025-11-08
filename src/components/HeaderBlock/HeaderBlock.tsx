import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButton from '../Button/CustomButton'

type Props = {
  title: string
  description: string
  hasButton?: boolean
  onPress?: ()=> void
}

export default function HeaderBlock({ hasButton, onPress, title, description }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {
        hasButton && onPress && (
        <View>
          <CustomButton />
        </View>
        )
      }
    </View>
  )
}
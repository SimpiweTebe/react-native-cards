import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

export default function CustomButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Buy now</Text>
    </Pressable>
  )
}
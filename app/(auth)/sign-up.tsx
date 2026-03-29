import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const SignUp = () => {
  return (
    <View>
        <Text>SignIn</Text>
        <Link href="/(auth)/sign-in">Log In to Existing Account</Link>
    </View>
  )
}

export default SignUp
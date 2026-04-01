import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from '@/components/SafeAreaView';

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-white text-lg font-bold">Settings</Text>
    </SafeAreaView>
  )
}

export default Settings
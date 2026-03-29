import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from '@/components/SafeAreaView';

const Progress = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-white text-lg font-bold">Progress</Text>
    </SafeAreaView>
  )
}

export default Progress
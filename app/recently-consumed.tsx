import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from '@/components/SafeAreaView';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { scannedItems } from '@/constants/data';
import MealListItem from '@/components/MealListItem';

const RecentlyConsumed = () => {
  const router = useRouter();

  // Mock totals for the summary
  const totalCalories = 1840;
  const protein = 142;
  const carbs = 210;
  const fats = 54;

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      {/* Header */}
      <View className="flex-row justify-between items-center py-4 mb-6">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center rounded-full bg-stone-900 border border-white/5"
        >
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        
        <Text className="text-white text-xl font-bold">Recently Consumed</Text>
        
        <View className="w-10" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

        {/* List of meals */}
        {scannedItems.map((item) => (
          <MealListItem key={item.id} item={item} />
        ))}

        {/* Hydration Example as in screenshot */}
        <MealListItem 
            item={{...scannedItems[0], name: 'Hydration Spark', time: '7:30 AM'}} 
            isHydration 
        />
      </ScrollView>

    </SafeAreaView>
  );
};

export default RecentlyConsumed;

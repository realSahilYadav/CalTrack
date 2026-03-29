import { BlurView } from 'expo-blur';
import { Image, Text, View } from 'react-native';
import React from 'react';

const ScannedCard = ({ item }: { item: SCANNED_ITEM }) => {
  return (
    <View className="h-56 w-52 bg-stone-900 rounded-[32px] overflow-hidden">
        <View className="h-28 w-full relative">
            <Image 
              className="w-full h-full" 
              source={{ uri: item.image }} 
              resizeMode="cover"
            />
            <BlurView
                intensity={40}
                tint="dark"
                className="px-3 py-1 right-3 top-3 absolute rounded-2xl overflow-hidden"
            >
                <Text className="text-white text-[10px] font-bold">
                    {item.calories} kcal
                </Text>
            </BlurView>
        </View>

        <View className="p-4 flex-1 justify-between">
            <Text 
                className="text-white text-base font-semibold leading-tight mb-3" 
                numberOfLines={2}
            >
                {item.name}
            </Text>

            <View className="flex-row justify-between items-center pr-2">
                <View className="items-start">
                    <Text className="text-stone-400 text-[9px] font-bold uppercase tracking-wider mb-0.5">Prot</Text>
                    <Text className="text-white text-sm font-bold">{item.protein}g</Text>
                </View>
                <View className="items-start">
                    <Text className="text-stone-400 text-[9px] font-bold uppercase tracking-wider mb-0.5">Carb</Text>
                    <Text className="text-white text-sm font-bold">{item.carbs}g</Text>
                </View>
                <View className="items-start">
                    <Text className="text-stone-400 text-[9px] font-bold uppercase tracking-wider mb-0.5">Fat</Text>
                    <Text className="text-white text-sm font-bold">{item.fat}g</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ScannedCard;

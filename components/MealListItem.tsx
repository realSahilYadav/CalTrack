import React from 'react';
import { View, Text, Image } from 'react-native';

interface MealListItemProps {
  item: SCANNED_ITEM;
  isHydration?: boolean;
}

const MealListItem = ({ item, isHydration = false }: MealListItemProps) => {
  // Mock progress calculation (e.g., protein reached 60% of meal goal)
  const progressPercent = Math.min((item.protein / 50) * 100, 100);

  return (
    <View className="bg-surface-container-low rounded-[32px] p-4 flex-row items-center mb-4 border border-white/5">
      {/* Left: Image or Icon */}
      <View className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-800 items-center justify-center">
        {isHydration ? (
          <View className="w-10 h-10 bg-cyan-500/20 rounded-full items-center justify-center">
             <View className="w-4 h-6 bg-cyan-400 rounded-full" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 2 }} />
          </View>
        ) : (
          <Image source={{ uri: item.image }} className="w-full h-full" resizeMode="cover" />
        )}
      </View>

      {/* Center: Details */}
      <View className="flex-1 ml-4 justify-center">
        <View className="flex-row justify-between items-start">
          <View className="flex-1 mr-2">
            <Text className="text-white text-lg font-bold leading-tight" numberOfLines={1}>
              {item.name}
            </Text>
            {isHydration ? (
                <Text className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                    500ML ALKALINE WATER
                </Text>
            ) : (
                <>
                    <Text className="text-stone-400 text-[9px] font-bold uppercase tracking-wider mt-1">
                        PROT {item.protein}G | CARB {item.carbs}G | FAT {item.fat}G
                    </Text>
                    {/* Progress Bar */}
                    <View className="h-1 w-full bg-stone-800 rounded-full mt-2 overflow-hidden">
                        <View 
                            className="h-full bg-[#00FF41]" 
                            style={{ width: `${progressPercent}%` }} 
                        />
                    </View>
                </>
            )}
          </View>

          {/* Right: Time & Cals */}
          <View className="items-end">
            <Text className="text-stone-500 text-[10px] font-medium mb-2">
              {item.time}
            </Text>
            {!isHydration && (
              <View className="flex-row items-baseline">
                <Text className="text-white text-lg font-bold">{item.calories}</Text>
                <Text className="text-stone-500 text-[10px] ml-1">kcal</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MealListItem;

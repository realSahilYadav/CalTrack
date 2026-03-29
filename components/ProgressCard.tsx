import React from 'react';
import { View, Text } from 'react-native';


const ProgressCard = ({ data } : { data: PROGRESS_ITEM }) => {
  const isValidGoal = data.goal > 0 && Number.isFinite(data.goal);
  const percentage = isValidGoal ? Math.min(Math.round((data.current / data.goal) * 100), 100) : 0;

  const label = data.unit === 'kcal' ? 'Calories' : 'Protein';

  return (
    <View className="self-stretch p-4 bg-stone-900 rounded-[32px] flex-col items-center justify-start">
      
      <View className="pb-1 flex-col items-center w-full">
        <View className="flex-row items-center gap-2">
          <View className={`w-2 h-2 rounded-full ${percentage >= 100 ? 'bg-blue-400' : 'bg-green-500'}`} />
          <Text className="text-stone-300 text-[10px] font-bold uppercase tracking-wider">
            {label}
          </Text>
        </View>
      </View>

      <View className="flex-col items-center justify-center mt-1">
        <Text className="text-white text-2xl font-bold leading-8">
          {percentage}%
        </Text>
        
        <Text className="text-stone-500 text-[10px] font-medium">
          {data.current} / {data.goal} {data.unit}
        </Text>
      </View>
    </View>
  );
};

export default ProgressCard;
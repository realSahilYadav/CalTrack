import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { hydrationProgress } from '@/constants/data';

export default function HydrationProgress() {
  const [current, setCurrent] = useState(hydrationProgress.current);
  const goal = hydrationProgress.goal;
  
  const progressRatio = useSharedValue(current / goal);
  
  const phase1 = useSharedValue(0);
  const phase2 = useSharedValue(0);

  useEffect(() => {
    phase1.value = withRepeat(
      withTiming(-400, { duration: 3000, easing: Easing.linear }),
      -1,
      false
    );
    phase2.value = withRepeat(
      withTiming(-400, { duration: 4000, easing: Easing.linear }),
      -1,
      false
    );
  }, []);

  useEffect(() => {
    progressRatio.value = withSpring(Math.min(current / goal, 1), { 
        damping: 15,
        stiffness: 90
    });
  }, [current, goal]);

  const animatedFillStyle = useAnimatedStyle(() => {
    const translateY = -15 - (progressRatio.value * 145);
    return {
      transform: [{ translateY }]
    };
  });

  const wave1Style = useAnimatedStyle(() => ({
    transform: [{ translateX: phase1.value }]
  }));

  const wave2Style = useAnimatedStyle(() => ({
    transform: [{ translateX: phase2.value - 150 }]
  }));

  const handleAdd = () => {
    setCurrent(prev => {
      const next = Math.min(prev + 0.1, goal);
      return Number(next.toFixed(1));
    });
  };

  return (
    <View className="relative w-full h-[130px] bg-stone-900 rounded-[32px] overflow-hidden justify-center px-6">
      
      <Animated.View style={[{ position: 'absolute', left: 0, right: 0, top: 130, height: 200 }, animatedFillStyle]}>
        
        <Animated.View style={[{ position: 'absolute', left: 0, top: 0, width: 800, height: 200 }, wave1Style]}>
          <Svg width="800" height="200" viewBox="0 0 800 200">
            <Path 
              d="M 0 30 Q 100 0 200 30 T 400 30 T 600 30 T 800 30 L 800 200 L 0 200 Z" 
              fill="#115e59" 
              opacity={0.8} 
            />
          </Svg>
        </Animated.View>

        <Animated.View style={[{ position: 'absolute', left: 0, top: 10, width: 800, height: 200 }, wave2Style]}>
          <Svg width="800" height="200" viewBox="0 0 800 200">
            <Path 
              d="M 0 30 Q 100 0 200 30 T 400 30 T 600 30 T 800 30 L 800 200 L 0 200 Z" 
              fill="#0d9488" 
              opacity={0.9} 
            />
          </Svg>
        </Animated.View>

      </Animated.View>

      <View className="flex-row items-center justify-between z-10 w-full">
        <View className="flex-col">
          <Text className="text-white text-3xl font-bold tracking-tight">Hydration</Text>
          <Text className="text-[#00e5ff] text-base font-medium mt-1">
            {current.toFixed(1)}L / {goal.toFixed(1)}L Target
          </Text>
        </View>

        <TouchableOpacity 
          onPress={handleAdd} 
          activeOpacity={0.7}
          className="bg-[#00e5ff] h-[60px] w-[60px] rounded-[30px] items-center justify-center shadow-lg"
          accessibilityRole="button"
          accessibilityLabel="Increment hydration"
          accessibilityHint="Adds 0.1L to your hydration total"
        >
          <Text className="text-stone-900 text-3xl font-light leading-none mb-1">+</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

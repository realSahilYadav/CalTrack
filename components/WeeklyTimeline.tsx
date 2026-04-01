import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { weeklyDays } from '@/constants/data';
import { clsx } from 'clsx';

const WeeklyTimeline = () => {
    return (
        <View className="my-6">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-lg font-semibold">Weekly Timeline</Text>
                <Text className="text-on-surface-variant text-label-sm">OCTOBER 2023</Text>
            </View>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12 }}
            >
                {weeklyDays.map((item, index) => (
                    <TouchableOpacity 
                        key={index}
                        className={clsx(
                            "items-center justify-center rounded-full w-[64px] h-[64px]",
                            item.isToday ? "bg-primary-container" : "bg-surface-container-low"
                        )}
                    >
                        <View className="items-center justify-center">
                            <Text className={clsx(
                                "text-[10px] font-bold uppercase",
                                item.isToday ? "text-on-primary" : "text-on-surface-variant"
                            )}>
                                {item.day}
                            </Text>
                            <Text className={clsx(
                                "text-lg font-bold",
                                item.isToday ? "text-on-primary" : "text-white"
                            )}>
                                {item.date}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default WeeklyTimeline;

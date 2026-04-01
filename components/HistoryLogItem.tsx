import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { clsx } from 'clsx';

interface HistoryLogItemProps {
    item: HISTORY_LOG_ITEM;
}

const HistoryLogItem: React.FC<HistoryLogItemProps> = ({ item }) => {
    return (
        <TouchableOpacity 
            className="flex-row items-center bg-surface-container-low p-5 rounded-[32px] mb-4"
        >
            {/* Date Circle */}
            <View className={clsx(
                "w-12 h-12 rounded-full items-center justify-center mr-4",
                item.isToday ? "bg-primary-container" : "bg-surface-container-highest"
            )}>
                <Text className={clsx(
                    "font-bold text-lg",
                    item.isToday ? "text-on-primary" : "text-on-surface-variant"
                )}>
                    {item.date}
                </Text>
            </View>

            {/* Content */}
            <View className="flex-1">
                <Text className="text-white text-lg font-bold mb-1">
                    {item.day}
                </Text>
                <Text className="text-on-surface-variant text-label-sm">
                    {item.calories.toLocaleString()} kcal • {item.protein}g Protein
                </Text>
            </View>

            {/* Weight Change */}
            <View className="items-end mr-3">
                <Text className={clsx(
                    "text-title-sm font-bold",
                    item.weightChange < 0 ? "text-primary-container" : "text-tertiary-fixed-dim"
                )}>
                    {item.weightChange > 0 ? `+${item.weightChange}` : item.weightChange} {item.weightChangeUnit}
                </Text>
                <Text className="text-on-surface-variant text-[10px] uppercase tracking-wider">
                    {item.day === 'Today' ? 'FROM YESTERDAY' : 'FROM PREVIOUS'}
                </Text>
            </View>

            {/* Chevron */}
            <Entypo name="chevron-thin-right" size={16} color="#c4c4c4" />
        </TouchableOpacity>
    );
};

export default HistoryLogItem;

import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from '@/components/SafeAreaView';
import WeeklyTimeline from '@/components/WeeklyTimeline';
import NutritionalTrendsChart from '@/components/NutritionalTrendsChart';
import HistoryLogItem from '@/components/HistoryLogItem';
import { historyLog } from '@/constants/data';

const Progress = () => {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView 
                className="flex-1 px-5" 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <Text className="text-primary-container text-display-lg font-bold mt-4 mb-2">Progress</Text>
                
                <WeeklyTimeline />
                
                <NutritionalTrendsChart />

                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold mb-6">Daily Log History</Text>
                    {historyLog.map((item) => (
                        <HistoryLogItem key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Progress;
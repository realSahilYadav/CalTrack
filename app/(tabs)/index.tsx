import '@/global.css';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from '@/components/SafeAreaView';
import ProgressCard from '@/components/ProgressCard';
import HydrationProgress from '@/components/HydrationProgress';
import { caloriesProgress, proteinProgress, scannedItems } from '@/constants/data';
import ScannedCard from '@/components/ScannedCard';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="header mb-8">
          <Text className="text-display-lg text-primary-container">
            Home
          </Text>
        </View>
        
        <View className="home-main-progress flex-row w-full justify-center gap-5">
          <View className="flex-1">
            <ProgressCard data={caloriesProgress} />
          </View>
          <View className="flex-1">
            <ProgressCard data={proteinProgress} />
          </View>
        </View>

        <View className="mt-8 w-full">
          <HydrationProgress />
        </View>

        <View className="mt-8 w-full">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-lg font-bold">Recently Consumed</Text>
            <Text className="text-green-500 text-xs font-bold uppercase tracking-wider">See All</Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="w-auto"
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {scannedItems.map((item, index) => (
              <View key={item.id} className={index !== scannedItems.length - 1 ? "mr-4" : ""}>
                <ScannedCard item={item} />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
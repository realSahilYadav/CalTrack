import "@/global.css"
import { Link } from 'expo-router';
import { Text } from "react-native";
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to CalTrack!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-black text-white p-4">
        Get Started
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-black text-white p-4">
        Go To Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-black text-white p-4">
        Go To Sign Up
      </Link>
    </SafeAreaView>
  );
}
import "@/global.css"
import { Link } from 'expo-router';
import { Text } from "react-native";
import { SafeAreaView } from '@/components/SafeAreaView';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-primary-container">
        Welcome to CalTrack!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-surface-container-high text-on-surface-variant p-4">
        Get Started
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-surface-container-high text-on-surface-variant p-4">
        Go To Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-surface-container-high text-on-surface-variant p-4">
        Go To Sign Up
      </Link>
    </SafeAreaView>
  );
}
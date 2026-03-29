import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color, focused }: { icon: any, color: string, focused: boolean }) => {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 24, height: 24 }}
      />
    </View>
  );
};

const TabLayout = () => (
    <Tabs screenOptions={{ tabBarShowLabel: true, tabBarActiveTintColor: "#000000" }}>
        <Tabs.Screen 
            name="index" 
            options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.home} color={color} focused={focused} />
                )
            }} 
        />
        <Tabs.Screen 
            name="progress" 
            options={{
                title: 'Progress',
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.progress} color={color} focused={focused} />
                )
            }} 
        />
        <Tabs.Screen 
            name="analytics" 
            options={{
                title: 'Analytics',
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.analytics} color={color} focused={focused} />
                )
            }} 
        />
        <Tabs.Screen 
            name="scanner" 
            options={{
                title: 'Scanner',
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.scanner} color={color} focused={focused} />
                )
            }} 
        />
        <Tabs.Screen 
            name="settings" 
            options={{
                title: 'Settings',
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.settings} color={color} focused={focused} />
                )
            }} 
        />
    </Tabs>
)

export default TabLayout
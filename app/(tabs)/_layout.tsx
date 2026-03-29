import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { tabs } from "@/constants/data";
import clsx from 'clsx';



const TabLayout = () => {
    const TabIcon = ({ icon, focused }: { icon: any, focused: boolean }) => {
        return (
            <View className="tabs-icon">
            <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
                />
            </View>
            </View>
        );
    };

    return (
        <Tabs screenOptions={{
            headerShown: false
            }}>
            {tabs.map((tab) => (
                <Tabs.Screen
                key = { tab.name }
                name = { tab.name }
                options = {{
                    title: tab.title,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={tab.icon}/>
                    )
                }}/>
            ))}
        </Tabs>
    )
}
export default TabLayout
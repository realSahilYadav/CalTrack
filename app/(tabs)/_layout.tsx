import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { tabs } from "@/constants/data";
import clsx from 'clsx';
import { BlurView } from 'expo-blur';

const TabIcon = ({ icon: Icon, iconSelected: IconSelected, focused }: { icon: typeof tabs[number]['icon'], iconSelected: typeof tabs[number]['iconSelected'], focused: boolean }) => {
    return (
        <View className="items-center justify-center mt-10">
            <View 
                className={clsx(
                    'w-[48px] h-[48px] items-center justify-center rounded-full overflow-hidden',
                    focused ? 'bg-[#00FF41]' : 'bg-transparent'
                )}
            >
                {focused ? (
                    <IconSelected width={24} height={24} />
                ) : (
                    <Icon width={24} height={24} />
                )}
            </View>
        </View>
    );
};

const TabLayout = () => {

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                height: 85,
                bottom: 0,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                borderTopWidth: 1,
                borderTopColor: 'rgba(255, 255, 255, 0.05)',
                backgroundColor: 'rgba(28, 27, 27, 0.80)',
                shadowColor: 'rgba(0, 0, 0, 0.40)',
                shadowOffset: { width: 0, height: -10 },
                shadowOpacity: 1,
                shadowRadius: 48,
                elevation: 10,
            },
            tabBarItemStyle: {
                height: '100%',
                justifyContent: 'center', 
                alignItems: 'center',
            },
            tabBarBackground: () => (
                <BlurView 
                    intensity={20} 
                    experimentalBlurMethod="dimezisBlurView"
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                        overflow: 'hidden',
                    }} 
                />
            ),
            }}>
            {tabs.map((tab) => (
                <Tabs.Screen
                key = { tab.name }
                name = { tab.name }
                options = {{
                    title: tab.title,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={tab.icon} iconSelected={tab.iconSelected}/>
                    )
                }}/>
            ))}
        </Tabs>
    )
}
export default TabLayout
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, { Rect, Path, Circle, G, Line, Text as SvgText } from 'react-native-svg';
import { nutritionalTrends } from '@/constants/data';

const { width } = Dimensions.get('window');
const CHART_HEIGHT = 180;
const CARD_PADDING = 24;
const CHART_WIDTH = width - (CARD_PADDING * 2) - 40; // 40 for lateral margins
const BAR_WIDTH = 12;
const BAR_GAP = (CHART_WIDTH - (nutritionalTrends.length * BAR_WIDTH)) / (nutritionalTrends.length - 1);

const NutritionalTrendsChart = () => {
    const maxCalories = Math.max(...nutritionalTrends.map(t => t.calories)) * 1.2; // Extra buffer
    const maxProtein = Math.max(...nutritionalTrends.map(t => t.protein)) * 1.2;

    const getBarHeight = (calories: number) => (calories / maxCalories) * CHART_HEIGHT;
    const getProteinY = (protein: number) => CHART_HEIGHT - (protein / maxProtein) * CHART_HEIGHT;

    // Generate path for the protein line
    const proteinLinePath = nutritionalTrends.reduce((path, item, index) => {
        const x = index * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2;
        const y = getProteinY(item.protein);
        return path + (index === 0 ? `M${x},${y}` : ` L${x},${y}`);
    }, "");

    return (
        <View className="bg-surface-container-low p-6 rounded-[32px] mb-8">
            <Text className="text-on-surface-variant text-label-sm mb-1 tracking-widest">7-DAY TRENDS</Text>
            <View className="flex-row justify-between items-start mb-10">
                <Text className="text-white text-3xl font-bold leading-tight">Nutritional{"\n"}Balance</Text>
                <View className="items-end gap-1 mt-2">
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 rounded-full bg-primary-container mr-2" />
                        <Text className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">PROTEIN (G)</Text>
                    </View>
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 rounded-full bg-tertiary-fixed-dim mr-2" />
                        <Text className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">CALORIES (KCAL)</Text>
                    </View>
                </View>
            </View>

            <View style={{ height: CHART_HEIGHT + 30 }}>
                <Svg width={CHART_WIDTH} height={CHART_HEIGHT + 30}>
                    {/* Grid lines (dashed) */}
                    {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                        <Line
                            key={i}
                            x1="0"
                            y1={CHART_HEIGHT * (1 - p)}
                            x2={CHART_WIDTH}
                            y2={CHART_HEIGHT * (1 - p)}
                            stroke="#ffffff"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            opacity={0.1}
                        />
                    ))}

                    {/* Calorie Bars */}
                    {nutritionalTrends.map((item, index) => {
                        const barHeight = getBarHeight(item.calories);
                        return (
                            <Rect
                                key={index}
                                x={index * (BAR_WIDTH + BAR_GAP)}
                                y={CHART_HEIGHT - barHeight}
                                width={BAR_WIDTH}
                                height={barHeight}
                                fill="#ffb59c" // tertiary-fixed-dim
                                opacity={0.4}
                                rx={2}
                            />
                        );
                    })}

                    {/* Protein Line */}
                    <Path
                        d={proteinLinePath}
                        fill="none"
                        stroke="#00ff41" // primary-container
                        strokeWidth="2.5"
                    />

                    {/* Protein Line Points */}
                    {nutritionalTrends.map((item, index) => (
                        <Circle
                            key={index}
                            cx={index * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2}
                            cy={getProteinY(item.protein)}
                            r="4"
                            fill="#00ff41"
                        />
                    ))}

                    {/* X-axis Labels */}
                    <G transform={`translate(0, ${CHART_HEIGHT + 20})`}>
                        {nutritionalTrends.map((item, index) => {
                            // Only show specific labels to match design (13 Oct, 16 Oct, Today)
                            if (index === 0 || index === 3 || index === 6) {
                                return (
                                    <SvgText
                                        key={index}
                                        x={index * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2}
                                        y="0"
                                        fill="#c4c4c4"
                                        fontSize="10"
                                        textAnchor="middle"
                                    >
                                        {item.label}
                                    </SvgText>
                                );
                            }
                            return null;
                        })}
                    </G>
                </Svg>
            </View>
        </View>
    );
};

export default NutritionalTrendsChart;

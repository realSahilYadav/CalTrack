import type { ImageSourcePropType } from "react-native";

declare global {
    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }

    interface SCANNED_ITEM {
        id: number;
        name: string;
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
        image: string;
        time: string;
    }

    interface PROGRESS_ITEM {
        current: number;
        goal: number;
        unit: string;
    }

    interface WEEKLY_DAY {
        day: string;
        date: number;
        isToday?: boolean;
    }

    interface NUTRITIONAL_TREND {
        label: string;
        calories: number;
        protein: number;
    }

    interface HISTORY_LOG_ITEM {
        id: number;
        day: string;
        date: number;
        calories: number;
        protein: number;
        weightChange: number;
        weightChangeUnit: string;
        isToday?: boolean;
    }
}

export {};
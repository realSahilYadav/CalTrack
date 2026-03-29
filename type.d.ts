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
    }

    interface PROGRESS_ITEM {
        current: number;
        goal: number;
        unit: string;
    }
}

export {};
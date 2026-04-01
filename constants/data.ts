import icons from './icons';

export const tabs = [
    {name: 'index', title: 'Home', icon: icons.home, iconSelected: icons.homeSelected},
    {name: 'scanner', title: 'Scanner', icon: icons.scanner, iconSelected: icons.scannerSelected},
    {name: 'progress', title: 'Progress', icon: icons.progress, iconSelected: icons.progressSelected},
    {name: 'settings', title: 'Settings', icon: icons.settings, iconSelected: icons.settingsSelected},
];

export const hydrationProgress: PROGRESS_ITEM = {
    current: 1.8,
    goal: 3,
    unit: 'L',
};

export const caloriesProgress: PROGRESS_ITEM = {
    current: 1240,
    goal: 2000,
    unit: 'kcal',
};

export const proteinProgress: PROGRESS_ITEM = {
    current: 65,
    goal: 150,
    unit: 'g',
};

export const scannedItems: SCANNED_ITEM[] = [
    {
        id: 1,
        name: 'Salmon Avocado Bowl',
        calories: 420,
        protein: 32,
        carbs: 12,
        fat: 24,
        time: '12:30 PM',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        name: 'Blueberry Greek Yogurt',
        calories: 210,
        protein: 18,
        carbs: 24,
        fat: 6,
        time: '10:15 AM',
        image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        name: 'Grilled Chicken Salad',
        calories: 345,
        protein: 42,
        carbs: 8,
        fat: 12,
        time: '8:15 AM',
        image: 'https://images.unsplash.com/photo-1546793665-c74683c3f38d?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        name: 'Quinoa Buddha Bowl',
        calories: 510,
        protein: 12,
        carbs: 48,
        fat: 14,
        time: 'Yesterday',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        name: 'Protein Smoothie',
        calories: 280,
        protein: 30,
        carbs: 20,
        fat: 8,
        time: 'Yesterday',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        name: 'Oatmeal with Nuts',
        calories: 320,
        protein: 10,
        carbs: 45,
        fat: 12,
        time: '2 days ago',
        image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=400&q=80'
    },
];

export const weeklyDays: WEEKLY_DAY[] = [
    { day: 'MON', date: 16 },
    { day: 'TUE', date: 17 },
    { day: 'WED', date: 18 },
    { day: 'THU', date: 19, isToday: true },
    { day: 'FRI', date: 20 },
    { day: 'SAT', date: 21 },
    { day: 'SUN', date: 22 },
];

export const nutritionalTrends: NUTRITIONAL_TREND[] = [
    { label: '13 Oct', calories: 1200, protein: 45 },
    { label: '14 Oct', calories: 1500, protein: 70 },
    { label: '15 Oct', calories: 1300, protein: 55 },
    { label: '16 Oct', calories: 1800, protein: 90 },
    { label: '17 Oct', calories: 1600, protein: 75 },
    { label: '18 Oct', calories: 1400, protein: 60 },
    { label: 'Today', calories: 1700, protein: 85 },
];

export const historyLog: HISTORY_LOG_ITEM[] = [
    {
        id: 1,
        day: 'Today',
        date: 19,
        calories: 1840,
        protein: 142,
        weightChange: -0.2,
        weightChangeUnit: 'kg',
        isToday: true,
    },
    {
        id: 2,
        day: 'Wednesday',
        date: 18,
        calories: 2100,
        protein: 120,
        weightChange: 0.1,
        weightChangeUnit: 'kg',
    },
    {
        id: 3,
        day: 'Tuesday',
        date: 17,
        calories: 1950,
        protein: 135,
        weightChange: -0.4,
        weightChangeUnit: 'kg',
    },
    {
        id: 4,
        day: 'Monday',
        date: 16,
        calories: 1650,
        protein: 112,
        weightChange: -0.1,
        weightChangeUnit: 'kg',
    },
];
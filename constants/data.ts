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
        name: 'Apple',
        calories: 95,
        protein: 0.5,
        carbs: 25,
        fat: 0.3,
        image: 'https://images.unsplash.com/photo-1560806857-de127cf05c58?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        name: 'Banana',
        calories: 105,
        protein: 1.3,
        carbs: 27,
        fat: 0.4,
        image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        name: 'Orange',
        calories: 62,
        protein: 1.2,
        carbs: 15,
        fat: 0.2,
        image: 'https://images.unsplash.com/photo-1585059895318-50854402660d?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        name: 'Grapes',
        calories: 69,
        protein: 0.7,
        carbs: 18,
        fat: 0.2,
        image: 'https://images.unsplash.com/photo-1537044453278-685ea3c75ec6?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        name: 'Strawberry',
        calories: 33,
        protein: 0.7,
        carbs: 8,
        fat: 0.3,
        image: 'https://images.unsplash.com/photo-1464961130148-988125626cc2?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        name: 'Blueberry',
        calories: 57,
        protein: 0.7,
        carbs: 14,
        fat: 0.3,
        image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 7,
        name: 'Raspberry',
        calories: 52,
        protein: 1.2,
        carbs: 12,
        fat: 0.7,
        image: 'https://images.unsplash.com/photo-1577003811926-63e1d8c2b071?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 8,
        name: 'Blackberry',
        calories: 43,
        protein: 1.4,
        carbs: 9,
        fat: 0.5,
        image: 'https://images.unsplash.com/photo-1570163351336-96d5570081bb?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 9,
        name: 'Pineapple',
        calories: 50,
        protein: 0.5,
        carbs: 13,
        fat: 0.1,
        image: 'https://images.unsplash.com/photo-1550258114-ec0a89d3d3d8?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 10,
        name: 'Mango',
        calories: 60,
        protein: 0.8,
        carbs: 15,
        fat: 0.4,
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80'
    },
];
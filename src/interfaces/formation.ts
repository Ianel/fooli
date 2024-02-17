export type IFormation = {
    id: number;
    title: string;
    subtitle: string;
    isOnline: boolean;
    date: string;
    place: string;
    price: number;
    category?: string;
    syllabus: string[];
    status: string;
};

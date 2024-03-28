export type Feature = { title: string, description: string }
export type Pricing = {
    plan: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
}
export type Question = {
    question: string;
    answer: string;
}
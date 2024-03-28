import { Feature, Pricing, Question } from "@/types"

const features: Feature[] = [
    {
        title: "Secure Password Storage",
        description: "Safely store all your passwords in one place with top-notch security measures."
    },
    {
        title: "Password Generator",
        description: "Create strong and unique passwords with our built-in password generator tool."
    },
    {
        title: "Easy Access Anywhere",
        description: "Access your passwords anytime, anywhere, from any device with internet connectivity."
    },
    {
        title: "Auto-fill Login Credentials",
        description: "Effortlessly log in to your accounts with auto-fill feature for login credentials."
    }
]


const pricingModels: Pricing[] = [
    {
        plan: 'free',
        description: 'Ideal for personal use',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            'Unlimited password storage',
            'Basic security measures',
            'Limited customer support',
            'Ads supported'
        ]
    }, {
        plan: 'basic',
        description: 'Great for small businesses',
        monthlyPrice: 5,
        yearlyPrice: 50,
        features: [
            'All features of FREE plan',
            'Unlimited password storage',
            'Enhanced security features',
            'Priority customer support',
            'No ads'
        ]
    }, {
        plan: 'pro',
        description: 'Perfect for enterprises',
        monthlyPrice: 10,
        yearlyPrice: 100,
        features: [
            'All features of BASIC plan',
            'Unlimited password storage',
            'Advanced security protocols',
            '24/7 dedicated customer support',
            'Custom branding options'
        ]
    },

]


const questions: Question[] = [
    {
        question: 'Is my data secure with your password storage service?',
        answer: 'Yes, we use advanced encryption methods to ensure the security of your data.'
    },
    {
        question: 'Can I access my passwords from multiple devices?',
        answer: 'Yes, you can access your passwords from any device with an internet connection.'
    },
    {
        question: 'What happens if I forget my master password?',
        answer: 'Unfortunately, if you forget your master password, we cannot recover it as we do not store it for security reasons. You will need to reset your account.'
    },
    {
        question: 'Can I share passwords with others using your service?',
        answer: 'Yes, you can securely share passwords with trusted individuals using our secure sharing feature'
    },
    {
        question: 'Is there a limit to the number of passwords I can store?',
        answer: 'No, there is no limit to the number of passwords you can store in our password storage service.'
    }
]

export const data = {
    questions,
    features,
    pricingModels
}
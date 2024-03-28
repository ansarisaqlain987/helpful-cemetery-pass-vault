import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { FC } from "react"
import { FaCheck } from "react-icons/fa";

type Feature = { title: string, description: string }
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
const FeatureComponent: FC<{ feature: Feature }> = ({ feature }) => {
    return (
        <div className='mx-5 my-4 bg-[#716B80] py-5'>
            <div className="text-2xl font-bold">{feature.title}</div>
            <div>{feature.description}</div>
        </div>
    )
}



type Pricing = {
    plan: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[]

}
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
const PriceSubsciprtion: FC<{ currency: string, amount: number, postfix: string, size: 'lg' | 'sm' }> = (
    { currency, postfix, amount, size }
) => {
    if (size === 'lg') {
        return <div className="flex flex-row gap-[0.5] font-bold items-end">
            <div className="text-xl ">{currency}</div>
            <div className="text-5xl">{amount}</div>
            <div className="text-3xl px-1">{postfix}</div>
        </div>
    }

    return <div className="flex flex-row gap-[0.5] font-semibold items-end">
        <div className="text-xl ">{currency}</div>
        <div className="text-xl">{amount}</div>
        <div className="text-xl px-1">{postfix}</div>
    </div>

}
const PricingCard: FC<{ details: Pricing, default?: boolean }> = ({ details, default: defaultPlan }) => {
    return (
        <div className='bg-[#E6EBE0] min-h-[200px] py-4 text-left px-8 flex flex-col'>
            <div className="mt-4 text-2xl uppercase font-bold">{details.plan}</div>
            <div className="mt-2">{details.description}</div>
            <div className="mt-8"><PriceSubsciprtion amount={details.monthlyPrice} currency="$" postfix="/ month" size="lg" /></div>
            <div className=""><PriceSubsciprtion amount={details.yearlyPrice} currency="$" postfix="/ year" size="sm" /></div>
            <div className="mt-8 flex-1">
                {details.features.map((f) => <div className="my-3 flex gap-2 items-center"><FaCheck className='h-[100%]' />{f}</div>)}
            </div>
            <div className='mt-8 mb-4'>
                {defaultPlan ? (<Button className="w-[100%]" disabled variant={'outline'}>Current Plan</Button>) : (<Button className="w-[100%]" disabled>Coming Soon</Button>)}
            </div>
        </div>
    )
}
export const Home: FC = () => {
    return (
        <>
            <div className="my-8">
                <Container>
                    <div className="text-center text-2xl mt-24">Open Source</div>
                    <div className="text-6xl text-center ">Secure Password Storage</div>
                    <div className="text-xl text-center my-2">Safely store all your passwords in one place</div>
                    <div className="text-center my-8 flex justify-center gap-4 mb-24">
                        <Button>Get Started</Button>
                        <Button variant={'secondary'}>Lean More</Button>
                    </div>
                </Container>
            </div>

            <div className='bg-extra my-8 text-white py-14'>
                <Container>
                    <div className="text-center">
                        <div className="text-sm mb-2 font-bold">FEATURES</div>
                        <div className="text-4xl my-4">Key Features of Our Password Storage Service</div>
                        <div className="text-lg my-2">Discover the powerful features that make password management a breeze.</div>
                        <div className="grid gap-4 mt-8 xs:grid-cols-1 md:grid-cols-2">
                            {
                                features.map((f) => {
                                    return <FeatureComponent feature={f} />
                                })
                            }
                        </div>
                    </div>
                </Container>
            </div>

            <div className="mt-14">
                <Container>
                    <div className="text-center">
                        <div className="text-sm mb-2 font-bold">PRICING</div>
                        <div className="text-4xl my-4">Choose the Right Plan for You</div>
                        <div className="text-lg my-2">Secure your passwords with our flexible pricing options</div>
                        <div className="my-10 grid gap-4 xs:grid-cols-1 md:grid-cols-3">
                            {
                                pricingModels.map((details, index) => {
                                    return <PricingCard details={details} default={index === 0} />
                                })
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}
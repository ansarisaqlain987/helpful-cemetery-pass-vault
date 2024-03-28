import { Button } from "@/components/ui/button";
import { Pricing } from "@/types";
import { FC } from "react";
import { FaCheck } from "react-icons/fa";


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

export const PricingCard: FC<{ details: Pricing, default?: boolean }> = ({ details, default: defaultPlan }) => {
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
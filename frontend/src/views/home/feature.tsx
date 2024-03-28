import { Feature } from "@/types"
import { FC } from "react"

export const FeatureComponent: FC<{ feature: Feature }> = ({ feature }) => {
    return (
        <div className='mx-5 my-4 bg-[#716B80] py-5'>
            <div className="text-2xl font-bold">{feature.title}</div>
            <div>{feature.description}</div>
        </div>
    )
}
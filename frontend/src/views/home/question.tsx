import { Question } from "@/types";
import { FC } from "react";

export const SingleQuestion: FC<{data: Question}> = ({data}) => {
    return <div className="mb-6">
        <div className="text-2xl font-semibold">{data.question}</div>
        <div className="text-lg mt-1 ">{data.answer}</div>
    </div>
}
import { FC, PropsWithChildren } from "react"

export const Container: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <div className="container mx-auto px-0">
            {children}
        </div>
    )
}
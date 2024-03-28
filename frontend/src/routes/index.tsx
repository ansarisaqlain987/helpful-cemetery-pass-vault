import { FC, PropsWithChildren, ReactElement } from "react";
import { useAuth } from '@clerk/clerk-react'

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactElement  => {
    const {isSignedIn} = useAuth();
    return isSignedIn ? <div>{children}</div> : <div>FOrbidden</div>
}
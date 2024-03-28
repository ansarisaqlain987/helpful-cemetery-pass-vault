import { FC } from "react";
import { Button } from "../ui/button";
import { SignOutButton, SignedIn, SignedOut, useSignIn } from '@clerk/clerk-react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";

const components: { title: string; href: string; }[] = [
    {
        title: "Settings",
        href: "/docs/primitives/alert-dialog",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export const AppBar: FC = () => {
    const { signIn } = useSignIn();
    
    const onLoginButtonClick = async () => {
        await signIn?.authenticateWithRedirect({ strategy: 'oauth_google', redirectUrl: '/', redirectUrlComplete: window.location.pathname ?? '/' });
    }
    return (
        <Container>
            <div className="flex h-16 px-4 items-center mx-0">
                <div className="flex-1 sm:text-2xl md:text-3xl text-xl">PASSLOCK</div>
                <SignedOut>
                    <Button onClick={() => onLoginButtonClick()}>Login</Button>
                </SignedOut>
                <SignedIn>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Go To Vaults
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[150px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            />
                                        ))}
                                        <SignOutButton><ListItem
                                            key={'Logout'}
                                            title={'Logout'}
                                        />
                                        </SignOutButton>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </SignedIn>
            </div>
        </Container>
    )
}
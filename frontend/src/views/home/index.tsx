import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { FC } from "react"
import { FeatureComponent } from "./feature";
import { PricingCard } from "./pricing";
import { SingleQuestion } from "./question";
import { data } from "@/lib/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const { features, questions, pricingModels } = data

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

            <div>
                <Container>
                    <div className="mt-24 py-8 text-center">
                        <div className="text-4xl my-4">Effortlessly Manage Your Passwords</div>
                        <div className="text-lg my-2">Our password storage solution offers top-notch security features to keep your sensitive information safe. Say goodbye to forgotten passwords and insecure methods of storing them. With our platform, you can access your passwords anytime, anywhere, with peace of mind.</div>
                        <div className="text-center my-8 flex justify-center gap-4 mb-24">
                            <Button>Lean More</Button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='bg-extra text-white py-14'>
                <Container>
                    <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4 mx-2">
                        <div>
                            <div className="text-sm mb-2">FAQ</div>
                            <div className="text-4xl mb-4">Common Questions</div>
                            <div className="text-xl">Here are some of the most common questions that we get.</div>
                        </div>
                        <div className='col-span-2'>
                            {
                                questions.map((q) => <SingleQuestion data={q} />)
                            }
                        </div>
                    </div>
                </Container>
            </div>

            <div  className="my-8">
                <Container>
                    <div className="flex gap-6">
                        <div className="flex-1 text-xl">Product By: <span className="font-bold">Saqlain Ansari</span></div>
                        <div className="text-3xl" ><FaGithub /></div>
                        <div className="text-3xl"><FaLinkedin /></div>
                    </div>
                </Container>
            </div>
        </>

    )
}
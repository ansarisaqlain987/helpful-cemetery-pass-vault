
import { SignOutButton, SignedIn, SignedOut, useAuth, useSignIn } from '@clerk/clerk-react'

function App() {
  const {signIn} = useSignIn();
  const {getToken}  = useAuth();
  setTimeout(async () => {
    const token = await getToken({template: 'dev-jwt-template'})
  console.log('TOKEN: ', token)
}, 10000)

  const onButtonClick = async () => {
    await signIn?.authenticateWithRedirect({strategy: 'oauth_google', redirectUrl: '/', redirectUrlComplete: '/'});
    
    
  }

  return (
    <>
      <SignedOut>
        <button onClick={onButtonClick}>Sign In</button>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </>
  )
}

export default App

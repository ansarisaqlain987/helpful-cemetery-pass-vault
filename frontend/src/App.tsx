import { AppBar } from '@/components/appbar';
import { Home } from '@/views/home';

function App() {
  // const { getToken } = useAuth();
  // setTimeout(async () => {
  //   const token = await getToken({ template: 'dev-jwt-template' })
  //   console.log('TOKEN: ', token)
  // }, 10000)


  return (
    <>
      <AppBar />
      <Home />
    </>
  )
}

export default App

import { AppBar } from '@/components/appbar';
import { Home } from '@/views/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoute } from './routes';

function App() {
  // const { getToken } = useAuth();
  // setTimeout(async () => {
  //   const token = await getToken({ template: 'dev-jwt-template' })
  //   console.log('TOKEN: ', token)
  // }, 10000)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/protected",
      element: <ProtectedRoute><div>Protected</div></ProtectedRoute>
    },
    {
      path: "*",
      element: <div>Not Found</div>
    },
  ]);

  return (
    <>
      <AppBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './features/ui/Home';
import Menu from './features/menu/components/Menu';
import Cart from './features/cart/componets/Cart';
import CreateOrder from './features/order/components/CreateOrder';
import Order from './features/order/components/Order';
import AppLayout from './features/ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

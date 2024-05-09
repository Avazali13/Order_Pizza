import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Error from './ui/Error';
import Home from './ui/Home';
import Cart from './features/Cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/Order/CreateOrder';
import Order, { loader as orderLoader } from './features/Order/Order';
import Menu, { loader as menuLoader } from './features/Menu/Menu';
import AppLayout from './ui/AppLayout';
import {action as updateOrderAction} from './features/Cart/UpdateOrder'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action:updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

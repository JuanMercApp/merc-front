import { useRoutes, Outlet } from 'react-router-dom';
import ProductList from '../components/productList/ProductList';
import ProductDetail from '../components/productDetail/ProductDetail';
import Navbar from '../components/common/Navbar';

export default function Router() {
  const notFound = <div>NotFound</div>;
  return useRoutes([
    {
      path: '/',
      element: <><Navbar/><Outlet/></>,
      children: [
        { path: 'items', element: <ProductList /> },
        { path: 'items/:id', element: <ProductDetail /> }
      ]
    },
    { path: '*', element: notFound }
  ]);
  
}

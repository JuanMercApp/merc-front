import { Navigate, useRoutes, Outlet } from 'react-router-dom';
import ProductList from '../components/productList/ProductList';
import ProductDetail from '../components/productDetail/ProductDetail';

// ----------------------------------------------------------------------

export default function Router() {
  const simpleElement = <><div>navbar</div><Outlet/></>;
  const notFound = <div>NotFound</div>;
  return useRoutes([
    {
      path: '/',
      element: simpleElement,
      children: [
        { path: 'items', element: <ProductList /> },
        { path: 'items/:id', element: <ProductDetail /> }
      ]
    },
    { path: '*', element: notFound }
  ]);
  
}

import axios from 'axios'
import { useRoutes } from 'react-router-dom'
import OrderAdd from './components/admin/orderadd'
import OrderList from './components/client/orderlist'
import AddProduct from './components/admin/addproduct'
import Home from './pages/home'
import EditProduct from './components/admin/editproduct'
import Register from './pages/register'
import Login from './pages/login'
import AdminLayout from './layout/admin/admin'
import Dashboard from './layout/admin/dashboard'
import AddCategory from './components/admin/addcategory'
import CategoryList from './components/client/categoryList'
import EditCategory from './components/admin/editcategory'
import ClientLayout from './layout/client/client'
import ClientHeader from './layout/client/header'
import ProductDetail from './layout/client/productDetail'
import CategoryDetail from './layout/client/categoryDetail'
import Search from './layout/client/search'
function App() {
  // Khai báo routes
  const routes = useRoutes([
    { path: '/admin', element: <Home /> },
    { path: '/order-add', element: <OrderAdd /> },
    { path: '/order-list', element: <OrderList /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/category', element: <CategoryList /> },
    { path: '/product-edit/:id', element: <EditProduct /> },
    { path: '/category-edit/:id', element: <EditCategory /> },
    { path: '/product-add', element: <AddProduct /> },
    { path: '/category-add', element: <AddCategory /> },
    { path: '/search', element: <Search /> },
    {
      path: 'dashboard', element: <AdminLayout />, children: [
        { path: '', element: <Dashboard /> },

      ]
    },
    {
      path: '/' , element: <ClientLayout />, children: [
        {path: '', element: <ClientHeader/>},
      ]
    },
    {path: '/chiTiet/:id', element: <ProductDetail/>},
    {path: '/chiTietDanhMuc/:id', element: <CategoryDetail/>},

  ])
  return routes
}

export default App

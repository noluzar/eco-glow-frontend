import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Register } from './pages/Register';
import { Footer } from './components/Footer';
import { MainLayout } from './layout/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Profile } from './pages/Profile';
import { Products } from './pages/Products';
import { CreateProduct } from './pages/CreateProduct';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import { UserProducts } from './pages/UserProducts';
import ProductDetails from './pages/ProductDetails';
import DashboardCustomers from './pages/DashboardCustomers';
import Checkout from './pages/Checkout';
import OrderSummary from './pages/OrderSummary';
import OrderHistory from './pages/OrderHistory';
import Orders from './components/Orders';


const App = () => {
  return (
    <div className='bg-[#f6e9db] font-title'>
    <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='' element={<PrivateRoute />}>
            <Route path='/admin' element={<AdminLayout />}>
            <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='products' element={<Products />}/>
              <Route path='create' element={<CreateProduct />}/>
              <Route path='customers' element={<DashboardCustomers />}/>
              <Route path='orders' element={<Orders />}/>
            </Route>
            <Route path='/userproducts' element={<UserProducts />}/>
            <Route path='/details/:id' element={<ProductDetails />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/ordersummary' element={<OrderSummary />}/>
            <Route path='/orderhistory' element={<OrderHistory />}/>
          </Route>
        </Routes>
        <Footer/>
    </Router>
    </div>
  )
}

export default App

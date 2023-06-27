
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Welcome from './components/welcome/Welcome';
import Navbar from './components/navbar/Navbar';
import Luxury from './components/Luxury/Luxury';
import Gellary from './components/gellary/Gellary';
import Login from './components/Login/Login';
import Register from './components/register/Register';
import Blogs from './components/blogs/Blogs';
import Home from './pages/Home/Home';
import Contact from './components/Contact/Contact';
import Regroom from './components/RegRoom/Regroom';
import AdminNav from './components/navbar/AdminNav';
import AddRoom from './components/addmin/AddRoom';
import ViewAdd from './components/VIewAdmin/ViewAdd';
import Update from './components/update/Update';
import AdminHome from './pages/Admin/AdminHome';
import Admin from './pages/Admin/Admin';
import AdmContact from './pages/Admin/AdmContact';
import AdmGellary from './pages/Admin/AdmGellary';
import Adminblog from './pages/Admin/Adminblog';
import AdmRoom from './pages/Admin/AdmRoom';
import AdmUpdate from './pages/Admin/AdmUpdate';
import AdmView from './pages/Admin/AdmView';
import Userhome from './pages/User/userHome/Userhome';
import UseContact from './pages/User/userHome/UseContact';
import Useblog from './pages/User/userHome/Useblog';
import USerGEllary from './pages/User/userHome/USerGEllary';
import UseRoom from './pages/User/userHome/UseRoom';
import HomeGellary from './pages/Home/HomeGellary';
import Homeblog from './pages/Home/Homeblog';
import Homecontact from './pages/Home/Homecontact';
import ViewUser from './components/ViewUsers/ViewUser';
import AdmViewUser from './pages/Admin/AdmViewUser';
import BookedRooms from './pages/Admin/BookedRooms';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Usermore from './pages/User/userHome/Usermore';
import Approv from './pages/Admin/Approv';
import AddGellary from './components/Addgellary/AddGellary';
import Vdom from './components/Vdom';

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='welcome' element={<Welcome/>} />
  <Route path='/navbar' element={<Navbar/>} />
  <Route path='/room' element={<Luxury/>} />
  <Route path='/gellary' element={<Gellary/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/blog' element={<Blogs/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/regroom/:id' element={<Regroom/>} />
  <Route path='/adminav' element={<AdminNav/>} />
  <Route path='/addroom' element={<AddRoom/>} />
  <Route path='/viewroom' element={<ViewAdd/>} />
  <Route path='/adminhome' element={<AdminHome/>} />
  <Route path='/updateroom/:id' element={<Update/>} />
  <Route path='/admin' element={<Admin/>} />
  <Route path='/admcontact' element={<AdmContact/>} />
  <Route path='/admgellary' element={<AdmGellary/>} />
  <Route path='/admhome' element={<AdminHome/>} />
  <Route path='/admblog' element={<Adminblog/>} />
  <Route path='/admroom' element={<AdmRoom/>} />
  <Route path='/admupdate' element={<AdmUpdate/>} />
  <Route path='/admview' element={<AdmView/>} />
  <Route path='/userhome' element={<Userhome/>} />
  <Route path='/usercontact' element={<UseContact/>} />
  <Route path='/userblog' element={<Useblog/>} />
  <Route path='/usergellary' element={<USerGEllary/>} />
  <Route path='/useroom' element={<UseRoom/>} />
  <Route path='/homegellary' element={<HomeGellary/>} />
  <Route path='/homeblog' element={<Homeblog/>} />
  <Route path='/homecontact' element={<Homecontact/>} />
  <Route path='/viewuser' element={<ViewUser/>} />
  <Route path='/userview' element={<AdmViewUser/>} />
  <Route path='/bookedrooms' element={<BookedRooms/>} />
  <Route path='/moreinfo' element={<MoreInfo/>} />
  <Route path='/roomdeteils/:id' element={<Usermore/>} />
  <Route path='/approv/:id' element={<Approv/>} />
  <Route path='/addgellary' element={<AddGellary/>} />
  <Route path='/vdom' element={<Vdom/>} />
  <Route path='/admgellary' element={<AdmGellary/>} />
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;

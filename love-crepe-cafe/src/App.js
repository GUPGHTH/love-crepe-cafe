import ReactDOM from 'react-dom/client'
import Layout from './page/Layout.js';
import HomeCustomer from './page/Home_customer.jsx';
import NoPage from './page/NoPage.jsx';
import Listmenu from './page/ListMenu.jsx';
import { BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect, } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeCustomer />} />
          <Route path='/:lang' element={<HomeCustomer />}></Route>
          <Route path='list/:lang' element={<Listmenu />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

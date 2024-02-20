import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screen/home/home';
import CreateAccount from './screen/createaccount/createaccount';
import Services from './screen/services/services';
import AboutUs from './screen/aboutUs/aboutUs';
import { AllRoutes } from './router/router';
import PaymentPage from './screen/payment/payment';
import ProductWindow from './screen/productwindow/productWindow';
import LoginPage from './screen/login/login';
import ProductHome from './screen/home/product-home';
import PrivateRoute from "./router/privateRoute";
import TableComponent from './screen/login/admin';
import ContactScreen from './screen/contact/contact';
import ServiceScreen from './screen/services/services';
import ProductScreen from './screen/products/products';
import AddItemForm from './additems/additems';
import DeleteItemScreen from './additems/deleteitems';
import PaymentPagescreen from './screen/paymentpage/paymentscreen';


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Routes */}
        <Routes>
          <Route path={AllRoutes.home} element={<Home />} />
          <Route path={AllRoutes.createaccount} element={<CreateAccount />} />
          <Route path={AllRoutes.services} element={<Services />} />
          <Route path={AllRoutes.aboutus} element={<AboutUs />} />
          <Route path={AllRoutes.payment} element={<PaymentPage />} />
          <Route path={AllRoutes.productwindow} element={<ProductWindow />} />
          <Route path={AllRoutes.login} element={<LoginPage />} />
          <Route path={AllRoutes.contact} element={<ContactScreen />} />
          <Route path={AllRoutes.service} element={<ServiceScreen />} />
          <Route path={AllRoutes.products} element={<ProductScreen />} />

          {/* Private Route for Product Home */}
          <Route path={AllRoutes.producthome} element={
            <PrivateRoute path={AllRoutes.producthome}>
              <ProductHome />
            </PrivateRoute>
          } />

           {/* Private Route for Add Items */}
           <Route path={AllRoutes.deleteitems} element={
            <PrivateRoute path={AllRoutes.deleteitems}>
              <DeleteItemScreen />
            </PrivateRoute>
          } />

          {/* Private Route for Add Items */}
          <Route path={AllRoutes.paymentpage} element={
            <PrivateRoute path={AllRoutes.paymentpage}>
              <PaymentPagescreen />
            </PrivateRoute>
          } />

         


          {/* Private Route for Admin */}
          <Route path={AllRoutes.admin} element={
            <PrivateRoute path={AllRoutes.admin}>
              <TableComponent />
            </PrivateRoute>
          } />

          {/* Private Route for Add Items */}
          <Route path={AllRoutes.additems} element={
            <PrivateRoute path={AllRoutes.additems}>
              <AddItemForm />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

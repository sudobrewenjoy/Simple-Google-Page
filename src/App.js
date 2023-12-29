import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screen/home/home';
import CreateAccount from './screen/createaccount/createaccount';
import Services from './screen/services/services';
import AboutUs from './screen/aboutUs/aboutUs';
import { AllRoutes } from './router/router';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

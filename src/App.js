
import './App.css';

import Home from './pages/home';
import Settings from './pages/settings';
import Chart from './pages/chart';
// import Usage from './pages/usage';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './components/header';
import UserDetails from './pages/userDetails';
import NotFound from './pages/notFound';
import Marks from './pages/marks';
import Sports from './pages/sports';
import Remarks from './pages/remarks';
import React, { Suspense, lazy } from 'react';
import Login from './pages/login';

const Users = lazy(() => import('./pages/usage'))

function App() {
  return (
    <BrowserRouter basename='React-Routing-2023-'>
     
      <Suspense fallback={<div>Loading......</div>}>
        <Routes>
          <Route path='login' element={ <Login />} />

        {/* these comes under protected routes */}
          <Route path='/' element={ <Header />} >
            <Route  index element={ <Home  />} />
            <Route path='Settings' element={ <Settings />} />
            <Route path='Chart' element={ <Chart />} />
            <Route path='Usage' >
              <Route  index element={ <Users  />} />
              <Route path='Details/:userId' element={ <UserDetails />}>
                  <Route  index element={ <Marks  />} />
                  <Route  path='sports' element={ <Sports />} />
                  <Route  path='remarks' element={ <Remarks/>} />
              </Route>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;

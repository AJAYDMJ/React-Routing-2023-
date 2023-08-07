
import './App.css';

import Home from './pages/home';
import Settings from './pages/settings';
import Chart from './pages/chart';
import Usage from './pages/usage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/header';
import UserDetails from './pages/userDetails';
import NotFound from './pages/notFound';
import Marks from './pages/marks';
import Sports from './pages/sports';
import Remarks from './pages/remarks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={ <Header />} >
          <Route  index element={ <Home  />} />
          <Route path='Settings' element={ <Settings />} />
          <Route path='Chart' element={ <Chart />} />
          <Route path='Usage' >
            <Route  index element={ <Usage  />} />
            <Route path='Details/:userId' element={ <UserDetails />}>
                <Route  index element={ <Marks  />} />
                <Route  path='sports' element={ <Sports />} />
                <Route  path='remarks' element={ <Remarks/>} />
            </Route>
          </Route>
        </Route>
        
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import HomeLayout from './components/HomeLayout';
import Layout from './components/Layout';
import Public from './components/Public';
import PublicLogin from './components/PublicLogin';
import PublicSignUp from './components/PublicSignUp';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/requireAuth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Route */}
        <Route index element={<Public />} />
        <Route path='login' element={<PublicLogin />} />
        <Route path='signup' element={<PublicSignUp />} />
        {/* Protected Routes */}
        {/* <Route element={<RequireAuth />}> */}
        <Route element={<PersistLogin />}>
          <Route path='home' element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
        {/* </Route> */}
      </Route>
    </Routes>
  )
}

export default App;

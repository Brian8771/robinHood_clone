import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Public from './components/Public';
import PublicLogin from './components/PublicLogin';
import PublicSignUp from './components/PublicSignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Route */}
        <Route index element={<Public />} />
        <Route path='login' element={<PublicLogin />} />
        <Route path='signup' element={<PublicSignUp />} />
        {/* Protected Routes */}
      </Route>
    </Routes>
  )
}

export default App;

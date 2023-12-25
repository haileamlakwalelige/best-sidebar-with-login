import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './screens/Dashboard';
import Blog from './screens/Blog';
import Logout from './screens/Logout';
import Login from './components/login/Login';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

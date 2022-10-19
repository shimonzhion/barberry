import { Home, About, ContactUs, Barbers,Store,Cart} from './components/pages';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { usersContext } from './contexts/users-context';
import Header from './components/features/Header/Header';
export default function Router() {
  const { login, setLogin } = useContext(usersContext);

  function someFunc(login) {
    switch (login) {
      case true:
        return (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Barbers />} />
             
              <Route path="/About" element={<About />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </>
        );
      case false:
        return (
            <>
        
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </>
        );
    }
  }

  return someFunc(login);
}

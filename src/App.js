import Header from './components/features/Header/Header';
import { UserProvider } from './contexts/users-context';
import BarbersProvider from './contexts/barbers-context';
// import CssBaseline from '@mui/material/CssBaseline';
import Router from './Router';


function App() {
  return (
    <div className="App">
      {/* <CssBaseline /> */}
     
      <UserProvider>
        <BarbersProvider>
          <Router />
        </BarbersProvider>
      </UserProvider>
    
    </div>
  );
}

export default App;

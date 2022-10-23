import { UserProvider } from './contexts/users-context';
import BarbersProvider from './contexts/barbers-context';

import Router from './Router';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BarbersProvider>
          <Router />
        </BarbersProvider>
      </UserProvider>
    </div>
  );
}

export default App;

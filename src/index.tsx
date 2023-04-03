import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { Provider } from 'react-redux';
import { store, persistedStore} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <PersistGate persistor = {persistedStore}>
      <App />
    </PersistGate>
  </Provider>
    
);

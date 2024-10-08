import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Dataprovider from './Contexts/Dataprovider.jsx';

createRoot(document.getElementById('root')).render(
  <Dataprovider >
      <App />
    </Dataprovider>
)

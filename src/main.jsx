import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';

const app = <App />;
const container = document.getElementById('root');

createRoot(container).render(app);

import { createRoot } from 'react-dom/client';
import Flag from './components/Flag';

const domNode = document.getElementById('flag');
const root = createRoot(domNode);
root.render(<Flag />);
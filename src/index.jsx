import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);
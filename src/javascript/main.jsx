import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header.jsx';
import '../styles/styles.css';
import App from '../components/App.jsx';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
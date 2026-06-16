import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion, domAnimation } from 'framer-motion';
import App from './App.jsx';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <App />
      </Suspense>
    </LazyMotion>
  </React.StrictMode>,
);

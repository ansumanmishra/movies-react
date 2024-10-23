import Footer from './footer/Footer.tsx';
import Header from './header/Header.tsx';
import {Outlet, useLocation} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.tsx';
import '../../index.css';
import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';

function fallbackRender({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function Layout() {
  const location = useLocation();

  return <>
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        console.log(details);
      }}
      resetKeys={[location.pathname]}
    >
      <div className="container">
        <header>
          <Header/>
        </header>
        <div className="content-wrapper">
          <aside className="sidebar">
            <Sidebar/>
          </aside>
          <main className="content">
            <Outlet/>
          </main>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </ErrorBoundary>
  </>
}
import Footer from './footer/Footer.tsx';
import Header from './header/Header.tsx';
import {Outlet} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.tsx';
import '../../index.css';

export default function Layout() {
  return <>
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
  </>
}
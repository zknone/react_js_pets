import { Outlet, NavLink } from 'react-router-dom';


function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul className='flex flex-row space-between gap-2 m-5'>
            <li>
                <NavLink 
                    to="/" 
                    className={({isActive}) => isActive ? 'font-bold text-red-900': ''} >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? 'font-bold text-red-900': ''}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'font-bold text-red-900': ''}>
                    Contact
                </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>123</p>
      </footer>
    </div>
  );
}

export default Layout;
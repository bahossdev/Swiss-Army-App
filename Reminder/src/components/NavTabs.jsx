import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;
  
    return (
<ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Active Reminders
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/all"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          All Reminders
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/today"

          className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
        >
          Today Reminders
        </Link>
      </li>
    </ul>
        );
}

export default NavTabs;
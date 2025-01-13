import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
            Вход
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

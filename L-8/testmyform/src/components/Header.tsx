import Navigation from './Navigation';
import '../layout/layout.css'; // Подключаем стили один раз

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">TestMyForm</h1>
      <Navigation />
    </header>
  );
};

export default Header;

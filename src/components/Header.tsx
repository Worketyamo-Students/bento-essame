import Icon from "./Icon";
import Nav from "./Nav";
function Header() {
  return (
    <header className="w-full flex justify-between gap-1">
      <Icon />
      <Nav />
    </header>
  );
}

export default Header;

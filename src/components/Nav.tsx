import BurgerMenu from "/burger.svg";
function Nav() {
  return (
    <div className="flex w-full rounded-3xl justify-between px-5 items-center bg-secondary">
      <div className="w-full lg:flex justify-between lg:px-10">
        <a className="text-third font-bold">About</a>
        <a href="" className="hidden lg:inline">
          Portfolio
        </a>
        <a href="" className="hidden lg:inline ">
          Contact
        </a>
      </div>
      <img src={BurgerMenu} alt="burger menue" className="lg:hidden" />
    </div>
  );
}

export default Nav;

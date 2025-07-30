import BurgerMenu from "/burger.svg";
function Nav() {
  return (
    <div className="flex w-full justify-center rounded-full px-8 py-8 border-3 border-[#363636] items-center bg-secondary">
      <div className="w-full lg:flex justify-between font-400 text-4xl lg:px-10">
        <a className="text-third font-bold">About</a>
        <a href="" className="hidden lg:inline">
          Portfolio
        </a>
        <a href="" className="hidden lg:inline ">
          Contact
        </a>
      </div>
      <img src={BurgerMenu} alt="burger menue" className="lg:hidden size-6" />
    </div>
  );
}

export default Nav;

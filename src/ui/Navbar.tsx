import NavLogo from "../features/navbar/NavLogo";
import NavList from "../features/navbar/NavList";
import NavButtons from "../features/navbar/NavButtons";

function Navbar() {
  return (
    <nav className="sticky">
      <div className="container m-auto flex justify-between text-sm px-8 py-6 items-center">
        <NavLogo />
        <NavList />
        <NavButtons />
      </div>
    </nav>
  );
}

export default Navbar;

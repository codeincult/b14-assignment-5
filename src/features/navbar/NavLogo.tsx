import type { ClickEvent } from "../../Utils/Types";

function NavLogo() {
  function handleClick(e: ClickEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <a onClick={handleClick} href="#" className="cursor-pointer">
      <img src="/src/assets/logo-text.png" alt="The DevStack Logo" />
    </a>
  );
}

export default NavLogo;

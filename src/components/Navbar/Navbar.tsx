import { memo } from "preact/compat";
import NAVBARJSON from "../../Configs/JSON/Navbar.json";
interface NavbarProps {
  setActiveComponent: (index: number) => void;
}

interface NavBarButton {
  name?: string;
  number: number;
}

const Navbar = ({ setActiveComponent }: NavbarProps) => {
  const NavbarButton = ({ name, number }: NavBarButton) => {
    return (
      <button onClick={() => setActiveComponent(number + 1)} className="nav-button">
        {name}
      </button>
    );
  };
  return (
    <nav className="flex  max-w-3xl gap-2 flex-wrap justify-around  py-3 px-3">
      {NAVBARJSON.map((name: string, i: number) => (
        <NavbarButton name={name} number={i} />
      ))}
    </nav>
  );
};

export default memo(Navbar);

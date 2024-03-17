import { ModeToggle } from "../ui/mode-toggle";
import logo from "@/assets/Gold_Bitcoin.svg";
import Metamask from "../common/wallet-connect/metamask";

const Header = () => {
  return (
    <header className="w-full h-[8%] flex justify-between items-center border-b-2">
      <Metamask />
      <div className="w-10 h-10">
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;

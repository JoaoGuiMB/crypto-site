import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { TypographyH2 } from "../ui/typographyh2";

const Header = () => {
  return (
    <header className="w-full h-[8%] flex justify-between items-center border-b-2">
      <Button className="ml-5">Sign In</Button>
      <TypographyH2>The Best Coins</TypographyH2>
      <ModeToggle />
    </header>
  );
};

export default Header;

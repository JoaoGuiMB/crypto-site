import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Wallet } from "@/types/Wallet";

interface WalletDetailsDrawerProps {
  wallet: Wallet;
  isOpen: boolean;
  onClose: () => void;
}

const WalletDetailsDrawer = ({
  wallet,
  isOpen,
  onClose,
}: WalletDetailsDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="h-[60%]">
        <div className="mx-auto w-full">
          <DrawerHeader className="flex justify-between">
            <DrawerTitle>
              Your Ethereum Balance: $ {wallet.balance} USD
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mt-3 max-h-80 overflow-y-auto">
              <div className="flex flex-col ">
                <p className="text-lg font-bold">Connected Accounts: </p>
                <div className="w-full">
                  <span className="text-sm mr-5">{wallet?.accounts}</span>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter className="w-24">
            <DrawerClose asChild>
              <Button onClick={onClose} variant="outline">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default WalletDetailsDrawer;

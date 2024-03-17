import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { Button } from "../../ui/button";
import { Wallet } from "@/types/Wallet";
import WalletDetailsDrawer from "./wallet-details-drawer";
import { formatBalance } from "@/utils/formatBalance";

const Metamask = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const initialState: Wallet = { accounts: [], balance: "" };
  const [wallet, setWallet] = useState<Wallet>(initialState);
  const [hasAccounts, setHasAccounts] = useState(false);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
      window.ethereum.enable();
    };
    getProvider();
  }, []);

  useEffect(() => {
    setHasAccounts(wallet.accounts.length > 0);
  }, [wallet]);

  // Prompt users to connect to MetaMask

  const updateWallet = (wallet: Wallet) => {
    setWallet(wallet);
  };

  const handleConnect = async () => {
    const accounts: string[] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const balance = formatBalance(
      await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );

    updateWallet({ accounts, balance });
  };

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleConnectText = hasAccounts ? "View Details" : "Connect Wallet";

  return (
    <div className="ml-2">
      {hasProvider && (
        <Button
          onClick={
            hasProvider && !hasAccounts ? handleConnect : handleOpenDrawer
          }
          disabled={!hasProvider}
        >
          {hasProvider
            ? handleConnectText
            : "Install MetaMask to connect your wallet"}
        </Button>
      )}
      <WalletDetailsDrawer
        wallet={wallet}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
export default Metamask;

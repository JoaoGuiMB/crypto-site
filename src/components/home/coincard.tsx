import { Coin } from "@/types/Coin";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CoinCardProps {
  coin: Coin;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <Card className="w-72 mb-4 p-4 shadow-slate-500  hover:transform hover:scale-105 transition duration-300 ease-in-out ">
        <CardContent className="flex flex-col items-center justify-center w-full h-full mt-2">
          <div className="w-20 h-20">
            <img src={coin.image} alt={coin.name} />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2">
            {coin.name}
          </h3>
          <p className="text-xl">$ {coin.current_price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CoinCard;

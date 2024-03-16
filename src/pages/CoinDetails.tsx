import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>();

  const coin = {
    name: "Bitcoin",
    description: "The first cryptocurrency",
  };
  return (
    <div>
      <h1>{id}</h1>
      <h1>{coin.name}</h1>
      <p>{coin.description}</p>
    </div>
  );
};

export default CoinDetails;

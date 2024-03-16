import ErrorComponent from "@/components/common/error";
import Loader from "@/components/common/loader";
import CoinCard from "@/components/home/coincard";
import { useGetCoinsQuery } from "@/redux/services/coins.slice";

const Home = () => {
  const { data, error, isLoading } = useGetCoinsQuery("");

  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent />;
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import ErrorComponent from "@/components/common/error";
import Loader from "@/components/common/loader";
import { useGetCoinsQuery } from "@/redux/services/coins.slice";

const Home = () => {
  const { data, error, isLoading } = useGetCoinsQuery("");

  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent />;
  console.log(data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

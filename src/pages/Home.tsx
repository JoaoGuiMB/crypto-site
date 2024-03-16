import { useGetCoinsQuery } from "@/redux/services/coins.slice";

const Home = () => {
  const { data, error, isLoading } = useGetCoinsQuery("");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log(data);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

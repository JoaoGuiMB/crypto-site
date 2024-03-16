import ErrorComponent from "@/components/common/error";
import Loader from "@/components/common/loader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  useGetCoinHistoryQuery,
  useGetCoinInfoQuery,
} from "@/redux/services/coins.slice";
import { Car } from "lucide-react";
import { useParams } from "react-router-dom";

export default function CoinDetails() {
  const { id } = useParams<{ id: string }>();
  const {
    data: coinInfo,
    error: errorCoinInfo,
    isLoading: isLoadingCoinInfo,
  } = useGetCoinInfoQuery(id as string);
  const {
    data: coinHistory,
    error: errorCoinHistory,
    isLoading: isLoadingCoinHistory,
  } = useGetCoinHistoryQuery(id as string);

  if (isLoadingCoinInfo || isLoadingCoinHistory) return <Loader />;
  if (errorCoinInfo || errorCoinHistory) return <ErrorComponent />;
  console.log({ coinHistory });

  return (
    <>
      <div className="p-2 flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {coinInfo?.name}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">
                  Current price
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  $ {coinInfo?.market_data.current_price["usd"].toFixed(2)} USD
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">
                  Price change in the last 24 hours
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  $ {coinInfo?.market_data.price_change_24h.toFixed(2)} USD
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">
                  Percentage Change in the last 24 hours
                </CardTitle>
                %
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  %{" "}
                  {coinInfo?.market_data.price_change_percentage_24h.toFixed(2)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">
                  Market Cap
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  $ {coinInfo?.market_data.market_cap["usd"].toLocaleString()}{" "}
                  USD
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">Oii gráfico</CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription
                  dangerouslySetInnerHTML={{
                    __html: coinInfo?.description["en"] || "",
                  }}
                  className="text-md p-2"
                />
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

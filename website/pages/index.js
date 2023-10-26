import Head from "next/head";
import HomePageContainer from "../Components/HomePage/HomePageContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>10XTD</title>
        <meta name="description" content="10XTD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageContainer />
    </div>
  );
}

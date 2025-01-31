import Head from "next/head";
import Layout from "../components/Layout";
import MainScreen from "../components/MainScreen";
import PhotoAndDescription from "../components/PhotoAndDescription";
import RedGridImages from "../components/RedGridImages";
import BgFixedWithText from "../components/BgFixedWithText";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";

export default function Index() {

  return (
    <div>
      <Head>
        <title>Don Inodoro - Art de limpieza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainScreen/>
        <Cards/>
        <PhotoAndDescription/>
        <RedGridImages/>
        <BgFixedWithText />
        <ContactUs/>
      </Layout>
    </div>
  );
}

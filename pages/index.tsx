import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Reason from "../components/Home/Reason";
import Roadmap from "../components/Home/Roadmap";
import Overview from "../components/Home/Overview";
import Team from "../components/Home/Team";
import Faq from "../components/Home/Faq";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Head>
      <title>Dented Feeds</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Hero />
    <Reason />
    <Roadmap />
    <Overview />
    <Team />
    <Faq />
    <Footer />
  </>
)

export default Home

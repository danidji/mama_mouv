// import Image from 'next/image'

import Layout from "./components/Layout";
import Welcome from "./components/Welcome";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import HambergerMenu from "./components/HambergerMenu";

export default function Home() {
  return (
    <div className="site">

      <Layout navbar={<Navbar />} welcome={<Welcome />} mainContent={<MainContent />} contact={<Contact />} hambergerMenu={<HambergerMenu />} />

    </div>
  )
}

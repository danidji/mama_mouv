// import Image from 'next/image'

import Layout from "./components/Layout";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div className="site">

      <Layout welcome={<Welcome />} main={<Main />} contact={<Contact />} />

    </div>
  )
}

import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import About from "../components/About";
export default function Home() {
  
  return (
    <Layout> 
        <Hero imgSrc= "/img/portada.jpg" title="I'm William Suarez" subTitle=" Full Stack Web Developer"/>
        <div className="container">
          <About/>
        </div>
    </Layout>
  );
}

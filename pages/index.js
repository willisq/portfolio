import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import About from "../components/About";
import { useEffect,useRef, useState } from "react";
export default function Home() {
  const [textColor, setTextColor] = useState('white-text');
  const containerRef = useRef(null);
  const callbackFuncy = (entries)=>{
    const [entry] = entries;
    if(!entry.isIntersecting){
      setTextColor('black-text');
    }
    else {
      setTextColor('white-tetx');
    }
  }

  const opt = {
    root: null,
    rootMargin: '-100px'
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(callbackFuncy,opt)
    if(containerRef.current) observer.observe(containerRef.current);
    return ()=>{
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  },[containerRef,opt]);
  return (
    <Layout textColor = {textColor}> 
        <Hero ref = {containerRef} primaryImage = "/img/programmer.svg" title="Hi! I’m William Suárez" subTitle="Full Stack Web Developer" description ="High level experience in web development knowledge, producing quality work."/>
        <div className="container">
          <About/>
        </div>
    </Layout>
  );
}

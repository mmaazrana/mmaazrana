import Image from 'next/image'
import Head from "next/head";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="xl:max-w-8xl xl:mx-auto 2xl:p-12 2xl:gap-12 xl:p-11 xl:gap-11 lg:p-10 lg:gap-10 md:p-9 md:gap:9 sm:p-8 sm:gap-8 p-4 gap-4 flex flex-col items-center justify-between ">
      <Nav/>
        <Hero/>
    </main>
  )
}

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen pb-2'>
      <Head>
        <title>PEMO - Web Performance Monitoring</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='PEMO - Web Performance Monitoring' />
        <meta
          property='og:description'
          content='web-app to let you monitor web-performance on a large number of domains and track your Web Core Vitals results over time'
        />
        <meta
          property='og:image'
          content='https://pemo.netlify.app/images/pemo-og.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-6 md:px-20 text-center bg-gray-50'>
        <div className='flex items-center'>
          <Image
            src='/pemo-pink-logo.svg'
            alt='pemo logo'
            width='120'
            height='120'
          ></Image>
          <h1 className='text-7xl ml-8 mb-3'>PEMO</h1>
        </div>
        <h2 className='text-gray-500 mt-4'>
          Yara websites web permormance monitoring exploration tool
        </h2>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-16 sm:w-full'>
          <Link href='/dashboard'>
            <div className='relative p-6 mt-6 text-left sm:w-96 rounded-xl hover:text-pink-600 focus:text-pink-600 cursor-pointer  bg-pink-50'>
              <h3 className='text-2xl font-bold'>Dashboard &rarr;</h3>
              <p className='mt-4 text-xl'>
                dig into Web perf stats, tests results (and more coming ...)
              </p>
              <div className='absolute bottom-20 left-48'>
                <Image
                  src='/images/3d-flame-285.png'
                  alt='performance illustration'
                  width='133'
                  height='133'
                ></Image>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://raphaelferrand.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made by{" "}
          <span
            className={`motion-safe:animate-spin spin-slow text-2xl ml-2`}
            style={{
              animationDuration: `2s`,
            }}
          >
            🥳
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

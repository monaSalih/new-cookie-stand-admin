import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
export default function Home() {
  const [sotreData, setStoreData] = useState("");
  function cookeHandler(event) {
    event.preventDefault();
    const storeData = {
      location: event.target.loc.value,
      Minimum_cus: event.target.min.value,
      Maximum_cus: event.target.max.value,
      Avarage: event.target.avg.value,
    };
    setStoreData(storeData);
  }
  return (
    <div className={styles.container}>
      <Head>
      <title> Cookie Stand Admin </title>  
      <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className="bg-green-400 flex justify-start p-2 text-4xl mb-1 ">
      Create Cookie Stand
        </header>

      <main className="bg-green-100">
      <form onSubmit={cookeHandler} className='flex-col justify-center bg-green-300 w-10/12 mx-auto p-2 rounded-md'>
        <h1 className="text-center my-4 text-4xl font-bold ">
          Create Cookie Stand        </h1>
        {/* Location */}
          <div className="texter-center">
            <label className="texter-center">Location </label>
            <input name="loc" className="flex-auto by-gray-100 w-10/12" placeholder="set your location?"/>
            </div>
            {/* min custome */}
            <div className="flex w-3.2/4 mx-auto my-5 justify-around">
              <div className="flex-col w-1/4">
                <h2> Minimum Customers per Hour </h2>
                <input type="number" name="min" className="" placeholder="inter min customers?"/>
                </div>
              
                <div className=" flex-col w-1/4">
                <h2> Maximum Customers per Hour  </h2>
                <input type="number" name="max" className="" placeholder="inter max customers?"/>
                </div>

                <div className=" flex-col w-1/4">
                <h2> Average Cookies per Sale </h2>
                <input type="number" name="avg" className="" placeholder="inter avg customers?"/>
                </div>
                <button className="w-1/6 bg-green-500" >Create</button>
                </div>
                </form>

                <div className="mx-auto my-8 text-black-100 text-center text-3xl"> Report Table Coming Soon </div> 

                <div className="text-center">
                <p className="my-3 text-center 
                text-gray-600 text-1x1"> 
                {JSON. stringify(sotreData)}
                </p>
                  
                </div >
      </main>

      <footer className="justify-start text-l bg-green-500 mt-60">
       &copy;2021
      </footer>
    </div>
  )
}

// import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Head from './Head'
import { useState } from 'react'
import { hours } from "../data";

export default function CookieStandAdmin(){
  const [sotreData, setStoreData] = useState([]);
  const [sales, setSale] = useState([])
    function cookeHandler(event) {
        event.preventDefault();
        const result = {
          location: event.target.loc.value,
          min: event.target.min.value,
          max: event.target.max.value,
          avg: event.target.avg.value
        }
        setStoreData(data => [...data, result])
        const data_obj = {
          location: event.target.location.value,
          hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
        }
        setSale(sale => [...sale, data_obj])
    }
  return (
    <>
    <Head/>
    <Header />
    <Main sales={sales} cookeHandler={cookeHandler} sotreData={sotreData}/>
    <Footer />
    </>
  )
}
'use client';
import { useEffect, useState } from "react";
import { drivingData } from "@/lib/mock-data/driving"; 
import { removeComma } from "@/lib/utils/text";
import Image from "next/image"; 
import c7 from "../../public/images/c7.png";
import c8 from "../../public/images/c8.png";
import c9 from "../../public/images/c9.png";
import MarkecapChart from "@/components/sections/MarkecapChart"
import ApexCharts from 'apexcharts'
import dynamic from "next/dynamic";

// SSR বন্ধ করে ReactApexChart লোড
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const Driving = () => {

    const series = [
    {
      name: "UCBI",
      data:  [175, 90, 200, 220, 180, 281]
    },
  ];

    const options = {
    chart: {
      type: "area", 
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },
    labels: ["2024-01-01","2025-01-01","2026-01-01","2027-01-01","2028-01-01","2029-01-01"], 
    xaxis: { type: "datetime" },
    yaxis: { opposite: false },
    legend: { horizontalAlign: "left" },
  };

    

    const [price, setPrice] = useState(null);
    const [change24h, setChange24h] = useState(null);
    const [fdv, setFdv] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
          let alive = true;

          function findUsdQuote(obj) {
            // obj এর ভেতরে এমন একটা object খুঁজবো যেখানে
            // price, percent_change_24h, fully_diluted_market_cap আছে
            if (!obj || typeof obj !== "object") return null;

            // যদি এটা USD quote object হয়
            if (
              typeof obj.price === "number" &&
              typeof obj.percent_change_24h === "number" &&
              typeof obj.fully_diluted_market_cap === "number"
            ) {
              return obj;
            }

            // array হলে iterate
            if (Array.isArray(obj)) {
              for (const v of obj) {
                const found = findUsdQuote(v);
                if (found) return found;
              }
              return null;
            }

            // object হলে iterate
            for (const k of Object.keys(obj)) {
              const found = findUsdQuote(obj[k]);
              if (found) return found;
            }

            return null;
          }

          async function load() {
            try {
              setErr(null);

              const res = await fetch("/api/ucbi/market", { cache: "no-store" });
              const text = await res.text();

              let json;
              try {
                json = JSON.parse(text);
              } catch {
                throw new Error("API JSON parse failed");
              }

              if (!res.ok) {
                throw new Error(`API HTTP ${res.status}`);
              }

              // এখানে magic: পুরো JSON এর ভেতর থেকে USD quote auto find
              const usd = findUsdQuote(json);

              if (!usd) {
                // debug help (একবার দেখার জন্য)
                console.log("API response shape:", json);
                throw new Error("USD quote not found in response");
              }

              if (!alive) return;

              setPrice(usd.price);
              setChange24h(usd.percent_change_24h);
              setFdv(usd.fully_diluted_market_cap);
            } catch (e) {
              console.log("UCBI component error:", e);
              if (alive) setErr(e?.message || "Failed to load market data");
            }
          }

          load();
          return () => {
            alive = false;
          };
    }, []);



  const isPos = typeof change24h === "number" && change24h >= 0;

  return (
    <>
        <div className="driving_section ">
            <div className="container cline">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-4 mb-3">
                        <div className="driving_img text-center">
                            <Image src={drivingData.img} alt="Driving Image" height={100} width={550} />
                        </div>
                    </div>
                    <div className="offset-lg-2 offset-md-1 col-md-5 col-lg-5">
                        <div className="driving_content">
                            <h2 className="section_title_dark" >
                                <span style={{color:'#0cc0df'}}> Strategic </span> <br/> and Institutional Positioning
                            </h2>
                            <p className="section_paragraph_dark t1_width">
                                <strong>UCBI</strong>’s mission is to support the responsible structured and sustainable development of digital financial infrastructure through a long-term approach grounded in strong governance principles operating as a strategic holding company <strong>UCBI</strong> focuses on the integration of blockchain-based and the distributed technologies within robust organizational frameworks this ensures full alignment with regulatory requirements operational resilience and the highest institutional standards through disciplined governance prudent capital structuring and comprehensive risk management <strong>UCBI</strong> seeks to foster sustainable growth while maintaining a controlled private and secure operating environment this model enables technological innovation while preserving stability compliance and long-term stakeholder confidence
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className="white_counter_area_setion">
            <div className="container cline_white">
                <div className="row gx-4 justify-content-center ptt-90">
                    {err && <p style={{ color: "red", textAlign: "center" }}>{err}</p>}
                        <div className="tt_area text-center ">
                            <p className="t_tittle">onchain marketcap</p>
                            {/*<Image src={c7} alt="#" />*/}
                             <MarkecapChart />
                            <span  className="t_number d-block"> 
                           {fdv == null ? "--" : `$${removeComma(Math.round(fdv).toLocaleString())}`}  {"  "} 

                            <span className="d-block" style={{ color: isPos ? "#16c784" : "#EA3943", fontSize:'10px' }}> 
                              {change24h == null ? "--" : `${isPos ? "+" : ""}${change24h.toFixed(2)}%`} (24h)
                            </span>
                             
                            </span> 
                        </div>
                        <div className="tt_area text-center">
                            <p className="t_tittle">Total Supply</p>
                            <Image src={c8} alt="#" />
                            <span className="t_number">12 M</span>  
                        </div>
                        <div className="tt_area text-center ">
                            <p className="t_tittle">Shareholders</p>
                            <Image src={c9} alt="#" />
                            <span className="t_number">135</span> 
                        </div>
                   
                </div>

               {/* <div className="row">
                    <div className="col-lg-6 mt-5">
                     <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
                    </div>
                    
                    
                </div>*/}
            </div>
        </div>
    </>
  )
}

export default Driving
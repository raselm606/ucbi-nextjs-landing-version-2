"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import atom_icon from '../../public/images/atom.png';
import btc_icon from '../../public/images/btc.png';
import dogecoin_icon from '../../public/images/dogecoin.png';
import eth_icon from '../../public/images/eth.png';
import hype_icon from '../../public/images/hype.png';
import xrp_icon from '../../public/images/ripple.png';
import ucbi_icon from '../../public/images/ucbi.png';

const ContractInvestment = () => {
const [btc, setBtc] = useState(null);
const [eth, setEth] = useState(null);
const [atom, setAtom] = useState(null);
const [xrp, setXrp] = useState(null);
const [dogecoin, setDogecoin] = useState(null);
const [hype, setHype] = useState(null);
const [err, setErr] = useState(null);

const [ucbiPrice, setUcbiPrice] = useState(null);
const [ucbiError, setUcbiError] = useState(null);

const [btcChange, setBtcChange] = useState(null);
const [ethChange, setEthChange] = useState(null);
const [atomChange, setAtomChange] = useState(null);
const [xrpChange, setXrpChange] = useState(null);
const [dogecoinChange, setDogecoinChange] = useState(null);
const [hypeChange, setHypeChange] = useState(null);

useEffect(() => {
  async function load() {
    try {
      const [
        btcRes,
        ethRes,
        atomRes,
        xrpRes,
        dogecoinRes,
        hypeRes,
      ] = await Promise.all([
        fetch("/api/price/btc", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/price/eth", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/price/atom", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/price/xrp", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/price/dogecoin", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/price/hype", { cache: "no-store" }).then((r) => r.json()),
      ]);

      if (
        !btcRes.ok ||
        !ethRes.ok ||
        !atomRes.ok ||
        !xrpRes.ok ||
        !dogecoinRes.ok ||
        !hypeRes.ok
      ) {
        setErr("Price load failed");
        return;
      }

      setBtc(btcRes.price);
      setEth(ethRes.price);
      setAtom(atomRes.price);
      setXrp(xrpRes.price);
      setDogecoin(dogecoinRes.price);
      setHype(hypeRes.price);

      setBtcChange(btcRes.change24h);
      setEthChange(ethRes.change24h);
      setAtomChange(atomRes.change24h);
      setXrpChange(xrpRes.change24h);
      setDogecoinChange(dogecoinRes.change24h);
      setHypeChange(hypeRes.change24h);
    } catch (e) {
      setErr("Network/API error");
    }
  }

  load();
}, []);


const formatChange = (value) => {
  if (value === null || value === undefined) return "--";

  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
};

const changeClass = (value) => {
  if (value > 0) return "price_change up";
  if (value < 0) return "price_change down";
  return "price_change neutral";
};

    //ucbi price
    useEffect(() => {
  let alive = true;

  function findPrice(obj) {
    if (!obj || typeof obj !== "object") return null;

    if (typeof obj.price === "number") {
      return obj.price;
    }

    if (Array.isArray(obj)) {
      for (const v of obj) {
        const found = findPrice(v);
        if (found !== null) return found;
      }
      return null;
    }

    for (const k of Object.keys(obj)) {
      const found = findPrice(obj[k]);
      if (found !== null) return found;
    }

    return null;
  }

  async function loadUcbiPrice() {
    try {
      setUcbiError(null);

      const res = await fetch("/api/ucbi/market", { cache: "no-store" });
      const json = await res.json();

      if (!res.ok) throw new Error("API failed");

      const foundPrice = findPrice(json);

      if (foundPrice === null) {
        console.log("API response:", json);
        throw new Error("Price not found");
      }

      if (!alive) return;
      setUcbiPrice(foundPrice);
    } catch (e) {
      console.log("UCBI price load error:", e);
      if (alive) setUcbiError("Failed to load price");
    }
  }

  loadUcbiPrice();

  return () => {
    alive = false;
  };
}, []);




  return (
    <>
     
    <div className="goal_sectio">
        <div className="container cline">
            <div className="row g-0 cont_bg align-items-center">
                <div className="col-lg-6 mb-3 ">
                    <div className="goal_content contract_in">
                        <span>Innovation</span> 
                        <h2 >
                           Private access to innovation
                        </h2>
                        <p className="section_paragraph_white"  >
                           Access is reserved for a restricted circle of private investors integrating capital at holding level acting as parent entity of the structured platform each participation follows a private investment logic based on shareholder alignment confidential structure & long-term value creation through Ethereum accumulation & diversified multi-asset strategy
                        </p>

                        <div className="divider_lin ggl"  ></div>

                        
                    </div>
                    
                </div>
               

                <div className="col-lg-12">
                    <div className="token_info" >
                        <p>Our assets
       
                        </p>
                        <div className="token_slide"  >

                            <Marquee speed={60} gradient={false} pauseOnHover={true}>
                            
                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={btc_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Bitcoin</p> <span> BTC</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${btc ?? "--"}  </span>
                                        <span className={changeClass(btcChange)} >{formatChange(btcChange)}</span>
                                    </div>
                                </div>

                                 

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={eth_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Ethereum</p> <span> ETH</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${eth ?? "--"}  </span>
                                        <span className={changeClass(ethChange)} >{formatChange(ethChange)}</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={xrp_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Ripple</p> <span> XRP</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${xrp ?? "--"}  </span>
                                        <span className={changeClass(xrpChange)} >{formatChange(xrpChange)}</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={hype_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Hyperliquid</p> <span> HYPE</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${hype ?? "--"}  </span>
                                        <span className={changeClass(hypeChange)} >{formatChange(hypeChange)}</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={dogecoin_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Dogecoin</p> <span> DOGE</span> 
                                        </div> 
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${dogecoin ?? "--"}  </span>
                                        <span className={changeClass(dogecoinChange)} >{formatChange(dogecoinChange)}</span>
                                    </div>
                                </div>
 

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={ucbi_icon} alt="" width={50} height={50} />
                                        <div className="middle_txt"> 
                                                <p>UCBI Holding</p> <span> UCBI</span> 
                                            </div>
                                        </div>
                                    {/* <span className="price_t"> {ucbiPrice == null ? "--" : `$${ucbiPrice.toFixed(3)}`}     </span> */}
                                    <div className="price_at">
                                        <span className="price_t">$3.20  </span>
                                        <span style={{ color: '#00e09d' }}>+1.82%</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={atom_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Cosmos</p> <span> Atom</span> 
                                        </div> 
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${atom ?? "--"}  </span>
                                        <span className={changeClass(atomChange)} >{formatChange(atomChange)}</span>
                                    </div>
                                </div>

                                {/* repeat token */}

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={btc_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Bitcoin</p> <span> BTC</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${btc ?? "--"}  </span>
                                        <span className={changeClass(btcChange)} >{formatChange(btcChange)}</span>
                                    </div>
                                </div>

                                 

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={eth_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Ethereum</p> <span> ETH</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${eth ?? "--"}  </span>
                                        <span className={changeClass(ethChange)} >{formatChange(ethChange)}</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={xrp_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Ripple</p> <span> XRP</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${xrp ?? "--"}  </span>
                                        <span className={changeClass(xrpChange)} >{formatChange(xrpChange)}</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={hype_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Hyperliquid</p> <span> HYPE</span> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${hype ?? "--"}  </span>
                                        <span className={changeClass(hypeChange)} >{formatChange(hypeChange)}</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={dogecoin_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Dogecoin</p> <span> DOGE</span> 
                                        </div> 
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${dogecoin ?? "--"}  </span>
                                        <span className={changeClass(dogecoinChange)} >{formatChange(dogecoinChange)}</span>
                                    </div>
                                </div>
 

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={ucbi_icon} alt="" width={50} height={50} />
                                        <div className="middle_txt"> 
                                                <p>UCBI Holding</p> <span> UCBI</span> 
                                            </div>
                                        </div>
                                    {/* <span className="price_t"> {ucbiPrice == null ? "--" : `$${ucbiPrice.toFixed(3)}`}     </span> */}
                                    <div className="price_at">
                                        <span className="price_t">$3.20  </span>
                                        <span style={{ color: '#00e09d' }}>+1.82%</span>
                                    </div>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={atom_icon} alt="#" width={50} height={50} />

                                        <div className="middle_txt"> 
                                            <p>Cosmos</p> <span> Atom</span> 
                                        </div> 
                                    </div>
                                    
                                    <div className="price_at">
                                        <span className="price_t">${atom ?? "--"}  </span>
                                        <span className={changeClass(atomChange)} >{formatChange(atomChange)}</span>
                                    </div>
                                </div>
                                 

                            </Marquee>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ContractInvestment
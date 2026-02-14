"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ripple_icon from '../../public/images/ripple.png';
import atom_icon from '../../public/images/atom.png';
import btc_icon from '../../public/images/btc.png';
import eth_icon from '../../public/images/eth.png';
import ucbi_icon from '../../public/images/ucbi.png';

const ContractInvestment = () => {
    const [btc, setBtc] = useState(null);
    const [eth, setEth] = useState(null);
    const [atom, setAtom] = useState(null);
    const [xrp, setXrp] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
    async function load() {
      try {
        const btcRes = await fetch("/api/price/btc", { cache: "no-store" }).then(r => r.json());
        const ethRes = await fetch("/api/price/eth", { cache: "no-store" }).then(r => r.json());
        const atomRes = await fetch("/api/price/atom", { cache: "no-store" }).then(r => r.json());
        const xrpRes = await fetch("/api/price/xrp", { cache: "no-store" }).then(r => r.json());

        if (!btcRes.ok || !ethRes.ok || !atomRes.ok || !xrpRes.ok) {
          setErr("Price load failed");
          return;
        }

        setBtc(btcRes.price);
        setEth(ethRes.price);
        setAtom(atomRes.price);
        setXrp(xrpRes.price);
      } catch (e) {
        setErr("Network/API error");
      }
    }

    load();
    console.log(btc, eth, atom, xrp, err);

  }, []);



  return (
    <>
     
    <div className="goal_sectio">
        <div className="container cline">
            <div className="row g-0 cont_bg align-items-center">
                <div className="col-lg-6 mb-3 ">
                    <div className="goal_content contract_in">
                        <h2 className="section_title_white"  >
                           Private access to innovation
                        </h2>
                        <p className="section_paragraph_white"  >
                           Access is reserved for a restricted circle of associates integrating the capital of the UCBI holding company acting as parent company of the project structures each operation is part of a logic of private equity type private shareholding confidential and not open to the public oriented towards the creation of technological value over the long term
                        </p>

                        <div className="divider_lin ggl"  ></div>

                        
                    </div>
                    
                </div>
               

                <div className="col-lg-12">
                    <div className="token_info" >
                        <p>Our assets: 
       
                        </p>
                        <div className="token_slide"  >

                            <Marquee speed={60} gradient={false}>
                            
                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={btc_icon} alt={btc} width={50} height={50} />
                                    <span>Bitcoin</span>
                                    </div>
                                    <span className="price_t">${btc ?? "--"}  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={eth_icon} alt="" width={50} height={50} />
                                    <span> Ethereum</span>
                                    </div>
                                    <span className="price_t">${eth ?? "--"}  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={ripple_icon} alt="" width={50} height={50} />
                                    <span> Ripple</span>
                                    </div>
                                    <span className="price_t">${xrp ?? "--"}      </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={ucbi_icon} alt="" width={50} height={50} />
                                    <span> UCBI</span>
                                    </div>
                                    <span className="price_t">$0.562     </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={atom_icon} alt="" width={50} height={50} />
                                    <span>Atom</span>
                                    </div>
                                    <span className="price_t">${atom ?? "--"}  </span>
                                </div>
                            
                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={btc_icon} alt="" width={50} height={50} />
                                    <span>Bitcoin</span>
                                    </div>
                                    <span className="price_t">${btc ?? "--"}  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={eth_icon} alt="" width={50} height={50} />
                                    <span> Ethereum</span>
                                    </div>
                                    <span className="price_t">${eth ?? "--"}  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={ripple_icon} alt="" width={50} height={50} />
                                    <span> Ripple</span>
                                    </div>
                                    <span className="price_t">${xrp ?? "--"}      </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={ucbi_icon} alt="" width={50} height={50} />
                                    <span> UCBI</span>
                                    </div>
                                    <span className="price_t">$0.562     </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={atom_icon} alt="" width={50} height={50} />
                                    <span>Atom</span>
                                    </div>
                                    <span className="price_t">${atom ?? "--"}  </span>
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
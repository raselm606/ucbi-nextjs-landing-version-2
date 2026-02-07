
import Image from 'next/image'
import Link from 'next/link'
import send from '../../public/images/arrow.svg'
import cc from '../../public/images/cc.png'
import FooterLogo from '../../public/images/logo.svg'
import sms from '../../public/images/sms.svg'
import linkedin from '../../public/images/social/linkedin.svg'
const Footer = () => {
  return (
    <>
    <div className="footer_section">
      <div className="container cline">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <div className="footer_info">
              <Image  src={FooterLogo} width={120} height={52} alt="Footer Logo"/>
              <p>Receive exclusive UCBI updates <br /> straight to your inbox</p>
              <form action="#" className="footer_subscriber">
                <div className="input-group from_area">
                  <span className="input-group-text"><Image src={sms} alt="Mail Icon" /></span>
                  <input type="email" placeholder="Your email address"   className="form-control" />
                  <button className="send_btn" type="submit" >
                    <Image src={send} alt="Send Icon" />
                  </button>
                </div>
                <div className="mb-3 mt-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label"  >Check me out</label>
                </div>
              </form>
            </div>
          </div>
          <div className=" offset-lg-2 col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Company</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link href="#">Blockchain</Link></li>
                  <li><Link data-bs-toggle="modal"   href="#exampleModal">Submit a Request</Link></li>
                  <li><Link href="#">Strategy Advisory</Link></li>
                  <li><Link href="#">Token Launch Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="  col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Resources</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link href="#">Arkham Intel</Link></li>
                  <li><Link href="#">Yahoo Finance</Link></li>
                  <li><Link href="#">Coinmarketcap</Link></li>
                  <li><Link href="#">Blockchain Explorer</Link></li> 
                </ul>
              </div>
            </div>
          </div>

          <div className="  col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Contact</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link   href="mailto:contact@ucbibanking.io">Contact@ucbibanking.io</Link></li> 
                  <li><Link href="+33376876876"  >+33 376 876 876 ( FR )</Link></li> 
                  <li><Link href="+441632960123"  >+44 1632 960 123 ( UK )</Link></li> 
                  <li>Monday to Friday at 9am to 6pm</li> 
                  
                </ul>
              </div>
              <div className="cc_web">
                <Image  src={cc} alt='ucbibanking.io' />
                     
                    <Link href="#"> 
                       ucbibanking.io
                    </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div className="bottom_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_elements">
              <div className="social">
                <ul> 
                  <li><Link href="#"><Image   src={linkedin} alt="linkedin"/></Link></li> 
                </ul>
              </div>
              <div className="copyright">
                <p>UCBI Group Technologies LTD Copyright © 2026 All rights reserved</p>
              </div>
              <div className="cc_terms">
                <ul>
                  <li><Link href="#">Terms & Conditions</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
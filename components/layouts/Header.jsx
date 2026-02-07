import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/images/logo.svg';
const Header = () => {
  return (
    <>
    <div className="top_header">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" href="/">
                <Image src={Logo} width={130} height={44} alt="logo" priority/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav top_nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Blockchain</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Treasury</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="modal"   href="#exampleModal">Submit Request</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Contact</Link>
                    </li>
                     
                     
                </ul>
                <div className="top_button">
                    <Button variant="top_nav_button" href="#"> Dashboard</Button>
                </div>
                </div>
            </div>
            </nav>
    </div>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title fs-5" id="exampleModalLabel" style={{color:'#112e50'}}>Want to invest in <strong>UCBI</strong> Ltd? </h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{color:'#112e50'}}>
            <h5 className="mb-4" style={{color:'#112e50'}}>Contact: </h5>
            <p style={{color:'#112e50'}}> <strong>Phone:</strong> +33 376 876 876 ( FR )</p>
            <p style={{color:'#112e50'}}> <strong>Phone:</strong> +44 1632 960 123 ( UK )</p>

            <p style={{color:'#112e50'}}> <strong>Email:</strong> contact@ucbibanking.io</p>
        </div>

        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
      </div>
         
        </div>
    </div>
    </div>
    </>
  )
}

export default Header
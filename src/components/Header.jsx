import { useRecoilValue } from "recoil";
import { authAtom } from "../atoms";
import { useLocation, Link } from "react-router-dom";
import logo from '../assets/img/logo.svg'

export const Header = () => {
    const location = useLocation();
    const auth = useRecoilValue(authAtom);

    const navItemActiveClass = (name) => {
        if (name === location.pathname) {
            return 'nav-item active'
        } else {
            return 'nav-item'
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container"><Link className="navbar-brand" to="/" ><img src={logo} height="31" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            </ul>
            <div className="d-flex ms-lg-4"><Link className="btn btn-secondary-outline" to="login">Sign In</Link><Link className="btn btn-warning ms-3" to="register">Sign Up</Link></div>
          </div>
        </div>
      </nav>
    )
}
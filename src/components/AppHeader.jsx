import { useRecoilValue } from "recoil";
import { authAtom } from "../atoms";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
/**
 * 
 * @param {*} inverted this param refers to inverting the color of header 
 * @returns 
 */

export const AppHeader = ({ inverted = false }) => {
    const auth = useRecoilValue(authAtom);
    const {logout} = useAuth();
    const navigate = useNavigate();

    const navClass = () => {
        return inverted ? 'ftco-navbar-dark' : 'ftco-navbar-light'
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light`} id="ftco-navbar">
            <div className="container">
                <Link className="navbar-brand" to={ auth ? "/app/dashboard" : "/"}>CoFusion Labs</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                {
                    auth ?
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li><Link to="notifications" className="nav-link">Notifications</Link></li>
                                <li><Link to="setting" className="nav-link">Settings</Link></li>
                                <li><div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {auth.username}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to="setting" className="nav-link">Settings</Link>
                                        <Link to="profile" className="nav-link">profile</Link>
                                        <Link onClick={logout} className="nav-link">Logout</Link>
                                    </div>
                                </div></li>
                            </ul>
                        </div> :
                        < ></>
                }

            </div>
        </nav>

    )
}
import '../../public/css/index.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid px-0">
                <a class="navbar-brand mx-3" href="/">
                    <img src={require("../../public/images/logo.png")} alt="HealthyLiving" width="65" height="65" />
                    HealthyLiving
                </a>
                
                <span></span>
                <button class="navbar-toggler me-3 my-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        {/* <li class="nav-item">
                            <a class="nav-link px-5" href="/dashboard">{{user.firstName}}'s Dashboard</a>
                        </li> */}
                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link px-5" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link px-5" to="/on-the-menu">On The Menu</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link px-5" to="/user/login">Log In</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link px-5" to="/user/registration">Sign Up</NavLink>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link px-5" href="/user/logout">Log Out</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;

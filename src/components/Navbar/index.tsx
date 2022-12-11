
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import './style.scss'
function NavBar() {
    return (
        <section className="navBarSection">
            <header
                className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="logo" />
                            Travel</h1>
                    </a>
                </div>
                <div className="navBar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>

                        <div className="closeNavBar">
                            <AiFillCloseCircle className="icon" />
                        </div>
                    </ul>
                </div>
                <div className="toogleNavBar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section >
    )
}

export default NavBar
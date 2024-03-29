import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonCart} from './ButtonCart';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/orders" className="nav-link">
                            orders
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/clients" className="nav-link">
                            clients
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/vehicles" className="nav-link">
                            vehicles
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/employees" className="nav-link">
                            employees
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/stats" className="nav-link">
                            statistics
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonCart>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        my cart
                    </ButtonCart>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important; /* overriding bootstrap settings */
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
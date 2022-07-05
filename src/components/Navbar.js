import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import zon from '../images/zon.jpg';
import styled from "styled-components";

export default class Navbar extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                <Link to="">
                <img src={zon} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ms-5">
                      <Link to="" className="nav-link">Amazon</Link>  

                    </li>

                </ul>
                <Link to="/cart" className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <Button>
                        <span className="nav-item">
                    <i className='fas fa-cart-arrow-down' />
                    </span>
                        My Cart

                    </Button>
                </Link>
            </nav>
        )
    }
}

const Button = styled.button`
  color: rgb(0,0,0);
  border: 2px solid rgb(255,228,225);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  list-style-type: none;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;



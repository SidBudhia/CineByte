import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">About</li>
                    <li className="menuItem">Contact Me</li>
                </ul>
                <div className="infoText">
                    Made By SIDDHARTH BUDHIA. <br />
                    I persue B.tech from NIT Trichy. Currently in Final Yr.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <NavLink className="link" target="_blank" rel="noopener" to="https://www.facebook.com/profile.php?id=100004357848869"><FaFacebook /></NavLink>
                    </span>
                    <span className="icon">
                        <NavLink className="link" target="_blank" rel="noopener" to="https://www.instagram.com/sid.budhia_21"><FaInstagram /></NavLink>
                    </span>
                    <span className="icon">
                        <NavLink className="link" target="_blank" rel="noopener" to="https://wa.me/+919313053324"><FaWhatsapp/></NavLink>
                    </span>
                    <span className="icon">
                        <NavLink className="link" target="_blank" rel="noopener" to="https://linkedin.com/in/siddharthbudhia21"><FaLinkedin /></NavLink>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

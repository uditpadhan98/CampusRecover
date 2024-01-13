import React from "react";
import "../Styles/Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer class="bg-body-tertiary text-center">
                <div class="container p-4 pb-0">
                    <section class="mb-4 footer-height">
                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor:"#3b5998"}}
                            href="#!"
                            role="button"
                        >
                            <FaFacebookSquare/>
                        </a>

                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor:"#55acee"}}
                            href="#!"
                            role="button"
                        >
                            <FaTwitter/>
                        </a>

                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor:"#dd4b39"}}
                            href="#!"
                            role="button"
                        >
                            <FaGoogle/>
                        </a>

                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor:"#E1306C"}}
                            href="#!"
                            role="button"
                        >
                            <FaInstagram/>
                        </a>

                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor:"#0082ca"}}
                            href="#!"
                            role="button"
                        >
                            <FaLinkedin/>
                        </a>

                        <a
                            data-mdb-ripple-init
                            class="btn text-white btn-floating m-1"
                            style={{backgroundColor:"#333333"}}
                            href="#!"
                            role="button"
                        >
                            <FaGithub/>
                        </a>
                    </section>
                </div>

                <div
                    class="text-center p-3"
                    style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}
                >
                    © 2024 Copyright:
                    <a class="text-body" href="https://mdbootstrap.com/">
                        CampusRecover.com
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

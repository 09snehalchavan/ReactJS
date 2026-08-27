import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <footer className="bg-dark text-white mt-5">
                <div className="container py-4">
                    <div className="row">

                        {/* About */}
                        <div className="col-md-4 mb-3">
                            <h5>My Website</h5>
                            <p className="text-secondary">
                                Welcome to my website. Built with React and Bootstrap.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-4 mb-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/" className="text-white text-decoration-none">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="/about" className="text-white text-decoration-none">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="/contact" className="text-white text-decoration-none">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 mb-3">
                            <h5>Contact</h5>
                            <p>📧 example@gmail.com</p>
                            <p>📞 +91 9876543210</p>
                            <p>📍 Pune, Maharashtra</p>
                        </div>

                    </div>

                    <hr />

                    <div className="text-center">
                        <p className="mb-0 text-secondary">
                            © 2026 My Website. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => {
return (
    <footer className="bg-light text-brown py-4">
            <div className="container text-center">
                <p className="mb-2">&copy; 2024 NAPastry. All rights reserved.</p>
                <div className="d-flex justify-content-center gap-3">
                    <a
                        href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
                        className="text-brown text-decoration-none fw-bold"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://x.com/?lang=en-id"
                        className="text-brown text-decoration-none fw-bold"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        className="text-brown text-decoration-none fw-bold"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
  )
}

export default FooterComponent;
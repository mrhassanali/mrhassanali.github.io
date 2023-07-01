import React from "react";
export default function Footer() {
    const socialMedia = {
        Link: {
            textDecoration: "none",
            lineHeight:"auto"
        },
        facebookStyle: {
            cursor: "pointer",
            fontSize: "2.5rem"
        }
    }

    return (
        <footer style={socialMedia.Link}>
            <p>Design By Hassan Ali
                <a href="https://facebook.com/web.hassanali/" target="_blank" rel="noreferrer noopener">
                    &nbsp;
                    &nbsp;
                    <i className="fa-brands fa-square-facebook" style={socialMedia.facebookStyle}></i>
                </a>
            </p>
        </footer>
    );
}
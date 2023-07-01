import React from "react";

class MoveTop extends React.Component {
    myBtns = {
        // display: "none",
        position: "fixed",
        bottom: "2rem",
        right: "3rem",
        zIndex: "99",
        fontSize: "1.8rem",
        border: "none",
        outline: "none",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        padding: "1.5rem",
        borderRadius: "1.4rem",
        height: "4.5rem",
        lineHeight: "1rem",
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    componentDidMount() {
        var mybutton = document.getElementById("myBtn");
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        });
    }

    render() {
        return (
            <button style={this.myBtns} onClick={this.topFunction} id="myBtn">
                <i className="fas fa-arrow-circle-up"></i>
            </button>);
    }
}

export default MoveTop;
import React, { useEffect,useState } from "react";
import { Link} from "react-router-dom";
import TopLoadingBar from "./plugin/TopLoadingBar";
import Spinner from "./plugin/Spinner";
import Footer from "./Footer";


export default function Home() {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

    return (
<>
<TopLoadingBar />
{loading ? <Spinner /> : (
<div>
<section className="tools">
<div className="box-container">
<Link to="/html">
    <div className="box">
        <i className="fab fa-html5 fa-6x red-color"></i>
        <h1 className="tool-head c-title">
            HTML & CSS
        </h1>
    </div>
</Link>
<Link to="/javascript">
    <div className="box">
        <i className="fab fa-js-square fa-6x yellow-color"></i>
        <h1 className="tool-head c-title">
            JavaScript
        </h1>
    </div>
</Link>
<Link to="/ReactSheet">
    <div className="box">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" style={{ "height": "60px" }} />
        <h1 className="tool-head c-title">
            React
        </h1>
    </div>
</Link>
<Link to="/nodejs">
    <div className="box">
        <i className="fab fa-node fa-6x green-color"></i>
        <h1 className="tool-head c-title">
            Node.Js
        </h1>
    </div>
</Link>
<Link to="/bootstrep">
    <div className="box">
        <i className="fab fa-bootstrap fa-6x blue-color"></i>
        <h1 className="tool-head c-title">
            BootStrep
        </h1>
    </div>
</Link>
<Link to="/php">
    <div className="box">
        <i className="fab fa-php fa-6x green-color"></i>
        <h1 className="tool-head c-title">
            PHP
        </h1>
    </div>
</Link>
<Link to="/database">
    <div className="box">
        <i className="fas fa-database fa-6x"></i>
        <h1 className="tool-head c-title">
            Database
        </h1>
    </div>
</Link>
<Link to="/blockchain">
    <div className="box">
    <i className="fab fa-hive fa-6x" style={{color: "#ff540a"}}></i>
        <h1 className="tool-head c-title">
            blockchain
        </h1>
    </div>
</Link>
<Link to="/wordpress">
    <div className="box">
        <i className="fab fa-wordpress fa-6x green-color"></i>
        <h1 className="tool-head c-title">
            Wordpress
        </h1>
    </div>
</Link>
<Link to="/Web-Engineering">
    <div className="box">
        <i className="fas fa-code fa-6x black-color"></i>
        <h1 className="tool-head c-title">
            Web Engineering
        </h1>
    </div>
</Link>
<Link to="/java">
    <div className="box">
        <i className="fab fa-java fa-6x"></i>
        <h1 className="tool-head c-title">
            Java Program
        </h1>
    </div>
</Link>
<Link to="/jdbc">
    <div className="box">
        <i className="fab fa-java fa-6x"></i>
        <h1 className="tool-head c-title">
            Java JDBC
        </h1>
    </div>
</Link>
<Link to="/software">
    <div className="box">
        <i className="fas fa-info-circle fa-6x red-color"></i>
        <h1 className="tool-head c-title">
            Software Details
        </h1>
    </div>
</Link>
<Link to="/object-oriented-programming">
    <div className="box">
        <i className="fab fa-java fa-6x"></i>
        <h1 className="tool-head c-title">
            OOP
        </h1>
    </div>
</Link>
<Link to="/object-oriented-analysis-and-design">
    <div className="box">
        <i className="fab fa-java fa-6x"></i>
        <h1 className="tool-head c-title">
            Object Oriented Analysis and Design
        </h1>
    </div>
</Link>
{/* <Link to="src/DSA.html">
    <div className="box">
        <i className="fas fa-sitemap fa-6x green-color"></i>
        <h1 className="tool-head c-title">
            Data Structure &amp; Alogrithm
        </h1>
    </div>
</Link> */}
<Link to="/system-and-network-administration-window">
    <div className="box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{"height":"5rem"}}><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" /></svg>
        <h1 className="tool-head c-title">
            System &amp; Network Administration of Window
        </h1>
    </div>
</Link>
<Link to="/android-development">
    <div className="box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{"height":"8rem","color":"blue"}}><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" /></svg>
        <h1 className="tool-head c-title">
            Android Development
        </h1>
    </div>
</Link>

</div>

</section>
<Footer/>
</div>
)}
</>
);
}
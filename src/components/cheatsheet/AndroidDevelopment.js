import React, { useEffect,useState } from "react";
import { Link, Outlet, useAsyncError } from "react-router-dom";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop";

export default function AndroidDevelopment() {
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
                    <div className="container">
                    </div>
                    <Footer />
                    <MoveTop />
                </div>
            )
            }
        </>
    );
}
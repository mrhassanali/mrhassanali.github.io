import React, { useState, useEffect } from "react";
import ContentList from "../plugin/ContentList";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
export default function PHP() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);
    return (
        <>
            <TopLoadingBar />
            {loading ? <Spinner /> : (<div>
                <div className="container">

                </div>
                <MoveTop />
                <Footer />
            </div>)}
        </>
    )
}
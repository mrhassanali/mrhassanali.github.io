import React, { useEffect, useRef} from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-css";
// import "prismjs/components/prism-python"; 
import "./prism.css";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/plugins/treeview/prism-treeview";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

export default function CodeHighlight({ code, language,lineNumbers }) {
    const codeRef = useRef();
    // const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (Prism.languages[language]) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code, language]);


    return (
            <pre className={`language-${language} ${lineNumbers ? 'line-numbers' : ''}`} style={{ "fontSize": "2rem" }}>
                <code ref={codeRef}>{code}</code>
            </pre>
    );
}

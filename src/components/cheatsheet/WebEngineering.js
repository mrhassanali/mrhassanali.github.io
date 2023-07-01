import React, { useEffect,useState } from "react";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop";
import CodeHighlight from "../plugin/CodeHighlight";
import InnerHTML from "../plugin/InnerHTML";

const TomcatPath= `Set the JAVA_HOME variable
C:&#8726;program Files&#8726;java&#8726;jdk-17
Set the CATALINA_HOME variable
D:&#8726;xampp&#8726;tomcat
Set the CLASSPATH variable
C:&#8726;D:&#8726;xampp&#8726;tomcat&#8726;lib&#8726;tomcat&#8726;servlet-api.jar;.
D:&#8726;xampp&#8726;tomcat&#8726;lib&#8726;tomcat&#8726;jsp-api.jar
Test the Server
`;
const ManagerApp= `&lt;?xml version='1.0' encoding='utf-8'?&gt;
&lt;tomcat-users&gt;
    &lt;role rolename="admin"/&gt;
    &lt;role rolename="admin-gui"/&gt;
    &lt;role rolename="admin-script"/&gt;
    &lt;role rolename="manager-gui"/&gt;
    &lt;role rolename="manager-status"/&gt;
    &lt;role rolename="manager-script"/&gt;
    &lt;role rolename="manager-jmx"/&gt;
    &lt;user username="admin" password="admin" roles="admin-gui,admin-script,manager-gui,manager-status,manager-script,manager-jmx"/&gt;
&lt;/tomcat-users&gt;`;

export default function WebEngineering() {
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


                    <h5 className="heading1">Tomcat Path</h5>
<p>Download the Apache Tomcat Server or other option is Xampp Server</p>
<div className="heading2">
<h3> Set Path </h3>
</div>
<p>Paste the zip file on <code className="markcode">C:\</code> drive and extract the folder.After Extract the Folder
Set Following Path.</p>

<CodeHighlight code={<InnerHTML string={TomcatPath} />} language="javascript" lineNumbers="line-numbers"/>

    <div className="heading2">
        <h3> Manager App </h3>
    </div>
    <p> When you click on the <code className="markcode">Manager App</code> on the Home page of Tomcat,they
        should say user name or password to enter then you open the Tomcat installation folder then open
        <code className="markcode">D:\xampp\tomcat\conf</code> then open <code className="markcode">tomcat-users.xml</code>
        to replace all the code with blow code.Then you enter the username and passwork in the tomact then they
        work.
    </p>
    <CodeHighlight code={<InnerHTML string={ManagerApp} />} language="markup" />

                    </div>
                    <Footer />
                    <MoveTop />
                </div>
            )
            }
        </>
    );
}
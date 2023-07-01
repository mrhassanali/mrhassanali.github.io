import React, { useState, useEffect } from "react";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import HomeCSS from "./Home.module.css"
import InnerHTML from "../plugin/InnerHTML";

const liveServer = `"liveServer.settings.CustomBrowser": "chrome"`;
const SublimeText = `"update_check": false`;
const autoSaveExtension = `{
    "auto_save_on_modified": true,
    "auto_save_delay_in_seconds": 1,
    "auto_save_all_files": true,
    "auto_save_current_file": "",
    "auto_save_ignore_files": [],
    "auto_save_backup": false,
    "auto_save_backup_suffix": "autosave"
}`;
const MySQLPassword = `$cfg['Servers'][$i]['password'] = '';
$cfg['Servers'][$i]['password'] = 'hassanali'; `;
const officeDepolmentCmd= `.&#8726;setup.exe /configure .&#8726;configuration-office2021Enterprise.xml`;
const ActiveOfficeStep1 = `cd /d %ProgramFiles%&#8726;Microsoft Office&#8726;Office16
cd /d %ProgramFiles(x86)%&#8726;Microsoft Office&#8726;Office16`;
const ActiveOfficeStep2 = `for /f %x in ('dir /b ..&#8726;root&#8726;Licenses16&#8726;ProPlus2021VL_KMS*.xrm-ms') do cscript ospp.vbs/inslic:"..&#8726;root&#8726;Licenses16&#8726;%x"`;
const ActiveOfficeStep3 = `cscript ospp.vbs /setprt:1688
cscript ospp.vbs /unpkey:6F7TH >nul
cscript ospp.vbs /inpkey:FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH
cscript ospp.vbs /sethst:s8.uk.to
cscript ospp.vbs /act`;

export default function Software() {
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
<div className="heading2">
    <h3> Visual Studio Code Extension </h3>
</div>
<p><strong>01</strong> - Live Server</p>
<p><strong>02</strong> - Code Runner</p>
<p><strong>03</strong> - CSS Formatter</p>
<p><strong>04</strong> - HTML Boilerplate</p>
<p><strong>05</strong> - Lorem ipsum</p>
<p><strong>06</strong> - Prettier - Code formatter</p>
<p><strong>07</strong> - vscode-icons</p>
<p><strong>08</strong> - GitHub Theme</p>
<p><strong>09</strong> - Live Preview (SEE Preview in VS Code)</p>

<div className="heading2">
    <h3> How to set the live server as open Default in chrome? </h3>
</div>
<p>Two way you can set the live server as default browser.First is the you can open the setting and set the
    default browser as chrome but the second is the open vs code <code className="markcode">press &quot;f1&quot;</code> then open preference&gt;setting.json file and paste the blow
    code;</p>
<CodeHighlight code={liveServer} language="javascript" />

<div className="heading2">
    <h3>Download Sublime Text 3 and Register Lincence key

        <span className={HomeCSS.heading2RightMove}>
            <a href="https://drive.google.com/drive/folders/16XX-BUjzGJfvOeOlRbw0HfPTBzw6FK4i" rel="nofollow noreferrer"
                target="_blank"><i className="fas fa-link" style={{"color":"white"}}></i></a>
        </span>
    </h3>
</div>
<div className="Short-head">
    <h3> Stop Sublime Text Update icon </h3>
</div>
<p>Go to <span><code className="markcode">Preferences &gt; Setting &gt; Preferences.sublime.settings-user</code></span>
    open and paste the blow code at the end line.</p>
<CodeHighlight code={SublimeText} language="javascript" />

<div className="Short-head">
    <h3> Auto Save Extension </h3>
</div>
<p>Go to <span><code className="markcode">Tools&gt;command plate &gt; Package Control : install Package &gt; Search "Auto-Save " Extension.</code></span>
</p>
<p>After install the Extension the Go to Preference &gt; Package Setting&gt;Auto-Save&gt;Setting_Default and paste the
    blow code. </p>

<CodeHighlight code={autoSaveExtension} language="javascript" />

<div className="heading2">
    <h3> Atom Software</h3>
</div>
<p>To See Preview in the code use <code className="markcode">ctrl+shift+H</code></p>
<div className="Short-head">
    <h3> List of Extension used in Atom Software</h3>
</div>
<p><strong>01</strong> : Atom Beautify</p>
<p><strong>02</strong> : Atom-Live-Server</p>
<p><strong>03</strong> : Bracket Matcher</p>
<p><strong>04</strong> : Emmet</p>

<div className="heading2">
    <h3>Google Chrome Extension for Programming</h3>
</div>
<br />
<table className={HomeCSS.Hometable}>
    <thead>
        <tr>
            <th className="title" style={{"borderRadius": "5px 0 0 0"}}>Extension Name</th>
            <th className="link">Link</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="title">JSON Formatter (Used for view JSON Data)</td>
            <td className="link btn"><button className="software-btn green">
                <a href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa"
                    rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
            </button></td>
        </tr>
        <tr>
            <td className="title">Fake Filter (Automatic Input in HTML)</td>
            <td className="link btn"><button className="software-btn green">
                <a href="https://chrome.google.com/webstore/detail/fake-filler/bnjjngeaknajbdcgpfkgnonkmififhfo"
                    rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
            </button></td>
        </tr>
        <tr>
            <td className="title">Save All Resources (Download Any Site)</td>
            <td className="link btn"><button className="software-btn green">
                <a href="https://chrome.google.com/webstore/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb"
                    rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
            </button></td>
        </tr>
        <tr>
            <td className="title">Web Developer</td>
            <td className="link btn"><button className="software-btn green">
                <a href="https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm"
                    rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
            </button></td>
        </tr>
        <tr>
            <td className="title">Live editor for CSS, Less & Sass - Magic CSS</td>
            <td className="link btn"><button className="software-btn green">
                <a href="https://chrome.google.com/webstore/detail/live-editor-for-css-less/ifhikkcafabcgolfjegfcgloomalapol"
                    rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
            </button></td>
        </tr>
    </tbody>
</table>

<div className="heading2">
    <h3>MySql Server</h3>
</div>
<p>Passowrd :<code className="markcode">technicalhassanali</code></p>
<p>Port : <code className="markcode">3306</code></p>

<div className="heading2">
    <h3>XAMPP Server</h3>
</div>
<p>Password : <code className="markcode">hassanali</code></p>
<p>Port : <code className="markcode">3307</code></p>
<div className="Short-head">
    <h3> Set Password of MySQL </h3>
</div>
<p>open the control pannel then open shell and type the following code<code
    className="markcode">mysqladmin -u root password</code>.After Press Enter then type two time password.</p>
<p>After Enter password two time then open xampp folder directry, then enter
    to the "phpmyAdmin" folder and Edit the <code className="markcode">"config.inc.php"</code> file and set the
    password where you enter in the shell. </p>

<CodeHighlight code={MySQLPassword} language="javascript" />

<div className="Short-head">
    <h3> Change MySql Port No </h3>
</div>
<p><code className="markcode">D:&#8726;xampp&#8726;mysql&#8726;bin&#8726;my.ini</code> open in notepad then change the port No in Two place.
</p>

<br />
<div className="heading2">
    <h3> Terminal Shortcut </h3>
</div>
<p>This Shortcut work on the vs code cmd terminal or window default cmd terminal.</p>
<p><strong>Create Folder : </strong><code className="markcode"> makedir foldername
</code></p>
<p><strong>Create Files : </strong> <code className="markcode">type nul &gt; index.html</code></p>
<br />
<div className="heading2">
    <h3>Extensions</h3>
</div>
<br/>

<table className={HomeCSS.Hometable}>
<thead>
<tr>
    <th className="title">Name</th>
    <th className="link">Link</th>
</tr>
</thead>
<tbody>
<tr>
    <td className="title">Add Adblocker Extension</td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr>
<tr>
    <td className="title">Add Simple Allow Copy Extension</td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="https://chrome.google.com/webstore/detail/simple-allow-copy/aefehdhdciieocakfobpaaolhipkcpgc" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr>
{/* <tr>
    <td className="title"></td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="#" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr> */}

</tbody>
</table>

    <div className="heading2">
        <h3>Software | Website Link</h3>
    </div>
    <br/> 
    
        <table className={HomeCSS.Hometable}>
            <thead>
                <tr>
                    <th className="title">Software Name / Website</th>
                    <th className="link">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="title">Icecream Screen Recorder</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://github.com/Technicalhassanali/Software/raw/main/icecream.zip"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Sublime Text 3</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://drive.google.com/drive/folders/16XX-BUjzGJfvOeOlRbw0HfPTBzw6FK4i?usp=sharing"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Visual Studio Enterprise 2019 Setup and Key</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://drive.google.com/drive/folders/1bzM3ALkgyxZj9udepZqTPbye4mMtEW48?usp=sharing"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Activate Window 7</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://github.com/Technicalhassanali/Software" rel="nofollow noreferrer" target="_blank"><i
                            className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Remove Image Background</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://www.remove.bg/" rel="nofollow noreferrer" target="_blank"><i
                            className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Remove Video Background</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://www.unscreen.com/?ref=removebgupload" rel="nofollow noreferrer" target="_blank"><i
                            className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">IDM Patch (Password = <code className="markcode">TechnicalHassanAli</code>)</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://github.com/Technicalhassanali/Software/blob/main/IDM%20Patch.rar"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Add Extension</td>
                    <td className="link btn">
                        <button className="software-btn green">
                            <a href="https://chrome.google.com/webstore/detail/idm-integration-module/ngpampappnmepgilojfohadhhmbhlaek"
                                rel="nofollow noreferrer" target="_blank">Add</a>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="title">Aeomi Partition</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://www.diskpart.com/" rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Power Iso Software</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://www.poweriso.com/" rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Ventory Software (Make ISO File)</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href=" " rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>

                <tr>
                    <td className="title">Office 2016 32bits and 64bits</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://getintopc.com/softwares/office-tools/office-2016-professional-plus-jan-2019-free-download-8597705/"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Activate Office 2016</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://technicalhassanali.blogspot.com/2021/05/microsoft-office-professional-plus-2016-activate-key.html"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Activate Office 2016,2019,2021</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://github.com/Technicalhassanali/Software" rel="nofollow noreferrer" target="_blank"><i
                            className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">HeiDoc.net to Download office 2021</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://www.heidoc.net/joomla/technology-science/microsoft/16-office-2021-direct-download-links"
                            rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title">Microsoft All Product ISO File Download
                        (tb.rg-adguard.net)</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://tb.rg-adguard.net/public.php" rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>

                <tr>
                    <td className="title">Microsoft office 2021 Download
                        (tb.rg-adguard.net)</td>
                    <td className="link btn"><button className="software-btn green">
                        <a href="https://tb.rg-adguard.net/public.php" rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                    </button></td>
                </tr>
                <tr>
                    <td className="title" >Install office using wotok-mdl.rar
                    </td>
                    <td className="link btn">
                        <button className="software-btn green">
                            <a href="https://www.thelotusgeek.com/download-microsoft-office-2019-full-version-for-free/" rel="nofollow noreferrer" target="_blank">Post</a>
                        </button></td>
                </tr>
                <tr>
                    <td className="title" >Download Microsoft Store Paid Apps (store.rg-adguard.net)
                    </td>
                    <td className="link btn">
                        <button className="software-btn green">
                            <a href="https://store.rg-adguard.net/" rel="nofollow noreferrer" target="_blank"><i className="fas fa-link"></i></a>
                        </button></td>
                </tr>
            </tbody>
        </table>

        <div className="heading2">
            <h3>Install office 2021 LTC Using Office Deploy Tools</h3>
        </div>
        <p>First Download the office Deploy Tool from microsoft official website then click on the
            exe file, after click they select to folder extract the .exe file then you can add to anyone
            folder.After extract the file you can open powershell in the search above <code
                className="markcode">powershell</code>, hit enter.
            After open the powershell you can type the blow command;</p>



            
<table className={HomeCSS.Hometable}>
<thead>
<tr>
    <th className="title">Name</th>
    <th className="link">Link</th>
</tr>
</thead>
<tbody>
<tr>
    <td className="title">Microsoft Office Deployment Tool Link </td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="https://www.microsoft.com/en-us/download/details.aspx?id=49117" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr>
<tr>
    <td className="title" colSpan="2"><CodeHighlight code={<InnerHTML string={officeDepolmentCmd} />} language="javascript" /></td>
</tr>
<tr>
    <td className="title">Microsoft office KMS Activator <code className="markcode">Pasword : windows</code></td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="https://load-files.net/norm/KMSTools.zip" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr>
<tr>
    <td className="title">Microsoft office KMS All version Provider website</td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="https://office-activator.com/" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr>
{/* <tr>
    <td className="title"></td>
    <td className="link btn">
        <button className="software-btn green">
            <a href="#" rel="nofollow noreferrer" target="_blank">
                <i className="fas fa-link"></i>
            </a>
    </button></td>
</tr> */}


</tbody>
</table>


        <div className="Short-head">
            <h3>Activate Office 2021 Using CMD</h3>
        </div>
        <p><strong>Step 1 : </strong>Get into the Office directory in cmd.</p>
        <CodeHighlight code={<InnerHTML string={ActiveOfficeStep1} />} language="javascript" />
        <p><strong>Step 2 : </strong> Install Office Licence 2021</p>
        <CodeHighlight code={<InnerHTML string={ActiveOfficeStep2} />} language="javascript" />
        <p><strong>Step 3 : </strong>Activate your Office using the KMS key.Paste the blow command one by one then your office will be activate. </p>
        <CodeHighlight code={ActiveOfficeStep3} language="javascript" lineNumbers="line-numbers" />
    
    
    </div>
        <MoveTop />
        <Footer />
    </div>
    )
}

</>
)
}
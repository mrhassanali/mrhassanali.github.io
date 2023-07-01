import React, { useState, useEffect } from "react";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../../components/Footer";
import MoveTop from "../../components/MoveTop";

import TopLoadingBar from "../../components/plugin/TopLoadingBar";
import Spinner from "../../components/plugin/Spinner";
import InnerHTML from "../../components/plugin/InnerHTML";


const groupPolicy = `gpedit.msc`;
const updateGroupPolicy = `gpupdate /force`;
const createDiskPartition = `DiskPart //Hit enter
diskpart > list disk                               // show the list of Partition
diskpart > select disk 1                           // select the disk
diskpart > clean                         // Delete All data from Selected Drive
diskpart > create partition primary size = 10000 // create the partition with size
diskpart > create partition primary   // create the partition without size all
diskpart > active `;
const convertFileSystemUSB = `DiskPart //Hit Enter
diskpart > list disk                               // show the list of Partition
diskpart > list volume
diskpart > select volume Number(your usb) 
diskpart > format fs=ntfs quick //(You can also replace NTFS with FAT32 or exFAT.)
diskpart > exit`;
const createUSBPartition =`diskpart > list disk                // show the list of Partition
diskpart > select disk 1           // select the disk
diskpart > clean                   // Delete All data from Selected Drive
diskpart > create partition primary size = 10000 //create the partition Size=MB
diskpart > create partition primary // create the partition without size in mb
diskpart > active`;
const BlockWebsiteinPc = `C:\Windows\System32\drivers\etc`;
const FindWindowProductKey = `wmic path softwarelicensingservice get OA3xOriginalProductKey`;
const windowShortcut = ` SHIFT  + WINDOW + S        Snipping Tools for screenshot
CTRL   + SHIFT  + DEL      You can delete browser history 
CTRL   + SHIFT  + ESC      Open Task Manager
WINDOW + G                 Record Screen  
WINDOW + L                 Lock Window Screen
CTRL   + ESC               Open Start Menue (if not working win btn)`;
const openRoaming = `C:&#8726;Users&#8726;hassanali&#8726;AppData&#8726;Roaming&#8726;`;
const ShowServiceRegedit = `Computer&#8726;HKEY_LOCAL_MACHINE&#8726;SYSTEM&#8726;CurrentControlSet&#8726;Services&#8726;`;
const ActiveWindow = `slmgr.vbs /ipk yourlicensekey;
slmgr.vbs /ato`;
const checkBatteryReport = `powercfg /batteryreport`;
const checkBatteryReportPath = `C:&#8726;Users&#8726;hassanali&#8726;battery-report.html`;
const checkSoftwareUpdate = `winget upgrade`;
const updateAllSoftware = `winget upgrade --all`;
// const = ``;

export default function SNA() {
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
    <div className="heading2">
        <h3>Local Group Policy </h3>
    </div>
    <p><strong>Method 01 :</strong></p>
    <p>You can also quickly launch the Group Policy Editor with a Run command. Press <code
        className="markcode">Windows+R</code> on your
        keyboard to open the “Run” window, type <strong>gpedit.msc</strong> , and then hit Enter or click “OK.”
    </p>
    <p><strong>Method 02 :</strong></p>
    <p>open <kbd>control pannel </kbd> &gt; <kbd>Open Search on Top Bar</kbd> &gt;<kbd>Group Policy</kbd> &gt; open
        window tools blow written Edit Group Policy.</p>
    <CodeHighlight code={groupPolicy} language="markup" />

    <p><strong className="outputh">Update Group Policy</strong></p>
    <p>Press window + r then type blow command;</p>
    <CodeHighlight code={updateGroupPolicy} language="markup" />

    <div className="heading2">
        <h3>Create Partition of the Disk Using DiskPart </h3>
    </div>
    <p>Press <code className="markcode">window + r</code> then type following command.</p>
    <CodeHighlight code={createDiskPartition} language="markup" />

    <center>
        <button className="software-btn green"><a
            href="https://www.easeus.com/partition-master/format-usb-flash-drive-using-cmd.html"
            target="_blank" rel="noreferrer">Convert usb file System </a>
        </button>
    </center>
    <hr />
    <div className="heading2">
        <h3>Convert File System of USB </h3>
    </div>
    <p>Press <code className="markcode">window + r</code> then type following command.</p>
    <CodeHighlight code={convertFileSystemUSB} language="markup" />

    <div className="heading2">
        <h3>Create Partition of Disk </h3>
    </div>
    <CodeHighlight code={createUSBPartition} language="markup" />

    <div className="heading2">
        <h3>Block Website in PC</h3>
    </div>
    <p>Open this Location that have blow and show all the files. you can see the <mark className="mark-round">host
        file</mark>.Then you can copy the file and paste on the desktop.Open file with Notepad or other text
        Editor then copy the ip address and place the name of the website with complete address.</p>
    <CodeHighlight code={BlockWebsiteinPc} language="markup" />


    <div className="heading2">
        <h3>How to Find the Product Key Using CMD</h3>
    </div>
    <p>Open cmd run as Adminsitator then paste the blow code you can see the product key.</p>
    <CodeHighlight code={FindWindowProductKey} language="markup" />


    <div className="heading2">
        <h3>How to Decrease Boot Load time in Pc?</h3>
    </div>
    <p>Open <kbd>window + r</kbd> then type <kbd>msconfig</kbd> and hit enter you can see the boot menu setting,
        on your pc.</p>

    <div className="heading2">
        <h3>Add User Account or Remove Account</h3>
    </div>
    <p>Open <kbd>window + r</kbd> then type <kbd>netplwiz</kbd> and hit enter you can see the the admin
        account of pc and you add the new account on click the add button.</p>

        <div className="heading2">
            <h3>Windows Shortcut Keys </h3>
        </div>
        <CodeHighlight code={windowShortcut} language="markup" lineNumbers="line-numbers" />

        <div className="heading2">
            <h3>Open Roaming  </h3>
        </div>
        <CodeHighlight code={openRoaming} language="markup" lineNumbers="line-numbers" />

        <div className="heading2">
            <h3>Show Services in Regedit  </h3>
        </div>
        <CodeHighlight code={ShowServiceRegedit} language="markup" lineNumbers="line-numbers" />

        <div className="heading2">
            <h3>Activate Window 7 + Window 8.1 + Window 10 + Window 11  </h3>
        </div>
        <ul>
            <li><p><a href="https://www.official-kmspico.com/windows-10-product-key-list/" target="_blank" rel="noreferrer"><strong>For Window 11</strong></a></p></li>
            <li><p><a href="https://www.blowingideas.com/windows-11-product-keys/" target="_blank" rel="noreferrer"><strong>For Window 10</strong></a></p></li>
        </ul>

        <p>Use Microsoft tool name is <a href="https://apps.microsoft.com/store/detail/showkeyplus/9PKVZCPRX9NV" target="_blank" rel="noreferrer"><strong><u>showkeyplus</u></strong></a> to check the product key or for installation purpose.</p>
        <p>You can install product key with two ways first to install the open setting and then paste the product key the next process is using cmd command.</p>
        <CodeHighlight code={ActiveWindow} language="markup" lineNumbers="line-numbers" />


        <div className="heading2">
            <h3>Change Window Drive Icon <a href="https://www.youtube.com/watch?v=12Dhw6T2Mkg" target="_blank" rel="noreferrer">
                <button style={{"cursor": "pointer"}}>Video</button>    </a></h3>
        </div>
        <ul>
            <li>First download the .ico icon.</li>
            <li>Second open the registery path like <code className="markcode">Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\DriveIcons\</code></li>
            <li>Write click on the <b>DriveIcons</b> Folder and <code className="markcode">New&gt;Key(Name of Drive Letter e.g G)</code> then hit enter.</li>
            <li>Then within the <code className="markcode">G</code> Drive letter you can again make folder <code className="markcode">New&gt;key(DefaultIcon)</code>.</li>
            <li>Last Step the open <code className="markcode">G&gt;DefaultIcon&gt;(Default)</code> double click on it and value section add the path of icon like . C:\Users\hassanali\OneDrive\icons\DropboxFolder.ico</li>
        </ul>

        <div className="heading2">
            <h3>Check Battery Health of Laptop</h3>
        </div>
        <p>open <code className="markcode">cmd</code> and run blow command.</p>
        <CodeHighlight code={checkBatteryReport} language="markup" />
        <p>Check report run blow command.</p>
        <CodeHighlight code={<InnerHTML string={checkBatteryReportPath}/>} language="markup" />
        <div className="heading2">
            <h3>Check Software Update</h3>
        </div>
        <p>open <code className="markcode">cmd</code> and run blow command.</p>
        
        <CodeHighlight code={checkSoftwareUpdate} language="markup" />  
        <p>For first time Press y to yes then they show the list of software that upgrade is availabe.So upgrade the all software run blow command</p>

        <CodeHighlight code={updateAllSoftware} language="markup" />
        <p>Then downloading is started...</p>

    </div>
        <MoveTop />
        <Footer />
    </div>
    )
}
    </>
)
}
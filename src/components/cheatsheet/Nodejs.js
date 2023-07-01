import React, { useState, useEffect } from "react";
import ContentList from "../plugin/ContentList";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";


const Commands = `npm init // command is used for initiallize the project
npm install nodemon // install the nodemon
node filename       // start the node project`;
const AsyncronousCode = `const fs = require("fs");
fs.readFile("delete.txt","utf-8",(error,data)=>{ //callback function is used
  console.log(error,data);
});
console.log("This is the Message"); //first executed this line b/c Asyncronous`;
const readFileHTML = `<html>
<body>
  <h1>My Header</h1>
  <p>My paragraph.</p>
</body>
</html>`;
const readFileJS = `const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    fs.readFile("Home.html",(error,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
});
server.listen(port,hostname,()=>{
    console.log(&#96;Server is Running on : http://&#36;{hostname}:&#36;{port}&#96;)
});`;
const readFileSyncode = `// fs -> file system module
const fs = require("fs");
//readFileSync Accept two parameter
// 1: Read File Name
// 2.Type of File Encoding
var text = fs.readFileSync('h.txt','utf-8');
text = text.replace('Hello World!','Hassan Ali')
// writeFileSync is accept two parameter
// 1:write file name and you can create new file as you prefer
// 2:write text
text = fs.writeFileSync("h.txt",text);  //text = fs.writeFileSync("New.txt",text);
console.log(text);`;
const BufferEncoding = `const  fs = require('fs');
/* →Return the Buffer Code which hold Binary Digit then convert Buffer Code
	to text form we used toString();
 →In Synchronously it return Buffer Data .
 →But in Asynchronously Not return only return the file data.
*/
const fileContent = fs.readFileSync("dummy.txt").toString();
console.log(fileContent);
`;
const readFileWithout = `const  fs = require('fs');
//const fileContent = fs.readFileSync("[filename.extension]","[Encoding]");
const fileContent = fs.readFileSync("dummy.txt","utf-8");
console.log(fileContent);
							//Same Like in ASynchronous Method Encoding
var fs = require('fs');
/* Used Asynchronous Method to Encoding */
fs.readFile('my-file.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});`;
const createFiles = `/* To Added the New Text on File Before overlapping.*/
fs.appendFile(); or fs.appendFileSync("filename.extension","New Text");
/*It Would Create the File and Overlap the Text mean put text on the file.*/
fs.writeFile(); or fs.writeFileSync("newFileName.extension","Text Name");
`;
const mkdirSynccode = `let fs = require('fs');
fs.mkdirSync("hassan");`;
const deleteFiles = `const  fs = require('fs');
// Delete File Simple pass the Path as a Parameter
const DeleteFile = fs.unlinkSync('./alihassan/abc.txt');
console.log(DeleteFile);
`;
const rmdirCode = `const  fs = require('fs');
const DeleteFolder = fs.rmdirSync('./alihassan');
console.log(DeleteFolder);
`;
const renameFilecode = `/* To Rename the File First Pass the exist filename with extension then
New Name of File with extension.*/
const fs = require('fs');
/*fs.renameSync("oldfilename.txt","newname.txt");*/
fs.renameSync("hassan.txt","dummy.txt");`;
const createDirectory = `const fs = require('fs');
var dir = './Hassan'; //var dir = 'C:/Users/Dell/Documents/javascript/alihassan';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
                                     // Method 02
var fs = require('fs');
var dir = 'C:/Users/Dell/Documents/javascript/alihassan';
fs.mkdirSync(dir);
                                     // Method 03

var fs = require('fs');
var dir = 'C:/Users/Dell/Documents/javascript/alihassan';
if (fs.existsSync(dir)){
    console.log("Directory Found Already")
}else{
    fs.mkdirSync(dir);
}`;
const challengeTimeMethod = `const fs = require("fs");    //file System
/* 1 : Create a Folder named it Hassan Ali */
const dir = './Hassan Ali';  // For Folder Create Path
if(fs.existsSync(dir)){
    console.log("Folder Already Exist in this Name");
}else{
    fs.mkdirSync(dir);
}
/* 2 : Create a File in it named bio.txt and Data into it. */
const fileCreate = './Hassan Ali/bio.txt';// For Create a File
if (fs.existsSync(fileCreate)) {
  console.log("In this Name File Exist");
} else {
  fs.writeFileSync(fileCreate, "My Name is Hassan Ali");
}
/*  3 : Add more data into the File at the end of the existing Data. */
const AddText = './Hassan Ali/bio.txt';
fs.appendFileSync(AddText,'\n Walikum Slam');
/*4 : Read the Data without getting the Buffer Data at First.
(Hint : use Encoding)*/
const readData = fs.readFileSync('./Hassan Ali/bio.txt','utf-8');
console.log(readData);
/*5 : Rename the File Name to mybio.txt*/
const renameFile= fs.renameSync('./Hassan Ali/bio.txt','./Hassan Ali/mybio.txt');
/* 6 : Now Delete Both the File and the Folder */
const deleteFile = fs.unlinkSync('./Hassan Ali/mybio.txt');
const deleteFolder = fs.rmdirSync('./Hassan Ali');`;
const challengeTimeMethod2 = `const fs = require('fs');
// 1 : Create a Folder named it Hassan Ali
fs.mkdir("./Hassan Ali",(erro)=>{
    console.log("Folder Created Successfully");
});
// 2 : Create a File in it named bio.txt and Data into it.
fs.writeFile("./Hassan Ali/bio.txt","Hello",(error)=>{
    console.log("File Created Successfully and Data Inserted");
    console.log(error);
});
// 3 : Add more data into the File at the end of the existing Data.
fs.appendFile("./Hassan Ali/bio.txt","World!",(error)=>{
    console.log("Data Inserted");
    console.log(error);
});
/* 4 : Read the Data without getting the Buffer Data at First.
(Hint : use Encoding) */
fs.readFile("./Hassan Ali/bio.txt","utf-8",(data,error)=>{
    console.log(data);
    console.log(error);
});
// 5 : Rename the File Name to mybio.txt
fs.rename("./Hassan Ali/bio.txt","./Hassan Ali/mybio.txt",(error)=>{
    console.log("File Rename Successfully");
});
// 6 : Now Delete Both the File and the Folder
fs.unlink("./Hassan Ali/mybio.txt",(error)=>{
    console.log("File Deleted Successfully");
})
// Delete Folder
fs.rmdir("./Hassan Ali",(error)=>{
console.log("Directory Deleted Successfully")
});`;
const pathModule = `const path = require("path");
// return directory name
console.log(path.dirname('D:/Node/index.js'));
// return file extension .js
console.log(path.extname('D:/Node/index.js'));
// return index.js 
console.log(path.basename('D:/Node/index.js'));`;
const parsePathCode = `/*
{
  root: 'C:/',
  dir: 'C:/Users/Hassan Ali/Documents/js/node/src',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/
console.log(path.parse('C:/Users/Hassan Ali/Documents/js/node/src/index.js'));
// Calling Object to give specific properties
const myPath = path.parse('C:/Users/Hassan Ali/Documents/js/node/src/index.js');
console.log(myPath);
console.log(myPath.root);
console.log(myPath.name);
console.log(myPath.ext);`;
const ExternalModule = `console.log("This Module File");

const average = (arr)=>{
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
/* 1. Export only one Module
module.exports = average; */

// 2.for multiple module export then use the object
module.exports = {
    averageN : average,
    Name : "Hassan Ali",
    Age : 18
}
// 3.create and export module in js
module.exports.name = "Hassan Ali";`;
const ExternalModuleIndex = `console.log("This index File");

// const md = require("./mod");
// console.log(average([1,2,3,4,5]));

const mod = require("./mod");
console.log(mod.averageN([1,1,1,1])); //import object average module
console.log(mod.Name);  // import object Name module
console.log(mod.Age);  // import object age module
console.log(mod.name); //import only name module`;
const CustomeBackendCode = `<div>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/Contact">Contact Us</a></li>
  <li><a href="/Service">Service</a></li>
  <li><a href="/Login">login</a></li>
</ul>
</div>
<h1 style="text-align: center;color:green;">Home Page</h1>`;
const CustomeBackendNodeJs = `const fs = require('fs');
const Home = fs.readFileSync('./Home.html');
const Contact = fs.readFileSync('./Contact.html');
const Services = fs.readFileSync('./Services.html');
const Login = fs.readFileSync('./Login.html');
//Creating Server and Listen Port
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request,response)=>{
    console.log(request.url);
    const url = request.url;
    response.statusCode = 200; //ok
    if(url=='/'){
        response.end(Home);
    }else if(url=='/Contact'){
        response.end(Contact);
    }else if(url=='/Service'){
        response.end(Services);
    }else if(url=='/Login'){
        response.end(Login);
    }else {
        response.statusCode = 404; //file not found
        response.end(&#96;<h1>404 Error File Not Found</h1>&#96;)
        /* res.writeHead(404 ,{'Content-Type': 'text/html'});
           res.end("404 file not found");  */
    }
});
server.listen(port,hostname,()=>{
    console.log(&#96;Server is Running on : http://&#36;{hostname}:&#36;{port}&#96;);
});`;
const JsCopyFileCode = `const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('C:/Users/Dell/Documents/javascript/express/index.js', 'C:/Users/Dell/Documents/javascript/express/destination.js', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});`;
const npmPkg = `    npm init /* Start npm module used */
// After init then they option  show you
package name: (module)
version: (1.0.0)
description: Hello World!
entry point: (index.js)
test command:
git repository:
keywords:
author: Hassan Ali
license: (ISC)`;
const npmVersionConcept = `version => 1.0.0 => Major.Minor.Patch
//First  = Major : To remove old function and introduced new Functions =>2.0.0
//Second = Minor : New Function/Feature are introduced=> 2.1.0
//Third  = Patch : How much Bugs are  Fixed => 2.1.1  one bug fix`;
const nodemoncode = `/* if you install and work nodemon in devDependencies then use the blow code.*/
npm install nodemon --save-dev
npm install nodemon -g  //(To install in the System)
npm install nodemon --global`;


export default function Nodejs() {
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
        <h3> Node JS Instroduction </h3>
    </div>
    <ul>
        <li>Node.js is a JavaScript runtime built on chrome's V8 JavaScript Engine.</li>
        <li>Node.js is a JavaScript running on the Server.</li>
        <li>Node.js is the open source.</li>
    </ul>
    <p><strong>History:</strong></p>
    <p>In 2009 Ago we used the JavaScript in client not in the server.But in 2009 the idea came in the mind of
        Rayan Dahl(Google Engineer) that why not run javaScript outside the browser(outside clientside), so he took
        V8 engine and embedded in a C++ Program and called it Node.exe later on become Nodejs.</p>

    <div className="success size">
        <p><i className="fas fa-check-circle"></i><strong> Note: What is V8?</strong><br />
            V8 translates JavaScript code directly into machine code* so that computers can actually
            understand it, then it executes the translated, or compiled, code.It is written in C++ languages.<br />
            <strong>Example : </strong> Chrome,FireFox(SpiderMonkey),Safari(Nitro)
        </p>
    </div>

    <div className="heading2">
        <h3>Commands</h3>
    </div>
    <CodeHighlight code={Commands} language="javascript" />

    <div className="heading2">
        <h3> What is REPL? </h3>
    </div>
    <ul>
        <li>REPL an interactive shell that processes Node. js expressions. </li>
        <li>The <code className="markcode">REPL</code> feature of Node is very useful in experimenting with Node.js codes and to Debug JavaScript Code.</li>
        <li><strong>REPL stands for;</strong></li>
        <ul>
            <li><kbd>Read</kbd> Reads user's Input,Parse the input into
                JavaScript Data-Structure,and Stores in Memory.</li>
            <li><kbd>Eval</kbd> Takes and Evaluates the Data Structure.</li>
            <li><kbd>Print</kbd> Print the Result. </li>
            <li><kbd>Loop</kbd> Loop the Above Command until the User Presses ctrl+c twice.</li>
        </ul>
    </ul>


    <div className="heading2">
        <h3> When to use Node JS? </h3>
    </div>

    <div className="notecard note">
        <p><strong>Input/Output Bound</strong></p>
        <p><strong>Data Streaming Applications : </strong> e.g NetFlix,instagram,Facebook etc.</p>
        <p><strong>Real Time Applications :</strong> e.g whatsapp,uber,ebay,PayPal etc.</p>
    </div>

    <div className="heading2">
        <h3> Synchronous or Blocking Code | Asynchromous or Non-Blocking Code </h3>
    </div>
    <p><strong>Synchronous or Blocking Code</strong></p>
    <p> A code Should be executed Line by line is known as Synchronous or Blocking Code.</p>
    <p><strong>Example :</strong> This code run in normal usually run in the programming language
        line by line.</p>
    <p><strong>Asynchronous or Non-Blocking Code</strong></p>
    <p>In this code should not guranteed to executed line by line.<br/>
        They use CallBack Function Fire</p>
    <p>Any function that is passed as an argument is called a callback function.
        A callback is a function that is to be executed after another function has
        finished executinghence the name 'call back.</p>

    <CodeHighlight code={AsyncronousCode} language="javascript" />

    <div className="heading2">
        <h3> Types of Module in Node JS</h3>
    </div>
    <p>Three types of Module in the Node JS</p>
    <ol type="1">
        <li>Core Module (Built In Module)</li>
        <li>NPM Module</li>
        <li>Third Partiy Module</li>
    </ol>

    <div className="heading2">
        <h3> Node JS File System Module </h3>
    </div>
    <p>A file system is a mechanism that controls how data is stored, accessed, and managed
        on an operating system. The file system module in Node. js allows you to work programmatically
        with the file system on an operating system.</p>
    <div className="success size">
        <p><i className="fas fa-check-circle"></i> Using file system (fs) module, we can perform
            <code className="markcode">Read</code>,<code className="markcode">Create</code>,
            <code className="markcode">Update</code>,<code className="markcode">Delete</code>,
            <code className="markcode">Rename</code> the files and many more operations.
        </p>
    </div>
    <p>Before used the fileSystem command you can <code className="markcode">require('fs');</code> first.</p>
    <div className="Short-head">
        <h3> Read Files </h3>
    </div>
    <ul>
        <li><code className="markcode">fs.readFile()</code> method is used to read files on your computer.</li>
        <li><code className="markcode">fs.readFileSync()</code> method is used to read files on your computer. (same work as readFile);</li>
        <ul>
            <li>is synchronous and blocks execution until finished.</li>
        </ul>
    </ul>
    <p><span className="outputh">HTML File : filename =&gt; Home.html</span></p>
    <CodeHighlight code={readFileHTML} language="javascript" />

    <p><span className="outputh">JS File:</span></p>
    <CodeHighlight code={readFileJS} language="javascript" />

    <p className="marku outputh"><strong>Read File using | fs.readFileSync() Method</strong></p>
    <CodeHighlight code={readFileSyncode} language="javascript" />


    <div className="heading2">
        <h3> Buffer and Encoding </h3>
    </div>
    <ul>
        <li>Node.js includes an Additional Data type Called <kbd>Buffer</kbd>.(Not Available in Browser's JavaScript).</li>
        <li>Buffer is mainly used to store Binary Data.</li>
        <li>While Reading for a file or Receiving Packets over the Network.</li>
    </ul>
    <CodeHighlight code={BufferEncoding} language="javascript" />

    <div className="Short-head">
        <h3> How to read data from file in node js without Buffering ? </h3>
    </div>
    <CodeHighlight code={readFileWithout} language="javascript" />


    <div className="Short-head">
        <h3> Create Files | Create Folder</h3>
    </div>
    <ul>
        <li><kbd>writeFileSync()</kbd> check if file present then they remove all content and add new content, where they accept second parameter.If the file not exist then they create the file and add the text/html etc content in the file.</li>
        <li><kbd>appendFileSync()</kbd> not overwrite the new text/content in the file, but the add new content after existing.</li>
    </ul>
    <p>The File System module has methods for creating new files:</p>
    <CodeHighlight code={createFiles} language="javascript" />

    <hr />
    <ul>
        <li><code className="markcode">fs.mkdir()</code>create folder Asyncronous </li>
        <li><code className="markcode">fs.mkdirSync()</code>create folder Syncronous.</li>
    </ul>
    <CodeHighlight code={mkdirSynccode} language="javascript" />


    <div className="Short-head">
        <h3> Update Files </h3>
    </div>
    <p>The File System module has methods for updating files:</p>

    <p>
        <code className="markcode">fs.appendFile()</code>,
        <code className="markcode">fs.writeFile()</code>
    </p>

    <div className="Short-head">
        <h3> Delete Files | Delete Directory/Folder</h3>
    </div>
    <p>To delete a file with the File System module;</p>
    <p><code className="markcode">fs.unlinkSync()</code> use the method for Synchronous Method or Blocking Method.</p>
    <p><code className="markcode">fs.unlink()</code> use the method for Asynchronous Method or Non-Blocking Method.</p>
    <CodeHighlight code={deleteFiles} language="javascript" />

    <hr />
    <p><code className="markcode">fs.rmdirSync()</code> Remove|Delete the Folder Synchronous Method by Passing string the
        path as a parameter. </p>
    <p><code className="markcode">fs.rmdir()</code> Remove|Delete the Folder ASynchronous Method by Passing string the path
        as a parameter. </p>

    <CodeHighlight code={rmdirCode} language="javascript" />

    <div className="Short-head">
        <h3> Rename Files</h3>
    </div>
    <ul>
        <li>To Rename the file by using File System Module;</li>
        <ul>
            <li><kbd>fs.rename()</kbd></li>
            <li><kbd>fs.renameSync()</kbd></li>
        </ul>
    </ul>

    <CodeHighlight code={renameFilecode} language="javascript" />

    <div className="heading2">
        <h3> How to Create Directory? | Create Folder </h3>
    </div>
    <p><code className="markcode">fs.existsSync()</code> method is used to synchronously check if a
        file already exists in the given path or not. It returns a boolean value which indicates the
        presence of a file.</p>
    <p><code className="markcode">fs.mkdirSync()</code> is used to create the Directory/Path in given Path.This Method is
        used Snchronously or Blocking Methods. </p>
    <p><code className="markcode">fs.mkdir()</code>method i Node.js is used to create a directory asynchronously.</p>
    <pre className="output"> fs.mkdir(path[, options], callback);
        fs.mkdirSync(path[, options]);
    </pre>
    <CodeHighlight code={createDirectory} language="javascript" />


    <div className="heading2">
        <h3> Challenge Time | Synchronous Method or Blocking Method <span
            style={{"float":"right","marginRight":"15px"}}>#01</span></h3>
    </div>
    <div className="success size">
        <p><strong>1 :</strong> Create a Folder named it Hassan Ali</p>
        <p><strong>2 :</strong> Create a File in it named bio.txt and Data into it.</p>
        <p><strong>3 :</strong> Add more data into the File at the end of the existing Data.</p>
        <p><strong>4 :</strong> Read the Data without getting the Buffer Data at First. (Hint : use Encoding)</p>
        <p><strong>5 :</strong> Rename the File Name to mybio.txt</p>
        <p><strong>6 :</strong> Now Delete Both the File and the Folder</p>
    </div>
    <CodeHighlight code={challengeTimeMethod} language="javascript" />

    <div className="heading2">
        <h3> Challenge Time | Asynchronous Method or Non-Blocking Method <span
            style={{"float":"right","marginRight":"15px"}}>#02</span></h3>
    </div>
    <div className="success size">
        <p><strong>1 :</strong> Create a Folder named it Hassan Ali</p>
        <p><strong>2 :</strong> Create a File in it named bio.txt and Data into it.</p>
        <p><strong>3 :</strong> Add more data into the File at the end of the existing Data.</p>
        <p><strong>4 :</strong> Read the Data without getting the Buffer Data at First. (Hint : use Encoding)</p>
        <p><strong>5 :</strong> Rename the File Name to mybio.txt</p>
        <p><strong>6 :</strong> Now Delete Both the File and the Folder</p>
    </div>
    <CodeHighlight code={challengeTimeMethod2} language="javascript" />


    <table>
        <thead>
            <tr>
                <th className="title" style={{"borderRadius": "5px 0 0 0"}}>Module Name</th>
                <th className="link">Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="title" >File System Module</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://nodejs.org/docs/latest-v17.x/api/fs.html"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title">OS (Operating System) Module</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://nodejs.org/docs/latest-v17.x/api/os.html"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title" >Path Module</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://nodejs.org/docs/latest-v17.x/api/path.html"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title" >http Module (create web server)</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://nodejs.org/docs/latest-v17.x/api/http.html"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title" >Events Module (Click to What happen)</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="#"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
        </tbody>
    </table>



    <h5 className="heading1">Path Module</h5>
    <p>The Path module provides a way of working with directories and file paths.</p>
    <p>When you need to check the path of file,directory of file,basename of file with extension or allow specific files are should be uploaded into the server,then we used the path modules.</p>
    <CodeHighlight code={pathModule} language="javascript" />

    <div className="Short-head">
        <h3>path.parse('path'); </h3>
    </div>
    <ul>
        <li>If you check all the above operation in one method then path.parse() is used.</li>
        <li>It return the object that contain the <code className="markcode">root name</code>, <code className="markcode">dir name</code>, <code className="markcode">base name</code>, <code
            className="markcode">ext extension name</code>, <code className="markcode">name of file</code></li>
    </ul>
    <CodeHighlight code={parsePathCode} language="javascript" />


    <div className="heading2">
        <h3> Creating Your External Module in Node.js </h3>
    </div>
    <p>In this Code First you have to create two files one files is your module then other file
        you can import the module in javaScript file.Basically when a function is written to other file
        then we access this function we Accessed with the help of Module.<br/>
            In Blow code we created two files name <code className="markcode">mod.js</code> and <code
                className="markcode">index.js</code><br />
    </p>
    <p><code className="markcode">module.exports = nameofmodule;</code> use for export the module.But you can multiple
        module
        Added in the Object then import to other file.</p>
    <h5 className="outputh">mod.js :</h5>
    <CodeHighlight code={ExternalModule} language="javascript" />

    <h5 className="outputh">index.js :</h5>
    <CodeHighlight code={ExternalModuleIndex} language="javascript" />

    <div className="heading2">
        <h3> Custome Backend Create Practice Code </h3>
    </div>
    <p><span className="outputh">HTML File:</span> Put in All Pages Same</p>
    <CodeHighlight code={CustomeBackendCode} language="javascript" />


    <p>In this Program First You Create the 4 Pages of HTML,then Access these pages to using NodeJS
        File System Module then make the if-else condition when the user click on it they response should be
        show.</p>
    <p><span className="outputh">NodeJS File:</span></p>
    <CodeHighlight code={CustomeBackendNodeJs} language="javascript" />

    <div className="heading2">
        <h3>JavaScript Copy File Code </h3>
    </div>
    <CodeHighlight code={JsCopyFileCode} language="javascript" />

    <h5 className="heading1">npm</h5>


    <div className="heading2">
        <h3> What is npm? | Node Package Manager</h3>
    </div>
    <ul>
        <li>NPM is a package manager for Node.js packages, or modules if you like</li>
        <li>By using NPM,We Install more then thousend Module and use in the code.</li>
        <li>It is the Default Package Manager for the JavaScript Runtime Environment Node.js</li>
        <li>To Start the npm open the JavaScript Shell then type <code className="markcode">npm init</code> then they asked you
            the requirement.</li>
    </ul>
    <CodeHighlight code={npmPkg} language="javascript" />

    <div className="heading2">
        <h3> npm Local and Global Packages Installation </h3>
    </div>

    <div className="success size">
        <p><i className="fas fa-check-circle"></i><strong> Types of Packages </strong></p>
        <ul>
            <li><strong>Local packages</strong> are installed in the directory where you run <code className="markcode"> npm install &lt;package-name&gt; </code>, and they are put in the node_modules folder under this
                directory.</li>
            <li><strong>Global packages</strong> are all put in a single place in your system (exactly where depends on your
                setup), regardless of where you run <code className="markcode">npm install -g &lt;package-name&gt;</code></li>
        </ul>
    </div>


    <div className="Short-head">
        <h3> Install npm Package </h3>
    </div>
    <ul>
        <li>After npm init then the Package.json file created they held the all information about the module and packages.</li>
        <li>install new module like <code className="markcode">npm install chalk</code> then they module are add in the
            Directory
            and Package.json file are updated to the last show dependiences where npm install package show.</li>
    </ul>
    <div className="success size">
        <p><i className="fas fa-check-circle"></i><strong> npm update:</strong>To update npm on latest version
            open powershell and type <code className="markcode">npm install npm@latest -g</code>
        </p>
    </div>
    <div className="Short-head">
        <h3> Install Specific version of npm Package </h3>
    </div>
    <ul>
        <li><code className="markcode">npm install chalk@4.1.0;</code>(working)</li>
        <li><code className="markcode">npm install [packagename]@[version];</code></li>
    </ul>
    <div className="Short-head">
        <h3> Uninstall npm Package </h3>
    </div>
    <p>If you Uninstall the package then write <code className="markcode">npm uninstall packagename;</code> or <code
        className="markcode">npm uninstall chalk;</code> then the package are removed
        from the directory and unistall.</p>

    <br />

    <table>
        <thead>
            <tr>
                <th className="title" style={{"borderRadius": "5px 0 0 0"}}>Module Name</th>
                <th className="link">Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="title" >Node Package Manager Website (Find Modules)</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://www.npmjs.com/"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title" >Chalk</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://www.npmjs.com/package/chalk"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title" >Validator</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://www.npmjs.com/package/validator"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>

            <tr>
                <td className="title" >Nodemon (Automatically Restart on file change)</td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://www.npmjs.com/package/nodemon"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
            <tr>
                <td className="title" >node-windows module (Used to make automatically run express.js in window)
                    <button type="button"> <a href="https://www.youtube.com/watch?v=obXr1NtSEOU" target="_blank">Video</a></button>
                </td>
                <td className="link btn"><button className="software-btn green">
                    <a href="https://www.npmjs.com/package/node-windows"
                        rel="nofollow" target="_blank"><i className="fas fa-link"></i></a>
                </button></td>
            </tr>
        </tbody>
    </table><br />

    <div className="heading2">
        <h3> npm Version Concept | How Version work? </h3>
    </div>
    <p><code className="markcode">version: (1.0.0)</code> version in any software is important rule it tell you about
        what are the bug are fixed in the version and what are the new things are introduce?,what are the function are
        removed in the new built version.</p>
    <CodeHighlight code={npmVersionConcept} language="javascript" />

    <div className="heading2">
        <h3> What is nodemon?
            <span style={{"float":"right","marginRight":"15px"}}>npm Package</span></h3>
    </div>
    <ul>
        <li>In start we have change the content or change something from the file then they not reflect live on the file.If we restart the node server then the file change content show in the browser.</li>
        <li>But the <code className="markcode">nodemon</code> is very helpful for this problem after install the nodemon package in the node.js then if you change any content in the file they reflect live on the server we don't
            restart the Server.</li>
    </ul>
    <CodeHighlight code={nodemoncode} language="javascript" />
</div>
<Footer />
<MoveTop />
</div>
)
}
</>
);
}
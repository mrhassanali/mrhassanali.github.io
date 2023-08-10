import React, { useState, useEffect } from "react";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import InnerHTML from "../plugin/InnerHTML";

import ContentList from "../plugin/ContentList";

const createReactApp= `npx create-react-app my-app       // build your default app
cd my-app                         // enter on the app directory
npm start                         // run the project
 						//Step 02
npm install -g create-react-app   // install global create-react-app
create-react-app -version         // check version of app
create-react-app projectName      // create app
cd my-app                         // enter on the app directory
npm start                         // run the project`;
const installationModule= `npm install -g nodemon;  // install nodemon globally
npm install node-modules;  // if node-module folder deleted
npm i react-router-dom@`;
const filestructure= `root_folder(Project Name)/
|-- node_modules(contain modules)/          
|-- Public/
|   &#96;-- index.html
|   |-- style.css
|   |-- manifest.json 
|   |-- robots.txt
|-- src/
|   |-- components/
|   |   &#96;-- header.jsx
|   |   &#96;-- footer.jsx
|   |   &#96;-- meta.jsx
|   &#96;-- index.js
|-- .gitignore
|-- Readme.md
|-- package-lock.json
&#96;-- package.json`;
const importModule= `// Display on the React
// As a Default when we used React we acquire the babel from Modern JS
// var React = require('react');
import React from 'react';
// Require for DOM Manipulation
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom/client';
// ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback Function');`;
const reactRender= `ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback(optional)');
ReactDOM.render(<h1>Hello</h1>,document.getElementById('root'));`;
const reactRender1= `const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);`;
const renderMulipleElement= `ReactDOM.render(
    <div>
        <h1> Hassan Ali </h1>
        <p>Text is Here...</p>
    </div>,
document.getElementById('root'));
					// Step 02
ReactDOM.render(
    [
        <h1> Hassan Ali </h1>,
        <p>Text is Here...</p>,
    ],
    document.getElementById('root')
);`;
const reactFragment= `ReactDOM.render(
    <React.Fragment>
        <h1> Hassan Ali </h1>
        <p>Text is Here...</p>
    </React.Fragment>,
    document.getElementById('root')
);`;
const reactFragment1= `ReactDOM.render(
    <>
        <h1> Hassan Ali </h1>
        <p>Text is Here...</p>
    </>,
    document.getElementById('root')
);`;
const reactJsChallenge1= `import React from 'react';
import ReactDOM from 'react-dom/client';
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <h1>Heading</h1>
    <p>Paragraph...</p>
    <ol>
        <li>Series Name - </li>
        <li>Series Name - </li>
        <li>Series Name - </li>
        <li>Series Name - </li>
        <li>Series Name - </li>
    </ol>
    </>
);`;
const expresstionJSX= `const root = ReactDOM.createRoot(document.getElementById('root'));
let name = "Hassan Ali";
// {} -> used for expression
root.render(
    <>
        <h1>Hi,{name}</h1>
        <p>Random Number is = {Math.floor(Math.random() * 100)}</p>
        <p><strong>Condition : </strong> {5 + 5}
        </p>
    </>
);`;
const templateLiteralsJSX= `const root = ReactDOM.createRoot(document.getElementById('root'));
let firstName = "Hassan";
let lastName = "Ali";
root.render(
    <>
        <h1>My Name is {&#96;&#36;{firstName} &#36;{lastName}&#96;}</h1>
    </>
);`;
const reactJsChallenge2= `function show() {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let ampm;
    if ((new Date().getHours()) > 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }
    root.render(
        <>
            <h1>Time = {&#96;&#36;{time} &#36;{ampm}&#96;}</h1>
            <h1>Date = {&#96;&#36;{date}&#96;}</h1>
        </>
    );
}
setInterval(show, 1000);

	//Step 02
const root = ReactDOM.createRoot(document.getElementById('root'));
function show() {
    let dt = new Date();
    root.render(
        <>
            <h1>Time = {&#96;&#36;{dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}&#96;}</h1>
            <h1>Date = {&#96;&#36;{dt.getDate()}/&#36;{dt.getMonth()}/&#36;{dt.getFullYear()}&#96;}</h1>
        </>
    );
}
setInterval(show, 1000);`;
const JSXAttribute= `const name = "Hassan Ali";
const img = "https://picsum.photos/400/300";
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1>My Name is {name}</h1>
        <img src={img} alt="randomImg" />
    </>
);`;
const cssStyle= `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //adding css file path

const name = "Hassan Ali";
const img = "https://picsum.photos/400/300";
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1 className='heading'>{name}</h1>
        <img src={img} alt="randomImg" />
    </>
);`;
const internalInlinecss= `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //adding css file path

const name = "Hassan Ali";
const img = "https://picsum.photos/400/300";
const css = {
    color: "green",
    fontSize: "30px"
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1 style={{ color: "red", textAlign: "center", textTransform: "uppercase" }}>{name}</h1>
        <h1 style={css}>Add Object for Inline CSS</h1>
        <div className="img">
            <img src={img} alt="randomImg" />
            <img src={img} alt="randomImg" />
            <img src={img} alt="randomImg" />
        </div>
    </>
);`;
const reactGreetingMsg= `const root = ReactDOM.createRoot(document.getElementById('root'));
const date = new Date();
let hour = date.getHours();
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) {
  greet = 'Good Morning';
}
else if (hrs >= 12 && hrs <= 17) {
  greet = 'Good Afternoon';
}
else if (hrs >= 17 && hrs <= 24) {
  greet = 'Good Evening';
}

root.render(
  <>
    <div className='container'>
      <div className='box'>Hi Sir, <span>{greet}</span></div>
    </div>
  </>
);`;
const functionalComponent= `import React from "react";
function Header() {
  return <h1>Hi Hassan</h1>;
}
export default Header;`;
const classBasedComponent= `import React from "react";
// React.Component is the React Library Component
// Header is the Name of Component
class Header extends React.Component {
  render() {
    return <h1>Hi Hassan</h1>;
  }
}
// export component name is header
export default Header;`;
const moduleExportFile= `let name = "Hassan Ali";
let Address = "M.Garh";
function ali() {
  console.log("Hi");
}
export default name;
//For multiple module
// multiple module is seprated by comma
export { Address, ali };
`;
const moduleImportFile= `import Name, { Address, ali } from "./App";
//Select all module from App.jsx that return as object
import * as objName from "./App";
// for printing you write {objName.ModuleName};`;
const reactArray= `   // <Method 01>
let a = new Array(5);
a = [1,2,3,4,5];
// <Method 02>
let a = new Array("Hassan","Ali","Khan","Balouch")
// <Method 03>
let a = ["Hassan","Ali","Khan"];
//ForEach Loop Print the Array Element
a.forEach(element =>console.log(element));`;
const DeleteModifyArray= `// <Method 01>
let a = [1,2,3,4,5];
console.log("Modify Element");
a[0]= 6;
console.log(a);
// <Method 02>
console.log("Delete Element")
delete a[4];
console.log(a);`;
const useStateHooks= `// State = The Name of your State
// setState = function that use to change the value of state
// initialValue = initial value show on the page
const[state,setState] = useState(InitialValue);
const color = "red";
const[state,setState] = useState(color);`;
const ParentContextAPI= `import React, { createContext } from "react"; // 01 : import createContext();
import ComponentA from "./ComponentA";
const FirstName = createContext(); // 02 : use CreateContext();
const ParentComponent = () => {
  return (
    <>
      <h1>Parent Component</h1>
{/* 03 Pass value to the component using Provider */}
  //    <FirstName.Provider value={{"Hassan Ali","2nd value"}}>
      <FirstName.Provider value={"Hassan Ali"}>
        <ComponentA />
      </FirstName.Provider>
    </>
  );
};
export default ParentComponent;
// 04 : Export the context
export {FirstName};`;
const ComponentBContextAPI= `import React, { useContext } from "react"; // 01 : import context
import ComponentC from "./ComponentC";
// 02 : import FirstName from parent
import { FirstName } from "./ParentComponent";
const ComponentB = () => {
  const fname = useContext(FirstName); // pass import value
  return (
    <> 
      <h1>Component B is Context is <u>{fname}</u></h1>
      <ComponentC />
    </>
  );
};
export default ComponentB;`;
const handlingComplexForm= `  const [username, setusername] = useState({
    user: "",
    password: "",
  });

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
// same as above
// const[value,name] = e.target;

    setusername((preValue) => {
      if (name === "users") {
        return {
          user: value,
          password: preValue.password,
        };
      } else if (name === "pass") {
        return {
          user: preValue.user,
          password: value,
        };
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  // input Event
  <input type="text" name="users" value={username.users} placeholder="Username"
  onChange={inputEvent} />`;
const objectState =`  // creating object in the states
const [name, setDetail] = useState({
  name: "",
  fatherName: "",
  emailAddress: "",
  phoneNumber: "",
});

// input Event
const inputEvent = (e) => {
  // const [value, name] = e.target;
  const value = e.target.value;
  const name = e.target.name;
// name :: take the name of input box
// if name of box is matched then value should be saved
  setDetail((preValue) => {
    if (name === "name") {
      return {
        name: value,
        fatherName: preValue.fatherName,
        emailAddress: preValue.emailAddress,
        phoneNumber: preValue.phoneNumber,
      };
    } else if (name === "fatherName") {
      return {
        name: preValue.name,
        fatherName: value,
        emailAddress: preValue.emailAddress,
        phoneNumber: preValue.phoneNumber,
      };
    } else if (name === "emailAddress") {
      return {
        name: preValue.name,
        fatherName: preValue.fatherName,
        emailAddress: value,
        phoneNumber: preValue.phoneNumber,
      };
    } else if (name === "phoneNumber") {
      return {
        name: preValue.name,
        fatherName: preValue.fatherName,
        emailAddress: preValue.emailAddress,
        phoneNumber: value,
      };
    }
  });
};
//prevent form to refresh
const handleForm = (e) => {
  e.preventDefault();
};


// input Events

<input type="text" name="name"
value={name.name} onChange={inputEvent} id=""/>

`;
const shortstateMethod=`  // creating object in the states
const [name, setDetail] = useState({
  name: "",
  fatherName: "",
  emailAddress: "",
  phoneNumber: "",
});

// input Event
const inputEvent = (event) => {
  const { name, value } = event.target;

  setDetail((preValue) => {
    return {
      // preValue Return the obj that match to name and value
      ...preValue,
      [name]: value,
    };
  });
};
//prevent form to refresh
const handleForm = (e) => {
  e.preventDefault();
};


<form onSubmit={handleForm}>
<h1>Login Details</h1>
<div>
  <label>Name : </label>
  <input
    type="text"
    name="name"
    value={name.name}
    onChange={inputEvent}
    id=""
  />
</div>
<div>
  <label>Father Name : </label>
  <input
    type="text"
    name="fatherName"
    value={name.fatherName}
    onChange={inputEvent}
  />
</div>
<div>
  <label>Email Address : </label>
  <input
    type="email"
    name="emailAddress"
    value={name.emailAddress}
    onChange={inputEvent}
  />
</div>
<div>
  <label>Phone Number : </label>
  <input
    type="text"
    name="phoneNumber"
    value={name.phoneNumber}
    onChange={inputEvent}
  />
</div>
<button type="submit">Submit</button>
</form>`;
const InstallRedux= `npm i redux react-redux redux-thunk;
//redux-thunk  = is the middleware`;
const ActionRedux= `// When user click on the button then increment value
return{
     type:'Increment',
     payload:num
}
// When click the decrement value
return{
     type:'Decrement',
     payload:num
}`;
const ActionCreatorRedux= `export const incNumber = ()=>{
    return{
        type:'Increment',
        payload:num
    }
}`;
const ReducerRedux= `const initialState = 0;
const changeTheNumber = (state=initialState,action)=>{
    switch(action.type){ // using swith you can also use if else for validation
        case "Increment": return state + action.payload;
        case "Decrement": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;`;
const StoreRedux= `import createStore from "redux";
//import {createStore} from "redux";
const store = createStore(rootReducer);`;
const folderStructure= `src/
|-- components/
&#96;-- states/
    |-- action/ (initiate action)
    |   &#96;-- index.js
    |-- reducer/ (How to Perform Action?)
    |    &#96;-- index.js (Combine Reducers)
    |    &#96;-- UpDown.js (Increment Reducer Function)
    &#96;-- index.js (Add All Action)
    &#96;-- store.js`;
// const = ``;
const Content = [  
    {
        "name": `Installation`,
        "link": "#install-reactjs"
    },  
    {
        "name": `JSX`,
        "link": "#jsx"
    },  
    {
        "name": `React Components`,
        "link": "#components"
    },  
    {
        "name": `Props`,
        "link": "#props"
    }, 
    {
        "name": `React Hooks`,
        "link": "#hooks"
    },
    {
        "name": `Handling Complex Form in React`,
        "link": "#complex-state"
    },
    {
        "name": `Context API`,
        "link": "#contextapi"
    },
    {
        "name": `React Forms`,
        "link": "#forms"
    },
    {
        "name": `Redux`,
        "link": "#redux"
    },
];


export default function ReactSheet() {
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
<>
            
<br/>
            <br/>
<div className="contentListBox">
   <div className="box-header">
       Content List
   </div>
   <ul className="list">
       {
           Content.map((element, index) => {
               return (<ContentList key={index} data={element}  />)
           })
       }

   </ul>
</div>

            <div>

                <div className="container">

                <div className="heading2">
                    <h3>What is React? </h3>
                </div>
<p>A JavaScript library for building user interfaces. <br/>
The user interface (U1) is the point of human-computer interaction
and communication in a device. This can include display screens,
keyboards, a mouse and the appearance of a desktop.</p>

<h1 className="folderStyle">Is React JS Library or Framework?</h1>
<ul>
	<li>React is not a framework. React is a JavaScript library for building user
interfaces.</li>
	<li>It is also known as ReactJS and React.js, so don't get confused if you read
different notation in different places.</li>
<li>By using React we create Awasome UI.</li>
</ul>

<h2 className="folderStyle">About React</h2>
<ul>
	<li>Component based approach</li>
<li>DOM updates are handle gracefully. </li>
<li>Reusable Code</li>
<li>React is designed for speed, spèed of implementing the application
simplicity and scalability.</li>
</ul>
<h2 className="folderStyle">Why React?</h2>
<ul>
	<li>Created and maintained by Facebook.</li>
	<li>it has a huge community on github.</li>
	<li>Component based Architecture.</li>
</ul>

<div className="heading2">
    <h3>Introduction </h3>
</div>

<ul>
	<li>React is framework of the JavaScript Language. Some People tell this is also a library of JS.</li>
	<li>React is a JavaScript library for building user interfaces.</li>
	<li>React is used to build single-page applications.</li>
	<li>React allows us to create reusable UI components.</li>
</ul>


<h2 className="folderStyle">Chrome Extensions : </h2>
	<p>Install Visual Studio Code Extension blow</p>
	<ul>
		<li><kbd>Thunder Client</kbd> for test api.(Rather then use Postmen)</li>
		<li><kbd>Prettier</kbd> for code formatter.</li>
		<li><kbd>Live Server</kbd> for Show preview of code in browser.</li>
		<li><kbd>Auto Rename Tag</kbd> for rename tag in html.</li>
		<li><kbd>Bracket Pair Colorizer</kbd> for add color to bracket for identification.</li>
		<li><kbd>ES7 React/Redux Snippets</kbd> show snippets.</li>
	<li>Install Extension in chrome <kbd>React Developer Tools</kbd> is used for check react website (module th.</li>
	</ul>


<div className="heading2" id="install-reactjs">
    <h3>Installation </h3>
</div>

<ol type="1">
	<li>First Install the <kbd>node.js</kbd> and NPM.</li>
	<li>Install Visual Studio Code/Sublime/Atom/Brackets</li>
	<li>Install React from terminal</li>
	<li>Check the node and npm version in powershell that install node or not. <code className="markcode">node --version</code> and <code className="markcode">npm --version</code></li>
</ol>

<div className="heading2">
    <h3>Create React App </h3>
</div>
<p>Open vs code Terminal or powershell(recomanded) and run blow command;</p>

<CodeHighlight code={createReactApp} language="javascript" />

<div className="heading2">
    <h3>Installation of Modules</h3>
</div>
<CodeHighlight code={installationModule} language="javascript" />


<div className="heading2">
    <h3>Folder Structure</h3>
</div>
<CodeHighlight code={<InnerHTML string={filestructure} />} language="treeview" />

<div className="heading2">
    <h3>Import Module</h3>
</div>
<CodeHighlight code={importModule} language="javascript" />

<div className="heading2" id="jsx">
    <h3>JSX in React </h3>
</div>
<ul>
	<li>JSX stands for JavaScript XML.</li>
	<li>JSX allows us to write HTML in React.</li>
	<li>JSX makes it easier to write and add HTML in React.</li>
	<li>You can see the by visit by babel https://babeljs.io/repl</li>
	<li>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any <code className="markcode">createElement()</code>  and/or <code className="markcode">appendChild()</code> methods. </li>
	<li>JSX converts HTML tags into react elements.</li>
</ul>

<div className="heading2">
    <h3>React Render HTML </h3>
</div>
<ul>
	<li>Render function is used to display the React Render HTML.</li>
	<li>Without render function we create the element in javascript then append those element in the specified element.</li>
	<li>Render Element only take one element but if you pass the parameter then they take multiple value.</li>
</ul>
<CodeHighlight code={reactRender} language="javascript" />
<p>In React -18 Render is use following as;</p>
<CodeHighlight code={reactRender1} language="javascript" />

<div className="heading2">
    <h3>Render Multiple Elements inside <code className="markcode">ReactDOM.render()</code></h3>
</div>
<ul>
	<li>You can render multiple element by adding all element in only one parent and parent is pass as one element in the render.</li>
</ul>
<CodeHighlight code={renderMulipleElement} language="javascript" />

<div className="heading2">
    <h3>React Fragment </h3>
</div>
<ul>
	<li>By pass the multiple element in render function, we add multiple element in div but the div is add itself in the code,then we used the <code className="markcode">&lt;React.fragment&gt; &lt;/React.fragment&gt;</code> </li>
</ul>

<CodeHighlight code={reactFragment} language="javascript" />
<ul>
<li>Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.</li>
<li>A fragment looks like an empty HTML tag: <code className="markcode">&lt;&gt;&lt;/&gt;</code>.</li>
</ul>

<CodeHighlight code={reactFragment1} language="javascript" />

<div className="heading2">
    <h3>React JS Series Challenge #1 </h3>
</div>
<ol>
	<li>Create a react app from scratch</li>
	<li>Add one h1 element in it</li>
	<li>Add one p element in it</li>
	<li>Add list of fav 5 Netflix Series in it using an order list.</li>
</ol>
<CodeHighlight code={reactJsChallenge1} language="javascript" />


<div className="heading2">
<h3>  Expressions in JSX
    <span>
        <a href="https://youtu.be/LBpUF-OppB4?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&t=240" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<ul>
	<li>In index.js we used html in rander function, but if we add the again javascript in the html element then we used expressions in JSX.</li>
	<li>You can put any valid JavaScript expression inside the curly braces in JSX</li>
</ul>
<CodeHighlight code={expresstionJSX} language="javascript" />

<div className="heading2">
    <h3>Template Literals in JSX </h3>
</div>

<CodeHighlight code={templateLiteralsJSX} language="javascript" />

<div className="heading2">
    <h3>JSX Challenge #2 </h3>
</div>
<ol>
	<li>Create a react app from scratch</li>
	<li>Add one h1 element ex. Your Name</li>
	<li>Add one p element in it with Current Date</li>
</ol>
<CodeHighlight code={reactJsChallenge2} language="javascript" />

<div className="heading2">
    <h3>JSX Attributes</h3>
</div>
<ul>
	<li>JSX attributes are start with small letter then another word is capital. means that JSX Attributes are written in camel case.</li>
	<li>If you not written in anything in the Tag then you can close the tag <strong>&quot;Self Closing Tag&quot;</strong> e.g Image Tag <code className="markcode">&lt;img /&gt;</code> </li>
</ul>
<CodeHighlight code={JSXAttribute} language="javascript" />

<div className="heading2">
    <h3>CSS Styling &amp; Importing CSS Files in React JS</h3>
</div>
<p>For adding the class in the element, you can use <code className="markcode">className=&quot;&quot;</code>attribute. </p>

<CodeHighlight code={cssStyle} language="javascript" />

<div className="heading2">
    <h3>Google fonts in React</h3>
</div>
<ul>
	<li>first copy the link from google website then add the link in <code className="markcode">public/index.html</code> file header. </li>
</ul>

<div className="heading2">
    <h3>Internal CSS &amp; Inline CSS Styling </h3>
</div>
<ul>
	<li>You can add inline css in two ways;</li>
	<ol>
		<li>Adding Style attribute then pass the Object style parameter.</li>
		<li>Adding Style attribute in element and pass the value in element throught parentheses.</li>
	</ol>
	<li>But Remember you can not add the hypen b/w the css property.</li>
</ul>
<CodeHighlight code={internalInlinecss} language="javascript" />

<div className="heading2">
    <h3>React Show Greeting Message </h3>
</div>
<CodeHighlight code={reactGreetingMsg} language="javascript" />

<div className="heading2" id="components">
<h3> React Components
    <span>
        <a href="https://youtu.be/YcXVT2udeu8?t=381" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
         <a href="https://www.w3schools.com/react/react_components.asp" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<p><strong>Conditions : </strong></p>
<ul>
	<li>Write component file/Name First Letter is capital.</li>
	<li>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</li>
	<li>You can make seprate file of component in the extension .js or jsx.</li>
</ul>

<h3 className="folderStyle">Two Types of Component</h3>
<ol>
	<li>Function Component (Take Props and Return HTML)</li>
	<li>Class Component</li>
</ol>

<h2>Function Component</h2>
<ul>
	<li>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</li>
	<li>There is no render method used in functional components.</li>
	<li>Simple Component</li>
	<li>use Functional as much as possible.</li>
	<li>Mainly responsible for UI.</li>
    <li>It is usually like that the ES6 and javascript simple function.</li>
</ul>
<CodeHighlight code={functionalComponent} language="javascript" />

<h2>Class Based Component</h2>
<p>In Class component we create a class and class extend the react component.</p>
<ul>
	<li>A class component requires you to extend from React.</li>
	<li>Component and create a render function which returns a React element. </li>
	<li>You can maintain own private data through the states.</li>
	<li>Provide lifecycle hooks.</li>
    <li>It usually depend on the ES6 Class.</li>
</ul>
<CodeHighlight code={classBasedComponent} language="javascript" />

<h2 id="props">What is Props?</h2>
<p>"Props" is a special keyword in React, which stands for properties and is
being used for passing data from one component to another.</p> <br/>
<p>In Props the only Parent(Sender) can change the data only.Props are used to pass data from parent components to child components.These props can be updated only by the parent component. It is read-only for child components.</p>


<h2><code className="markcode">constructor()</code> in React component:</h2>
<p>Constructor is run before the render in the DOM.</p>
<h2><code className="markcode">super()</code> in React constructor:</h2>
<p>Super is a keyword in JavaScript and is used to call super or parent class in the hierarchy. React class extends React Component with ES6 syntax.</p>



<div className="heading2">
<h3>React Component Lifecycle </h3>
</div>
<p>The series of events that happen from the mounting ofa React component to its
Unmounting.</p>
<ul>
<li><b>Mounting </b>- Birth of your component (comming in the App)</li>
<li><b>Update </b>- Growth of your component (changing,growth)</li>
<li><b>Unmount</b> - Death of your component</li>
</ul>

<h3 className="folderStyle">Methods of React Components</h3>
<ol>
 <li> The <code className="markcode">render()</code> method is used to render HTML of the component in react. This method is required for a class based component to render the DOM. It during the mounting and updating of your component. render() method should be pure ie you cannot modify state inside it!</li>

<li> The <code className="markcode">componentDidMount()</code> method runs after the component output has been rendered to the DOM. mean that after the render() method they can run. this is used mostly in fetch data.</li>
<ul>
    <li>Load data from a remote endpoint, this is a good place.Using Fetch API,async/await.</li>
    <li>You can set the states</li>
</ul>
<li> The <code className="markcode">componentDidUpdate()</code> method is invoked as soon as the updating
happens. The most common use case for the componentDidUpdate() method
is updating the DOM in response to prop(we said that props cann't change but if the parent can change the props that then the component update.) or state changes. is invoked immediately after updating occurs.</li>


<CodeHighlight code={`componentDidUpdate(prevProps, prevState, snapshot);
//You may call setState() immediately in componentDidUpdate()`} language="javascript" />

<li> The <code className="markcode">componentWiIIUnmount()</code> lifecycle method is called just before the
component is unmounted and destroyed. Usually used to perform cleanups</li>
</ol>
<img src="../images/react lifecycle.png" style={{"width":"99%","height":"100%"}}/>

<div className="heading2">
<h3> Module Import &amp; Export in React
    <span>
        <a href="https://youtu.be/b7JJCGXlACM?t=568" target="_blank" rel="noopener"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<ul>
	<li>If you export any variables,function, then you can used <code className="markcode">export default variableName;</code> </li>
	<li>But Remember the export default is used only one variables.</li>
	<li>For import module you can write <code className="markcode">import App from './fileName';</code> app is the variable you can accept the module in it.</li>
</ul>
<p><strong>Export File</strong></p>
<CodeHighlight code={moduleExportFile} language="javascript" />
<p><strong>Import File</strong></p>

<CodeHighlight code={moduleImportFile} language="javascript" />
<div className="heading2">
<h3> React Props
    <span>
        <a href="https://www.w3schools.com/react/react_props.asp" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/watch?v=HRhJVGjIraE" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<ul>
	<li>Props are arguments passed into React components.</li>
	<li>Props are passed to components via HTML attributes.</li>
</ul> <br/>
<center><img src="../images/react-props.png" alt="React Props"/></center>

<div className="heading2">
<h3> Understanding Props and PropTypes in React 
    <span>
        <a href="https://www.youtube.com/watch?v=xvm3X1oyTL8" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/watch?v=HRhJVGjIraE" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>

<div className="heading2">
    <h3>React Array</h3>
</div>
<p>Same as JavaScript Array.</p>
<p>JavaScript Array Creating Methods:</p>
<CodeHighlight code={reactArray} language="javascript" />

<div className="heading2">
<h3> How to Delete &amp; Modify Array?</h3>
</div>
<p>In javaScript when you give the other value in index then value should be updated on the Array and if you can delete the element in the array then simply type delete and pass the index of the
array.</p>
<CodeHighlight code={DeleteModifyArray} language="javascript" />

<div className="heading2" id="hooks">
<h3> React Hooks
    <span>
        <a href="https://www.w3schools.com/react/react_hooks.asp" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<ul>
<li>Hooks are the new feature introduced in the React 16.8 version.</li>
<li>It allows you to use state and other React features without writing a class. </li>
<li>Hooks are the functions which "hook into" React state and lifecycle features from function components.</li>
<li>It does not work inside classes.</li>
<li>Hooks should always be used at the top level of the React functions.</li>
<li>Node version 6 or above. NPM version 5.2 or above</li>
</ul>
<hr/>
<ol type="1">
    <li>useState</li>
    <li>Context</li>
    <li>useLocation</li>
    <li>useParams</li>
    <li>useRef</li>
</ol>
<div className="heading2" id="usestate">
<h3> useState
    <span>
        <a href="https://www.w3schools.com/react/react_usestate.asp" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<CodeHighlight code={useStateHooks} language="javascript" />
<div className="heading2" id="contextapi">
<h3> React ContextApi
    <span>
        <a href="https://reactjs.org/docs/context.html" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>

<p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
<p><strong>Uses:</strong></p>
<ul>
<li>Global state</li>
<li>Theme</li>
<li>Application configuration</li>
<li>Authenticated user name</li>
<li>User settings</li>
<li>Preferred language</li>
<li>A collection of services</li>
</ul>
<p>In contextApi the mainly three things;</p>
<ol>
    <li><code className="markcode">React.createContext()</code> - Create the Context</li>
    <li><code className="markcode">Context.Provider</code>      - Send Value Mean provide</li>
    <li><code className="markcode">Context.Consumer</code>      - User that get the provider value</li>
</ol>
<p><strong>ParentComponent.js (Add ContextAPI)</strong></p>

<CodeHighlight code={ParentContextAPI} language="javascript" />
<p>In this multiple component are present in the like <code className="markcode">ComponentA.js</code>,<code className="markcode">ComponentB.js (import)</code>,<code className="markcode">ComponentC.js</code>. The main difference is no need to pass the value parent to down you can only send to the specific modules values.</p>

<p><strong>ComponentB.js (Import ContextAPI)</strong></p>

<CodeHighlight code={ComponentBContextAPI} language="javascript" />

<div className="heading2">
<h3> useParams
    <span>
        <a href="https://www.geeksforgeeks.org/reactjs-useparams-hook/" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<p><code className="markcode">useParams</code> is used in the <b><u><i>react-dom-router</i></u></b> for the url in paramameter. <br/>
Sometime we access the parameter from the current route this use the useParamas. <br/>
<b><u>For Using useParams you can install First react-dom-router</u></b></p>


<div className="heading2">
<h3> useLocation
    <span>
        <a href="https://www.youtube.com/watch?v=fqIZnugmDhY" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<p><code className="markcode">useLocation</code> The useLocation hook returns the location object that represents the current URL.</p>

<div className="heading2">
<h3>useRef </h3>
</div>
<p><strong>What you can use in dom to handle the functional component?</strong> <br/>
We can use the <code className="markcode">useRef</code> hooks. It can be used to access a DOM element directly.</p>
<ul>
    <li>useRef() only returns one item. It returns an Object called current.</li>
    <li>When we initialize useRef we set the initial value: useRef(0).</li>
</ul>


<div className="heading2">
<h3> Events
    <span>
        <a href="https://www.w3schools.com/react/react_events.asp" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<div className="heading2" id="forms">
<h3> Forms
    <span>
        <a href="https://www.w3schools.com/react/react_forms.asp" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
        <a href="https://reactjs.org/docs/forms.html" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>

<div className="heading2" id="complex-state">
<h3> Handling Complex Form in React
    <span>
    	<a href="https://www.youtube.com/watch?v=ECbcqkqtkTk" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
        <a href="https://youtu.be/1kK5HCCVo0E?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&t=308" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<p>In the States we can store the object on it.</p>
<h3>Method 01</h3>
<CodeHighlight code={handlingComplexForm} language="javascript" />
<h3>Method 02</h3>
<CodeHighlight code={objectState} language="javascript" />
<h3 style={
    {
        color:"green"
    }
}>Method 03 - Short Method</h3>
<CodeHighlight code={shortstateMethod} language="javascript" />

<div className="heading2" id="redux">
<h3> Introduction to Redux
    <span>
        <a href="#" target="_blank" rel="noreferrer"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div>
<ul>
    <li>When a JavaScript application grows big, it becomes difficult for the user to manage its state.</li>
    <li>Redux solves this problem by managing application's state with a single global object called Store.</li>
    <li>Makes Testing very easy.</li>
    <li>Consistency throughout the application</li>
</ul>
<p><strong><u>ACTIONS & REDUCERS</u></strong></p>
<p>An <u><b>action</b></u> is a plain object that describes the intention to cause change
A <u><b>reducer</b></u> is a function that determines changes to an application's state. retum the new state and tell the store how to do.
It uses the action it receives to determine this change.</p>
<img src="https://miro.medium.com/max/638/1*f9b-MoMCZM8agqJrXcmymQ.jpeg"/>

<CodeHighlight code={InstallRedux} language="javascript" />

<p><strong>Normally in React How to pass data?</strong></p>
<p>The data in React always flows from parent to child components which makes it unidirectional.</p>

<ol type="1">
    <li>Action</li>
    <li>Reducer</li>
    <li>Store</li>
</ol>

<h2>1.Action</h2>
<p>Actions are plain JavaScript objects that have a <u><b>type field</b></u>.
Actions only tell what to do, but they don't tell how to do.</p>

<CodeHighlight code={ActionRedux} language="javascript" />

<h2>1.1 Action Creator</h2>
<p>Pure Function which create an action.</p>

<CodeHighlight code={ActionCreatorRedux} language="javascript" />
<p>We can say that above the increment and decrement function can perform in the redux is the reducer.</p>

<h2>2. Reducer</h2>
<p>Reducers are functions that take the <b>current state</b> and an <b>action</b> as arguments, and return a <b>new state</b> result.</p>

<CodeHighlight code={ReducerRedux} language="javascript" />
<h2>3. Store</h2>
<p>The Redux store brings together the <b>state</b>, <b>actions</b>, and <b>reducers</b> that make up your app.
It's important to note that you'll only have a single store in a Redux application. In Simple Way we can merge all state in the Store. <br/>
Every Redux store has a single root reducer function.</p>
<CodeHighlight code={StoreRedux} language="javascript" />

<h2>Redux Principle</h2>
<ul>
    <li><strong>Single source of Truth</strong><br/>
The global state of your application is stored as an object inside a <mark>single store</mark>.</li>
<li><strong>State is Read-Only</strong><br/>
The only way to change the state is to
<mark>dispatch</mark> an action.</li>
<li><strong>Immutability, One-way data flow,Predictability of outcome</strong><br/></li>
<li><strong>Changes are Made with Pure
Reducer Functions</strong><br/></li>
</ul>
<div className="heading2">
    <h3>Folder Structure</h3>
</div>
<CodeHighlight code={<InnerHTML string={folderStructure} />} language="treeview"/>

                </div>
                <MoveTop />
                <Footer />
            </div>
</>)}
        </>
    )
}
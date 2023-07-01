import './App.css';
import {
  createBrowserRouter,
  // createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Blockchain} from "./components/cheatsheet/index"
//cheatsheet
import HTML from "./components/cheatsheet/Html";
import JavaScript from './components/cheatsheet/JavaScript';
import Nodejs from './components/cheatsheet/Nodejs';
import PHP from './components/cheatsheet/PHP';
import ReactSheet from './components/cheatsheet/ReactSheet';
import SNA from './components/cheatsheet/SNA';
import Software from './components/cheatsheet/Software';
import OOP from './components/cheatsheet/OOP';
import Wordpress from './components/cheatsheet/Wordpress';
import Javajdbc from './components/cheatsheet/Javajdbc';
import WebEngineering from './components/cheatsheet/WebEngineering';
import Bootstrep from './components/cheatsheet/Bootstrep';
import Database from './components/cheatsheet/Database';
import DatabaseTheory from './components/cheatsheet/DatebaseTheory';
import AndroidDevelopment from './components/cheatsheet/AndroidDevelopment';
import Java from './components/cheatsheet/Java';
import ErrorPage from './components/ErrorPage';
// import Blockchain from './components/cheatsheet/Blockchain';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, },
      {
        path: "/html",
        element: <HTML />,
      },
      {
        path: "/javascript",
        element: <JavaScript />
      },
      {
        path: "/nodejs",
        element: <Nodejs />
      },
      {
        path: "/bootstrep",
        element: <Bootstrep />
      },
      {
        path: "/php",
        element: <PHP />
      },
      {
        path: "/blockchain",
        element: <Blockchain />
      },
      {
        path: "/java",
        element: <Java />
      },
      {
        path: "/database",
        element: <Database />
      },
      {
        path: "/database-theory",
        element: <DatabaseTheory />
      },
      {
        path: "/ReactSheet",
        element: <ReactSheet />
      },
      {
        path: "/system-and-network-administration-window",
        element: <SNA />
      },
      {
        path: "/Web-Engineering",
        element: <WebEngineering />
      },
      {
        path: "/jdbc",
        element: <Javajdbc />
      },
      {
        path: "/software",
        element: <Software />
      },
      {
        path: "/wordpress",
        element: <Wordpress />
      },
      {
        path: "/object-oriented-programming",
        element: <OOP />
      },
      // {
      //   path: "/object-oriented-analysis-and-design",
      //   element: <OOAD />
      // },
      {
        path: "/android-development",
        element: <AndroidDevelopment />
      }
    ]
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

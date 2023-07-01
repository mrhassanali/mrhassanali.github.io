import React, { useEffect, useState } from "react";
import Spinner from "../plugin/Spinner";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";

const htmldoctype = `<!DOCTYPE html>`;
const htmlmeta = `<head>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`;
const htmlfavicon = `<link rel= "icon" type= "image/x-icon" href= "favicon.ico">
<link rel= "icon" href="demo_icon.gif " type= "image/gif" sizes= "16x16">
    //Chrome,Opera browser,Firefox,edge,internet explore not support sizes`;
const htmltitle = `<title> </title>`;
const htmlparagraph = `<p spellcheck="true"> Hello World! </p>`;
const htmlattribute = `<p translate="no"> Hello World! </p>`;
const htmlmarquee = `<marquee> </marquee>`;
const htmlnav = `<nav> </nav>`;
const htmlscript = `<script> </script>`;
const htmlnoscript = `<script>
document.write("Hello World!")
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>`;
const htmlstyle = `<style>
p{
    background-color:bold;
}
</style>`;
const htmlstrike = `<p><s>Only 50 tickets left!</s></p>
<p><strike>Only 50 tickets left!</strike></p>`;
const htmlbold = `<p> Bold is : <b> Used to Bold the text </b></p>`;
const htmlstrong = `<strong> This text is important!</strong>`;

const htmlunderline = `<p>  <samp>File not found. <br/>Press F1 to continue </samp>  </p>`;
const htmlsub = `<p> sub is : Name<sub>text</sub></p>`;
const htmlsup = `<p> sub is : Name<sup>text</sup></p>`
const htmldiv = `<div> </div>
<span> </span>`;
const htmlsummarydetails = `<style>
details>summary{
	background-color:#f2f2f2;
	color:black;
	font-size:20px;
	cursor:pointer;
	padding:6px;
}
details>p{
	background-color:green;
	color:white;
	padding:12px;
	margin:0;
}
</style>
<h1>The summary element</h1>

<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting
  attractions,  international pavilions,  special events.</p>
</details>`;
const htmlanchor = `//target = "_blank"," _parent","_self"," _top";
<a href="url" target="_blank" ></a>`;
const htmlabbr = `<abbr title="name">GOOGLE</abbr>`;
const htmladdress = `<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.
Visit us at:<br/>
Example.com<br/>
Box 564, Disneyland<br/>
USA
</address>`;
const htmlarticle = `<article></article>`;
const htmlaside = `<aside></aside>`;
const htmlsection = `<section>
<h2>WWF History</h2>
<p>The World Wide Fund for Nature (WWF) is an international organization working on
issues regarding the conservation, research and restoration of the environment,
formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>
____________________________________________________________________________________
<section>
<h2>WWF's Symbol</h2>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF
originated from a panda named Chi Chi that was transferred from the Beijing Zoo
to the London Zoo in the same year of the establishment of WWF.</p>
</section>`;
const htmlsource = `<audio controls>
<source src="horse.ogg" type="audio/ogg">
<source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
__________________________________________________________________________________
<video width="320" height="240" controls>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
__________________________________________________________________________________
<picture>
<source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
<source media="(min-width:465px)" srcset="img_white_flower.jpg">
<img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>`;
const htmlaudio = `//controls is attribute is a boolean attribute.
// Play,Pause,Seeking,Volume
<audio controls>
<source src="horse.ogg" type="audio/ogg">
<source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>
____________________________________________________________________________________
//For autoplay music

<audio controls autoplay>
<source src="horse.ogg" type="audio/ogg">
<source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>
____________________________________________________________________________________
//For autoplay muted

<audio controls muted>
<source src="horse.ogg" type="audio/ogg">
<source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>
____________________________________________________________________________________
//src :  attribute specifies the location (URL) of the audio file.
<audio src="horse.ogg" type="audio/ogg">
Your browser does not support the audio tag.
</audio>`;
const htmlvideo = `<video width="320" height="240" controls>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
____________________________________________________________________________________
//autoplay: the video will automatically start playing.
<video width="320" height="240" controls autoplay>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
____________________________________________________________________________________
/*controls: is used for PlayPause,Seeking,Volume,Fullscreen toggle,
Captions/Subtitles  (when available),Track (when available)*/

<video width="320" height="240" controls autoplay>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
____________________________________________________________________________________
/*loop: Specifies that the video will start over again, every time it is finished*/

<video width="320" height="240" controls loop>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
____________________________________________________________________________________
/*muted:  is used to Audio output of the video should be muted.*/

<video width="320" height="240" controls muted>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>

____________________________________________________________________________________
/*poster:  Specifies an image to be shown while the video is
downloading, or until the user hits the play button*/

<video width="320" height="240" controls poster="/images/w3html5.gif">
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>`;
const htmlposter = `<video src="file" poster="any.png"></video>`;
const htmlpicture = `<picture>
<source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
<source media="(min-width:465px)" srcset="img_white_flower.jpg">
<img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>`;

const website = 'http://localhost:3000';

const cssimg = `img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    object-position: 80% 100%;
  }`;
const cssresponsiveimg = `img {
    max-width: 100%;
    height: auto;
}`;
const csscenterimg = `img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    //same as margin:0 auto;
    width: 50%;
  }`;
const csspositionimg = `<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            position: relative;
        }

        .topright {
            position: absolute;
            top: 8px;
            right: 16px;
            font-size: 18px;
        }

        .topleft {
            position: absolute;
            top: 8px;
            left: 16px;
            font-size: 18px;
        }

        .center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 18px;
        }

        .bottomright {
            position: absolute;
            bottom: 8px;
            right: 16px;
            font-size: 18px;
        }

        .bottomleft {
            position: absolute;
            bottom: 8px;
            left: 16px;
            font-size: 18px;
        }

        .bg {
            background-color: green;
            color: white;
            padding: 10px;
            border-radius: 5px;
        }

        img {
            width: 100%;
            height: auto;
            opacity: 0.3;
        }
    </style>
</head>
<body>
    <div className="container">
        <img src="img_5terre_wide.jpg" alt="Cinque Terre" width="1000" height="300">
        <div className="bg topleft">Top Left</div>
        <div className="bg topright">Top Right</div>
        <div className="bg center">Top Right</div>
        <div className="bg bottomright">Bottom Right</div>
        <div className="bg bottomleft">Bottom Right</div>
    </div>
</body>
</html>`;

const cssfilterproperties = `.blur       { filter: blur(4px);         }
.brightness { filter: brightness(250%);  }
.contrast   { filter: contrast(180%);    }
.grayscale  { filter: grayscale(100%);   }
.huerotate  { filter: hue-rotate(180deg);}
.invert     { filter: invert(100%);      }
.opacity    { filter: opacity(50%);      }
.saturate   { filter: saturate(7);       }
.sepia      { filter: sepia(100%);       }
.shadow     { filter: drop-shadow(8px 8px 10px green);}
`;
const htmlsvg = `<svg width="100" height="100">
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

Visit For SVG Tutorials : https://www.w3schools.com/graphics/svg_intro.asp
`;

const htmlblockquote = `//cite: Source of quotes Url is placed
<blockquote cite="url" >
For 50 years, WWF has been protecting the future of nature. The world's leading
conservation organization, WWF works in 100 countries and is supported by
1.2 million members in the United States and close to 5 million globally.
</blockquote>

<p>Name:<q>Hassan Ali</q>.</p>
`;
const cssbutton = `<button type="button" > </button>

/*disabled: It specifies that the button should be disabled.
A disabled button is unusable and un-clickable.*/
<button type="button" disabled> Diabled Button </button>`;
const htmlformbutton = `//form:Form Submit Button
<button type="submit" form="form1" value="Submit">Submit Form Button </button>`;
const htmlformaction = `<button type="submit" formaction="/action_page2.php" >Submit to Another Page Button
</button>`;
const htmlformenctype = `<button type="submit">Submit</button>
<button type="submit" formenctype="text/plain">Submit to Another Page Button
</button>`;
const htmlformmethod = `<button type="submit">Submit</button>
<button type="submit" formmethod="post">Submit to Another Page Button
<button type="submit" formmethod="get|post">Submit to Another Page Button
</button>`;
const htmlformtarget = `<button type="submit" formtarget = "_blank" >Submit to new Window </button>
<button type="submit" formtarget = "_self" >Submit Loads the same </button>
<button type="submit" formtarget = "_parent" >Loads the response in the parent frame</button>
<button type="submit" formtarget = "_top" >Loads the response in the full body of the window</button>
<button type="submit" formtarget = "framename" >Loads the response in a named iframe</button>`;
const htmlname = `<button type="submit" name="hassan" >Name of button</button>`;
const htmltype = `<button type="button" name="reset"  >Button</button>
<button type="reset" value="Reset" >Reset</button>
<button type="submit" value="submit" >Submit</button>`;
const htmlcaption = `<table>
<caption>My savings</caption>
<tr>
  <th>Month</th>
  <th>Savings</th>
</tr>
<tr>
  <td>January</td>
  <td>$100</td>
</tr>
</table>`;
const htmlcode = `<code> </code>`;
const htmlpre = `<pre>
    <code>

    </code>
</pre>`;
const htmlsamp = `<p><samp>File not found.<br>Press F1 to continue</samp></p>`;
const htmlbdo = `<p><bdo dir="rtl">Hassan Ali</bdo></p>  //Right to Left Direction
<p><bdo dir="ltr">Hassan Ali</bdo></p>  //Left to Right Direction`;
const htmlkbd = `<style>
    kbd{
    background-color:#f2f2f2;
    border:1px dotted black;
    padding:5px;
    }
</style>
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text (Windows).</p>
<p>Press <kbd>Cmd</kbd> + <kbd>C</kbd> to copy text (Mac OS).</p>`;
const htmloption = `<label for="cars">Choose a car:</label>
<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>`;
const htmldatalist = `<label for="b">Check Browser</label>
<input list="browsers" name="browser" id="browser">
    <datalist id="browsers">
    <option value="Firefox" >
    <option value="Chrome" >
    <option value="Opera"  >
    <option value="Safari" >
    <option></option>
</datalist>
<input type="submit">`;
const htmloptgroup = `<label for="cars">Choose a car:</label>
<select name="cars" id="cars">
  <optgroup label="Swedish Cars">
	<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
	<option value="mercedes">Mercedes</option>
	<option value="audi">Audi</option>
  </optgroup>
</select>`;
const htmldd = `<dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>`;
const htmlfieldset = `<form action="/action_page.php">
<fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>
    <input type="submit" value="Submit">
</fieldset>
</form>
`;
const htmlfigure = `<figure>
    <img src="pic_trulli.jpg" alt="Trulli" style={{"width":"100%"}}>
    <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
`;
const htmlfooter = `<footer>
    <p>Author: Hege Refsnes
    <a href="mailto:abc@example.com">abc@example.com>/a></p>
</footer>
`;
const htmliframe = `<iframe src="https://www.w3schools.com" title="web page" width="100%" height="400">
</iframe>`;
const htmlhr = `<hr/>`;
const htmlinputtag = `    <input type="radio"          name="" id="" >
<input type="checkbox"       name="" id="" >
<input type="color"          name="" id="" >
<input type="month"          name="" id="" >
<input type="date"           name="" id="" >
<input type="week"           name="" id="" >
<input type="datetime-local" name="" id="" >
<input type="time"           name="" id="" min="09:00" max="18:00" >
<input type="email"          name="" id="" >
<input type="file"           name="" id="" >
<input type="file multiple"  name="" id="" >
<input type="hidden"         name="" id="" >
<input type="image"          name="" id="" >
<input type="number"         name="" id="" >
<input type="password"       name="" id="" >
<input type="range"          name="" id="" >
<input type="tel "           name="" id="" pattern="{0-9}[3]-{0-9}[3]-{0-9}[3]">
<input type="text"           name="" id="" > (default value)
<input type="time"           name="" id="" >
<input type="url "           name="" id="" >
<input type="button"         name="" id="" >
<input type="reset"          name="" id="" >
<input type="search"         name="" id="" >
<input type="submit"         value="submit" >`;
const htmlinputaccept = `<input type="file" accept=".jpg, .raw">
<input type="file" accept="image/*">  <!--Accept All type of image only-->`;
const htmlinput = `<textarea name="" id="" cols="30" rows="10" ></textarea>`;
const htmllabel = `<label for="name" >name</label>`;
const htmlmark = `<p>Do not forget to buy  <mark>milk</mark>today.</p>`;
const htmlinputrange = `<input type="range" id="health" value="0" max="100" oninput="oninputf()">
<p id="demo"></p>
<script>
    let x = document.getElementById("health").setAttribute('value', 90);
    let oninputf = () => {
        let x = document.getElementById("health").value;
        let demo = document.getElementById('demo');
        demo.innerHTML = x;
    }
</script>`;
const htmlmeter = `//Form : Meter used in Form
<form action="/action_page.php" method="get" id="form1">
First name: <input type="text" name="fname"><br>
<input type="submit" value="Submit">
</form>

<label for="anna">Anna's score:</label>
<meter id="anna" form="form1" name="anna" min="0" low="40" high="90" max="100"
 value="95"></meter>
____________________________________________________________________________________
// High,low,max,min,value
<p><label for="anna">Anna's score:</label>
<meter id="anna" min="0" low="40" high="90" max="100" value="95"></meter></p>

<p><label for="peter">Peter's score:</label>
<meter id="peter" min="0" low="40" high="100" max="100" value="65"></meter></p>

<p><label for="linda">Linda's score:</label>
<meter id="linda" min="0" low="40" high="90" max="100" value="35"></meter></p>
____________________________________________________________________________________
//optimum
<p><label for="yinyang">Yin Yang:</label>
<meter id="yinyang" value="0.3" high="0.9" low="0.1" optimum="0.5"></meter>
</p>`;
const htmlprogress = `<label for="file">Downloading progress:</label>
    <progress id="file" value="32" max="100"> 32% </progress>
                                <!--DOM -->
    <progress id="file"> 32% </progress>
<p id="demo"></p>
<script>
    let a = 80;
    let b = 10;
    let sum = a + b;
    x = document.getElementById('file');
    x.setAttribute('value',sum);
    x.setAttribute('max',100);
    let demo = document.getElementById('demo').innerHTML = sum+"%";
</script>`;
const htmloutput = `<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
<input type="range" id="a" value="50">
+<input type="number" id="b" value="25">
=<output name="x" for="a b"></output>
</form>
____________________________________________________________________________________
<form oninput="x.value=parseInt(a.value)">
<input type="range" id="a" value="50">

<output name="x" for="a"></output>
</form>`;
const htmltable = `<table border="1">
    <thead>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Sum</td>
            <td>$180</td>
        </tr>
    </tfoot>
</table>`;
const htmlvar = `<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var>
is the base, and <var>h</var> is the vertical height.</p>`;
const htmlul = `<ul type="circle">
    <li> </li>
    <li> </li>
</ul>
_______________________________________________________________________
<--start"1"  Adding the Attribute to start the number-->
<ol type="1|a|A|i|">
<!-- <ol type="1|a|A|i|" start="50"> -->
    <li> </li>
    <li> </li>
</ol>`;
const cssprefix = `/*Android | Chrome | iOS | Safari*/
-webkit-
/*Firefox*/
-moz-
/*Internet Explorer*/
-ms-
/*Opera*/
-o-`;
const cssfallbackfont = `font-family: Tahoma, Verdana, sans-serif;`;
const htmlfont = `<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
    font-family: "Sofia", sans-serif;
}
</style>
</head`;
const htmlfontstyle = `font-style: normal; /*The text is shown normally*/
font-style: italic; /*The text is shown in italics*/
font-style: oblique; /*oblique is very similar to italic, but less supported)*/`;
const cssfontweight = `font-weight: normal;
font-weight: bold;`;
const cssfontvariant = `font-variant: normal;
font-variant: small-caps;`;
const csswidth = `div{
    max-width: 500px;
    margin: auto;
    border: 3px solid #73AD21;
   }`;
const cssoverflow = `div {
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
  }`;
const cssopacity = `opacity: 0.5;
background: rgba(76, 175, 80, opacity) /* Green background with 30% opacity */
background: rgba(76, 175, 80, 0.3) /* Green background with 30% opacity */`;
const csselementselector = `H2 { color: blue;}`;
const csselementselectorhash = `#first {color: white;}`;
const csselementselectorclass = `.red {background: red;}`;
const cssdescendentselector = `div p { background-color: yellow;}`;
const csschildselector = `div>p {background-color: yellow;}`;
const htmlchildselector = `<style>    
div+p {
    background-color: yellow;
}
</style>
<div>
<p>Paragraph 1 in the div.</p>
</div>
<-- only mark after div the paragraph tag -->
<p>Paragraph 3. After a div.</p>
<p>Paragraph 4. After a div.</p>`;
const htmlgeneralselector = `<style>    
div~p {
    background-color: yellow;
}
</style>
<div>
    <p>Paragraph 1 in the div.</p>
</div>
<-- mark after div all paragraph tag -->
<p>Paragraph 3. After a div.</p>
<p>Paragraph 4. After a div.</p>`;
const csspseudoselector = `Selector:pseudo-class {
    property: value;
}`;
const cssanchorpseudo = `				/* unvisited link */
a:link { color: #FF0000;}
				/* visited link */
a:visited { color: #00FF00;}
				/* mouse over link */
a:hover { color: #FF00FF;}
				/* selected link */
a:active { color: #0000FF;}`;
const cssfistchild = `<style>
p:first-child {
  color: blue;
}
</style>

<p>This is some text.</p>
<p>This is some text.</p>`;
const htmlafterbefore = `<style>
p::after {
    content: " - Remember this";
    background-color: yellow;
    color: red;
    font-weight: bold;
}
</style>

<p>My name is Donald</p>
<p>I live in Ducksburg</p>`;
const cssfistletter = `<style>
p::first-letter {
    font-size: 200%;
    color: #8A2BE2;
}
</style>
<h1>Welcome to My Homepage</h1>

<p>My name is Donald.</p>
<p>I live in Duckburg.</p>
<p>My best friend is Mickey.</p>`;
const cssfistline = `<style>
p::first-line {
    background-color: yellow;
}
</style>
<h1>WWF's Mission Statement</h1>
<p>To stop the degradation of the planet's natural environment and to build a
future in which humans live in harmony with nature,by conserving  world
diversity, ensuring that the use of renewable natural resources is sustain
promoting the reduction of pollution and wasteful consumption.</p>`;
const cssselection = `<style>
::selection {
    color: red;
    background: yellow;
}
</style>
<h1>Select some text on this page:</h1>

<p>This is a paragraph.</p>
<div>This is some text in a div element.</div>`;
const cssattributeselector1 = `a[target] {
    background-color: yellow;
     }`;
const cssattributeselector2 = `a[target="_blank"] {
    background-color: yellow;
     }`;
const cssattributeselector3 = `[title~="flower"] {
    border: 5px solid yellow;
        } `;
const htmlcssattribute = ` <!DOCTYPE html>
<html>
<head>
<style>
[class|=top] {
    background: yellow;
}
</style>
</head>
<body>

<h2>CSS [attribute|="value"] Selector</h2>

<h1 className="top-header">Welcome</h1>
<p className="top-text">Hello world!</p>
<p className="topcontent">Are you learning CSS?</p>

</body>
</html> `;

// const cssgriditemspanning = `grid-row: 1/span 3;
// grid-column: 1 / span 5;
// /* 2 */
// grid-row:1/3;
// grid-column:1/5;
// /* 3 */
// grid-row:1/-1;
// grid-column:1/-1;

// /*Example CSS Code */
// *{
//     margin: 0;
//     padding: 0;
// }
// .container{
//   display: grid;
//   height: 500px;
//   background-color: green;
//   grid-template-columns: auto auto auto auto;
//   grid-auto-rows: 70px 70px 70px 70px;
//   grid-gap: 20px 20px;
// }
// .item1{
//   background-color: red;
//   color: white;
//   grid-row:2/3;
//   grid-column:3/4;
// }
// .item2{
//   background-color: blue;
//   color: white;
// }
// .item3{
//   background-color: black;
//   color: white;
// }
// .item4{
//   background-color: yellowgreen;
//   color: white;
// }
// .item5{
//     background-color: red;
//     color: white;
// }
// .item6{
//     background-color: royalblue;
//     color: white;
// }
// .item7{
//     background-color: royalblue;
//     color: white;
//     grid-row:1/2;
//     grid-column: 1/span 5;
// }
// .item8{
//     background-color: violet;
//     color: white;
// }`;
// const htmlminmax = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Document</title>
//     <style>
// *{
//     margin: 0;
//     padding: 0;
//     }
//     .container{
//     display: grid;
//     width:80%;
//     margin: 20px auto;
//     height: auto;

//     /* grid-template-columns: max-content 1fr 1fr;
//     grid-template-rows: repeat(3,MinMax(200px,min-content)); */

//     /* grid-template-columns: max-content 1fr 1fr;
//     grid-template-rows: repeat(3,200px); */

//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: repeat(3,minmax(200px,min-content));

//     grid-column-gap: 5px;
//     grid-row-gap: 5px;

//     }
//     .item1{
//     background-color: red;
//     color: white;
//     }
//     .item2{
//     background-color: green;
//     color: white;
//     }
//     .item3{
//     background-color: black;
//     color: white;
//     }
//     .item4{
//     background-color: yellowgreen;
//     color: white;
//     }
//     .item5{
//     background-color: red;
//     color: white;
//     }
//     .item6{
//     background-color: royalblue;
//     color: white;
//     }
//     .item7{
//     background-color: royalblue;
//     color: white;
//     }
//     .item8{
//     background-color: violet;
//     color: white;
//     }

//     .footer{
//     background-color: black;
//     color: white;
//     }
//     .item{
//     text-align: center;
//     line-height: 70px;
//     font-family: arial;
//     font-size:20px;
//     font-weight: bold;
//     }

//     </style>
// </head>
// <body>

// <div className="container">
//     <div className="item item1">Lorem i</div>
//     <div className="item item2">Menue</div>
//     <div className="item item3">Box 3</div>
//     <div className="item item4">Box 4</div>
//     <div className="item item5">Aside 5</div>
//     <div className="item footer">fdf</div>
// </div>
// </body>
// </html>`;
// const cssautofill = `.grid-container{
//     display:grid;
//     grid-template-columns:repeat(auto-fill,300px);
//     grid-template-rows:repeat(2,100px);
// }`;
// const cssautofit = `.grid-container{
//     display:grid;
//     grid-template-columns:repeat(auto-fit,300px);
//     grid-template-rows:repeat(2,100px);
// }`;
// const cssfitcontent = `.grid-container{
//     grid-template-columns:fit-content(300px) 1fr 1fr;
// }`;
// const cssautofitfillexample1 = `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
// 	* {
// 		margin: 0;
// 		padding: 0;
// 	}
// 	body {
// 		background-color: #f5f6;
// 	}
// 	.container {
// 		width: 85%;
// 		height: auto;
// 		margin: 20px auto;

// 		display: grid;
// 		grid-template-columns: repeat(3, minmax(275px, 1fr));
// 		gap: 0.9rem;
// 	}
// 	.container .box {
// 		/* background-color: #444; */
// 		height: 250px;
// 		color: white;
// 		text-align: center;
// 		background: #444;
// 	}
// 	@media only screen and (max-width: 1200px) {
// 		.container {
// 			grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
// 		}
// 	}

// 	@media only screen and (max-width: 400px) {
// 		.container {
// 			width: 100%;
// 		}
// 	}
//     </style>
// </head>

// <body>
//     <section className="card">
//         <div className="container">
//             <div className="box">1</div>
//             <div className="box">2</div>
//             <div className="box">3</div>
//             <div className="box">4</div>
//             <div className="box">5</div>
//             <div className="box">5</div>
//             <div className="box">5</div>
//             <div className="box">5</div>
//         </div>
//     </section>
// </body>
// </html>`;
// const cssautofitfillexample2 = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Grid Simple Layout</title>
//     <style>
// 	* {
// 		margin: 0;
// 		padding: 0;
// 	}

// 	body {
// 		margin: 40px;
// 	}

// 	.container {
// 		display: grid;
// 		grid-template-columns: repeat(4, minmax(250px, 1fr));
// 		grid-template-rows: repeat(8, minmax(250px, 1fr));
// 		grid-gap: 20px;
// 	}

// 	.item {
// 		background-color: #444;
// 		color: #fff;
// 		border-radius: 5px;
// 		padding: 20px;
// 		font-size: 150%;
// 		text-align: center;

// 	}

// 	@media only screen and (max-width: 1200px) {
// 		.container {
// 			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// 		}
// 	}
//     </style>
// </head>
// <body>
//     <div className="container">
//         <div className="item box1">1</div>
//         <div className="item box2">2</div>
//         <div className="item box3">3</div>
//         <div className="item box4">4</div>
//         <div className="item box5">5</div>
//         <div className="item box6">6</div>
//         <div className="item box7">7</div>
//         <div className="item box8">8</div>
//     </div>
// </body>
// </html>`;
// const cssautofitfillexample3 = `<!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<meta http-equiv="X-UA-Compatible" content="ie=edge">
// 	<title>Grid Simple Layout</title>
// <style>
// * {
// 	margin: 0;
// 	padding: 0;
// 	}

// 	body {
// 		margin: 40px;
// 	}

// 	.container {
// 		display: grid;
// 		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// 		grid-gap: 20px;
// 	}

// 	.item {
// 		background-color: #444;
// 		color: #fff;
// 		border-radius: 5px;
// 		padding: 20px;
// 		font-size: 150%;
// 		text-align: center;
// 	}
// </style>
// </head>
// <body>

// 	<div className="container">
// 		<div className="item box1">1</div>
// 		<div className="item box2">2</div>
// 		<div className="item box3">3</div>
// 		<div className="item box4">4</div>
// 		<div className="item box5">5</div>
// 		<div className="item box6">6</div>
// 		<div className="item box7">7</div>
// 		<div className="item box8">8</div>
// 	</div>
// </body>
// </html> `;
// const cssautofitexample4 = `<style>
// *{
//   margin: 0;
//   padding: 0;
// }

// section{
//   padding: 2rem 9%;
// }

// .wrapper{
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
//   gap: 0.9rem;
//   justify-content: space-between;
// }
// .item{
//   height: 150px;
// }
// .item1{background-color:red;}
// .item2{background-color:green;}
// .item3{background-color:yellow;}
// .item4{background-color:rgb(5, 23, 82);}
// .item5{background-color:orange;}

// @media only screen and (max-width: 400px) {
//   .wrapper{
//     grid-template-columns: repeat(1,1fr);
//   }
// }
//     </style>
//     <section>
// 	<div className="container">
// 	    <div className="wrapper">
// 	        <div className="item item1">1</div>
// 	        <div className="item item2">2</div>
// 	        <div className="item item2">2</div>
// 	        <div className="item item2">2</div>
// 	        <div className="item item2">2</div>
// 	        <div className="item item2">2</div>
// 	    </div>
// 	</div>
// </section>`;
const htmlresponsivegridcardsexample5 = `<section className="tools" id="tools">
<h1 className="heading"> popular tools </h1>
<div className="box-container">
    <div className="box">
        <img src="images/dish-1.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-2.png" alt="">
    </div>            <div className="box">
        <img src="images/dish-3.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-4.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-5.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-6.png" alt="">
    </div>
</div>
</section>`;
const cssresponsivegridcardsexample5 = `:root {
    --green: #27ae60;
    --black: #192a56;
    --light-color: #666;
    --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  }
  * {
    font-family: "Nunito", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
  }
  html {
    font-size: 62.5%;
  }
  section {
    padding: 2rem 9%;
  }
  section:nth-child(even) {
    background: #eee;
  }
  .heading {
    text-align: center;
    color: var(--black);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
  .tools .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap: 1.5rem;
  }
  .tools .box-container .box {
    padding: 2.5rem;
    background: #fff;
    border-radius: 0.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  
  /* media queries  */
  
  @media (max-width: 991px) {
    html {
      font-size: 55%;
    }
    section {
      padding: 2rem;
    }
  }
  @media (max-width: 450px) {
    html {
      font-size: 50%;
    }
    .tools .box-container .box img {
      height: auto;
      width: 100%;
    }
  }`;
const cssgridautorows = `.grid-container{
    grid-auto-rows : 200px;
}`;
const cssautocolumns = `.grid-container{
    grid-auto-rows : 200px;
    grid-auto-columns:.5fr; /*Half of width */
}`;
const cssgridautoflow = `.grid-container{
    grid-auto-rows : 200px;
    grid-auto-flow : column;
}`;
const cssgridproperty = `.item1{background-color:red;         color:white; order:0;}
.item2{background-color:green;       color:white; order:1;}
.item3{background-color:black;       color:white; order:2;}
.item4{background-color:yellowgreen; color:white; order:3;}
.item5{background-color:red;         color:white; order:4;}`;
const csscursor = `input {
    caret-color: auto;
    caret-color: red;
    display: block;
    margin-bottom: .5em;
}`;
const contentProperties = `p::before {
    content: "Read this -";
  }
  p::after {
    content: " - Remember this";
  }`;

const bgtag = `background-color      : blue;
background-image      : url("paper.gif");
background-repeat     : repeat-x | repeat-y | no-repeat;
background-attachment : fixed | scroll
background-position   : right top;
background-size       : auto | width height |inherit | initial
background-size       : 300px 20px; /*width and Height of img */`;
const bgtagoutput = `background : bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip
bg-attachment initial|inherit;
background           : #ffffff url("img_tree.png") no-repeat right top;`;
const bgtagoutput1 = `background-image : linear-gradiant(direction,color,color);
background       : linear-gradiant(direction,color,color);`;

const bgtagoutput2 = `div{
	height:100px;
	background:linear-gradiant(red,yellow); /*default top to bottom work*/
	background:linear-gradiant(to right,red,yellow); /*move left to right*/
	background:linear-gradiant(to left,red,yellow);/*move right to left*/
	background:linear-gradiant(to top,red,yellow); /*move bottom to top */
	background:linear-gradiant(to bottom,red,yellow);/*move top to bottom*/
	/*start color left then top and end yellow color right,bottom */
	background:linear-gradiant(to right top,red,yellow);
	/*use angle for the place of direction */
	  background: linear-gradient(45deg, red, blue);
	/*use percentage with color mean the start color and end color width*/
	background:linear-gradiant(180deg,red 20%,yellow 30%);
}`;

const marginproperty = `margin-top    : 100px;
margin-bottom : 100px;
margin-right  : 150px;
margin-left   : 80px;`;

const paddingproperty = `padding-top    : 10px;
padding-right  : 5px;
padding-bottom : 8px;
padding-left   : 20px;`;

const outlinePropertyOutline = `outline: size solid color ; | outline :5px solid green;
outline: dashed color ;     | outline :dashed green;
outline : none;             | use for outline None `;

const outlinepropertyOutput = `                outline-style
dotted    | Defines a dotted outline
dashed    | Defines a dashed outline
solid     | Defines a solid outline
double    | Defines a double outline
groove    | Defines a 3D grooved outline
ridge     | Defines a 3D ridged outline
inset     | Defines a 3D inset outline
outset    | Defines a 3D outset outline
none      | Defines no outline
hidden    | Defines a hidden outline
__________________________________________________________________________________
                         outline-width:
outline-width: thin;
outline-width: medium;
outline-width: thick;
outline-width: 4px;
__________________________________________________________________________________
                       outline-color:
outline-color: red;
outline-color: #ff0000; /* red */
outline-color: rgb(255, 0, 0); /* red */
outline-color: hsl(0, 100%, 50%); /* red */
outline-color: invert;`;

const textproperty = `color:black;`;
const horizontaltext = `text-align: center | right | left | justify;`;
const verticaltext = `vertical-align: baseline;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: sub;
vertical-align: super;`;
const textDirection = `p{
    direction: rtl;
    unicode-bidi: bidi-override;
}`;
const textDirection1 = `text-decoration: none;           | For None Text Decoration
text-decoration: overline;       | Text upper line
text-decoration: line-through;   | Text line cut
text-decoration: underline;      | Text underline
`;
const texTransform = `text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;`;
const textIndentation = `p {text-indent: 50px;}`;
const letterSpacing = `letter-spacing: 3px;
letter-spacing: -3px;`;
const wordSpacing = `word-spacing: 10px;`;
const lineHeight = `line-height: 0.8;`;
const whiteSpace = `white-space: nowrap;
white-space: wrap;`;
const textShow = `h1 {
    text-shadow: 2px 2px 40px red;
  }`;
const boxShow = `box-shadow: none | h-offset v-offset blur spread color | inset | initial | inherit;`;
const boxShowOutput = `display:none;
display:block;
display:inline;
display:inline-block;
visibility:hidden;       |visible|hidden|none|
z-index:34;              |-23;   | 23; |`;
const display1 = `p { display:none; }`;
const displayblock = `p { display:block;}`;
const displayinline = `&lt;style&gt;
li { display: inline; }
&lt;/style&gt;
&lt;ul&gt;
    &lt;li&gt;&lt;a href="#" target="_blank&quot;&gt;HTML&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" target="_blank&quot;&gt;CSS&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" target="_blank&quot;&gt;JavaScript&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;`;
const visibility = `&lt;style&gt;
h1.hidden {
  visibility: hidden;
  /*Not contain space blow*/
  /*visibility: none;*/
}
&lt;/style&gt;
&lt;h1&gt;This is a visible heading&lt;/h1&gt;
&lt;h1 className="hidden&quot;&gt;This is a hidden heading&lt;/h1&gt;
&lt;p&gt;Notice that the hidden heading still takes up space.&lt;/p&gt;`;
const zindex = `img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}`;
const positioncss = `position:static;
position:relative;
position:absolute;
position:fixed;
position:sticky;

/* Global values */
position: inherit;
position: initial;
position: revert;
position: unset;`;
const positionStatic = `div.static { position: static; }`;
const positionRelitive = `&lt;style&gt;
.display{
display:inline-block;
}
div.relative {
    position: relative;
    left:100px;
    border: 3px solid #73AD21;
    width:150px;
}
.center{
    position: relative;
    left:150px;
    border: 3px solid #73AD21;
    width:150px;
}
&lt;/style&gt;
&lt;h2&gt;position: relative;&lt;/h2&gt;

&lt;div className="relative display&quot;&gt;
This div element has position: relative;
&lt;/div&gt;
&lt;div className="relative display&quot;&gt;
This div element has position: relative;
&lt;/div&gt;

&lt;div className=" display center&quot;&gt;
This div element has position: relative;
&lt;/div&gt;`;
const positionAbsolute = `&lt;style&gt;
div.relative {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px solid #73AD21;
}
div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid #73AD21;
}
&lt;/style&gt;
&lt;div class=&quot;relative&quot;&gt;This div element has position: relative;
    &lt;div class=&quot;absolute&quot;&gt;This div element has position: absolute;&lt;/div&gt;
&lt;/div&gt;`;
const positionFixed = `div.fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    border: 3px solid #73AD21;
}`;
const positionSticky = `div.sticky {
    position: -webkit-sticky; /*Safari*/
    position: sticky;
    top: 0;
    padding: 5px;
    background-color: #cae8ca;
    border: 2px solid #4CAF50;
}`;
const keyboardCss = `inherit
initial
revert
unset
!important`;
const keyboardCss1 = `Property : inherit;
Property : initial;
Property : revert;
Property : unset;
background-color:green!important;`;
const animationList = `@keyframes
animation-name:value;               // value = hassan;
animation-duration:value;           // value = 2s;
animation-delay:value;              // value 3s;
animation-iteration-count:value;    // value= 3;
animation-direction:value;          // alternate|normal|reverse|inherit|initial|unset|
animation-timing-function:value;    // ease-in|ease-out|ease-in-out|steps(time,direction);
animation-fill-mode:value;          // forwards|backwards|both|none|inherit|initial|unset|
/* animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode; */
/* animation: Hassan 5s ease-in 1s 12 backwards; */`;
const animationName = ` .box {
    background-color: green;
    width: 250px;
    height: 250px;
    position: relative;
    /* animation-name: Hassan; */
    animation-name: Hassan2;
    animation-duration: 8s;
    animation-iteration-count: 1;
}`;
const animationNameOutput = `@keyframes hassan{
    from {
        width: 200px;
    }

    to {
        width: 1400px;
    }
}`;
const keyframe = `animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;`;
const animationTimingFunc = `
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: steps(4, end);

/* Steps Function keywords */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Global values */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: unset;`;
const animationDelay = `animation-delay: 3s;`;
const animationDirection = `animation-direction: reverse;`;
const animationDirectionOutput = `  @keyframes hassan2 {
    0%{
        top:0px;
        left:0px;
    }
    25%{
        top: 250px;
        left: 0px;
    }
    75%{
        top: 250px;
        left: 250px;
    }
    100%{
        top: 0px;
        left: 250px;
    }
}`;
const animationDirectionOutput1 = `&lt;!DOCTYPE html&gt;
&lt;html lang="en&quot;&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8&quot;&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="ie=edge&quot;&gt;
    &lt;title&gt;Keyframes and Animations&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
    .container {
        background-color: greenyellow;
    }

    .box {
        background-color: green;
        width: 250px;
        height: 250px;
        position: relative;
        /* animation-name: hassan1; */
        animation-name: hassan2;
        animation-duration: 8s;
        animation-iteration-count: 1;
        /* animation-fill-mode: alternate; */
        /* animation-timing-function: ease-in-out; */
        /* animation-delay: 3s; */
        /* animation-direction: reverse;  */

        /* These properties can be set using this shorthand */
        /* animation: animation-name animation-duration animation-timing-function
        animation-delay animation-iteration-count animation-fill-mode; */
        /* animation: hassan 5s ease-in 1s 12 backwards; */

    }

    @keyframes hassan1 {
        0%{
            top:0px;
            left:0px;
        }
        25%{
            top: 250px;
            left: 0px;
        }
        75%{
            top: 250px;
            left: 250px;
        }
        100%{
            top: 0px;
            left: 250px;
        }

    }
    @keyframes hassan2 {
        from {
            width: 200px;
        }

        to {
            width: 1400px;
        }
    }
&lt;/style&gt;

&lt;body&gt;
    &lt;div className="container&quot;&gt;
        &lt;div className="box&quot;&gt;
            This is a box
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;`;

const transformProperty = `translateX() |translateX()                            Move the Element in x-axis
translateY() |translateY()                            Move the Element in Y-axis
translate()  |translate(translateX() ,translateY())   Width x height in Units
rotate()     |rotate()                                Number in degree
scaleX()     |scaleX(increase x-axis Width);
scaleY()     |scaleY(increase y-axis Height);
scale()      |scale(increase width, increase Height);
skewX()      |skewX(Rotate in Degree x-axis);
skewY()      |skewY(Rotate in Degree y-axis);
skew()       |skew(skewX, skewY);
matrix()     |matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())`;
const transformStyle = `transform-style: flat|preserve-3d|initial|inherit;`;
const transformStyleOutput = `transform-style: flat;
transform-style: preserve-3d;`;
const translate = `&lt;style&gt;
div {
  width: 300px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
  -ms-transform: translate(50px,100px); /* IE 9 */
  transform: translate(50px,100px); /* Standard syntax */
}
&lt;/style&gt;

&lt;div&gt;
This div element is moved 50 pixels to the right, and 100 pixels down
from its current position.
&lt;/div&gt;`;
const rotate = ` div {
    -ms-transform: rotate(20deg); /* IE 9 */
    transform: rotate(20deg);
    }`;
const rotateOutput = `div {
    -ms-transform: rotate(-20deg); /* IE 9 */
    transform: rotate(-20deg);
}`;
const scale = `div {
    -ms-transform: scale(2,3); /* IE 9 */
    transform: scale(2, 3);
}`;

const scaleX = `transform: scaleX(0.5);`;
const scaleXTransform = `transform: scaleX(2);`
const TransformscaleY = `transform: scaleY(3)`;
const scaleY = `transform: scaleY(0.5);`;
const skewX = `transform: skewX(20deg);`;
const skewY = `transform: skewY(20deg);`;
const skew = `transform: skew(20deg);`;
const matrix = `matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY());`;
const matrixOutput = `transform: matrix(1, -0.3, 0, 1, 0, 0);`;
const allcssTransformProperty = `rotateX()
rotateY()
rotateZ()
transform-origin()
tsransform-style()
perspective()
perspective-origin()
backface-visibility()`;
const rotateX = `transform: rotateX(150deg);`;
const rotateY = ` transform: rotateY(150deg);`;
const rotateYOutput = `transform: rotateY(150deg);`;
const rotateZ = ` transform: rotateZ(90deg);`;
const TransformOrigin = `
transform-origin: x-axis y-axis z-axis|initial|inherit;

x-axis :   left| center | right  | length | %
y-axis :   top | center | bottom | length | %
z-axis :   length`;
const TransformOriginOutput = `div {
    transform: rotate(45deg);
    transform-origin: 20% 40%; /* x-axis y-axis */
    /* transform-origin: center top;*/
    } `;
const transformStyleflat = `transform-style: flat|preserve-3d|initial|inherit;`;
const transformStyleflat1 = `transform-style: flat;
transform-style: preserve-3d;
/*Example */
div {
    transform: rotateY(60deg);
    transform-style: preserve-3d;
  }`;
const persepectiveValue = `perspective: length|none;`;
const persepectiveValueOutput = `#div1 {perspective: 100px;}`;
const perspectiveOrigin = `
perspective-origin: x-axis y-axis|initial |inherit;
x-axis :   left| center | right  | length | % Default value = 50%
y-axis :   top | center | bottom | length | % Default value = 50%`;
const perspectiveOriginOutput = `#div1 {
    perspective: 100px;
    perspective-origin: left;
}`;
const backfaceVisibility = `#div1 {
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}`;
const allTransitionProperty = `
transition-property
transition-duration             2s -> Write in Second
transition-timing-function
transition-delay                3s,4s,5s

    /* transition is combination of */

transtion:(transition-property)+(transition-duration)+
          (transition-timing-function)+(transition-delay)`;
const allTransitionPropertyOutput = `
div {
   transition-property: width;
   transition-duration: 2s;
   transition-timing-function: linear;
   transition-delay: 1s;
}`;
const transtionProperty = `div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
    /*also used transition:width 2s,height 6s;*/
    }
    div:hover {
      width: 300px;
      /*width:300px and Height :600px;*/
    }</code></pre>
    <p>If you change the height then you can use simply comma after width time and write height and changing time.Then go to the hover write the height.</p>
                    <pre className="language-css"><code className="language-css">div {
        width: 100px;
        height: 100px;
        background: red;
        transition: width 2s,height 5s;
            /*also used transition:width 2s,height 6s;*/
    }
    div:hover {
        width: 300px;
        height:599px;
    } `;
const transitionDelay = `div { transition-delay: 1s; } /*only one second delay*/`;
const TransitionTimingFunc = `div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
  }
  
  #div1 {transition-timing-function: linear;}
  #div2 {transition-timing-function: ease;}
  #div3 {transition-timing-function: ease-in;}
  #div4 {transition-timing-function: ease-out;}
  #div5 {transition-timing-function: ease-in-out;}
  
    div:hover {
    width: 300px;
  }`;
const transitionTransform = `div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s, height 2s, transform 2s;
}
div:hover {
    width: 300px;
    height: 300px;
    transform: rotate(180deg);
}`;
const clipPath = `clipath : circle() | ellipse | polygon | inset`;
const clipPathOutput = `div{
    width: 100%;
    height: 100vh;
    background:linear-gradient(purple,red);
    /* clip-path: circle(40%); */
    clip-path: circle(20%);
    /* clip-path: ellipse(25% 40% at 50% 50%); */
    /* clip-path: ellipse(25% 25% at 50% 50%); */
    /* clip-path: polygon(50% 0%, 0% 100%, 100% 100%); */
    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
    /* clip-path: inset(5% 20% 15% 10%); */
  }`;
const nonSementicProp = `
&lt;article&gt;                     &lt;aside&gt;                   &lt;details&gt;
&lt;figcaption&gt;                  &lt;figure&gt;                  &lt;footer&gt;
&lt;header&gt;                      &lt;main&gt;                    &lt;mark&gt;
&lt;nav&gt;                         &lt;section&gt;  `;
const typeUnits = `Absolute Units  -> px
Relative Units  -> em | rem | vw | vh`;
const emUnit = `em = New Font Size / Parent Font Size
<span className="comment">/* font-size 1em = 10px on default browser settings */<span>`;
const remUnit = `rem = Root size * New Child Size   <span className="comment">/*  font-size: 62.5%; */</span>
1rem = 16px;               <span className="comment">/* Default Size */</span>
font-size:100%; => 16px;
1px = 100/10 = 6.25 %       <span className="comment">/* 1px is equal to find percentage */</span>
10px = 6.25 % x 10 => 62.5 %;
font-size : 62.5% => 10px => 1rem;`;
const vhUnit = `@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}`;
const fontAwasome = `<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>`;
const fontAwasome1 = `<script src="https://kit.fontawesome.com/991a8d9f0e.js" crossorigin="anonymous">
</script>`;
const boxSizing = `div{
    width: 300px;
    height: 100px;
    border: 1px solid blue;
    padding:30px;
    box-sizing:border-box;
  }`;
const cssflexbox = `.flex-container {
    display:flex;
    background-color:blue;
}`;
const cssflexboxOutput = `flex-direction    column | column-reverse      | row     | row-reverse
flex-wrap         wrap   | nowrap              | wrap-reverse
flex-flow         flex-direction + flex-wrap

justify-content   center | flex-start | flex-end | space-around  | space-between
align-items       center | flex-start | flex-end | stretch       | baseline
align-content     center | flex-start | flex-end | space-between | space-around
gap:20px;   //add gap between box
row-gap: 34;
column-gap: 34; `;
const cssflexbosdemo1 = `&lt;style&gt;
*{
    margin: 0;
}
.container{
    background-color: #444;
    display: flex;
    flex-wrap: wrap;   
    justify-content: center;
    align-items: center;
    gap:20px;
    padding:20px;
}
.item{
    background-color: #444;
    padding: 5px;
    color:white;
    width:100px;
    height:80px;
    /* flex:1 1 300px;  */
}
.item1{background-color: red ;             }
.item2{background-color: blue ;            }
.item3{background-color: rgb(231, 24, 24) ;}
.item4{background-color: yellow;           }
.item5{ background-color: violet;          }
.item6{background-color: goldenrod;        }
.item7{ background-color: blueviolet;      }
.item8{ background-color: saddlebrown;     }
.item9{ background-color: hotpink;         }
&lt;/style&gt;

&lt;div class=&quot;container&quot;&gt;
   &lt;div class=&quot;item item1&quot;&gt;1&lt;/div&gt;
   &lt;div class=&quot;item item2&quot;&gt;2&lt;/div&gt;
   &lt;div class=&quot;item item3&quot;&gt;3&lt;/div&gt;
   &lt;div class=&quot;item item4&quot;&gt;4&lt;/div&gt;
   &lt;div class=&quot;item item5&quot;&gt;5&lt;/div&gt;
   &lt;!-- &lt;div class=&quot;item item6&quot;&gt;6&lt;/div&gt;
   &lt;div class=&quot;item item7&quot;&gt;7&lt;/div&gt;
   &lt;div class=&quot;item item8&quot;&gt;8&lt;/div&gt;
   &lt;div class=&quot;item item9&quot;&gt;9&lt;/div&gt;--&gt;
&lt;/div&gt;  `;
const cssflexbosdemo2 = `&lt;style&gt;
* {
  margin: 0;
}
html{
  font-size: 62.5%;
}
h1{
  font-size:2.5rem;
}
section{
    /* padding: 160px 16% 90px; */
    padding: 160px 10% 90px;
}
.flex-container{
  background: orange;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap:1rem;
  padding:1rem;
}
.flex-container .box{
  height:150px;
  background: #f2f2f2;
  flex:1 1 30rem;
  display: flex;
  justify-content: center;
}
@media (max-width: 1325px){
    section{
        padding: 130px 3% 60px;
    }
}
&lt;/style&gt;
&lt;section&gt;
  &lt;div class=&quot;flex-container&quot;&gt;
    &lt;div class=&quot;box box1&quot;&gt;
      &lt;h1&gt;Hassan Ali&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div class=&quot;box box2&quot;&gt;Box 2&lt;/div&gt;
    &lt;div class=&quot;box box3&quot;&gt;Box 3&lt;/div&gt;
    &lt;div class=&quot;box box4&quot;&gt;Box 4&lt;/div&gt;
    &lt;div class=&quot;box box5&quot;&gt;Box 5&lt;/div&gt;
    &lt;div class=&quot;box box6&quot;&gt;Box 6&lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;`;
const flexDirection = `.flex-container {
    display: flex;
    flex-direction: row;
}`;
const flexWrap = `flex-wrap:  wrap | nowrap | wrap-reverse`;
const flexWrapOuput = `.flex-container {
    display: flex;
    flex-wrap: wrap;
}`;
const flexFlow = `flex-flow: flex-direction+flex-wrap;
flex-flow:  row wrap;`;
const flexFlowcss = `.flex-container {
    display: flex;
    flex-flow: row wrap;
}`;
const justifyContentCss = `justify-content: center | flex-start | flex-end | space-around | space-between`;
const justifyContent = `.flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;
}`;
const alignItem = `align-items: center | flex-start | flex-end | stretch | baseline`;
const alignItemCss = `.flex-container {
    display: flex;
    height: 200px;
    align-items: flex-start;
}`;
const alignContent = `align-content:  center | flex-start | flex-end |space-between | space-around |`;
const alignContentCss = `.flex-container {
    display: flex;
    height: 600px;
    flex-wrap: wrap;
    align-content: flex-end;
}`;
const perfactCentering = `.flex-container {
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
}`;
const flexItemProperty = `
order        | Give the Number of Flex
flex-grow    | Increase width 2 time or equal (flex-grow:1;)
flex-shrink  | width less according to the size of window or wrap.
flex-basis   | Set the width not decrease on wrap
align-self   | align particular item in vertically<hr/>
flex         | (flex-grow) + (flex-shrink) + (flex-basis);<hr/>
               <strong> One value, width/height: flex-basis </strong>
flex: 10em; | 30%; |min-content;
          <strong> Two values: flex-grow | flex-basis </strong>
flex: 1 30px;
          <strong> Two values: flex-grow | flex-shrink </strong>
flex: 2 2;
       <strong> Three values: flex-grow | flex-shrink | flex-basis </strong>
flex: 2 2 10%;`;
const diplayGrid = `.container{
    display:grid | inline-grid;
}`;
const gridtemplateColumn = `
/* Keyword value */
grid-template-columns: none;
grid-template-columns: repeat(3, 200px);
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* grid-templete-rows */
grid-template-rows: none;
grid-template-rows: 100px 1fr;
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);`;
const gridtemplateRows = `.container{
    display:flex;
    grid-template-columns:auto auto auto;
    grid-template-columns:1fr auto;
    grid-template-columns:1fr 1fr 1fr;

    grid-template-columns:repeat(2,1fr) auto;
    grid-template-columns:repeat(2,1fr) 50%;
    grid-template-columns:50% repeat(2,1fr);
    grid-template-columns:50px repeat(2,1fr);

    }

    /*grid-template-rows */
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-rows: auto auto auto;
    grid-template-rows: 40px 4em 40px;`;
const gridColumnStart = `.div{
    display:grid;
    grid-column-start:1;
    grid-column-end:5;
}`;
const gridTemplateArea = `.item-a {
    grid-area: header;
    }
    .item-b {
    grid-area: main;
    }
    .item-c {
    grid-area: sidebar;
    }
    .item-d {
    grid-area: footer;
    }
div{
    display:grid;
    grid-template-areas:
    "myArea myArea myArea"
    "main main . sidebar"
    "footer footer footer";
}`;
const gridProperties = `column-gap
row-gap
grid-row-gap      |Grid Rows Gap
grid-column-gap   |Grid Column Gap
grid-gap          |grid-row-gap + grid-column-gap;
                  |grid-gap: row * column;
gap               |gap : row-gap + column-gap;`;
const gridPropertiesCss = `column-gap: normal;
column-gap: 23px;
column-gap: 23%;
row-gap:10px;
grid-row-gap: 10px;
grid-column-gap:20px;

grid-gap: row * column;
grid-gap: 10px 10px;`;
const gridItem = `grid-row-start
grid-row-end
grid-row              | grid-row : grid-row-start  / grid-row-end ;
grid-column-start
grid-column-end
grid-column           | grid-column : grid-column-start / grid-column-end  ;
grid-area             | grid-area : row-start/column-start/row-end/column-end`;
const gridItemCss = `grid-column-start: 1;
grid-column-end:5;
grid-column: 1/5; /* grid-column : start / end ; */`;
const GridAreaCss = `grid-area : row-start/column-start/row-end/column-end;`;
const gridItemSpanning = `grid-row: 1/span 3;
grid-column: 1 / span 5;
/* 2 */
grid-row:1/3;
grid-column:1/5;
/* 3 */
grid-row:1/-1;
grid-column:1/-1;

/*Example CSS Code */
*{
    margin: 0;
    padding: 0;
}
.container{
  display: grid;
  height: 500px;
  background-color: green;
  grid-template-columns: auto auto auto auto;
  grid-auto-rows: 70px 70px 70px 70px;
  grid-gap: 20px 20px;
}
.item1{
  background-color: red;
  color: white;
  grid-row:2/3;
  grid-column:3/4;
}
.item2{
  background-color: blue;
  color: white;
}
.item3{
  background-color: black;
  color: white;
}
.item4{
  background-color: yellowgreen;
  color: white;
}
.item5{
    background-color: red;
    color: white;
}
.item6{
    background-color: royalblue;
    color: white;
}
.item7{
    background-color: royalblue;
    color: white;
    grid-row:1/2;
    grid-column: 1/span 5;
}
.item8{
    background-color: violet;
    color: white;
}`;
const minMax = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
*{
    margin: 0;
    padding: 0;
    }
    .container{
    display: grid;
    width:80%;
    margin: 20px auto;
    height: auto;

    /* grid-template-columns: max-content 1fr 1fr;
    grid-template-rows: repeat(3,MinMax(200px,min-content)); */

    /* grid-template-columns: max-content 1fr 1fr;
    grid-template-rows: repeat(3,200px); */

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3,minmax(200px,min-content));

    grid-column-gap: 5px;
    grid-row-gap: 5px;

    }
    .item1{
    background-color: red;
    color: white;
    }
    .item2{
    background-color: green;
    color: white;
    }
    .item3{
    background-color: black;
    color: white;
    }
    .item4{
    background-color: yellowgreen;
    color: white;
    }
    .item5{
    background-color: red;
    color: white;
    }
    .item6{
    background-color: royalblue;
    color: white;
    }
    .item7{
    background-color: royalblue;
    color: white;
    }
    .item8{
    background-color: violet;
    color: white;
    }

    .footer{
    background-color: black;
    color: white;
    }
    .item{
    text-align: center;
    line-height: 70px;
    font-family: arial;
    font-size:20px;
    font-weight: bold;
    }

    </style>
</head>
<body>

<div className="container">
    <div className="item item1">Lorem i</div>
    <div className="item item2">Menue</div>
    <div className="item item3">Box 3</div>
    <div className="item item4">Box 4</div>
    <div className="item item5">Aside 5</div>
    <div className="item footer">fdf</div>
</div>
</body>
</html>`;
const autoFillCss = `.grid-container{
    display:grid;
    grid-template-columns:repeat(auto-fill,300px);
    grid-template-rows:repeat(2,100px);
}`;
const autoFitCss = `.grid-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,300px);
    grid-template-rows:repeat(2,100px);
}`;
const fitContent = `.grid-container{
    grid-template-columns:fit-content(300px) 1fr 1fr;
}`;
const autoFitExample1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
	* {
		margin: 0;
		padding: 0;
	}
	body {
		background-color: #f5f6;
	}
	.container {
		width: 85%;
		height: auto;
		margin: 20px auto;

		display: grid;
		grid-template-columns: repeat(3, minmax(275px, 1fr));
		gap: 0.9rem;
	}
	.container .box {
		/* background-color: #444; */
		height: 250px;
		color: white;
		text-align: center;
		background: #444;
	}
	@media only screen and (max-width: 1200px) {
		.container {
			grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		}
	}

	@media only screen and (max-width: 400px) {
		.container {
			width: 100%;
		}
	}
    </style>
</head>

<body>
    <section className="card">
        <div className="container">
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
            <div className="box">5</div>
            <div className="box">5</div>
            <div className="box">5</div>
        </div>
    </section>
</body>
</html>`;
const autoFitExample2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Grid Simple Layout</title>
    <style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		margin: 40px;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(4, minmax(250px, 1fr));
		grid-template-rows: repeat(8, minmax(250px, 1fr));
		grid-gap: 20px;
	}

	.item {
		background-color: #444;
		color: #fff;
		border-radius: 5px;
		padding: 20px;
		font-size: 150%;
		text-align: center;

	}

	@media only screen and (max-width: 1200px) {
		.container {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		}
	}
    </style>
</head>
<body>
    <div className="container">
        <div className="item box1">1</div>
        <div className="item box2">2</div>
        <div className="item box3">3</div>
        <div className="item box4">4</div>
        <div className="item box5">5</div>
        <div className="item box6">6</div>
        <div className="item box7">7</div>
        <div className="item box8">8</div>
    </div>
</body>
</html>`;
const autoFitExample3 = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Grid Simple Layout</title>
<style>
* {
	margin: 0;
	padding: 0;
	}

	body {
		margin: 40px;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 20px;
	}

	.item {
		background-color: #444;
		color: #fff;
		border-radius: 5px;
		padding: 20px;
		font-size: 150%;
		text-align: center;
	}
</style>
</head>
<body>

	<div className="container">
		<div className="item box1">1</div>
		<div className="item box2">2</div>
		<div className="item box3">3</div>
		<div className="item box4">4</div>
		<div className="item box5">5</div>
		<div className="item box6">6</div>
		<div className="item box7">7</div>
		<div className="item box8">8</div>
	</div>
</body>
</html> `;
const autoFitExample4 = `<style>
*{
  margin: 0;
  padding: 0;
}

section{
  padding: 2rem 9%;
}

.wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 0.9rem;
  justify-content: space-between;
}
.item{
  height: 150px;
}
.item1{background-color:red;}
.item2{background-color:green;}
.item3{background-color:yellow;}
.item4{background-color:rgb(5, 23, 82);}
.item5{background-color:orange;}

@media only screen and (max-width: 400px) {
  .wrapper{
    grid-template-columns: repeat(1,1fr);
  }
}
    </style>
    <section>
	<div className="container">
	    <div className="wrapper">
	        <div className="item item1">1</div>
	        <div className="item item2">2</div>
	        <div className="item item2">2</div>
	        <div className="item item2">2</div>
	        <div className="item item2">2</div>
	        <div className="item item2">2</div>
	    </div>
	</div>
</section>`;
const autoFitExample5 = `:root {
    --green: #27ae60;
    --black: #192a56;
    --light-color: #666;
    --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  }
  * {
    font-family: "Nunito", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
  }
  html {
    font-size: 62.5%;
  }
  section {
    padding: 2rem 9%;
  }
  section:nth-child(even) {
    background: #eee;
  }
  .heading {
    text-align: center;
    color: var(--black);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
  .tools .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap: 1.5rem;
  }
  .tools .box-container .box {
    padding: 2.5rem;
    background: #fff;
    border-radius: 0.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  
  /* media queries  */
  
  @media (max-width: 991px) {
    html {
      font-size: 55%;
    }
    section {
      padding: 2rem;
    }
  }
  @media (max-width: 450px) {
    html {
      font-size: 50%;
    }
    .tools .box-container .box img {
      height: auto;
      width: 100%;
    }
  }`;
const autoFitExamplehtml5 = `<section className="tools" id="tools">
<h1 className="heading"> popular tools </h1>
<div className="box-container">
    <div className="box">
        <img src="images/dish-1.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-2.png" alt="">
    </div>            <div className="box">
        <img src="images/dish-3.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-4.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-5.png" alt="">
    </div>
    <div className="box">
        <img src="images/dish-6.png" alt="">
    </div>
</div>
</section>`;
const implicitExplicit = `    grid-auto-columns
grid-auto-rows
grid-auto-flow`;
const gridAutoRows = `.grid-container{
    grid-auto-rows : 200px;
}`;
const gridAutoColumns = `.grid-container{
    grid-auto-rows : 200px;
    grid-auto-columns:.5fr; /*Half of width */
}`;
const gridAutoFlow = `.grid-container{
    grid-auto-rows : 200px;
    grid-auto-flow : column;
}`;

const gridOrderProperty = `.item1{background-color:red;         color:white; order:0;}
.item2{background-color:green;       color:white; order:1;}
.item3{background-color:black;       color:white; order:2;}
.item4{background-color:yellowgreen; color:white; order:3;}
.item5{background-color:red;         color:white; order:4;}`;
const changeCursor = `input {
    caret-color: auto;
    caret-color: red;
    display: block;
    margin-bottom: .5em;
}`;



export default function HTML() {
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


    <section className="tools">
        <h1 className="toolsheading"> Tools </h1>
        <div className="box-container">

            <a href="https://neumorphism.io/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Neumorphism.io</h1>
                </div>
            </a>
            <a href="https://ui.glass/generator/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Glassmorphism CSS</h1>
                </div>
            </a>
            <a href="https://9elements.github.io/fancy-border-radius/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Fancy Border Radius</h1>
                </div>
            </a>
            <a href="https://css3gen.com/text-shadow/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">CSS Text Shadow</h1>
                </div>
            </a>

            <a href="https://cssgrid-generator.netlify.app/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">CSS Grid</h1>
                </div>
            </a>
            <a href="https://cssflex-generator.netlify.app/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">CSS Flexbox</h1>
                </div>
            </a>
            <a href="https://gradientbuttons.colorion.co/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Gradiant Button</h1>
                </div>
            </a>
            <a href="https://html-css-js.com/css/generator/transform/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">CSS Transform</h1>
                </div>
            </a>
            <a href="https://hype4.academy/tools/glassmorphism-generator" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">CSS Glassmorphism</h1>
                </div>
            </a>
            <a href="https://bennettfeely.com/clippy/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">CSS clip-path</h1>
                </div>
            </a>
            <a href="https://www.shapedivider.app/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Shape Divider</h1>
                </div>
            </a>
            <a href="https://getwaves.io/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Get Waves</h1>
                </div>
            </a>
            <a href="https://vincentgarreau.com/particles.js/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Particles</h1>
                </div>
            </a>
            <a href="https://www.freepik.com/" target="_blank">
                <div className="box box-bg">
                    <h1 className="tool-head">Vector Image</h1>
                </div>
            </a>
        </div>
    </section>

<div className="container">
<h1 className="heading1">HTML Tags (Hypertext Markup Language)</h1>
<div className="heading2">
    <h3>&lt;!DOCTYPE html &gt;</h3>
</div>
<p>is used to define this document type is html.In HTML 5 We can use this tag, and the decalaration is
    not case-sensitive.
</p>
<CodeHighlight code={htmldoctype} language="html" />

<div className="heading2">
    <h3> &lt;meta&gt; | Meta Tags</h3>
</div>
<ul>
    <li>tag defines metadata about an HTML document. Metadata is data (information) about data.</li>
    <li><code className="markcode">&lt;meta&gt;</code> tags always go inside the <code className="markcode">&lt;head&gt;</code> element</li>
    <li>Meta Tag help in page description, keywords, author of the document, and viewport settings.</li>
    <li>Metadata will not be displayed on the page, but is machine parsable.</li>
</ul>
<CodeHighlight code={htmlmeta} language="html" />

<div className="heading2">
    <h3>Favicon</h3>
</div>
<ul>
    <li>A favicon, also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon</li>
    <li>Small icons, associated with a particular website or web page.</li>
    <li>It should be show on the top browser Tab bar with title.</li>
</ul>
<CodeHighlight code={htmlfavicon} language="html" />

<div className="heading2">
    <h3> &lt;title&gt; &lt;/title&gt; | Title Tags</h3>
</div>
<p><code className="markcode">&lt;title&gt;</code>tag defines the title of the document.
    The title must be text-only, and it is shown in the browser's title bar or in the page's tab</p>
<CodeHighlight code={htmltitle} language="html" />

<div className="heading2">
    <h3> &lt;p&gt; &lt;/p&gt; | Paragraph Tag and SpellCheck Attribute</h3>
</div>
<p>The spellcheck is used to check spelling and grammer on html elements such as input.</p>
<CodeHighlight code={htmlparagraph} language="html" />

<div className="heading2">
    <h3> Translate Attribute</h3>
</div>
<p>The translate attribute is use to tell the browser whether the content is to be translated or not.This can be
    translated to any language.</p>
<CodeHighlight code={htmlattribute} language="html" />

<div className="heading2">
    <h3> &lt;marquee&gt; | Marquee Tag
        <span style={{ "float": "right", "marginRight": "15px" }}> Learn More &gt;&gt;
            <a href="https://www.w3schools.in/html-tutorial/marquee-tag/" target="_blank"><i className="fas fa-link"
                style={{ "color": "white" }}></i></a>
        </span>
    </h3>
</div>

<p>Marquee Tag is used for the animation of the text and other pictures etc. <br />
    <code className="markcode">direction = &quot;up/down/left/right&quot;</code>,
    <code className="markcode">behavior = &quot;alternate/smooth&quot;</code>,
    <code className="markcode">width = &quot; &quot;</code>,
    <code className="markcode">Height = &quot; &quot;</code>,
</p>
<CodeHighlight code={htmlmarquee} language="html" />

<div className="heading2">
    <h3> &lt;nav&gt; &lt;/nav&gt;</h3>
</div>
<p><code className="markcode"> &lt;nav&gt; </code> tags is used to the navigation Bar</p>
<CodeHighlight code={htmlnav} language="html" />

<div className="heading2">
    <h3> &lt;script&gt; &lt;/script&gt; | Script Tag</h3>
</div>
<p><code className="markcode"> &lt;script&gt; </code> tags is used to the javaScript in the browser
    with out link external file.</p>
<CodeHighlight code={htmlscript} language="html" />

<div className="heading2">
    <h3> &lt;noscript&gt; &lt;/noscript&gt;</h3>
</div>
<p><code className="markcode"> &lt;noscript&gt; </code> tags is used when the browser not support javaScript then
    the message in <code className="markcode">&lt;noscript&gt;</code> should be displayed.</p>
<CodeHighlight code={htmlnoscript} language="html" />

<div className="heading2">
    <h3> &lt;style&gt; &lt;/style&gt; | Style Tag</h3>
</div>
<p><code className="markcode"> &lt;style&gt; </code>tag is used to define CSS style information (CSS) for a document.
</p>
<CodeHighlight code={htmlstyle} language="html" />

<div className="heading2">
    <h3> &lt;strike&gt; &lt;/strike&gt; and &lt;s&gt; &lt;/s&gt;</h3>
</div>
<p><code className="markcode">&lt;strike&gt; &lt;/strike&gt;</code>is used to element places a strikethrough
    (horizontal line) over text.</p>
<p><code className="markcode">&lt;s&gt; &lt;/s&gt;</code>is used to element places a strikethrough (horizontal line)
    over text and it work same as strike.
    But Most used Strike.</p>
<span className="outputh">Code:</span>
<CodeHighlight code={htmlstrike} language="html" />

<div className="heading2">
    <h3> &lt;b&gt; &lt;/b&gt; | Bold Tag</h3>
</div>
<p><code className="markcode">&lt;b&gt; &lt;/b&gt;</code>is used to bold the text.</p>
<CodeHighlight code={htmlbold} language="html" />

<div className="heading2">
    <h3> &lt;strong&gt; &lt;/strong&gt; | Strong Tag</h3>
</div>
<p><code className="markcode">&lt;strong&gt; &lt;/strong&gt;</code>is used to define text with strong importance.
    The content inside is typically displayed in bold.</p>
<CodeHighlight code={htmlstrong} language="html" />

<div className="heading2">
    <h3> &lt;u&gt; &lt;/u&gt; | underline Text</h3>
</div>
<p><code className="markcode">&lt;u&gt; &lt;/u&gt;</code>is used to underline the text.</p>
<CodeHighlight code={htmlunderline} language="html" />

<div className="heading2">
    <h3> &lt;sub&gt; &lt;/sub&gt; | SupScript Text</h3>
</div>

<p><code className="markcode">&lt;sub&gt; &lt;/sub&gt;</code>is used to Subcript the text. mean the text,number
    place on blow.</p>
<CodeHighlight code={htmlsub} language="html" />

<div className="heading2">
    <h3> &lt;sup&gt; &lt;/sup&gt; | SupScript Text</h3>
</div>
<p><code className="markcode">&lt;sup&gt; &lt;/sup&gt;</code>is used to SuperScript the text. mean the text,number
    place on Above.</p>
<CodeHighlight code={htmlsup} language="html" />

<div className="heading2">
    <h3> &lt;div&gt; &lt;/div&gt; and &lt;span&gt; &lt;/span&gt;</h3>
</div>
<p><code className="markcode">&lt;div&gt; &lt;/div&gt;</code> tag is used to contain full page block.</p>
<p><code className="markcode">&lt;span&gt; &lt;/span&gt;</code> tag is used to inline block contain data only where
    the text,number is placed.</p>
<CodeHighlight code={htmldiv} language="html" />

<div className="heading2">
    <h3> &lt;summary&gt; &lt;/summary&gt; and &lt;details&gt; &lt;/details&gt;</h3>
</div>
<p><code className="markcode">&lt;summary&gt;&lt/summary&gt;</code> is used to hide and unhide
    detail by click on the heading of summary element.The Summary is added in the details elements.</p>
<CodeHighlight code={htmlsummarydetails} language="html" />

<div className="heading2">
    <h3>&lt;a&gt; &lt;/a&gt; | HyperLink Tag</h3>
</div>
<p>this tag name is hyperlink, and it is used to link the other document or file.</p>
<CodeHighlight code={htmlanchor} language="html" />

<div className="heading2">
    <h3>Download Attribute </h3>
</div>
<p>The download attribute is to instruct the browser to download a url instead of navigating or the download
    attribute specifics that the target(the file specifiend in the href attribute) will be downloaded when a
    user click on the hyperlink.</p>
<CodeHighlight code={htmlattribute} language="html" />

<div className="heading2">
    <h3>&lt;abbr&gt; &lt;/abbr&gt; | Abbrevation Tag</h3>
</div>
<p>abbreviation tag is used to show the user when specific to over the mouse on specific word,then
    they show the what is abbreviation of this word.
</p>
<CodeHighlight code={htmlabbr} language="html" />

<div className="heading2">
    <h3>&lt;address&gt; &lt;/address&gt; | Address Tag</h3>
</div>
<p>tag defines the contact information for the author/owner of a document or an article.
    <br />The contact information can be an email address, URL, physical address, phone number, social media
    handle
</p>
<CodeHighlight code={htmladdress} language="html" />

<div className="heading2">
    <h3> &lt;article&gt; &lt;/article&gt; | Article Tag</h3>
</div>
<p>Article tag is used to the independent, and most of the case it is used in forum,post,blog post,news.</p>
<CodeHighlight code={htmlarticle} language="html" />

<div className="heading2">
    <h3> &lt;aside&gt; &lt;/aside&gt; | Aside Tag</h3>
</div>
<p>The aside content should be indirectly related to the surrounding content. <br />
    content is often placed as a sidebar in a document.</p>
<CodeHighlight code={htmlaside} language="html" />

<div className="heading2">
    <h3>&lt;section&gt; &lt;/section&gt; | Section Tag</h3>
</div>
<p><code className="markcode">&lt;section&gt; &lt;/section&gt;</code> tag defines a section in a document.</p>

<CodeHighlight code={htmlsection} language="html" />


<div className="heading2">
    <h3> &lt;source&gt; &lt;/source&gt; | Source Tag</h3>
</div>
<p><code className="markcode">&lt;source&gt; &lt;/source&gt;</code> tag is used to specify multiple media resources
    for media elements, such as , video,audio,pictures.</p>
<CodeHighlight code={htmlsource} language="html" />

<div className="heading2">
    <h3>&lt;audio&gt; &lt;/audio&gt; | Audio Tag</h3>
</div>
<p>tag is used to embed sound content in a document, such as music or other audio streams.
    The <b>&lt;audio&gt;</b> tag contains one or more &lt;source&gt; tags with different audio sources. The
    browser will choose the first source it supports.
    The text between the &lt;audio&gt; and &lt;/audio&gt; tags will only be displayed in browsers that do not
    support the &lt;audio&gt; element.</p>
<CodeHighlight code={htmlaudio} language="html" />

<div className="heading2">
    <h3> &lt;video&gt; &lt;/video&gt; | Video Tag</h3>
</div>
<p>Tag is used to embed video content in a document, such as a movie clip or other video streams.<br />
    The &lt;video&gt; tag contains one or more &lt;source&gt; tags with different video sources. <br />
    The browser will choose the first source it supports.</p>
<CodeHighlight code={htmlvideo} language="html" />

<div className="heading2">
    <h3> Poster Attribute </h3>
</div>
<p>The Poster attribute to specify an image to be shown while the video is downlading.</p>
<CodeHighlight code={htmlposter} language="html" />

<div className="heading2">
    <h3> &lt;picture&gt; &lt;/picture&gt; | Picture Tag</h3>
</div>
<p><code className="markcode">&lt;picture&gt;</code> tag is used in insert the picture tag.
    &lt;picture&gt; tag gives web developers more flexibility in specifying image resources.</p>

<span className="outputh">Code:</span>
<p>In blow Example we tage three images this work with width.</p>
<CodeHighlight code={htmlpicture} language="html" />




<div className="heading2">
    <h3>&lt;img&gt; &lt;/img&gt; | Image Style in CSS</h3>
</div>
<ul>
    <li><code className="markcode">border-radius :</code>property to create rounded images.</li>
    <li><code className="markcode">border: 1px solid #ddd;</code>Use the border property to create thumbnail images.</li>
    <li><code className="markcode">object-fit </code>property is used to specify how an &lt;img&gt; or &lt;video&gt; should be resized to fit its container.<br /> <strong>Object-fit property is following values;</strong></li>
    <ul>
        <li><code className="markcode">object-fit: fill      ;</code> - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit</li>
        <li><code className="markcode">object-fit: contain;</code> is used in the &lt;img&gt; or &lt;video&gt; to fit in the container.</li>
        <li><code className="markcode">object-fit: cover     ;</code> - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit</li>
        <li><code className="markcode">object-fit: none      ;</code> - The image is not resized</li>
        <li><code className="markcode">object-fit: scale-down;</code> - the image is scaled down to the smallest version of none or contain.</li>
    </ul>
</ul>
<pre className="output"> object-fit: fill | contain | cover | none | scale-down</pre>
<hr />
<p><code className="markcode">object-position</code>property is used to specify how an &lt;img&gt; or &lt;video&gt;
    should be positioned within its container. <br />
    <strong>Note:</strong>It Should work with <em>object-fit:cover;</em>.
</p>
<CodeHighlight code={cssimg} language="css" />
<span className="outputh">Responsive Image </span>
<CodeHighlight code={cssresponsiveimg} language="css" />

<span className="outputh">Center an Image</span>
<p>To center an image, set left and right margin to auto and make it into a block element:</p>
<CodeHighlight code={csscenterimg} language="css" />

<span className="outputh">How to Position Text on Image?</span>
<p>In this blow example you can see that I have set container as a <em>relative</em> b/c the <em>absolute</em>
    item
    move only in the <em>relative</em> box.If i not set the <em>absulute</em> box move outer the
    <em>relative</em>, and work
    as a body.
</p>
<CodeHighlight code={csspositionimg} language="css" />




<div className="heading2">
    <h3>CSS Filter Properties</h3>
</div>
<p>The filter property defines visual effects (like blur and saturation) to an element (often <img />).</p>
<span className="outputh">Properties:</span>
<pre className="output">
    filter: none  | blur()       | brightness() | contrast()   | drop-shadow() |<br></br>
    grayscale()   | hue-rotate() | invert()     | opacity()    | saturate()    |<br></br>
    sepia()       | url();</pre>
<CodeHighlight code={cssfilterproperties} language="css" />


<div className="heading2">
    <h3> &lt;svg&gt; &lt;/svg&gt; | SVG Tag</h3>
</div>
<p><code className="markcode">&lt;svg&gt;</code>tag defines a container for SVG graphics.SVG has several methods for
    drawing paths, boxes, circles, text, and graphic images </p>
<CodeHighlight code={htmlsvg} language="html" />


<div className="heading2">
    <h3>&lt;blockquote&gt; and &lt;q&gt; </h3>
</div>
<ul>
    <li><code className="markcode">&lt;blockquote&gt;</code>tag specifies a section that is quoted from another source.
        blockquote is used for longer text.</li>
    <li><code className="markcode">&lt;q&gt;</code> is used for quotes of inline short text.</li>
</ul>
<CodeHighlight code={htmlblockquote} language="css" />


<div className="heading2">
    <h3>&lt;button&gt;</h3>
</div>
<p><code className="markcode">&lt;button&gt;</code>element you can put text
    (and tags like &lt;i&gt;, &lt;b&&gt;, &lt;strong&gt;, &lt;br&gt;, &lt;img&gt;, etc.).
    That is not possible with a button created with the &lt;input&gt; element!
</p>
<CodeHighlight code={cssbutton} language="css" />

<p><code className="markcode">Form Button</code>is used to submit data.</p>
<CodeHighlight code={htmlformbutton} language="html" />


<p><code className="markcode">formaction</code> attribute specifies where to send the form-data
    when a form is submitted.This attribute overrides the form's action attribute.</p>
<CodeHighlight code={htmlformaction} language="html" />


<p><code className="markcode">formenctype</code> A form with two submit buttons.
    The first submit button submits the form data with default character encoding,
    and the second submits the form data without character encoding:</p>
<CodeHighlight code={htmlformenctype} language="html" />


<p><code className="markcode">formmethod</code>The formmethod attribute is only used for buttons with
    type="submit".<br /> A form with two submit buttons.
    The first submit button submits the form data with method="get", <br />
    and the second submits the form data with method="post":</p>
<CodeHighlight code={htmlformmethod} language="html" />

<p><code className="markcode">formtarget</code>Specifies where to display the response after submitting the form.
    Only for type="submit"</p>
<CodeHighlight code={htmlformtarget} language="html" />

<p><code className="markcode">name</code> attribute is used to reference form-data after the
    form has been submitted, or to reference the element in a JavaScript.</p>
<CodeHighlight code={htmlname} language="html" />

<p><code className="markcode">type</code>attribute specifies the type of button,(button,reset,submit).</p>
<CodeHighlight code={htmltype} language="html" />


<div className="heading2">
    <h3>&lt;caption&gt;&lt;/caption&gt;</h3>
</div>
<ul>
    <li>The caption tag is used to specify the caption of a table.</li>
    <li>This tag will be inserted just after the &lt;table&gt; tag.</li>
    <li>Only one caption can be specified for one table.</li>
    <li>It is by default aligned to the center.</li>
    <li>The title added to an object is called caption.</li>
</ul>
<CodeHighlight code={htmlcaption} language="html" />


<div className="heading2">
    <h3>&lt;code&gt;&lt;/code&gt;</h3>
</div>
<p>tag is used to define a piece of computer code.
    The content inside is displayed in the browser's default monospace font.</p>
<CodeHighlight code={htmlcode} language="html" />

<div className="heading2">
    <h3>&lt;pre&gt;&lt;/pre&gt;</h3>
</div>
<p>tag defines preformatted text, and it is element is displayed in a fixed-width font,
    and the text preserves both spaces and line breaks.
    The text will be displayed exactly as written in the HTML source code.</p>
<CodeHighlight code={htmlpre} language="html" />

<div className="heading2">
    <h3>&lt;samp&gt; &lt;/samp&gt;</h3>
</div>
<ul>
    <li>The <code className="markcode">&lt;samp&gt;</code> tag is used to define sample output from a computer program.</li>
    <li>he content inside is displayed in the browser's default monospace font.</li>
</ul>
<CodeHighlight code={htmlsamp} language="html" />

<div className="heading2">
    <h3>&lt;bdo&gt;&lt;/bdo&gt; | Text Direction</h3>
</div>
<p>The <code className="markcode">&lt;bdo&gt</code> tag is used to override the current text direction.</p>
<CodeHighlight code={htmlbdo} language="html" />

<div className="heading2">
    <h3>&lt;kbd&gt; &lt;/kbd&gt;</h3>
</div>
<p>The <code className="markcode">&lt;kbd&gt;</code> tag is used to define keyboard input. The content inside is
    displayed in the browser's default monospace font.</p>
<CodeHighlight code={htmlkbd} language="html" />

<div className="heading2">
    <h3>&lt;option&gt; &lt;/option&gt;</h3>
</div>
<p><code className="markcode">&lt;option&gt;</code> is used to show the dropdown list to select user specific
    option. <br />
    <code className="markcode">&lt;datalist&gt;&lt;/datalist&gt;, &lt;optgroup&gt; &lt;/optgroup&gt;</code> is also
    used in option tag.
</p>
<CodeHighlight code={htmloption} language="html" />

<div className="heading2">
    <h3>&lt;datalist&gt;&lt;/datalist&gt;</h3>
</div>
<p> tag is used to provide an "autocomplete" feature for &lt;/input&gt; elements.
    Users will see a drop-down list of pre-defined options as they input data.</p>
<CodeHighlight code={htmldatalist} language="html" />

<div className="heading2">
    <h3>&lt;optgroup&gt; &lt;/optgroup&gt;</h3>
</div>
<p><code className="markcode">&lt;optgroup&gt;</code> is used to divide the option group by heading use.</p>
<CodeHighlight code={htmloptgroup} language="html" />

<div className="heading2">
    <h3>&lt;dd&gt; and &lt;dt&gt;</h3>
</div>
<p>tag is used to describe a term/name in a description list.tag is used in conjunction with
    <b>&lt;dl&gt;</b> (defines a description list) <br />
    <b> &lt;dt&gt;</b> (defines terms/names).<br />
    Inside a &lt;dd&gt; tag you can put paragraphs, line breaks, images, links, lists, etc.
</p>
<CodeHighlight code={htmldd} language="html" />


<div className="heading2">
    <h3>&lt;fieldset&gt; and &lt;fieldset&gt;</h3>
</div>
<p>tag is used to group related elements in a form and tag draws a box around the related elements.</p>
<CodeHighlight code={htmlfieldset} language="html" />



<div className="heading2">
    <h3>&lt;figure&gt; and &lt;figcaption&gt;</h3>
</div>
<p><code className="markcode">&lt;figure&gt;</code> tag specifies self-contained content, like illustrations,
    diagrams, photos, code listings, etc.</p><br />
<p><code className="markcode">&lt;figcaption&gt;</code>tag defines a caption for a &lt;figure&gt; element.</p>
<CodeHighlight code={htmlfigure} language="html" />


<div className="heading2">
    <h3>&lt;footer&gt; and &lt;/footer&gt;</h3>
</div>
<p><code className="markcode">&lt;footer&gt;</code> tag defines a footer for a document or section. <br />
    A &lt;footer&gt; element typically contains:
</p>

<pre className="output">
    authorship information
    copyright information
    contact information
    sitemap
    back to top links
    related documents
</pre>
<CodeHighlight code={htmlfooter} language="html" />

<div className="heading2">
    <h3>&lt;iframe&gt; and &lt;/iframe&gt;</h3>
</div>
<p><code className="markcode">&lt;iframe&gt;</code> tag to embed another document within the current HTML document:
</p>
<CodeHighlight code={htmliframe} language="html" />

<div className="heading2">
    <h3> &lt;hr&gt;</h3>
</div>
<p><code className="markcode"> &lt;hr&gt;</code>element is most often displayed as a horizontal rule
    that is used to separate content (or define a change) in an HTML page. </p>
<CodeHighlight code={htmlhr} language="html" />

<div className="heading2">
    <h3> &lt;input&gt; | Input Tags</h3>
</div>
<p>For get user input then use these input tags;</p>
<CodeHighlight code={htmlinputtag} language="html" />

<div className="heading2">
    <h3> &lt;input&gt; | Accept</h3>
</div>
<p>The Accept attribute is used to specify the type of files the user can upload.In blow example user can upload
    or use only <code className="markcode">.jpg or .raw</code> files.</p>
<CodeHighlight code={htmlinputaccept} language="html" />
<div className="heading2">
    <h3> &lt;textarea&gt; &lt;/textarea&gt; | Textarea Tags</h3>
</div>

<p>The <code> &lt;textarea&gt</code> tag defines a multi-line text input control. <br />
    The size of a text area is specified by the &lt;cols&gt; and &lt;rows&gt; attributes (or with CSS).</p>
<br />
<p><code className="markcode">autofocus</code>Specifies that a text area should automatically get focus when the
    page loads.</p>
<p><code className="markcode">cols</code> Specifies the visible width of a text area</p>
<p><code className="markcode">dirname</code>Specifies that the text direction of the textarea will be submitted</p>
<p><code className="markcode">disabled</code>Specifies that a text area should be disabled</p>
<p><code className="markcode">form</code>Specifies which form the text area belongs to</p>
<p><code className="markcode">maxlength</code>Specifies the maximum number of characters allowed in the text area
</p>
<p><code className="markcode">name</code>Specifies a name for a text area</p>
<p><code className="markcode">placeholder</code>Specifies a short hint that describes the expected value of a text
    area</p>
<p><code className="markcode">readonly</code>Specifies that a text area should be read-only</p>
<p><code className="markcode">required</code>Specifies that a text area is required/must be filled out</p>
<p><code className="markcode">rows</code>Specifies the visible number of lines in a text area</p>
<p><code className="markcode">wrap</code>Specifies how the text in a text area is to be wrapped when submitted in a
    form</p>
<CodeHighlight code={htmlinput} language="html" />

<div className="heading2">
    <h3> &lt;label&gt; &lt;/label&gt;</h3>
</div>
<p>label is used to text attached to the input tag.</p>
<CodeHighlight code={htmllabel} language="html" />

<div className="heading2">
    <h3> &lt;mark&gt; &lt;/mark&gt;</h3>
</div>
<p>tag defines text that should be marked or highlighted.</p>
<CodeHighlight code={htmlmark} language="html" />

<div className="heading2">
    <h3> &lt;input&gt; | Input Range in JS(DOM)</h3>
</div>
<CodeHighlight code={htmlinputrange} language="html" />

<div className="heading2">
    <h3> &lt;meter&gt; &lt;/meter&gt;</h3>
</div>
<ul>
    <li><code className="markcode">&lt;meter&gt;</code> tag defines a scalar measurement within a known range, or a fractional value.</li>
    <li>This is also known as a gauge.</li>
    <ul>
        <li><b>Examples:</b> Disk usage, the relevance of a query result, etc.</li>
    </ul>
    <li><code className="markcode">&lt;meter&gt;</code> tag should not be used to indicate progress (as in a progress bar).</li>
    <li> For progress bars, use the <code className="markcode">&lt;progress&gt;</code> tag.</li>
</ul><br />
<p><code className="markcode">High</code>attribute specifies the range where the gauge's value is considered to be a
    high value.
    The high attribute value must be less than the max attribute value, and it also must be greater than the low
    and min attribute values.
</p>
<p><code className="markcode">low</code>attribute specifies the range where the gauge's value is considered to be a
    low value.
    The low attribute value must be greater than the min attribute value, and it also must be less than the high
    and max attribute values.
</p>
<p><code className="markcode">min</code>attribute specifies the lower bound of the gauge.
    The min attribute value must be less than the max attribute value.
    If unspecified, the default value is 0.
</p>
<p><code className="markcode">max</code>attribute specifies the upper bound of the gauge.
    The max attribute value must be greater than the min attribute value.
    If unspecified, the default value is 1.
</p>
<p><code className="markcode">optimum </code>attribute specifies the range where the gauge's value is
    considered to be an optimal value.
</p>
<p><code className="markcode">value </code>The required value attribute specifies the current, or "measured", value
    of the gauge.
    The value attribute must be between the min and max attribute values.
</p>
<pre className="output">
    value+min+max
    value+low+high
    value   //highest value is 1 and lowest is 0
</pre>

<CodeHighlight code={htmlmeter} language="html" />


<div className="heading2">
    <h3> &lt;progress&gt; &lt;/progress&gt;</h3>
</div>
<p>tag represents the completion progress of a task.</p>
<p><code className="markcode">max</code>Specifies how much work the task requires in total. Default value is 1</p>
<p><code className="markcode">value</code>Specifies how much of the task has been completed.</p>
<CodeHighlight code={htmlprogress} language="html" />

<div className="heading2">
    <h3> &lt;output&gt; &lt;/output&gt; | output Tag</h3>
</div>
<p><code className="markcode">&lt;output&gt;</code>tag is used to represent the result of a calculation
    (like one performed by a script),progress bar,meter progrss.</p>

<span className="outputh">Code:</span>
<p>In Blow Code you can see that first display the input range and get the range in oninput then input range is
    give.at the end output show the
    number range. <code className="markcode">parseInt(a.value)</code> is used to change the value into integer
    number.
</p>
<CodeHighlight code={htmloutput} language="html" />


<div className="heading2">
    <h3> &lt;table&gt; &lt;/table&gt; | Table Tag</h3>
</div>
<p><code className="markcode"> &lt;table&gt; &lt;/table&gt;</code>tag defines an HTML table.</p>
<p>In table tag we used:</p>
<ul>
    <li><code className="markcode">&lt;tr&gt;    &lt;/tr&gt;</code> : Table Row</li>
    <li><code className="markcode">&lt;th&gt;    &lt;/th&gt;</code> : Table Heading</li>
    <li><code className="markcode">&lt;td&gt;    &lt;/td&gt;</code> : Table Data</li>
    <li><code className="markcode">&lt;thead&gt; &lt;/thead&gt;</code> : Table Heading</li>
    <li><code className="markcode">&lt;tbody&gt; &lt;/tbody&gt;</code> : Table Body</li>
    <li><code className="markcode">&lt;tfoot&gt; &lt;/tfoot&gt;</code> : Table Footer Content</li>
</ul>
<CodeHighlight code={htmltable} language="html" />


<div className="heading2">
    <h3> &lt;var&gt; &lt;/var&gt; | Programming and Mathematical Variable Tag</h3>
</div>
<p><code className="markcode"> &lt;var&gt; &lt;/var&gt;</code>tag is used to defines a variable in programming or in
    a mathematical expression.
    The content inside is typically displayed in italic.
</p>
<CodeHighlight code={htmlvar} language="html" />


<div className="heading2">
    <h3> &lt;ul&gt; &lt;/ul&gt; &lt;ol&gt; &lt;/ol&gt; | Unordered List element and Ordered List element Tag
    </h3>
</div>
<ul>
    <li><code className="markcode"> &lt;ul&gt; &lt;/ul&gt;</code> tag is used to show the unordered List Elements like bullets.</li>
    <li><code className="markcode"> &lt;ol&gt; &lt;/ol&gt;</code> tag is used to show the order list element like number,alphabets etc.</li>
</ul>
<CodeHighlight code={htmlul} language="html" />

<h1 className="heading1">CSS (Cascading Style Sheet)</h1>
<div className="heading2">
    <h3> CSS Prefix</h3>
</div>
<p>Basically Some properties of the css has develop after the make browser then some browser is
    not support those property then we use the css prefix.Some css prefix are the blow:</p>
<CodeHighlight code={cssprefix} language="css" />


<div className="heading2">
    <h3>CSS Web Safe Fonts</h3>
</div>
<p>Web safe fonts are fonts that are universally installed across all browsers and devices.</p>
<div className="Short-head">
    <h3>Fallback Fonts </h3>
</div>
<p>However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is
    not installed properly.
    Therefore, it is very important to always use fallback fonts.</p>
<span className="outputh">Syntax : </span>
<p>Here, there are three font types: Tahoma, Verdana, and sans-serif. The second and third fonts are backups, in
    case the first one is not found.</p>
<CodeHighlight code={cssfallbackfont} language="css" />

<div className="Short-head">
    <h3>Best Web Safe Fonts for HTML and CSS </h3>
</div>
<p>The following list are the best web safe fonts for HTML and CSS:</p>
<pre className="output">
    &nbsp;&nbsp;Arial             (sans-serif) <br></br>
    &nbsp;&nbsp;Verdana           (sans-serif) <br></br>
    &nbsp;&nbsp;Helvetica         (sans-serif) <br></br>
    &nbsp;&nbsp;Tahoma            (sans-serif) <br></br>
    &nbsp;&nbsp;Trebuchet MS      (sans-serif) <br></br>
    &nbsp;&nbsp;Times New Roman   (serif) <br></br>
    &nbsp;&nbsp;Georgia           (serif) <br></br>
    &nbsp;&nbsp;Garamond          (serif) <br></br>
    &nbsp;&nbsp;Courier New       (monospace) <br></br>
    &nbsp;&nbsp;Brush Script MT   (cursive) <br></br>
</pre>
<div className="Short-head">
    <h3>CSS Google Fonts</h3>
</div>
<p>If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.
    Google Fonts are free to use, and have more than 1000 fonts to choose from.</p>
<CodeHighlight code={htmlfont} language="html" />

<div className="Short-head">
    <h3>CSS Font Style </h3>
</div>
<p>The font-style property is mostly used to specify italic text.
    <br />
    This property has three values:
</p>
<CodeHighlight code={htmlfontstyle} language="css" />
<div className="Short-head">
    <h3>CSS Font Weight Style </h3>
</div>
<p>The font-weight property specifies the weight of a font:</p>
<CodeHighlight code={cssfontweight} language="css" />

<div className="Short-head">
    <h3>CSS Font Variant Style </h3>
</div>
<ul>
    <li>Text should be displayed in a small-caps font.</li>
    <li> In a small-caps font, all lowercase letters are converted to uppercase letters.</li>
    <li>However, the converted uppercase letters appears in a smaller font size and the original uppercase letters that has already in uppdercase are font size is default in the text.</li>
</ul>
<CodeHighlight code={cssfontvariant} language="css" />

<div className="Short-head">
    <h3>CSS Font Property Shorthand</h3>
</div> <br />
<pre className="output">
    font-style <br></br>
    font-variant <br></br>
    font-weight <br></br>
    font-size/line-height <br></br>
    font-family <br></br>
    font: italic small-caps bold 12px/30px Georgia, serif; <br></br>
</pre>


<div className="heading2">
    <h3> Column Properties in CSS
        <span>
            <a href="https://www.w3schools.com/cssref/css3_pr_column-count.asp" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<ul>
    <li><code className="markcode">column-count      :</code>Specifies the number of columns an element (page,div) should be divided into column.</li>
    <li><code className="markcode">column-fill       :</code>property specifies how to fill columns, balanced or not.</li>
    <li><code className="markcode">column-gap        :</code>Specifies the gap between the columns</li>
    <li><code className="markcode">column-rule-width :</code>Specifies the width of the rule between columns</li>
    <li><code className="markcode">column-rule-color :</code>Specifies the color of the rule between columns</li>
    <li><code className="markcode">column-rule-style :</code>Specifies the style of the rule between columns</li>
    <li><code className="markcode">column-rule       :</code>A shorthand property for setting all the column-rule-* properties</li>
    <li><code className="markcode">column-span       :</code>Specifies how many columns an element should span across</li>
    <li><code className="markcode">column-width      :</code>property specifies the column width</li>
    <li><code className="markcode">columns           :</code>A shorthand property for setting column-width and column-count</li>
</ul>

<pre className="output">
    column-count      : 3;  <br></br>
    column-width      : auto   | length  | initial | inherit | <br></br>
    column-rule-style : none   | hidden  | dotted  | dashed  | solid   | double  | <br></br>
    groove | ridge   | inset   | outset  | initial | inherit |  <br></br>
    column-rule-width : medium | thin    | thick   | length  | initial | inherit | <br></br>
    column-span       : none   | all     | initial | inherit | <br></br>
    column-fill       : balance| auto    | initial | inherit |  <br></br>
    column-gap        : 40px; <br></br>
    column-rule-color : #ff0000; <br></br>
    column-rule       : (column-rule-width) (column-rule-style) (column-rule-color); <br></br>
    : 4px double #ff00ff; <br></br>
    columns           : (column-width) (column-count) <br></br>
    : 100px 3; <br></br>
</pre>


<div className="heading2">
    <h3>width &amp; max-width &amp; min-width
        <span>
            <a href="https://www.youtube.com/watch?v=ReWjKckS3hU" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<ul>
    <li><b>Width</b> : you can add in px but px is not responsive.Also you add in percentage then percantage is make element responsive.</li>
    <li>While max-width define the maximum size the element is allow to have. when the element reach the max-width size they not working.</li>
    <li>The <code className="markcode">min-width</code> property in CSS is used to set the minimum width of a specified element</li>
    <li>Using <code className="markcode">min-width</code> handling of small windows.</li>
</ul>
<CodeHighlight code={csswidth} language="css" />

<div className="heading2">
    <h3>height &amp; max-height &amp; min-height
        <span>
            <a href="https://youtu.be/RayG28bFTsc?list=PLw9zMOoodWb4OtAt8aDKqklEJDqZHYXBm&t=166" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<ul>
    <li>The amount of vertical space in an browser window by
        an element is called the height of that element.</li>
    <li>The height property sets the height of an element.</li>
    <li>By Default element Height is auto.</li>
</ul>


<div className="heading2">
    <h3>overflow</h3>
</div>
<p>When we create a div the set the width and height, and we enter the text that have large size to
    the div then the text should be show above in the box the we set the properties to the overflow text.
</p>
<p><code className="markcode">overflow : visible ;</code> Default. The overflow is not clipped. The content renders
    outside the element's box </p>
<p><code className="markcode">overflow : hidden  ;</code> The overflow is clipped, and the rest of the content will
    be invisible </p>
<p><code className="markcode">overflow : scroll  ;</code> The overflow is clipped, and a scrollbar is added to see
    the rest of the content </p>
<p><code className="markcode">overflow : auto    ;</code> Similar to scroll, but it adds scrollbars only when
    necessary </p>
<p><code className="markcode">overflow-x          </code>specifies what to do with the left/right edges of the
    content.</p>
<p><code className="markcode">overflow-y          </code>specifies what to do with the top/bottom edges of the
    content.</p>

<CodeHighlight code={cssoverflow} language="css" />

<div className="Short-head">
    <h3>CSS Opacity / Transparency</h3>
</div>
<p>The opacity property specifies the opacity/transparency of an element. </p>
<ul>
    <li>You can apply opacity on images,div background,rgpa colors.</li>
    <li>The opacity property can take a value from 0.0 - 1.0. </li>
    <li><strong>Note : </strong>The Default size of opacity is 1.</li>
    <li>The lower value, the more transparent:</li>
</ul>
<CodeHighlight code={cssopacity} language="css" />

<div className="heading2">
    <h3>Types of Selectors</h3>
</div> <br />
<pre className="output">
    <strong>01</strong> Simple selectors
    <strong>02</strong> Combinator selectors
    <strong>03</strong> Pseudo-class selectors
    <strong>04</strong> Pseudo-elements selectors
    <strong>05</strong> Attribute selectors       </pre>

<div className="heading2">
    <h3>1 - Simple Selector</h3>
</div>
<p>Select elements based on name, id, class</p>
<ul>
    <li><strong>Element Selector</strong> : It is used to select an element based on the tag name</li>
    <CodeHighlight code={csselementselector} language="css" />
    <li><strong>Id Selector</strong> : It is used to select an element with a given id.</li>
    <li>‘#’ is used to target by id</li>
    <CodeHighlight code={csselementselectorhash} language="css" />
    <li><strong>Class Selector</strong> : It is used to select an element with a given class.</li>
    <CodeHighlight code={csselementselectorclass} language="css" />
</ul>

<div className="heading2">
    <h3>2 - Combinator Selector</h3>
</div>
<ul>
    <li>A combinator is something that explains the relationship between the selectors.</li>
    <li>A CSS selector can contain more than one simple selector.</li>
    <li> Between the simple electors, we can include a combinator.</li>
</ul>
<p><strong>There are four different combinators in CSS:</strong></p>

<ol type="1">
    <li>Descendant selector (space)</li>
    <li>child selector (&gt;)</li>
    <li>Adjacent sibling selector (+)</li>
    <li>General sibling selector (~)</li>
</ol>

<ol>
    <li><strong>Descendant Selector</strong></li>
    <ul>
        <li>Multiple selectors combined together, but separated by a space.</li>
        <li>used to select all the elements which are child of the element (not a specific element).</li>
        <li>In Blow Example You can see the Selector is highlight all element of p that present in div.</li>
        <CodeHighlight code={cssdescendentselector} language="css" />
    </ul>
    <li><strong>Child Selector</strong></li>
    <ul>
        <li>The child selector selects all elements that are the children of a specified element.</li>
        <CodeHighlight code={csschildselector} language="css" />
    </ul>
    <li><strong>Adjacent Sibling Selector</strong></li>
    <p>The adjacent sibling selector is used to when the after the div has element then follow the property.</p>
    <CodeHighlight code={htmlchildselector} language="html" />
    <li><strong>General Sibling Selector</strong></li>
    <ul>
        <li>The general sibling selector selects all elements that are next siblings of a specified element.</li>
    </ul>
    <CodeHighlight code={htmlgeneralselector} language="html" />
</ol>

<div className="heading2">
    <h3>  3 - Pseudo-class Selector
        <span>
            <a href="https://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>

<p>A pseudo-class is used to define a special state of an element.</p>
<ul>
    <li>Style an element when a user mouses over it</li>
    <li>Style visited and unvisited links differently</li>
    <li>Style an element when it gets focus</li>
</ul>
<CodeHighlight code={csspseudoselector} language="css" />


<div className="heading2">
    <h3> Anchor Pseudo-classes</h3>
</div>
<CodeHighlight code={cssanchorpseudo} language="css" />

<span className="outputh">CSS - The :first-child Pseudo-class</span>
<p>The <code className="markcode">:first-child</code> pseudo-class matches a specified element that is the first
    child of another element.</p>
<span className="marku">Example:</span>
<p>In blow example you can see the <code className="markcode">:first-child</code> is select all the elements of p
    and then highlight first element.</p>
<CodeHighlight code={cssfistchild} language="css" />

<div className="heading2">
    <h3> All CSS Pseudo Classes
        <span>
            <a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>


<div className="heading2">
    <h3>Pseudo Elements</h3>
</div>
<ul>
    <li>A CSS pseudo-element is used to style specified parts of an element.</li>
    <li>For example, it can be used to:</li>
    <ul>
        <li>Style the first letter, or line, of an element</li>
        <li>Insert content before, or after, the content of an element</li>
    </ul>
</ul>
<img src={`${website}/images/selector.png`} alt="selector" />

<div className="Short-head">
    <h3>::after &amp; ::before </h3>
</div>
<ul>
    <li><code className="markcode">::after</code> is the add the content after the HMTL element Text.</li>
    <li><code className="markcode">::after</code> Insert some text before the content of each &lt;p&gt; element.</li>
    <li>we use these selector for most icon and border.</li>
</ul>
<CodeHighlight code={htmlafterbefore} language="html" />

<div className="Short-head">
    <h3>::first-letter </h3>
</div>
<p>Select and style the first letter of every &lt;p&gt; element:</p>
<CodeHighlight code={cssfistletter} language="css" />

<div className="Short-head">
    <h3>::first-line </h3>
</div>
<p>It would Highlight the first Line of Page only.</p>
<CodeHighlight code={cssfistline} language="css" />

<div className="Short-head">
    <h3>::selection</h3>
</div>
<p>It would be change the background of the color and font color of the text when we select the text for copy.</p>
<CodeHighlight code={cssselection} language="css" />

<div className="heading2">
    <h3>Pseudo Elements Selector</h3>
</div>

<div className="heading2">
    <h3>Attribute Selector</h3>
</div>
<p>The <code className="markcode">[attribute]</code> selector is used to select elements with a specified attribute.
</p>
<span className="outputh">Example:</span>
<p>The following example selects all &lt;a&gt; elements with a target attribute:</p>
<CodeHighlight code={cssattributeselector1} language="css" />

<p>The <code className="markcode">[attribute="value"]</code> selector is used to select elements with a specified
    attribute and value. The following example selects all &lt;a&gt; elements with a target="_blank" attribute:
</p>
<CodeHighlight code={cssattributeselector2} language="css" />

<span className="marku"><strong>CSS [attribute~="value"] Selector</strong></span>
<p>The [attribute~="value"] selector is used to select elements with an attribute value containing a specified
    word.Mostly used in Pictures.
</p>
<CodeHighlight code={cssattributeselector3} language="css" />

<span className="marku"><strong>CSS [attribute|="value"] Selector</strong></span>
<p>The [attribute|="value"] selector is used to select elements with the specified attribute starting with the
    specified value. </p>
<CodeHighlight code={htmlcssattribute} language="html" />


<div className="heading2">
    <h3>CSS content Properties</h3>
</div>
<p>The content property is used with the <code className="markcode">::before </code>and <code
    className="markcode">::after</code> pseudo-elements, to insert generated content.</p>
<CodeHighlight code={contentProperties} language="css" />

<div className="heading2">
    <h3> CSS Counters
        <span>
            <a href="https://www.w3schools.com/css/css_counters.asp" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<p>CSS counters are like "variables". The variable values can be
    incremented by CSS rules (which will track how many times they are used).</p>
<ul>
    <li><code className="markcode">counter-reset     :</code>Creates or resets a counter</li>
    <li><code className="markcode">counter-increment :</code>Increments a counter value</li>
    <li><code className="markcode">content           :</code> Add the Content</li>
    <li><code className="markcode">counter() </code> or <code className="markcode">counters():</code>  function - Adds the value of a counter to an element</li>
</ul>
<div className="heading2">
    <h3>CSS Background Tag</h3>
</div>
<p>The CSS background properties are used to add background effects for elements.</p>
<CodeHighlight code={bgtag} language="css" />

<p><code className="markcode">background</code> is the shorthand property of the background image,repeat, attachment,position.</p>
<pre className="output">background : bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;<br></br>
    background           : #ffffff url("img_tree.png") no-repeat right top;<br></br></pre>
<CodeHighlight code={bgtagoutput} language="css" />

<div className="heading2">
    <h3>CSS Gradient Background color | background-image </h3>
</div>
<p>Basically two types of Gradiet backgroun-image color;</p>
<ol type="1">
    <li>Linear Gradients (goes down/up/left/right/diagonally)</li>
    <li>Radial Gradients (defined by their center)</li>
</ol>
<hr />
<ul>
    <li><code className="markcode">linear-gradiant()</code> css function work with the background-image or background css property.</li>
    <li>You can pass the two or three parameter in the linear-gradiant() css function.</li>
    <li>First parameter is the direction of the color <code className="markcode">to</code> keyword is used for direction color start move from
        <kbd>left</kbd>,
        <kbd>right</kbd>,
        <kbd>top</kbd>,
        <kbd>bottom</kbd></li>
    <li>You can also use the <kbd>deg</kbd> for direction of color.</li>
    <li>The Second and thirds parameter is the color move e.g red,yellow this color start with red and move to yellow.</li>
</ul>
<CodeHighlight code={bgtagoutput1} language="css" />
<CodeHighlight code={bgtagoutput2} language="css" />


<center><button className="btn-grad"><a href="https://gradientbuttons.colorion.co/" target="_blank">Visit CSS Gradient Button Website</a></button></center>

<div className="heading2">
    <h3>CSS Margin Properties</h3>
</div>
<ul>
    <li>Used to create space around elements, outside of any defined borders.</li>
</ul>
<CodeHighlight code={marginproperty} language="css" />
<span className="outputh">Shorthand of margin :</span>
<pre className="output">
    margin : top   right bottom left;  |Seprate apply top,right,bottom,left margin <br></br>
    margin : 100px 150px 100px  80px; <br></br>
    margin : 0     150px 0      80px; <br></br>
    margin : 0     0     0      80px; <br></br>
    margin : top/bottom+left/right;   |Apply top/bottom same and left/right same <br></br>
    margin : top/bottom/left/right;   |Apply same margine <br></br>
    margin : auto;                    |Align center item by apply width <br></br>
</pre>



<div className="heading2">
    <h3>CSS Padding Properties</h3>
</div>
<p>The CSS padding properties are used to generate space around an element's content, inside of any
    defined borders. <br />
    There are properties for setting the padding for each side of an element (top, right, bottom, and
    left).</p>
<CodeHighlight code={paddingproperty} language="css" />
<span className="outputh">Shorthand of Padding :</span>
<h3>Output</h3>
<pre className="output">
    &nbsp;&nbsp;padding : top   right bottom left; |Seprate apply top,right,bottom,left padding <br></br>
    &nbsp;&nbsp;padding : 100px 150px 100px  80px; <br></br>
    &nbsp;&nbsp;padding : 0     150px 0      80px; <br></br>
    &nbsp;&nbsp;padding : 0     0     0      80px; <br></br>
    &nbsp;&nbsp;padding : top/bottom+left/right;   |Apply top/bottom same and left/right same <br></br>
    &nbsp;&nbsp;padding : top/bottom/left/right;   |Apply same padding top/right/bottom/left <br></br>
    &nbsp;&nbsp;padding : auto;                    |Align center item by apply width <br></br>
</pre>

<div className="heading2">
    <h3> CSS Outline Properties
        <span>
            <a href="https://youtu.be/1B3qKnP4OJ4?list=PLw9zMOoodWb4OtAt8aDKqklEJDqZHYXBm&t=313" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<p>An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".</p>
<br />
<table style={{ "fontSize": "2.1rem" }}>
    <thead>
        <tr>
            <th>Outline</th>
            <th>border</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Outline has no effect on Element Size.</td>
            <td>However, Border affects the Elemenf Size.</td>
        </tr>
        <tr>
            <td>We can set the outine from <code>OFFSET</code> to inside or outside of any element.</td>
            <td>Outline cannot be rounded.</td>
        </tr>
    </tbody>
</table>
<hr />
<p>The <code className="markcode">outline-offset: 15px; </code> property adds space
    between an outline and the edge/border of an element.
    The space between an element and its outline is transparent.</p>
<pre className="output">
    &nbsp;<strong>1. </strong>outline-style<br />
    &nbsp;<strong>2. </strong>outline-color<br />
    &nbsp;<strong>3. </strong>outline-width<br />
    &nbsp;<strong>4. </strong>outline-offset<br />
    &nbsp;<strong>5. </strong>outline (Shorthand)<br />
    &nbsp;<strong>6. </strong>outline-offset<br />
</pre>
<span className="outputh">Syntax:</span>
<CodeHighlight code={outlinepropertyOutput} language="css" />


<span className="outputh">Shorthand of Outline Properties :</span>
<CodeHighlight code={outlinePropertyOutline} language="css" />

<div className="heading2">
    <h3>CSS Text Properties</h3>
</div>
<p><code className="markcode">color:name; </code> is used to change the color of Text.You can give the color
    name in rgba,hsl or red,blue.</p>
<CodeHighlight code={textproperty} language="css" />

<div className="Short-head">
    <h3>Horizontal Alignment of Text </h3>
</div>
<p> The <code className="markcode">text-align</code> property is used to set the horizontal alignment of a
    text.</p>
<CodeHighlight code={horizontaltext} language="css" />

<div className="Short-head">
    <h3>vertical Alignment of Text : </h3>
</div>
<p>The <code className="markcode">vertical-align</code>
    property sets the vertical alignment of an element.</p>
<CodeHighlight code={verticaltext} language="css" />

<div className="Short-head">
    <h3>Text Direction </h3>
</div>
<p>The <code className="markcode">direction</code> and <code className="markcode">unicode-bidi</code> properties
    can be used to change
    the text direction of an element:</p>
<CodeHighlight code={textDirection} language="css" />

<div className="Short-head">
    <h3>Text Decoration </h3>
</div>
<p> The <code className="markcode">text-decoration</code> property is used to set or remove decorations from text.</p>

<CodeHighlight code={textDirection1} language="css" />

<div className="Short-head">
    <h3>Text Transformation </h3>
</div>
<p> The <code className="markcode">text-transform </code>property is used to specify uppercase and lowercase letters in a text. </p>
<CodeHighlight code={texTransform} language="css" />

<div className="Short-head">
    <h3>Text Indentation </h3>
</div>
<p> The <code className="markcode">text-indent </code>property is used to specify the indentation of the first line of a text mean each element if you apply this. </p>
<CodeHighlight code={textIndentation} language="css" />


<div className="Short-head">
    <h3>Letter Spacing </h3>
</div>
<p> The <code className="markcode">letter-spacing </code>property is used to specify the space between the characters in a text. <br />
    The following example demonstrates how to increase or decrease the space between characters: </p>
<CodeHighlight code={letterSpacing} language="css" />

<div className="Short-head">
    <h3>Word Spacing </h3>
</div>
<p> The <code className="markcode">word-spacing </code> property is used to specify the space between the
    words in a text. </p>
<CodeHighlight code={wordSpacing} language="css" />

<div className="Short-head">
    <h3>Line Height </h3>
</div>
<p>The <code className="markcode">line-height </code> property is used to specify the space between lines:</p>
<CodeHighlight code={lineHeight} language="css" />

<div className="Short-head">
    <h3>White Space </h3>
</div>
<p>The <code className="markcode">white-space </code> property specifies how white-space inside an element is handled. </p>
<CodeHighlight code={whiteSpace} language="css" />

<h1 className="heading1">CSS Shadow Property</h1>
<p>Two types of CSS Shadow Property;</p><br />
<ul>
    <li><strong>text-shadow</strong></li>
    <li><strong>box-shadow</strong></li>
</ul><br />
<div className="heading2">
    <h3> text-shadow</h3>
</div>
<ul>
    <li><code className="markcode">text-shadow</code> property is used to the text Horizontal shadow and the vertical shadow.</li>
    <li>In Blow Example you can see horizontal shadow (2px) and the vertical shadow (2px) added in the text
        and then last you pass the color of shadow.</li>
    <pre className="language-css"><code className="language-css">text-shadow: Horizontal vertical blur color;</code></pre>
</ul>

<CodeHighlight code={textShow} language="css" />

<div className="heading2">
    <h3> box-shadow</h3>
</div>
<ul>
    <li><code className="markcode">box-shadow</code> property is used to show the shadow effect on the box.</li>
    <li>You can add the Horizontal and vertical shadow on the box-shadow property,then blur effect and color of the shadow in rgba or hex as you preffered.</li>
</ul>

<span className="outputh"><strong>Syntax:</strong></span>
<ul>
    <li><code className="markcode">h-offset</code> Horizontal Shadow           </li>
    <li><code className="markcode">v-offset</code>vertical shadow              </li>
    <li><code className="markcode">blur</code>Added Blur Effect                </li>
    <li><code className="markcode">spread</code>How much Spread the Shadow     </li>
    <li><code className="markcode">color</code>Added the color in rgba,hex etc.</li>
</ul>
<CodeHighlight code={boxShow} language="css" />

<h1 className="heading1">Display Properties</h1>
<br />
<CodeHighlight code={boxShowOutput} language="css" />

<p><kbd>display:none;</kbd></p>
<ul>
    <li>Property is used to hide the specific element in the web page.</li>
    <li>You can Target the specific element to hide the element.</li>
</ul>
<CodeHighlight code={display1} language="css" />

<p><kbd>display:block;</kbd></p>
<ul>
    <li><b>First </b> diplay:block;property is used to unhide the specific element in the web page where you can hide.</li>
    <li><b>Second, </b>if you cann't place the element inline then you can use the property block; they block the display other element on those line.</li>
</ul>
<CodeHighlight code={displayblock} language="css" />

<p><kbd>display:inline;</kbd></p>
<ul>
    <li>property is used to place the element in the inline.</li>
    <li><strong>For Example:</strong><br /> We have three list element then we list element show in the inline. You can use the display:inline property.</li>
</ul>
<CodeHighlight code={displayinline} language="html" />

<div className="heading2">
    <h3>visibility:value;</h3>
</div>
<ul>
    <li>Property is used to hide the element</li>
    <li>By Default visibility is <code className="markcode">visible</code>.</li>
    <li><code className="markcode">visibility:hidden;</code> then element should be hide.But it contain space in hidden.</li>
    <li><code className="markcode">visibility:none;</code> then element should be hide.But it contain can not contain space.</li>
</ul>

<p><strong>For Example:</strong><br /></p>
<p>In Blow Example You can See that the element is hidden but it contain space.</p>
<CodeHighlight code={visibility} language="html" />

<div className="heading2"
    style={{ "color": "white", "backgroundColor": "blue", "marginTop": "7px", "fontFamily": "consolas" }}>
    <h3>Difference b/w Display:none; and visibility:hidden;</h3>
</div>
<ul>
    <li><strong>display:none;</strong> - It completely removes an HTML tag from the web page like it was never there.</li>
    <li><strong>visibility:hidden;</strong> - It makes the tag invisible but will not remove the element,and it will still occupy the space on the page.</li>
</ul>

<div className="heading2"
    style={{ "color": "white", "backgroundColor": "blue", "marginTop": "7px", "fontFamily": "consolas" }}>
    <h3>z-index</h3>
</div>
<ul>
    <li><strong><code className="markcode">z-index</code></strong>
        property is used to overlape the element.If we have two box then boxes.How the box show in upper?</li>
    <li><code className="markcode">z-index</code> work with only Position property of css.</li>
    <li>if you don't use position then it will not work.</li>
    <li>Remember in default position is static and z-index not work with static position.</li>
</ul>
<p><strong>For Example:</strong></p>
<CodeHighlight code={zindex} language="css" />

<h1 className="heading1">CSS Position</h1>
<p>Four type of Positions in CSS:</p>
<CodeHighlight code={positioncss} language="css" />

<img src="../images/position.png" alt="" width="100%" />
<div className="heading2">
    <h3> position:static;</h3>
</div>
<ul>
    <li>An element with position: static; is not positioned in any special way.</li>
    <li>It is always positioned according to the normal flow of the page.</li>
</ul>
<CodeHighlight code={positionStatic} language="css" />

<div className="heading2">
    <h3> position:relative;</h3>
</div>
<ul>
    <li> The element relative to its normal positon and will leave a gap at its normal position.</li>
    <li>When the relative element move to left,right,top,bottom they can leave orginal space where they initial leave.</li>
    <li>If we use the relative property the when we give the top,bottom,left,right size then the actual where the beginner position where the element present show the space.</li>
    <li>In Relative we can move the particular div by giving top,left,right.</li>
</ul>
<span className="outputh">Example:</span>
<p>In Blow Example we can take three div and <code className="markcode">display:inline-block;</code> and move the   particular
    <code className="markcode">div</code> to the right side.
</p>
<CodeHighlight code={positionRelitive} language="css" />

<div className="heading2">
    <h3>position:absolute;</h3>
</div>

<ul>
    <li>Absolute Position is Fixed on the web page.</li>
    <li>Absolute element cann't leave a space where they leave.</li>
    <li>They are Fixed on particular place where we set top ,bottom,left,right, width and left pixels.</li>
    <li>Absolute position <b>not escape it orginal div element</b> with but the <b>relative property</b> when move they <b>escape the space</b> on its original position.</li>
</ul>
<p><strong>Note:</strong> For best Practice you can use the container as a <code
    className="markcode">relative</code> and then in the container element
    move if you take the absolute.But if you not set container <code className="markcode">relative</code>
    then the absolute item is se according to body of the
    document and work with the body flow.</p>
<CodeHighlight code={positionAbsolute} language="css" />

<div className="heading2">
    <h3> position:fixed;</h3>
</div>
<ul>
    <li>An element with <code className="markcode">position: fixed;</code> is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.</li>
    <li>The top, right, bottom, and left properties are used to position the element.</li>
</ul>
<CodeHighlight code={positionFixed} language="css" />

<div className="heading2">
    <h3>position:sticky;</h3>
</div>
<ul>
    <li>An element with <code className="markcode">position: sticky;</code> is positioned based on the user's scroll position.</li>
    <li>User scroll then then the sticky element move to the top.</li>
    <li>Most Stickey is used in the website navigation bar.</li>
    <li>But Remember Stickey is work on where you scroll the web page.</li>
</ul>
<CodeHighlight code={positionSticky} language="css" />

<h1 className="heading1">Keywords in CSS</h1>
<CodeHighlight code={keyboardCss} language="css" />
<ul>
    <li>The inherit keyword specifies that a property should inherit its value from its parent element.</li>
    <li>The initial keyword is used to set a CSS property to its default value.</li>
    <li>The revert keyword specifies to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).</li>]
    <li><code className="markcode">!important</code> keyword is used to add more importance to a property/value than normal.</li>
</ul>
<CodeHighlight code={keyboardCss1} language="css" />

<h1 className="heading1">CSS Animations </h1>

<div className="heading2">
    <h3>List of All Animations Property in CSS</h3>
</div>
<CodeHighlight code={animationList} language="css" />

<div className="heading2">
    <h3>animation-name</h3>
</div>
<p><span>The position of the box is set to be <em>relative </em>so that we can move it within webpage.</span></p>
<p><span>For making our animation, we need to start by giving the <strong>animation-name. </strong>We can give any name here. It is just used to define our animation. The code for designing the animation is as follows-</span></p>

<CodeHighlight code={animationName} language="css" />
<p><span>In the above example, we are using the animation-name as <strong>hassan. </strong>The next property used is <strong>animation-duration. </strong>It is used to decide how long our animation will run. The last property is <strong>animation-iteration-count. </strong>It is used to decide the number of times the animation will run.</span></p>
<p><span>Now we will define the animation we made, i.e. <em>hassan</em> as follows-</span></p>

<CodeHighlight code={animationNameOutput} language="css" />

<div className="heading2">
    <h3>keyframes</h3>
</div>
<ul>
    <li>The <strong>keyframes</strong> are used to make the animation.</li>
    <li><kbd>From </kbd>and <kbd>to</kbd> are used to decide how the animation will move in the webpage.</li>
    <li>In the above example, we are moving the animation hassan 1 from 200px to 1400px.</li>
    <li>These types of animations are used to design scroll bars or progress bars on the webpage.</li>
    <li>There are some other properties also to customize the animations like;</li>
</ul>
<div className="heading2">
    <h3>animation-fill-mode:</h3>
</div>
<p><span>If we want to keep the last property applied to the animation then we can set the animation-fill-property as <em>forward </em>as follows-</span></p>

<CodeHighlight code={keyframe} language="css" />


<div className="heading2">
    <h3>animation-timing-function:</h3>
</div><br />
<CodeHighlight code={animationTimingFunc} language="css" />
<pre className="output"></pre>

<p><span>We can define this property with three different values-</span></p>
<ol>
    <li><span><strong> </strong><strong>ease-in</strong></span></li>
</ol>
<p><span>After applying this, the animation will start slowly and becomes fast towards the end.</span>
</p>
<ol start="2">
    <li><span><strong> </strong><strong>ease-out</strong></span></li>
</ol>
<p><span>After applying this, the animation will begin fastly and become slow towards the end.</span>
</p>
<ol start="3">
    <li><span><strong> </strong><strong>ease-in-out</strong></span></li>
</ol>
<p><span>After applying this, the animation will start slowly, then become fast in the midway, and ends slowly.</span></p>

<div className="heading2">
    <h3>animation-delay</h3>
</div>
<p><span>It is used to define the time after which the animation will start.</span></p>
<CodeHighlight code={animationDelay} language="css" />


<div className="heading2">
    <h3>animation-direction:</h3>
</div>

<p><span>This property is used to define the direction of the animation. For example, if we select it as
    <em>reverse</em>, it will move the animation in reverse direction.</span></p>
<CodeHighlight code={animationDirection} language="css" />
<p><span>There is another method of creating animation apart from keyframes. For this, we will give the name as
    <em>hassan2.</em></span></p>
<CodeHighlight code={animationDirectionOutput} language="css" />

<p><span>In this way, we can create the animations in terms of different percentages. We can assign different values here that will occur when that percentage of animation will be completed.</span></p>
<span className="outputh">Code:</span>
<CodeHighlight code={animationDirectionOutput1} language="html" />


<h1 className="heading1">CSS Transform </h1>
<div className="heading2">
    <h3>List of All CSS 2D Transform Property</h3>
</div>
<p>Basically three thing work in the transform; </p>
<ul>
    <li><code className="markcode">translate()</code> is used to move element x-axis and y-axis.</li>
    <li><code className="markcode">rotate()</code>rotate element by pass degree.</li>
    <li><code className="markcode">scale()</code> increase width x-aix and height y-axis.</li>

</ul>
<CodeHighlight code={transformProperty} language="css" />

<div className="heading2">
    <h3>Transform Style</h3>
</div>
<p><strong>flat : </strong>Specifies that child elements will NOT preserve its 3D position. This is
    default <br />
    <strong>preserve-3d : </strong>Specifies that child elements will preserve its 3D position.
</p>
<CodeHighlight code={transformStyle} language="css" />
<pre className="output"></pre>
<CodeHighlight code={transformStyleOutput} language="css" />

<div className="heading2">
    <h3> translate()</h3>
</div>
<p><code className="markcode"> translate() </code>method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).</p>
<CodeHighlight code={translate} language="css" />

<div className="heading2">
    <h3> rotate()</h3>
</div>
<p><code className="markcode"> rotate() </code> method rotates an element clockwise or counter-clockwise according to a given degree. In rotat() you can pass the parameter of degree.
</p>
<CodeHighlight code={rotate} language="css" />
<p>Using negative values will rotate the element counter-clockwise.</p>
<CodeHighlight code={rotateOutput} language="css" />

<div className="heading2">
    <h3> scale()</h3>
</div>
<ul>
    <li><code className="markcode"> scale() </code>method increases or decreases the size of an element (according to the parameters given for the width and height). </li>
    <li>They accept two parameter first width ,second height.</li>
    <li>e.g In Blow code you can see that the div actual width increase two time and height will increase three time.</li>
    <li>If you can decrease the size of div on half the use the x-aix 0.5 value and y-axis 0.5</li>
</ul>
<CodeHighlight code={scale} language="css" />

<div className="heading2">
    <h3> scaleX()</h3>
</div>
<p><code className="markcode"> scaleX() </code>method increases or decreases the width of an element.
</p>
<p>The following code increase the &lt;div&gt; Size two time.</p>


<CodeHighlight code={scaleXTransform} language="css" />
<p>The following code decrease the &lt;div&gt; Size two time.</p>
<CodeHighlight code={scaleX} language="css" />

<div className="heading2">
    <h3> scaleY()</h3>
</div>
<p><code className="markcode"> scaleY() </code> method increases or decreases the height of an element.
</p>
<p>The Following Code increase the height of &lt;div&gt; size three time to its original size.</p>
<CodeHighlight code={TransformscaleY} language="css" />
<p>The blow code reduce the half Height size from orignal value of the &lt;div&gt;</p>
<CodeHighlight code={scaleY} language="css" />


<div className="heading2">
    <h3> skewX() </h3>
</div>
<p><code className="markcode"> scaleX() </code>method skews an element along the X-axis by the given angle.
</p>
<p>The following example skews the &lt;div&gt; element 20 degrees along the X-axis:</p>
<CodeHighlight code={skewX} language="css" />


<div className="heading2">
    <h3> skewY()</h3>
</div>
<p><code className="markcode"> skewY() </code>method skews an element along the
    Y-axis by the given angle.
</p>
<p>The following example skews the &lt;div&gt; element 20 degrees along the Y-axis:</p>
<CodeHighlight code={skewY} language="css" />

<div className="heading2">
    <h3> skew()</h3>
</div>
<p><code className="markcode"> skew() </code> method skews an element along the X and Y-axis by the given
    angles.
</p>
<p>The following example skews the &lt;div&gt; element 20 degrees along the X-axis, and 10 degrees along
    the
    Y-axis:</p>
<pre className="language-css"><code className="language-css">transform:skew(20deg,10deg);</code></pre>
<p>If the second parameter is not specified, it has a zero value.
    So, the following example skews the &lt;div&gt;
    element 20 degrees along the X-axis:</p>
<CodeHighlight code={skew} language="css" />

<div className="heading2">
    <h3> matrix()</h3>
</div>
<p><code className="markcode"> matrix() </code> method combines all the 2D transform methods into one.</p>
<p>
    The matrix() method take six parameters, containing mathematic functions,
    which allows you to rotate, scale, move (translate), and skew elements.
</p>
<CodeHighlight code={matrix} language="css" />
<div className="outputh">Syntax:</div>
<CodeHighlight code={matrixOutput} language="css" />

<div className="heading2">
    <h3>List of All CSS 3D Transform Property</h3>
</div>
<p>With the CSS transform property you can use the following 3D transformation methods:</p>
<CodeHighlight code={allcssTransformProperty} language="css" />

<div className="heading2">
    <h3> rotateX()</h3>
</div>
<p><code className="markcode"> rotateX() </code>method rotates an element around its X-axis at a given
    degree:</p>
<pre className="output"></pre>
<div className="outputh">Syntax:</div>
<CodeHighlight code={rotateX} language="css" />

<div className="heading2">
    <h3> rotateY()</h3>
</div>
<p><code className="markcode"> rotateY() </code>
    method rotates an element around its Y-axis at a given degree:</p>
<CodeHighlight code={rotateY} language="css" />

<div className="outputh">Syntax:</div>
<CodeHighlight code={rotateYOutput} language="css" />


<div className="heading2">
    <h3> rotateZ()</h3>
</div>
<p><code className="markcode"> rotateZ() </code>
    method rotates an element around its Z-axis at a given degree:</p>
<div className="outputh">Syntax:</div>
<CodeHighlight code={rotateZ} language="css" />

<div className="heading2">
    <h3> transform-origin()</h3>
</div>
<p><code className="markcode"> transform-origin() </code>
    Allows you to change the position on transformed elements.</p>
<div className="outputh">Syntax:</div>
<CodeHighlight code={TransformOrigin} language="css" />
<CodeHighlight code={TransformOriginOutput} language="css" />

<div className="heading2">
    <h3>Transform Style</h3>
</div>
<p><strong>flat : </strong>Specifies that child elements will NOT preserve its 3D position. This is
    default <br />
    <strong>preserve-3d : </strong>Specifies that child elements will preserve its 3D position.
</p>
<CodeHighlight code={transformStyleflat} language="css" />
<CodeHighlight code={transformStyleflat1} language="css" />


<div className="heading2">
    <h3> perspective:value;</h3>
</div>
<p><code className="markcode"> perspective:value;</code>
    property is used to give a 3D-positioned element some perspective.</p>

<div className="outputh">Syntax:</div>
<CodeHighlight code={persepectiveValue} language="css" />
<CodeHighlight code={persepectiveValueOutput} language="css" />

<div className="heading2">
    <h3> perspective-origin:value;</h3>
</div>
<p><code className="markcode"> perspective-origin:value; </code>
    property defines at from which position the user is looking at the 3D-positioned element. <br />
    See Example in Above Demo.</p>
<div className="outputh">Syntax:</div>
<CodeHighlight code={perspectiveOrigin} language="css" />
<CodeHighlight code={perspectiveOriginOutput} language="css" />

<div className="heading2">
    <h3> backface-visibility: value;</h3>
</div>
<p><code className="markcode"> backface-visibility: value;</code>property defines whether or not the back face of an element should be visible when facing the user.</p>
<div className="outputh">Syntax:</div>
<CodeHighlight code={backfaceVisibility} language="css" />

<h1 className="heading1">CSS Transition </h1>
<ul>
    <li>CSS transitions provide a way to control animation speed when changing CSS properties.</li>
    <li>Transitions enable you to define the transition between two states of an element.</li>
</ul>

<div className="heading2">
    <h3> List of All Transition Property in CSS
        <span>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<br />
<CodeHighlight code={allTransitionProperty} language="css" />
<span className="outputh">Example:</span>
<CodeHighlight code={allTransitionPropertyOutput} language="css" />

<p><code className="markcode"> transtion() </code> is used to change the width,height and transform.In blow code  you can see that the transition has two parameter pass one is the width and the second is time.</p>
<div className="outputh">Syntax:</div>
<p>transition work when the value change in the hover selector.</p>
<CodeHighlight code={transtionProperty} language="css" />

<div className="heading2">
    <h3> transition-delay</h3>
</div>
<p><code className="markcode"> transition-delay </code>property specifies a delay (in seconds) for the transition effect.</p>
<CodeHighlight code={transitionDelay} language="css" />

<div className="heading2">
    <h3> transition-timing-function</h3>
</div>
<p><code className="markcode"> transition-timing-function</code>property specifies the speed curve of the transition effect.
    <br /> The transition-timing-function property can have the following values:
</p>
<ul>
    <li><code className="markcode">ease</code>specifies a transition effect with a slow start, then fast, then end slowly (this is default)</li>
    <li><code className="markcode">linear</code>specifies a transition effect with the same speed from start to end</li>
    <li><code className="markcode">ease-in</code>specifies a transition effect with the same speed from start to end</li>
    <li><code className="markcode">ease-out</code>specifies a transition effect with a slow end</li>
    <li><code className="markcode">ease-in-out</code>specifies a transition effect with a slow start and end</li>
    <li><code className="markcode">cubic-bezier(n,n,n,n)</code> lets you define your own values in a cubic-bezier function</li>
</ul>

<div className="outputh">Syntax:</div>
<p>transition work when the value change in the hover selector.</p>

<CodeHighlight code={TransitionTimingFunc} language="css" />

<div className="heading2">
    <h3> transtion + transform Working</h3>
</div>
<p>By Adding the transform in transition then it will work.</p>
<div className="outputh">Syntax:</div>
<p>transition work when the value change in the hover selector.</p>

<CodeHighlight code={transitionTransform} language="css" />

<div className="heading2">
    <h3> CSS clip-path property</h3>
</div>
<p><code className="markcode">clip-path</code> property lets you clip an element to a basic shape or to an
    SVG source.<br /> First we use the clip property only but they not work on visiblity then the clip-path is remove all the previous error.</p>
<div className="outputh">Syntax:</div>
<CodeHighlight code={clipPath} language="css" />
<CodeHighlight code={clipPathOutput} language="css" />


<h1 className="heading1">HTML and CSS Entities Object</h1>

<p>This tutorial is about different Entities used in the HTML.
    An <a href="https://www.w3schools.com/charsets/ref_html_entities_4.asp" target="_blank"
        rel="noopener noreferrer">HTML Entity</a> and <a
            href="https://www.w3schools.com/cssref/css_entities.asp" target="_blank"
            rel="noopener noreferrer">CSS
        Entities</a>
    is a piece of text (“string”) that begins with an ‘&’ and ends with a ‘;’.<br />
    These are frequently used to display reserved characters, and invisible characters.</p>

<div className="heading2">
    <h3>HTML Sementics</h3>
</div>
<p><strong>Sementics elements :</strong> means = elements with a meaning.</p>
<h2 className="outputh">Types of Sementics Elements</h2>
<p>Two types of Sementics Elements;</p>
<ol>
    <li>Sementics Elements</li>
    <li>Non-Sementics Elements</li>
</ol>
<p><strong>Sementics Elements :</strong> are those element whoes meaning.In Most of website
    have good SEO, and HTML Structure then use the Sementics Element. Using this it is very helpful
    for your website b/c if we use sementics elements in our code the the code has meaning and website
    or
    blog should be rank on google, and other search engine.</p><br />
<img src="../images/semantic.jpg" alt="sementicElements" className="center" />

<p><b>Some of the List of Sementics Elements is Blow;</b></p>
<CodeHighlight code={nonSementicProp} language="css" />
<br />
<br />
<center>
    <a href="https://www.w3schools.com/html/html5_semantic_elements.asp" rel="nofollow" target="_blank"
        className="link-btn" style={{ "backgroundColor": "rgb(142, 68, 173)" }}>Visit For More Detail</a>
</center>
<br />
<h1 className="heading1">CSS Units</h1>
<p>Two types of Units in css:</p>
<ol type="1">
    <li><strong>Absolute Units</strong></li>
    <ul>
        <li>The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.</li>
    </ul>
    <li><strong>Relative Units</strong></li>
    <ul>
        <li>Relative length units in CSS is used to specify a length relative to another length property</li>
    </ul>
</ol>
<CodeHighlight code={typeUnits} language="css" />


<div className="heading2">
    <h3> px</h3>
</div>
<ul>
    <li>Pixels is the fixed size in the browser you can assign the size in pixel and they cann't Even change on the different devices.</li>
</ul>

<div className="heading2">
    <h3> em</h3>
</div>
<ul>
    <li>Font-sizes are inherited relative to the parent element.</li>
    <li>It Depend on the parent Element Size.</li>
    <li>10em means ten times of the parent element.</li>
</ul>
<p><span className="outputh">Formula to Find em</span></p>
<CodeHighlight code={emUnit} language="css" />

<pre className="output"> </pre>
<p>It should take the default size of the body where you assign in css body section size.</p>

<div className="heading2">
    <h3> rem</h3>
</div>
<ul>
    <li>Relative to font-size of the root element <code className="markcode">html</code>.</li>
    <li>It depend size on the html size in css or browser size.</li>
</ul>
<CodeHighlight code={remUnit} language="css" />

<div className="heading2">
    <h3> vw | viewport Width</h3>
</div>
<ul><li>It is prefer the size of the window screen width of Browser.</li></ul>
<div className="heading2">
    <h3> vh | viewport Height</h3>
</div>
<ul><li>It is prefer the size of the window screen Height of Browser.</li></ul>

<h1 className="heading1">Media Quries</h1>
<p><strong>Responsive Design Media Quries</strong></p>
<p><code className="markcode">min-width:</code>is used when the body has above or equal width 480 then color will pe lightgreen. if the size is less then 480 then the color is other default.</p>
<p><code className="markcode">max-width:</code>is used when the body has width less then or equal to 600 then the color will be change to lightgreen.</p>
<CodeHighlight code={vhUnit} language="css" />

<div className="heading2">
    <h3>Font Awasome Icon Link</h3>
</div>
<div className="success size">
    <p><strong> 01 </strong> Font Awasome icon <a
        href="https://fontawesome.com/v5.15/icons?d=gallery&p=2" target="_blank"><i
            className="fas fa-external-link-alt fa-x"></i></a></p>
    <p><strong> 02 </strong>Flat Icon Download <a href="https://www.flaticon.com/"><i className="fas fa-external-link-alt fa-x"></i></a></p>
</div>
<hr />
<p><span className="outputh">Font Awasome CSS CDN Link:</span></p>
<CodeHighlight code={fontAwasome} language="html" />
<p><span className="outputh">Font Awasome JavaScript Link:</span></p>
<CodeHighlight code={fontAwasome1} language="html" />


<div className="heading2">
    <h3> box-sizing:border-box; | Box Sizing </h3>
</div>
<ul>
    <li>Property allows us to include the padding and border in an element's total width and height.</li>
    <li>When we add padding the box size will be large then we used box-sizing property that not increase the box size.</li>
</ul>
<p>
    <strong>Example : </strong> If we have the box and we set the width and border.Then when i apply the padding then the box size should be increase.The padding should be added in the width.If we have not increase the size of box through padding then i use the <code className="markcode">box-sizing:border-box;</code>
</p>
<CodeHighlight code={boxSizing} language="css" />

<h1>CSS FlexBox</h1><br />

<center>
    <button className="software-btn royalblue">
        <a href="../tools/flexbox.html" rel="nofollow" target="_blank">view FlexBox</a>
    </button>
</center>

<p><code className="markcode">flex-container </code>You should set the parent mean container <code className="markcode">display:flex;</code></p>
<CodeHighlight code={cssflexbox} language="css" />
<p><strong>Properties of CSS FlexBox</strong></p>
<CodeHighlight code={cssflexboxOutput} language="css" />

<div className="heading2">
    <h3>Demo Code</h3>
</div>
<p><strong>Example: 01 </strong></p>
<CodeHighlight code={cssflexbosdemo1} language="html" />

<p><strong>Example: 02 </strong></p>
<CodeHighlight code={cssflexbosdemo2} language="css" />


<div className="heading2">
    <h3>flex-direction</h3>
</div>
<p>property defines in which direction the container wants to stack the flex items.</p>
<pre className="output"> flex-direction:  column | column-reverse |row | row-reverse</pre>
<CodeHighlight code={flexDirection} language="css" />

<div className="heading2">
    <h3>flex-wrap</h3>
</div>
<ul>
    <li>If the screen width least then then flex box automatically go to the down and Responsive layout show.</li>
    <li><strong>flex-wrap property</strong></li>
    <ul>
        <li><code className="markcode"> nowrap (default)</code>all flex items will be on one line.</li>
        <li><code className="markcode">wrap:</code>flex items will wrap onto multiple lines, from top to bottom.</li>
        <li><code className="markcode">wrap-reverse:</code> flex items will wrap onto multiple lines from bottom to top.</li>
    </ul>
</ul>
<br />
<CodeHighlight code={flexWrap} language="css" />
<p>If we have 12 div then how they response show;</p>
<CodeHighlight code={flexWrapOuput} language="css" />

<div className="heading2">
    <h3>flex-flow</h3>
</div>
<p>The <code className="markcode">flex-flow </code> property is a shorthand property for setting both the <code className="markcode">flex-direction</code> and <code className="markcode">flex-wrap</code> properties.
</p>
<CodeHighlight code={flexFlow} language="css" />
<CodeHighlight code={flexFlowcss} language="css" />


<div className="heading2">
    <h3>justify-content</h3>
</div>
<p>It Work <span className="red-color">Horizontal</span> left | center | right. In Grid and flexbox the <code
    className="markcode">jusitify-content</code> is working as same.</p>
<br />
<center>
    <img src="../images/flex.png" alt="fdf" width="70%" />

</center>
<p>The <code className="markcode">justify-content </code> property is used to align the flex items:</p><br />
<CodeHighlight code={justifyContentCss} language="css" />
<CodeHighlight code={justifyContent} language="css" />


<div className="heading2">
    <h3> align-items</h3>
</div>
<p><code className="markcode">align-items :</code> work <span className="red-color">vetically</span> top |center | bottom.In grid the align-items work as same.</p>
<br />
<center><img src="../images/flex-items.png" alt="flex items" width="70%" /></center>

<ul>
    <li><code className="markcode">align-items:center;</code>is used to align the item in middle of the container center.</li>
    <li><code className="markcode">align-items:flex-start;</code>is used to aligns the flex items at the top of the container(start top) </li>
    <li><code className="markcode">align-items:flex-end;</code>is used to aligns the flex items at the top of the container. </li>
    <li><code className="markcode">align-items:stretch;</code>value stretches the flex items to fill the container (this is default): </li>
    <li><code className="markcode">align-items:baseline;</code>value aligns the flex items such as their baselines aligns: </li>
</ul>
<br />


<CodeHighlight code={alignItem} language="css" />
<CodeHighlight code={alignItemCss} language="css" />

<div className="heading2">
    <h3> align-content</h3>
</div>
<p><code className="markcode">align-content</code> is work with <code className="markcode">flex-wrap</code>
    property with vertically.</p>
<br />
<img src="../images/align-content-modify.png" alt="align content" width="100%" />
<p>The <code className="markcode"> align-content</code>Modifies the behavior of the flex-wrap property. It
    is  similar to align-items, but instead of aligning flex items, it aligns flex lines </p> <br />

<CodeHighlight code={alignContent} language="css" />
<CodeHighlight code={alignContentCss} language="css" />

<div className="heading2">
    <h3>Perfect Centering</h3>
</div>
<p>Set both the justify-content and align-items properties to center, and the flex item will be
    perfectly centered: </p>
<CodeHighlight code={perfactCentering} language="css" />

<div className="heading2">
    <h3> CSS Flex Items Properties
        <span>
            <a href="https://www.w3schools.com/css/css3_flexbox_items.asp" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>&nbsp;
            <a href="https://youtu.be/6L-PAmZajfA?t=649" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>&nbsp;
            <a href="https://www.youtube.com/watch?v=rnp4w48zd2s" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>
<br />
<ul>
    <li><kbd>flex-grow:1;</kbd> all the box in the container take equal space.This is used to less the space in the flex-container. If you give the any seprate box flex-grow:2; then they take more space(from container) rather then other box take space.</li>
    <li><kbd>flex-shrink</kbd> If you give flex-shrink value to the all box, then the flex-container width is decrease all the box are width decrease parallel. If you give box2 -&gt; flex-shrink:3; value then they reduce width 3 time to the other box when the container size decrease.</li>
    <li><kbd>flex-basis</kbd> is define the initial length of the box.</li>
</ul>
<CodeHighlight code={flexItemProperty} language="css" />

<div className="heading2">
    <h3> Order
        <span>
            <a href="https://www.youtube.com/watch?v=aMKT57epIkg" target="_blank"><i className="fas fa-link" aria-hidden="true"></i></a>
        </span>
    </h3>
</div>


<h1 className="heading1">CSS Grid </h1>
<br /><br />
<img src="../images/grid.png" alt="Grid System" width="100%" />

<div className="heading2">
    <h3>Grid</h3>
</div>

<p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it
    easier to design web pages without having to use floats and positioning.</p>



<div className="heading2">
    <h3>display:grid; or display:inline-grid;</h3>
</div>
<p><code className="markcode">display:grid;</code> generates a block-level grid</p>
<p><code className="markcode">display:inline-grid;</code> generates an inline-level grid</p>
<CodeHighlight code={diplayGrid} language="css" />

<div className="heading2">
    <h3>grid-template-columns &amp; grid-template-rows | Create Grid</h3>
</div>
<p><code className="markcode">grid-template-columns</code>This Property is used for the how much the column
    in one
    rows they decide.</p>
<p><code className="markcode">grid-template-rows</code> is used to defined the grid how much rows and height
    of the
    grids.</p>
<p><code className="markcode">grid-template-column:repeat(3, 200px)</code> is used when we take the three
    div in the
    line and write again and again,then most use repeat(item,width);.</p>
<p><code className="markcode">1fr</code> means is half of the main div.(fraction the container).</p>
<span className="outputh">Syntax : </span>
<CodeHighlight code={gridtemplateColumn} language="css" />
<CodeHighlight code={gridtemplateRows} language="css" />

<div className="heading2">
    <h3>grid-column-start &amp; grid-column-end</h3>
</div>
<p><code className="markcode">grid-column-start</code> is defined the start position where grid items are combine start.</p>
<p><code className="markcode">grid-column-end</code> is used at the number to stop the grid items combine.</p>
<CodeHighlight code={gridColumnStart} language="css" />


<div className="heading2">
    <h3>grid-area &amp; grid-template-areas</h3>
</div>
<p><code className="markcode">grid-area</code> is used to name of the grid items.</p>
<p><code className="markcode">grid-tempelate-areas</code>This Property is used for the define name of the
    grid items
    and how much gird items are the show in the line. In <code
        className="markcode">grid-tempelate-areas</code> you
    can make the table like structure if you make 4 rows then you make 4 column.</p>
<p><code className="markcode">.</code>Full stop sign is define and empty grid cell.</p>
<CodeHighlight code={gridTemplateArea} language="css" />


<div className="heading2">
    <h3>Grid Gap Properties</h3>
</div>
<CodeHighlight code={gridProperties} language="css" />
<img src="../images/grid-gap.png" alt="Grid Gap" width="100%" />
<p><code className="markcode">column-gap</code> is used to space between the two or more grid in column
    wise.This
    property is also used in the flexbox.property sets the size of the gap (gutter) between an element's
    columns.</p>
<p><code className="markcode">grid-column-gap</code> is used to space between the grid items.</p>
<p><code className="markcode">row-gap</code> is used to add the row gap b/w the grid items.</p>
<p><code className="markcode">grid-row-gap</code> is used to add the row wise height space b/w.</p>
<CodeHighlight code={gridPropertiesCss} language="css" />

<div className="heading2">
    <h3>Grid items</h3>
</div>
<br />
{/* <img src="../images/grid-items.png" alt="Grid items" width="100%" /> */}
<CodeHighlight code={gridItem} language="css" />

<p><code className="markcode">grid-row-start</code> is used to position the grid item in the row by applying the index no.</p>
<p><code className="markcode">grid-row-end</code> is used to position stop the grid item row from apply the row index.</p>
<p><code className="markcode">grid-column-start</code>is used to position the grid item in the column wise by apply the index no. </p>
<p><code className="markcode">grid-column-end</code>is used to stop the grid item position in the column wise to apply the index no. </p>
<p><strong>grid-column</strong> is combination of all grid-column-start and end.</p>
<CodeHighlight code={gridItemCss} language="css" />

<p><strong>grid-area</strong>is the combination of all grid items.</p>
<CodeHighlight code={GridAreaCss} language="css" />


<div className="heading2">
    <h3>CSS Grid Items Spanning</h3>
</div>
<br />
{/* <img src="../images/grid-spanning.png" alt="Grid Spanning" width="100%" /> */}
<p>In Grid Spanning is very Easy, you can just pass the column start number and end number then they work correctly.</p>
<span className="outputh">Syntax :</span>
<CodeHighlight code={gridItemSpanning} language="css" />

<div className="heading2">
    <h3>minmax()</h3>
</div> <br />
<pre className="output">
    max-content
    min-content
    minmax()   minmax(minimum value , maximum value);</pre>
<p><code className="markcode"> max-content </code> is used when the grid item have large amount of text is placed in it then it should be increase width according to the text. <u>It Work with Horizontal increase width row.</u></p>
<p><code className="markcode"> min-contnt </code> is used when the grid item have large amount of text is placed in it then it should be increase height according to the text. <u>It Work with Vertically increase height and prefer large size of word to adjust height.</u></p>
<p><code className="markcode"> minmax(min-value,max-value) </code>is used to default size set of grid item
    and set highest height of grid item. </p>
<CodeHighlight code={minMax} language="html" />

<div className="heading2">
    <h3>CSS auto-fill &amp; auto-fit &amp; fit-content()</h3>
</div>
<br /><br />
<hr />
<div className="success size">
    <p><i className="fas fa-check-circle"></i>
        <strong> Note : </strong><br />
        auto-fill prefer the <code className="markcode">minmax(min,max)</code>min-value. <br />
        But the auto-fit prefer the max-value of <code className="markcode">minmax(min,max)</code>.
    </p></div>
<hr />
<p><code className="markcode">auto-fill</code> auto-fill FILLS the row with as many columns as it can fit. So it creates implicit columns whenever a new column can fit, because it’s trying to FILL the row with as many columns as it can. The newly added columns can and may be empty, but they will still occupy a designated space in the row.</p>
<CodeHighlight code={autoFillCss} language="css" />

<p><code className="markcode">auto-fit</code>auto-fit fits the currently available columns into the space by expanding them so that they take up any available space. <br />
    FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty ones.</p>
<CodeHighlight code={autoFitCss} language="css" />

<p><code className="markcode">fit-content()</code> is used the max width of the grid item.if we placed the
    text in this grid item then they only max size width follow.</p>
<CodeHighlight code={fitContent} language="css" />

<div className="heading2">
    <h3>auto-fit &amp; auto-fill Example: 01</h3>
</div>
<CodeHighlight code={autoFitExample1} language="html" />


<div className="heading2">
    <h3>auto-fit &amp; auto-fill Example: 02</h3>
</div>
<CodeHighlight code={autoFitExample2} language="html" />

<div className="heading2">
    <h3>auto-fit &amp; auto-fill Example: 03</h3>
</div>
<CodeHighlight code={autoFitExample3} language="html" />



<div className="heading2">
    <h3>auto-fit Example: 04</h3>
</div>
<CodeHighlight code={autoFitExample4} language="html" />


<div className="heading2">
    <h3>Example 05 : Responsive Grid Cards</h3>
</div>
<p><span className="outputh">CSS File :</span></p>
<CodeHighlight code={autoFitExample5} language="css" />

<p><span className="outputh">HTML File :</span></p>
<CodeHighlight code={autoFitExamplehtml5} language="html" />



<div className="heading2">
    <h3>CSS Implicit & Explicit Grid</h3>
</div>
<p>The <code className="markcode">Explicit Grid</code> is the grid that you define with the grid-template-rows , grid-template-columns , and grid-template-areas properties.</p>
<p>The <code className="markcode">Implicit Grid</code> is automatically generated by the grid container whenever grid items are positioned outside of the explicit grid.</p>
<p><strong>Properties :</strong></p>
<CodeHighlight code={implicitExplicit} language="css" />


<p><code className="markcode">grid-auto-rows</code> when the new grid items come in the grid container then default set height used this property becuase the New grid items not define in the grid-template-rows , grid-template-columns.Therefore, we use this
    property.</p>
<CodeHighlight code={gridAutoRows} language="css" />

<p><code className="markcode">grid-auto-columns </code> is used to set the width of new icomming grid item that are not define in grid-template-rows,grid-template-columns.Therefore, we use this property.</p>
<CodeHighlight code={gridAutoColumns} language="css" />

<p><code className="markcode">grid-auto-flow</code> when a new grid item is add then default it is add in the rows if we use this property then change the new grid items incomming and present in column wise.</p>
<CodeHighlight code={gridAutoFlow} language="css" />


<div className="heading2">
    <h3>CSS Grid Align</h3>
</div>
<br />
<p><code className="markcode">justify-content</code> &#160;&#160;&#160;&#160; This property aligns the grid
    along the horizontally(row axis).</p>
<p><code className="markcode">align-content  </code> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; This
    property aligns the grid along the vertically(column axis).</p>
<p><code className="markcode">justify-items  </code> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Aligns
    the content inside a grid item along the horizontally(row axis).</p>
<p><code className="markcode">justify-align  </code> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Aligns
    the content inside a grid item along the vertically(column axis).</p>
<p><code className="markcode">justify-self   </code>
    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Aligns the content inside a grid item
    along the horizontally(row axis).</p>
<p><code className="markcode">align-self     </code>
    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Aligns the content inside a
    grid item along the vertically(column axis)</p>
<br />
<center>
    <button type="button" className="software-btn royalblue">
        <a href="https://stackoverflow.com/questions/48535585/what-is-difference-between-justify-self-justify-items-and-justify-content-in-cs" target="_blank">Read More About</a></button>
</center>
<br />

<table className="outputTable">
    <tbody>
        <tr>
            <td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>Horizontal Align</td>
        </tr>
        <tr>
            <td className="outputTdHead">start </td>
            <td>Move Grid to start Horizontal Row</td>
        </tr>
        <tr>
            <td className="outputTdHead">end   </td>
            <td>Move Grid to end of the Horzontal Row</td>
        </tr>
        <tr>
            <td className="outputTdHead">center</td>
            <td>Move the Grid Horizontal center not top to</td>
        </tr>
        <tr>
            <td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>justify-content </td>
        </tr>
        <tr>
            <td className="outputTdHead">stretch   </td>
            <td> Move the Grid in center</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-around </td>
            <td> Space equally add in vertically grid item</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-between </td>
            <td>Move grid item left and right then center items give equal space  </td>
        </tr>
        <tr>
            <td className="outputTdHead">space-evenly   </td>
            <td>Equal Space b/w and Around the grid items </td>
        </tr>
        <tr>
            <td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>align-content  (Vertical Align)</td>
        </tr>
        <tr>
            <td className="outputTdHead">start</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">end</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">center</td>
            <td>Move the grid item vertically center</td>
        </tr>
        <tr>
            <td className="outputTdHead">stretch</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">space-around</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">space-between</td>
            <td>Move the grid item top and bottom then Row  wise give space</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-evenly</td>
            <td></td>
        </tr>
        <tr>
            <td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>justify-items ( Align the grid items inner items)</td>
        </tr>
        <tr>
            <td className="outputTdHead">stretch</td>
            <td>Move the Grid in center</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-around</td>
            <td>Space equally add in vertically grid item</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-between</td>
            <td>Move grid item left and right then center items give equal space</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-evenly</td>
            <td>Equal Space b/w and Around the grid items</td>
        </tr>
        <tr>
            <td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas", "textAlign": "center" }}>justify-align is used to Move the Grid item text/div/video vertically column</td>
        </tr>
        <tr>
            <td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>justify-align </td>
        </tr>
        <tr>
            <td className="outputTdHead">start</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">end</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">center</td>
            <td>Move the grid item vertically center</td>
        </tr>
        <tr>
            <td className="outputTdHead">stretch</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">space-around</td>
            <td></td>
        </tr>
        <tr>
            <td className="outputTdHead">space-between  </td>
            <td>Move the grid item top and bottom then Row wise give space</td>
        </tr>
        <tr>
            <td className="outputTdHead">space-evenly</td>
            <td></td>
        </tr>
    </tbody>
</table>

<hr />
<br />
<div className="heading2">
    <h3>Syntax of Grid Align</h3>
</div>
<p>This property is also used in flex-box.</p>
<table className="outputTable">
    <tbody>
        <tr><td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>Use for Grid</td></tr>
        <tr><td className="outputTdHead">justify-content</td>
            <td>start  |  end  |  center  |  stretch  |  space-around  |  space-between  |  space-evenly</td></tr>
        <tr><td className="outputTdHead">align-content</td>
            <td>start  |  end  |  center  |  stretch  |  space-around  |  space-between  |  space-evenly</td></tr>
        <tr><td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>Use for Grid inner item</td></tr>
        <tr><td className="outputTdHead">justify-items</td>
            <td>start  |  end  |  center  |  stretch  |  space-around  |  space-between  |  space-evenly</td></tr>
        <tr><td className="outputTdHead">justify-align</td>
            <td>start  |  end  |  center  |  stretch  |  space-around  |  space-between  |  space-evenly</td></tr>
        <tr><td colSpan="2" style={{ "fontWeight": "bold", "textAlign": "center", "fontFamily": "consolas" }}>Use for Grid inner item box</td></tr>
        <tr><td className="outputTdHead">justify-self</td>
            <td>start  |  end  |  center  |  stretch  |  space-around  |  space-between  |  space-evenly</td></tr>
        <tr><td className="outputTdHead">align-self  </td>
            <td>start  |  end  |  center  |  stretch  |  space-around  |  space-between  |  space-evenly</td></tr>
    </tbody>
</table>

<p><strong>align-items work as align-items in flex box.</strong></p>

<div className="heading2">
    <h3>CSS Grid Order Property</h3>
</div>
<p>This Property is used for the Change the Order of the grid item or grid item number,and there default value is 0.</p>
<CodeHighlight code={gridOrderProperty} language="css" />

<div className="heading2">
    <h3> Change Cursor color using caret-color Property</h3>
</div>
<CodeHighlight code={changeCursor} language="css" />


</div>
<Footer />
<MoveTop />
</div>
)
}
</>
);
}
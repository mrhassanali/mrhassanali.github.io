import React, { useEffect,useState } from "react";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop";
import HomeCSS from "./Home.module.css";
import CodeHighlight from "../plugin/CodeHighlight";

const ListPlugin= `Elementor                | Edit Site
All-in-One WP Migration  | Import/Export Backup of theme`;
const AddingScriptHeader= `//adding the head link or script

function enqueue_my_custom_styles() {
    wp_enqueue_style( 'my-custom-css', 'fileName', false ); 
    //fileName : https://www.pdfmcqs.com/wp-includes/css/accordionfile.css
}
add_action( 'wp_enqueue_scripts', 'enqueue_my_custom_styles' );`;
const AddingScriptFooter= `
//Adding footer scripts,links custom codes
function prefix_footer_code() {
//wp_enqueue_script( 'my-js', 'file with extension', false );
wp_enqueue_script( 'my-js', 'fileName', false );
//fileName : https://www.pdfmcqs.com/wp-includes/js/accordionscript.js
}
add_action( 'wp_footer', 'prefix_footer_code' );`;
// const = ``;

export default function Wordpress() {
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

                    <h1 className="heading1">Wordpress </h1>
		<p><b>Two types of Wordpress:</b></p>
		<p>
			1) wordpress.org (Free,Easy to Customize,Not provide Hosting,All Plugin are Allowed,More Storage Space,Seo
			Feature,E-comerace Store)<br/>
			2) wordpress.com (Paid,Not Easy to Customize,Provide Hosting)
		</p>
		<div className="heading2">
			<h3>What is Domain Name? </h3>
		</div>
		<p>Domain Name is the Address of your website.It is url the people type in search engine for search your
			website. <br/>
			<b>Domain has the two parts:</b><br/>
			<code className="markcode">http://www.<span style={{"color":"red"}}>example</span>.com</code>
			1) Name (example)
			2) Extension (.com,.net,.pk,.org)<br/>
			<span><b>http:</b> : Prefix</span><br/>
			<span><b>sub-domain</b> : sub-domain</span>
		</p>
		<div className="Short-head">
			<h3>Can I Have Two Domain Names for one Website? </h3>
		</div>
		<p>It is Possible But it is not recommended.It is very difficult and very tricky.</p>

		<div className="Short-head">
			<h3>Can I Buy which Domain Name that already used? </h3>
		</div>
		<p>No,It is Not Possible.Because the Domain Name on Internet is unique and the person already purchase thus you
			cann't buy used domain.One thing is possible if the domain owner give you the domain.</p>
		<div className="success size">
			<p><i className="fas fa-check-circle"></i>Select .com extension Domain is More Important the banefit is easy to
				remember,Most popular.</p>
		</div>

		<div className="Short-head">
			<h3> Keyword in Domain </h3>
		</div>
		<ul>
			<li>If you used to keyword(Name) in Domain to relevent content on the site.The Search engine loves keywords.
			</li>
			<li>Keep it Short Your Domain name</li>
			<li>Avoid Number in the Domain Name(not remember easy,effect on branding)</li>
			<li>Avoid Trademarked Names (e.g KFC,macdoland).It effect as a copyright.</li>
			<p><b>Domain Name Provider :</b> <code className="markcode">Namecheap</code>,<code
					className="markcode">bluehost</code>,<code className="markcode">godaddy</code>,<code
					className="markcode">hostinger</code></p>
		</ul>
		<div className="heading2">
			<h3> What is Hoisting? </h3>
		</div>
		<p>Hosting is the Space where your website is Stored.</p>
		<p>Domain &amp; Hosting is not same things.The Domain is provide you the name of your website but the hosting is
			provide you the cloud Storage and file are access on internet.</p>

		<div className="Short-head">
			<h3> Some facture are necessary to choose the best Hosting. </h3>
		</div>
		<ul className="mcqs-ul">
			<li><b>Costing</b> (if hosting provide lot of feature then they definitly costly and this is depend on you
				how much you afford the budget)</li>
			<li><b>Review</b>(Check the Hosting Revies online that is good or not for you)</li>
			<li><b>Storage</b></li>
			<li><b>BandWidth</b>(How much traffic handle your hosting)</li>
			<li><b>Response Time</b></li>
			<li><b>Up Time</b>(Hosting Patience level.How much time they stay online.)</li>
			<li><b>1 click WP Install</b></li>
			<li><b>Free SSL for SEO</b></li>
			<li><b>Free Domain Name</b></li>
		</ul>

		<div className="Short-head">
			<h3>Can I Get Free Hosting For WordPress? </h3>
		</div>
		<p>Yes,But it is limited and Flexbility</p>

		<div className="Short-head">
			<h3>How Much Does Hosting Cost? </h3>
		</div>
		<p>Start with 10k to 100k.But Hosting has different Prices.</p>

		<div className="Short-head">
			<h3>Can I Switch Hosting Later? </h3>
		</div>
		<p>Yes You Can do it.</p>

		<div className="Short-head">
			<h3>Best Hosting Provide Website </h3>
		</div>
		<p><code className="markcode">bluehost.com</code>,<code className="markcode">HostGator.com</code>,<code
				className="markcode">SiteGround.com</code>,<code className="markcode">DreamHost.com</code>,<code
				className="markcode">goDaddy.com</code>,<code className="markcode">namecheap.com</code></p>

		<div className="Short-head">
			<h3>Free Webhosting and Free Domain Provide Website </h3>
		</div>
		<p><code className="markcode">000webhostapp</code></p>

		<h5 className="heading1">Install Wordpress Theme</h5>
		<p>Two way to install wordpress theme. <b>One</b> is the go to wordpress dashboard and in <u>Preference</u>
			section you can install new Theme and Activate the theme. <b>Two</b> is go to wordpress official website and
			download the theme then the zip file paste on the blow theme Address and Extract the zip file.</p>
		<p>Theme Folder Location in the XAMPP: <br/>
			<code className="markcode">D:\xampp\htdocs\wordpress\wp-content\themes</code>
		</p>

		<br/>
		<h5 className="heading1">Difference b/w Posts &amp; Pages</h5>
		<p><strong>Posts :</strong> are catagorized,you can add the tag and most important thing is it is timly content.
		</p>
		<p><strong>Pages :</strong>pages are for timeless static content &amp; don't have a public date.</p>

		<ul>
			<li>Pages are not catagories.But some plugin is used for catagories the Page and by default pages have not
				catagory.</li>
			<li>Pages don't timestep.</li>
			<li>The donn't show pages in RSS Feeds.</li>
			<li>Pages cann't use post formate.</li>
			<li>Pages can be hierarchical(pages are nested connected to each other mean child and parent concept)</li>
			<li>Pages has custome templates.</li>
		</ul>


		<div className="heading2">
			<h3>How many posts and pages can i have? </h3>
		</div>
		<p>No limit pf pages and posts in wordpress.But i good condition you have large number of post but the smaller
			number of pages is right for you website.</p>


		<div className="heading2">
			<h3>What is good for seo? pages or post </h3>
		</div>
		<p>In SEO pages are equally important but the important thing for SEO is Posts.</p>

		<div className="heading2">
			<h3>Should i use Posts &amp; Pages for my wordpress website? </h3>
		</div>
		<p>It depend on you.</p>

		<div className="heading2">
			<h3>What is Text Editor? </h3>
		</div>
		<p>Text Editor is the place where you add or edit any type of content on page and posts.</p>

		<div className="heading2">
			<h3>List of All Wordpress Plugin </h3>
		</div>

        <CodeHighlight code={ListPlugin} language="javascript" lineNumbers="line-numbers"/>

		<div className="heading2">
			<h3>Adding Scripts or Links in Header or footer </h3>
		</div>
		<p>You can open the <kbd>functions.php</kbd> file and add the blow functions.</p>

        <CodeHighlight code={AddingScriptHeader} language="javascript" />
        <CodeHighlight code={AddingScriptFooter} language="javascript" />

  <table className={HomeCSS.Hometable}>
      <thead>
        <tr>
          <th className="title" style={{"borderRadius": "5px 0 0 0"}}>Plugin</th>
          <th className="link">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="title">All in One Migration</td>
          <td className="link btn"><button className="software-btn green">
            <a href="https://raw.githubusercontent.com/Technicalhassanali/Wordpress/main/all-in-one-wp-migration.6.68.zip" rel="noopener noreferrer" target="_blank"><i className="fas fa-link"></i></a>
          </button></td>
        </tr>     
        <tr>
          <td className="title">Crawlomatic_Plugin_v2.5.3 (Scrapper)</td>
          <td className="link btn"><button className="software-btn green">
            <a href="https://raw.githubusercontent.com/Technicalhassanali/Wordpress/main/Crawlomatic_Plugin_v2.5.3.zip" rel="noopener noreferrer" target="_blank"><i className="fas fa-link"></i></a>
          </button></td>
        </tr>
        <tr>
          <td className="title" >WP Backery Page Builder version 6.8.0</td>
          <td className="link btn"><button className="software-btn green">
            <a href="https://raw.githubusercontent.com/Technicalhassanali/Wordpress/main/js_composer-6.8.0.zip"
              rel="noopener noreferrer" target="_blank"><i className="fas fa-link"></i></a>
          </button></td>
        </tr>
      </tbody>
    </table>

                    </div>
                    <Footer />
                    <MoveTop />
                </div>
            )
            }
        </>
    );
}
import React from "react";
import TopLoadingBar from "../plugin/TopLoadingBar";
import MoveTop from "../MoveTop";
import CodeHighlight from "../plugin/CodeHighlight"

const installTruffle = `npm install -g truffle`;
const checkVersion= `truffle --version`;
const initiallizeTruffle= `truffle init`;
const compileContractTruffle= `truffle compile`;
const truffleMigrate= `truffle migrate;
truffle migrate --reset 
truffle migrate --rest
`;
const compileSpecificContract = `truffle compile contracts/RawMaterialOrder.sol`
const depolySpecificContract = `truffle migrate --f 3 --to 3`;
const getAllData = `export const getAllData = async()=>{
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://localhost:7545"));
// contractAddress replace with actual contract address
const contractAbi = AddUsers.abi;
const contract = new web3.eth.Contract(contractAbi, contractAddress);
let data = contract.methods.getAllUsers().call({from:"0x4316C320ee4dCBBbCA596F37872b13C22d7249d6"}).then((result) => {
  // console.log('Data:', result);
  return result;
});
return data;
}`;
const sendTransection = `export const sendTransactions = async(data)=>{
  const{metamaskwallet,name,fatherName,emailAddress,address,phoneNumber,role,password,city,postalCode,region,accountstatus} = data;
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); // Use the default provider or a local one
  const accounts = await web3.eth.getAccounts(); // Get a list of accounts on the network
  // contractAddress Replace with the address of the deployed AddUser contract
  const contract = new web3.eth.Contract(AddUsers.abi, contractAddress); // Create a new contract instance
  
  // Estimate the gas cost for the transaction
  const gasEstimate = await contract.methods
  .addUser(name,fatherName,emailAddress,phoneNumber,password,role,address,city,postalCode,accountstatus,metamaskwallet)
  .estimateGas({ from: accounts[0] });
  
  // Call the addUser function on the contract
  const result = await contract.methods
  .addUser(name,fatherName,emailAddress,phoneNumber,password,role,address,city,postalCode,accountstatus,metamaskwallet)
  .send({
      from: accounts[0],
      gas: gasEstimate,
  });
  return result;
  }`;
const ResetContractData = `truffle migrate --f 6 --to 6 --reset`;
// const = ``;

export default function Blockchain() {
    // const [loading, setLoading] = useState(true);    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 700);
    // }, []);
return (
<>
<TopLoadingBar />
<div style={{marginBottom:"10rem"}}>
<div className="container">
<div className="heading2">
    <h3>Install Necessary Pkg</h3>
</div>

<CodeHighlight code={`npm install web3; //help for interact frontend and backend`} language="javascript" lineNumbers="line-numbers"/>
<CodeHighlight code={`var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://localhost:7545"));
let contract = new web3.eth.Contract(ABI,contractAddress);
contract.method; // help you to show all the functions`} language="javascript"/>
<div className="heading2">
    <h3>Truffle</h3>
</div>
<p>
Truffle provides a platform for smart contract development, testing, and deployment. 
It helps to automate the process of setting up the development environment and provides 
a set of libraries and tools for interacting with the Ethereum blockchain. Truffle also 
offers a suite of testing tools that make it easier to write and run automated tests 
for your smart contracts.
</p>
<h3>Install Truffle</h3>
<CodeHighlight code={installTruffle} language="javascript" lineNumbers="line-numbers"/>
<h3>Check Version of Truffle</h3>
<CodeHighlight code={checkVersion} language="javascript" lineNumbers="line-numbers"/>
<h3>Truffle Initialize</h3>
<CodeHighlight code={initiallizeTruffle} language="javascript" lineNumbers="line-numbers"/>
<h3>Compile Smart Contract</h3>
<CodeHighlight code={compileContractTruffle} language="javascript" lineNumbers="line-numbers"/>
<h3>Depoly Smart contract on blockchain</h3>
<CodeHighlight code={truffleMigrate} language="javascript" lineNumbers="line-numbers"/>
<h3>Compile Specific Contract</h3>
<CodeHighlight code={compileSpecificContract} language="javascript" lineNumbers="line-numbers"/>
<h3>Migrate Specific Contract into Ganache</h3>
<p>Migrate Specific Contract  migrations &gt;&gt; 3_RawMaterialOrder.js so you can use 3 for migration or depolyment</p>
<CodeHighlight code={depolySpecificContract} language="javascript" lineNumbers="line-numbers"/>


<h3>Reset Specific Contract</h3>
<p>Using blow command you can reset the specific contract all data and re-depolyed again.</p>
<CodeHighlight code={ResetContractData} language="javascript" lineNumbers="line-numbers"/>


<div className="heading2"><h3>Interact.jsx</h3></div>
<CodeHighlight code={`import Web3 from "web3"
let provider = null;
export const connectWallet = async () => {
if (window.ethereum) {
  provider = window.ethereum;
  try {
    // await provider.enable();
    console.log("Ethereum successfully detected!");
    await provider.request({ method: "eth_requestAccounts" });
  } catch {
    console.error("User is not allowed");
  }
} else if (window.web3) {
  provider = window.web3.currentProvider;
} else if (!process.env.production) {
  provider = new Web3.providers.HttpProvider("http://localhost:7545");
}
return provider;
};
`} language="javascript" lineNumbers="line-numbers"/>

<div className="heading2"><h3>Send Transection</h3></div>
<CodeHighlight code={sendTransection} language="javascript" lineNumbers="line-numbers"/>
<div className="heading2"><h3>Get All Data</h3></div>
<CodeHighlight code={getAllData} language="javascript" lineNumbers="line-numbers"/>


<a href="https://docs.soliditylang.org/en/v0.8.19/" target="_blank" rel="noreferrer">
 <button type="button" style={{
  backgroundColor:"green",
  color:"white",
  border:"none",
  padding:"1rem",
  fontSize:"1.7rem",
  width:"100%",
  cursor:"pointer"
 }}>View Documentation</button>
 </a>

{/* 
<h3></h3>
<CodeHighlight code={``} language="javascript" lineNumbers="line-numbers"/>


<h3></h3>
<CodeHighlight code={``} language="javascript" lineNumbers="line-numbers"/> */}














</div>
{/* <Footer /> */}
<MoveTop />
</div>
</>
);
}
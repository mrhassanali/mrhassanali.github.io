import React, { useEffect, useState } from "react";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop"; 
import HomeCSS from "./Home.module.css";
import CodeHighlight from "../plugin/CodeHighlight"
import ContentList from "../plugin/ContentList";
import InnerHTML from "../plugin/InnerHTML";

const showDatabase = `Show Databases;`;
const createDatabase = `Create Database database_Name; or CREATE SCHEMA database_name;`;
const useQuery = `use database_Name;`;
const showAllTable = `show tables;`;
const createQuery = `CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

         //Create Table

create table hassan(
id int(10) not null,
name varchar(20) not null,
fname varchar(30) not null,
primary key(id)
);
  `;
const insertQuery = `insert into table_name(id,name,fname) values(1,'Hassan Ali','Riaz-ul-Hassan');`;
const selectQuery = `select * from table_name;`;
const dropQuery = `Drop table table_name;`; 
const dropDatabase = `Drop database database_name;`;
const alterRenameColumn = `ALTER TABLE (table_name) RENAME Column (original_table_name) TO (new_table_name);`;
const alterAddColumn = `ALTER TABLE table_name ADD COLUMN new_column_name datatype(size);`;
const alterDropColumn = `ALTER TABLE table_name DROP COLUMN column_name;`;
const alterAddPrimaryKey = `Alter table (table_name) ADD Constraint PRIMARY key(column_name);`;
const alterAddForeignKey = `Alter table (table_name)
ADD Constraint foreign key(column_name) references course(course_code);`;
const alterDefaultContraint = `Alter table (table_name) Alter Column_name SET DEFAULT 'Value';`;
const primaryForeignKey = `
create table hassan(
  -> id int not null,
  -> name varchar(200) not null,
  -> father_name varchar(100) not null,
  -> primary key(id)
  -> );


create table ali
  -> (
  -> hassanID int not null,
  -> auto_id int not null,
  -> name varchar(50) not null,
  -> primary key(auto_id),
  -> foreign key(hassanID) references hassan(id)
  -> );`;
const primaryForeignKeySyntax = ` 		//Primary Key Table
CREATE TABLE table_name
(
Column1 datatype,
Column2 datatype,  PRIMARY KEY (Column-Name)
.
);

                                 //Foreign Key Table
CREATE TABLE table_name(
column1    datatype,
column2    datatype,
constraint (name of constraint)
FOREIGN KEY [column1, column2...]
REFERENCES [primary key table name] (List of primary key table column) ...);`;
const findMysqlDatabase = `C:&#96;ProgramData&#96;sql&#96;sql Server 8.0&#96;Data`;
const backupMysql = `sqldump -u -p database_name > new_database_name.sql`;
const RestoreDB = `sql -u root -p database_name < import_database_name.sql
sql -u root -p [sql_database_create_name] < import_database_name; `;
const xamppMysqlAdmin = `mysqladmin.exe -u root password new_password;`;
const restoreSqlDB = `ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;  //Change to
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;`;
const connectingCMD = `cd../../
cd xampp/mysql/bin`;
const connectingCMD1 = `mysql -u root -p -h localhost
mysql -u root -p -h localhost -P 3307
`;
const arrowError = `Press Control + C`;
const showTablesCMD = `DESCRIBE tablename; `;
const showDBTables = `SELECT * FROM tablename;`;
const showDBTables1 = `AUTO_INCREMENT       // Use for auto Number Assign
PRIMARY KEY          // use for unique indentity in Database`;
const createDB = `CREATE DATABASE KHAN(Database Name); `;
const useDatabase = `USE databasename;`;
const dropDB = `DROP DATABASE databasename;
DROP TABLE table_name; `;
const createTable = `CREATE TABLE table_name
(
    column_name1 data_type,
    column_name2 data_type,
    column_name3 data_type,
...
);`;
const sqlConnectionQuery = `sqli_connect(Server Name, User Name, Password, Database Name);`;
const sqlConnectionQueryDie = `$conn =sqli_connect("localhost","root","","crud(databasename)") or
die("Connection Unsuccessfully");`;
const SQLQuery = `$sql = "SELECT * FROM databasename";`;
const runMysqlQuery = `sqli_query(Connection Name, SQL Query);`;
const runMysqlQueryExamp = `$sqliquery = sqli_query($conn,$sql) or die("Query Unsucessful.");`;
const closeConnectionQuery = `sqli_close(Connection Name);`;
const closeConnectionQueryExam = `sqli_close($conn);`;
const headerQuery = `header("Location:http://localhost/foldername/filename.php");`;
const headerQueryExamp = `header("Location:http://localhost/crud/show.php");`;
const formCallSelf = `<?php echo $_SERVER['PHP_SELF'];?>`;
const Pagination = `SELECT * FROM table_name LIMIT offset, Limit;`;
const PageinationExamp = `SELECT * FROM table_name LIMIT 0, 3;`;
const CalculatePagination = `offset = (page Number -1) * Limit;
offset = (1-1)*3 =0`;
// const = ``;




const Content = [
    {
        "name": `Database Theory`,
        "Tolink": "/database-theory"
    },
    
]

export default function Database() {
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
                <br></br>
                <br></br>
                <br></br>
                <div className="contentListBox">
                    <div className="box-header">
                        Content List
                    </div>
                    <ul className="list">
                        {
                            Content.map((element, index) => {
                                return (<ContentList key={index} data={element} />)
                            })
                        }

                    </ul>
                </div>


<div className="container">
<h1 className="heading1">SQL Quries</h1>

<div className="heading2">
    <h3>Show Database Query</h3>
</div>

<p><mark className="markcode">Show Databases;</mark>Query is used to
    show the list of all Database is Present in your System.
</p>
<CodeHighlight code={showDatabase} language="mysql" />
<hr />
<p><mark className="markcode">Create Databases;</mark>Query is used to Create the Database(Schema).</p>
<CodeHighlight code={createDatabase} language="mysql" />

<div className="heading2">
    <h3>use Query</h3>
</div>
<p><mark className="markcode">use Databases;</mark>Query is used to Select the Database for creating the
    table.Remember without use database you cann't create table in the database.</p>
<CodeHighlight code={useQuery} language="mysql" />

<div className="heading2">
    <h3>All Table show in Database</h3>
</div>
<p><mark className="markcode">show tables;</mark></p>
<p>Query is used to show the list of all table in the database.Befor this Query you can
    select the database where you are check the table using Use Query.</p>
<CodeHighlight code={showAllTable} language="mysql" />

<div className="heading2">
    <h3>Create Query</h3>
</div>
<p><mark className="markcode">Create Table</mark> Query is used to Create the Table in the Database.You can
    create multiple table in the database according to your requirements.</p><br />
<p><mark className="markcode">not null</mark> is used when the user insert the data the user is necessary to
    insert the data in column in otherwise the data conn't be saved in database.It show error.if you not add
    the</p>
<p><mark className="markcode">not null</mark> in your create table query then the user have the option when they
    input the data in the database if any field empty the data would be saved in the databases.</p>
<CodeHighlight code={createQuery} language="mysql" />

<div className="heading2">
    <h3>insert Query</h3>
</div>
<p><mark className="markcode">Insert Query</mark>Query is used to insert the data in the Database.</p>
<CodeHighlight code={insertQuery} language="mysql" />
<div className="heading2">
    <h3>Select Query</h3>
</div>
<p><mark className="markcode">Select Table</mark>Query is used to show the Record that have saved in the table.</p>
<CodeHighlight code={selectQuery} language="mysql" />

<div className="heading2">
    <h3>Drop Query</h3>
</div>
<p><mark className="markcode">Drop Table</mark>Query is used to Delete the table in the Database.</p>
<CodeHighlight code={dropQuery} language="mysql" />

<p><mark className="markcode">Drop Database</mark>Query is used if you can delete the the complete the database
    then you can ente use drop database database_name; and your database is delete if you run this query.
</p>
<CodeHighlight code={dropDatabase} language="mysql" />
<div className="heading2">
    <h3>ALTER TABLE</h3>
</div>
<p><mark className="markcode">Alter Rename Column</mark>Query is used to rename the column name by using alter
    query.</p>
<CodeHighlight code={alterRenameColumn} language="mysql" />

<hr />
<p><mark className="markcode">Add Column in Table</mark> Query is used to Add the new column in the database by
    using alter query.</p>
<CodeHighlight code={alterAddColumn} language="mysql" />
<hr />
<p><mark className="markcode">ALTER TABLE - DROP COLUMN</mark> Query is used to Delete the column in the table
    by using alter query.</p>
<CodeHighlight code={alterDropColumn} language="mysql" />

<hr />
<p><mark className="markcode">Alter ADD Primary Key in Column</mark>Query is used to Add the Primary key in the
    column.But Remember Primary key is only apply on column follow the rule of primary key or empty column.
</p>
<CodeHighlight code={alterAddPrimaryKey} language="mysql" />

<hr />
<p><mark className="markcode">Alter ADD Foreign Key in Column</mark>Query is used to Add the foreign key in the
    column.But Remember foreign key is only apply on empty column.</p>
<CodeHighlight code={alterAddForeignKey} language="mysql" />

<hr />
<p><mark className="markcode">Alter ADD Default Constraints in Column</mark>Query is used to Add the Default
    value in the database. If the user not Enter the Value of any column then the Default value would be
    set.</p>
<CodeHighlight code={alterDefaultContraint} language="mysql" />

<div className="heading2">
    <h3>Primary and Foriegn key</h3>
</div>
<p><mark className="markcode">Alter Rename Column</mark>We have created two table one table name is</p>
<p><mark className="markcode">hassan</mark> and other table name is</p>
<p><mark className="markcode">ali</mark>.First we have create table hassan and create column in the table and
    write their primary key and datatypes.In other table ali we have created a column and one column name
    hassanID is take value from the primary key from other table and give the reference of the table.</p>
<CodeHighlight code={primaryForeignKey} language="mysql" />
<br />
<span className="outputh">Syntax :</span>
<CodeHighlight code={primaryForeignKeySyntax} language="mysql" />

<div className="heading2">
    <h3>How to Find sql Database File in System?</h3>
</div>
<p>Simple you can Go to C Drive and Enter the Search menu</p>
<p><mark className="markcode">C:\ProgramData</mark> then you see the sql folder.</p>
<CodeHighlight code={<InnerHTML string={findMysqlDatabase}/>} language="mysql" />

<div className="heading2">
    <h3>How to get Backup of sql Database?</h3>
</div>
<p>Simple open cmd and run as Administator then type</p>
<p><mark className="markcode">cd C:\Program Files\sql\sql Server 8.0\bin</mark> and hit Enter.After this
    Process you can Enter the blow code;</p>
<CodeHighlight code={backupMysql} language="mysql" />
<img src="images/1.JPG" alt="" data-original-height="213" data-original-width="1366" />


<div className="heading2">
    <h3>How to get Restore of sql Database?</h3>
</div>
<p>Simple open cmd and run as Administator then type</p>
<p><mark className="markcode">cd C:\Program Files\sql\sql Server 8.0\bin</mark> and hit Enter.But Remember
    First you Create the Database name(mean Create Schema b/c the tables are import to the Schema) where you
    Import/Restore the Database.After this Process you can Enter the blow code;</p>

<CodeHighlight code={RestoreDB} language="mysql" />        
<img src="images/2.JPG" alt="" data-original-height="213" data-original-width="1366"/>

    <h1 className="heading1">Xampp Setting</h1>
    <div className="heading2">
        <h3>How to Change the Xampp MySql Admin Password?</h3>
    </div>
    <p>First Open the Xampp Server control Pannel then in the control panel you can see the power shell option click
        on that then run the blow command ;) that will be changed your password in mysql.</p>
    <CodeHighlight code={xamppMysqlAdmin} language="mysql" />

    <div className="heading2">
        <h3>How to get Restore of sql Database in Xampp?</h3>
    </div>
    <p>When you Import the sql Database in Xampp the they show unicode Error then following code should be remove
        then your problem will be solve.</p>

    <CodeHighlight code={restoreSqlDB} language="mysql" />

    <div className="heading2">
        <h3>sql Connection Using CMD through XAMPP?</h3>
    </div>

    <CodeHighlight code={connectingCMD} language="mysql" />
    <p>
        sql mean sql Database <br />
        <b>-u</b> mean Username <br />
        <b>-p</b> mean password <br />
        <b>-h</b> mean host like localhost <br />
        <b>-P</b> means Port Number where you Run Sql <br />
    </p>
    <CodeHighlight code={connectingCMD1} language="mysql" />

    <div className="heading2">
        <h3>Arrow Error in sql</h3>
    </div>
    <p>Arrow Error show in sql if you have press the wrong sql command then the arrow repeat when you
        press.Simply you can <mark className="csharp">ctrl+c</mark>then hit Enter this error will be resolve.</p>
    <CodeHighlight code={arrowError} language="mysql" />

    <div className="heading2">
        <h3>MariaDB [(none)]&gt; in CMD:</h3>
    </div>
    <p> <mark className="markcode">MariaDB [(none)]&gt;</mark>is used to all operation perform it. Like show
        databases, drop database databasename, create database databasename.<br />
        ctr+c is used in cmd to exit the MariaDB [(none)] to C:\xampp\sql\bin&gt;
    </p>

    <div className="heading2">
        <h3>Show Tables in CMD:</h3>
    </div>
    <CodeHighlight code={showTablesCMD} language="mysql" />

    <div className="heading2">
        <h3>Show Tables Database in CMD:</h3>
    </div>
    <CodeHighlight code={showDBTables} language="mysql" /> <br />
    <CodeHighlight code={showDBTables1} language="mysql" />

    <div className="heading2">
        <h3>Create Database:</h3>
    </div>
    <CodeHighlight code={createDB} language="mysql" />

    <div className="heading2">
        <h3>USE DATABASE</h3>
    </div>
    <p><mark className="markcode">USE</mark> Query in Database is use for the Select the Database to Continue the
        Operation Like Create Table, Drop Table or Other.It is Necessary to Select Database Before to continue to
        create table in Database.</p>
    <CodeHighlight code={useDatabase} language="mysql" />

    <div className="heading2">
        <h3>DROP DATABASE</h3>
    </div>
    <p><mark className="mark-round">DROP DATABASE</mark> is used to Delete the Database to the Database and 
    use for Delete a table from Database.</p>
    <CodeHighlight code={dropDB} language="mysql" />


    <div className="heading2">
        <h3>Create Table</h3>
    </div>
    <CodeHighlight code={createTable} language="mysql" />

    <div className="heading2">
        <h3>sql Connection Query</h3>
    </div>

    <CodeHighlight code={sqlConnectionQuery} language="mysql" />
    <p><mark>die();</mark> is used when the query not run sucessfully then show the error message.</p>
    <CodeHighlight code={sqlConnectionQueryDie} language="mysql" />

    <mark className="markcode">SQL Query:</mark>
    <CodeHighlight code={SQLQuery} language="mysql" />

    <div className="heading2">
        <h3>Run sql Connection Query </h3>
    </div>

    <CodeHighlight code={runMysqlQuery} language="mysql" />
    <mark>Example:</mark>
    <CodeHighlight code={runMysqlQueryExamp} language="mysql" />

    <div className="heading2">
        <h3>Close sql Connection Query </h3>
    </div>
    <CodeHighlight code={closeConnectionQuery} language="mysql" />
    <mark className="outputh">Example:</mark>
    <CodeHighlight code={closeConnectionQueryExam} language="mysql" />

    <div className="heading2">
        <h3>Header Query in Database</h3>
    </div>
    <p>header query is used in the database to Redirect the page to other page.When the data is send to Database
        then form will redirect.In location Section you can use the Code to the Form after Send Data Redirects.
    </p>
    <CodeHighlight code={headerQuery} language="mysql" />

    <mark className="outputh">Example:</mark>
    <CodeHighlight code={headerQueryExamp} language="mysql" />

    <div className="heading2">
        <h3>$_GET &amp; $_POST
            <span className={HomeCSS.heading2RightMove}>
                <a href="https://www.w3schools.in/php/get-post/" rel="nofollow noreferrer" target="_blank">
                    <i className="fas fa-link"></i></a>
            </span>
        </h3>
    </div>
    <br/>
        <div className="heading2">
            <h3>Form Call Self in Database
                <span className={HomeCSS.heading2RightMove}>
                    <a href="https://www.w3schools.com/php/php_form_validation.asp" rel="nofollow noreferrer" target="_blank">
                        <i className="fas fa-link"></i></a>
                </span>
            </h3>
        </div>
        <CodeHighlight code={formCallSelf} language="php" />

        <div className="heading2">
            <h3>Pagination</h3>
        </div>
        <CodeHighlight code={Pagination} language="php" />
        <mark className="outputh">Example:</mark>
        <CodeHighlight code={PageinationExamp} language="php" />
        <mark className="markcode">How to Calculate Offset:</mark>
        <p> In Page Number you can Add Page Start Number</p>
        <CodeHighlight code={CalculatePagination} language="php" />

    </div>
        <Footer />
        <MoveTop />
    </div>
    )
}
</>
);
}
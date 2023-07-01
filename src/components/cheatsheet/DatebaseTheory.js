import React, { useEffect, useState } from "react";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop";

export default function DatabaseTheory() {
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
                            <h3>What is Database?</h3>
                        </div>
                        <p>A database is a collection of related data.</p>
                        <p><span className="outputh">Example : </span> <br />
                            For example, consider the names, telephone phone numbers, and addresses of the people you know.</p>

                        <div className="heading2">
                            <h3>Database Management System (DBMS)</h3>
                        </div>
                        <p>A database management system (DBMS) is a collection of programs that enables
                            users to create and maintain a database. The DBMS is a general-purpose software system that facilitates the
                            processes of defining, constructing, manipulating, and sharing
                            databases among various users and applications.</p>

                        <div className="heading2">
                            <h3>Query</h3>
                        </div> 
                        <p>An application program accesses the database by sending queries or requests for data to the DBMS.</p>

                        <div className="heading2">
                            <h3>Touple</h3>
                        </div>
                        <p>Every Table consists of many touples,a one row(record) in database is known as Touple.</p>


                        <div className="heading2">
                            <h3>Degree</h3>
                        </div>
                        <p>The Table/Relation Contain Number of Attributes(columns) in the Database.Each Table has the Number of
                            Attributes then we calculate the total number of Attribute in the Database.</p>


                        <div className="heading2">
                            <h3>Cardinality</h3>
                        </div>
                        <p>Cardinality is a relationship or join/bridge between rows of 1 table to the rows of another table.</p>


                        <div className="heading2">
                            <h3>Domain</h3>
                        </div>
                        <p>The set of permitted values for each attribute is known as the domain of the attribute.</p>


                        <div className="heading2">
                            <h3>what is Key?</h3>
                        </div>
                        <p>A key in DBMS is an attribute or a set of attributes that help to uniquely identify a tuple (or row) in a
                            relation (or table). Keys are also used to establish relationships between the different tables and columns
                            of a relational database. Individual values in a key are called key values.</p>

                        <div className="heading2">
                            <h3>Prime Attribute or key Attributes</h3>
                        </div>
                        <p>The Attributes of a relation that make up the ky are called prime key or key attributes.</p>

                        <div className="heading2">
                            <h3>Non-Prime Attribute</h3>
                        </div>
                        <p>The Attribute of a relation that don't participate in key formation are called non-prime attributes or
                            non-key attributes.</p>

                        <div className="heading2">
                            <h3>Super Key</h3>
                        </div>
                        <p>A Super Key is a set of one or more Attributes(columns), which can uniquely identify a row in a table. A
                            super key is a group of single or multiple keys which identifies rows in a table.</p>

                        <div className="heading2">
                            <h3>Primary key</h3>
                        </div>
                        <p>Primary key is a column or group of columns in a table that uniquely identify every row in that table.</p>

                        <div className="heading2">
                            <h3>Canidate Key</h3>
                        </div>
                        <p>canidate key is a set of attributes that uniquely identify tuples in a table. Candidate Key is a super key
                            with no repeated attributes.</p>

                        <div className="heading2">
                            <h3>Alternate Key</h3>
                        </div>
                        <p>Alternate Key is a column or group of columns in a table that uniquely identify every row in that table.</p>

                        <div className="heading2">
                            <h3>Foreign Key</h3>
                        </div>
                        <p>Foreign Key is a column that creates a relationship between two tables. The purpose of Foreign keys is to
                            maintain data integrity and allow navigation between two different instances of an entity.</p>
                        <br></br>
                        <div className="heading2">
                            <h3>Constraints</h3>
                        </div>
                        <p>Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and
                            reliability of the data in the table. If there is any violation between the constraint and the data action,
                            the action is aborted.

                            Constraints can be column level or table level. Column level constraints apply to a column, and table level
                            constraints apply to the whole table.
                            <br />
                            <code className="markcode">Not Null</code>,
                            <code className="markcode">Unique</code>,
                            <code className="markcode">Primary Key</code>,
                            <code className="markcode">Foreign Key</code>,
                            <code className="markcode">Check</code>,
                            <code className="markcode">Default</code>,
                        </p>

                    </div>
                    <Footer />
                    <MoveTop />
                </div>
            )
            }
        </>
    );
}
import React, { useEffect,useState } from "react";
import { Link, Outlet, useAsyncError } from "react-router-dom";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop";
import CodeHighlight from "../plugin/CodeHighlight";

const connectionQuery=`import java.sql.*;
public class ali{
public static void main(String args[]){
    try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "*******************";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        
        if (con!= null) { //check connection
            System.out.println("Connection is Established");
        }
    }catch(Exception e){
            System.out.println(e);
            }
    }
}`;
const booleanNext=`import java.sql.*;
public class DB{
public static void main(String args[]){
    System.out.println("\t\t\t_________________");
    System.out.println("");
    System.out.println("\t\t\tWelcome to LMS");
    System.out.println("\t\t\t_________________");

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        Statement stmt=con.createStatement();

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");

        while(rs.next()) {
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        }
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");

    }catch(Exception e){
        System.out.println(e);
        
    }
    }
}`;
const booleanPrevious=`  package record;
import java.sql.*;

public class Test{
public static void main(String args[]) throws Exception{
    showData();
}
//Connection Method
static Connection con;
public static Connection dbconnect() {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        return con;
    }catch(Exception e){
        System.out.println(e);
        return null;
    }
}
    
public static void showData() {
    try{
        con = dbconnect(); //call connection Method
        Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,  
                ResultSet.CONCUR_UPDATABLE);

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");
        rs.afterLast();
        while(rs.previous()) {
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        }
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");

    }catch(Exception e){
            System.out.println(e);
            }
}
}//class close`;
const booleanFirst=`package record;
import java.sql.*;

public class Test{
public static void main(String args[]) throws Exception{
    showData();
}
//Connection Method
static Connection con;
public static Connection dbconnect() {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        return con;
    }catch(Exception e){
        System.out.println(e);
        return null;
    }
}

public static void showData() {
    try{
        con = dbconnect(); //call connection Method
        Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");
        rs.first(); //cursor return only first rows
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");

    }catch(Exception e){
            System.out.println(e);
            }
}

}//class close`;
const booleanLast=`package record;
import java.sql.*;

public class Test{
public static void main(String args[]) throws Exception{
    showData();

}
//Connection Method
static Connection con;
public static Connection dbconnect() {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        return con;
    }catch(Exception e){
        System.out.println(e);
        return null;
    }
}

public static void showData() {
    try{
        con = dbconnect(); //call connection Method
        Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");
        rs.last(); //cursor return only last
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");

    }catch(Exception e){
            System.out.println(e);
            }
}

}//class close`;
const AbsoluteRow=`package record;
import java.sql.*;

public class Test{
public static void main(String args[]) throws Exception{
    showData();

}

//Connection Method
static Connection con;
public static Connection dbconnect() {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        return con;
    }catch(Exception e){
        System.out.println(e);
        return null;
    }
}
    

public static void showData() {
    try{
        con = dbconnect(); //call connection Method
        Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,  
                ResultSet.CONCUR_UPDATABLE);

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");
        rs.absolute(3);  //return 3rd rows
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");

    }catch(Exception e){
            System.out.println(e);
            }
}

}//class close`;
const AbsoluteRelative=`package record;
import java.sql.*;

public class Test{
public static void main(String args[]) throws Exception{
    showData();

}
//Connection Method
static Connection con;
public static Connection dbconnect() {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        return con;
    }catch(Exception e){
        System.out.println(e);
        return null;
    }
}

public static void showData() {
    try{
        con = dbconnect(); //call connection Method
        Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");
        rs.relative(3); // return only relative rows
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");

    }catch(Exception e){
            System.out.println(e);
            }
}

}//class close`;
const columnIndexs=`import java.sql.*;

public class DB{
public static void main(String args[]){
    System.out.println("\t\t\t_________________");
    System.out.println("");
    System.out.println("\t\t\tWelcome to LMS");
    System.out.println("\t\t\t_________________");

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        Statement stmt=con.createStatement();

        System.out.println("+------+-------------+----------------+--------+--------------+");
        ResultSet rs=stmt.executeQuery("select * from student");
        while(rs.next()) {
            String sid = rs.getString(1);
            String sname = rs.getString(2);
            String fname = rs.getString(3);
            String saddress = rs.getString(4);
            String sphone = rs.getString(5);
        System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
        }
        con.close();
        System.out.println("+------+-------------+----------------+--------+--------------+");
    }catch(Exception e){
        System.out.println(e);		
    }
    }
}`;
const updateRecord=`import java.io.*;
import java.sql.*;

public class DB{
public static void main(String args[]) throws Exception{
System.out.println("\t\t\t_________________");
System.out.println("");
System.out.println("\t\t\tWelcome to LMS");
System.out.println("\t\t\t_________________");
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));

try {
    Class.forName("com.mysql.cj.jdbc.Driver");
    String DB_URL = "jdbc:mysql://localhost:3306/crud";
    String DB_USER = "root";
    String DB_PASSWORD = "technicalhassanali";
    Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
    

    //Get input to Update the Record
    System.out.print("Student ID = ");
    int rid = Integer.parseInt(Bf.readLine());
    System.out.print("Student Name = ");
        String stu_Name = Bf.readLine();
    System.out.print("Father Name = ");
        String stu_Father = Bf.readLine();
    System.out.print("Address = ");
        String stu_Address = Bf.readLine();
    System.out.print("Phone Number =");
        String stu_phone = Bf.readLine();
        //Update Query
    String update_query = "UPDATE student set Name=?,Father_Name=?,Address=?,Phone_Number=? where id=?";
    PreparedStatement pst = con.prepareStatement(update_query);
        pst.setString(1, stu_Name);
        pst.setString(2, stu_Father);
        pst.setString(3, stu_Address);
        pst.setString(4, stu_phone);
        pst.setInt(5, rid);
        int result = pst.executeUpdate();
        if(result>0) {
            System.out.println("________________________");
            System.out.println("Record Updated Sucessfully");
            System.out.println("________________________");
        }else {
            System.out.println("________________________");
            System.out.println("Record Not Updated");
            System.out.println("________________________");
        }
        con.close(); //Connection Close
  }catch(Exception e){
        System.out.println(e);
        }
 }
}`;
const insertRecord=`import java.io.*;
import java.sql.*;
public class InsertData{
public static void main(String args[]) throws Exception{
    System.out.println("\t\t\t_________________");
    System.out.println("");
    System.out.println("\t\t\tWelcome to LMS");
    System.out.println("\t\t\t_________________");
    BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        
        Statement stmt=con.createStatement();

        //Getting Input From User and Store in variables
        System.out.print("Student ID = ");
            int stu_id = Integer.parseInt(Bf.readLine());
        System.out.print("Student Name = ");
            String stu_Name = Bf.readLine();
        System.out.print("Father Name = ");
            String stu_Father = Bf.readLine();
        System.out.print("Address = ");
            String stu_Address = Bf.readLine();
        System.out.print("Phone Number =");
            String stu_phone = Bf.readLine();
            //Insert Query
        String insertQuery = "Insert into student(id,Name,Father_Name,Address,Phone_Number) values(?,?,?,?,?)";
        PreparedStatement pst = con.prepareStatement(insertQuery);
        pst.setInt(1,stu_id);
        pst.setString(2,stu_Name);
        pst.setString(3, stu_Father);
        pst.setString(4, stu_Address);
        pst.setString(5, stu_phone);
        int check = pst.executeUpdate(); 
        if(check>0){
        System.out.println("________________________");
        System.out.println("Record Save Successfully");
        System.out.println("________________________");        
        }else{
        System.out.println("________________________");
        System.out.println("Record Not Saved check Enter Value");
        System.out.println("________________________");
        }
        con.close();  
    }catch(Exception e){
            System.out.println(e);
            }
    }
}`;
const deleteRecord=`import java.io.*;
import java.sql.*;

public class InsertData{
public static void main(String args[]) throws Exception{
    System.out.println("\t\t\t_________________");
    System.out.println("");
    System.out.println("\t\t\tWelcome to LMS");
    System.out.println("\t\t\t_________________");
    BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
    
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String DB_URL = "jdbc:mysql://localhost:3306/crud";
        String DB_USER = "root";
        String DB_PASSWORD = "technicalhassanali";
        Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
        
        System.out.print("Enter the ID of the Record = ");
        int sid = Integer.parseInt(Bf.readLine());
        
        String sql = "Delete from student where id="+sid;
        
        int deleteRows = stmt.executeUpdate(sql);
        if(deleteRows>0) {
            System.out.println("________________________");
            System.out.println("Record Deleted successfully");
            System.out.println("________________________");
        }else {
            System.out.println("________________________");
            System.out.println("Record Not Found");
            System.out.println("________________________");
        }
            con.close(); //Connection Close
        }catch(Exception e){
            System.out.println(e);
            }
    }
}`;
const searchRecord=`import java.io.*;
import java.sql.*;

public class DB{
public static void main(String args[]) throws Exception{
System.out.println("\t\t\t_________________");
System.out.println("");
System.out.println("\t\t\tWelcome to LMS");
System.out.println("\t\t\t_________________");
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));

try {
    Class.forName("com.mysql.cj.jdbc.Driver");
    String DB_URL = "jdbc:mysql://localhost:3306/crud";
    String DB_USER = "root";
    String DB_PASSWORD = "technicalhassanali";
    Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
    
    Statement stmt=con.createStatement();
    System.out.print("Enter Student ID= ");
    int searchRecord = Integer.parseInt(Bf.readLine());
    
    String Search_Record = "Select * from student where id="+searchRecord;
    
    Statement search = con.createStatement();
    ResultSet rs = search.executeQuery(Search_Record);
    if(rs.next()) {
        System.out.println("________________________");	
        System.out.println("ID = "+rs.getString(1));
        System.out.println("Name = "+rs.getString(2));
        System.out.println("Father Name = "+rs.getString(3));
        System.out.println("Address = "+rs.getString(4));
        System.out.println("Phone Number = "+rs.getString(5));
    System.out.println("________________________");
    }else {
        System.out.println("________________________");
        System.out.println("Record Not Found");
        System.out.println("________________________");
    }
        con.close(); //Connection Close
}catch(Exception e){
        System.out.println(e);
        }
}
}`;
const jdbcLMScode=`import java.io.*;
import java.sql.*;
import java.util.*;

public class Hassan{
public static void main(String args[]) throws Exception{
System.out.println("\t\t\t_________________");
System.out.println("");
System.out.println("\t\t\tWelcome to LMS");
System.out.println("\t\t\t_________________");
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));

while(true) {
    System.out.println("Press 1 to Show Record");
    System.out.println("Press 2 to update Record");
    System.out.println("Press 3 to Insert Record");
    System.out.println("Press 4 to Delete Record");
    System.out.println("Press 5 to Search Record");
    System.out.println("Press 6 to Exit");
    int a = Integer.parseInt(Bf.readLine());
    
    if(a == 1) {
        showData();
    }else if(a == 2) {
        //delete student
        updateData();
    }else if(a == 3) {
        //display
        insertData();
    }
    else if(a == 4) {
        deleteData();
    }else if(a==5) {
        searchRecord();
    }
    else if(a == 6) {
        break;
    }
    else {

    }
}

System.out.println("________________________"); 
System.out.println("Thanks for using LMS");
System.out.println("________________________");

}

//Connection Method
static Connection con;
public static Connection dbconnect() {
try {
    Class.forName("com.mysql.cj.jdbc.Driver");
    String DB_URL = "jdbc:mysql://localhost:3306/crud";
    String DB_USER = "root";
    String DB_PASSWORD = "technicalhassanali";
    Connection con=DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
    return con;
}catch(Exception e){
    System.out.println(e);
    return null;
}
}

public static void showData() {
try{
    con = dbconnect(); //call connection Method
    Statement stmt=con.createStatement();

    System.out.println("+------+-------------+----------------+--------+--------------+");
    ResultSet rs=stmt.executeQuery("select * from student");
    while(rs.next()) {
        String sid = rs.getString(1);
        String sname = rs.getString(2);
        String fname = rs.getString(3);
        String saddress = rs.getString(4);
        String sphone = rs.getString(5);
    System.out.println("| "+sid+"    |  "+sname+" | "+fname+ " | "+saddress+ " | "+sphone+ " | "  );
    }
    con.close();
    System.out.println("+------+-------------+----------------+--------+--------------+");

}catch(Exception e){
        System.out.println(e);
        }
}

                            /*Update Data Method*/
public static void updateData() {
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));

try{
    con = dbconnect(); //call connection Method
    Statement stmt=con.createStatement();

    //Get input to Update the Record
    System.out.print("Student ID = ");
    int rid = Integer.parseInt(Bf.readLine());
    System.out.print("Student Name = ");
        String stu_Name = Bf.readLine();
    System.out.print("Father Name = ");
        String stu_Father = Bf.readLine();
    System.out.print("Address = ");
        String stu_Address = Bf.readLine();
    System.out.print("Phone Number =");
        String stu_phone = Bf.readLine();
        //Update Query
    String update_query = "UPDATE student set Name=?,Father_Name=?,Address=?,Phone_Number=? where id=?";
        
    PreparedStatement pst = con.prepareStatement(update_query);
        pst.setString(1, stu_Name);
        pst.setString(2, stu_Father);
        pst.setString(3, stu_Address);
        pst.setString(4, stu_phone);
        pst.setInt(5, rid);
        int result = pst.executeUpdate();
        if(result>0) {
            System.out.println("________________________");
            System.out.println("Record Updated Sucessfully");
            System.out.println("________________________");
        }else {
            System.out.println("________________________");
            System.out.print("Record Not Updated");
            System.out.println("________________________");
        }
        con.close(); //Connection Close
}catch(Exception e){
        System.out.println(e);
        }
}

                            /*Insert Data Method*/
public static void insertData() {
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
try{
    con = dbconnect(); //call connection Method
    Statement stmt=con.createStatement();

    //Insert Date
    System.out.print("Student ID = ");
        int stu_id = Integer.parseInt(Bf.readLine());
    System.out.print("Student Name = ");
        String stu_Name = Bf.readLine();
    System.out.print("Father Name = ");
        String stu_Father = Bf.readLine();
    System.out.print("Address = ");
        String stu_Address = Bf.readLine();
    System.out.print("Phone Number =");
        String stu_phone = Bf.readLine();
        //Insert Query
    String insertQuery = "Insert into student(id,Name,Father_Name,Address,Phone_Number) values(?,?,?,?,?)";
    PreparedStatement pst = con.prepareStatement(insertQuery);
    pst.setInt(1,stu_id);
    pst.setString(2,stu_Name);
    pst.setString(3, stu_Father);
    pst.setString(4, stu_Address);
    pst.setString(5, stu_phone);
    pst.executeUpdate(); 
    con.close();   //Connection Close
    System.out.println("________________________");
    System.out.println("Record Save Successfully");
    System.out.println("________________________");
}catch(Exception e){
System.out.println(e);
}
}

                    /*Delete Data Method*/
public static void deleteData() {
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
Scanner input = new Scanner(System.in);

try{
    con = dbconnect(); //call connection Method
    Statement stmt=con.createStatement();
    System.out.print("Enter the ID of the Record = ");
    int sid = Integer.parseInt(Bf.readLine());
    
    String sql = "Delete from student where id="+sid;		
    int deleteRows = stmt.executeUpdate(sql);
    if(deleteRows>0) {
        System.out.println("________________________");
        System.out.println("Record Deleted successfully");
        System.out.println("________________________");
    }else {
        System.out.println("________________________");
        System.out.println("Record Not Found");
        System.out.println("________________________");
    }
}catch(Exception e){
System.out.println(e);
}
}
                        /*Search Record Method*/
public static void searchRecord() {
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
try {
    con = dbconnect(); //call connection Method
    Statement stmt=con.createStatement();
    System.out.print("Enter Student ID= ");
    int searchRecord = Integer.parseInt(Bf.readLine());
    
    String Search_Record = "Select * from student where id="+searchRecord;
    
    Statement search = con.createStatement();
    ResultSet rs = search.executeQuery(Search_Record);
    if(rs.next()) {
        System.out.println("________________________");	
        System.out.println("ID = "+rs.getString(1));
        System.out.println("Name = "+rs.getString(2));
        System.out.println("Father Name = "+rs.getString(3));
        System.out.println("Address = "+rs.getString(4));
        System.out.println("Phone Number = "+rs.getString(5));
    System.out.println("________________________");
    }else {
        System.out.println("________________________");
        System.out.println("Record Not Found");
        System.out.println("________________________");
    }	
}catch(Exception e){
    System.out.println(e);
    }
    
}//close while loop 

}//class close`;
const jdbcFormate=`package lms;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.io.*;
public class Course {

static Connection con = null;
static Statement stmt = null;
public static void show() throws Exception {
BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));

dbConnect database = new dbConnect();
con = database.db();
Statement statement = con.createStatement();
stmt = statement;

while(true) {
        System.out.println("Press 1 : Show Course");
        System.out.println("Press 2 : Insert New Course");
        System.out.println("Press 3 : Course Selection");
        System.out.println("Press 4 : Show Select Course");
        System.out.println("Press 5 : Delete Course");
        System.out.println("Press 6 : Back");
        int n = Integer.parseInt(Bf.readLine());
        if(n==1) {
            selectCourse();   //call student profile Method
        }else if(n==2) {
            InsertCourse();
        }else if(n==3) {
            course_selection();
        }else if(n==4) {
            showSelectCourse();
        }else if(n==5) {
            DeleteCourse();
        }
        else if(n==6) {
            break;
        }else {
        System.out.println("\t\t\t--------------------");
        System.out.println("\t\t\tEnter Correct Number");
        System.out.println("\t\t\t--------------------");
        }
    }//close while loop
}
    
public static void selectCourse() {
    BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
    try {
        String Query = "select * from lms.course";
            ResultSet rs = stmt.executeQuery(Query);
            System.out.format("+--------------+------------------------+--------------------------------------------+----------------+%n");
            System.out.format("|  Course Code |           Name         |                Description                 |    Credit Hours|%n");
            System.out.format("+--------------+------------------------+--------------------------------------------+----------------+%n");

            while(rs.next()) {
            String courseId=String.format("| %-13s",rs.getString("Course_Code"));
            String Name = String.format("| %-23s",rs.getString("Name"));
            String Description =String.format("| %-43s", rs.getString("Description"));
            String Credit =String.format("| %-14s |",rs.getString("Credit_Hours"));
            System.out.println(courseId+""+Name+""+Description+""+Credit);
            
            }
            System.out.format("+--------------+------------------------+--------------------------------------------+----------------+%n");

    }catch(Exception e) {
        System.out.println(e);
    }
    
}
       
public static void InsertCourse() {
    BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
    try {
        String Query = "insert into Course(Course_Code,Name,Description,Credit_Hours)values(?,?,?,?)";
        PreparedStatement pst = con.prepareStatement(Query);
        System.out.println("Course Code = ");
        String course_id=Bf.readLine();
        System.out.println("Name = ");
        String name=Bf.readLine();
        System.out.println("Description = ");
        String desc=Bf.readLine();
        System.out.println("Credit Hours = ");
        String hours=Bf.readLine();
        
        pst.setString(1, course_id);
        pst.setString(2, name);
        pst.setString(3, desc);
        pst.setString(4, hours);
        int check = pst.executeUpdate();
        if(check>0) {
            System.out.println("Course Added Successfully");
        }else {
            System.out.println("Error Check Data");
        }
    }catch(Exception e) {
        System.out.println(e);
    }
}
      
    
public static void course_selection() {
    BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
    try {

        String Query = "insert into course_selection(Student_ID,Course_Code,Course_Name,Teacher_ID)values(?,?,?,?)";
            
        System.out.println("Student ID");
            String std_id = Bf.readLine();
        System.out.println("Course Code = ");
            String course_id=Bf.readLine();
            System.out.println("Name = ");
            String name=Bf.readLine();
        System.out.println("Teacher ID = ");
            String tname=Bf.readLine();
            
        PreparedStatement pst = con.prepareStatement(Query);
        pst.setString(1, std_id);
        pst.setString(2, course_id);
        pst.setString(3, name);
        pst.setString(4, tname);
        int check = pst.executeUpdate();
        if(check>0) {
            System.out.println("Course Select Successfully");
        }else {
            System.out.println("Error Check Data");
        }
        
    }catch(Exception e) {
        System.out.println(e);
    }
}
    
public static void showSelectCourse() {
    try {
        BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
        try {
            
            String Query = "Select * from lms.course_selection";
                
            
                System.out.format("+------------+-----------------+------------------------+----------------+--------------------------+--------------------+%n");
                System.out.format("| Student ID |    Course Code  |       Course Name      |    Teacher ID  | Obtained_Number          |   Total_Number     |%n");
                System.out.format("+------------+-----------------+------------------------+----------------+--------------------------+--------------------+%n");
                ResultSet rs = stmt.executeQuery(Query);
                while(rs.next()) {
                    String std_id=        String.format("| %-11s",rs.getString("Student_ID"));
                    String ccode =        String.format("| %-16s",rs.getString("Course_Code"));
                    String cname =        String.format("| %-23s", rs.getString("Course_Name"));
                    String teacherid =    String.format("| %-15s",rs.getString("Teacher_ID"));
                    String obtn_number =  String.format("| %-25s",rs.getString("Obtained_Number"));
                    String total_number = String.format("| %-19s|", rs.getString("Total_Number"));
                    System.out.println(std_id+""+ccode+""+cname+""+teacherid+""+obtn_number+""+total_number);
                    }
                System.out.format("+------------+-----------------+------------------------+----------------+--------------------------+--------------------+%n");
            }	
        catch(Exception e) {
            System.out.println(e);
        }
    }catch(Exception e) {
        System.out.println(e);
    }
}
        
public static void DeleteCourse() {
    BufferedReader Bf = new BufferedReader(new InputStreamReader(System.in));
    try {
        System.out.println("Student ID");
        String std_id = Bf.readLine();
        
        System.out.println("Course Code = ");
        String course_code=Bf.readLine();
        
        String Query = "Delete from course_selection where Course_Code=? and Student_ID=?";
        PreparedStatement pst = con.prepareStatement(Query);
        pst.setString(1, course_code);
        pst.setString(2, std_id);
        int check = pst.executeUpdate();
        if(check>0) {
            System.out.println("Course Delete Successfully");
        }else {
            System.out.println("Error Check Course Code");
        }
    }catch(Exception e) {
        System.out.println(e);
    }
}
    
}`;
// const =``;

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


                    <div class="heading2">
        <h3> Database Connection Query Code </h3>
    </div>
    <br/>
    <div class="success1 size">
        <p><i class="fas fa-check-circle"></i> When you Established the Connection to java jdbc you remember
            some thing.</p>
        <p><strong>01</strong> First Build a path and Added the Driver mySql Connector <mark
                class="markcode">mysql-connector-java-8.0.25.jar</mark> ,Otherwise Connection not Established.
        </p>
        <p><strong>02</strong> Second Enter Correct Database Name, Database Root username, Database Password.
        </p>
        <p><strong>03</strong> If Your Face Problem of SSL Connection then use the <br/>
            <mark class="markcode">String DB_URL =
                jdbc:mysql://localhost:3306/crud?"+"autoReconnect=true&amp;useSSL=true";</mark>
        </p>
        <p> folowing query rather
            then Using <mark class="markcode">String DB_URL = "jdbc:mysql://localhost:3306/crud";</mark>.For
            Further Detail about SSL Click the Icon : <a
                href="JavaScript:newPopup('https://stackoverflow.com/questions/57625216/about-autoreconnect-trueusessl-false');"><i
                    class="fas fa-link"></i></a></p>
    </div>
    <br />
    <div class="heading2">
        <h3>Connection Query </h3>
    </div> <br/>
    <ul>
        <li><code class="markcode">try{}</code> The try statement lets you test a block of code for errors.</li>
        <li><code class="markcode">catch(Exception e)</code> The catch statement lets you handle the error, and
            Exception is the Handle these error amd store the object name like.</li>
    </ul>

    <CodeHighlight code={connectionQuery} language="javascript" />

    <div class="heading2">
        <h3>Show Data </h3>
    </div>
    <p><mark class="markcode">Statement </mark>&#8211; Used to execute string-based SQL queries, and wecan't pass the
        Parameter in Statement.</p>
    <p><mark class="markcode">PreparedStatement </mark>&#8211; Used to execute parameterized SQL queries, likeInsert or
        Update</p>
    <p><mark class="markcode">ResultSet </mark>&#8211; The term "result set" refers to the row and column data contained
        in a ResultSet object.It is used to store the data which are returned from the database table after the
        execution of the SQL statements in the Java Program.</p>
    <br />

    <div class="heading2">
        <h3>Commonly used methods of ResultSet interface: </h3>
    </div>
    <br/>
    <ol type="1">
        <li><code class="markcode">public boolean next():</code>is used to move the cursor to the one row next from the current position, and we use
                the next() method in the while loop.if the cursor move to next rows if the rows find then it is
                true
                looop execute and then forward, At the End the rows not fatch then while condition false.In Blow
                Example you can See the next() method use.
        </li>

        <CodeHighlight code={booleanNext} language="javascript" />


        <li><code class="markcode">public boolean previous():</code>is used to move the cursor to the one row previous from the current position.<br />
                e.g If we have 8 rows in the table then we use the first <mark class="markcode">rs.afterLast();</mark>
                By using the afterLast() method cursor move the last
                position and then you write the <mark class="markcode">rs.previous();</mark> and you see the
                first
                position last record print that means that the cursor move backword 8 rows to 1st rows.
        </li>

        <CodeHighlight code={booleanPrevious} language="javascript" />
        <li><code class="markcode">public boolean first():</code><br />is used to move the cursor to the first row in result set object.</li>
        <CodeHighlight code={booleanFirst} language="javascript" />
        <li><code class="markcode">public boolean last():</code><br />is used to move the cursor to the last row in result set object.</li>
        <CodeHighlight code={booleanLast} language="javascript" />

        <li><code class="markcode">public boolean absolute(int row):</code><br />is used to move the cursor to the specified row number in the ResultSet object.If you
                pass 3 value in <mark class="markcode">rs.absolute(3);</mark> then only 3 value fatch.
        </li>

        <CodeHighlight code={AbsoluteRow} language="javascript" />

        <li><code class="markcode">public boolean relative(int row):</code><br />is used to move the cursor to the relative row number in the ResultSet object, it may
                be positive or negative.</li>
     <CodeHighlight code={AbsoluteRelative} language="javascript" />
        <li><code class="markcode">public int getInt(int columnIndex):</code><br />is used to return the data of specified column index of the current row as int.
        </li>
        <li><code class="markcode">public int getInt(String columnName):</code><br />is used to return the data of specified column index of the current row as int.
        </li>
        <li><code class="markcode">public String getString(int columnIndex):</code><br />is used to return the data of specified column index of the current row as int.
        </li>
        <li><code class="markcode">public String getString(String columnName):</code><br />is used to return the data of specified column index of the current row as int.
        </li>
    </ol>


    <CodeHighlight code={columnIndexs} language="javascript" />

   
    <div class="heading2">
        <h3> Update Data </h3>
    </div>
    <p><mark class="markcode">PreparedStatement pst = con.prepareStatement(query_name);</mark> is
        used to execute the query or update the Query instead using the Statement. PreparedStatement in Java
        allows
        you to write a parameterized query which gives better performance than Statement class in Java.
        PreparedStatement is very easy to use Parametrized constructor like
        <mark class="markcode">pst.setString(1,variable_name)</mark> or
        <mark class="markcode">pst.setInt(2,variable_name);</mark> and at last you can Enter the
        <mark class="markcode">pst.executeUpdate();</mark>
        <br /> The Java JDBC PreparedStatement primary features are:
    </p>

    <ul>
        <li>Easy to insert parameters into the SQL statement.</li>
        <li>Easy to reuse the PreparedStatement with new parameter values.</li>
        <li>May increase performance of executed statements.</li>
        <li>Enables easier batch updates</li>
    </ul>
    <p><mark class="markcode">pst.executeUpdate(); </mark>&#8211; It will return 1, means that one rows
        Effected in the Database and the Data in the touple are added Sucessfully.If it will return 0 then means
        that the errror in the Data you Enter.<mark class="markcode">int Add_Touble = pst.executeUpdate();
        </mark> we
        print the Add Touple value the show the 1 or 0. 1 mean added data and 0 mean data not added.</p>
    <br />

    <CodeHighlight code={updateRecord} language="javascript" />

    <div class="heading2">
        <h3> Insert Data </h3>
    </div>

    <CodeHighlight code={insertRecord} language="javascript" />


    <div class="heading2">
        <h3>Delete Data </h3>
    </div>
    <CodeHighlight code={deleteRecord} language="javascript" />


    <div class="heading2">
        <h3> Search Record</h3>
    </div>
    <CodeHighlight code={searchRecord} language="javascript" />

    <hr/>
    <div class="heading2">
        <h3> Download Java JDBC Complete Crud Operation code</h3>
    </div> <br/>
    <center>
        <a href="https://github.com/Technicalhassanali/Java/raw/main/JDBC/crud%20operation%20in%20JDBC/crud.rar"
            rel="nofollow" target="_blank" class="btn">Download Complete Crud Operation Project</a>
    </center><br/>
    <hr/>

    <div class="heading2">
        <h3>Java JDBC Simple LMS Code </h3>
    </div>

    <CodeHighlight code={jdbcLMScode} language="javascript" />

    <hr/>
    <div class="heading2">
        <h3> Use of String.Format(); </h3>
    </div>
    <p><mark class="markcode">string.format()</mark> is used to the better performance in the output
        of the String.By the use of <mark class="markcode">string.format()</mark> the output string should be
        made
        Stylish.We have Pass the arguments in this format() method.
        <br />
        There are many format specifiers we can use. Here are some common ones:
    </p>

    <ul id="stringformat">
        <li><b>%a</b>- floating point (except BigDecimal)</li>
        <li><b>%b</b>- Any type</li>
        <li><b>%c</b>- Character</li>
        <li><b>%d</b>- integer (incl. byte, short, int, long, bigint)</li>
        <li><b>%e</b> - Exponential floating-point number</li>
        <li><b>%f</b> - Floating-point number</li>
        <li><b>%g</b> - floating point</li>
        <li><b>%h</b>- any type </li>
        <li><b>%i</b> - Integer (base 10)</li>
        <li><b>%o</b> - Octal number (base 8)</li>
        <li><b>%s</b> - String</li>
        <li><b>%u</b> - Unsigned decimal (integer) number</li>
        <li><b>%x</b> - Hexadecimal number (base 16)</li>
        <li><b>%t</b> - Date/time</li>
        <li><b>%n</b> - Newline</li>
    </ul>
    <p>In Blow Example of JDBC Course Section.I have Design in the format by using <mark
            class="markcode">string.format()</mark>.</p>

<CodeHighlight code={jdbcFormate} language="javascript" />

                    </div>
                    <Footer />
                    <MoveTop />
                </div>
            )
            }
        </>
    );
}
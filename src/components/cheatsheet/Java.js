import React, { useEffect, useState } from "react";
import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";
import Footer from "../Footer";
import MoveTop from "../MoveTop";
import CodeHighlight from "../plugin/CodeHighlight";
import ContentList from "../plugin/ContentList";

const EvenNumber = `import java.util.*;
class EvenNumber{
public static void main(String [] args){
    Scanner input = new Scanner(System.in);
    System.out.println("You can Input Start Number and End Number Program Show you the Number Between Start to End Even Number");
    System.out.print("Enter Start From =");
    int m = input.nextInt();
    int n = 2;
    System.out.print("to =");
    int length = input.nextInt();

    int i;
    for(i=m; i<=length; i++){
        if(i%n==0){
            System.out.println(i);
            }
        }
    }
}`;
const EvenOdd = `import java.util.*;
class EvenOdd{
public static void main(String [] args){
Scanner input = new Scanner(System.in);
int n = input.nextInt();
    if(n%2 == 0){
        System.out.println("Even");
    }
    else{
        System.out.println("odd");
    }
 }
}`;
const Factorial = `import java.util.Scanner;
class Factorial{
public static void main(String [] args){
 Scanner input = new Scanner(System.in);
 System.out.print("Enter Number to Find Factorial =");
 int n = input.nextInt();
 
 int f=1,total;
 while(n>=1){
     f = f * n;
     n--;
  }
   System.out.println("Factorial ="+f);
 }
}`;
const overloading = `class A{
    int y;
        public void f1(int x){
            y=x;
            System.out.println("Parent className= "+y);
        }
    }
    class B extends A{
        int a, b;
        public void f1(int w,int z){
            a=w;
            b=z;
            System.out.println("Child className="+(a+z));
        }
    }
    class Overloading{
        public static void main(String [] args){
            B sub=new B();
            sub.f1(10);    // call parent class
            sub.f1(10,10); // call by child class
        }
    }`;
const overriding = `class A{
    public void f1(int x){
        System.out.println("Parent Class");
        }
    }
    class B extends A{
    public void f1(int x){
        System.out.println("Child Class");
        }
    }
    class overriding{
    public static void main(String [] args){
        B sub = new B();
        sub.f1(10); // call its a child class
        }
    }`;
const RecursiveMethod = `import java.io.*;
public class RecursiveMethod{
    public static void main(String[]args){
        System.out.println("Hello");
        pakistan();
    }
    public static void pakistan(){
     System.out.println("World!");
    }
}`;
const swapvalues = `class SwapValues{
    public static void main(String [] args){
        int a,b;
        a = 10 ;
        b = 20 ;
    
        int temp;
        temp = a;
        a = b;
        b = temp;
        System.out.println("a ="+a);
        System.out.println("b ="+b);
        }
    }`;
const Swap = `import java.util.*;
class swap{
public static void main(String [] args){
    Scanner input = new Scanner(System.in);
    System.out.print("Enter value of A= ");
    int a = input.nextInt(); //input value a
    System.out.print("Enter the value of B= ");
    int b = input.nextInt(); //input value b
    System.out.println("n");  // change the line space
    System.out.println("Swap Values");
    int temp;
    temp = a;  //a value are assign to temp
    a = b;     // b value are assign to a
    b = temp;  // temp value of a are assign to b
    System.out.println("Values of A ="+a);
    System.out.println("Values of B ="+b);
    }
}`;
const MultiplicationTable = `import java.util.Scanner;
class MultiplicationTable{
public static void main(String [] args){
Scanner input = new Scanner(System.in);
System.out.print("Enter Number to Find Multiplication =");
int n = input.nextInt();
System.out.print("Length of Multiplication = ");
int length = input.nextInt();
int i,total;
for(i=1; i<=length; i++){
    total = i*n;
    System.out.println(n+" x "+i+" = "+total);
    }
}
}`;
const createArray = `import java.util.*;
class createArray{
    public static void main(String [] args){
        Scanner input = new Scanner(System.in);
        //Creating Array through input user
        System.out.print("Enter the Size of Array = ");
        int size = input.nextInt();
        int[] a = new int[size];
        //Creating Array through size
        int[] b = new int[5];
        //Same As but name is not same
        int c[] = new int[5];
        //Creating Array
        int[] d;
        d= new int[8];
    }
}`;
const UpdateElement = `import java.util.*;
class UpdateElement{
    public static void main(String [] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the Size of Array = ");
        int size = input.nextInt();
        //creating array
        int[] x = new int[size];
        int i,j,temp;
        System.out.println("Enter the Element in The Array");
        for(i=0; i<size; i++){
            System.out.print("x["+i+"] = ");
            int a = input.nextInt();
            x[i] = a;
            }
            for(i=0; i<size; i++){
                for(j=0; j<size-1; j++){
                    if(x[j]>x[j+1]){
                        temp = x[j];
                        x[j] = x[j+1];
                        x[j+1] = temp;
                        }
                    }
                }
                System.out.println("Sort of Array");
                for(i=0; i<size; i++){
                    System.out.print(x[i]+",");
                    }
                    System.out.println();
        }
    }`;
const Search = `import java.util.Scanner;
class Search{
public static void main(String [] args){
    Scanner input = new Scanner(System.in);
    System.out.println("Enter the Size of Array");
    int size = input.nextInt();
    int x[] = new int[size];

    int i;
    for(i=0;i<size;i++){
        System.out.print("x["+i+"] = ");
        int a = input.nextInt();
        x[i] = a;
    }

    System.out.println("Search Value in the Array");
    int item = input.nextInt();

    /*Method No 1*/
    i=0;
    while(i<size && x[i]!= item){
        i++;
     }
    if(i<size){
      System.out.println("Item Found in index = "+i);
    }else{
        System.out.println("Item not Found");
    }
        /*Method No 2*/
    for(i=0; i<size; i++){
        if(x[i]==item){
            System.out.println("Item Search on Index = "+i);
            }
        }
    }
}`;
const SearchElement = `import java.util.*;
class SearchElement{
 public static void main(String [] args){
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the Size of Array = ");
    int size = input.nextInt();
    //creating array
    int[] x = new int[size];
    int i;
    System.out.println("Enter the Element in The Array");
    for(i=0; i>size; i++){
        System.out.print("x["+i+"] = ");
        int a = input.nextInt();
        x[i] = a;
    }
    //Input the Search Item
    System.out.println("Enter the Search Item");
    int item = input.nextInt();
    //First Method for Searching Element
    System.out.println("Searching Using while Loop");
    i=0;
    while(i>size && x[i]!=item){
        i++;
    }
    if(i>size){
     System.out.println("Item Found in Array index ="+i);
    }
    else{
        System.out.println("Item Not Found");
    }
    //Second Method for Searching Element
    System.out.println("Searching Using For Loop");
    for(i=0; i>size; i++){
        if(x[i]==item){
           System.out.println("Item Found in Array index ="+i);
        }
    }
  }
}`;
const LargeSmall = `import java.util.*;
class LargeSmall{
public static void main(String [] args){
Scanner input = new Scanner(System.in);
    System.out.println(&quto;Enter Total Number =&quto;);
    int i;
    int total = input.nextInt(); //value put in array
    int[] x= new int[total]; // One Dimensional Array
    System.out.println(&quto;Enter &quto;+total+&quto; Number =&quto;);
    for(i=0;i<total;i++){
        int a = input.nextInt();
        x[i] = a;
    }
    /*Find the Large Value in the Array*/
    int large=x[0];
    for(i=0; i<total; i++){
        if(x[i]>large){
            large = x[i];
        }
    }
    System.out.println(&quto;Large Values =&quto; +large);
    /*Small Value find in Array */
    int Small = x[0];
    for(i=0;i<total;i++){
        if(x[i]<Small){
            Small = x[i];
        }
    }
    System.out.println(&quto;Small Values =&quto; +Small);
  }
}`;
const InsertElement = `import java.util.*;
class InsertElement{
public static void main(String [] args){
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the Size of Array = ");
    int size = input.nextInt();
    //creating array
    int[] x = new int[size];
    int i;
    System.out.println("Enter the Element in The Array");
    for(i=0; i<size; i++){
     System.out.print("x["+i+"] = ");
     int a = input.nextInt();
     x[i]=a;
    }
     System.out.println("Print the Array");
    for(i=0; i<size; i++){
     System.out.print("x["+i+"] = "+x[i]+"\n");
    }
 }
}`;
const EvenoddIfCondition = `class EvenOdd{
    public static void main(String [] args){
       int a[] = {1,2,3,4,5};
       for(int i = 0; i<a.length; i++){
            if(a[i]%2 == 0 ){
                System.out.println("Even Number = " + a[i]);
            }else{
                System.out.println("Odd Number  = "+  a[i]);
            }
        }
    }
}`;
const BubbleSort = `import java.util.*;
class Sort{
public static void main(String [] args){
  Scanner input = new Scanner(System.in);
  int i,j,temp;
  System.out.println(>Enter Total Value>);
  int n=input.nextInt();
   
   int[] x = new int[n];
   System.out.println(>Enter >+ n+> Value>);
   for(i=0;i<n;i++){
       int a=input.nextInt();
       x[i]=a;
   }
   for(i=0;i<n; i++){
       for(j=0;j<n-1; j++){
           if(x[j]>x[j+1]){
               temp=x[j];
               x[j]=x[j+1];
               x[j+1]=temp;
           }
       }
   }
  System.out.println(>Array Sorting>);
   for(i=0;i<n; i++){
      System.out.println(x[i]);
   }
  }
}
`;
const ArrayReverse = `import java.util.*;
class ArrayReverse{
public static void main(String [] args){
Scanner input = new Scanner(System.in);
System.out.print("Enter value size of Array= ");
int size = input.nextInt();
int x[] = new int[size];
int i;
  System.out.println("Input the Array of a size is "+size);
    for(i=0; i<=size-1; i++){
      System.out.print("x["+i+"] = ");
      int a  = input.nextInt();
      x[i] = a;
    }
      System.out.println("\n");
      System.out.println("Array Reverse");
    for(i=size-1; i>=0; i--){
      System.out.print("x["+i+"] = "+x[i]+"\n");
    }
  }
}`;
const AddingArray = `import java.io.*;
public class AddingArray{
public static void main(String[]args)throws Exception{
  BufferedReader str=new BufferedReader(new InputStreamReader(System.in));
  String s;
  int i,sum=0,n;
  int [] array=new int[10];
  System.out.println("Enter the Ten Number");
  for(i=0;i<=9;i++){
    s=str.readLine();
    n=Integer.parseInt(s);
    array[i]=n;
  }
  for(i=0;i<=9;i++){
    sum=sum+array[i];
  }
  System.out.println("Sum="+sum);
 }
}`;
// const = ``;

const Content = [
    {
        "name": "Even and Odd",
        "link": "#EvenOdd"
    },
    {
        "name": "Factorial in java",
        "link": "#factorial"
    },
    {
        "name": "Overloading",
        "link": "#overloading"
    },
    {
        "name": "Overriding",
        "link": "#overriding"
    },
    {
        "name": "Recursive Function",
        "link": "#recursive"
    },
    {
        "name": "Swap Values",
        "link": "#swapvalues"
    },
    {
        "name": "Multiplication Table",
        "link": "#multiplicationtable"
    },
    {
        "name": "Array Programs",
        "link": "#arrayprogram"
    }
]

export default function Java() {
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

                        <h1>Simple Program</h1>
                        <div className="heading2" id="EvenOdd">
                            <h3><code className="markcode">EvenNumber.java</code></h3>
                        </div>
                        <CodeHighlight code={EvenNumber} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">EvenOdd.java</code></h3>
                        </div>
                        <CodeHighlight code={EvenOdd} language="javascript" />

                        <div className="heading2" id="factorial">
                            <h3><code className="markcode">Factorial.java</code></h3>
                        </div>
                        <CodeHighlight code={Factorial} language="javascript" />


                        <div className="heading2" id="overloading">
                            <h3><code className="markcode">Overloading.java</code></h3>
                        </div>
                        <CodeHighlight code={overloading} language="javascript" />


                        <div className="heading2" id="overriding">
                            <h3><code className="markcode">Overriding.java</code></h3>
                        </div>
                        <CodeHighlight code={overriding} language="javascript" />

                        <div className="heading2" id="recursive">
                            <h3><code className="markcode">RecursiveMethod.java</code></h3>
                        </div>
                        <CodeHighlight code={RecursiveMethod} language="javascript" />

                        <div className="heading2" id="swapvalues">
                            <h3><code className="markcode">SwapValues.java</code></h3>
                        </div>
                        <CodeHighlight code={swapvalues} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">swap.java</code></h3>
                        </div>
                        <CodeHighlight code={Swap} language="javascript" />

                        <div className="heading2" id="multiplicationtable">
                            <h3><code className="markcode">MultiplicationTable.java</code></h3>
                        </div>
                        <CodeHighlight code={MultiplicationTable} language="javascript" />

                        <h1 id="arrayprogram">Array</h1>

                        <div className="heading2">
                            <h3><code className="markcode">createArray.java</code></h3>
                        </div>
                        <CodeHighlight code={createArray} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">UpdateElement.java</code></h3>
                        </div>
                        <CodeHighlight code={UpdateElement} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">Search.java</code></h3>
                        </div>
                        <CodeHighlight code={Search} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">SearchElement.java</code></h3>
                        </div>
                        <CodeHighlight code={SearchElement} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">LargeSmall.java</code></h3>
                        </div>
                        <CodeHighlight code={LargeSmall} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">InsertElement.java</code></h3>
                        </div>
                        <CodeHighlight code={InsertElement} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">EvenOdd.java</code></h3>
                        </div>
                        <CodeHighlight code={EvenoddIfCondition} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">Bubble Sort.java</code></h3>
                        </div>
                        <CodeHighlight code={BubbleSort} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">ArrayReverse.java</code></h3>
                        </div>
                        <CodeHighlight code={ArrayReverse} language="javascript" />

                        <div className="heading2">
                            <h3><code className="markcode">AddingArray.java</code></h3>
                        </div>
                        <CodeHighlight code={AddingArray} language="javascript" />


                    </div>
                    <Footer />
                    <MoveTop />
                </div>
            )
            }
        </>
    );
}
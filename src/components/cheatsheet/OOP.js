import React, { useState, useEffect } from "react";
import ContentList from "../plugin/ContentList";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";
import Spinner from "../plugin/Spinner";

const Content = [
    {
        "name": `Constructor`,
        "link": "#constructor"
    },
    {
        "name": `Properties/Principle of OOP`,
        "link": "#propertiesoop"
    },
    {
        "name": `Getter and Setter`,
        "link": "#getter-setter"
    },
    // {
    //     "name": ``,
    //     "link": ""
    // },
]

const properties= `class Student{
	Student(){  //Non-Parameter constructor
		System.out.println("Non-Parameter Constructor");
		}
	}
public class OOP{
	public static void main(String [] args){
		Student s = new Student();
		}
	}`;
const parameterizedContructor= `class Student{
	String name;
	int age;
	Student(){  //Non-Parameter constructor
		System.out.println("Non-Parameter Constructor");
		}
		Student(String name,int age){  //Parameterized  constructor
				System.out.println("Parameterized Constructor");
				System.out.println("Name = " +name);
				System.out.println("Age = " +age);
		}
	}
public class OOP{
	public static void main(String [] args){
		Student s = new Student(); // non-parameter Object
		Student s1 = new Student("Hassan Ali",20); // parameterized object
		}
	}`;
const copyOfObject= `class Student{
	String name;
	int age;
	Student(){  //Non-Parameter constructor
		System.out.println("Non-Parameter Constructor");
		}
// copy the value of object s1 to s2
		Student(Student s2){  //Parameterized  constructor
		System.out.println("Parameterized Constructor");
		System.out.println(s2.name);
		System.out.println(s2.age);
		}
	}
public class OOP{
	public static void main(String [] args){
		Student s1 = new Student(); // parameterized object
		s1.name = "Hassan Ali";
		s1.age = 20;
		//copy object
		Student s2 = new Student(s1);
	}
}`;
const Polymorphism= `class Student{
	String name;
	int age;
	public void printInfo(String name){
		System.out.println("Name = " + name);
		}
	public void printInfo(int age){
		System.out.println("Age = "+age);
		}
	public void printInfo(String name,int age){
		System.out.println("Name = " + name +"\n"+"Age ="+age);
		}
	}

public class OOP{
	public static void main(String [] args){
		Student s = new Student();
		s.name = "Hassan Ali";
		s.age = 20;
		s.printInfo(s.name); //call name method parameter
		s.printInfo(s.age); // call age method parameter
		s.printInfo(s.name,s.age); // call name & age parameter
	}
}`;

export default function OOP() {
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
<h5 class="heading1">Object Oriented Programming</h5>

<p><span class="markcode">new keyword</span> When we create the object and give the new keyword then it take the
space in heap data.Those place the object can store.</p>

<div class="heading2" id="constructor">
<h3>Constructor</h3>
</div>
<p>Constructor mean is the something construct (make thing).In Java Constructor are used to construct the
Object.</p>
<div class="info size">
<p><i class="fas fa-info-circle" aria-hidden="true"></i> <strong>Types of Constructor :</strong><br/></p>
<p>In Java Constructor has three types;</p>
<p><strong>01 : </strong>Non Parameter Constructor</p>
<p><strong>02 : </strong>Parameterized Constructor</p>
<p><strong>03 : </strong>Copy Constructor</p>
</div>

<p><span class="outputh">Non-Parameter Constructor : </span> Those function/method that have not parameter is
known as Non-Parameter Constructor.</p>
<p><span class="outputh">Parameterized Constructor : </span> are those constructor we have passed the argument
in method/functions.</p>
<p><span class="outputh">Copy Constructor : </span> we have copy the object value to one object to other Object.
</p>

<div class="Short-head">
<h3>Properties </h3>
</div>
<p>Before writing constructor,we follow some rule of writing constructor.</p>
<p><strong>01 : </strong> Same Name of Constructor as the Name of class. mean class name and constructor name is
same.</p>
<p><strong>02 : </strong> Constructor not return.Constructor are method/function but they have no return type
like int,float as not void apply on it.They only work the Object construct.</p>
<p><strong>03 : </strong>One Object have only one constructor at the time call.</p>
<CodeHighlight code={properties} language="javascript" />

<div class="heading2" id="ali">
<h3>Parameterized Constructor </h3>
</div>
<p>In Parameterized constructor we have passed the argument in the method/function of constructor. <br/>
When we pass the values in the object then parameterized constructor call,if i not pass the value in the
object then default constructor are run.</p>
<CodeHighlight code={parameterizedContructor} language="javascript" />

<div class="Short-head">
<h3>Copy of the Object </h3>
</div>
<p>In blow Example we have copy the object Student s1 value/Properties to Object Student s2, and we don't define
the values of Object s2 because i have used the values of Object s1.</p>
<CodeHighlight code={copyOfObject} language="javascript" />

<div class="success size">
<p><i class="fas fa-check-circle" aria-hidden="true"></i> Most Important thing is we have created the
constructor but i have created deconstrcutor to destroy the these created constructor.This technique is
used in the c/c++,java.In c/c++ we have created de-constructor.But in java we don't create
de-constructor because the java language is more intellegant.They remove the object or constructor that
are not used.</p>
<p><span style={{"color":"red;"}}>If someone say you write the de-constructor in java.You can say that in java we
don't need write de-constructor because in java <code class="markcode">grabage collector</code> is
work.</span></p>
</div>

<h5 class="heading1" id="propertiesoop">Properties/Principle of OOP</h5>
<p>
<span><strong>01 : </strong>Polymorphism</span> <br/>
<span><strong>02 : </strong>Inheritance</span> <br/>
<span><strong>03 : </strong>Encapsulation</span> <br/>
<span><strong>04 : </strong>Abstraction</span>
</p>

<div class="heading2">
<h3>Polymorphism </h3>
</div>
<p>
<code class="markcode">Poly</code> mean &quot;many&quot;. <br/>
<code class="markcode">morphism </code> mean &quot;form/Properties/behavior&quot;.
</p>

<div class="Short-head">
<h3>Types of Polymorphism </h3>
</div>
<p><strong>Two types of Polymorphism;</strong> </p>
<p>
<span><strong> 01 : </strong>Static Binding (or Compile time) Polymorphism, e.g., Method Overloading /
Function Overloading</span> <br/>
<span><strong> 02 : </strong>Dynamic Binding (or Runtime time) Polymorphism, e.g., Method overriding</span>
</p>


<div class="Short-head">
<h3>Compile time Polymporphism | Method Overloading </h3>
</div>

<p>
<span><strong>👍</strong> Method Overloading we used multiple function/method but there name are
same.</span> <br/>
<span><strong>👍</strong> Function Working is different but the name of the method/function is same in the
class.</span>
</p>
<p><code class="markcode">Method Overloading : </code>a class has more than one method of the same name and
their parameters are different.</p>
<p><span class="outputh">Rules :</span></p>
<p><strong>01 : </strong> Methods in the class have difference of return type or working. Not use same return
type and same function/method in the polymorphism.</p>
<p><strong>02 : </strong> Use Different Argument in the method/function. If two method have same return type or
argument then they show error.</p>

<CodeHighlight code={Polymorphism} language="javascript" />

</div>
<Footer />
<MoveTop />
</div>
)
}
</>
);
}
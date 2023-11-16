import React from 'react'
import "../../src/Main.css"
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.webp";
import jqry from "../Images/jqry.png";
import github from "../Images/github.png";
import scss from "../Images/scss.png";
import tailwnd from "../Images/tailwnd.png";
import btstrp from "../Images/btstrp.png";
import mngdb from "../Images/mngdb.png";
import react from "../Images/react.js-img.png";
import expr from "../Images/expr.png";
import node from "../Images/node.png";

const Skill = () => {
  let images = [
    {
      src: html,
      name:"HTML",
      productName:
        "HTML (Hypertext Markup Language) is the standard language for creating web pages. It uses tags to structure content and define elements, making it essential for web development."
    },
    {
      src: css,
      name:"CSS",
      productName:
       "CSS (Cascading Style Sheets) is a language used in web development to control the presentation and layout of HTML elements. It enhances the design and visual appeal of websites."
    },
    {
      src: js,
      name:"Javascript",
      productName:
      "JavaScript (JS) is a versatile scripting language used for web development. It enables dynamic, interactive features on websites and is essential for client-side programming, enhancing user experiences."
    },
    {
      src: jqry,
      name:"JQuery",
      productName:
       "jQuery is a JavaScript library that simplifies web development by providing pre-built functions and methods for tasks like DOM manipulation, event handling, and AJAX, streamlining front-end coding."
    },
    {
      src: github,
      name:"Github",
      productName:
      "GitHub is a web-based platform for version control and collaborative software development. It enables users to host, share, and collaborate on code, making it a valuable tool for developers."
    },
    {
      src: scss,
      name:"Sass",
      productName:
       
       "SCSS (Sass) is a CSS preprocessor that adds advanced features and readability to CSS code. It allows for variables, nesting, and functions, making styling in web development more efficient and maintainable."
    },
    {
      src: tailwnd,
      name:"Tailwind",
      productName:
       "Tailwind CSS is a utility-first CSS framework that simplifies web development by providing a set of pre-designed, customizable utility classes. It streamlines the design and layout process for developers."
    },
    {
      src: btstrp,
      name:"Bootstrap",
      productName:
       "Bootstrap is a popular front-end framework that simplifies web development by providing pre-designed components and responsive grids. It enhances the creation of user-friendly and aesthetically pleasing websites."
    },
    {
      src: mngdb,
      name:"MongoDB",
      productName:
      
      " MongoDB is a NoSQL database system that stores data in a flexible, JSON-like format. It is popular for its scalability and ability to handle large volumes of unstructured data."
    },
    {
      src: react,
      name:"React",
      productName:
        
        "React is a JavaScript library for building user interfaces. It uses a component-based architecture, making it efficient for creating dynamic, responsive web applications and single-page applications."
    },
    {
      src: expr,
      name:"Express.js",
      productName:
       "Express.js is a popular web application framework for Node.js. It simplifies server-side development by providing a set of robust features for creating RESTful APIs and web applications."
    },
    {
      src: node,
      name:"node.js",
      productName:
      "Node.js is an open-source, server-side JavaScript runtime environment. It allows developers to build scalable, high-performance network applications by executing JavaScript code outside of a web browser."
    }
  ];
  return (
    <>
      <div className='text-white  text-center p-4 font-size-text'><p>Skills</p></div>
      <div className='grid place-items-center'>
        <div className='header-width  flex flex-wrap justify-around gap-x-6 p-8 ' key={images.index} >
          {
            images.map((item, index) => {
              return (
                <>

                  <div className='skills relative'>
                    <div className=' bg-slate-50 rounded absolute top-10 left-35 w-8 h-8  '  >
                      <img src={item.src} className='h-8 rounded w-8 '/>
                    </div>
                    <p className='text-white text-lg not-italic font-bold' >{item.name}</p>
                    <div className='border-top w-9/12 h-48 text-white font-normal text-center '  >
                     {item.productName}
                    </div>
                  </div>

                </>
              )
            })
          }
        </div>

      </div>

    </>
  )
}

export default Skill
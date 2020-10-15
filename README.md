<h1 align="center">Starving Artist? Time To React With Single Page Apps!</h1> 

<h2>Introduction:</h2>

The purpose of this tutorial is to walk through the key features of React JS and to outline some of the basics through the development of a single page application. Furthermore, this tutorial is geared towards beginners and people who are new to web development and the architecture/file structure needed to develop applications. The intention is to learn by doing, specifically by creating a functional application with multiple page views and then host it on the Repl.it servers for the world to see. Repl.it was chosen as the environment to write code in because of the ease of accessibility and setup, moreover because it allows you to ‘host’ your completed work at a URL address from the start. 

The approach for designing the application itself is organized into two parts and these sections are as follows:


<b>Part 1:</b>Creating A Barebones Single Page App With Create-React-App

<b>Part 2:</b>Styling the Single Page App Page Views

<h2>Resources--></h2>

<b>Tutorial:</b>
https://github.com/kitfud/SinglePageAppTutorial/blob/master/TutorialDocuments/Starving%20Artist_%20Time%20to%20React%20With%20Single%20Page%20Apps!%20.pdf

<b>Repl.it Repo/Hosting:</b>https://repl.it/@KitFuderich1/SinglePageApp

<b>Live Deployment of App:</b> https://devserver-da5ea.web.app/home

<b>Resource Walkthrough:</b> https://www.youtube.com/watch?v=PYmPZERDtRo&feature=youtu.be

![painting](https://raw.githubusercontent.com/kitfud/SinglePageAppTutorial/master/public/images/3.jpg)

<h2>Preamble:</h2>
<p>
Times are tough! The other day I contacted a bunch of coffee shops to see if anyone could exhibit my artwork. With the response across the board being, “no”- it’s finally time to “React” and to figure out a way to deploy my artwork online so I can showcase what I have! </p>
  
<h2>Technical Background:</h2>
<p>
For displaying artwork online you could go ahead and choose an established web service like Instagram but that would not allow the flexibility, long term, for if your website/application grows and you want to add customized features. 

In the end, you have a variety of options to choose from for building your app/product but in my opinion the easiest way to code something up for display, such as showcasing images of paintings, is to use the <a href="https://reactjs.org/">React JS</a> as a framework for developing our website in conjunction with the <a href = "https://reactjs.org/docs/create-a-new-react-app.html">‘create-react-app’</a> tool to accelerate development.

React JS allows us to create a hybrid of HTML/CSS known as <a href="https://www.w3schools.com/react/react_jsx.asp#:~:text=JSX%20stands%20for%20JavaScript%20XML,and%20add%20HTML%20in%20React.">JSX</a> and this flexibility will allow us to code up our own ‘custom’ components.  Towards this end, React JS allows us to extend the basic functionality of HTML/CSS and blend JavaScript within our syntax; all of which will be helpful for making our webpages interactive.</p>

<h2>Learning Objectives:</h2>
<ul>
  <li>Students will scaffold an application using ‘create-react-app’ and host an application on the Repl.it environment/servers </li>
  <li>Students will apply component based architecture (and thinking) for managing their app file structure</li>
  <li>Create a single page application using the package add on, ‘react-router-dom’</li>
  <li>Implement some basic CSS rules for styling the header and footer with the inclusion of a navigation interface (‘navbar’)</li>
  <li>Use React JSX to render individual components to the browser</li>
</ul>

<h2>Prerequisites:</h2>
<ul>
  <li>It is necessary that students have a good grasp of Javascript before jumping into development with React JS.</li>
  <li>For React JS you’ll want to be familiar with ES6 syntax. During this tutorial, arrow functions and the higher order map() function is used. </li>
  <li>Experience with HTML/CSS and how the structure of code dictates the template for what is ‘viewed’ as the end result of a data flow.</li>
  <li>Important: I recommend that you complete the following React JS tutorial from the official documentation page: https://reactjs.org/tutorial/tutorial.html</li>
 
<h2>Software:</h2>
<p>
  We will be coding the entirety of this application within the <a href="https://repl.it/~/">Repl.It</a> environment. This will allow us to centralize our learning in one place and also allow for the importing of packages which would otherwise have to take place through the use of the <a href="https://en.wikipedia.org/wiki/Command-line_interface">Command Line</a> arguments and the use of a package delivery service such as, <a href="https://en.wikipedia.org/wiki/Npm_(software)">NPM</a>.</p>
<p>
The decision to work in Repl.It  is also to ensure maximum accessibility to an environment for writing React JS as all you’ll need is access to the internet and then the ability to navigate to the website URL: https://repl.it/.
</p>
<p>
Repl.It will also allow us to save or work, view previews of our code also host our finished project at a URL address. These are all excellent affordances for someone just wanting to tinker around and play with some React JS! 
</p>

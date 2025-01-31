## 1 Explain QTripStatic project
Application Summary
QTrip-Static is a responsive static travel website aimed at travellers looking for a multitude of adventures in different cities.

My Contributions
Created the landing page, adventures page and adventure details page from wireframe layout using HTML and CSS.
Created a responsive navigation bar which collapses automatically on smaller devices to display a toggle icon, using Bootstrap Navbar.
Utilized CSS properties to add the hero image and align elements in it as per the design.
Positioned images of varying sizes and set them to toggle visibility based on screen sizes.
Created the required layout in the cards by using Bootstrap Flex.
Implemented the cities grid and the adventures grid section by using Bootstrap Grid. Improved the UI of the grid sections by making images responsive, adding hovering effects over each image tile and ensuring proper spacing using Bootstrap Spacing.
Created the “Sold out” side section to be fixed on the screen even on scrolling.
Deployed the website to Vercel.
My Learnings
Learned to convert wireframe layouts into fully functional web pages using HTML and CSS.
Positioning elements precisely, such as fixing the “Sold out” section on the details page, enhanced my knowledge of CSS positioning techniques and their practical applications.
Learned to leverage Bootstrap's utility classes to quickly style elements and manage their responsiveness without writing extensive custom CSS.
Using Bootstrap's grid system and Bootstrap Flex to create layouts that adjust fluidly to different screen sizes.
Adding hover effects to images improved my skills in creating interactive and visually appealing user interfaces.
Learned to deploy the website to Vercel using Vercel CLI commands, making the website live and accessible.

## 2 Explain QTripDynamic project
Application Summary
QTripDynamic is a responsive dynamic travel website aimed at travellers looking for a multitude of adventures in different cities.

My Contributions
Fetched data from provided RESTful API endpoints to dynamically plug-in data on the landing page, adventures page, adventures details page, and reservations page.
Improved UX with multi-select filters and image carousels(using Bootstrap).
Performed DOM manipulation to insert the HTML populated with API response data into the DOM of multiple pages.
Implemented conditional rendering for the “Sold out” panels and the reservations page based on API responses.
Persisted user-selected filters in the browser’s localStorage.
Implemented reservation logic with Fetch API for POST requests.
Deployed the backend to Render and the frontend to Vercel.
My Learnings
Learned to handle RESTful API endpoints for dynamic data fetching.
Improved proficiency in using JavaScript for dynamic content rendering and DOM manipulation.
Learned to handle form submissions and POST requests using Fetch API.
Developed skills in implementing multi-select and single-select filters using JavaScript.
Managed persistence of filters using localStorage.
Implemented conditional rendering based on API responses for reservation status.
Learned to deploy backend services to Render and deploy frontend to Vercel.

## 3 Explain XBoard project
Application Summary
XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.

My Contributions
Utilised the Figma file to understand the design requirements
Fetched news data from Flipboard's RSS feed using REST API and integrated it into the web page.
Utilized the Accordion, Carousel, and Card components provided by Bootstrap and modified them to facilitate the required user interface.
Implemented desktop and mobile views with reference to the Figma design.
Implemented DOM manipulation to dynamically render the frontend as per the data and conditions.
Deployed the dynamic webpage to Vercel.
My Learnings
Understanding the design requirements from the given Figma file.
Creating a dynamic and responsive frontend webpage from scratch.
Invoking API endpoints to fetch data from the given RSS feed and converting the data to JSON by integrating 3rd party API - rss2json.
Using methods like Math.random(), toString(), and substr() to generate random IDs.
Writing clean, readable, and maintainable JavaScript code by using functions to modularize code.
Customizing Bootstrap components by understanding their attributes and how they handle events and interactions.
Utilizing media queries to create responsive layouts, such as adjusting the size of the Carousel Image based on the viewport width.
 
 ## 4 Explain QTify project? And also what all technologies you used in it?
Project Summary
QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface. It offers songs from different albums and genres for music lovers.

Project Deliverables

Landing Page:

A responsive navigation bar with a custom logo, search component, and feedback button.
An eye-catching hero section with promotional content.
Reusable button component with unique styling.
Albums Section:

Dynamic, reusable Card component with Material-UI integration.
Customized carousel feature using the Swiper library.
Dynamic Section component capable of displaying content in both carousel and grid layouts.
Songs Section:

Reusable Filters component using Material-UI Tabs for genre-based filtering.
Axios for fetching genre options and song data from the backend.
Conditional rendering to display filter options within the Section component exclusively in the Songs section.
Backend Integration:

REST APIs to fetch data served by the backend server.
Error handling for data fetching operations.
Deployment:

Deployed the QTify React app to Vercel by importing the project repository from GitHub.
Skills Demonstrated:

Frontend Development: ReactJS, Module-scoped CSS, Flexbox, CSS variables
UI Libraries: Material UI, Swiper
API Integration: Axios
State Management: Efficient state handling and error management
Responsive Design: Ensured a seamless experience across devices
Component Reusability: Modular UI components
Deployment: Vercel
Key Learnings:

Implementing dynamic dropdowns and filters by fetching data from external APIs.
Developing reusable UI components and integrating third-party libraries.
Handling asynchronous data fetching and managing API responses and errors.
Creating a responsive and interactive user interface following design specifications.
Efficiently managing state in React to handle user inputs and data fetching.
Deploying a React application to Vercel for seamless deployment and hosting.

 ## 5 Explain QKart project and all the technologies used in it
Project Summary
QKart is an E-commerce application offering a variety of products for customers to choose from.

 

Project Deliverables

Landing Page:

Implemented core logic for authentication, shopping cart, and checkout.
Improved UI by adding responsive design elements for a uniform experience across different devices.
Utilized REST APIs to dynamically load and render data served by the backend server.
Deployed the website to Netlify.
Registration Feature:

Implemented logic and used backend API to enable user registration.
Added validation for the registration form to display informative error messages.
Registration-Login Flow and Routing:

Set up routes using React Router and redirected customers to appropriate pages.
Added UI and logic for the Login page.
Stored user information on the client side using localStorage to avoid login on revisit.
Product Display and Search Feature:

Utilized the useEffect() hook to fetch product data after the DOM is rendered for faster page loading.
Added a search bar to the Products page header and implemented search logic.
Implemented debouncing for improved UX and reduced API calls on search.
Shopping Cart and Checkout Flow:

Added a responsive shopping cart to the Products page.
Made authenticated POST API calls to implement cart logic.
Used conditional rendering to display differing cart designs on the Products page and Checkout page.
Implemented UI and logic to add and select new addresses.
 

Deployment:

Deployed the QKart React app to Vercel.
Configured Vercel to support visiting any subpages directly, as React is a single-page application.
 

Skills Demonstrated:

Frontend Development: React.js, Event Handling, Forms, React Hooks
UI Libraries: Material UI, React Router
API Integration: REST API, Axios
State Management: Efficient state handling and error management
Responsive Design: Ensured a seamless experience across devices
Component Reusability: Modular UI components
Deployment: Vercel
 

Key Learnings:

Implementing core e-commerce functionalities such as authentication, cart, and checkout.
Developing responsive UI elements for a uniform user experience across devices.
Handling asynchronous data fetching and managing API responses and errors.
Efficiently managing state in React to handle user inputs and data fetching.
Implementing search functionality with debouncing to improve user experience.
Deploying a React application to Netlify and configuring it for a single-page application.
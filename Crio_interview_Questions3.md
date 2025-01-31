## 1 How to get console params and query in JavaScript?

Console Logging URL Parameters:
Assuming you have a URL like `http://example.com/user/123`, you can extract and log the URL parameters using plain JavaScript:

const url = new URL('http://example.com/user/123');
// Assuming the URL pattern is like: /user/{id}
const pathSegments = url.pathname.split('/'); // Splits the path into segments
const userId = pathSegments[2]; // Extracts the ID from the URL
console.log('User ID:', userId);
Console Logging Query Strings:
Assuming you have a URL like `http://example.com/search?query\=javascript\&sort\=desc`, you can extract and log the query parameters using plain JavaScript:

Code snippet:
// Accessing query parameters
const urlParams = new URLSearchParams(window.location.search);
const queryParam = urlParams.get(‘query’);
console.log("Query Parameter:", queryParam);
Good Practices to Keep in Mind:
Sanitize Input: When logging parameters or query parameters, ensure that sensitive information such as passwords or personal data is not exposed.
Error Handling: Handle cases where parameters or query parameters may not exist or have unexpected values. Validate inputs before logging or processing them to prevent unexpected behavior or security vulnerabilities.
Pitfalls to Avoid:
Logging Sensitive Data: Avoid logging sensitive information such as passwords, API keys, or user credentials to the console, as it can expose them to potential attackers or unauthorized users.

## 2 How does the browser loads HTML and JS files upon visiting a particular website?

When you visit a website, the process of loading HTML and JavaScript files, along with other resources like CSS and images, is a multi-step process that involves both your web browser and the web server hosting the website. Here's a simplified overview of how this process works:

DNS Lookup: The first step is finding the IP address of the website you're trying to visit. When you enter a website's URL into your browser, it performs a DNS (Domain Name System) lookup to translate the human-readable domain name into an IP address that identifies the server where the website is hosted.
HTTP Request: Once the IP address is known, your browser sends an HTTP (Hypertext Transfer Protocol) request to the server asking for the website's content. This request includes headers that specify the type of content the browser can accept.
Server Response: The server receives the request and processes it. If the requested resource (like an HTML file) is available, the server responds with an HTTP response message, which includes the requested content along with a status code (e.g., 200 OK) indicating the request was successful.
Loading HTML: The browser starts by loading the HTML file. HTML (Hypertext Markup Language) is the backbone of most web pages and defines the structure and layout of a webpage. The browser reads the HTML content and begins to parse it, converting the tags and attributes into a DOM (Document Object Model) tree that represents the structure of the webpage in memory.
Processing Resources: As the browser parses the HTML, it encounters tags that reference external resources such as CSS files (for styling), JavaScript files (for interactivity), and images. The browser sends additional HTTP requests to fetch these resources. JavaScript files and CSS are particularly important for the functionality and appearance of the page.
Executing JavaScript: JavaScript files can be loaded in the <head> or <body> of the HTML, and how they're loaded (synchronously or asynchronously) can affect the rendering of the page. The browser executes JavaScript, which can modify the DOM, change the displayed content, and alter the behavior of the webpage. This includes adding event handlers, creating or modifying HTML elements, and making asynchronous requests to the server (AJAX calls) for additional data without reloading the page.
Rendering the Page: While JavaScript is being executed, the browser also processes the CSS rules, applies them to the DOM, and performs layout calculations to determine how elements should be positioned and styled on the page. The final step is painting, where the browser draws the content on the screen. This involves drawing text, colors, images, and other visual elements as defined by the HTML and CSS.
Dynamic Updates: After the initial page load, JavaScript can continue to run in the background, listening for events (like user clicks or keystrokes) and making updates to the DOM. This allows for interactive and dynamic web pages that can respond to user input without needing to reload the page.

Throughout this process, the browser optimizes performance and user experience by prioritizing the loading of certain resources, caching previously visited pages, and executing JavaScript asynchronously when possible. The exact details of how each browser handles these tasks may vary, but the general process described above is common across modern web browsers.

## 3 What are the differences between semantic and non-semantic HTML tags?

Intro Line
Semantic and non-semantic tags are both used in HTML markup to define the structure and content of web pages.

3 Points of Contrast
Meaning and Context:

Semantic Tags: Semantic tags convey meaning about the content they wrap, making it clear to both browsers and developers what the content represents (e.g., <header>, <footer>, <nav>).
Non-Semantic Tags: Non-semantic tags, such as <div> and <span>, do not inherently convey meaning about the content they contain. They are generic containers used for styling and layout purposes.
Accessibility and SEO:

Semantic Tags: Semantic markup enhances accessibility by providing structure and context to assistive technologies like screen readers. Additionally, search engines use semantic markup to better understand the content and context of web pages, potentially improving search engine rankings.
Non-Semantic Tags: While non-semantic tags can still be accessible if properly used with ARIA roles and attributes, they don't inherently provide semantic meaning, making it harder for assistive technologies and search engines to interpret the content accurately.
Code Readability and Maintenance:

Semantic Tags: Semantic markup leads to more readable and maintainable code as the purpose of each element is clear from its name. Developers can quickly understand the structure of the document and make changes accordingly.
Non-Semantic Tags: Overuse of non-semantic tags like <div> for structuring can result in cluttered and less readable code, especially in larger projects where it becomes challenging to discern the purpose of each container solely from its class or ID.

Usage in Real World
Semantic Tags: Semantic tags are widely used in modern web development practices, especially in frameworks like Bootstrap and Semantic UI, to create well-structured and accessible web pages. They play a crucial role in improving both the accessibility and search engine optimization of websites, leading to better user experiences and higher search rankings.

Non-Semantic Tags: While non-semantic tags are still prevalent in web development for layout and styling purposes, there is a growing emphasis on using semantic markup for improved accessibility and SEO. However, non-semantic tags are still necessary for certain styling and layout tasks, particularly in CSS frameworks and complex web designs.

## 4 What are the differences between block elements, inline elements and inline-block elements?

Intro Line
In CSS, block, inline, and inline-block are display property values used to control the layout and behaviour of elements on a web page.

3 Points of Contrast
Layout Behavior:

Block: Elements with display: block; occupy the full width available and start on a new line. They stack vertically, taking up the entire width of their parent container.
Inline: Elements with display: inline; only take up as much width as necessary and do not force new lines. They flow within the content, side by side with other inline elements.
Inline-block: Elements with display: inline-block; behave similarly to inline elements in that they do not start on a new line. However, they can have dimensions (width, height) and vertical alignment like block elements.
Dimensions:

Block: Block elements have width, height, padding, and margins that you can control. They naturally expand to fill the width of their parent container unless otherwise specified.
Inline: Inline elements only respect horizontal dimensions (width, padding, margins), not vertical ones (height). They take up as much space as their content necessitates.
Inline-block: Inline-block elements behave like inline elements regarding horizontal dimensions but can also have vertical dimensions (height, vertical margins).
Default Elements:

Block: Common block-level elements include <div>, <p>, <h1>-<h6>, and <li>.
Inline: Common inline elements include <span>, <a>, <strong>, <em>, and <img>.
Inline-block: No specific HTML tags inherently use inline-block by default, but it's commonly applied to elements when you need them to have block-like properties while still being inline.

Usage in Real World
Block: Block elements are used for creating the main structure and layout of a webpage, such as sections, headers, and navigation bars. They're ideal for elements that need to start on new lines and take up the full width available.

Inline: Inline elements are typically used for smaller elements within a block-level structure, such as text spans or links within paragraphs. They're useful for elements that should flow within the text content without disrupting the flow of surrounding content.

Inline-block: Inline-block elements are commonly used for creating navigation menus, grid layouts, and components that need to be aligned horizontally while still maintaining the ability to set dimensions and margins. They offer a flexible layout option compared to purely block-level or inline elements.

## 5 Explain CSS selectors and their types

Need for it
CSS selectors are essential for targeting specific HTML elements within a document and applying styles to them. They provide a way to select elements based on their attributes, structure, and relationship with other elements.

What is it?
CSS selectors are patterns used to select and style one or more elements within an HTML document. They allow developers to target elements based on various criteria such as element type, class, ID, attributes, and their position in the document's structure.

How is it used?
CSS selectors are used within CSS rules to specify which elements the rule should apply to. Here are some common types of CSS selectors and how they are used:

Element Selector: Targets HTML elements based on their element type.

p {
color: blue;
}
Class Selector: Targets elements with a specific class attribute.

.highlight {
background-color: yellow;
}
ID Selector: Targets a single element with a specific ID attribute.

#header {
font-size: 24px;
}
Attribute Selector: Targets elements based on their attributes.

input[type="text"] {
border: 1px solid black;
}
Descendant Selector: Selects elements that are descendants of another specified element.

ul li {
list-style-type: square;
}
Adjacent Sibling Selector: Selects an element that is directly preceded by a specified element.

h2 + p {
font-weight: bold;
}
Pseudo-classes and Pseudo-elements: Selects elements based on their state or position within the document.

a:hover {
text-decoration: underline;
}
`p::first-line {  
font-weight: bold;
}`
By using CSS selectors effectively, developers can precisely target and style elements in HTML documents, enabling them to create visually appealing and well-structured web pages.

## 6 What is CSS Box Model

The CSS Box Model is a fundamental concept in web development that describes how elements are rendered and displayed on a webpage. It consists of four main components: content, padding, border, and margin.

Content: It represents the actual content of an element, such as text, images, or other HTML elements. The content area is defined by the width and height properties.
Padding: It is the space between the content and the element’s border. Padding can be set using the padding property and can have different values for each side (top, right, bottom, left).
Border: It is a line that surrounds the content and padding of an element. Borders can be styled using properties like border-width, border-color, and border-style.
Margin: It is the space outside the element’s border, creating a gap between adjacent elements. Margins can be set using the margin property and can also have different values for each side.
Here’s an example in HTML format to demonstrate the CSS Box Model using JavaScript:

<!DOCTYPE html>
<html>
<head>
<style>
.box {
width: 200px;
height: 100px;
padding: 20px;
border: 2px solid black;
margin: 10px;
}
</style>
</head>
<body>
<div class="box">This is a box element.</div>
</body>
</html>
In the above example, we define a CSS class called “box” with specific properties for width, height, padding, border, and margin. Then, we create a <div> element with the class “box” to apply those styles. The resulting box will have a width of 200px, height of 100px, 20px padding, a 2px solid black border, and a 10px margin around it.

## 7 What is the difference between absolute and relative length units in CSS? Provide examples

Introduction
In CSS, length units are used to specify the size of various elements and their content. Absolute length units are fixed and remain the same regardless of other properties, whereas relative length units change based on other properties such as the size of the parent element, viewport dimensions, or font size.

3 Points of Contrast
Definition and Stability:

Absolute Units: These are units that have a constant size and do not change based on the context of the document. Examples include pixels (px), inches (in), centimeters (cm), and points (pt). They are predictable and consistent across different devices.
Relative Units: These units are calculated in relation to another property's value, making them flexible and adaptable to various conditions. Examples include percentages (%), em (em), rem (rem), viewport width (vw), and viewport height (vh). Their final size can change depending on the document, parent elements, or viewport size.

Adaptability and Responsiveness:

Absolute Units: Because they are fixed, they're less adaptable to different screen sizes and user settings. This can make designs using absolute units less responsive when viewed on devices with different screen sizes or resolutions.
Relative Units: They offer a more fluid and responsive approach to styling, as they adapt based on other factors like screen size, making them ideal for responsive design. For example, vw and vh can adjust the size of elements to be a percentage of the viewport size.

Use Cases and Best Practices:

Absolute Units: Best used for defining non-scalable elements where consistency is crucial, such as the border width of an element or the print layout where the dimensions need to be exact.
Relative Units: Suited for scalable layouts and typography that need to adjust based on parent element size or viewport dimensions, enhancing accessibility and user experience across different devices.
Real World Usage
Absolute Units Usage: A designer might use pixels (px) to specify the exact size of a logo image or the thickness of a border, ensuring that these elements appear consistently across all devices and resolutions.
Relative Units Usage: For a website's typography, rem units can be used for font sizes to ensure that all text scales proportionally based on the root element's font size, enhancing readability across different devices. % units might be used for layout widths to make the content adapt to the width of the browser window, while vh and vw could control the sizing of sections and backgrounds based on the viewport size, creating a responsive and engaging user interface.

## 8 What is flexbox in CSS?

📌 Need for it
CSS Flexbox addresses the limitations of previous CSS layout techniques, like complex alignment and spacing, by offering a more efficient way to design web layouts. It solves common issues like vertical centering and creating dynamic grids without resorting to floats, positioning, or table layouts.

🔍 What is it?
Flexbox, or the Flexible Box Layout, is a CSS layout model that provides a powerful way to create flexible and responsive layouts. It allows for the dynamic distribution of space and alignment of items within a container, making layouts more adaptable to varying screen sizes and content changes.

❓ How is it used?
In practice, Flexbox is utilized for:

Navigation Menus: Ensuring items are evenly spaced and aligned, regardless of screen size.
Card Layouts: Creating responsive card components with consistent alignment and spacing.
Forms: Aligning form elements for a clean, structured appearance.
Media Objects: Designing layouts with images or videos and text side by side.
Responsive Grids: Building simpler, adaptive grids that complement CSS Grid for more complex layouts.

## 9 What are the differences between CSS Grids and Flexbox?

Intro line:
CSS Grid and Flexbox are powerful layout systems that provide efficient and flexible ways to design responsive, modular web layouts with ease.

3 points compared and contrasted:
Layout System:
Grid - 2D layout system, managing both rows and columns simultaneously for complex structures.

         Flexbox - 1D layout model, designed for either row or column alignment, excelling in single-axis scenarios.

Content-driven vs. Container-driven:
Grid - Container-driven, with predefined structure and explicit row/column definitions for greater control.

         Flexbox - Content-driven, adjusting to content size and excelling at aligning and distributing items within a container.

Use cases:
Grid - Ideal for larger-scale, grid-based designs with complex layout requirements.

         Flexbox - Suitable for single-axis alignment, smaller-scale designs, and distributing individual items or small groups of content.

         ## What are the differences between CSS Grids and Flexbox?

Intro line:
CSS Grid and Flexbox are powerful layout systems that provide efficient and flexible ways to design responsive, modular web layouts with ease.

3 points compared and contrasted:
Layout System:
Grid - 2D layout system, managing both rows and columns simultaneously for complex structures.

         Flexbox - 1D layout model, designed for either row or column alignment, excelling in single-axis scenarios.

Content-driven vs. Container-driven:
Grid - Container-driven, with predefined structure and explicit row/column definitions for greater control.

         Flexbox - Content-driven, adjusting to content size and excelling at aligning and distributing items within a container.

Use cases:
Grid - Ideal for larger-scale, grid-based designs with complex layout requirements.

         Flexbox - Suitable for single-axis alignment, smaller-scale designs, and distributing individual items or small groups of content.

## 10 What is responsive web design?

Need for It
With the diversity of device sizes today, responsive design is essential to ensure a website is accessible and functional across all devices, eliminating issues like poor navigation, unreadable text, and slow load times on non-optimized devices.

What Is It?
Responsive design is a strategy in web design that makes web pages render well on a variety of devices and window or screen sizes. It employs fluid grids, flexible images, and CSS media queries to adapt the layout to the viewing environment, enhancing user experience and device compatibility.

How Is It Used in the Real World
In practice, responsive design is applied across almost all the websites in the real world e.g. e-commerce websites, news websites, etc.

<!-- Taken from https://www.crio.do/learn/activity/77079537/TASK_FE_TECHPREP_105/quiz/QUESTION_FE_TECHPREP_Q34/ -->
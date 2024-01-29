# HTML-PDF

Approach 2

1. Install required packages:
   npm install express html-pdf

2. Create an Express app (app.js)

3. Run your Express app:
   node app.js

4. Access the generated PDF with query parameters:

Open your browser and visit http://localhost:3000/generate-pdf?title=YourTitle&content=YourContent. This will dynamically generate a PDF based on the HTML content with dynamic data from query parameters.

Note: Adjust the HTML content and PDF conversion options as needed. The example uses query parameters (title and content) to dynamically populate the HTML content.

---

ExpressJs:

- Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
- Allows to set up middlewares to respond to HTTP Requests. ·

PDF Conversion options:

- Page Size: { format: 'A4' }
- Margins: { margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' } };
- Header and Footer: {
  header: { height: '10mm', contents: '<div style="text-align: center;">Header</div>' },
  footer: { height: '10mm', contents: '<div style="text-align: center;">Page {{page}} of {{pages}}</div>' },
  };
- Page Numbers: { pageNumbers: true };
- Display Header and Footer on First Page Only: { displayHeaderFooter: 'firstPage' };
- Page Breaks: { break: true };
- Custom CSS: { customCss: 'body { font-size: 16px; }' };
- PhantomJS Options (for html-pdf): { phantomPath: '/path/to/phantomjs' };

html-pdf library:

- The html-pdf library in Node.js is a simple HTML to PDF conversion library that uses PhantomJS as the rendering engine.
- create(html [, options]):
  Description: Converts HTML content to a PDF buffer.
  Parameters:
  html: The HTML content to convert to PDF.
  options (optional): An object containing conversion options.
  Returns: A PDF buffer.

  PDF Buffer:

  - A PDF buffer, in the context of Node.js and JavaScript, refers to a binary data buffer containing the contents of a PDF file.
  - Buffers are a data type in Node.js that are used to represent binary data in memory.
  - They are particularly useful when working with binary files like images, PDFs, or any other type of data that is not text.

PhantomJS Engine:

- PhantomJS is a headless web browser scriptable with JavaScript. It is often used as a browser automation tool or for tasks that involve web page interaction, rendering, and testing. The term "headless" refers to the fact that PhantomJS operates without a graphical user interface (GUI), making it suitable for server-side and command-line usage.
- It's worth noting that PhantomJS was widely used in the past for tasks like headless browsing and web page testing. However, it is considered deprecated, and development has officially ceased. Users are encouraged to migrate to alternative tools, such as Puppeteer with Headless Chrome, which offers similar functionality and is actively maintained by the Chrome team. As a result, libraries like html-pdf that rely on PhantomJS may be considered outdated in favor of more modern alternatives.

---

The architecture for an example involving the html-pdf library might look like this:

1. Node.js Application:

Your Node.js application is the main component that orchestrates the PDF generation process. It contains the logic for handling HTTP requests, generating dynamic HTML content, and converting that content to PDF.

2. Express.js (Optional):

If your application is web-based, you might use the Express.js framework to handle HTTP requests and route them to the appropriate handlers.

3. html-pdf Library:

The html-pdf library is a Node.js library used for converting HTML to PDF. It typically interfaces with a headless browser engine (e.g., PhantomJS or Puppeteer) to render the HTML and generate the PDF.

4. HTML Content:

Your application dynamically generates HTML content based on data retrieved from a database, an API, or other sources. This HTML content may include placeholders for dynamic data.

5. PDF Conversion Options:

You define options for the PDF conversion process, such as page size, margins, header, footer, etc. These options are passed to the html-pdf library.

6. Rendering Engine (PhantomJS, Puppeteer, etc.):

The html-pdf library interfaces with a rendering engine to convert the HTML content to a PDF. In the case of PhantomJS, it was traditionally used as the rendering engine. Alternatively, modern libraries like Puppeteer can be used with Headless Chrome.

7. PDF Buffer:

The result of the PDF conversion is a binary buffer containing the raw PDF data. This buffer can be saved to a file, sent as a response to an HTTP request, or further processed as needed.

const express = require("express");
const path = require("path");
const pdf = require("html-pdf");

const app = express();
const port = 3000;

// HTML to PDF conversion middleware
app.get("/generate-pdf", (req, res) => {
  // Extract query parameters
  const { title, content } = req.query;

  // HTML content with dynamic data
  const htmlContent = `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${content}</p>
      </body>
    </html>
  `;

  // PDF conversion options
  const options = { format: "Letter" };
  //   const options = {
  //     format: "A4",
  //     orientation: "portrait",
  //     border: "10mm",
  //     header: {
  //       height: "20mm",
  //       contents: '<div style="text-align: center;">Header</div>',
  //     },
  //   };

  // Convert HTML to PDF
  pdf.create(htmlContent, options).toBuffer((err, buffer) => {
    if (err) {
      console.error("Error converting HTML to PDF:", err);
      res.status(500).send("Error generating PDF");
    } else {
      // Send the PDF as a response
      res.contentType("application/pdf");
      res.send(buffer);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

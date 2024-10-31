// pages/blog.js
import React from 'react';

const htmlblog = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to My HTML Blog</h1>
        <p className="text-gray-700 mb-6">
          This blog covers HTML basics and advanced topics with examples.
        </p>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">HTML Basics</h2>
          <p className="mb-4">HTML (Hypertext Markup Language) is the standard language for creating web pages.</p>
          <h3 className="text-xl font-semibold mb-2">Basic Structure</h3>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            <code>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`}
            </code>
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">HTML Elements</h2>
          <p className="mb-4">HTML elements are the building blocks of HTML pages. Here are some common elements:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Headings:</strong> &lt;h1&gt; to &lt;h6&gt;</li>
            <li><strong>Paragraphs:</strong> &lt;p&gt;</li>
            <li><strong>Links:</strong> &lt;a&gt;</li>
            <li><strong>Images:</strong> &lt;img&gt;</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Example of a Paragraph</h3>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            <code>
              {`<p>This is a paragraph in HTML.</p>`}
            </code>
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Advanced HTML Topics</h2>
          <p className="mb-4">Once you understand the basics, you can explore advanced topics such as:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Forms:</strong> Collect user input.</li>
            <li><strong>Semantic HTML:</strong> Use meaningful tags like &lt;article&gt; and &lt;section&gt;.</li>
            <li><strong>Accessibility:</strong> Ensure your HTML is usable for everyone.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Example of a Simple Form</h3>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            <code>
              {`<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>`}
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default htmlblog;

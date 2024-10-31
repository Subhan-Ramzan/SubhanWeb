import React from "react";

// Skills data
const skills = [
  { title: "Web Development", description: "Building responsive and optimized web applications." },
  { title: "Full Stack Development", description: "Combining frontend and backend to create seamless applications." },
  { title: "HTML/CSS", description: "Foundation of web development, crafting beautiful layouts and designs." },
  { title: "JavaScript & TypeScript", description: "Dynamic, scalable web applications powered by JavaScript and TypeScript." },
  { title: "TailwindCSS", description: "Fast, utility-first CSS framework for responsive design." },
  { title: "React & Next.js", description: "Modern JavaScript frameworks for interactive user interfaces." },
  { title: "Node.js & Express.js", description: "Backend development with JavaScript, RESTful APIs." },
  { title: "MongoDB", description: "NoSQL database for fast, flexible storage." },
  { title: "Project Management", description: "Efficient planning, executing, and closing of projects." },
  { title: "Teamwork", description: "Collaborative approach to achieving goals." },
  { title: "Time Management", description: "Organizing and prioritizing tasks effectively." },
  { title: "C++", description: "Object-oriented programming for performance-focused development." },
  { title: "Effective Communication", description: "Conveying ideas and feedback clearly and efficiently." },
  { title: "Critical Thinking", description: "Analyzing and evaluating solutions for better outcomes." },
];

// Blog page component
export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="text-center py-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Professional Skills Blog</h1>
        <p className="text-xl">Your guide to mastering professional skills for the modern tech world.</p>
      </header>
      <main className="max-w-6xl mx-auto p-8">
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <SkillSection key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      </main>
    </div>
  );
}



// Individual skill section
function SkillSection({ title, description }) {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-semibold text-indigo-600">{title}</h2>
      <p className="text-gray-700 mt-3">{description}</p>
      {title === "JavaScript & TypeScript" && <CodeExample />}
    </section>
  );
}

// Code example component with sample code
function CodeExample() {
  return (
    <div className="mt-4 bg-gray-900 p-4 rounded-lg">
      <pre className="text-sm text-green-400">
        <code>
          {`// Example: JavaScript Function for Fetching Data
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

fetchData("https://api.example.com/user")
    .then(data => console.log(data));
`}
        </code>
      </pre>
    </div>
  );
}


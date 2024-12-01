import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import "./styles.css";

export default async function Page({ params }) {
  // Define the path to the markdown file based on the slug
  const filepath = `content/${params.slug}.md`;

  // If the file does not exist, show a 404 page
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  // Read the markdown content and parse the frontmatter
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  // Initialize the processor to transform markdown to HTML
  const processor = unified()
    .use(remarkParse) // Parse markdown syntax
    .use(remarkRehype) // Convert markdown to HTML
    .use(rehypeDocument, { title: data.title || "C++ Programming Tutorial" }) // Wrap HTML in a document structure
    .use(rehypeFormat) // Format the HTML for readability
    .use(rehypeStringify) // Convert the AST back into HTML string
    .use(rehypeSlug) // Add slugs to headings for linking
    .use(rehypeAutolinkHeadings) // Automatically link headings to their slugs
    .use(rehypePrettyCode, {
      theme: "github-dark", // Use a GitHub dark theme for code blocks
      transformers: [
        transformerCopyButton({
          visibility: "always", // Show copy button at all times
          feedbackDuration: 3000, // Show feedback for 3 seconds
        }),
      ],
    });

  // Process the content and generate the HTML
  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Header Section with Image */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {data.title}
          </h1>
          <p className="text-sm sm:text-base mb-2 border-l-4 border-gray-500 pl-4 italic text-gray-600">
            &quot;{data.description}&quot;
          </p>
          <div className="flex gap-4 flex-wrap mb-4">
            <p className="text-xs sm:text-sm text-gray-500 italic">By {data.author}</p>
            <p className="text-xs sm:text-sm text-gray-500">{data.date}</p>
          </div>
        </div>

        {/* Content Section */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl mb-8"
        ></div>

        {/* Table of Contents */}
        <OnThisPage htmlContent={htmlContent} />
      </div>
    </div>
  );
}

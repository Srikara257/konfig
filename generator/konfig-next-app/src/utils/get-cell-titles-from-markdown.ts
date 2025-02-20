import { unified } from "unified";
import remarkDirective from "remark-directive";
import remarkParse from "remark-parse";
import { toString } from "mdast-util-to-string";
import type { Heading } from "mdast";

export function getCellTitlesFromMarkdown({
  markdown,
}: {
  markdown: string;
}): string[] {
  const processor = unified().use(remarkParse).use(remarkDirective);
  const mdast = processor.parse(markdown);

  const titles: string[] = [];

  let heading: Heading | null = null;
  mdast.children.forEach((child) => {
    if (child.type === "heading") heading = child;
    if (
      heading !== null &&
      child.type === "containerDirective" &&
      child.name === "form"
    ) {
      titles.push(toString(heading));
      heading = null;
    }
  });

  return titles;
}

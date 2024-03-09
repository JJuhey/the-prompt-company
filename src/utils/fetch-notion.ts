import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getNotionDB = async () => {
  const databaseId = '323429ffbc834b15be3e21181cdb8981';
  return await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: {
        does_not_equal: "Not started"
      }
    },
    sorts: [{
      property: "CreatedAt",
      direction: "ascending"
    }]
  });
}

export const getNotionBlock = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  // console.log("BLOCK!!!")
  // console.log(response);
  
  return response;
}

export const getNotionMarkdown = async (pageId: string) => {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return mdString.parent;
};
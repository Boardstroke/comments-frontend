import { rest } from "msw";

const COMMENT_ENDPOINT = "comments";

const comments = [
  {
    id: "1",
    text: "This is a comment",
    author: {
      id: "1",
      name: "John Doe",
    },
  },
  {
    id: "2",
    text: "This is another comment",
    author: {
      id: "2",
      name: "Jane Doe",
    },
  },
];

export const getCommentMock = rest.get("api/comments", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(comments));
});

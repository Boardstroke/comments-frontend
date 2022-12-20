import { rest, setupWorker } from "msw";
import { getCommentMock } from "./api";

const handlers = [getCommentMock];

export const worker = setupWorker(...handlers);

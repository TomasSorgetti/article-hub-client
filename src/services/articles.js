import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function getMyArticles() {
  return handleApiRequest(() => privateApi.get(`/articles`));
}

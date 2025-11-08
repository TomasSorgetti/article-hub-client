import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function getMyArticles(workbenchId) {
  return handleApiRequest(() =>
    privateApi.get(`/articles?workbenchId=${workbenchId}`)
  );
}

export function getArticle(articleSlug) {
  return handleApiRequest(() => privateApi.get(`/articles/${articleSlug}`));
}

export function createArticle(workbench) {
  return handleApiRequest(() => privateApi.post(`/articles`, workbench));
}

export function deleteArticle(articleId) {
  return handleApiRequest(() => privateApi.delete(`/articles/${articleId}`));
}

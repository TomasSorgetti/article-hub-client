import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function getMyArticles(workbenchId) {
  return handleApiRequest(() =>
    privateApi.get(`/articles?workbenchId=${workbenchId}`)
  );
}

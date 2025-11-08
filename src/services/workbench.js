import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function getAllWorkbenches() {
  return handleApiRequest(() => privateApi.get(`/workbenches`));
}

export function createWorkbench({ name, description, colaborators }) {
  return handleApiRequest(() =>
    privateApi.post(`/workbenches`, { name, description, colaborators })
  );
}

export function deleteWorkbench(workbenchId) {
  return handleApiRequest(() =>
    privateApi.delete(`/workbenches/${workbenchId}`)
  );
}

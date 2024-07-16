import { apiClient } from "./config";

export const createProject = async (payload) => {
  return await apiClient.post(`/api/v1/projects`, payload);
};

export const getProject = async (id) => {
  return await apiClient.get(`/api/v1/projects/${id}`);
};

export const getProjectList = async (userId) => {
  return await apiClient.get(`/api/v1/projects/${userId}`);
};

export const updateProject = async (id, payload) => {
  return await apiClient.patch(`/api/v1/projects/${id}`, payload);
};

export const deleteProject = async (id) => {
  return await apiClient.delete(`/api/v1/projects/${id}`);
};

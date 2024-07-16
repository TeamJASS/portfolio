import { apiClient } from "./config";

export const createEducation = async (payload) => {
  return await apiClient.post(`/api/v1/education/`, payload);
};

export const getEducation = async (id) => {
  return await apiClient.get(`/api/v1/education/${id}`);
};

export const getEducationList = async (userId) => {
  return await apiClient.get(`/api/v1/education/${userId}`);
};

export const updateEducation = async (id, payload) => {
  return await apiClient.patch(`/api/v1/education/${id}`, payload);
};

export const deleteEducation = async (id) => {
  return await apiClient.delete(`/api/v1/education/${id}`);
};

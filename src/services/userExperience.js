import { apiClient } from "./config";

export const createExperience = async (payload) => {
  return await apiClient.post(`/api/v1/experiences`, payload);
};

export const getExperience = async (id) => {
  return await apiClient.get(`/api/v1/experiences/${id}`);
};

export const getExperienceList = async (userId) => {
  return await apiClient.get(`/api/v1/experiences/${userId}`);
};

export const updateExperience = async (id, payload) => {
  return await apiClient.patch(`/api/v1/experiences/${id}`, payload);
};

export const deleteExperience = async (id) => {
  return await apiClient.delete(`/api/v1/experiences/${id}`);
};

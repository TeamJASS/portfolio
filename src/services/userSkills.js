import { apiClient } from "./config";

export const createSkill = async (payload) => {
  return await apiClient.post(`/api/v1/skills`, payload);
};

export const getSkill = async (id) => {
  return await apiClient.get(`/api/v1/skills/${id}`);
};

export const getSkillList = async (userId) => {
  return await apiClient.get(`/api/v1/skills/${userId}`);
};

export const updateSkill = async (id, payload) => {
  return await apiClient.patch(`/api/v1/skills/${id}`, payload);
};

export const deleteSkill = async (id) => {
  return await apiClient.delete(`/api/v1/skills/${id}`);
};

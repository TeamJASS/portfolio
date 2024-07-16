import { apiClient } from "./config";

export const createAchievement = async (payload) => {
  return await apiClient.post(`/api/v1/achievements/`, payload);
};

export const getAchievement = async (id) => {
  return await apiClient.get(`/api/v1/achievements/${id}`);
};

export const getAchievementList = async (userId) => {
  return await apiClient.get(`/api/v1/achievements/${userId}`);
};

export const updateAchievement = async (id, payload) => {
  return await apiClient.patch(`/api/v1/achievements/${id}`, payload);
};

export const deleteAchievement = async (id) => {
  return await apiClient.delete(`/api/v1/achievements/${id}`);
};

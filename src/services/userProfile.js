import { apiClient } from "./config";

export const getProfile = async (userId) => {
  return apiClient.get(`/api/v1/users/userProfile/:${userId}`);
};
export const createProfile = async (userId, payload) => {
  return apiClient.post(`/api/v1/users/userProfile${userId}`, payload);
};

export const updateProfile = async (userId, payload) => {
  return apiClient.patch(`/api/v1/users/userProfile/${userId}`, payload);
};

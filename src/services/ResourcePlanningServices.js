import { api } from "./AxiosConfig";

export const getUsersForService = async (id) => {
  const { data } = await api.get(`/users/service/${id}`);
  return data;
};

export const getServicesForUser = async (userId) => {
  const { data } = await api.get(`/services/user/${userId}`);
  return data;
};

export const postUserImgToLead = async (serviceId, userId) => {};

import { api } from "./AxiosConfig";

export const getAllServices = async () => {
  const { data } = await api.get("/services?skip=0&limit=100");
  return data;
};

export const AssignUserToService = async (serviceId) => {
  const { data } = await api.patch(`/services/${serviceId}/user`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
  });
  return data;
};

export const UnassignUserFromService = async (serviceId) => {
  const { data } = await api.delete(`/services/${serviceId}/user`);
  return data;
};

export const editServices = async ({ serviceId, ...updatedProject }) => {
  console.log("id", serviceId);
  console.log("data", updatedProject);
  const { data } = await api.put(`/services/${serviceId}`, updatedProject);
  return data;
};

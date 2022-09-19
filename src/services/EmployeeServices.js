import { api } from "./AxiosConfig";

export const getAllEmployees = async () => {
  const { data } = await api.get(`/users?skip=0&limit=100`);
  return data;
};

export const getEmployee = async (id) => {
  const { data } = await api.get(`users/${id}`);
  return data;
};

export const getFilteredEmployees = async (queryData) => {
  const filter = queryData.queryKey[1];
  const subfilter = queryData.queryKey[2];
  const name = queryData.queryKey[3];
  const { data } = await api.get(
    `/users/?search=${name}&role=${filter}&project_status=${subfilter}&skip=0&limit=100`
  );
  return data;
};

export const updateProjectAssignment = async (userId, projectId) => {
  const { data } = await api.put(`/users/${userId}/projects/${projectId}`);
  return data;
};

export const removeSkillFromUser = async (userId, skillId) => {
  const { data } = await api.delete(`/users/${userId}/skill/${skillId}`);
  return data;
};

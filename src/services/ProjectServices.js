import { api } from "./AxiosConfig";

export const getAllProjects = async () => {
  const { data } = await api.get(`/projects/?skip=0&limit=100`);
  return data;
};

export const getFilteredProjects = async (queryData) => {
  const filter = queryData.queryKey[1];
  const subfilter = queryData.queryKey[2];
  const search = queryData.queryKey[3];
  const { data } = await api.get(
    `/projects/?name=${search}&type=${filter}&duration=${subfilter}&skip=0&limit=100`
  );
  return data;
};

import { api } from "./AxiosConfig";

export const getAllLeads = async () => {
  const { data } = await api.get(`/leads?skip=0&limit=100`);
  return data;
};

export const getFilteredLeads = async (search, filter, subfilter) => {
  const { data } = await api.get(
    `/leads?name=${search}&probability_status=${filter}&positions=${subfilter}&skip=0&limit=100`
  );
  return data;
};

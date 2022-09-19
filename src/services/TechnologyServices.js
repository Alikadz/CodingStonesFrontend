import { api } from "./AxiosConfig";

export const getAllSkills = async () => {
  const { data } = await api.get(`/skills/?skip=0&limit=100`);
  return data;
};

export const getAllSkillsUsers = async () => {
  const { data } = await api.get(`/skills/users?skip=0&limit=100`);
  return data;
};

export const updateSkill = async({id, ...updatedSkill}) =>{
  const { data } = api.put(`/skills/${id}`, updatedSkill);
  return data;
}
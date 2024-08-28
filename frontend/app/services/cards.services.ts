// services/cards.services.ts
import axiosInstance from "./axiosConfig";
import { helpCenterEnpoints } from "./endpoints";

export const GetAllCards = async () => {
  try {
    const response = await axiosInstance.get(helpCenterEnpoints.getAllCards);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const CreateCard = async (title: string, description: string) => {
  try {
    const response = await axiosInstance.post(helpCenterEnpoints.createCard, {
      title,
      description,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

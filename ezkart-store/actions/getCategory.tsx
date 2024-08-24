import axios from "axios";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const { data } = await axios.get(`${URL}/${id}`);

  return data;
};

export default getCategory;

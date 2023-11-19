// usefooddataput.ts
import axios, { AxiosPromise } from "axios";
import { FoodData } from '../interface/foodData';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const putData = async (data: FoodData): AxiosPromise<any> => {
  const response = await axios.put(`${API_URL}/food/${data.id}`, data);
  return response;
}

export function useFoodDataPut() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: putData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['food-data'] });
    },
  });
  return mutate;
}

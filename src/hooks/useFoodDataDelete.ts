import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const deleteData = async (id: number) => {
    const response = await axios.delete(`${API_URL}/food/${id}`);
    return response.data;
}

export function useFoodDataDelete() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] })
        }
    });

    return mutate;
}

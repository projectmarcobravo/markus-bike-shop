import { useMutation } from "@tanstack/react-query";
import { client } from "../utils/axios";
import { toast } from "react-toastify";
import { ConfigurateBikeFormSchema } from "../components/BikeConfigurator/schema";

interface APIError {
  response: {
    data: {
      error: string;
    };
  };
}

export function useConfigBike() {
  const results = useMutation({
    mutationFn: (configurateBikeForm: ConfigurateBikeFormSchema) => {
      return client.post("/", configurateBikeForm);
    },
    onSuccess: ({ data }) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error: APIError) => {
      toast.error(error.response.data.error);
    },
  });

  return results;
}

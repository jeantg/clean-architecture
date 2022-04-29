import { AxiosResponse } from "axios";
import { api } from "services";
import useSWR from "swr";

export const useCustomSwr = <T>(url = "") =>
  useSWR<AxiosResponse<T>>(url, api.get, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    loadingTimeout: 20,
  });

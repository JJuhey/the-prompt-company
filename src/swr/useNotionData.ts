import useSWR from "swr";
import { fetcher } from ".";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const useNotionData = () => {
  const { data, error, isLoading } = useSWR<PageObjectResponse[]>('/api/notion', fetcher);

  return {
    posts: data,
    isLoading,
    isError: error,
  }
}

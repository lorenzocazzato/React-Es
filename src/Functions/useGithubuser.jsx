import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGitUser({ username }) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    data,
    error,
    loading: !data && !error,
    refetch: mutate,
  };
}

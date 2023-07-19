export const useFetchData = async (path: string): Promise<any> => {
  try {
    const config = useRuntimeConfig();
    const baseURL = "https://comics-api.vercel.app/";
    const { data } = await useFetch(path, {
      baseURL,
      method: 'GET',
      cache: 'default',
    });
    return data.value;
  } catch (err) {
    console.log(err);
  }
};

import { error } from "console";

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
    { ...options, cache: options?.cache || "no-store", }
  );

  if (!response.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
    }catch (e) {
        console.log(e);
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

export function getImageURL(path: string){
    if (path.startsWith("http")) {
        return path;
    }
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}
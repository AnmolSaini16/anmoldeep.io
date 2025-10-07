import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions,
) =>
  new Date(date).toLocaleString(
    "en-US",
    options ?? { month: "2-digit", year: "2-digit" },
  );

export const fetchFromDevToAPI = async <T>(
  url: string,
): Promise<T | undefined> => {
  try {
    const headers = new Headers({ "api-key": process.env.DEV_TO_API_KEY! });
    const response = await fetch(url, { headers, next: { revalidate: 1800 } });

    if (!response.ok) {
      console.error(
        `HTTP Response Code: ${response.status}, Message: ${response.statusText}`,
      );
      return undefined;
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return undefined;
  }
};

export const sanitizeHtml = (html: string) => {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

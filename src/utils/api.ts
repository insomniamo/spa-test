import { API_KEY, BASE_URL } from "./config";

export interface NewsItem {
  abstract: string;
  web_url: string;
  multimedia: { url: string }[];
  pub_date: string;
  source: string;
}

/**
 * Получает новости за указанный год и месяц.
 * @param year - Год
 * @param month - Месяц (1-12)
 * @returns Массив статей или ошибка
 */
export async function fetchNews(year: number, month: number): Promise<NewsItem[]> {
  try {
    const response = await fetch(`${BASE_URL}/${year}/${month}.json?api-key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.response || !data.response.docs) {
      throw new Error('Некорректный формат данных от API');
    }

    return data.response.docs;
  } catch (error) {
    console.error('Ошибка загрузки новостей:', error);
    throw error;
  }
}

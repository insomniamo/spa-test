import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews, NewsItem } from '@utils/api';

// Определяем интерфейс для обработанных новостей (ProcessedNewsItem)
interface ProcessedNewsItem {
  abstract: string;
  web_url: string;
  image: string | null; // URL изображения или `null`, если изображения нет
  pub_date: string;
  source: string;
}

// Определяем состояние для Redux-хранилища
interface NewsState {
  news: ProcessedNewsItem[];
  lastUpdated: string | null;
  loading: boolean;
  error: string | null;
}

// Начальное состояние хранилища
const initialState: NewsState = {
  news: [],
  lastUpdated: null,
  loading: false,
  error: null,
};

// Тип для изображений в `multimedia`
interface MultimediaItem {
  url: string;
  subtype?: string; // Указываем, что `subtype` может отсутствовать
}

// Асинхронное получение новостей
export const fetchNewsThunk = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const now = new Date();
      // Загружаем новости за текущий месяц и год
      return await fetchNews(now.getFullYear(), now.getMonth() + 1);
    } catch (error) {
      // В случае ошибки передаем ее в `rejectWithValue`
      return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }
);

// Создаем срез состояния для управления новостями
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Когда начинается загрузка новостей
      .addCase(fetchNewsThunk.pending, (state) => {
        state.loading = true;
        state.error = null; // Сбрасываем предыдущие ошибки
      })
      // Когда загрузка новостей успешно завершена
      .addCase(fetchNewsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        // Фильтруем, чтобы не добавлять уже существующие новости (по `web_url`)
        const newArticles = action.payload
          .filter((article: NewsItem) => !state.news.some((n) => n.web_url === article.web_url))
          .map((article) => ({
            abstract: article.abstract,
            web_url: article.web_url,
            // Ищем изображение с подтипом "xlarge"
            image: (() => {
              if (Array.isArray(article.multimedia)) {
                const img = article.multimedia.find((img: MultimediaItem) => img.subtype === 'xlarge');
                return img ? `https://static01.nyt.com/${img.url}` : null;
              }
              return null;
            })(),
            pub_date: article.pub_date,
            source: article.source,
          }))
          // Сортируем статьи по дате публикации (от новых к старым)
          .sort((a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime());

        // Добавляем новые статьи в начало списка
        state.news = [...newArticles, ...state.news];
        // Обновляем время последнего обновления
        state.lastUpdated = new Date().toISOString();
      })
      // Когда загрузка новостей завершена с ошибкой
      .addCase(fetchNewsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Сохраняем сообщение ошибки
      });
  },
});

export default newsSlice.reducer;

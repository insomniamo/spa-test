import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

/**
 * Форматирует дату для отображения в карточке.
 * @param date Строка даты
 * @returns Формат "MMM D, YYYY, HH.mm A"
 */
export function formatDate(date: string): string {
  const parsedDate =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{4}$/.test(date)
      ? dayjs.utc(date) // ISO 8601
      : dayjs(date, "DD.MM.YYYY, HH:mm:ss").utc(); // Европейский формат

  return parsedDate.isValid()
    ? parsedDate.format("MMM D, YYYY, HH.mm A")
    : "Invalid Date";
}

/**
 * Форматирует дату для группировки новостей.
 * @param date Строка даты
 * @returns Формат "DD.MM.YYYY"
 */
export function formatDateForGrouping(date: string): string {
  const parsedDate = dayjs.utc(date);
  return parsedDate.isValid() ? parsedDate.format("DD.MM.YYYY") : "Invalid Date";
}

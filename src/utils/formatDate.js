export const formatDate = (isoDate) => {
  if (!isoDate) return 'Дата не указана';
  const date = new Date(isoDate);
  const options = {
    day: 'numeric',
    month: 'long',
  };
  return date.toLocaleString('ru-RU', options);
};

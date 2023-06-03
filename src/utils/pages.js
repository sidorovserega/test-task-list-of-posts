//подсчет количества страниц
export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}
//создание массива с номерами выводимых страниц
export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
  }
  return result;
}

//посты на конкретной странице
export const selectPostsFromPage = (items, page, limit) => {
  return items.filter((_, index) => index >= (page-1)*limit && index <= (page-1)*limit+limit-1);
}
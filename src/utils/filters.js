//функция сортировки в соответветствии с выбранным порядком сортировки
const sortPostToTitle = (a, b, sortBy) => {
  if (sortBy === 'start') {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }
  if (sortBy === 'end') {
    return -a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }
  return 0;
};

//посты после сортировки и фильтрации
export const sortAndSearchItems = (items, sortBy, searchTitlePost) => {
  return items
          .filter(item => searchTitlePost !== "" ? item.title.toLowerCase().includes(searchTitlePost.toLowerCase()) : item)
          .sort((a, b) => sortPostToTitle(a, b, sortBy));
};




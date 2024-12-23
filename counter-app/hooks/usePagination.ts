import { useState } from 'react';

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return { page, nextPage, prevPage };
};

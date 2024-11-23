import React from 'react';
import ClientList from './ClientList';
import ThemeWrapper from './ThemeWrapper';

const fetchInitialData = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10'
  );
  return res.json();
};

const InfiniteScrollPage = async () => {
  const initialData = await fetchInitialData();

  return (
    <ThemeWrapper>
      <h1 className="text-center text-2xl font-bold mb-5">
        Infinite Scroll Example
      </h1>
      <ClientList initialData={initialData} />
    </ThemeWrapper>
  );
};

export default InfiniteScrollPage;

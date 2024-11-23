'use client';

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ClientListProps {
  initialData: Post[];
}

const ClientList: React.FC<ClientListProps> = ({ initialData }) => {
  const [items, setItems] = useState<Post[]>(initialData);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const data: Post[] = await res.json();

    setItems((prevItems) => [...prevItems, ...data]);
    setIsLoading(false);
    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={items.length < 100}
      loader={
        isLoading && (
          <div className="flex justify-center my-4">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      }
      endMessage={
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No more items to show.
        </p>
      }
      scrollThreshold={0.95}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-background bg-gray-50 dark:bg-gray-800 p-4 rounded shadow mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{item.body}</p>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default ClientList;

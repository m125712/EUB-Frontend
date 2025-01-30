'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import PageHeader from '@/components/page-header';
import Content from './_components/content';

import data from '../_const/offices-data';

const Page = () => {
  const pathName = usePathname();
  const title = data.find(
    (item) => `/authorities/offices/${item.category}` === pathName
  )?.title;

  return (
    <>
      <PageHeader title={title || 'Office Details'} />
      <Content />
    </>
  );
};

export default Page;

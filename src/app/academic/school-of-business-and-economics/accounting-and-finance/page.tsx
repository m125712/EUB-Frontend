import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

const Page = () => {
  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title='Accounting and Finance'
      />

      <div className='py-10 container'>
        <Content />
      </div>
    </>
  );
};

export default Page;

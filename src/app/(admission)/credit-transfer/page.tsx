import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

const Page = () => {
  return (
    <>
      <PageHeader title='Credit Transfer' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;

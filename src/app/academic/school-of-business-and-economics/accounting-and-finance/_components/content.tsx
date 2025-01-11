'use client';

import { accordions } from './accordions';
import ContentLayout from '@/app/academic/_components/content-layout';

const Content = () => {
  return (
    <ContentLayout
      accordions={accordions}
      bannerImage={{
        src: '/images/accounting-and-finance.jpg',
        alt: 'Accounting and Finance',
      }}
    />
  );
};

export default Content;

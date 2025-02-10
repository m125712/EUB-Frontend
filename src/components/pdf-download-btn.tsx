import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const PdfDownloadButton: React.FC<{ pdf: string }> = ({ pdf }) => {
  return pdf ? (
    <Link target='_blank' href={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + pdf}>
      <Button variant={'outline'} size={'icon'} className='w-full'>
        <Download />
      </Button>
    </Link>
  ) : (
    'Not available'
  );
};

export default PdfDownloadButton;

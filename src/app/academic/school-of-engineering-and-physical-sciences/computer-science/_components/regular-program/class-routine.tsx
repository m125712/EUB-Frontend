import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const pdfs = [
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Class Routine',
  },
];

const ClassRoutine = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Update Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pdfs.map((pdf, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>
              <Link
                className='underline text-primary'
                target='_blank'
                href={pdf.pdf}
              >
                {pdf.title}
              </Link>
            </TableCell>
            <TableCell>{pdf.updatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassRoutine;

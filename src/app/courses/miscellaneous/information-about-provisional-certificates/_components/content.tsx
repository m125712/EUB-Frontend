'use client';

import React from 'react';
import Link from 'next/link';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { IDataTable } from '@/types';
import { formatDate } from '@/lib/utils';

const columns: SystemTableColumn<IDataTable>[] = [
  {
    accessorKey: 'description',
    cell: (value, row) => (
      <Link className='underline text-primary font-medium' href={row.file}>
        {value}
      </Link>
    ),
  },
  {
    accessorKey: 'updated_at',
    cell: (value, row) => formatDate(value || row.created_at),
  },
];

const Content: React.FC<{ data: IDataTable[] }> = ({ data }) => {
  return <SystemTable data={data} columns={columns} />;
};

export default Content;

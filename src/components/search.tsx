'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Search: React.FC<React.ComponentProps<'input'>> = ({
  placeholder = 'Search here...',
  className,
  ...props
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Input
      type='search'
      placeholder={placeholder}
      className={cn('w-[400px]', className)}
      defaultValue={searchParams.get('q')?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      {...props}
    />
  );
};

export default Search;

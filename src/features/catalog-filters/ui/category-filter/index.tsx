'use client';

import { useState } from 'react';

import MultiSelect from '@/shared/ui/multi-select';

import type { CategoriesFilterProps } from '../../types/catalog-filters.types';

import css from './index.module.css';

export default function CategoryFilter({
  categories,
  className,
}: CategoriesFilterProps) {
  const [selected, setSelected] = useState<string[]>([]);

  if (!categories.length) return null;

  return (
    <div className={`${css.root} ${className}`.trim()}>
      <p className={css.title}>Категория</p>
      <MultiSelect
        options={categories.map((category) => ({
          value: category.slug,
          label: category.title,
        }))}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
}

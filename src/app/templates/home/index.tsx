import { Suspense } from 'react';
import { User } from './User';

export function Page() {
  return (
    <Suspense fallback={<div>Users Loading...</div>}>
      <User />
    </Suspense>
  );
}

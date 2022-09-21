import React, { FC, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import './JobDetail.scss';


export const JobDetail: FC = () => {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      <div>Job detail page</div>
      <div>Counter: {count}</div>
    </>
  );
};

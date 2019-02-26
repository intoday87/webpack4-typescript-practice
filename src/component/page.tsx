import * as React from 'react'
import * as Loadable from 'react-loadable'

const Loading = () => {
  return <div>로딩중...</div>;
};

export const A = Loadable({
  loader: () => import(/* webpackChunkName: "a" */'./a'),
  loading: Loading,
  delay: 1000,
});
export const B = Loadable({
  loader: () => import(/* webpackChunkName: "b" */'./b'),
  loading: Loading
});

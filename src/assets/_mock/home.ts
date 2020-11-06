import Mock from 'mockjs';
import { buildResponse } from './response';

const t = Mock.mock(
  'test/mock',
  buildResponse([
    { name: 'XXXX1', code: 'P00003' },
    { name: 'XXXX2', code: 'P00028' },
    { name: 'XXXX3', code: 'P00002' },
    { name: 'XXXX4', code: 'P00003' },
  ])
);

console.log(t);
// 拦截请求，返回假数据
export const data = t;

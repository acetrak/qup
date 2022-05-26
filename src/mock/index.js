import Mock from 'mockjs';

import s1 from './data/schema1';
import notice from './data/notice'
Mock.setup({
  timeout: '300-600',
});

Mock.mock(`/form/list`, 'get', () => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(Mock.mock({
      id:i,
      name: `问卷${i+1}`,
      startTime: '2022-03-24',
      endTime: '2022-04-27',
      description: `请认真填写问卷`,
      schema: JSON.stringify(s1),
    }));
  }
  return {
    total: 5,
    pageSize: 10,
    data: list,
  };
});

Mock.mock(`/notice/list`, 'get', () => {
  return {
    data: notice,
  };
});

Mock.mock(`/user/info`, 'get', () => {
  return {
    data: {
      name:'Questionnaire',
      profile:'Life Is Life',
      email:'questionnaire@gmail.com',
      country:'英国',
      street:'伦敦贝克街221号',
      phone:'02022903',
      station:'前端开发',
      position:'Questionnaire－某某某事业群－某某平台部－某某技术部－CEO',
      tags:['很有想法的','专注设计','尝试新事物','热爱音乐',]
    }
  };
});


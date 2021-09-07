#### 环境说明：
该组件是原生js编写，支持`typescript`; 在浏览器环境中使用，不区分 `vue`, `react`等框架环境
#### 详细说明:
[https://www.cnblogs.com/yalong/p/15214644.html](https://www.cnblogs.com/yalong/p/15214644.html)
#### 安装
`npm i table-to-csv -S`
#### 使用示例
```
import TableToCsv from 'table-to-csv';
const initColumns = [
  {
    dataIndex: "Index",
    key: "Index",
    title: "序号",
  },
  {
    dataIndex: "userid",
    key: "userid",
    title: "用户Uid",
  },
  {
    dataIndex: "score",
    key: "score",
    title: "收益点",
  }
 ]
 const initList = [
    {
      id: '32',
      Index: 1,
      userid: '11',
      score: '10'
    },
    {
      id: '42'
      Index: 2,
      userid: '22',
      score: '20'
    },
    {
      id: '89',
      Index: 3,
      userid: '33',
      score: '30'
    }
  ];

 TableToCsv(initColumns, initList, '统计表格')
```
#### 说明：
- `initColumns` 就是 table 列的数据
- `initList` 就是 table 的展示数据
- 第三个参数就是下载文件的名字
- `initColumns` 里面`key` 和 `dataIndex` 必须有一个
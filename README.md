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
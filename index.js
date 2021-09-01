/**
 * 导出支持空数据， 支持空格
 * @param { Array } initColumns - 列的数据
 * @param { Array } initList - 表格的数据
 * @param { string } name - 下载文件的名字(不用带.csv)
 */
const TableToCsv = (initColumns, initList, name = '表格') => {
  let str = '';
  let arr = [];
  let keyArr = [];
  initColumns.forEach((item) => {
    arr.push(item['title']);
    keyArr.push(item['key'] || item['dataIndex']);
  });
  str = arr.join(',') + '\n';
  for (let i = 0; i < initList.length; i++) {
    let subArr = keyArr.map((item) => {
      let temp = initList[i][item] === undefined ? '' : initList[i][item] + ''; // 转成字符串
      // 下面解决中文乱码问题 会把空格转成 #, 这里把空格转成 \xa0 就不会有这个问题了
      return temp ? temp.replaceAll(/\s+/g, '\xa0') : '';
    });
    let subStr = subArr.join('\t,');
    subStr += '\n';
    str += subStr;
  }
  // \ufeff 解决中文乱码问题
  var blob = new Blob(['\ufeff', str], { type: 'text/plain' });
  let object_url = window.URL.createObjectURL(blob);
  let link = document.createElement('a');
  link.href = object_url;
  link.download = `${name}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default TableToCsv;
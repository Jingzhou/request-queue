# jz-request-queue
异步请求队列

#安装
```
npm i jz-request-queue
yarn add jz-request-queue
```

#使用
```
max：异步请求并发的最大值，默认值为6
fnList：异步请求函数队列，默认值空数组[]，当fnList为非空时，马上执行异步请求
interface parameter {
    max?: number;
    fnList?: fnType[];
}
// 初始化实例
const rq = new RequestQueue(parameter);

// 推送异步请求函数队列，fnList为异步函数请求队列，run为是否马上执行
pushReqList(fnList: fnType[], run?: boolean): void;
rq.pushReqList(fnList, true)

// 手动通知执行异步请求队列的函数
runReqList(): Promise<void>;
rq.pushReqList(fnList, true)
```


type fnType = () => any;
interface parameter {
  max?: number;
  fnList?: fnType[];
}

class RequestQueue {
  static reqList: fnType[] = [];
  // static status = false;
  static currentLength = 0;
  public maxLength = 6;
  // 初始化最多请求队列数，请求队列
  constructor({ max = 6, fnList = [] }: parameter = {}) {
    this.maxLength = max;
    if (fnList.length) {
      RequestQueue.reqList.push(...fnList);
    }
  }
  // 执行请求队列
  async runReqList() {
    if (
      RequestQueue.reqList.length &&
      RequestQueue.currentLength < this.maxLength
    ) {
      const reqFn: any = RequestQueue.reqList.shift();
      RequestQueue.currentLength++; // 增加当前执行数
      this.runReqList(); // 继续执行
      try {
        await reqFn();
        RequestQueue.currentLength--; // 减少当前执行数
        this.runReqList();
      } catch (e) {
        RequestQueue.currentLength--; // 减少当前执行数
        this.runReqList();
      }
    }
  }
  // 推送请求函数进入队列
  pushReqList(fnList: fnType[], run = false) {
    RequestQueue.reqList.push(...fnList);
    // 推送后是否马上执行
    if (run) {
      this.runReqList();
    }
  }
}

export default RequestQueue;

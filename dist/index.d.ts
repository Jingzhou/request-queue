declare type fnType = () => any;
interface parameter {
    max?: number;
    fnList?: fnType[];
}
declare class RequestQueue {
    static reqList: fnType[];
    static currentLength: number;
    maxLength: number;
    constructor({ max, fnList }?: parameter);
    runReqList(): Promise<void>;
    pushReqList(fnList: fnType[], run?: boolean): void;
}
export default RequestQueue;

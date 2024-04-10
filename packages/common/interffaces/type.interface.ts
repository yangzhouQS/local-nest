/**
 * 接口 Type 继承 Function ，其实 Type<T> 可以说是 class 的类型。
 */
export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

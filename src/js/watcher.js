import Dep from './dep';

class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    this.value = this.get(); //先取一下老值，将watcher添加到dep中
  }

  getValue(vm, expr) {
    expr = expr.split('.');
    return expr.reduce((prev, next) => {
      return prev[next]
    }, vm.$data);
  }

  get() {
    Dep.target = this;
    console.log('ejjj', this.expr.indexOf('{{') > -1);
    let value = this.getValue(this.vm, this.expr);
    //重置订阅者
    Dep.target = null;
    return value;
  }

  /**
   * 触发绑定的回调
   */
  update() {
    let newValue = this.getValue(this.vm, this.expr);
    if(newValue !== this.value) {
      this.cb && this.cb(newValue);
    }
  }
}

export default Watcher

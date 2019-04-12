import Dep from './dep';

class Observer {
  constructor(data) {
    this.observe(data);
  }

  /**
   * 劫持对象属性
   */
  observe(data) {
    if(!data || typeof data !== 'object') {
      return
    }

    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
      //深度递归劫持
      this.observe(data[key]);
    })
  }

  defineReactive(data, key, value) {
    let _this = this;
    this.dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if(Dep.target) {
          _this.dep.appendSub(Dep.target);
          Dep.target = null;
        }
        return value;
      },
      set(val) {
        _this.observe(val); //如果新值是对象，继续深度劫持
        console.log('value changed', val);
        value = val;
        _this.dep.notify();
      }
    })
  }
}

export default Observer;

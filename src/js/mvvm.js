import Complier from './complier';
import Observer from './observer';

class Mvvm {
  constructor(ops) {
    this.$el = ops.el;
    this.$data = ops.data;
    new Observer(this.$data);
    new Complier(this.$el, this);
  }
}

export default Mvvm;

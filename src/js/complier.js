//Dom解析类
import Watcher from './watcher';

class Compiler {
  constructor(el, vm) {

    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if(this.el) {
      let fragment = this.node2Fragment(this.el); //将真实Dom移入内存中，即转为fragment
      //解析模版 ，编译
      this.compile(fragment);
      //将编译好的fragment  append到this.el
      this.el.appendChild(fragment);
    }
  }

  //判断是否为元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }

  //将el的内容全部放到内存中，减少真实Dom访问，优化性能
  node2Fragment(node) {
    let fragment = document.createDocumentFragment();
    let firstChild;
    while(firstChild = node.firstChild) {
      fragment.append(firstChild);
    }
    return fragment;
  }

  //判断attr是否为指令
  isDirective(attr) {
    return attr.includes('v-');
  }

  //编译模版
  compile(fragment) {
    let childNodes = fragment.childNodes;
    console.log(Array.from(childNodes))
    Array.from(childNodes).forEach(node => { //Array.from方法，根据类数组对象创建新数组
      if(this.isElementNode(node)) {
        //编译节点
        this.compileElement(node);
        //递归调用this.complie,编译子节点
        this.compile(node);
      }else {
        //编译文本节点
        this.compileText(node)
      }
    })
  }

  //编译节点元素
  compileElement(node) {
    let attrs = node.attributes;
    Array.from(attrs).forEach(attr => {
      let attrName = attr.name;
      if(this.isDirective(attrName)) {
        let expr = attr.value; //指令值
        let [,type] = attrName.split('-');
        compileUtil[type](node, this.vm, expr);
      }
    })
  }

  //编译文本节点
  compileText(node) {
    let expr = node.textContent;
    let reg = /\{\{([^}]+)\}\}/g
    if(reg.test(expr)) {
      compileUtil['text'](node, this.vm, expr)
    }

  }
}

const compileUtil = {
  text(node, vm, expr) { //文本
    console.log('text', expr)
    let updater = this.updater['textUpdate'];

    new Watcher(vm, expr.replace(/^\{\{|\}\}$/g, ''), (val) => {
      updater && updater(node, val);
    })
    updater && updater(node, getTextValue(vm, expr));
  },
  model(node, vm, expr) { //输入框
    let updater = this.updater['modelUpdate'];
    new Watcher(vm, expr, (val) => {
      updater && updater(node, val);
    })
    node.addEventListener('input', (e) => {
      let newValue = e.target.value;
      this.setVal(vm, expr, newValue);
    })
    updater && updater(node, getValue(vm, expr));
  },
  updater: {
    textUpdate(node, value) {
      node.textContent = value;
    },
    modelUpdate(node, value) {
      node.value = value
    }
  },
  setVal(vm, expr, newValue) {
    console.log(expr);
    expr = expr.split('.');
    expr.reduce((prev, next) => {
      if(typeof prev[next] === 'object') {
        return prev[next];
      }
      prev[next] = newValue;
      return prev;
    }, vm.$data);
  }
}

// 绑定key上对应的值，从vm.$data上获取
const getValue = (vm, expr) => {
  expr = expr.split('.');
  return expr.reduce((prev, next) => {
    return prev[next];
  }, vm.$data);
}

const getTextValue = (vm, expr) => {
  //replace的第二个参数是函数的情况下，该函数在匹配成功的情况下接收一个数组
  return expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
    return getValue(vm, args[1]);
  })
}

export default Compiler

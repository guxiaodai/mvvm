/**
 * 消息订阅器
 */
class Dep {
  constructor() {
    this.subs = []
  }

  appendSub(watcher) {
    this.subs.push(watcher)
  }

  notify(val) {
    this.subs.forEach(watcher => {
      watcher.update(val)
    })
  }

  clearSubs() {
    this.subs.length = 0;
  }
}

export default Dep;

// please complete the implementation
class EventEmitter {
  constructor() {
    this.subscription = {};
  }
  subscribe(eventName, callback) {
    if (eventName in this.subscription) {
      this.subscription[eventName].push(callback);
    } else {
      this.subscription[eventName] = [callback];
    }
    return {
      release: () => {
        let cbIndex = this.subscription[eventName].indexOf(callback);
        this.subscription[eventName].splice(cbIndex, 1);
      },
    };
  }

  emit(eventName, ...args) {
    for (let cb of this.subscription[eventName]) {
      if (cb !== null) {
        cb.apply(null, args);
      }
    }
  }
}

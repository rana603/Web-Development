class Queue {
    constructor() {
      this.queue = [];
      this.size = 0;
    }
    enQueue(value) {
      this.queue.push(value);
      this.size += 1;
    }
    deQueue() {
      if (this.size == 0) {
        console.log("Queue is Empty");
      } else {
        var x = this.queue[0];
        this.size -= 1;
        return this.queue.shift();
      }
    }
    enQueueThree(valueA, valueB, valueC) {
      if (valueA) {
        this.queue.push(valueA);
        this.size += 1;
      }
      if (valueB) {
        this.queue.push(valueB);
        this.size += 1;
      }
      if (valueC) {
        this.queue.push(valueC);
        this.size += 1;
      }
    }
    deQueueThree() {
      if (this.size == 0) {
        console.log("Queue Empty");
      } else {
        var cnt = 0;
        while (this.size > 0 && cnt < 3) {
          this.queue.shift();
          cnt += 1;
          this.size -= 1;
        }
      }
    }
  }
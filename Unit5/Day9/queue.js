class Queue {
    constructor() {
      this.queue = [];
      this.size = 0;
    }
    enQueue(val) {
      this.queue.push(val);
      this.size += 1;
    }
    deQueue() {
      if (this.size == 0) {
        console.log("Error! queue is Empty");
      } else {
        var x = this.queue[0];
        this.size -= 1;
        return this.queue.shift();
      }
    }
    enQueueThree(val1, val2, val3) {
      if (val1) {
        this.queue.push(val1);
        this.size += 1;
      }
      if (val2) {
        this.queue.push(val2);
        this.size += 1;
      }
      if (val3) {
        this.queue.push(val3);
        this.size += 1;
      }
    }
    deQueueThree() {
      if (this.size == 0) {
        console.log("Error Empty Queue");
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
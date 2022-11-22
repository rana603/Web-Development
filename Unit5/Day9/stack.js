class Stack {
    constructor() {
      this.array = [];
      this.size = 0;
    }
    pop() {
      if (this.size > 0) {
        this.array.pop();
        this.size -= 1;
      } else {
        console.log("Array is Empty");
      }
    }
    push(val) {
      this.array.push(val);
      this.size += 1;
    }
    
    top() {
      return this.array[this.size - 1];
    }
    print() {
      console.log(this.array);
    }
    printReverse() {
      var revrseArr = [];
      for (var i = this.size - 1; i >= 0; i--) {
        revrseArr.push(this.array[i]);
      }
      console.log(revrseArr);
    }
    length() {
      return this.size;
    }
  }
  
  var array = new Stack();
  array.push(4);
  array.push(3);
  array.push(2);
  array.print();
  array.printReverse();
  console.log(array.length());
  array.pop();
  console.log(array.length());
  array.print();
class CrazyQueue {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
        // [last] = [first] - first[lastindex]; [first] = [1,2,3] --> [last] = [1,2]
        this.last.push(this.first.pop());
      }
      // Put value to [last] --> value = last[lastindex]; value = 5 --> [last] = [1,2,5]
      this.last.push(value);
      console.log(this);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
    }
    peek() {
      if (this.last.length > 0) {
        // [last][firstindex] --> queue 1st element.
        return this.last[0];
      }
      // [first][lastindex] --> queue 1st element.
      return this.first[this.first.length - 1];
    }
  }
  
  const myQueue = new CrazyQueue();
//   myQueue.peek();
  myQueue.enqueue('Joy');
//   myQueue.enqueue('Matt');
//   myQueue.enqueue('Pavel');
  myQueue.peek();
//   myQueue.dequeue();
//   myQueue.dequeue();
//   myQueue.dequeue();
//   myQueue.peek();
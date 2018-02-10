class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToList(value) {
    if(!this.head) {
      var node = {value: value, next: null};
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      var node = {value: value, next: null};
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  contains(value) {
    var current = this.head;
    if(current.value === value) {
      return true;
    }
    while(current.next) {
      current = current.next;
      if(current.value === value) {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    var current = this.head;
    var previous = null;
    if(current.value === value) {
      this.head = current.next;
      this.length--;
      return current;
    }
    while(current.next) {
      previous = current;
      current = current.next;
      if(current.value === value) {
        previous.next = current.next;
        if(current === this.tail) {
          this.tail = previous;
        }
        this.length--;
        return current;
      }
    }
    return undefined;
  }

  // insertNthNode(n, value) {
  //   if(!this.head) {
  //     var node = {value: value, next: null};
  //     this.head = node;
  //     this.tail = node;
  //     this.length++;
  //   } else {
  //     var current = this.head;
  //     var previous = null;
  //     var i=1;
  //     while(current.next) {
  //       previous = current;
  //       current = current.next;
  //       if(i === n) {
  //         var nthNext = previous.next;
  //         var node = {value: value, next: nthNext};
  //         previous.next = node;
  //         this.length++
  //       }
  //       i++;
  //     }
  //   }
  // }

  insertNthNode(n, value) {
    if(n > 0 && n<=this.length+1) {
      var current = this.head;
      var previous = null;
      var i = 1;
      // CASE 01 - Consult Docs LinkedLink.jpg in algo-flow folder
      if(n===1) {
        var node = {value: value, next: current};
        this.head = node;
        this.tail = node;
        this.length++;
      }
      // CASE 02 - Consult Docs LinkedLink.jpg in algo-flow folder
      else if(n===this.length+1) {
        current = this.tail;
        var node = {value: value, next: null};
        this.tail = node;
        this.length++;
        current.next = node;
      }
      // CASE 03 - Consult Docs LinkedLink.jpg in algo-flow folder
      else while(current.next) {
        previous = current;
        current = current.next;
        i++;
        if(n === i) {
          var node = {value: value, next: current};
          previous.next = node;
          this.length++;
        }
      }
    } else {
      return (this.length, `${n} value is invalid, please consider changing accordingly.`);
    }
  }

  getNthNode(n) {
    var current = this.head;
    var i=1;
    while(current) {
      if(i === n) {
        return current.value
      }
      current = current.next;
      i++;
    }
  }
}
// Linked List
// ===========

// 5 6 7 8

// arr1 = [5, 6, 7, 8] 
// arr1 has a memory location , 0 it will be after x number of bytes, after another x number of bytes we will have position 1 whiher we store 6

// obj = {five:5 ,six:6, seven:7, eight:8} -- hashmap in the form array.

// ===========
// linked list

// 5, memory location of next item, head = {value: 5, next:location} 
// 6, memory location of next item = {}
// 7,  memory locat[ion of next item   = {}                  
// 8, null, tail = {}
//=======================


// ll = {length:4, head: 0x5555, tail: 0x8888}

// {value: 5, next:0x6666}  {value:6, next: 0x7777} {value:7, next: 0x8888} {value:8, next: null}
//   0x5555                       0x6666              0x7777                  0x8888
// ==================================
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToList(value) {
    if(!this.head) {
      var node = {value: value, next: null}
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      var node = {value: value, next: null}
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

  insertNthNode(n, value){
    // INSERT HERE
  }

  getNthNode(n) {
    // INSERT HERE
  }

}

var obj = new LinkedList();
obj.addToList(5)
console.log ( obj.remove(6) )
obj.addToList(6)
obj.addToList(7)
obj.addToList(8)
console.log ( obj.remove(6) )
console.log ( obj.remove(8) )
console.log(obj);



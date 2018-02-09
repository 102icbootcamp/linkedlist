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
    //check the valid Nthnode Val
    if (n > 0 && n <= this.length+1){


                var current = this.head;
                var previous = null;
                var counter = 1;  
                
                // if the NthNode val is 1 mean we have to insert at the start
                if (n === 1){
                  var node = {value:value, next:current}
                  this.head = node;
                  this.length++;
                }
                
                // if the NthNode val is (length+1) mean we have to insert at the end
                if (n === this.length+1){
                  current = this.tail;
                  var node = {value:value, next:null}
                  this.tail = node;
                  this.length++;
                  current.next = node;
                }

                //if we have to insert at the middle or b/w 1 and 2 ,
                //we dont know which node is on 1 and on 2 therefore
                //we iterate and change the current and increment counter
                //until it equals to the user's NthNode val
                
                while(current.next) {
                    previous = current;
                    current = current.next;
                    counter++;
                    if (n === counter){

                      var node = {value:value, next:current};
                      previous.next = node;
                      this.length++;

                    }
                }
    }
    //if user enters invalid Nthnode val e.g n = -4 
    //or if value is out of range e.g length = 4 and 
    //user enters 9 we can just add upto length+1
    else{
    return 'NthNode value is not valid/out of range';
    }


  }

  getNthNode(n) {
    // INSERT HERE
    var current = this.head;
    var previous = null;
    var counter = 1; 

    //when we have to return the first node
    if (n === 1){
      return current;
    }
    
    //when we need to return the node that is somewhere in the  middle  
    while(current.next){

        previous = current;
        current = current.next;
        counter++;

        if (n === counter){

          return current;
        }

    }

    //when we have to return the last node
    if(n === this.length){
      return this.tail;
    }

    //when user enters invalid NthNode value
    return 'NthNode value is not valid/out of range';

  }

}

var obj = new LinkedList();
obj.addToList(5)
// console.log ( obj.remove(6) )
obj.addToList(6)
obj.addToList(7)
obj.addToList(8)
// console.log ( obj.remove(6) )
// console.log ( obj.remove(8) )
console.log(obj);
obj.insertNthNode(1,3);
console.log(obj);


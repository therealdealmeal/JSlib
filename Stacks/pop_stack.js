function Stack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    }

    this.Pop = function () {
    //If there are no items, returns null. (avoid error)
    if (top === null) {
        return null;
    }
    else {
        //assigns top to a temp variable
        var out = top;

        //makes the TOP as the next in line
        top = top.next;

        //there still are items on the stack
        if (count > 0) {
            count--;
        }

        //returns the value that was removed
        return out.data;
    }
  }
}

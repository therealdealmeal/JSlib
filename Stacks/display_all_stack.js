function Stack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    }

    this.DisplayAll = function(){

    if (top === null) {
        return null;
    }
    else {
        //instantiate an array
        var arr = new Array();
        //creates a node to move through the stack
        var current = top;

        //moves through the stack until it reaches the bottom item
        for (var i = 0; i < count; i++) {
            //assigns the data to the array
            arr[i] = current.data;
            //advances one step
            current = current.next;
        }
        //returns the array
        return arr;
    }
  }
}

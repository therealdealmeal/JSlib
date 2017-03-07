function Stack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    }

    this.Push = function (data) {
    //Creates a node containing the data and a reference to the next item, if any.
    var node = {
        data: data,
        next: null
    };

    //links the current node to the top node. If the stack is empty it will have null as reference
    node.next = top;

    //makes the current node as the top node.
    top = node;

    //Increases the count
    count++;
  }
}

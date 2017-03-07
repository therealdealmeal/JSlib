function Stack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    }

    this.Peek = function(){
	//If there are no items, returns null. (avoid error)
    if(top === null){
		return null;
  	}
  	else{
  		return top.data;
  	}
  }
}

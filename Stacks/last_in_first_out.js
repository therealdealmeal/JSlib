function ourStack() {
    var stack = new Array();
    stack.push('Audi');
    stack.push('Skoda');
    stack.push('Opel');
    stack.push('VW');


    console.log(stack.toString());
    stack.pop();
    console.log(stack.toString());

    stack.push('Mercedes');
    console.log(stack.toString()); 
}

ourStack();

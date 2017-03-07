function ourQueue() {
    var queue = new Array();
    queue.push('Audi');
    queue.push('Skoda');
    queue.push('Opel');
    queue.push('VW');

    // in this case VW is at the top of the stack
    // (added as the last)

    console.log(queue.toString());
    queue.pop(); // get VW
    console.log(queue.toString()); // no VW anymore

    // add new element
    queue.push('Mercedes');
    console.log(queue.toString()); // Mercedes on the top
}

ourQueue();

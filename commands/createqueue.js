module.exports = {
    name: 'createqueue',
    description: "this creates a new queue with given name",

    execute(message, args, allQueues) {
        const name = message.content.slice(13).split(/ +/);
        const nameLower = name.shift().toLowerCase();
        bool = true;
        for (i = 0; i < allQueues.length; i++) {
            if (allQueues[i].className == nameLower) {
                bool = false;
                break;
            }
        }
        if (bool) {
             var queue = {
                 className: nameLower,
                 content: []
             }
             allQueues.push(queue);
             queue.content.push(message.author);
             message.channel.send('The queue has been made, and you have been added!');
             } else {
                  message.channel.send('That queue already exists.');
             }
    }
}
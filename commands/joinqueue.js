module.exports = {
    name: 'joinqueue',
    description: "join an existing queue",
    execute(message, args, allQueues) {
        const name = message.content.slice(11).split(/ +/);
        const nameLower = name.shift().toLowerCase();
        bool = true;
        for (i = 0; i < allQueues.length; i++) {
            if (allQueues[i].className == nameLower && !allQueues[i].content.includes(message.author)) {
                allQueues[i].content.push(message.author);
                bool = false;
                message.channel.send('You have been added to the queue!');
                break;
            } else if (allQueues[i].className == nameLower && allQueues[i].content.includes(message.author)) {
                bool = false;
                message.channel.send('You are already in this queue.');
                break;
            }
        }
        if (bool) {
            message.channel.send('This queue does not exist.');
        }
    }
}
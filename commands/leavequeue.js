module.exports = {
    name: 'leavequeue',
    description: "leave an existing queue",
    execute(message, args, allQueues) {
        const name = message.content.slice(12).split(/ +/);
        const nameLower = name.shift().toLowerCase();
        bool = true;
        for (i = 0; i < allQueues.length; i++) {
            if (allQueues[i].className == nameLower && allQueues[i].content.includes(message.author)) {
                const index = allQueues[i].content.indexOf(message.author);
                allQueues[i].content.splice(index, 1);
                bool = false;
                message.channel.send('You have left the queue.')
                if (allQueues[i].content.length < 1) {
                    allQueues.splice(i, 1);
                    message.channel.send('The queue was empty and has been deleted.')
                }
                break;
            } else if (allQueues[i].className == nameLower && !allQueues[i].content.includes(message.author)) {
                bool = false;
                message.channel.send('You are already not in this queue.');
                break;
            }
        }
        if (bool) {
            message.channel.send('This queue does not exist.');
        }
    }
}
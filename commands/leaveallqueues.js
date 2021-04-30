module.exports = {
    name: 'leaveallqueues',
    description: "leaves all queues",
    execute(message, args, allQueues) {
        bool = false;
        bool2 = false;
        for (i = 0; i < allQueues.length; i++) {
            if (allQueues[i].content.includes(message.author)) {
                bool = true;
                const index = allQueues[i].content.indexOf(message.author);
                allQueues[i].content.splice(index, 1);
            }
            if (allQueues[i].content.length < 1) {
                allQueues.splice(i, 1);
                bool2 = true;
            }
        }
        if (bool) {
            message.channel.send('You are no longer in any queues!');
        } else {
            message.channel.send('You are already not in any queues.')
        }
        if (bool2) {
            message.channel.send('One or more queues are empty and have been removed.')
        }
    }
}
module.exports = {
    name: 'listqueues',
    description: "lists all ongoing queues",
    execute(message, args, allQueues) {
        if (allQueues.length >= 1) {
            var queueList = [];
            for (i = 0; i < allQueues.length; i++) {
                queueList.push(allQueues[i].className)
            }
            var qstring = queueList.join(", ");
            if (queueList.length > 1) {
                message.channel.send(`The ongoing queues are: ${qstring}`);
            } else {
                message.channel.send(`The only ongoing queue is: ${qstring}`)
            }
        } else {
            message.channel.send('There are no ungoing queues.');
        }
    }
}
module.exports = {
    name: 'viewqueue',
    description: 'view an existing queue',
    execute(message, args, allQueues) {
        const name = message.content.slice(11).split(/ +/);
        const nameLower = name.shift().toLowerCase();
        bool = true;
        for (i = 0; i < allQueues.length; i++) {
            if (allQueues[i].className == nameLower) {
                var qstring = allQueues[i].content.join(", ");
                if (allQueues[i].content.length > 1) {
                    message.channel.send(`${qstring} are in queue for ${nameLower}`);
                } else {
                    message.channel.send(`${qstring} is the only person in queue for ${nameLower}`);
                }
                bool = false;
                break;
            }
        }
        if (bool) {
            message.channel.send('This queue does not exist.');
        }
    }
}
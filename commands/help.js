module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args) {
        message.channel.send('```-ping: bot responds with pong\n\n-createqueue name: creates a queue with given name\n\n-joinqueue name: join the queue with the given name\n\n-leavequeue name: leave the queue with the given name\n\n-leaveallqueues: leave all queues\n\n-viewqueue name: view the current members of the given queue\n\n-listqueues: list all ongoing queues```');
    }
}
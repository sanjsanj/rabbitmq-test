var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const queue = 'task_queue';
    let msg = process.argv.slice(2).join(' ') || "Hello World!";
    
    ch.assertQueue(queue, {durable: true});
    ch.sendToQueue(queue, new Buffer(msg), {persistent: true});
    
    console.log(`[x] Sent ${msg}`);
  })

  setTimeout(() => {
    conn.close(); process.exit(0);
  }, 500)
})

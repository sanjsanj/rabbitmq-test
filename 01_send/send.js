var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const queue = 'default_queue';

    ch.assertQueue(queue, { durable: false });
    ch.sendToQueue(queue, new Buffer('Hello World!'));
    console.log("[x] Sent 'Hello World!'");
  })

  setTimeout(() => {
    conn.close(); process.exit(0);
  }, 500)
})

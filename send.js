var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const query = 'hello';

    ch.assertQueue(query, { durable: false });
    ch.sendToQueue(query, new Buffer('Hello World!'));
    console.log("[x] Sent 'Hello World!'");
  })

  setTimeout(() => {
    conn.close(); process.exit(0);
  }, 500)
})

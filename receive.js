var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const queue = 'default_queue';

    ch.assertQueue(queue, { durable: false });

    console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);

    ch.consume(queue, function (msg) {
      const message = msg.content.toString();
      const date = new Date;
      console.log(`[x] Received ${message} at ${date}`);
    }, { noAck: true });
  })
})

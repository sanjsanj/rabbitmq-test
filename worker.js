var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const queue = 'task_queue';
    
    ch.assertQueue(queue, { durable: true });
    ch.prefetch(1);

    console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);
    
    ch.consume(queue, (msg) => {
      const secs = msg.content.toString().split('.').length - 1;
      const message = msg.content.toString();
    
      console.log(`[x] Received ${message}`);
    
      setTimeout(() => {
        console.log("[x] Done");
        ch.ack(msg);
      }, secs * 1000)
    }, {noAck: false});
  })
})

var amqp = require('amqplib/callback_api');

function fibonacci(n) {
  return (n > 1) ? fibonacci(n - 1) + fibonacci(n - 2) : n;
}

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const q = 'rpc_queue';

    ch.assertQueue(q, {durable: false});
    ch.prefetch(1);
    console.log('[x] Awaiting RPC requests');
    ch.consume(q, function reply(msg) {
      const n = parseInt(msg.content.toString());

      console.log(`[.] fib(${n})`);

      const r = fibonacci(n);

      ch.sendToQueue(msg.properties.replyTo,
        new Buffer(r.toString()),
        {correlationId: msg.properties.correlationId});

      ch.ack(msg);
    })
  })
})

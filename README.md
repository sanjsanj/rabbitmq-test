# rabbitmq

1 - 

2 - 

3 - Work queues

## Setup

1 - Install [Erlang](http://www.erlang.org/downloads)

2 - Install [RabbitMQ](https://www.rabbitmq.com/download.html)

3 - Make sure you have a recent version of [Node](https://nodejs.org/en/)

4 - Install the necessary packages `$ npm install`

## Run

1 - Basic send

`$ node send.js`

2 - Basic receive

```
// In a separate console

$ node receive.js`, to exit `ctrl + C
```

3 - Work queue 

```
// In separate consoles

$ node worker.js
$ node new_task.js
```

4 - Round robin queue

```
// In separate consoles

$ node worker.js
$ node worker.js

// And in the third console

$ node new_task.js First message
$ node new_task.js Second message
$ node new_task.js Third message
```

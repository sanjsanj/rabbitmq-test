# rabbitmq

[Official RabbitMQ docs](https://www.rabbitmq.com/getstarted.html)

## Setup

1 - Install [Erlang](http://www.erlang.org/downloads)

2 - Install [RabbitMQ](https://www.rabbitmq.com/download.html)

3 - Make sure you have a recent version of [Node](https://nodejs.org/en/)

4 - Install the necessary packages `$ npm install`

## Run

### Basic send

```
$ node send.js
```

### Basic receive

```
$ node receive.js
```

### Work queue 

```
$ node worker.js
$ node new_task.js
```

### Round robin queue

```
// In separate consoles

$ node worker.js
$ node worker.js

// And in the third console

$ node new_task.js First message
$ node new_task.js Second message
$ node new_task.js Third message
$ node new_task.js Fourth message
```

### Publish/Subscribe

```
$ node receive_logs.js
$ node emit_log.js
```

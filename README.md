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
$ node 01_send/send.js
```

### Basic receive

```
$ node 02_receive/receive.js
```

### Work queue 

```
$ node 03_work_queue/worker.js
$ node 03_work_queue/new_task.js
```

### Round robin queue

```
// In separate consoles

$ node 03_work_queue/worker.js
$ node 03_work_queue/worker.js

// And in the third console

$ node 03_work_queue/new_task.js First message
$ node 03_work_queue/new_task.js Second message
$ node 03_work_queue/new_task.js Third message
$ node 03_work_queue/new_task.js Fourth message
```

### Publish/Subscribe

```
$ node 04_publish_subscribe/receive_logs.js
$ node 04_publish_subscribe/emit_log.js
```

### Routing

```
$ node 05_routing/receive_logs_direct.js warning error

$ node 05_routing/emit_log_direct.js warning "A warning"
$ node 05_routing/emit_log_direct.js error "An error"
$ node 05_routing/emit_log_direct.js info "Just info"
```

### Topics

```
$ node 06_topics/receive_logs_topic.js "*.critical"

$ node 06_topics/emit_log_topic.js "warning" "Just a warning"
$ node 06_topics/emit_log_topic.js "error.critical" "Matches"
```

### Remote Procedure Call

```
$ node 07_remote_procedure_call/rpc_server.js

$ node 07_remote_procedure_call/rpc_client.js 5
$ node 07_remote_procedure_call/rpc_client.js 5
$ node 07_remote_procedure_call/rpc_client.js 21
```

#  Serverless Scheduled Boilerplate
Want to run a lambda function in a scheduled(Cron Job) manner? here's the boilerplate for it.

Want to run a function to check weather and send an email every 10 minutes? or any sort of scehduled function?

## What's the catch here ?
Its very simple to create scheduled events with Serverless AWS Stack. 

Its simple as configuring the below in the serverless.yml.

```yml

provider:
  name: aws
  runtime: nodejs4.3

functions:
  run:
    handler: handler.run
    events:
      - schedule: rate(1 minute)
```

```yml
- schedule: rate(1 minute) <- This is where the magic happens. 
```

You can set the rate according to the standards. Take a look at the AWS schedule syntax documentation for more details.(http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html)


Links:

Serverless Schedule events documentation: (https://serverless.com/framework/docs/providers/aws/events/schedule/)

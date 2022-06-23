# Twiml Bin Serverless

This is a simple Twilio Serverless Project demonstrating how [Functions](https://www.twilio.com/docs/runtime/functions) and [Assets](https://www.twilio.com/docs/runtime/assets) can be use to bulid [Twiml Bin](https://www.twilio.com/docs/runtime/tutorials/twiml-bins) like features. 

## Pre-requisites

### Developer Tools
1. Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli)
2. Install the [serverless toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)

```shell
twilio plugins:install @twilio-labs/plugin-serverless
```

### Environment variables

This project requires some environment variables to be set. To keep your tokens and secrets secure, make sure to not commit the `.env` file in git. 

### Function Parameters

`/twiml-bin` expects the following post parameters:

| Parameter    | Description                                                                   | Required |
| :----------- | :---------------------------------------------------------------------------- | :------- |
| `template`   | Template name of the Twiml Bin Asset file                    | Yes      |

### TwiML Bin Files

Twiml Bin Files are to be deployed in `/Assets` folder as a privately scope file. To mark and asset as private, include `.private.` in the file name. More details [here](https://www.twilio.com/docs/labs/serverless-toolkit/general-usage#assets)

Syntax of TwiML is summarised in [this article](https://support.twilio.com/hc/en-us/articles/230878368-How-to-use-templates-with-TwiML-Bins)

> :warning: Note: This project does not support [Twilio's built-in functions](https://support.twilio.com/hc/en-us/articles/230878368-How-to-use-templates-with-TwiML-Bins#built-ins)

## Testing Locally

1. Start the server with the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart):

```
twilio serverless:start
```

2. Using Postman or Curl and `GET` http://localhost:3000/twiml-bin and provide the required parameters. 


## Deploying

Deploy your functions and assets with either of the following commands. Note: you must run these commands from inside your project folder. [More details in the docs.](https://www.twilio.com/docs/labs/serverless-toolkit)

With the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart):

```
twilio serverless:deploy
```

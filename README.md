# Agile Mississippi Project

## Key Assets
1. Data endpoint: https://raw.githubusercontent.com/CivicActions/agile-ms/master/data/MS%20ITS%20RFP%203717-Vendor%20Challenge%20Dataset%20FINAL.json
1. Dev server: https://agile-ms-dev.civicactions.com
1. Production server: https://agile-ms.civicactions.com
1. CI server: http://ci.civicactions.net
1. Slack channel: #agile-ms
1. Dev deployment Slack command: /agile-ms-deploy-dev
1. Prod deployment Slack command: /agile-ms-deploy-prod

## Development Workflow

We are leveraging a fork-and-pull peer reviewed code model that leverages pull requests.

Pull requests are submitted to the Slack channel and any available developer performs a code review.
 
Deployments occur through Slack by running the commands noted above. Dev deployments are done to perform tests. Prod deployments occur once Dev deployments have been validated.

## Technical Architecture
1. Bootstrap
1. Angular JS
1. AWS Cloud Environments
1. Docker
1. Jenkins CI Server
1. JSON web service data endpoint
1. Gulp as a task runner

## Local Development Config
1. Ensure you have node, and npm installed on your local machine
1. Navigate to /docroot
1. run gulp from terminal

## Deployment

This deploys an instance of the application on Amazon Web Services, then configures DNS (with CDN and SSl) using Cloudflare. Docker Machine is used to provision and bootstrap the instances. The AWS CLI is used to manage network configuration and a Cloudflare CLI is used to configure Cloudflare (the AWS CLI and Cloudflare tools are run via Docker, so dependencies are minimized).

### Requirements
1. [Docker](https://www.docker.com/) to manage containers.
1. [Docker Compose](https://docs.docker.com/compose/) to automate defining and running multi-container applications with Docker.
1. [Docker Machine](https://docs.docker.com/machine/) to automate creating Docker hosts locally, on cloud providers, or in a data center.
1. Amazon Web Services account and API keys to automate interactions with AWS.
  * VPC configured (default OK)
  * Subnet within VPC
1. CloudFlare account and API keys to automate interactions with CloudFlare.

### Instructions

Clone the repository, and change to the project directory:
```bash
git clone https://github.com/CivicActions/agile-ms.git
cd agile-ms 
```

If you are using Docker on Windows or OS X:
* Make sure it is started up and it's shell environment variables are available before continuing (if using the Docker installer you can do this by starting a Docker Quickstart Terminal window).
* You will also need to add a route to the Docker subnet by running `sudo route -n add 172.0.0.0/8 192.168.10.10`.

Create the following required environment variables, containing your AWS and Cloudflare access details:
```bash
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_VPC_ID=
export AWS_DEFAULT_REGION=
export CLOUDFLARE_EMAIL=
export CLOUDFLARE_TOKEN=
export AWS_DEFAULT_REGION="us-west-2"
export AWS_AMI=ami-b7393887
export AWS_ROOT_SIZE=30
```

Subnets must be available with in the AWS Region and Zone you are using. Ensure that your VPC is contained within the Region you select, and that the zone/subnet (if selected) are available on that VPC. The AWS environment variables and default values are detailed in the [Docker Machine](https://docs.docker.com/machine/#amazon-web-services) documentation. If using the non-default region and subnet you can specify these by setting the following environment variables:
```bash
export AWS_ZONE=
export AWS_SUBNET_ID=
```

Run the ./bin/deploy script to initiate the deploy, where the first parameter is the subdomain to deploy to, and the second is a Cloudflare DNS hosted domain name. For example:
```bash
./bin/deploy agile-ms civicactions.com
```

This will deploy a candidate instance to https://agile-ms.civicactions.com/.


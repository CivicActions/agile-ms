# Agile Mississippi Project

## Brief Description

We approached this project as if we were actually going to deploy a usable, lasting, maintainable tool for Mississippians to find day care. Our project is a serverless, responsive implementation that presents a usable map of commercial day care centers in our data that enriches the user experience. Following our user testing, we significantly simplified and rearranged the user interface and rewrote it in plain language to maximize usability.

We followed the USDS Playbook through 4 intense Sprints, each of which garnered better and better user feedback. The resulting site allows users to search on locales specified the way one does a Google map search for an area. We clarify and link to the State’s definitions of provider and quality star rating. We are confident that if provided with the complete set of data we believe the state has, it would be a compelling user experience.

## Links to Working Prototype

Our functioning prototype can be found here: https://agile-ms.civicactions.com.

Our fully-open GitHub Repo is: https://github.com/CivicActions/agile-ms.

## How to Report Bugs

To report a bug against this prototype, please enter a new GitHub issue: https://github.com/CivicActions/agile-ms/issues



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
1. Google Maps (API Key required)
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

## The Story of our User Interactions

We quickly learned from our pre-prototype interaction with the users that in some cases they wanted a map to show the location of providers. Only later did we realize that only certain provider types are places-of-business that have physcial address.  We quickly prototyped a map using "fake" addresses based around the geographic center of the ZipCodes, which we had for each provider.

Showing this prototype to users who were social workers and parents in other states, it became apparent that the terminology, such as "Slot Contractor", and the "Rating" system, was very hard to understand. We began to put effort into developing new GUI wireframes that would clarify this and make it a prominent part of the searching, raising it to the top. We developed additional verbiage using a "plain language" approach that we hoped would clarify things.

Since we had developed a prototype early on, we were able to bring our prototype into each user interview with screen-sharing technology to let users actually use our website. However, we asked open-questions first so as to get as much unbiased information from the users as possible.  Our users were parents and social workers who worked with foster youths.

For parents, we implemented the feature of starting the map and search in their current location. We learned that for social works this was less valuable, but we implemented, using Google-maps, a Google like place search for finding things.

## The Story of our Map

One of the main features in our prototype is the use of a Google Map populated with *real* geolocated data. Many of the providers are commercial businesses that have a clearly defined place-of-business which can be determined with a Google search or the Google Places geo-location service. When our users told us that a map would be useful, and that they needed to know where providers were, we executed a script to geolocate Licensed providers. From the data set given to us, we found 352 likely physical addresses, which allowed us to accurately place those Centers, Group Homes, and Slot Contractors on the Google Map. Furthermore, we use a different marker for each provider type. We suspect that the data provided by the State for this exercise contains only a fraction of all the data, since all providers types are populated from the beginning of the alphabet to a particular letter. The full data may make the maps look more interesting and attractive than they do in our accurate prototype.

We believe the privacy of the those providers that do not have a brick-and-mortar place of business must be protected. We believe that the State of Mississippi probably has a postal addresses for licensed providers which could enrich the user experience, and hope our prototype has demonstrated how to make use of this.  

## A "Serverless" Architecture

In this project we have employed the modern, so-called "Serverless" architecture.  That is, because this functionality is "stateless", there is no database. We read the data from a static file directly into the javascript which runs in the user's browser. This makes a much simpler implementation than using an unnecessarily database. In this model, the maintenance of the provider data could be as simple as editing a CSV file. However, any software engineer would understand how to connect this to a relational database if that is preferable.



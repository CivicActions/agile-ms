# Agile Mississippi Project

## Table of Conents

* Overview
 * Brief Description
 * Links to Working Prototype
 * Key Assets
 * How to Report Bugs
* Team Structure
* Story of our User Interaction
* Story of our Map
* "Serverless Architecture"
* Build and Deploy Instructions


## Overview

### Brief Description

We approached this project as if we were actually going to deploy a usable, lasting, maintainable tool for Mississippians to find day care. Our project is a serverless, responsive implementation that presents a usable map of commercial day care centers in our data that enriches the user experience. Following our user testing, we significantly simplified and rearranged the user interface and rewrote it in plain language to maximize usability.

We followed the USDS Playbook through 4 intense Sprints, each of which garnered better and better user feedback. The resulting site allows users to search on locales specified the way one does a Google map search for an area. We clarify and link to the State’s definitions of provider and quality star rating. We are confident that if provided with the complete set of data we believe the state has, it would be a compelling user experience.

### Links to Working Prototype

Our functioning prototype can be found here: https://agile-ms.civicactions.com.

Our fully-open GitHub Repo is: https://github.com/CivicActions/agile-ms.



### Key Assets
1. Data endpoint: https://raw.githubusercontent.com/CivicActions/agile-ms/master/data/MS%20ITS%20RFP%203717-Vendor%20Challenge%20Dataset%20FINAL.json
1. Dev server: https://agile-ms-dev.civicactions.com
1. Production server: https://agile-ms.civicactions.com
1. CI server: http://ci.civicactions.net
1. Slack channel: #agile-ms
1. Dev deployment Slack command: /agile-ms-deploy-dev
1. Prod deployment Slack command: /agile-ms-deploy-prod

### How to Report Bugs

To report a bug against this prototype, please enter a new GitHub issue: https://github.com/CivicActions/agile-ms/issue

## Team Structure

Robert L. Read was appointed the role Product Owner and was responsible for the overall success of the prototype.
The overall team structure was:
* Product Owner: Rob
* Tech Lead: Adam
* UX Lead: Nicole
* Deployment Engineer: Josh
* Software Engineer: Ethan
* Software Engineer: Alex
* UX Designer: Jen
* Engagment Manager: Steve





## The Story of our User Interactions

Seeking first to understand what was really needed (USDS Play #1), we conducted a sprint “zero” during the week prior to our iterative development kickoff. In this pre-sprint research and planning phase, we built an initial prototype to identify any technical risks and to validate some initial technical assumptions.  This prototype and all work to follow was in pursuit of the goal that the state of MS team described in the caseworker Q+A session - to provide a way for social workers and parents to find safe and quality daycares in MS without training.  

In parallel, we began conducting some initial policy and contextual research and recruiting our “users.” We based our initial research and outreach upon the initial input from the caseworker Q&A session hosted by the state. Because our target audiences are parents and social workers (or caseworkers) who work with foster parents, we reached out to individuals in the child welfare field, beginning with members of the Annie E. Casey Foundation’s Casey Strategic Consulting Group (CSCG) and staff at private providers. We also reached out to local daycare providers in order to identify parents who might have conducted daycare searches recently. Ideally, we were looking for a sampling of users who met a cross-section of criteria:

 -- Job: social worker, someone working in a state child welfare agency or private provider or other organization providing child welfare-related services

 -- Parent: an adult with children under 6 currently in daycare, or looking for daycare

 -- Age range: mid 20s to late 40s

 -- Tech savvy: low to medium

 -- Geographic area: ideally Mississippi, but if not possible then a range of states

We then scheduled three initial user sessions combining a contextual interview and “think aloud” exercises focused on two websites: the MDHS site and the site hosting our initial sprint zero prototype.

We realized that to quickly convey convenient providers we could use a map to show the location of nearest providers. Later we realized that only certain provider types are places of business with physical addresses. We quickly prototyped a map using "fake" addresses based around the geographic center of the zipcodes, which we had for each provider.

![sprint zero](https://cloud.githubusercontent.com/assets/5296671/19285906/839b8d56-8fc1-11e6-8c66-9a8df76ba4a3.png)

During sprint zero user research we quickly identified the top ways in which parents and social workers conducted their searches:

 -- Location (address, zipcode) was critical. It was the first thing most users wanted to enter. Some offered to hop off the site and look in Google Maps to get better results. 
 
-- The hours of operation, curriculum, ages of children served and programs, and other information (other parents reviews, pictures, etc) that did not exist in our dataset.

 -- Whether the providers are currently taking applications.

This was our attempt to address the whole experience, from start to finish (USDS Play #2), although we had time in this exercise to address only the first, highest-priority item.

We determined that users are most interested in identifying high quality, safe daycare providers convenient to their work or home location. The search function is used to identify state-licensed and registered providers and, ideally, to lessen the legwork needed in order to make a selection.
 
This initial pre-sprint or sprint zero work enabled us to conduct our next phase of development with a few key areas for improvement in mind:

We learned that users were confused by the terminology. Types of providers were unclear; this led users to make incorrect assumptions about search results and to completely drop slot contractors from their search although these centers, by definition, met the users’ criteria.  

Users were also confused by the star ratings, believing falsely that most of the identified providers had a zero (0) rating when in fact they had no rating or were not participating in the rating system.

Following the principle of keeping it simple and intuitive (USDS Play #3), we put effort into developing new GUI wireframes that would clarify this terminology and rating confusion and make it a prominent part of the searching, raising it to the top. We also developed additional verbiage using a "plain language" approach that we hoped would clarify terminology.

Since we had developed a prototype early on, we were able to iterate on our prototype in each user interview with screen-sharing technology so that users could directly experience our website (USDS Plays #9 and #4). For the remaining user sessions, our experienced UX expert (USDS play #7) continued to follow a think-aloud approach which asked users to place themselves in a scenario where they are either social workers trying to find a daycare provider in order to get their kids a placement or a parent conducting a daycare search.

For parents, we implemented the feature of starting the map and search at their current location. We learned that for social workers this was less valuable, but we implemented, using Google Maps, a Google-like place search for finding providers.

In this second Sprint, we were fortunate to receive the support of Virginia Pryor, Director of the Georgia Department of Family and Children Services. We had multiple user participants—from the Adoption unit, the Permanency unit and the Resource department—who interacted with our iterative prototypes (now live websites), as well as a few returning participants from the prior phase. These workers conduct the Mississippi challenge’s use case regularly, so we thought that these users would give us a closer insight into whether the new application would address key concerns—and most importantly, be user friendly.




![devsprint](https://cloud.githubusercontent.com/assets/5296671/19285974/bb5f5998-8fc1-11e6-8bea-9ae9f03133c2.png)

These Georgia child welfare staff were able to help us confirm that the terminology of provider types and ratings was hard to understand. Additionally, they helped us to identify the importance of ensuring that the site worked on all devices—essential, given that workers will be in many locations when conducting a search of this type. Although our prototype did not mature to the point of making it appropriate to use quantitative data collection, such as A/B testing, time-on-task testing, etc., we continually and iteratively used user interview data to guide our development decisions  (USDS Play #12).

Instead we heavily used qualitative data in order to collect it we asked open-ended questions first so as to get as much unbiased information from the users as possible. Our users were parents and social workers who worked with foster youths.

After these interviews in our third Sprint, we identified the need for a new visual approach that would emphasize provider type and quality star ratings and explain them to the user, while moving the map to a position parallel to the results lists. We had discovered that for a fraction (approximately one-fifth) of all providers we could discover the physical postal address of the businesses and place these on the map. We immediately started Sprint 4 with that in mind. Our automated deployment allowed us to rapidly deploy significant development changes with confidence (USDS Play #10).



![final2days](https://cloud.githubusercontent.com/assets/5296671/19286190/5c02cfba-8fc2-11e6-89bb-91f417fc9908.png)

## The Story of our Map

One of the main features in our prototype is the use of a Google Map populated with *real* geolocated data. Many of the providers are commercial businesses that have a clearly defined place-of-business which can be determined with a Google search or the Google Places geo-location service. When our users told us that a map would be useful, and that they needed to know where providers were, we executed a script to geolocate Licensed providers. From the data set given to us, we found 352 likely physical addresses, which allowed us to accurately place those Centers, Group Homes, and Slot Contractors on the Google Map. Furthermore, we use a different marker for each provider type. We suspect that the data provided by the State for this exercise contains only a fraction of all the data, since all providers types are populated from the beginning of the alphabet to a particular letter. The full data may make the maps look more interesting and attractive than they do in our accurate prototype.

We believe the privacy of the those providers that do not have a brick-and-mortar place of business must be protected. We believe that the State of Mississippi probably has a postal addresses for licensed providers which could enrich the user experience, and hope our prototype has demonstrated how to make use of this.  

## A "Serverless" Architecture

In this project we have employed the modern, so-called "Serverless" architecture.  That is, because this functionality is "stateless", there is no database. We read the data from a static file directly into the javascript which runs in the user's browser. This makes a much simpler implementation than using an unnecessarily database. In this model, the maintenance of the provider data could be as simple as editing a CSV file. However, any software engineer would understand how to connect this to a relational database if that is preferable.

## Deployment Instructions

### Development Workflow

We are leveraging a fork-and-pull peer reviewed code model that leverages pull requests.

Pull requests are submitted to the Slack channel and any available developer performs a code review.
 
Deployments occur through Slack by running the commands noted above. Dev deployments are done to perform tests. Prod deployments occur once Dev deployments have been validated.

### Technical Architecture
1. Bootstrap
1. Google Maps (API Key required)
1. Angular JS
1. AWS Cloud Environments
1. Docker
1. Jenkins CI Server
1. JSON web service data endpoint
1. Gulp as a task runner

### Local Development Config
1. Ensure you have node, and npm installed on your local machine
1. Navigate to /docroot
1. run gulp from terminal

### Deployment

This deploys an instance of the application on Amazon Web Services, then configures DNS (with CDN and SSl) using Cloudflare. Docker Machine is used to provision and bootstrap the instances. The AWS CLI is used to manage network configuration and a Cloudflare CLI is used to configure Cloudflare (the AWS CLI and Cloudflare tools are run via Docker, so dependencies are minimized).

#### Requirements
1. [Docker](https://www.docker.com/) to manage containers.
1. [Docker Compose](https://docs.docker.com/compose/) to automate defining and running multi-container applications with Docker.
1. [Docker Machine](https://docs.docker.com/machine/) to automate creating Docker hosts locally, on cloud providers, or in a data center.
1. Amazon Web Services account and API keys to automate interactions with AWS.
  * VPC configured (default OK)
  * Subnet within VPC
1. CloudFlare account and API keys to automate interactions with CloudFlare.

#### Instructions

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

## Testing 
                                                                                                                                  
To execute all the integration tests, build your environment as normal, then run: 
```bash                                                                                       
run-tests                                                                                                                           
```                                                                                                                         
The tests will indicate successes/failures on the screen. For integration into automation tools (e.g. Jenkins) a zero exit code (`echo $?`) indicates a successful run, a non-zero result indicates a test failure.                        
                            
The tests run 2 suites (mobile and desktop viewports), first on Google Chrome and then on Mozilla Firefox. All testing infrastructure and the test browsers run inside Docker containers, so no additional local setup is needed. 
                                                    
### Test Development                                                    
                                                                                                    
The tests use the open source [Selenium Builder](https://github.com/SeleniumBuilder/se-builder) Selenium 2 JSON test format, which is easy to version control and edit with the open source Selenium Builder Firefox extension (which can run/debug the tests manually). The tests are in the [tests](https://github.com/CivicActions/agile-ms/tree/master/tests) directory.  
     
To run/build tests with the Firefox extension you will need to:                                                                                  
* Load the appropriate suite (desktop.json or mobile.json). 
* Edit the tests/base-url.json file and set the address for your local web server (from the `build` command output).                            
* Save the specific test files when you are done working on the tests.                                                                           
* If you are working on tests that alter data you may also need to run `create-demo-users` between runs (as the `run-tests` script does). This will ensure a clean test environment.                                                                         
                                 
Tests are automated using the (se-interpreter)[https://github.com/Zarkonnen/se-interpreter] which is made available as a Docker container, together with the (SeleniumHQ Chrome and Firefox Docker images)[https://github.com/SeleniumHQ/docker-selenium].

Test results are recorded in chrome.log and firefox.log files in the "tests" directory.  


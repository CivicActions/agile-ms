## Full team Call notes 

### 10/3 Project kickoff meeting 

Agenda and Questions: 
- Tech stack 
- Role of Alex
- 1 day Sprints? 
- Git organization / documentation / bug reports
- Plan for design / theming 
- User research sched for this week 

RR: Story map and user stories for this week – board already populated with output of Sprint 0 user research 
- Begin with JSON file 
- Basic duplication phase
- If holy grail: parents can see availability? Will require Drupal or some other backend store 

RR: Proposing 3 Sprints 
- Close Tues / Th / Friday 

NTR: Both sites (Rob’s prototype and MS current site) are insufficient for the full decision making users have indicated
- Identify programs that perhaps they didn't know about in their vicinity 
- Locations near home, and locations near work 
- Terminology is confusing, data is insufficient 
- Provider name search? Vs discovery of things near me 
- Confusion around how to generate as many results as possible 
- Places to call and visit - see reviews and ratings - 
- Child welfare -- something like a directory -- and does location have availability 
- Eligible and participating in subsidy programs -- these are already pre-vetted 
- Quality star rating -- only received via state list 

RR: To prioritize user stories with Adam and Nicole for Sprint 1 

### 10/4 Morning scrum  

Rob: 
Today: Backlog grooming
- Understanding where we stand wrt prototype 
- Question of how we're going to handle addresses
- Balance 9 

Ethan: 
- Got gulp put together 
- Alex implemented Angular -- and having a tough time implementing this -- big learning curve. Hazard that implementation of pizzanearme in Angular 
- Balance 7 

Josh: 
- Finish deploy script - site is up 
Today: Continue build -- set up Jenkins 
- Slack integration, etc 
- Or something else.... 
- Balance 7 

Adam
- Have something tangible 
- Begin evaluating feedback that comes 
- In absence of Jen, working on wireframes 
- Unblock Ethan
- Balance 7 

Nicole: 
- Provider type copy 
- Reach out to users 
- Today: Continue to work on copy re: rating 
- User reach-out 
- Balance 5-6 

Steve: 
- Scheduling and resource confirmation 
- Case Commons call 
- Balance 6.5 

RR: Table issue of zip grouping 
- Getting as fast as possible to prototype - and then stories 
- Get prototype without Angular 
- Back of envelope guesses as to best way to implement user feedback 

### 10/4 Afternoon touchpoint 

- GUI wireframes
- Clarification of provider names, user friendly definitions 
- Theming progress 
- Using pizzanearme as prototype for tool 

### 10/5 Morning scrum 


Ethan: 
- Just merged in Alex's angular work for listings
- Map working w/o angular - now looks like working again
- Today: Point map to data 
- Blocker: Real addresses? Pins are stacking 
- Need person icon - point to image? 
- Balance 7 

Josh: 
- Not much time on this yesterday -
- Finished Jenkins - tie in slack integrations 
- Today: Connect w/ Rob
- Pick up ticket 
- Balance 7 

Adam: 
- Work from last night cleaned up by Alex 
- Today: Filtering on left side 
- Take adv of high level theming that's in place 
- Balance 5

Nicole 
- Today: Showed social worker static image prototypes 
- Lining up add'l user research 
- Balance 7 

Steve 
- Notes and work on proposal
- Balance 6 

Rob: 
- Worked with Jeff - understanding how Places API works
- Today: "Enriching" state tool with data 
- Site push? 
- Balance 9 


NTR: Important note: if we were in fact working with the state we would have real data  
RR: still questions re: provider type and geolocation 
- some will - some are probably restricted 



### 10/5 Afternoon huddle 

- Noted that though some map data will be incorrect or missing, we should proceed as planned, given assumption that we would be operating with correct data from MS with actual tool 

### 10/6 Morning scrum 

Adam: 
- Devs kicked butt! 
- Today: QA bugfix
- Feedback from Nicole 
- Google API after-discussion 
- Balance 7 

Josh: 
- Places API - strategy is to use flat file and bulk lookup 
- Lookup tool getting slammed by rate limiter 
- Location search debugging 
- Today: Follow up w/ API questions 
- Balance 7 

Ethan: 
- Made splash page
- html5 lookup 
- Today: Map behaving weirdly - 
- Autocomplete item - after-discussion
- Balance 6 

Nicole 
- Spoke to supervisor of foster parents, foster parent licensing 
- New user type 
- Liked landing page 
- Today: Really appreciate work on the site
- 2 more sessions
- Coordinating folks for tomorrow 
- Balance 8 

Rob: 
- Synch w/ Nicole 
- Update trello board 
- Tie threads together 
- Balance 8 

RR: Devs should smoke test on live site after push 

AB: Agreed 

RR: Weirdness around APIs? Remove dependency on API 
- log statements that say that we're hitting a rate limit? 
- All was working well last night  

RR: Rob to QA 

RR: Resolving issues - 
- Bringing to fruition work that's already in progress 
- Feature freeze rather than code freeze heading into next week - small low-risk details 

NTR: Reduce size of map? Get cursor out of it – 
- User feedback



### 10/6 – Afternoon touchpoint 

- Enhancements to the data are preventing us from moving forward 
- - We need to get data as "done" as possible - move past any potential uncertainties 
- - Alex on hold until data is complete 
- Layout change - coming out of user interviews 
- - Will first wireframe and then create theming tickets 
- Determinations about Kanban – we’re running this not with closed Sprint backlog 
- Jen to provide mobile theming as next step 


### 10/7 – Morning scrum 

Jen: 
- Attending user interviews
- Tight loop with Rob and Nicole 
- Icon theming 
- Redesign of layout as discussed yesterday - validated by user interview today 
- Today: More in the backlog 
- Balance 7 

Josh: 
- Working on dataset - into places API 
- Got lat lng working
- User friendly naming 
- Today: Only a few hours - will take what's next 
- Balance 7 

Ethan: 
- Zipcode lat lng data pushed into MS provider dataset 
- Map fixed up - now returning meaningful data 
- Today: Low balance 
- Balance 5 

Adam: 
- TL'ing - holistic mgmt 
- PR for filters of provider type 
- Today: Dev deployment - smoke testing 
- Re-alignment looking through backlog, grooming wrt user feedback 
- Balance 7 

Rob: 
- Full PO 
- Today: 
- Grooming 

RR: Suggest feature complete except two things: 
- Restyle page / theming  
- Don't want to give up on using real data - finish getting data from google API 

ET: Fake data site that works? Or can we manage it with real data? 

AB: Shelve real data - and get good user interface with what we have 
- Even partially better better data doesn't really improve product more than fully random 

RR: Will continue to tinker 
- Fake data doesn't include un-listed -- nannies, eg 
- Agree, need to try and make existing UX better 

AB: Dev / UX meeting 


### 10/7 Afternoon touchpoint

Project Retrospective held among full team. Trello board with feedback here: 
- https://trello.com/b/23B9LT8d/agile-ms-retro-1

- Sprint planning committed for Monday AM - all hands, not just TL 
- Determination not to align time commitments between time zones
- Real geographic data achieved, we won’t be fudging map placement of services as a temporary alternative. This is a big win. 
- We are planning to draw on the map only those things which we think we really can get an accurate address 




### 10/10 Sprint 4 Planning meeting 
- (Determined on 10/7 that we would skip our 10/10 scrum in lieu of sprint planning) 

- Development to end close of day Tues. Steve and Rob to work on documentation thereafter. Due 3pmCT Thurs. 
- 9amCT Tues user interview: if we could have new design live, and real address data in place, we'll be in great position for interview 
- Mobile work on Tuesday 
- More emphasis on bug fixing today and tomorrow. Dev doing more smoke testing. 
- Steve to assist in QA testing 
- Note “Priority separator” in backlog to distinguish high priority stories  
- New layout is main priority, reflecting need surfaced in user interviews 
- Also: Different icons for different types of providers, make results immediately scanable / comprehensible 
- Sprint 4 backlog almost certainly larger than we can accomplish by EOD Tues, but Rob will ensure that it’s prioritized, and we’ll work through it as if Kanban  


### 10/10 - Afternoon touchpoint 

- MRs pending - will merge and QA before live demo in AM 

- Determinations re: Google API - Though not explicitly open source, we are deciding to keep it in our prototype
- - Practically industry standard for any mapping work. Far more common in OSS development than even openstreetmaps, eg.  
- - Used only once to populate data, but not active feed 
- - We have it on info from Nicole that State of MS has all this data themselves, so a similar tool used in the actual situation would not need Google API and would function just as well from the MS db 
- - Google is not a platform, it's a service provided free of charge (just like github, in fact, required by RFP!) 

- In the future need a Ready for QA Release Column on trello  

- Rob to send Jen action items by EOD Tuesday for USDS checklist, documentation 

- Decision not include all the provider types that state db initially included ("relative" data types)
- - not validated as useful to users 
- - we can't determine what the role / use would be in this use case, either 



### 10/11 – Morning scrum 

Ethan: 
- Going down list doing tickets 
- Balance 8 

Rob: 
- Documentation 
- Today: UX call did not go great -- not tech savvy user, and some issues were outsize in their impact on testing. We’ll be in a much better place soon here
- Mobile layout and testing
- Balance 8 

Adam: 
- Groomed board - made sure each card actionable 
- Maybe nothing for Josh? Testing documentation 
- Ethan - discuss data? Keen to only make changes in code at this moment. Close mr for data change 
- Balance 6.5

Josh: 
- Automated testing framework installed 
- Documentation for this in the pull request 
- Balance 7 

Steve: 
- Documentation, co-work with Bill 
- Judy re: MS forms 
- Balance 7.5 

Nicole: 
- User session this AM - confused around sizing of site 
- Help users take advantage of 
- Have add'l user session this afternoon - 12:30ET - adoption unit supervisor in GA - can be available for documentation and testing thereafter 
- Balance 8 


RR: Push things to dev when a merge has been done?
- Especially before 12:30 mtg 

AB: Consolidating, but yes

SC: How is rest of backlog looking? Realistic? 

ET: Unlikely to get to all in backlog today 

AB: Results centered on screen? Deprioritize? 

RR: Risk not withstanding, this is a big issue for users

ET: So should it be at top of priority list? 

AB: It's the only one on the list that seems challenging 


### 10/11 Afternoon touchpoint  

- Decision to revert function where map reloads (adds, substracts pins) when scroll in or out -- would resolve a lot of performance issues we're seeing 
- User interview confirmed that we're on the same track, tracking and working toward high value stories -- too bad that all work that's in evidence now wasn't in evidence at time of call earlier today, but that's okay 
- Josh: Test infrastructure work is ready to merge 



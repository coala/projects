---
collaborating_projects:
  - coala
desc: "Port cobot to errbot, test the new plugins, and introduce new useful features"
developers_involved: []
difficulty: medium
status: completed
initiatives:
  - GSoC
issues:
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/152"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/50"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/45"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/44"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/47"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/46"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/20"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/49"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/48"
markdown: cobot-enhancement.md
mentors:
  - Udayan12167
  - sadovnychyi
name: "cobot enhancement, testing and porting"
requirements:
  - "At least one patch to cobot should be accepted and merged."
tags:
  - community
  - cobot
---
This project is about cobot, the automation chat bot that is used at coala.
Currently cobot is used for several things:

- Assign issues
- Invite people
- Create issues
- Unassign issues
- label PRs

etc. And cobot has proved as an extremely useful tool for the community and
convenient to the maintainers. But current cobot is based on the [hubot
framework](https://hubot.github.com) which requires the developers to write
plugins/scripts in coffeescript. coala is a python inclined community and
porting cobot to a python based chat bot framework will help cobot to grow. In
this project, the current cobot with current functionalities will be ported to
[errbot](http://errbot.io).

Also the hubot scripts that are currently being used aren't tested. There are no
unit tests, no integrity tests which has lead to buggy scripts merged earlier
and required more human resources. Another goal of this project is to have all
the plugins tested, unit tests for each plugin.

Another interesting feature that will be developed during this project is
auto-replying cobot when a question is triggered. So, next time, when a newcomer
asks "What is rebase :/ ?" cobot will automatically answer it after
intelligently searching/matching with the user, developer docs and newcomer
guide. That is this feature will be fueled by our existing documentation that
many people don't seem to respect/ignore knowingly or unknowingly not making it
worthwile having good up-to-date docs. We aim at using topic modeling i.e. take
help of machine learning and natural language processing(NLP) for this one.

Repository: https://github.com/coala/corobo
Proposal PDF: https://meetmangukiya.github.io/GSoC_cobot_enhancement.pdf

#### Milestones

##### PREPARATION/BONDING

Milestone: https://gitlab.com/coala/GSoC/GSoC-2017/milestones/2

* The applicant has made a cEP of how the new plugins will be implemented, how
  will it be tested, etc.


##### CODING PHASE 1

Milestone: https://gitlab.com/coala/GSoC/GSoC-2017/milestones/23

* Port all the plugins to errbot.
* Write half of the new features proposed.
* Write the test helper and all the merged plugins should have unit tests.

##### CODING PHASE 2

Milestone: https://gitlab.com/coala/GSoC/GSoC-2017/milestones/24

* Write the other half of the new features proposed.
* Start implementing the topic modeling functions, etc.

##### CODING PHASE 3

Milestone: https://gitlab.com/coala/GSoC/GSoC-2017/milestones/25

* Topic modeling should be implemented completely and should also be able to
  trace back to the related document in the training data.
* Document all the bot commands and the topic modeling process used, for future
  references.

#### Process

##### CODING PHASE 1

In week 1 and 2: All the existing scripts in gitlab/coala/cobot should be
ported to github/coala/corobo. All the plugins should be tested with 100%
coverage.

In week 3 and 4: At least two new plugins from
https://github.com/coala/corobo/milestone/5 should be written and tested.

##### CODING PHASE 2

In week 5 and 6:

1. Get all the PRs from CODING PHASE 1 merged.
2. Write the WSDL file for coala webservices. Generate coala-api-wrapper from
   the WSDL file and publish to PyPI.
3. Write all the plugins from https://github.com/coala/corobo/milestone/5 and
   use coala-api-wrapper instead of making raw API calls.

In week 7 and 8:

1. Merge all the PRs from week 5 and 6.
2. Review all the plugin commands and fix any bugs that were detected during
   this period. Do a UX survey from the coala community about the commands.
   Do the necessary changes from the insights of the UX survey.
3. Lay the foundation of topic-modeling and create sane data sets from coala
   documentation.

##### CODING PHASE 3

In week 9 and 10:

1. Have least functionality that does the pre-processing and can retrieve topic
   from the given question, i.e. figuring out what is the expected answer.
2. Start working on the passage retrieval part to _get_ the answers from the
   documentation.
3. Working functionality to get answers from the docs and summarize the doc to
   answer in concise manner.

In week 11 and 12:

1. Based on the scores determine if the question can be answered from our docs,
   if not just return a google result for the same question.
2. Buffer.
3. Documentation (particularly about the algorithm used for retrieving the
   answers).

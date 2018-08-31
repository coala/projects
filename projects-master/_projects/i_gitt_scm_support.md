---
name: "IGitt SCM support"
desc: "Add support for git hosters in IGitt and convert coala VCS bears to
       use IGitt"
difficulty: medium
requirements:
  - "An enhancement to the coala VCS bears"
  - "An enhancement to IGitt"
initiatives:
  - GSoC
collaborating_projects:
  - coala
  - IGitt
tags:
  - BitBucket
  - Gerrit
  - Phabricator
  - Fossil
  - Launchpad
---

[IGitt](https://gitlab.com/gitmate/open-source/IGitt) is a simple library
that allows you to access various git hosting services like GitHub, GitLab
and so on via one unified python interface.

The coala bears project provides support for git and mercurial VCS but it
does not use IGitt. With this project, VCS in coala-bears should be
simplified using IGitt.

However, there are some git hosters that are not yet supported by IGitt.
One such hoster is BitBucket. So it is necessary to add BitBucket support to
IGitt before using it to convert the VCS bears in coala-bears.

Other git hosters like Gerrit and Phabricator are important for IGitt adoption 
into large OSS organizations. So are some other non-git SCM, such as Fossil
and Launchpad. 

Support for all these git hosters should be added to IGitt.

A recommended preparation task in addition to already mentioned requirements
for this project is to make an enhancement to https://github.com/guyzmo/git-repo

#### Milestones

##### GSOC 2018 COMMUNITY/BONDING

* Create a cEP describing the details of how support for additional git
  hosters will be added to IGitt.
* Understand how bears for VCS are implemented in coala bears and describe
  details of how IGitt will be used to improve them.
* The participant has a merged enhancement to IGitt.
* The participant has completed the newcomer process.

##### CODING PHASE 1

* Add BitBucket (git & mecurial) support to IGitt.
* Convert the coala VCS bears to use IGitt.

##### CODING PHASE 2

* A copy of IGitt should be imported to a BitBucket hg repository
* Allow  CI & coala enabled checking commits.
* Develop new backends in BitBucket hg repository.
* Add Gerrit and Phabricator support to IGitt.

##### CODING PHASE 3

* Submit the new backends to the main IGitt repo hosted on GitLab. 
* Add Fossil and Launchpad support to IGitt.

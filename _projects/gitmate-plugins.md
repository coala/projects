---
name: "Implement GitMate Plugins for coala"
desc: "GitMate.io helps by automating tasks on GitHub and GitLab. There are new
       plugins that are specific to coala that should be implemented. "
requirements:
  - "The participant should have at least one patch to 
     [GitMate](https://gitlab.com/gitmate/open-source/gitmate-2) accepted."
mentors:
  - nkprince007
  - sils
  - manu-chroma
initiatives:
  - GSoC
difficulty: medium
issues:
  - "https://github.com/coala/projects/issues/488"
  - "https://github.com/coala/projects/issues/487"
  - "https://github.com/coala/projects/issues/532"
  - "https://gitlab.com/gitmate/GitMate-2-ideas/issues/31"
  - "https://gitlab.com/gitmate/open-source/gitmate-2/issues/363"
status: completed
tags:
  - IGitt
  - GitMate
collaborating_projects:
  - coala
  - GitMate
  - IGitt
---

[GitMate.io](https://gitmate.io/) is an automation tool for developers. 
While it works well, there are a number of plugins that could automate tasks 
to save maintainer time (for example automatically close PRs from master).

[IGitt](https://igitt.gitmate.io/index.html) is a Git hoster abstraction 
for python. It's an extensive framework that will help implement GitMate's plugins.

To get started on GitMate, please follow 
[our guide](http://docs.gitmate.io/Developers/Newcomers_Guide/).

#### Plugin Ideas

* Reject Pull Requests from master. Should include 
  instructions on how to create a new branch, fix the master branch, and 
  resubmit a PR.
* Fixes vs Closes automated checking.
* A squash command to fix a PR with many messy commits. 
  Should link to the coala's git documentation for future reference
* Automatically mark PRs as WIP if GitMate's coala plugin finds defects.
  * Similarly mark PRs as WIP if CI tests fail.
* Auto-merger created to integrate rebase and ff plugins.

#### Configuration

Currently, it is difficult to apply the same rules to different repositories. 
GitMate should have some method of configuring multiple settings for many 
repositories. This configuration management must 
support all existing plugins and be capable of supporting new plugins as well.

#### Milestones

##### PREPARATION/BONDING
* GitMate should automatically reject PRs from master of forks.

##### CODING PHASE 1
* Fixes vs Closes automated checking should be implemented.
* Implement "recheck" command for cases where issues unrelated to the 
  PR cause tests to fail.
* Squash command implemented.
* Implement auto-assign issue based on commit mention.

#### CODING PHASE 2
* GitMate should mark PRs as WIP if GitMate's coala plugin finds defects.
* GitMate should mark PRs as WIP if CI tests fail.
* Configuration management should support plugins created for this project.

#### CODING PHASE 3
* Auto-merger created to integrate rebase and ff plugins.
* All plugins must have sufficient tests and documentation.
* Configuration management completed.

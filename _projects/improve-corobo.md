---
collaborating_projects:
  - coala
desc: "Improve plugins, introduce new plugins, setup new configuration method"
developers_involved: []
difficulty: medium
initiatives:
  - GSoC
issues:
  - "https://github.com/coala/projects/issues/688"
  - "https://github.com/coala/corobo/issues/311"
  - "https://github.com/coala/corobo/issues/480"
  - "https://github.com/coala/corobo/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Fconfig"
markdown: improve-corobo.md
mentors:
  - abhishalya
  - nvzard
name: "Improve corobo"
requirements:
  - "At least one patch to corobo should be accepted and merged."
  - "The proposal needs to contain a clear concept."
tags:
  - community
  - corobo
---

Repository: https://github.com/coala/corobo

corobo is a collection of [errbot](http://errbot.io) chatbot framework plugins.

The primary objective of this project is to improve corobo by solving as many
pending issues as possible along with introducing new plugins which will ensure
smooth functioning in the community.

It is also necessary to implement better configuration for the bot and
eliminate the use of environment variables which is hacky and a better
solution is possible.
Refer: https://github.com/coala/corobo/issues/574#issuecomment-401006387

#### Improvements which can be made to the existing plugins:

* Adapt LabHub plugin to use the most recent release of IGitt.
* Deprecate use of github3 and migrate plugins to use IGitt.
* Handle users with different GitHub and GitLab usernames.
* Delay loading GitHub org member list when not needed.
* Implement changes to handle other backends (Eg. Zulip).
* Currently, the use of DefaultConfigMixin is not the best solution for
  configuration. Implement a solution so that other orgs won't need the
* Mixin while configuring their plugins.
* Convince at least one other organization to use corobo in their chat room.
* Implement/Modify plugins to make handling of events like GCI/GSoC easy.

```
Eg:
>corobo set current event GCI
@/all, GCI has been started, so you can’t assign GCI related issues until the
event ends.
```

#### New plugin ideas:

* Plugin for corobo Usage Stats.
* Congratulate people who have their first commit merged.
* Listen for invite acceptance and provide more info based on that.
* Plugin for voting.
* All short and partial issues/PR URIs.
* Plugin to remove labels from issues.
* Announce unmerged PR closes on the most appropriate room.

```
Eg:
>corobo remove label area/gci from coala/corobo
@user, successfully removed area/gci label from 10 issues in coala/corobo
```

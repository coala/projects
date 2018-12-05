---
collaborating_projects:
  - coala
  - GitMate
  - IGitt
desc: "GitMate.io helps by automating tasks on GitHub and GitLab. It's time to add Jira!"
developers_involved: []
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/6"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/26"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/27"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/7"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/24"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/79"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/83"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/84"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/85"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/86"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/87"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/88"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/89"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/90"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/91"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/92"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/93"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/94"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/95"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/96"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/97"
markdown: gitmate_jira.md
mentors:
  - nkprince007
  - sils
  - fneu
name: "Implement Jira Support for GitMate"
requirements:
  - "The participant should have at least one patch to
     [IGitt](https://gitlab.com/gitmate/open-source/IGitt/) accepted."
  - "The participant should have at least one patch to
     [GitMate](https://gitlab.com/gitmate/open-source/gitmate-2) accepted."
  - "The participant should demonstrate that he can operate Jira from the Python shell in his proposal."
status: disabled
tags:
  - IGitt
  - Jira
---

[GitMate.io](https://gitmate.io/) is an automation tool for developers and it lacks
[Jira](https://www.atlassian.com/software/jira) support.
Many open source projects and companies use Jira.

For more information about Jira and their REST API, you can look at
[an existing Python implementation](https://github.com/pycontribs/jira#jira-python-library).

This project involves adding a Jira implementation to [IGitt](https://gitlab.com/gitmate/open-source/IGitt/)
as well as using that within [GitMate.io](https://gitmate.io/) (i.e. add webhooks and "signup with jira").

We look forward to hearing about your approach to making this happen. If you
want, you can define optional goals which could be little snippets of
automation targeted to Jira users.
(See also [our documentation about creating plugins](http://docs.gitmate.io/Developers/Writing_Plugin/).)

Please ask us for a Jira license to play around with at any time.

See also last year's project which was about adding GitLab:

- https://gitlab.com/coala/GSoC/GSoC-2017/milestones/1
- https://gitlab.com/coala/GSoC/GSoC-2017/milestones/30
- https://gitlab.com/coala/GSoC/GSoC-2017/milestones/31
- https://gitlab.com/coala/GSoC/GSoC-2017/milestones/32

To get started on GitMate, please follow [our guide](http://docs.gitmate.io/Developers/Newcomers_Guide/).

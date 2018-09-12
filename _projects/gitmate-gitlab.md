---
collaborating_projects:
  - coala
  - GitMate
  - IGitt
desc: "GitMate will support GitHub very soon with it's plugin system - GitLab and Bitbucket are not far away thanks to
       your help!"
developers_involved: []
difficulty: medium
status: completed
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
markdown: gitmate_gitlab.md
mentors:
  - sils
  - seblat
  - fneu
name: "Implement GitLab and Bitbucket Support for GitMate"
requirements:
  - "The participant should have one patch to [GitMate-2](https://gitlab.com/gitmate/gitmate-2) accepted."
  - "Django knowledge  is a big plus."
tags:
  - Web
  - CI
---
At coala we use GitMate as an automatic reviewing tool to reduce the time spent
with simple mistakes like trailing whitespaces and lines that are too long.
We also use it to gate merging pull requests before the commits are approved by
a maintainer.
All these features make dealing with the growing amount of pending pull requests
easier and allow us to focus in the important aspects of the code and skip the
manual scrutinizing of simple formal errors.
It essentially serves as a CI that comments issues directly in your Pull request
for you to fix.
The only problem with it is, that it only supports GitHub at the moment.

Most of coala's repositories are located at GitHub but some are with GitLab.
As GitMate and it's git wrapper IGitt will be released as open source, this is
the perfect opportunity to not only support all coala repositories but enable
GitMate support for all GitLab users.
To complete the big three git hosting providers, support for Bitbucket has to
be added. This way most developers using git should be able do benefit from
GitMate.

GitMate is a plugin system for handling events from a Git hosting platform like
GitHub.
Eventually it will support automatic code review via coala, just as
[the prototype](http://gitmate.io) does.
It is currently developed as a plugin platform so plugins can be reused
for any git hoster and just plugged into hooks, similar to the GitHub webhooks.

GitMate was originally written using flask microframework and was never
opensourced. A newer opensource version of GitMate, is being actively developed
at [gitmate-2](https://gitlab.com/gitmate/open-source/gitmate-2), with a
configurable plugin architecture. Some of GitMate's plugins are welcome
commenter for PRs, automatic issue labelling based on keywords, PR labelling
based on size, pending/WIP indicator for PRs, static code analysis per commit,
hot spot identifier based on Google's bugspot algorithm, etc.

The goals of this project are:

- Add [GitLab](https://gitlab.com/) and
  [Bitbucket](https://bitbucket.org/product) support for
  [IGitt](https://gitlab.com/gitmate/IGitt)
- Add GitLab and Bitbucket support for all existing hooks in GitMate
- Extend and rewrite gitmate with django web framework.

[Project on Google Summer of Code 2017 website](https://summerofcode.withgoogle.com/projects/#4985377849868288)

#### Milestones

##### [PREPARATION/BONDING](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/1)

- Migrate existing handlers for GitHub to gitmate-2 as plugins.

  Related issues:
  [code analysis](https://gitlab.com/coala/GSoC/GSoC-2017/issues/6),
  [issue labeller](https://gitlab.com/coala/GSoC/GSoC-2017/issues/26)
  and [bug spotter](https://gitlab.com/coala/GSoC/GSoC-2017/issues/27).

- Add unit tests and provide statement coverage for all existing plugins.

  Related issues: [unit-tests](https://gitlab.com/coala/GSoC/GSoC-2017/issues/7).

- A clear concept exists for which hooks need which GitLab API endpoints.

  Related issues: [GitLab doc](https://gitlab.com/coala/GSoC/GSoC-2017/issues/24).

- A clear concept exists for which objects in IGitt need to be extended or
  written.

##### [CODING PHASE 1](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/30)

- GitLab support for IGitt is done, documented and fully tested.

  Related issues: [IGitt GitLab](https://gitlab.com/coala/GSoC/GSoC-2017/issues/79)
  and [IGitt GitLab tests](https://gitlab.com/coala/GSoC/GSoC-2017/issues/83).

- Extend webhook responders in gitmate-2 for GitLab and test them.

  Related issues:
  [gitmate-2 GitLab](https://gitlab.com/coala/GSoC/GSoC-2017/issues/84) and
  [gitmate-2 GitLab tests, docs](https://gitlab.com/coala/GSoC/GSoC-2017/issues/85).

- A clear concept exists for which hooks need which Bitbucket API endpoints.

  Related issues: [Bitbucket doc](https://gitlab.com/coala/GSoC/GSoC-2017/issues/86)

- A clear concept exists for which objects in IGitt need to be extended or
  written.


##### [CODING PHASE 2](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/31)

- Bitbucket support for IGitt is done, documented and fully tested.

  Related issues:
  [IGitt Bitbucket](https://gitlab.com/coala/GSoC/GSoC-2017/issues/87) and
  [IGitt Bitbucket tests](https://gitlab.com/coala/GSoC/GSoC-2017/issues/88).

- Extend webhook responders in gitmate-2 for GitLab and test them.

  Related issues:
  [gitmate-2 Bitbucket](https://gitlab.com/coala/GSoC/GSoC-2017/issues/89) and
  [gitmate-2 Bitbucket tests, docs](https://gitlab.com/coala/GSoC/GSoC-2017/issues/90).

- If the API was extended, the other supported platforms on IGitt serve the new
  features as well.

- Discuss new ideas on creating further plugins for gitmate-2 and create mocks
  for them.

  Related issues: [New plugins](https://gitlab.com/coala/GSoC/GSoC-2017/issues/91)
  and [mocks](https://gitlab.com/coala/GSoC/GSoC-2017/issues/92).

##### [CODING PHASE 3](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/32)

- GitHub, GitLab and Bitbucket support exists for all hooks on GitMate.

  Related issues:
  [multi platform](https://gitlab.com/coala/GSoC/GSoC-2017/issues/93)

- Optimize and refactor the code so far.

  Related issues:
  [code optimization](https://gitlab.com/coala/GSoC/GSoC-2017/issues/97)

- Realtime testing and bug squashing.

  Related issues:
  [realtime tests](https://gitlab.com/coala/GSoC/GSoC-2017/issues/95) and
  [bug fixes](https://gitlab.com/coala/GSoC/GSoC-2017/issues/96)

- Full documentation on gitmate-2 and IGitt.

  Related issues: [Documentation](https://gitlab.com/coala/GSoC/GSoC-2017/issues/94)

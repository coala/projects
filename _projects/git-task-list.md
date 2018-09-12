---
collaborating_projects:
  - gsoc-prep-tasks
desc: "List open issues and pull request from various issue tracker of a specified organization."
difficulty: medium
initiatives:
  - GSoC
issues:
  - https://github.com/coala/coala/issues/4080
markdown: git-task-list.md
mentors:
  - blazeu
  - yukiisbored
  - yashovardhanagrawal
name: "Git Task List"
requirements:
  - "The applicant should have at least one patch merged to any of the coala repositories."
  - "Familiarity with Git, GitHub API, Phabricator API, and GitLab API"
  - "Familiarity with EmberJS and GitHub Pages"
status:
  - in_progress
  - disabled
tags:
  - community
  - web
---
The basic idea is an extended version of [GSOC Task List](https://github.com/summerofcode/gsoc-prep-tasks).

In this project, tasks means open issues and unmerged pull request coming from
GSOC open source projects.

[GSOC prep task](https://coala.github.io/git-task-list/) is an issue
finding tools that is (currently) integrated only with GitHub. It helps filter
out the GitHub issues and only show the issues that are newcomer friendly and
coming from limited GSoC organization. It limits the organization because
different organization use different kind of issue tracking such as Phabricator
and GitLab.

**Git Task List** is conceptually the same as [GSOC prep task](https://coala.github.io/git-task-list/).
Git Task List target a broader task type which include pull request review as
the task. The goal of this project is to help developer to keep contributing to
open source project by providing a sets of tasks that has been filtered using
predefined keywords.

In coala, this project will help sharing the tasks of reviewing a pull request
on a project accross GitHub and GitLab. It will help fix the problem where
developer spend too much time finding PR that haven’t been reviewed. This
projects aims to getting more developer doing reviews works and sharing reviews
workload, by providing an easy way to find issues that has not been reviewed
both on http://github.com/coala and http://gitlab.com/coala.

This will also help engage the developer to keep contributing to a project where
they can’t find any issue that they can fix or keep the newcomer issue for new
comer as learning path and developer with more experience can contribute by
reviewing newcomer’s work PR.

The goal of this projects is a static-site web page where the user
can find Issues and Pull Request that haven’t been reviewed. User can select
projects in Open Source hosting services like GitHub or GitLab. They also have
the ability to select prefered programming language, tags, owner of the pull
requests, and other metadata that is provided by the web services
(GitHub/GitLab).

Because the concept of this project, is the same as [GSOC prep task](https://coala.github.io/git-task-list/)
, it can be used as the starting point of this project.

#### Known Issue Tracker Usage In GSOC Organization

Issue Tracker | Usage
--- | ---
GitHub | 16
Trac | 7
Atlassian Jira | 7
GitLab | 4
phabricator | 4
BugZilla | 4
Usabilla | 2
Redmine | 2

Because of the difficulty to support all of the known issue tracker in the range
of GSOC timeline. This project will provide support for GitHub, GitLab, and
Phabricator.

#### Identifying Task Of A Specific Organization

For a hosted issue tracker (like GitHub.com & GitLab.com) it is already
documented and we can confidently know what resource are posible and what is not
. The process of adding support for a new organization is posible using an
external data source such as [Wikidata](http://wikidata.org). The app can fetch
for list of organization that use GitHub / GitLab via [Qikidata Query API](https://query.wikidata.org/)

The case is different for a self hosted Organization. The accessibility is
different. For organization that use Phabricator as issue tracker, the process
of adding support to it will be manually for each organization to make sure that
the API is accessible.

#### Milestone

##### Phase 1
- Use GraphQL (GitHub).
- Add support to all GSOC 2018 organizations that are using GitHub as an issue
  tracker.
- Add GitLab.com support.
  - Search issues from a specified project.

##### Phase 2
- GitHub & GitLab.
  - Search open MR/PR.
  - Browse MR/PR by authors.
- Add support to list Issues and MR from http://gitlab.com/coala.
- Add support to all GSOC 2018 organizations that are using GitLab.com as an
  issue tracker.

##### Phase 3
- Browse PR by authors. ([coala/git-task-list#20](https://github.com/coala/git-task-list/issues/20))
- Add support GitLab CE.
- Add Phabricator support.
- Add support to some GSOC 2018 organizations that are using Phabricator and
  opened their api for public use.

---
categories:
  - GSoC
  - 2018
  - StatusReport
date: 2018-08-12
report_year: '2018'
student: Vamshi Krishna Bommerla
organisation: coala
organisation_link: https://coala.io
project: Implement GitMate automations and plugins for coala
project_link: https://summerofcode.withgoogle.com/projects/#5344316227059712
tarball: https://rawgit.com/Vamshi99/GSoCReport/master/patches.tar.gz
sha256sum: 406c470fd6db57b6eeb6c834ce96983adb44235bf3f006124e7b94da039dd17f
mentors: >
  [Naveen Kumar Sangi](https://github.com/nkprince007) &
  [Lasse Schuirmann](https://github.com/sils) &
  [Manvendra Singh](https://github.com/manu-chroma) &
  [Hizkia Felix](https://github.com/HizkiFW)
phase:
  - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/4
  - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/5
  - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/6
  - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/7
bio: >
  I am third year student of B.Tech Computer Science Engineering at Amrita
  Vishwa Vidyapeetham, Amritapuri, Kerala. I participated in GSoC and worked
  with [coala](https://coala.io) and [GitMate](https://gitmate.io) to implement
  GitMate plugins and automation which help coala development workflow. I
  worked on adding plugins which auto-reject, auto-review, auto-assign PRs and
  notify merge conflicts in a PR. I also implemented a assign request plugin to
  assign issues to a user if he/she satisfies defined eligibilty conditions.
social:
  - GitHub:
      - username: Vamshi99
      - link: https://github.com/Vamshi99
  - GitLab:
      - username: Vamshi99
      - link: https://gitlab.com/Vamshi99
  - Gitter:
      - username: Vamshi99
      - link: https://gitter.im/Vamshi99
  - OpenHub:
      - username: Vamshi99
      - link: https://www.openhub.net/accounts/Vamshi99
email: bommvams72@gmail.com
blog: https://vamshi99.blogspot.com
activity:
  - 1:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/commit/a4b2ab35243dc0b6aebc27986d33336d3bf80a64
      - details: >
          cEP-0024.md: Add cEP for GitMate Plugins
  - 2:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/225a88e695794535f50996b4997466b72e9d47ea
      - details: >
          Add gitmate pr rejector plugin
  - 3:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/847afeb5460ce2866ecb2cc38593c0c486aa0271
      - details: >
          Commit.py: Add mentioned_issues, closes_issues propeties
  - 4:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/05062b4f9758068291445f87469e4d9d2a4f9707
      - details: >
          Upgrade IGitt
  - 5:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/3d2164d71722e55a6432a8911149c64897851564
      - details: >
          Add Fixes vs Closes automated checking plugin
  - 6:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/4a044453f5d34c9f1b8227b7f57b8a0fd0caba57
      - details: >
          MergeRequest.py: Add fix_issues, close_issues, resolve_issues properties
  - 7:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/ffd554de617d619809f11b0284eaa032c2d9df83
      - details: >
          Auto assign issue based on commit mention in PR
  - 8:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/0eec2ec32e7afd7d017cad4c67a741c688e1bfc4
      - details: >
          apps.py: Add helper function to fetch plugin settings
  - 9:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/e2224d7d1f61a34065f741535e53e676dc51ff4b
      - details: >
          Add Team class
  - 10:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/f9d08c9a88c0b958a4c2ec5eb813fcd124b5300e
      - details: >
          Mark PR as WIP if coala plugin detects errors
  - 11:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/c4abdd4f9367af8ce73f39f525383def68de6b62
      - details: >
          MergeRequest: Add mergeable property
  - 12:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/db76142d3ecb1e6cd9cd10885ae2475cb07c4d3d
      - details: >
          Notify merge conflicts in a PR
  - 13:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/ad5480c9b0a124d98020a4ad3fd3caf20fa1e321
      - details: >
          pr_rejector: Support regex in branch names
  - 14:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/94735ff0f1024d6f293db90516087d8e4d2c353d
      - details: >
          Organization: Add issues property and filter_issues method
  - 15:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/fff0d568f1f2731c5055995ff19bbc93be842d5f
      - details: >
          Repository: Filter issues by label, assignee
  - 16:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/c025311167b07da5e825433a4d4d5e376adfed62
      - details: >
          GitLabUser: Fetch user id from username
  - 17:
      - repo: mr-rebaser
      - link: https://gitlab.com/gitmate/open-source/mr-rebaser/commit/fad8305823a1058e93cd2397b5239a882b66c3f9
      - details: >
          Add squash pull request command
  - 18:
      - repo: mr-rebaser
      - link: https://gitlab.com/gitmate/open-source/mr-rebaser/commit/3124c07ca5cd46acf985dc25fe22889e5a4744d0
      - details: >
          Dockerfile: Install requirements
  - 19:
      - repo: mr-rebaser
      - link: https://gitlab.com/gitmate/open-source/mr-rebaser/commit/68360f3f0fac686907c7eb44c1a70bfa9e276d42
      - details: >
          run.py: Update squash command
  - 20:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/dda98a8ab67d01376d3199bb82260838cebab7b0
      - details: >
          rebaser: Add squash command
  - 21:
      - repo: IGitt
      - link: https://gitlab.com/gitmate/open-source/IGitt/commit/f4ec3c602745bcf08405479a684876cc1080a21f
      - details: >
          Issue: Add available_assignees property
  - 22:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/a00c0265ff4a3da2eca0a1a96cb84ced033a5cd3
      - details: >
          Add assign and unassign request command
  - 23:
      - repo: gitmate-2
      - link: https://gitlab.com/gitmate/open-source/gitmate-2/commit/4f14c3f1acfedb89489fd6645a05f14ac73a2b1d
      - details: >
          Update requirements.txt
---

### Implement GitMate automations and plugins for coala

#### Work Done

1. New Plugins added in GitMate-2:
   1. Auto-assign issue based on commit mention in a Pull Request.
   2. Notify merge conflicts in a Pull Request.
   3. Auto review of Fixes vs closes keywords in a Pull request.
   4. Auto reject pull requests opened on specified branches.
   5. Squash commits in a Pull Request.
   6. Request assignment to an issue.
2. IGitt enhancements:
   1. Filter issues by `label`, `assignee` in a repository.
   2. Fetch `user id` from `username` in `GitLabUser`.
   3. Added `issues` property and `filter_issues` method in `Organization`
      class.
   4. Added `fix_issues`, `close_issues`, `resolve_issues` properties in
      `PullRequest`.

#### Challenges

I had difficulties with implementing GitLab API in IGitt. GitHub has teams and
GitLab API doesn't support teams, so I had to re-design assign request plugin
to work without teams. Similarly, GitLab API doesn't have any webhook for pull
request review event, so I couldn't implement a feature in GitMate
which labels pull request as per review done by maintainer.

#### Work to be done

##### [Mark review labels as per the review](https://gitlab.com/gitmate/open-source/gitmate-2/issues/296)

To implement `Mark review labels as per the review` feature in GitMate, a
webhook event is needed which can detect a pull request review. In GitHub,
there is a web hook event called [PullRequestReviewEvent](https://developer.github.com/v3/activity/events/types/#pullrequestreviewevent)
to know if a PR is reviewed. In GitLab, there are no webhook
[events](https://docs.gitlab.com/ee/api/events.html) that can be detected as a
pull request review. If PullRequestEvent webhook needs to be added in IGitt,
it needs to support GitLab implementation also. So, this feature couldn't be
implemented as of now.

##### [Merge all pull request review plugins](https://gitlab.com/gitmate/open-source/gitmate-2/issues/242)

Initially, the idea was to merge all review plugins like ack, approver,
auto label pending review or WIP. But, merging different plugins just because
they clear review queue, was a bad idea. Consider code analysis plugin,
which marks work in progress if it detects an error, but it doesn't make sense
if it is merged with review plugin. So, I thought of declaring the review
labels settings in a new plugin or introduce something like global settings
which could be reused by any plugin if needed. There would be an option in
required plugins if they want to enable handling review labels in a pull
request. There was a delay in implementing this because I couldn't find a
solution for sharing settings between different plugins.

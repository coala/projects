---
categories:
  - GSoC
  - 2019
  - StatusReport
date: 2019-08-24
student: Bhushan Khanale
organisation: coala
organisation_link: https://coala.io
project: Improve Generic Bear Quality
project_link: https://summerofcode.withgoogle.com/projects/#4866569388163072
tarball: https://github.com/bkhanale/GSoCReport/raw/master/ProjectPatches.tar.gz
sha256sum: da098e0c89e14ba21a046e73eb56117fc44500fe3ce92cf00f0cb1d2cab71199
mentors: >
  [Sangam Kumar](https://github.com/sangamcse),
  [Abhinav Kaushlya](https://github.com/abhishalya)
phase:
  - Bonding : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/2
  - Phase 1 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/3
  - Phase 2 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/4
  - Phase 3 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/5
bio: >
  I'm a final year student of Computer Engineering at International Institute
  of Information Technology, Bhubaneswar. I worked on [coala](https://coala.io)
  project during my summer on improving the generic bear quality. I implemented
  few new bears providing more usability of coala. I also worked on coala's
  package manager giving them few more features to work with.
social:
  - GitHub:
      - username: bkhanale
      - link: https://github.com/bkhanale
  - GitLab:
      - username: bkhanale
      - link: https://gitlab.com/bkhanale
  - Gitter:
      - username: bkhanale
      - link: https://gitter.im/bkhanale
  - Openhub:
      - username: bkhanale
      - link: https://www.openhub.net/accounts/bkhanale
email: bkhanale@gmail.com
blog: https://medium.com/@bkhanale
activity:
  - 1:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/pull/184
      - details: >
         cEP-0031: Improve Generic Bear Quality
  - 2:
      - repo: coala
      - link: https://github.com/coala/coala/pull/6026
      - details: >
         Add `require_files` settings
  - 3:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2912
      - details: >
         bears/general: Add FileModeBear
  - 4:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2928
      - details: >
         bears/general: Add OutdatedDependencyBear
  - 5:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2934
      - details: >
         bears/general: Add RegexLintBear
  - 6:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2935
      - details: >
         bears/python: Add RequirementsCheckBear
  - 7:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/commit/f9aa8c3bf94b0be7d9a80de0926d7b13382dee09
      - details: >
         IndentationBear: Ignore doc comments
  - 8:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/merge_requests/170
      - details: >
         Add `get_latest_version` for PipRequirement and NpmRequirement
---

### Improve Generic Bear Quality

#### Work Done

1. coala now has new bears (yet to be merged) namely `FileModeBear`,
`RequirementsCheckBear`, `OutdatedDependencyBear` and `RegexLintBear`.

2. coala is also set to have two new settings `require_files_not_empty` and
`require_files_for_each_glob` which are responsible to check for the `files`
setting to not evaluate empty and to require at least one file match for each
glob in `files`.

3. coala's package manager has new function `get_latest_version` (currently
only for `PipRequirement` and `NpmRequirement` classes) to fetch the latest
version for the given package.

4. `IndentationBear` now support new setting to ignore docstrings.

#### Challenges

For me the most challenging part was to design the approaches for the bears.
Some of the bears like `OutdatedDependencyBear` and `RequirementsCheckBear`
were much difficult to design. The `FileModeBear` was another challenge given
that it had to work on both Windows and Linux platforms. The process of
designing the approach and then implementing it with a full coverage was
probably the most challenging and interesting part of my project.

#### Work to be done

1. MarkdownBear currently doesn't emit the issues with the patches and it
reduces the usability of the bear. Currently, there is stable fix for this issue
due to the architecture of remark-lint tool. Although, in future this might
change and the bear would also need to be updated.

2. The OutdatedDependencyBear currently doesn't support the npm requirements and
this needs a further development in the solution already present for pip
requirement type.

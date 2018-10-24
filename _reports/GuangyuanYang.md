---
categories:
  - GSoC
  - 2018
  - StatusReport
date: 2018-08-14
student: Guangyuan Yang
organisation: coala
organisation_link: https://coala.io
project: Go Bears on BSD
project_link: https://summerofcode.withgoogle.com/projects/#4521151787696128
tarball: https://github.com/yzgyyang/gsoc-reports/raw/master/gsoc18/GuangyuanYang-coala-gsoc18.tar.gz
sha256sum: adada78166b16d6c6c8e1107d326b3f5fb1505fa59d8f18e492b9ffa1a6f0f09
mentors: >
  [Muhammad Kaisar Arkhan](https://github.com/yukiisbored),
  [Andrey Safonov](https://github.com/xferra)
phase:
  - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/74
  - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/64
  - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/67
  - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/73
bio: >
  I am a sophomore studying Mathematics and Computer Science at the University
  of Waterloo. I participated in GSoC 2018 and worked with
  [coala](https://coala.io) to improve linter dependency management, the goal
  of which in the duration of this year's GSoC is to have Go Linters installed
  automatically on bare-metal BSD systems, with a post-GSoC goal of supporting
  more platforms and more kinds of dependencies.

social:
  - GitHub:
      - username: yzgyyang
      - link: https://github.com/yzgyyang
  - GitLab:
      - username: yzgyyang
      - link: https://gitlab.com/yzgyyang
  - Gitter:
      - username: yzgyyang
      - link: https://gitter.im/yzgyyang
  - OpenHub:
      - username: yzgyyang
      - link: https://www.openhub.net/accounts/yzgyyang
email: yzgyyang@gmail.com
blog: https://charlieyang.me/tags/#gsoc18
activity:

  - 1:
      - repo: projects
      - link: https://github.com/coala/projects/commit/e26976aa8da0379c39a4d294ee6cb6e213db1668
      - details: >
         meta_review.md: go_bears_on_bsd.md: Add Go on BSD project

  - 2:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/ed140c6a1d76520e38ed7d2a2ba003f0735cb000
      - details: >
         .gitlab-ci.yml: Fix OpenSUSE CI build breakages

  - 3:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/94507b56ad0bf101fe1a8fbc7e9d502dbc1c3ea7
      - details: >
         DistributionRequirement.py: Add FreeBSD pkg

  - 4:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/fe065becef284b84f2193e36ae417e82e1da7eff
      - details: >
         GoRequirement.py: Add Go packages

  - 5:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/77c50517b0a47f772950bf13bff5d665389ecb52
      - details: >
         .ci/common.sh: move CI common setup into a script

  - 6:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/3c18d1504b6f6d282fa15ae7058829aa7369aed7
      - details: >
         GoMetaLinterRequirement.py: Add GoMetaLinterPM

  - 7:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/dd1413c9057d7f75db0e1856cfba4a3894400a35
      - details: >
         PkgRequirement.py: Add pkg for PlatformRequirement

  - 8:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/e8ef04e33b5f00f6d751a5450e90d795a778c236
      - details: >
         .gitlab-ci.yml: Add FreeBSD CI configuration

  - 9:
      - repo: coala-utils
      - link: https://gitlab.com/coala/coala-utils/commit/f0d74e8167edef7b69c3ec6ef4a8f0b3bdb13844
      - details: >
         Question.py: Add function to ask yes/no questions

  - 10:
      - repo: coala-utils
      - link: https://gitlab.com/coala/coala-utils/commit/0a1000d2601f7a53b2034869cffead422d6efc1a
      - details: >
         Question.py: Avoid creating objects in arg default

  - 11:
      - repo: [personal gist]
      - link: https://gist.github.com/yzgyyang/13ebb46a5c90ac624b5c6eb43deedc0d/9e5591f526917a36fcd3390d4a52901a5af1911f
      - details: >
         coala Bootstrap Script (Experimental)

  - 12:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/3816e3d01cd2418941f23001b95027511ac58e95
      - details: >
         .gitlab-ci.yml: Move php-pear into common packages

  - 13:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/ab1ee3d40d8c3f5b64055d9520e0b8bbdd88b604
      - details: >
         tests/: Use sys.executable for testing executables

  - 14:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/c94cd416ab03c5838edd7ff0099350233df9eac2
      - details: >
         .gitlab-ci.yml: Pin ghc version to fix build

  - 15:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/ec7e9fd0a855df299596c72a73bdefd1b7bc1202
      - details: >
         .gitlab-ci.yml: Avoid copying exec into /usr/bin

  - 16:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/commit/c9a42579caf278faf4849ca00e9f64f3a58b960b
      - details: >
         .gitlab-ci.yml: Use pip as a Python module

  - 17:
      - repo: dependency_management
      - link: https://gitlab.com/coala/package_manager/merge_requests/152/diffs?commit_id=29306af9e0aadd5117e764496828171c3250b380
      - details: >
         [Merge Request] Demonstration of recursive installation

---

### Go Bears on BSD

#### Work Done

Support for FreeBSD and Go packages have been added to
[`dependency_management`](https://gitlab.com/coala/package_manager), the
working repo. The GitLab-based Continuous Integration (CI) config has been
enhanced. An official FreeBSD CI server is up, and all supported tests are now
also running on BSD.

`dependency_management` tool is now capable of recursively resolving
dependencies down to the system level, with some implementations still under
investigation/review. Based on this feature, I implemented a
[script](https://gist.github.com/yzgyyang/13ebb46a5c90ac624b5c6eb43deedc0d) to
demonstrate the ability of bootstrapping coala Go bears on a bare-metal FreeBSD
system
([Screen record for the demo](https://asciinema.org/a/0poVbHE7lqehV4islFo6cptjb)),
and it can be expanded to support multiple platforms.

Further design and implementation issues have been identified and logged.

Aside from the project, I got myself involved in the community by reporting and
solving issues across the coala and coala-bears repo and also in upstream
projects. I also did code review and helped other newcomers get onboard.

#### Challenges

Most tasks went smoothly. The FreeBSD CI part is challenging, since such
infrastructure doesn't exist before, and thus it takes a lot of time to do
experiments and testing to make things right.

The end goal of this project is open-ended while the timeframe is limited,
which I found to be the most challenging part of the project. Aside from the
actually coding part, I spent much time and energy exploring different package
management tools, and communicating with my mentors and maintainers of related
internal projects, in order to find the best design choices.

#### Work to be done

The FreeBSD CI could be improved by adding a new runner
[upstream](https://gitlab.com/gitlab-org/gitlab-runner/issues/3358).

Support for more BSDs and more bears could be implemented, and more design
documents should be logged.

The concept of recursively installation on Unix-like platforms is proved, but
the actual inplementation of such feature requires more discussion about the
design in a longer timeframe. I plan to continue following up on this in the
future.

Resolving dependencies using Repology metadata is a nice addition to the
project. It was planned to be implemented in accordance with the
[Automation of Dependency Management using Repology](https://projects.coala.io/#/projects?project=automation_of_dependency_management_using_repology&lang=en)
project, but this part seems to be stale at the moment.

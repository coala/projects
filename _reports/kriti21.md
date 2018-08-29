---
categories:
  - GSoC
  - 2018
  - StatusReport
report_year: 2018
date: 2018-08-13
student: Kriti Rohilla
organisation: coala
organisation_link: https://coala.io
project: Git Commit Content Inspection
project_link: https://summerofcode.withgoogle.com/projects/#5636421247827968
tarball: https://raw.githubusercontent.com/kriti21/GSoC-2018-Report/master/ProjectPatches.tar.gz
sha256sum: 3137a69affc6b9bc9d5a04b068b5e3deaa63d0393fcefdea5d4338cb81d754f2
mentors: >
  [Saurav Singh](https://github.com/damngamerz),
  [Rafid Aslam](https://github.com/refeed),
  [Guyzmo](https://github.com/guyzmo)
phase:
  - Bonding: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/9
  - Phase 1: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/36
  - Phase 2: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/41
  - Phase 3: https://gitlab.com/coala/GSoC/GSoC-2018/milestones/42
bio: >
  I am in my pre-final year at University Institute of Engineering and Technology,
  Panjab University. As part of my GSoC 2018 project, I worked on VCS related bears
  in [coala-bears](https://github.com/coala/coala-bears/). The main task was to
  detect special git commits like `git revert`, `git merge` and commits that skip
  CI build and inspect such commits to see whether they meet the requirements of the
  project.
social:
  - GitHub:
      - username: kriti21
      - link: https://github.com/kriti21
  - GitLab:
      - username: kriti21
      - link: https://gitlab.com/kriti21
  - Gitter:
      - username: kriti21
      - link: https://gitter.im/kriti21
  - Openhub:
      - username: kriti21
      - link: https://www.openhub.net/accounts/kriti21
email: kritirohilla567@gmail.com
blog: https://kriti21.github.io/
activity:
  - 1:
      - repo: projects
      - link: https://github.com/coala/projects/pull/562/commits/52c11a2c85087e705b2a78197aed754d47221174
      - details: >
         commit-content-checks.md: Add issue link to project description.
  - 2:
      - repo: projects
      - link: https://github.com/coala/projects/pull/599/commits/054181ebb9e45df7ccb77f151cb5a42e53b86670
      - details: >
         igitt_scm_support.md: Add a new project named IGitt scm support.
  - 3:
      - repo: cEPs
      - link: https://github.com/coala/cEPs/pull/114/commits/ea25f09ae08b4bc7423453460b14cb16eb3a0db6
      - details: > 
         cEP-0016.md: Add cEP for the project.
  - 4:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2484/commits/9332d3d1e63f6098ae4e39e53bbf8679dce4c9a3
      - details: >
         CommitBear.py: Fix regex for issue id in CommitBear.
  - 5:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2501/commits/ef0d8e04b55755eccb68219dd61eb28eb0011d83
      - details: >
         GitCommitBear.py: Add settings to ignore GitHub PR merge commits.
  - 6:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2543/commits/582e38330d03c696bc7476e102acaa833c9b33af
      - details: >
         VCSCommitMetadataBear.py: Add new metabear to analyze git commits.
  - 7:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2576/commits/b51144b2bcc90bbf8a147c6a9e85cc009869bccb
      - details: >
         generate_package.py: Replace touch function with library function Path.
  - 8:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2600/commits/58b2f0743d4aed1fb6eea0ea38d195e51851e9d8
      - details: >
         GitLinearCommitBear.py: Add new bear to inspect `git merge` commits.
  - 9:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2523/commits/c7952afc9b26cb011c154cc303b3aed32ff68211
      - details: >
         CISkipInspectBear.py: Add bear to inspect commits that disable CI builds.
  - 10:
      - repo: coala-bears
      - link: https://github.com/coala/coala-bears/pull/2652/commits/8350ca0f90157e7db41934bca3658f629eecc20f
      - details: >
         GitRevertInspectBear.py: Add new bear to inspect `git revert` commits.
---

### Git Commit Content Inspection

#### Work Done

1. A metadata bear called `VCSCommitMetadataBear` has been implemented which
analyzes the commit at HEAD and returns all relevant information about it
as `HiddenResult` to the bear using it.

2. GitHub PR merge commits were responsible for Travis CI build failure. Settings
have been included in `GitCommitBear` to detect such commits and ignore them.
The bear now performs checks on the parent commit instead.

3. `GitLinearCommitBear` has been implemented to detect `git merge` commits
and inform the author to perform `git rebase` instead in order to keep the
history clean.

4. Commits that diable CI builds are inspected with `CISkipInspectBear`. Files
that cannot disable CI build can be controlled by specifying filename patterns
in `.coafile`.

5. `git revert` commit must be exactly the revert of the commit it reverts. For
this inspection, `GitRevertInspectBear` has been implemented.

#### Challenges

The major challenge I faced when doing this project was to come up with a proper
design since there were some bears already available for handling git commits.
So it required making a perfect balance between using the available code
while still keeping the new bears independent. When design was clear on paper,
the next challenge was to actually implement it. I had never been practically
exposed to object oriented programming in such great detail before so it was
great to convert all the theoretical knowledge into practical use.

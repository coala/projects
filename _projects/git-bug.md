---
name: "git-bug"
desc: "Improve git-bug"
requirements:
 - "The student should have compiled and started using git-bug."
 - "The student should have worked on a small feature/improvement/bugfix
     for git-bug."
difficulty: "medium"
issues:
 - "https://github.com/coala/projects/issues/648"
mentors:
 - MichaelMure
initiatives:
 - GSoC
status: completed
tags:
 - git
 - bugtracker
 - github
collaborating_projects:
 - coala
---

git-bug is a distributed bug-tracker embedded in git. It allows contributor
to a project to browse, edit and collaborate on issues, including offline,
with no more than the normal git remote repository that you are already using
for the source code of your project.

git-bug provide a set of command line tools, an interactive terminal UI and a
rich web UI. git-bug also currently provide a Github incremental importer to
interact with regular bug trackers.

Multiple projects are possible:
- a Github exporter (https://github.com/MichaelMure/git-bug/issues/56)
- an importer/exporter for Gitlab / Launchpad / your favorite bug tracker
- improving the webUI to make it matche the features of the terminal UI
- adding more features in git-bug in general
  (see https://github.com/MichaelMure/git-bug/issues)
- any project you would like to take care of ;-)

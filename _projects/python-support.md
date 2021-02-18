---
collaborating_projects:
  - coala
name: "Support for newer Python versions"
desc: "coala should be able to support all major Python 3 versions"
markdown: python-support.md
requirements:
 - "The applicant must understand how results and actions work in coala."
 - "The proposal needs to contain a clear concept."
difficulty: "high"
mentors:
 - abhishalya
 - jayvdb
initiatives:
 - GSoC
tags:
 - core
---

Currently, coala only supports Python 3 versions upto 3.6. This is a very
old release and there are reasons why coala was not able to progress to the
newer versions so quickly. The major blocker to this is the dependency
management which has some core issues which are to be solved to improve
the support.

There are a lot of dependencies which do not have support for all Python 3
versions and to fix this issue we should do one of the two things:
* Drop the package and fix the issue from the coala side.
* Find a workaround with the existing package and patch things on coala.

Due to recent changes in GSoC with the program being only for 10 weeks
the coding phases below are adjusted accordingly.

#### Milestones

##### COMMUNITY BONDING

* Student should have a clear plan and conceptual work must be finished.
* The applicant should know how to work with the community.

##### CODING PHASE 1

* Changes to the dependency management must be finished including writing tests
and documentation.

##### CODING PHASE 2

* The coala core should be revamped so they allow the above mentioned benefits.
* Refactoring of the existing CI/CD setup to verify builds on the newly supported
Python versions.

---
collaborating_projects:
  - repology
  - coala
desc: "Improve coala's dependency installation and management, by automating using data from repology."
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://gitlab.com/coala/package_manager/issues/159"
  - "https://github.com/coala/coala/issues/4605"
  - "https://github.com/repology/repology/issues/512"
markdown: automate-dependency-repology.md
mentors:
  - waldyrious
  - fexpr
  - underyx
name: "Automation of Dependency Management using Repology"
requirements:
  - "At least one patch to the coala core should be accepted and merged."
  - "The proposal needs to show some familiarity with coala's dependency management implementation."
status: disabled
tags:
  - Automation
  - Installation
  - Dependency
  - Web
---

**coala-bears** are of two types, Native Bears which implement all the buisness
logic themselves and Linter Bears which wrap existing linters and checkers.

These Linter Bears have dependencies which need to be installed before they can
be executed. In this project, you're to improve on the current strategies of
installing these dependencies.

Repology is a packaging hub. It analyzes a lot of package repositories and
other sources, comparing packages versions across them and gatherinng relevant
information. It shows you in which repositories a given project is packaged, 
which version is the latest and which needs updating, who maintains the 
package, and other related information. The student has to use this information
and implement improvments to the automated management of dependencies.

The scope of a complete soultion is too large. The student should come up with
suitable scope and make a proposal accordingly.

#### Milestones

##### PREPARATION/BONDING

* The applicant has identified most of the related problems.
* The applicant has came up with a complete workflow of how dependencies would
  be managed across multiple operating systems and package managers.
* The Student has at least one Linter Bear connected with Repology ID.

##### CODING PHASE 1

* All the existing LinterBears and Package Manager classes are connected with their respective Repology IDs.
* Documentation added on how to do the same for new Linter Bears to 
  [Writing Linter Bears](https://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html)

##### CODING PHASE 2

* The applicant has implemented a system for fetching data from Repology.
* The applicant has wrote sufficent tests and documentation for the same.
* At least part of the scope has been implemented and tested.

##### CODING PHASE 3

* The proposed scope is completly implemented and tested.

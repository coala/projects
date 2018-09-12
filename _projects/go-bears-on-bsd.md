---
collaborating_projects:
  - coala
desc: "Explore improvements to coala's dependency management through having Go
       Linters installed in *BSD systems automatically."
difficulty: medium
initiatives:
  - GSoC
issues:
  - "https://gitlab.com/coala/package_manager/issues/149"
  - "https://github.com/coala/coala-bears/issues/2481"
markdown: go-bears-on-bsd.md
mentors:
  - xferra
  - yukiisbored
name: "Linter Dependency Management from a Bare-Metal System"
requirements:
  - "At least one patch to the coala core should be accepted and merged."
  - "The proposal needs to show familiarity with coala's dependency management implementation."
status: disabled
tags:
  - Automation
  - Installation
  - Dependency
---

`coala-bears` are of two types, Native Bears which implement all the business
logic themselves and Linter Bears which wrap existing linters and checkers.
Dependencies of bears are mostly language runtimes, language-specific packages
(e.g. python:nltk) or command line tools (e.g. git). Both Native Bears and
Linter Bears have dependencies which need to be installed before they can be
executed.

`dependency_management` aims to provide Python APIs for dependency management on
various languages and different systems. It is used extensively by coala,
however, it lacks most of the key implementation and documentation in its
current state.

coala now has [several bears written in
Go](https://github.com/coala/coala-bears/search?q=GoRequirement), [7 of
which](https://github.com/coala/coala-bears/blob/master/bears/go/) are for
validating Go files. They need specific versions of Go and some externally
supplied packages, and currently Go linter bears just assume they are all in
place and work. Go language dependencies are currently managed unversioned in
coala-bears. There is no official way provided for versioning, and though there
are other commonly used mechanisms for installing specific versions of Go repos,
a lot more investigation is needed.

The end goal is to be able to bootstrap and recursively install all dependencies
on any systems without anything installed other than a base system, but the
scope of a complete solution is too large. A proposal has been made with
suitable scope, which is to automate the installation of Go linter bears onto
bare-metal BSDs.

Features will mainly be implemented to coala's `dependency_management`. It
should be able to operate system and language-specific package managers to
handle dependencies. It should also resolve package names and versions
automatically using Repology on multiple operating systems.

#### Milestones

##### PREPARATION/BONDING

* The student has identified most of the related problems.
* The student has came up with a workflow of how dependencies would be managed
  across multiple operating systems and package managers.

##### CODING PHASE 1

* The student has identified and compiled the dependencies of the Go Linter into
  `coala-bears`.
* The student has ensured at least one Repology metadata for the Go Linter is in
  place and correct.
* The student has deployed a personal FreeBSD CI server and linked it to the
  working repo.
* The student has implemented support for FreeBSD's default package manager
  [pkg](https://github.com/freebsd/pkg) and test mocks in
  `dependency_management`.
* The student has started implementing bootstrap features for bare-metal
  systems.

##### CODING PHASE 2

* The student has ensured all Repology metadata for the Go Linter is in place
  and correct.
* At least two (the latest and the specified) version of Go dependencies are
  handled automatically on FreeBSD.
* The student has designed and started implementing a CLI tool which handles
  dependency management requests and wraps the existing `dependency_management`.
* Documentation added and enhanced for `dependency_management`.

##### CODING PHASE 3

* The student has collaborated with the other participant to ensure
  Repology-awared metadata pulls work for Go Linter.
* The project’s ability of handling at least two versions of Go dependencies on
  BSDs (and possibly other more obscure OS like Alpine Linux) has been
  implemented and tested.
* The student has set up an official CI server to the working repo for testing
  on FreeBSD.
* Documentation added on how to do the same for new Linter Bears to 
  [Writing Linter Bears](https://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html).

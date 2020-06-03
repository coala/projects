---
collaborating_projects:
  - coala
desc: "Implement a result reporter tool that converts linter/bear results
into various formats"
difficulty: medium
initiatives:
  - GSoC19
issues:
  - "https://github.com/coala/projects/issues/555"
  - "https://github.com/coala/coala/issues/2757"
  - "https://github.com/coala/coala/issues/5910"
  - "https://gitlab.com/coala/coala-json/issues/3"
markdown: result-reporter-tool.md
mentors:
  - li-boxuan
name: "Result Reporter Tool"
requirements:
  - "The applicant should have at least one non-trivial patch merged to
    coala or coala-bears."
  - "The applicant should be familiar with Python."
  - "Familiarity with continuous integration tools (e.g. Jenkins) is a plus."
status: completed
tags:
  - Core
  - Linter
  - CI
---

Apart from common CLI output, coala provides json format output. However, there
are other formats which are useful for reporting tests and failures, but coala
does not support at the moment.

This is not only for coala, result format inconsistencies has been a problem for
a long time. Converting the static analysis results into a test results format
has been done a few times, such as early PEP8 plugins to Jenkins. The mapping
isn't exact, but the benefits of using the test result format is tight
integration with various systems.

Most commonly used is JUnit format. CircleCI can accept
[this format](https://circleci.com/docs/2.0/collect-test-data). AppVeyor can
receive test results in [XML format](https://www.appveyor.com/docs/running-tests/#uploading-xml-test-results).
Other formats include [TAP](https://testanything.org/),
[Clover](http://openclover.org/doc/manual/latest/ant--clover-report.html),
There are some systems, such as Phabricator, which have a
[custom format](https://github.com/facebook/infer/issues/673) they expect.

The applicant is welcomed to propose additional ideas around format topic, to
improve coala workflow, continuous integration workflow or linters workflow.
For example, pulling the coala results from CI could be a way to inform newbies
of the style problems with their PRs. Pushing the unit test results as XML to
the CI (using combination XML files if necessary). It might also provide
linters with a solid set of classes and output formats for their CLI, letting
them focus on linting algorithms.

#### Milestones

##### PREPARATION/BONDING

- The applicant has created and merged a cEP for this project.
- The applicant has done research on different formats, including JUnit,
  checkstyle, TAP, Language Server Protocol (LSP), etc.
- The applicant has done research on different formats required by CI
  tools and platforms, including Jenkins, Circle CI, Appveyor, Phabricator, etc.

##### CODING PHASE 1

- A tool that converts JSON results to JUnit format is implemented, tested,
  and documented.
- Test and add doc regarding how to upload coala results into Circle CI and
  Appveyor.
- Add infrastructure (CI, doc) to coala-json repository, where most part of
  this project will probably reside.

##### CODING PHASE 2

- Extend the tool to support different formats, including Checkstyle format,
  TAP, Clover.
- Test and add doc regarding how to upload coala results into Jenkins and
  Phabricator.
- Import converters into coala main repository to improve coala output mode.

##### CODING PHASE 3

- Provide various linters with a solid set of classes and output formats for
  their CLI.
- Handle JSON/xml reports from linters before feeding into linter bears.

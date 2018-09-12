---
collaborating_projects:
  - coala
desc: "The Project is about writing language independent documentation extraction and parsing algorithms."
developers_involved: []
difficulty: high
status: completed
initiatives:
  - GSoC
  - RGSoC
issues: []
markdown: documentation-extraction.md
mentors:
  - SanketDG
  - NiklasMM
name: "Documentation Extraction and Parsing"
requirements:
  - "The participant should have one bugfix patch to any bear accepted."
  - "The participant should have a basic understanding of the algorithms behind
     existing documentation extraction routines."
tags:
  - Documentation
  - Bears
---

Code needs documentation. Everyone knows that, but for some reason it doesn't
end up having one.

This probably is partly due to the fact that having a second place to write
documentation makes it easy to "forget" about it. To solve this problem, and
also to offer developers easier access to some important information, many 
languages support having documentation in source files. The problem with this
is, that most linters only work on code or pure documentation files but can not
lint documentation in source files. This leads to a lack of checks for in
source documentation which then can lead to bad documentation due to formatting
issues and the like. While the programmer writes the documentation, coala could
help the programmer conform to the documentation standard and other trivial
issues such as capitalization and grammar.

For python, its [docstrings](https://www.python.org/dev/peps/pep-0257/)

The aim of the project is to develop an analyzing routine at least for python and java
that will find all documentation strings in a file, parse them into specific
groups and check them against a specified documentation style given by the
user. The functionality can be extended so that the analyzing routine provides
a patch that re-formats the documentation correctly, check for grammatical
errors and perform other aesthetical fixes.


#### Milestones

##### PREPARATION/BONDING

* Investigate about docstring diff's cut-off bug.
  Related: [#4187](https://github.com/coala/coala/issues/4187)
* Fix `allow_missing_func_desc` in current implementation of DocStyleBear.
* Investigate about existing DocStyleBear. (Check if DocStyleBear runs fine on coala and coala-bears repo)
* Investigate about coala's project structure. (Write a blog introducing the same to the community)

##### CODING PHASE 1

* Fix DocumentationExtraction related issues.
  Related: [#18](https://gitlab.com/coala/GSoC/GSoC-2017/issues/18)
* Fix DocumentationComment related issues.
  Related: [#19](https://gitlab.com/coala/GSoC/GSoC-2017/issues/19)

##### CODING PHASE 2

* Rigorous testing of newly renovated DocumentationAPI, with the use of existing DocStyleBear.
* A `DocBaseClass`, which does extraction, parsing and diff generation, is implemented.
  Related: [#2659](https://github.com/coala/coala/issues/2659)
* DocStyleBear at least for python and java, which uses `DocBaseClass`, is implemented.

##### CODING PHASE 3

* DocGrammarBear at least for python and java, which uses `DocBaseClass`, is implemented.
* Investigate newly formed DocStyleBear and DocGrammarBear by running them on real projects.
* Improve/Fix bugs, quirks, unit-testing, improvements over test cases and documentation.

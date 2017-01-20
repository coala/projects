Multiple programming languages can coexist in a single source file. coala would
benefit from the ability to determine the programming language of each part of
a file. If we have e.g. a PHP file, it is likely that we'd have chunks of html
inside a few of them. We want some method of finding specific languages inside
other languages and analyze them accordingly for e.g. awk inside bash, JSON
inside Javascript, etc.

This project is about enabling coala to deal with those situations and allow
people to write code analysis similar to how they already do it while being
applicable to the right locations at the right files.

#### Milestones

##### GSOC 2017 CODING STARTS

* The applicant has proposed and merged a [cEP](https://coala.io/cep) of how
  multiple languages will be handled inside a single source file.
* The applicant is familiar with core coala codebase.

##### GSOC 2017 MIDTERM

* The API on the coala side should be ready, documented and tested.
* A working prototype of the working project should exist.

##### GSOC 2017 FINAL

* coala should handle such cases properly.
* Several working bears exist that use the feature to demonstrate the feature.

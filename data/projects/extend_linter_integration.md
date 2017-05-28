### Overview

The aim of the project is to ease the process of testing bears in coala by
significantly improving the testing API to yield favorable, easy to understand
results, add support for at least 8 additional useful linter bears, integrate
the MarkdownBear with useful plugins, include `remark-lint` to report error
messages and get the MarkdownBear to a bug free state, enhance documentation
to include the newly written Linter bears.

### Goals

* With the integration of at least 8 linters, coala’s codebase
  will be enriched with the most useful Linter bears. This will increase
  flexibility and modularity of coala, eliminating the need to use different
  third party tools every time by the end user for different programming
  languages.
* The testing API will provide useful messages to the bear writer and make the
  writing/testing of bears experience a lot smoother. The new testing API will
  point out the exact difference between the expected result that the user
  enters and the observed result that the bear returns, excluding the hard to
  understand messages generated in the present case. This will eliminate the
  need to use a debugger when tests fail.
* Robust testing methods will be implemented (ie.`check_results(...)`
  will be used instead of the other methods(ie.`check_validity(...)` and
  `verify_local_bear(...)`)) that will help developers visualise the results
  in a fruitful way because asserting that a given local bear either yields or
  does not yield any results is not very advantageous.
* The MarkdownBear will be rewritten with a couple of useful plugins like
  `remark-lint-no-trailing-spaces`, `remark-validate-links plugin`, etc and will
  yield effective error messages with the help of `remark-lint`. Other issues
  will be addressed and robust test methods will be written for a long term
  maintenance and prevent bugs from creeping in.
* Enhanced documentation about the linter bears created during the coding period
  that would ease the process of writing  and debugging Linter bears for
  newcomers and make their experience with coala richer and upgrading
  information about ci, code coverage, etc.

#### Milestones

##### PREPARATION/BONDING

* The applicant has tried out all linters manually.
* Designing the new testing API to yield useful results.

##### CODING PHASE 1

* Modification of the testing API to display user friendly results and add
  corresponding documentation.
* Implementation of the [StylintBear](https://github.com/coala/coala-bears/issues/754).
* Implementation of the [TextLintBear](https://github.com/coala/coala-bears/issues/1576).

##### CODING PHASE 2

* Enhancement of the MarkdownBear.
* Implementation of the [TravisLintBear](https://github.com/coala/coala-bears/issues/294).
* Implementation of the [PugLintBear](https://github.com/coala/coala-bears/issues/290).
* Implementation of the [AstyleBear](https://github.com/coala/coala-bears/issues/388).

##### CODING PHASE 3

* Implementation of the [ReekBear](https://github.com/coala/coala-bears/issues/439).
* Implementation of the [CSSCombBear](https://github.com/coala/coala-bears/issues/634).
* Implementation of the [HttpoliceBear](https://github.com/coala/coala-bears/issues/596).

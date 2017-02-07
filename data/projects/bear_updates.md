This project is about improving the general quality of coala's linter bears.

Since it is very easy to write them even for very inexperienced contributors, linter bears in coala often suffer from mediocre quality,
especially once they made it into the codebase.
They do work, but not necessarily on all platforms or for all usecases. They are documented, but not
necessarily understandable. They are tested, but lack corner cases or
exploratory tests. [See existing issues](https://github.com/coala/coala-bears/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Flintbears)

Students working on this project familiarize themselves in-depth with the working of the `linter`
decorator and the existing linter bears. They identify systematic issues with the way linter bears are
developed and maintained and work to fix those issues and improve and amend [existing documentation](http://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html) to avoid them in the future. A number of existing bears is updated and improved to fit the new standards.

Possible areas to investigate include:

* Tests: As mentioned above, tests for linter bears are often kept to a minimum. They use hardcoded files embedded into the test file, which makes it cumbersome and ugly to add more test cases.
* Support for underlying tool: The support for the underlying tool is mostly left to the contributers discretion. Students could come up with a guideline on how well a tool's options must be supported and documented or even automated ways to test for this (maybe via a bear?).

#### Milestones

##### PREPARATION/BONDING

 * The student is familiar with the `linter` decorator and the ecosystem of available linter bears.
 * Systematic issues with the way bears are developed and maintained are identified.
 * For each of the identified issues a set of goals is defined which should be reached by the end of the program.

##### CODING PHASE 1

 * Ideas for how to solve each of the indetified issues are drafted. If possible ways to automatically check bears are drafted.
 * Changes to the [linter bear documentation](http://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html) to improve quality of future bears are proposed.
 * A list of bears which suffer from any of the identified issues is composed.

##### CODING PHASE 2

 * Working concepts of systematic fixes exists and can be demonstrated (e.g. a more convenient way to test, an automatic check for tool option support).
 * At least one of the bears identified in the previous step has been improved to fit the new standards.

##### CODING PHASE 3

* Any systematic fixes are finished and available for other bear developers to use.
* If applicable a system is in place to automatically detect issues in newly created linter bears.
* The bears from the list identified in coding phase 1 have all been fixed and improved to fit the new standards.

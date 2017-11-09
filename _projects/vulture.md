---
collaborating_projects:
  - coala
  - vulture
desc: "This project is about using vulture to automatically remove unused python code."
developers_involved: []
difficulty: medium
status: completed
initiatives:
  - GSoC
  - RGSoC
issues: []
markdown: vulture.md
mentors:
  - jendrikseipp
name: "Vulture dead code removal"
requirements:
  - "The participant should have one patch to [vulture](https://bitbucket.org/jendrikseipp/vulture) accepted."
  - "Being familiar with the current Bear API and what it provides. Fixing an issue for a Bear during the newcomer process would help with this."
  - "Knowledge of ASTs and basic language grammar is a bonus."
tags:
  - Vulture
  - AST
  - Bears
---

#### Overview

The motivation, here, is to extend the functionality of vulture as a library,
and to pass on all metadata through the API and then to harness this utility in
VultureBear for auto removing dead code, which would greatly optimise the bear.
The second part of this project focuses on offering the source range of the
dead code which would make auto-removal much easier. As of now, vulture only
supplies the beginning of the dead code. Also, it proposes to enhance vulture
in order to detect unreachable code(like `if False`, `if True else`, any code
written after return statements, etc). - this shall helpthe user in trimming
down their codebase without affecting usability. Also, the third part would be
to implement a confidence value for every result, this shall be helpful when
tackling false positives.

![coala-VultureBear-Integration-picture](https://cloud.githubusercontent.com/assets/15556382/26275557/580cae2c-3d81-11e7-89ed-ac1ccbf9dc26.png)

#### Goals

- Modify vulture, such as to extend its core functionality as a library.
- Refactor VultureBear accordingly for ensuring optimal performance.
- Implement a method to acquire the source range of dead code and make suitable
  changes in the API and Bear.
- Detect the instances of unreachable code, like `if False` statements
- Analyse and implement a confidence value for results.

#### Specifications

##### 1.) Realise vulture’s API in VultureBear

- Extending vulture’s API: This would allow the user to find all the unused
  code through a single abstract layer: `get_unused_code`. This can be easily
  implemented, given the already existing Vulture.scan(), Vulture.report(),
  Vulture.unused_funcs(), etc. with minimal changes in vulture's code base.

- Enhance VultureBear

  - Refactor VultureBear to directly fetch results through get_unused_code
    (API), thus making it more efficient- we would have memory files passing
    (An extra layer of parsing would then be removed)
  - Further enhancements in vulture (detect unreachable code and reporting
    ranges of dead code)  would influence the API, which would also need
    refactoring of the Bear.

##### 2.) Improving default whitelist

The first step here would be to make the whitelist default. The important thing
would be to identify possible cases which might cause vulture to report a false
positive. This can be achieved through extensive testing with major projects
(trending python projects on github would cater to our need for the purpose).
This approach would serve us many benefits:

- We can identify instances of what should ideally be in our whitelist file
  as we may find any lesser known constructs.
- We can test vulture for any unreported bugs.
- We can find many projects which use/might want to use vulture - they may
  further collaborate with us in making the whitelists together.
- We can also make whitelists for popular python frameworks like Django, etc.

##### 3.) Acquiring source range and implementing auto-removal

Analyse and discuss with the community the utilities of ast or enhanced pyflake
ast for what would better cater to our problem and would offer simplicity for
source-range acquisition and arrive at a concrete conclusion. Also, there was
another proposal by [@m0hawk](https://bitbucket.org/m0hawk) to get everything
until the next node starts. Dialogue here - [#25](https://github.com/jendrikseipp/vulture/issues/25)

Also, if able to fetch the source range successfully, implement the pathway
through which  the metadata flows in and out of API, this would not require
much work because  we can easily change item.lineno (int) to item.dead_range
(tuple of ints) and can parse them over in the VultureBear.

##### 4.) Detecting unreachable code

We would first need to identify cases where code cannot be reached. Some of the
common ones are:

- `If False`
- `If True; else`
- Any code after `return` statement in the block containing return itself.
- `raise` statement  in `try` block.

Similar constructs would have to be looked onto. The crude form would be:

- Analyse the ast’s
- Look for the if nodes
- Check the boolean affiliated to it, tracking previous arguments.

##### 5.) Implementing a confidence value for results

We would need to analyse every construct individually on a case by case basis.
For example, we already know that import statements can be predicted with 100%
surety (except for \* imports, where it would be 0%), but functions often have
false-positives.

The confidence value will be alike the ones given below: (The finer grained
distinctions will need further discussion)

- `import` -->  `100%`
- `from foo import *` --> `0%`
- `variable` --> `<100%`
- `function` --> `<100%`
- `class` --> `<100%`
- `if False` --> `100%`

References:

- [vulture](https://github.com/jendrikseipp/vulture)
- [Project Proposal](https://docs.google.com/document/d/1gzRH-rdJsiAD-TOEB0O4OqtcnTp0zotcNl6agAuXGHw/edit?usp=sharing)

#### Milestones

##### Pre - Community Bonding Period (Up Till  May 4)

- Initial investigation and discussion on what features to be added to API, and
  start implementing them on the go.
- Continue discussion with the community on ast and enhanced pyflakes ast -
  What are the underlying differences, and what can be possible implementations
  for source range acquisition.
- Diagnose possible cases which would render the code unreachable.
- Inculcate a habit of downloading the trending project of the day, running
  vulture on it, analyzing the results and adding anything suitable to
  whitelist file. This would help us in maintaining a rich whitelist file.
- Prioritize all the goals and targets

##### Community Bonding (May 5 - 30)

- Finalize what should be implemented for source range acquisition on the basis
  of discussions during pre - community bonding period.

##### Coding Phase 1

###### Week 1 & 2 (May 31 - June 13)

- Implement API - At this point, we would have a fully functioning API, and we
  would be ready to incorporate these changes into the VultureBear.
- Refactor VultureBear to incorporate API - This would be relatively easy as
  the API would have had until now respected it’s usage in the VultureBear.

###### Week 3 (June 14 - 20)

- Realize VultureBear completely - At this point, it should be able to execute
  vulture, parse output, produce the patch file for removing the dead code what
  so ever found.
- Review the tests written so far and add relevant test cases.
- Document Bear
- API documentation including, but not limited to possible use cases, example
  code snippets
- See that code is completely documented in place
- Buffer time to finish pending work.

###### Week 4 (June 20 - 26)

- Develop an analysis report on what all constructs can we detect with complete
  surety,  partial surety and the ones we cannot detect for the sake of
  implementing a confidence value with results. (A crude version is here in
  this thread).
- Discuss on the levels of certainty we would need to have (perhaps four for
  highly accurate (100%), accurate (>80%), medium (70 - 80%) and can’t say)

##### Coding Phase 2

###### Week 5 (June 27 - July 4)

- Create whitelist files for popular Python frameworks like Django
- Configure vulture in order to ensure that whitelist is taken into account
  by default.
- Updating docs and writing tests.

###### Week 6 (July 4 - 15)

- Adapt to the strategy worked during community bonding period for obtaining
  source range.

###### Week 7 & 8 (July 15 - 29)

- Diagnose the instances of unreachable code, our concern here would be to
  identify all such cases which would render the code unreachable, like the
  if False; if True: else; code after return statements, etc. - Adding this
  to the dead code classes, under a new category: get_unreachable

##### Coding Phase 3

###### Week 9 (August 1 - 7)

- Integrate these results with the VultureBear, which consists of:
  - Transmitting source range, and unreachable code instances through API
  - Yielding the results of Bear in the new format.

###### Week 11 (August 8 - 17)

- Adding documentation for all new changes incorporated in the API, Bear and
  vulture itself.
- Code Review
- Taking feedback and making any improvements proposed.

###### Week 12 (August 17 - 24)

- Buffer week to complete any pending work, evaluate and review tasks
  completed, review documentation and test cases.

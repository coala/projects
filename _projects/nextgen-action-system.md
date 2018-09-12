---
name: "Next Generation Action System"
desc: "Actions in coala should be improved to allow for more dynamic and suiting actions"
requirements:
 - "The applicant must understand how results and actions work in coala."
 - "The proposal needs to contain a clear concept."
difficulty: "high"
mentors:
 - Makman2
 - jayvdb
initiatives:
 - GSoC
tags:
 - core
---

Currently, `Result` objects are passed to action objects as parameters when
coala tries to apply an action. This is a bit restrictive as this means that
coala needs to have a global set of actions that it tries to apply on all
`Result` objects. Sure, coala checks if an action `is_applicable()` before it
tries to apply it but it needs to do that for every `Result` that every bear
ever generates.

We need a way allow results to define actions by themselves, like 
`result = Result(actions=[ApplyPatchAction, ...]). Here is the benefit of such
an approach:
* Bears can specify their own actions, for example the GitCommitBear would
  highly benefit from this (actions could be added for amending commits). Then, 
  the bear writers could get much more creative and generate even more useful
  bears.

#### Milestones

##### COMMUNITY BONDING

* Student should have a clear plan and conceptual work must be finished.
* The applicant should know how to work with the community.

##### CODING PHASE 1 

* Changes to the `Result` class must be finished including writing tests and documentation.

##### CODING PHASE 2

* Action classes have been revamped so that they allow the above mentioned benefits.
* Refactoring of the existing action classes in order to comply with the above
  plan must be at least partially complete.

##### CODING PHASE 3

* All functions/modules that are affected by changes have been refactored.
* coala tutorials and bear writing tutorials have been updated.
* Some new actions have been defined and implemented in a real bear. For
  example, an action to amend the commit has been to GitCommitBear.

---
collaborating_projects:
  - coala
desc: "This project is about updating bear to use aspect feature."
developers_involved: []
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues: []
markdown: convert-bear-to-aspects.md
mentors:
  - adhikasp
  - jschwarzwalder
  - tadityar
name: "Convert Bears to Aspects"
requirements:
  - "The participant should have one patch to any bear accepted."
  - "The participant should have understanding of [cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md)."
  - "The proposal should contain bears which are planned to be addressed and a
     rough draft on which aspects will be needed and how they will be
     implemented."
status: completed
tags:
  - Documentation
  - Bears
  - Aspects
---

coala offers quite a number of bears to its users, many of them wrapping
existing linters.
Although coala offers benefits in usability by utilising a single configuration
file and user interface, there is one last big obstacle left, from our point
of view.
Until now, developers have to know which tools offer a certain analysis.
So if you for example want to have unused code detection for python, you have
to find a tool like Vulture.
Without coala you'd also have to learn how to use Vulture. But even coala does
not help you with finding a tool that can detect unused code in python so far.

This is where aspects do their work.
We could say, an aspect is a kind of analysis we want to run over the code.
For example, "UnusedCode" could be an aspect that describes analysis routines,
that will detect code that is never reached.
Now if a user wants to detect unused code, instead of stating which bear coala
should use, which requires the user to know bears/tools and their options,
they can simply add the "UnusedCode" aspect and coala will figure out what
bears must be used and how to use them.

The goal of this project is to create the aspects categories and annotate
results of bears with them. The minimal expected result is coala/coala
repository could be run with aspect-based setting (see
<https://github.com/coala/coala/issues/4669> for the suggested but non-complete
bear list needed to accomplish this). This is what makes the aspects available
to users and has to be built into each bear individually.

References

* Aspects concept based on
  [cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md)
* Proposal on how new bears could be designed
  [cEP-0002](https://github.com/coala/cEPs/blob/master/cEP-0002.md)
* Current aspects prototype
  [coala/aspect-docs](https://github.com/coala/aspect-docs)

#### Milestones

##### PREPARATION/BONDING

* The list of planned migrated bears (at least 5) are drafted completely.
* The names and settings of the needed aspects are drafted completely.

##### CODING PHASE 1

* All of the drafted aspect are successfully merged and documented.

##### CODING PHASE 2

* Improve existing helper function to make mapping setting to aspect setting
  easier.
* Two thirds of the defined bears is annotated, could be executed under
  aspect config, and return results with aspects data.

##### CODING PHASE 3

* All of the defined bears is annotated, could be executed under
  aspect config, and return results with aspects data.
* Implement integration test, make sure the coala/coala repo could be run
  with aspect-based setting that similiar with current `.coafile` setting and
  return the same result set.

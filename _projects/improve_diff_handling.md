---
collaborating_projects:
  - coala
desc: "Bears should be able to offer more than just one possible patch for an issue."
difficulty: low
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/coala/issues/1021"
markdown: improve_diff_handling.md
mentors:
  - sils
  - jayvdb
name: "Improve Diff Handling"
requirements:
  - "The proposal has to contain a clear concept."
  - "The applicant should have one patch accepted to the coala core."
tags:
  - Core
  - CLI
---
One advantage of using coala is that some Bears offer automatically generated
diffs to fix the problems they detect. This mechanism works smoothly as of now
and even applies the proposed diff automatically to the problematic file if the
user so desires. This is very helpful to the users. At the same time, not
every issue in the code can have just a single correct solution. The fix can
and should also be modifiable by the preferences of the user. Thus the
following improvements can be incorporated giving coala the ability to:

1. Offer multiple diffs, i.e. multiple different fixes to the same issue.
Giving the user a choice to pick the most desirable one.
2. Incorporate input from the user into the diffs offered by using a
templating mechanism.

The above improvements can be used in these sample situations. For example when
suggesting natural language corrections, it can offer multiple spelling
corrections or gramatical corrections.

In addition Bears will be able to offer templated patches, e.g. to offer
variable renamings while the user should be asked for the new variable name.

#### Milestones

##### PREPARATION/BONDING

* A [cEP](https://coala.io/cep) for the project has been merged.

##### CODING PHASE 1

* The user is able to choose between multiple patches.
* The new API is fully documented on <https://api.coala.io/>.
* Proposal of a Bear using multiple patches is finished.
* Coding of the above mentioned Bear has begun.

##### CODING PHASE 2

* Implementation of the multiple diff Bear is completed and it is merged.
* The implementation for templated patches is nearing complete and is
  being tested.

##### CODING PHASE 3

* The feature of templated patches is merged and fully tested.
* The new API is fully documented on <https://api.coala.io/>.
* At least one Bear exists that makes use of this.

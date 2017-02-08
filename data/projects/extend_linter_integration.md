A very easy way to cover a broad spectrum of analysis routines
is wrapping linters into coala.
Currently we have the `@linter` decorator which simplifies this integration.
Based on this decorator, a large selection of linters can be implemented
rapidly.

This project would widen the range of existing linters coala supports and makes
them available for usage in coala.
This helps devs whose favourite tools were not supported.
It also enhances the testing API of linter bears, which are essential to a
bugfree codebase.
A tutorial on writing linter bears is available at
[the linter documentation](http://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html).

This project proposal should contain a concrete list of linters that are
wrapped together with concrete improvement proposals to the `@linter`
decorator if needed.
Because implementing a linter bear is a rather trivial task, we want to
spice up the project with something interesting, like adding project wide
linter support to the `@linter` decorator or improving the testing API of
linter bears or even improving the linter bear docs!
Improving by adding more options can also be part of this.

Upstream contributions to linters are encouraged, e.g. to add auto fixing
capabilities.

#### Milestones

##### PREPARATION/BONDING

* The applicant has tried out all linters manually.
* The applicant has outlined all changes proposed to the linter
  framework, if needed as a [cEP](https://coala.io/cep).

##### CODING PHASE 1

* At least one linter bear has been merged.
* At least one improvement to the linter framework is in review state.
* All of them are properly tested and documented.

##### CODING PHASE 2

* At least two linter bears have been merged.
* At least one improvement to the linter framework has been merged,
  if possible using newly implemented features to `@linter`.
* All of them are properly tested and documented.

##### CODING PHASE 3

* At least three linter bears have been merged.
* All improvement to the linter framework has been merged.
* All of them are properly tested and documented.

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
* Designing the new testing API to yield useful results.

##### CODING PHASE 1

* Modification of the testing API to display user friendly results and add
  corresponding documentation.
* Implementation of the StylintBear.
* Implementation of the ErlangBear.

##### CODING PHASE 2

* Get the MarkdownBear to a working state.
* Implementation of the TravisLintBear.
* Implementation of the PugLintBear.
* Implementation of the AstyleBear.

##### CODING PHASE 3

* Implementation of the MakefileLintBear.
* Implementation of the CSSCombBear.
* Implementation of the HttpoliceBear.

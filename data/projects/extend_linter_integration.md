This project enhances our linter framework and creates a number
of third party tool integrations.

A very easy way to cover a broad spectrum of analysis routines
is wrapping linters into coala. Currently we have the `@linter` decorator
which simplifies this integration. Based on this decorator, a large selection
of linters can be implemented rapidly. A tutorial on writing linter bears is
available at [the linter documentation](http://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html).

This project proposal should contain a concrete list of linters that are
wrapped together with concrete improvement proposals to the `@linter`
decorator if needed. Because implementing a linter bear is a rather trivial
task it is highly recommended to spice up the project with something
interesting, like adding project wide linter support to the `@linter`
decorator. Improving by adding more options can also be part of this.

Upstream contributions to linters are encouraged, e.g. to add auto fixing
abilities.

#### Milestones

##### GSOC 2017 CODING STARTS

* The applicant has tried out all linters manually.
* The applicant has outlined all changes proposed to the linter
  framework, if needed as a [cEP](https://coala.io/cep).

##### GSOC 2017 MIDTERM

* The first batch of linters have been merged.
* At least one improvement to the linter framework is in review state.
* All of them are properly tested and documented.

##### GSOC 2017 FINAL

* The second batch of linters have been merged.
* At least one improvement to the linter framework has been merged,
  if possible using newly implemented features to `@linter`.
* All of them are properly tested and documented.

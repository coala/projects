There is more to software quality than just passing builds. A wide variety
of design principles influence software quality, and some of them can be
measured objectively by so-called
[software metrics](https://en.wikipedia.org/wiki/Software_metric).
Software metrics are important because they produce quantifiable measurements
at different stages of software development which have numerous valuable
applications in schedule and budget planning, cost estimation, quality
assurance testing, software debugging, software performance optimization, and
optimal personnel task assignments. They are crucial when it comes to quality
assurance because source code metrics for quality assurance aims at writing
maintainable code with less bugs. coala offers a good base for the
implementation or wrapping of algorithms that calculate these metrics from a
piece of code. The goal of this project is to implement a module in coala that
can produce software metrics.

Picking the right metrics is important and this project aims at implementing
an API along with a set of Bears for handling and display of software metrics
in coala.

#### Milestones

##### PREPARATION/BONDING

* The applicant has researched and created a list of tools to use.
* The applicant has created CLI and web UI mockups for metrics.
* The applicant has created a [cEPs](https://coala.io/cep) for his project.

##### CODING PHASE 1

* The API for bears to yield metrics is implemented.
* At least one Bear is implemented which uses this API.
* A working (not clean or merged!) prototype of the CLI visualization
  exists.

##### CODING PHASE 2

* The coala CLI can visualize metrics.
* The other coala binaries can handle metrics.
* The API and Bears are fully documented and tested.

##### CODING PHASE 3

* At least one more Bear using this API is implemented.
* All Bears are fully documented and tested.
* A tutorial is merged which contains instructions on how to generate and
  visualize metrics for a project.

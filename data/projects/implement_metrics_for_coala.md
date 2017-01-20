There is more to software quality than just passing builds -
coala should support generating metrics for your code.

A wide variety of design principles influence software quality, and some of
them can be measured objectively by so-called
[software metrics](https://en.wikipedia.org/wiki/Software_metric). coala
offers a good base for the implementation or wrapping of algorithms that
calculate these metrics from a piece of code.

The goal of this project proposal should be to implement handling and
display of software metrics in coala. To prove the concept, this project
has to include multiple bears that calculate metrics for different
programming languages.

#### Milestones

##### GSOC 2017 CODING STARTS

* The applicant has created CLI and web UI mockups for metrics.
* The applicant has created a [cEPs](https://coala.io/cep) for his project.

##### GSOC 2017 MIDTERM

* The API for bears to yield metrics has been implemented.
* The API is properly documented and fully tested.
* At least one Bear implementing the API exists.
* A working (not clean or merged!) prototype of the CLI visualization
exists.

##### GSOC 2017 FINAL

* The coala CLI can visualize metrics.
* The other coala binaries can handle metrics.
* User documentation is written.

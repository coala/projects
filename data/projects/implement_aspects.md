In the future, coala will choose the bears to run for the user based on what
aspects of a programming language he wants to analyze. This project should
realize this.

The aspects concept exists as
[cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md) and it is
already possible to define aspects and use them in bears - however this has no
effect because coala doesn't understand what to do with them yet.

This project is about implementing aspects support in coala. coala will have to
choose the right bears on the basis of aspects and show the right results.
It should be able to ignore aspects just like bear ignoring works right now.

#### Milestones

##### GSOC 2017 CODING STARTS

* A solid plan for the implementation and the exact features exist.
* Any needed changes to [cEP-0005](https://coala.io/cep5) have been merged.

##### GSOC 2017 MIDTERM

* The new aspect based configuration file works.
* The new aspect configuration file is documented properly.

##### GSOC 2017 FINAL

* coala can properly visualize aspects.
* coala can properly ignore aspects.
* Everything is documented (and tested) properly.

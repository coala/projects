Initial configuration of coala is **unnecessarily hard**, especially for new
users. There are a few reasons for this.

New users are not always familiar with all the functionality provided by various
tools inside coala. Besides that, coala tries to provide a full set of options
for those tools, which could make configuring each tools overwhelming.
Finally, there is the possibility that the same type of checking could be
executed by multiple tools, which makes choosing the right tools for a type of
analysis hard.

Right now in coala, if users want to check their code, they need to know what
existing tools (or in coala's terms, bears) have the capability to do that.
For example, they want to check code duplication in Ruby code. RuboCopBear and
RubySmellBear both could do that. The user needs to chose one of them and then
configure it to check code duplication.

This is where "aspects" do their work. We could say "aspects" is what kind of
analysis we want to run over the code. For example, "CodeCloneDetection" is a
kind of aspects that will detect a portion of code, that have exact duplicates
somewhere in the program and warn the user about it. Now if a user wants to
detect duplicated code, instead of stating which bear coala must use
(which requires the user to know bears/tools and their options),
they can simply add the CodeCloneDetection aspect and coala will figure out
what bears must be used and how to use them.

Further technical explanation about aspects is explained in
[cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md). It is
already possible to define aspects and use them in bears - however this has no
effect because coala doesn't understand what to do with them yet.

This project's goal is to implement aspects support in coala.

This means coala will have to choose the right bears on the basis of aspects
and show the right results. It should also be able to ignore aspects just like
bear ignoring works right now.

The difference between this project and "Convert Bears to Aspects" is that the
other project focuses on defining aspects on *each bears* while this project
implements how the coala core is handling bears that use aspects.

References

* Aspects concept based on
  [cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md)
* Proposal on how new bears could be designed
  [cEP-0002](https://github.com/coala/cEPs/blob/master/cEP-0002.md)
* Current aspects prototype
  [coala/aspect-docs](https://github.com/coala/aspect-docs)

#### Milestones

##### PREPARATION/BONDING

* A solid plan for the implementation and the exact features exist.
* Any needed changes to [cEP-0005](https://coala.io/cep5) have been merged.

##### CODING PHASE 1

* coala understands the new aspect-based configuration file.
* The new aspect-based configuration file is documented properly.

##### CODING PHASE 2

* coala can choose the right bears for an aspect.
* coala can return only the relevant results based on aspects configuration.

##### CODING PHASE 3

* Ensure backward compatibility with old bears and configuration file.
* Everything is documented (and tested) properly.

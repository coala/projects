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
results of bears with them.
This is what makes the aspects available to users and has to be built into each
bear individually.

References

* Aspects concept based on
  [cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md)
* Proposal on how new bears could be designed
  [cEP-0002](https://github.com/coala/cEPs/blob/master/cEP-0002.md)
* Current aspects prototype
  [coala/aspect-docs](https://github.com/coala/aspect-docs)

#### Milestones

##### PREPARATION/BONDING

* The names and settings of the needed aspects are drafted completely.

##### CODING PHASE 1

* A third of the defined aspects are properly defined, documented and merged.
* A third of the defined bears return results with aspects.

##### CODING PHASE 2

* Two thirds of the defined aspects are properly defined, documented and merged.
* Two thirds of the defined bears return results with aspects.

##### CODING PHASE 3

* All of the defined aspects are properly defined, documented and merged.
* All of the defined bears return results with aspects.

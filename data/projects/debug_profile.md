A famous programming quote reads "Debugging is twice as hard as writing code
in the first place". Thus even though writing code can be as trivial as
opening up your favorite text editor and crunching some keys we need tools to
help us debug our code. An essential toolset that coala lacks is the ability
to debug its Bears, i.e. the analysis procedures. In the development lifecycle
of a Bear it needs to be debugged and profiled and coala should provide a
comprehensive environment for this.

In this project the participant shall develop a system to easily
step into the analysis code (likely using the Pdb module already integrated
into Python) and step out as soon as the analysis finished. The following are desireable goals for such a toolset's features:

1. The ability to jump directly into Bear code and move through it using a
debugger interface such as pdb.
2. The toolset should also provide the ability to invesitgate the settings
passed to the Bear.
3. Inspect the results created by the Bear.

This rich source of information allows Bear developers to create better
performant Bears through the profiling interface. It also makes Bear
developement easier through the debugging interface. Also, it gives the added
benefit of better quality Bears being contributed to the community.

#### Milestones

##### PREPARATION/BONDING

* The applicant has gone through the [pdb documentation](https://docs.python.org/3.4/library/pdb.html).
* The applicant has made a [cEP](https://coala.io/cep) of how the profiling
  will be implemented has been merged.

##### CODING PHASE 1

* Pdb should be integrated completely into the coala core.
* Documentation and tests for the above task are completed.

##### CODING PHASE 2

* Settings of Bears can be accessed in the debug environment.
* Documentation and tests for the above task are completed.
* The profile option is added to CLI.

##### CODING PHASE 3

* The ability to inspect results produced by the bears is implemented.
* The documentation about profiling is written.
* A demo of how to use the profiling and debuggin is included in the
  documentation.

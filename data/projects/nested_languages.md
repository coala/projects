Multiple programming languages can coexist in a single source file. coala would
benefit from the ability to determine the programming language of each part of
a file. If we have e.g. a PHP file, it is likely that we'd have chunks of html
inside a few of them. We would like coala to be able to still run meaningful
analysis on those files.
Other examples include:

* awk inside bash
* JSON inside Javascript
* HTML, LaTeX or others inside Jinja2

This project is about enabling coala to deal with those situations and allow
people to write code analysis similar to how they already do it while being
applicable to the right locations at the right files.

There are several ways to approach this. The most straightforward would be to identifiy common combinations
of languages and come up with a clever way to implement support for these combinations individually. A more
advanced path would be to come up with a more abstract way to define how arbitrary combinations could be supported.


#### Milestones

##### PREPARATION/BONDING

* The applicant is familiar with core coala codebase.
* The applicant has proposed and merged a [cEP](https://coala.io/cep) of how
  multiple languages inside a single source file could be handled.

##### CODING PHASE 1

* A working example of a specific combination of programming languages exists.

##### CODING PHASE 2

* At least three common combinations of languages are supported.
* OR if applicable an abstract method of combining languages has been developed and at least one bear exists which uses this method.

##### CODING PHASE 3

* At least 5 common combinations of languages are supported either via explicit implementations or an abstract system to combine arbitrary languages.
* Several working bears exist that are able to handle examples of nested languages.

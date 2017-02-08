Code needs documentation. Everyone knows that, but for some reason it doesn't
end up having one.

This probably is partly due to the fact that having a second place to write documentation makes it easy to "forget" about it. To solve this problem, and
also to offer developers easier access to some important information, many languages support having documentation in source files. The problem with this
is, that most linters only work on code or pure documentation files but can not lint documentation in source files. This leads to a lack of checks for in source documentation which then can lead to bad documentation due to formatting issues and the like. While the programmer writes the documentation, coala could help
the programmer conform to the documentation standard and other trivial issues
such as capitalization and grammar.

For python, its [docstrings](https://www.python.org/dev/peps/pep-0257/)

The aim of the project is to develop a language independent analyzing routine
that will find all documentation strings in a file, parse them into specific
groups and check them against a specified documentation style given by the
user. The functionality can be extended so that the analyzing routine provides
a patch that re-formats the documentation correctly, check for grammatical
errors and perform other aesthetical fixes.


#### Milestones

##### PREPARATION/BONDING

* Learn about how different languages have their own documentation standards.
* Learn about the work already done in documentation extraction and parsing.
* A concept of an efficient documentation parsing system is designed.

##### CODING PHASE 1

* DocumentationStyleBear should work for at least one language,
  preferably python.
* Malformed documentation should raise errors.
  Related: [#2143](https://github.com/coala/coala/issues/2143)

##### CODING PHASE 2

* A base class, that does the extraction and parsing, is implemented.
  [#2659](https://github.com/coala/coala/issues/2659)


##### CODING PHASE 3

  * A bear which fixes grammar inside documentation is implemented.
  * Fix [#2645](https://github.com/coala/coala/issues/2645)
    and [#2646](https://github.com/coala/coala/issues/2646)

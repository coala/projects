Programmers often embed code examples in their documentation. In the
reStructuredText markup format, that is done using code blocks.
[`rstcheck`](https://github.com/myint/rstcheck) is a tool that checks the
syntax of these code blocks.

`rstcheck` automatically reports any syntax errors it finds in the
documentation. `rstcheck` uses [Docutils](http://docutils.sourceforge.net/) to
parse reStructuredText files and extract code blocks. It then applies syntax
checkers on the code blocks.

In the case of code blocks containing statically compiled
languages like C++, it can check that the API usage is correct using the C++
compiler to do the syntax check. This is useful since APIs can change over
time. Having an automated check makes it more likely than the documentation
will match the API of the current code base.

[Sphinx](http://www.sphinx-doc.org) is a popular documentation generator that
uses and extends reStructuredText. It has its own custom frontend to do the
reStructuredText parsing.

Currently, the Sphinx support in `rstcheck` is minimal. This results in
[false positives](https://github.com/myint/rstcheck/issues/19) when checking
documents for syntax errors.

It would be useful to implement an alternative `rstcheck` mode that uses
Sphinx's parsing frontend, `sphinx-build`, instead of normal Docutils frontend.
This would allow `rstcheck` to parse Sphinx documents exactly the same way
Sphinx does.

* `rstcheck` = `docutils` + code block linting
* `rstcheck-sphinx` = `sphinx-build` + code block linting

#### Milestones

##### PREPARATION/BONDING

* As an exercise to get familiar with `rstcheck`, add support for another code
  block language. The languages currently supported by `rstcheck` are Bash,
  Doctest, C, C++, JSON, Python, and reStructuredText. Submit a pull request
  with this new feature.
* Create an example Sphinx project for the purposes of experimenting with
  `sphinx-build`. Particularly, pay attention to how code blocks are parsed.
  Put this in a public repository on GitHub.

##### CODING PHASE 1

* Create a new front end, `rstcheck-sphinx` with first class Sphinx support. It
  should use the `sphinx-build` infrastructure to parse the reStructuredText.
* Support parsing code blocks using this new `sphinx-build` based front end.
  Use the existing `rstcheck` checkers to lint the code blocks.
* Write unit tests to demonstrate the above functionality.

##### CODING PHASE 2

* Write scripts to automatically test against existing Sphinx projects to check
  for false positives in `rstcheck-sphinx`.
* Integrate with the main `rstcheck` script if appropriate.

##### CODING PHASE 3

* Add additional linting support if time permits. This could involve linting
  more kinds of languages in code blocks. Or it could involve making the
  language support more extendable.
* Integrate with `coala` in the same way the main `rstcheck` script is
  integrated.

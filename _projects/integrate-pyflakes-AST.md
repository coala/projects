---
collaborating_projects:
  - coala
  - Pyflakes
desc: "Integrate pyflakes-enhanced AST into coala so that bears can access it."
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues: []
markdown: integrate-pyflakes-AST.md
mentors:
  - jayvdb
  - myint
  - adhikasp
name: "Integrate pyflakes-enhanced AST into coala"
requirements:
  - "The participant has a patch to any bear merged. Check out
     [existing bear proposal](https://github.com/coala/coala-bears/issues)."
  - "The participant has a patch to pyflakes merged. Check out
     [easy task](https://bugs.launchpad.net/pyflakes/+bugs?field.tag=easy)."
status: completed
tags:
  - Bears
  - Pyflakes
---
flake8 has many plugins which are commonly used in the python development
community. flake8 is a wrapper, similar to coala, that provides the
AST to its plugins. Instead of coala using the flake8
wrapper, which adds another level of complexity and uncertainty with regards
to configuration, coala would like to directly load the python-enhanced AST
and invoke the plugins.

This allows the coala and flake8 communities to cooperate on plugin
development using a common plugin framework.

This project focuses on integrating the
[`pyflakes`](https://pypi.python.org/pypi/pyflakes)-enhanced
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) into coala and
redesign flake8 plugins
[`flake8-future-import`](https://github.com/xZise/flake8-future-import) and
[`flake8-builtins`](https://github.com/gforcada/flake8-builtins) so that they
use pyflakes-enhanced AST.
A seperate wrapper is also needed to be designed so that the pre-existing
plugins can work without any modification.

This project involves creating a meta bear like
[AnnotationBear](https://github.com/coala/coala-bears/blob/1892b64722f1c10bd2a29611af4dcc18ad76af3a/bears/general/AnnotationBear.py)
and [ClangBear](https://github.com/coala/coala-bears/blob/27a06d19076633a4e796472cf6d6ad55c27045c5/bears/c_languages/ClangBear.py),
say PyflakesASTBear. Then use this bear to redesign the flake8 AST plugins.
Then create a seperate meta bear that wraps flake8 and allows to invoke existing flake8 plugins.
Tutorials for writing and testing bears can be found in our
[documentation](https://api.coala.io).

The flake8 plugins needed to installed can be added to a dynamically created
venv. Check out
[this issue](https://gitlab.com/coala/package_manager/issues/25).

#### Milestones

##### PREPARARION/BONDING

* The participant should understand the concept of how to integrate
pyflakes-enhanced AST into coala by writing a meta-bear and how to use this
meta-bear to wrap the flake8 plugins.

##### CODING PHASE 1

* Integrate pyflakes-enhanced AST into coala by writing a meta bear i.e
PyflakesASTBear.
* Write tests for the meta-bear.
* Document the meta-bear.

##### CODING PHASE 2

* Write bears that provides functionality of `flake8-future-import`
 and `flake8-builtins` using PyflakesASTBear.
* Write tests for the resulting bears.
* Document the resulting bears.

##### CODING PHASE 3

* Write a bear that wraps `flake8` so that pre-existing plugins can work as it is.
* Write tests for the resulting bear.
* Document the meta-bear.

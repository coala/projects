flake8 has many plugins which are commonly used in the python development
community. flake8 is a wrapper, similar to coala, that provides the
python-enhanced AST to its plugins. Instead of coala using the flake8
wrapper, which adds another level of complexity and uncertainty with regards
to configuration, coala would like to directly load the python-enhanced AST
and invoke the flake8 plugins.

This allows the coala and flake8 communities to cooperate on plugin
development using a common plugin framework.

This project focuses on integrating the
[`pyflakes`](https://pypi.python.org/pypi/pyflakes)-enhanced
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) into coala and
wrap flake8 AST plugins
[`flake8-future-import`](https://github.com/xZise/flake8-future-import) and
[`flake8-string-format`](https://github.com/xZise/flake8-string-format) using
it.

This can be done by creating a meta bear like
[AnnotationBear](https://github.com/coala/coala-bears/blob/1892b64722f1c10bd2a29611af4dcc18ad76af3a/bears/general/AnnotationBear.py)
and [ClangBear](https://github.com/coala/coala-bears/blob/27a06d19076633a4e796472cf6d6ad55c27045c5/bears/c_languages/ClangBear.py),
say PyflakesASTBear. Then use this bear to wrap the flake8 AST plugins.
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

* Write a bear that wraps `flake8-future-import` using PyflakesASTBear.
* Write tests for the resulting bear.
* Document the resulting bear.

##### CODING PHASE 3

* Write a bear that wraps `flake8-string-format` using PyflakesASTBear.
* Write tests for the resulting bear.
* Document the resulting bear.

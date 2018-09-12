---
name: "Automate Whitelist creation for vulture"
collaborating_projects:
  - coala
  - vulture
desc: "Automatically create whitelists and detect false positives for vulture."
developers_involved:
  - RJ722
mentors:
  - AbdealiJK
  - jendrikseipp
  - The-Compiler
difficulty: medium
status: completed
initiatives:
  - GSoC
issues:
- "https://github.com/jendrikseipp/vulture/issues/109"
- "https://github.com/jendrikseipp/vulture/issues/8"
markdown: automate-vulture-whitelist.md
requirements:
  - "Familiarity with vulture"
  - "Knowledge of AST's"
  - "Experience working with coverage."
  - "A little know-how about PyQt and shiboken."
tags:
  - Vulture
  - AST
  - coverage
---

The main aim of this project is to automatically create whitelists (to be
utilized by vulture) for projects projects using
[`sip`](https://www.riverbankcomputing.com/software/sip/intro) and
[`shiboken`](http://code.qt.io/cgit/pyside/pyside-setup.git/tree/sources/shiboken2)
to generate Python bindings for C++ code, most significant of them being PyQt.
Once implemented, a whitelist generated for PyQt (let's say) through this
generator could then be universally utilised across all PyQt projects.

#### IDEAS

* Create a command line tool which takes in `sip` files as input and spits a
  whitelist with all the virtual functions defined in the `sip` files. (Add
  Documentation and tests)
* Use this tool to generate a whitelist for PyQt and ship it with vulture. This
  will reduce overhead for PyQt projects which use vulture.
* Allow passing coverage.xml to vulture via `--make-whitelist` and let it find
  the list of false-positive functions. (Add Documentation and tests as well)
* Write a whitelist generator for shiboken, the binding generator used for
  PySide2.

#### MILESTONES

##### COMMUNITY BONDING
* Discussion on whether to implement a new Tracer or to directly consume `XML`
  output from `coverage.py`.
* Get familiar with `coverage.xml`.
* Take up small tasks from
  [TODO](https://github.com/jendrikseipp/vulture/tree/master/TODO.rst).

##### CODING PHASE 1
* The whitelist generator should be completely implemented.
* It should reside in it's own repository, with CI enabled for testing on both
  the GNU/Linux and Windows platforms. CI should also ensure ongoing support
  for py2.7 & py3.4+ for compatibility with vulture.
* Write tests, achieve 100% code coverage.
* It should be gracefully documented.
* A whitelist for PyQt should be generated to be then shipped with vulture by
  default, thus helping PyQt projects like
  [qutebrowser](https://github.com/qutebrowser/qutebrowser) to deal with false
  positives.
* Maximise code coverage of vulture.

##### CODING PHASE 2
* `--make-whitelist`: Vulture should be able to find a list of false positives
  (for functions and methods) from `coverage.xml`.
* Maintain code coverage, robust tests should be written.
* Add documentation, how-to, examples and use cases in
  [README](https://github.com/jendrikseipp/vulture/tree/master/README.rst).
* Research and planning about how to generate whitelists for
  [`shiboken`](http://code.qt.io/cgit/pyside/pyside-setup.git/tree/sources/shiboken2).

##### CODING PHASE 3
* Implement whitelist generator for
  [`shiboken`](http://code.qt.io/cgit/pyside/pyside-setup.git/tree/sources/shiboken2).
* Add new tests, sustain code coverage.
* Update documentation for the whitelist generator.

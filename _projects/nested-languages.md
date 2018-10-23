---
collaborating_projects:
  - coala
desc: "Multiple programming languages can coexist in the same source
       file - coala should support writing code analysis that only works on
       parts of files."
difficulty: high
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/coala/issues/1690"
markdown: nested-languages.md
mentors:
  - corona10
  - Udayan12167
  - NiklasMM
name: "Handle Nested Programming Languages"
requirements:
  - "At least one patch to the coala core should be accepted and merged."
  - "The student should be familiar with ongoing technical [cEPs](https://coala.io/cep)."
  - "The proposal needs to contain a clear concept."
tags:
  - Core
  - Bears
---
Generally, a single source file contains code for exactly one programming language.
But multiple programming languages can also co-exist in a single source file.
If we have e.g. a PHP file, it is likely that we'd have
chunks of HTML inside a few of them. We would like coala to be able to still
run meaningful analysis on those files.
Other examples include:

* Web templating - languages such as PHP or JSP files mix code into HTML.
* reStructuredText specify different language for codeblock, means we have a
block of code which is written in some particular language and it is embedded
inside reStructuredText syntax.

rstcheckBear of coala checks the syntax of reStructuredText and code blocks
nested within it.

For example

With bad C++ syntax:

```
====
Test
====

.. code:: cpp

    int main()
    {
        return x;
    }

```

```
$ rstcheck bad_cpp.rst
bad_cpp.rst:9: (ERROR/3) (cpp) error: 'x' was not declared in this scope

```
There are some limited languages for which codeblock can be detected by
rstcheckBear like C++, Python, Bash, Doctest, JSON, XML, reStructuredText

In the above example rstcheckBear implements on reStructuredText and lints
the codeblock which is written in C++ and is nested within reStructuredText.
Ideally, this project would re-implement the rstcheck's linting of code blocks,
so the splitting and spawning of linters is done inside coala instead of
inside rstcheck.

* Markdown also has similar concept as reStructredText, and the same
functionality would be available for Markdown without a custom bear in coala.

* Another example is IPython. It is a command shell for interactive computing in multiple programming languages.
IPython Notebooks which is also called Jupyter notebooks now a days,
contains python code.Ipython provides an another way of executing Python
commands.

For example

PEP8NotebookBear of coala detects and fixes PEP8 incompliant code (which is
written in Python) in Jupyter Notebooks.




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
* OR if applicable an abstract method of combining languages has been developed
  and at least one bear exists which uses this method.

##### CODING PHASE 3

* At least 5 common combinations of languages are supported either via explicit
  implementations or an abstract system to combine arbitrary languages.
* Several working bears exist that are able to handle examples of nested languages.

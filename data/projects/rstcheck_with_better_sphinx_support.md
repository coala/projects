[`rstcheck`](https://github.com/myint/rstcheck) is a tool that checks the
syntax of code blocks nested within reStructuredText. Currently, the
[Sphinx](http://www.sphinx-doc.org) support in `rstcheck` is minimal. This
results in
[false positives](https://github.com/myint/rstcheck/issues/19).

It would be interesting to experiment with an alternative `rstcheck` mode that
uses `sphinx-build` instead of `docutils` directly. This would allow `rstcheck`
to parse Sphinx documents exactly the same way Sphinx does.

* `rstcheck` = `docutils` + code block linting
* `rstcheck-sphinx` = `sphinx-build` + code block linting

#### Milestones

##### GSOC 2017 CODING STARTS

* As an exercise to get familiar with `rstcheck`, add support for another code
  block language. The languages currently supported by `rstcheck` are Bash,
  Doctest, C, C++, JSON, Python, and reStructuredText. Submit a pull request
  with this new feature.
* Create an example Sphinx project for the purposes of experimenting with
  `sphinx-build`. Particularly, pay attention to how code blocks are parsed.
  Put this in a public repository on GitHub.

##### GSOC 2017 MIDTERM

* Create a new front end, `rstcheck-sphinx` with first class Sphinx support. It
  should use the `sphinx-build` infrastructure to parse the reStructuredText.
* Support parsing code blocks using this new `sphinx-build` based front end.
  Use the existing `rstcheck` checkers to lint the code blocks.
* Write unit tests to demonstrate the above functionality.

##### GSOC 2017 FINAL

* Write scripts to automatically test against existing Sphinx projects to check
  for false positives in `rstcheck-sphinx`.
* Integrate with the main `rstcheck` script if appropriate.
* Add additional linting support if time permits. This could involve linting
  more kinds of languages in code blocks. Or it could involve making the
  language support more extendable.
* Integrate with `coala` in the same way the main `rstcheck` script is
  integrated.

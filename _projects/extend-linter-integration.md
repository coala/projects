---
collaborating_projects:
  - coala
desc: "This project enhances our linter framework and creates a number of third party tool integrations."
developers_involved: []
difficulty: medium
status: completed
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/engagement/issues/66"
markdown: extend-linter-integration.md
mentors:
  - AbdealiJK
  - Makman2
  - Mixih
name: "Extend Linter Integration"
requirements:
  - "The applicant has added an arbitrary linter to coala."
  - "The proposal contains a list of linters to integrate for every milestone, split into two batches."
tags:
  - Linter
  - Bears
---
#### OVERVIEW
The aim of the project is to ease the process of testing bears in coala by
significantly improving the testing API to yield favorable, easy to understand
results, add support for at least 8 additional useful linter bears, integrate
the MarkdownBear with useful plugins, include `remark-lint` to report error
messages and get the MarkdownBear to a bug free state, enhance documentation
to include the newly written Linter bears.

#### GOALS
* With the integration of at least 8 linters, coala’s codebase
  will be enriched with the most useful Linter bears. This will increase
  flexibility and modularity of coala, eliminating the need to use different
  third party tools every time by the end user for different programming
  languages.
* The testing API will provide useful messages to the bear writer and make the
  writing/testing of bears experience a lot smoother. The new testing API will
  point out the exact difference between the expected result that the user
  enters and the observed result that the bear returns, excluding the hard to
  understand messages generated in the present case. This will eliminate the
  need to use a debugger when tests fail.
* Robust testing methods will be implemented (ie.`check_results(...)`
  will be used instead of the other methods(ie.`check_validity(...)` and
  `verify_local_bear(...)`)) that will help developers visualise the results
  in a fruitful way because asserting that a given local bear either yields or
  does not yield any results is not very advantageous.
* The MarkdownBear will be rewritten with a couple of useful plugins like
  `remark-lint-no-trailing-spaces`, `remark-validate-links plugin`, etc and will
  yield effective error messages with the help of `remark-lint`. Other issues
  will be addressed and robust test methods will be written for a long term
  maintenance and prevent bugs from creeping in.
* Enhanced documentation about the linter bears created during the coding period
  that would ease the process of writing  and debugging Linter bears for
  newcomers and make their experience with coala richer and upgrading
  information about ci, code coverage, etc.

#### SPECIFICATIONS

**(A) PROBLEM: TESTING API DOESN’T YIELD USEFUL RESULTS**

The current testing API doesn’t provide useful results as a traceback if a
given test fails. It becomes a strenuous and time consuming job to follow the
traceback searching for errors.Eg. For the `check_results(...)` method,
http://paste.ubuntu.com/24269550/ is the output that I received when I had a
minor difference of `line=5` instead of `line=6` in the given code snippet :
```
[Result.from_values('ElmLintBear',
                     message=result_message_bad_function,
                     file=fname,
                     line=5,
                     severity=RESULT_SEVERITY.NORMAL)]
```
The given output below appear to be strange as both the Result objects contain
the same number of characters (632) due to which testing transforms to a
challenging task. Hit and trial methods or the usage of a debugger are the
only possible ways to overcome these errors.
```
E           AssertionError: Lists differ: [&lt;Result object(id=0xce0383d576a84f34848d66d0ddc87479, origin=[632 chars]
		    710&gt;] != [&lt;Result object(id=0x7e58527926a345f8a2bb36305c58f9f6, origin=[632 chars]400&gt;]
E           
E           First differing element 0:
E           &lt;Result object(id=0xce0383d576a84f34848d66d0ddc87479, origin=[631 chars]0710&gt;
E           &lt;Result object(id=0x7e58527926a345f8a2bb36305c58f9f6, origin=[631 chars]0400&gt;
```
Eg. Error in `execute_bears(...)` does not show the actual error and it can get
difficult to debug things like:
```
>           raise AssertionError(str(err) + " \n" + "\n".join(msg))
E           AssertionError: 0 == 0 : The local bear 'CheckstyleBear' yields no result although it should.
E           Running bear CheckstyleBear...
E           Running 'java -jar /home/ubuntu/.local/share/coala-bears/CheckstyleBear/checkstyle.jar -c /home/ubuntu/
			.local/share/coala-bears/CheckstyleBear/google.xml /home/ubuntu/coala-bears/tests/java/test_files/
			CheckstyleGood.java'
E           Running bear CheckstyleBear...
E           Running 'java -jar /home/ubuntu/.local/share/coala-bears/CheckstyleBear/checkstyle.jar
			-c /home/ubuntu/.local/share/coala-bears/CheckstyleBear/google.xml
			/home/ubuntu/coala-bears/tests/java/test_files/CheckstyleBad.java'

tests/LocalBearTestHelper.py:34: AssertionError
```

**(A) SOLUTION: SHOW EXPECTED AND OBSERVED RESULTS**

In case of `check_results(...)`, the expected and observed results are checked
for equality by the `assertEqual(...)` statement. I would like to postprocess
the expected and observed results which are of the list class, comparing their
attributes, report their difference or any missing attribute, specifying the
equality mismatch.
In the case of `execute_bear(...)`, I would like to print `stdout` and `stderr`
from linter bears when tests fail. Often, our test suite breaks due to upstream
releases and we have to go through the hassle of detecting the breakage and
brief results without sufficient explanation requires a ton of work to be done.
The given implementation is expected to eliminate the usage of a debugger,
providing productive results while writing and testing bears.

To summarise, the new Testing API would look like:

![new test api](https://cloud.githubusercontent.com/assets/14862976/26557881/4103628c-44c2-11e7-9a06-68591d000aa0.jpg)

**(B) PROBLEM: PLENTY OF ISSUES RELATED TO THE MARKDOWNBEAR**

Markdown is a very crucial format as nearly every repository has some files
with a .md extension and many users may go disappointed since the Markdown
bear has a considerable number of issues related to it, the most important
being that the patch proposes to delete the entire file. Some more issues
related to it are:

**ISSUE:** [MarkdownBear doesn’t check for trailing spaces](https://github.com/coala/coala-bears/issues/1179)

**APPROACH:** I plan to eliminate this issue by integrating this plugin
(https://www.npmjs.com/package/remark-lint-no-trailing-spaces) which is
expected to remove trailing whitespaces for all cases. The plugin will be
installed via package.json and then respectively passed on as shell argument
to the remark tool.

**ISSUE:** [Markdown parsing issues](https://github.com/coala/coala-bears/issues/940)

**APPROACH:** Likely to be solved by https://github.com/coala/coala-bears/issues/926
since all errors will be reported by the patch.

**ISSUE:** [Use remark-lint to report meaningful messages](https://github.com/coala/coala-bears/issues/926) (critical)

**APPROACH:** This patch will be vital and aims to use the `remark-lint` plugin
to report fruitful errors instead of tidying the markdown automatically, because
in CI mode, the tidying of the file is useless and descriptive messages are
critical. Since it is already being included by package.json, implementing
it won’t be a difficult task.

**ISSUE:** [Add remark-validate-links plugin](https://github.com/coala/coala-bears/issues/924)

**APPROACH:** The goal is to add a plugin that checks if the local files exist
relative to the markdown
file(https://www.npmjs.com/package/remark-validate-links). The plugin will be
installed via package.json and then respectively passed on as shell argument
to the remark tool or in the config file, depending on the requirement.

**ISSUE:** [MarkdownBear table settings](https://github.com/coala/coala-bears/issues/1008)

**APPROACH:** Likely to be solved by https://github.com/coala/coala-bears/issues/926
since all errors will be reported by the patch.

**(B) SOLUTION: INCREMENTAL REWRITE OF THE MARKDOWN BEAR**

I’ve been playing around with `remark`, `remark-lint` and `remark-cli` for a while
and noticed that Markdown bear works appropriately with specific versions of
the underlying tools. Majority of these issues are due to the incorrect
settings of the bear defined in `MarkdownBear.py` which need to be taken care of.
The remark tool is awesome and there are a ton of plugins to be explored and
the best ones to be included. The Markdown bear will be upgraded to address all
the above issues, keeping in mind that stable versions are utilised and no
breakages occur in future. Thorough testing will be performed with complete
code coverage to eliminate to entrance of bugs.

**(C) PROBLEM: INSUFFICIENT LINTER BEARS AVAILABLE**

coala-bears is the skeleton of coala. The cli tool would potentially be
useless without the consolidation of coala-bears. coala doesn’t provide
linting support for all the languages as of now. There are several third
party tools accessible for the same purpose. Some users still have to go
through the hassle of using different tools for different programming languages
each time they want to lint/fix code. Many static analysis tools segregated by
multiple languages can be found [here](https://github.com/mre/awesome-static-analysis),
among which the open source linters will be wrapped with the respective bears.

**(C) SOLUTION: EXTEND LINTER INTEGRATION**

I’m planning to add more support to coala-bears by expanding the linter
integration and adding the essential 8 linter bears, giving widespread support
to the user from a variety of local and global bears with the goal of appending
the following bears :

* [StylintBear](https://github.com/coala/coala-bears/issues/754)
* [TextLintBear](https://github.com/coala/coala-bears/issues/1576)                                      
* [ReekBear](https://github.com/coala/coala-bears/issues/439)               
* [TravisLintBear](https://github.com/coala/coala-bears/issues/294)               
* [PugLintBear](https://github.com/coala/coala-bears/issues/290)              
* [CSSCombBear](https://github.com/coala/coala-bears/issues/634)               
* [AstyleBear](https://github.com/coala/coala-bears/issues/388)                  
* [HttpoliceBear](https://github.com/coala/coala-bears/issues/596)

#### Milestones

##### PREPARATION/BONDING

* The applicant has tried out all linters manually.
* Designing the new testing API to yield useful results.

##### CODING PHASE 1

* Modification of the testing API to display user friendly results and add
  corresponding documentation.
* Implementation of the [StylintBear](https://github.com/coala/coala-bears/issues/754).
* Implementation of the [TextLintBear](https://github.com/coala/coala-bears/issues/1576).

##### CODING PHASE 2

* Enhancement of the MarkdownBear.
* Implementation of the [TravisLintBear](https://github.com/coala/coala-bears/issues/294).
* Implementation of the [PugLintBear](https://github.com/coala/coala-bears/issues/290).
* Implementation of the [AstyleBear](https://github.com/coala/coala-bears/issues/388).

##### CODING PHASE 3

* Implementation of the [ReekBear](https://github.com/coala/coala-bears/issues/439).
* Implementation of the [CSSCombBear](https://github.com/coala/coala-bears/issues/634).
* Implementation of the [HttpoliceBear](https://github.com/coala/coala-bears/issues/596).

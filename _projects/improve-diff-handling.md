---
collaborating_projects:
  - coala
desc: "Bears should be able to offer more than just one possible patch for an issue."
difficulty: low
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/coala/issues/1021"
markdown: improve-diff-handling.md
mentors:
  - satwikkansal
  - jayvdb
name: "Improve Diff Handling"
requirements:
  - "The proposal has to contain a clear concept and implementation approach."
  - "The applicant should have one patch accepted to the coala core."
tags:
  - Core
  - CLI
---
coala provides static analysis routines in the form of bears that have
capabilities to detect or even fix the problematic code. coala converts the
fixes provided by different bears to its own `Diff` class instance which is
later used to display the fix along with the analysis results to the users and
let the users choose appropriate actions. This mechanism works smoothly as of
now and even applies the proposed diff automatically to the problematic file
if the user so desires. This is very helpful to the users. At the same time,
not every issue in the code can have just a single correct solution. The fix
can and should also be modifiable by the preferences of the user.

The primary objective of the project is to improve the existing diff handling
capability of coala so that it is possible for the bears to do things like:

-  Offer multiple diffs, i.e. multiple different fixes to the same issue.
Giving the user a choice to pick the most desirable one.
- Produce interactive diffs that enable the bears to incorporate input from the user into the diffs offered by using a
templating mechanism.
- Ideas on similar lines.

The above improvements can be used in these sample situations. For example when
suggesting natural language corrections, it can offer multiple spelling
corrections or gramatical corrections.

In addition Bears will be able to offer templated patches, e.g. to offer
variable renamings while the user should be asked for the new variable name.

#### Sample mockups

Source: https://docs.google.com/document/d/1BLZO2tD93yKdO7XhMb5NgJvytu-pWDtPMRidGmjQ8EY/edit?usp=sharing
(You are free to use ideas discussed in the proposal).

Candidates can take help of following sample mockups to understand the use
cases better. The mockups discussed below however need not be strictly
followed. Candidate is expected to incorporate their own ideas and designs.

##### Interactive Diffs

```sh
|    | [INFO] Some problem in code
|    |     | - Affected code
|    |     | + Intermediate patch (contains the placeholders)
|    | [INFO] Following values need to be entered to generate final patch.
|    |     |  PlaceholderName : Help string related to the placeholder.
|    |     |  More placeholders (only 2-3 placeholders are described, others(if any) can be displayed
|    |     |  when the user selects to apply the Interactive Patch.
|    | *0: Do nothing
|    |  1: Open file(s)
|    |  2: Apply interactive Patch
|    |  3: Add ignore comment
|    | Enter number (Ctrl-D to exit):
```
And if the user choses to Apply interactive Patch, the `InputValuesAction` is
called:

```sh
|    | [INFO] Help string related to the placeholder
|    |     | The input type is { } and the default value is { }
|    | Please enter the value

> Some value entered by the user
```
The users are prompted again with some error message if the input is not
according to the input type.

Similary the other values are taken in and the final patch is generated with
the help of `fix_generation_function`.


##### Mulitple Patch Actions

```sh
|    | [INFO] Some problem in code
|    |     | + Most suitable patch (having highest confidence_score) displayed.
|    | *0: Do nothing
|    |  1: Open file(s)
|    |  2: Apply patch
|    |  3: Add ignore comment
|    |  4: Show patch 2 (default name for the action, but can be customized)
|    |  5: Show patch 3 (This option changes into “More Patches” option,
|    |                   if there are more that 3 suggested patches)
|    | Enter number (Ctrl-D to exit):
```

Example for a `GrammarBear`
```sh
|    | [INFO] Multiple tenses used in single line.
|    |     | -  coala was performs static code analysis.
|    |     | + coala performs static code analysis.
|    | *0: Do nothing
|    |  1: Open file(s)
|    |  2: Apply patch
|    |  3: Add ignore comment
|    |  4: Show past tense sentence
|    |  5: Show more suggestions
|    | Enter number (Ctrl-D to exit):
```

##### Example for both the functionalities combined

Example for a `NamingBear`

```sh
|    | [INFO] Unconventional identifier naming style detected.
|    |     | - Max_studentLimit = 5
|    |     | + {max_student_limit} = 5
|    | *0: Do nothing
|    |  1: Open file(s)
|    |  2: Apply patch (changes Max_studentLimit to max_student_limit, has highest
                        confidence due to user\'s snake-case preference in coafile)
|    |  3: Apply interactive patch (to let the user manually change the variable name)
|    |  4: Show CONSTANTS patch (python specific, will propose to use MAX_STUDENT_LIMIT)
|    |  5: Do nothing
|    | Enter number (Ctrl-D to exit):
```

#### Project Deliverables

- Functionality for the bears to offer multiple fixes for the affected code.
- A bear that can offer multiple patches for a single problem detected.
- Functionality for the bears to propose templated patches along with the custom fix generation functions.
- A bear that uses the interactive diff behavior to fix the code.
- Output formats for external bears so that they can use the enhanced functionalities (optional)


#### Milestones

##### PREPARATION/BONDING

* A [cEP](https://coala.io/cep) for the project has been merged.
* Mockups for the CLI have been finalized (might require collecting opinions from community members)
* Research and discuss ideas for
  - A generic bear that offers multiple patches.
  - A generic bear that can suggest interactive diffs.


##### CODING PHASE 1

* The user is able to choose between multiple patches.
* The new API is fully documented on <https://api.coala.io/>.
* Proposal of a Bear using multiple patches is finished.
* Coding of the above mentioned Bear has begun.

##### CODING PHASE 2

* Implementation of the multiple diff Bear is completed and it is merged.
* The implementation for templated patches is nearing complete and is
  being tested.

##### CODING PHASE 3

* The feature of templated patches is merged and fully tested.
* The new API is fully documented on <https://api.coala.io/>.
* At least one Bear exists that makes use of this.
* Output formats for the enhanced features are added and their processing
  functions are implemented in the `Linter` class.

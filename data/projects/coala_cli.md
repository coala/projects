coala has come a long way from its early days in terms of its usability,
athough all the changes that have been made are improvisations. A proper and
planned overhaul of the user interface would help coala become much more user
friendly and intuitive. At its core any software is as good as its interface
with the user and this project aims to improve that.

In this project we are going to focus on the command line interface (CLI) of
coala. The specific areas and points to focus on are:

1. Remove most of the text from the action selection screen.
2. Use letters instead of numbers for selecting actions.
3. Allow chaining actions in a single input.
4. Add a 'select action for all results' operator.
5. Make the implementation of ApplyPatchAction log the applied patch.
6. Reprompt after running actions only if the action says so.

The end goal of the project is to make coala easier to use, hence the
project is going to rely heavily upon mockups and feedback from the
community. Also, in addition to the above changes the applicant is encouraged
to come up with their own ideas to improve the CLI.

[cEP-0004](https://github.com/coala/cEPs/pull/29/files) contains further
details about the project. It is incomplete though and open to a lot of
improvement.

#### MILESTONES

##### PREPARATION/BONDING

* The [cEP](https://github.com/coala/cEPs/pull/29/files) has been updated, finished and merged with
  the help of mockups and community feedback.
* A survey is done on the importance of each proposed change to the CLI.
* Concept for implementation exists in the cEP.

##### CODING PHASE 1

* Implemented at least 3 improvements from the above list including what has
  been proposed by the participant.
* Thorough testing of the implemented improvements is done and they are merged.
* Documentation using illustrations of the improvements is merged.

##### CODING PHASE 2

* Implemented, documented and tested at least 3 more improvements with coding
  finished and merged.

##### CODING PHASE 3

* Implemented, documented and tested all improvements.
* Creation of asciinemas showing the usage of the implemented CLI improvements.

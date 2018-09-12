---
collaborating_projects:
  - coala
desc: "There are a number of possible options to improve the coala interface
       written down in [a draft of cEP-0004](https://github.com/coala/cEPs/pull/29/files)."
developers_involved: []
difficulty: medium
status: completed
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/51"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/52"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/53"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/54"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/55"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/127"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/128"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/129"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/130"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/131"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/132"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/133"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/134"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/135"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/136"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/137"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/138"
  - "https://gitlab.com/coala/GSoC/GSoC-2017/issues/158"
markdown: coala-cli.md
mentors:
  - yukiisbored
  - Adrianzatreanu
name: "Improve the coala CLI"
requirements:
  - "One patch to the coala core accepted."
  - "Clear ideas on how to improve the CLI in the proposal."
tags:
  - Core
  - CLI
---

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

The end goal of the project is to:
- [ ] Make coala easier to use
- [ ] Adds new functionality so the user could have multiple options when he uses coala
- [X] Mockups and feedback from the community
- [X] The applicant comes up with their own ideas to improve the CLI

NOTE: Those written in italic are Work in Progress.

[cEP-0010](https://github.com/coala/cEPs/pull/79/files) contains further
details about the project.

Make coala easier to use, hence the project is going to rely heavily upon
mockups and feedback from the community. Adds new functionality so user could
have multiple options when uses coala. The user interface would help coala
become much more user friendly and intuitive.

#### MILESTONES

[BONDING] https://gitlab.com/coala/GSoC/GSoC-2017/milestones/16
[PHASE 1] https://gitlab.com/coala/GSoC/GSoC-2017/milestones/17
[PHASE 2] https://gitlab.com/coala/GSoC/GSoC-2017/milestones/18
[PHASE 3] https://gitlab.com/coala/GSoC/GSoC-2017/milestones/19

##### [PREPARATION/BONDING](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/16)

- [X] The [cEP](https://github.com/coala/cEPs/pull/79/files) has been updated, finished and merged with
  the help of mockups and community feedback.
- [X] A survey is done on the importance of each proposed change to the CLI.
- [X] Concept for implementation exists in the cEP.

Related issues:

[Google Form] https://gitlab.com/coala/GSoC/GSoC-2017/issues/54
[cEP] https://gitlab.com/coala/GSoC/GSoC-2017/issues/52
[mockups] https://gitlab.com/coala/GSoC/GSoC-2017/issues/53


##### [CODING PHASE 1](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/17)

- [ ] Implemented at least 3 improvements from the above list including what has
  been proposed by the participant.
- [ ] Thorough testing of the implemented improvements is done and they are merged.
- [ ] Documentation using illustrations of the improvements is merged.

Related issues:

[CLI] https://gitlab.com/coala/GSoC/GSoC-2017/issues/55
[Letters instead of numbers] https://gitlab.com/coala/GSoC/GSoC-2017/issues/127
[Do nothing] https://gitlab.com/coala/GSoC/GSoC-2017/issues/130
[Chaining actions] https://gitlab.com/coala/GSoC/GSoC-2017/issues/129
[Testing and writing documentation] https://gitlab.com/coala/GSoC/GSoC-2017/issues/133

##### [CODING PHASE 2](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/18)

- [ ] Implement 'Reprompt' for actions

Related issues:
[Reprompt] https://gitlab.com/coala/GSoC/GSoC-2017/issues/131

- [ ] Implement 'selection action for all results' option

Related issue:
[selection action] https://gitlab.com/coala/GSoC/GSoC-2017/issues/132

- [ ] Implement 'ApplyPatchAction'

Related issue:
[apply patch] https://gitlab.com/coala/GSoC/GSoC-2017/issues/134

##### [CODING PHASE 3](https://gitlab.com/coala/GSoC/GSoC-2017/milestones/19)

- [ ] Implemented, documented and tested all improvements.

Related issue:
[tests] https://gitlab.com/coala/GSoC/GSoC-2017/issues/138

- [ ] Implement 'interactive patches'

Related issues:
[patches] https://gitlab.com/coala/GSoC/GSoC-2017/issues/136
[functionality] https://gitlab.com/coala/GSoC/GSoC-2017/issues/137

- [ ] Creation of asciinemas showing the usage of the implemented CLI improvements.

Related issue:
[asciinemas] https://gitlab.com/coala/GSoC/GSoC-2017/issues/158

https://github.com/coala/coala/issues/2912
https://github.com/coala/coala/issues/2699
https://github.com/coala/coala/issues/2541

GSoC Proposal for this project:- 
https://docs.google.com/document/d/10FHYhRzK9IxroDoPxI5V_nWCR3DO-g-C-g12B0WKkQA/edit?usp=sharing

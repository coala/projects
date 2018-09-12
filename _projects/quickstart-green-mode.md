---
collaborating_projects:
  - coala-quickstart
  - coala
desc: "Generate project compatible config files."
difficulty: medium
initiatives:
- GSoC
- RGSoC
issues:
markdown: quickstart-green-mode.md
mentors:
  - satwikkansal
  - adtac
  - dracarys09
name: "Quickstart Green Mode"
requirements:
- "The applicant should have at least one patch accepted to coala-quickstart
  repository."
- "The participant should have an understanding of coala's structure and
  config files."
- "The proposal needs to contain a clear concept."
status: completed
tags:
- coala-quickstart
- coala-ci
---

coala doesn't help the user unless the user is familiar with its settings and
bears. coala-quickstart is the project to handle this situation by asking the
users general questions about their project and producing a config file to lint
their code.

Currently coala-quickstart asks the user a lot of questions, and usually
generates a `.coafile` which causes coala-ci to generate errors.
There is a need for production of config files which yield 'green' results
which adapt the bears and their settings according to the project. This mode
would run coala many times in order to answer questions itself, altering bear
settings each time to find the set of settings which produces the least amount
of errors, and where necessary adds ignore for the remaining files.

 **Note:** coala-quickstart also has a `--ci` mode where it skips the questions
that require user interaction while the `--green` mode should determine optimal
answers by running coala and running from its output.

This will lead to easier and increase in adoption of coala across organizations
and user projects. This would initially configure the bears to agree with the
repo maintainers' existing coding style, that will result in a quickly mergable
Pull Request adding the `.coafile`. They can then make changes to the `.coafile`
and their coding style whenever they want to, or when the bears start supporting
their repositories' intricacies.

This project also aims to identify many large complex repositories in the early
phases, and work towards detecting those repos' settings automatically and
correctly.


#### Milestones

##### PREPARATION/BONDING

- Design documentation about how to approach the problem.

- Make and merge a cEP addressing the following points:

  - How do you plan to scan through the files for possible bear settings.

  - How do you plan to tackle conflicting bear settings in the whole project.

  - What are you plans on reaching other organizations for adoption of coala
    and the green mode config file in their codebase.

- The participant should get familiar with the coala-quickstart repository
  and make plans to utilize the already existing resources provided by
  coala-quickstart on collecting metadata and detecting inconsistencies
  in the code.

- The participant should come up with an initial set of organizations to
  serve as a measure of the effectiveness of the project in later phases.

##### CODING PHASE 1

- Framework for iterating through files has been constructed.

- Identify some bears with few *mandatory* settings which are easy to
  identify, and simple optional settings based upon the code provided.

##### CODING PHASE 2

- The project is able to deliver config files yielding absolute *green* results.

- Subtle intricacies and border edge cases have been identified, planned on
  how to tackle them.

##### CODING PHASE 3

- Final complete config files are deliverable by the project for any given
  codebase.

- A genuine effort has been made to submit Pull Requests to other orgs with
  the generated config file with supplementary CI configuration needed to
  run `coala-ci`.

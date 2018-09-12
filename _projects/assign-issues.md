---
collaborating_projects:
  - coala
  - GitMate
desc: "Make sure that developers get notified about new issues that need their
       input: Use the tags of the new issue to find developers that have
       previously solved similar Issues."
difficulty: high
status: completed
initiatives:
  - Research
issues: []
markdown: assign-issues.md
mentors:
  - fneu
  - sils
name: "Tag-based Assignment of Developers to Issues"
requirements:
  - "At least one patch to coala or GitMate should be accepted and merged."
  - "Familiarity with [IGitt](https://gitlab.com/gitmate/IGitt) is advised."
tags:
  - Workflow
  - GitHub
---

Issues are the primary way to organize developer tasks for projects on GitHub including coala.
The progress of these projects oftentimes relies on the right developers being notified of
new issues that fall into their territory of expertise.
With the project growing, the number of incoming issues increases. Not all developers can continuously
scan all incoming issues. It is therefore likely that developers miss issues that they could have
great influence on with little investment.

The goal of this project is to analyse incoming issues and evaluate the issue title, text, and tags to
determine the developer(s) most likely to be familiar with the task or problem at hand.

The scope of this project is aimed at a scientific research thesis. Therefore we would like to see a
clearly determined and structured approach as to how the appropriate developers will be selected.
Most appropriate would be a literature-backed approach that is implemented and verified throughout the
execution of this project.

#### Milestones

##### PROPOSAL

* A credible strategy for selecting developers is proposed

##### EVALUATION

* The data of previous developer activity has been collected and processed
* A toolchain is in place to automatically collect and evaluate incoming issues
* The proposed developer selection algorithm has been implemented
* The developer selection done by the algorithm has been verified or refuted

---
collaborating_projects:
  - coala
  - GitMate
desc: "Notify developers about pull requests that propose changes in their specific field of expertise"
difficulty: medium
initiatives:
  - Research
issues" : []
markdown: assign_pull_requests.md
mentors:
  - fneu
  - sils
name: "Automatic Assignment of Reviewers for Pull Requests"
requirements:
  - "At least one patch to coala or GitMate should be accepted and merged."
  - "Familiarity with [IGitt](https://gitlab.com/gitmate/IGitt) is advised"
tags:
  - Workflow
  - GitHub
---
Changes to the source code of a software can bring great improvements as well as
great deteriorations. Bugs are hard to spot, especially for developers that
have little experience with the code at hand. Important details of the implementation
can be hard to understand and easy to overlook.

It is therefore important that every change proposed by any developer gets reviewed
by an experienced dev before it is merged into the software source. The developer
best qualified for proposed changes is oftentimes the author of the previous
implementation or somebody that has worked on it. These people have experience with
the problem at hand as well as the exact code that is being changed.

Not every dev can follow all the proposed change to a project all the time, especially
once the project grows past a certain size. Therefore, a programmer might miss the
opportunity to give valuable input on a matter he has great experience with.

The goal of this project is to prevent this from happening and notify developers when another
developer proposes changes to code they have authored or worked on. The Code altered in
the pull request at hand should be evaluated for authorship as, i.e., indicated by the `git blame`
command. The most appropriate developer for reviewing the proposal should then be selected and
notified.

The scope of this project is aimed at a scientific research thesis. Therefore we would like to see a
clearly determined and structured approach as to how the appropriate developers will be selected.
Most appropriate would be a literature-backed approach that is implemented and verified throughout the
execution of this project.

#### Milestones

##### PROPOSAL

* A credible strategy for selecting developers is proposed

##### EVALUATION

* The data of previous developer activity has been collected and processed
* A toolchain is in place to automatically collect and evaluate the data of incoming pull requests
* The proposed developer selection algorithm has been implemented
* The developer selection done by the algorithm has been verified or refuted through real world testing

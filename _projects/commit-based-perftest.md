---
desc: "A technique to view the performance of a piece of software and
       automatically identify and classify performance drops and gains."
developers_involved: []
difficulty: medium
status: in_progress
initiatives:
  - Paper
issues: []
markdown: commit-based-perftest.md
name: "Researching commit-based performance testing"
requirements:
  - "The participant should have some prior experience with investigating the performance of software."
tags:
  - Research
  - coala
---
Imagine a `git blame` for performance. That is exactly what this project
is about - identifying commits that are interesting from a performance
point-of-view.

In this project, we aim to research for techniques to classify performance
changes across commits - find a correlation between the number of line
additions/subtractions and the performance change, identify whether a new
feature is really an optimization and so on.

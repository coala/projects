---
collaborating_projects:
  - coala
  - GitMate
desc: "Essentially a codecov for performance, but smarter."
difficulty: medium
initiatives:
  - Paper
issues: []
markdown: pr-perftest.md
name: "Performance measurement for pull requests"
requirements:
  - "Prior experience with commit-based performance testing."
tags:
  - coala
  - GitMate
  - performance
---
This project is based on the research work done in "Commit-based
performance testing". This is basically taking that research and
applying it to GitMate, creating a Codecov for performance
measurement.

With this integrated into GitMate, the project could receive direct and
immediate feedback on how a particular pull request affected their
performance. This would also use the previously researched algorithms
to identify the commits that lead to performance changes.

---
collaborating_projects:
  - coala
desc: "Provide public metrics about newcomers and the newcomer process."
difficulty: medium
initiatives:
  - GSoC
issues: []
markdown: newcomer-metrics.md
mentors:
  - jayvdb
  - gkrishnan724
  - prnvdixit
name: "Newcomer metrics and gamification"
requirements:
  - "The student should have patches and PRs in coala/community repo."
  - "The student should be familiar with web design tools & trends."
status: completed
tags:
  - community
  - webservice
---

coala tries to be a welcoming organisation for newcomers, giving them clear
pathways and as much direct assistance as needed and possible, and using 
automation tools to reduce the load on the core team.

We need to measure our community's success in this department, in order to
identify problems and constantly improve. We can also use metrics to gamify
this process, allowing newcomers to see how they performed at the newcomer
process compared to other newcomers, and giving badges to newcomers who perform
particularly well, and badges to developers who spend their time assisting a 
newcomer through the process successfully. The inverse is also possible, 
allowing the core team to evaluate when someone has consumed too much time with
too little progress, and allowing the newcomer and their peers to see cold 
facts that show who is taking too long to complete the process.

The primary metric measured is the time period for each newcomer from first
sighting on github/gitter, to the merge of a PR for a low difficulty issue that
was not created by the newcomer, and a ‘suggestions requested’ review of a low
difficulty PR by another community member and the review endorsed by a 
maintainer with a ‘+1’.(meta-reviews)

This will require that issues are manually downgraded to 'difficulty/newcomer'
if they were not actually the 'difficulty/low' originally expected, and each 
newcomer knows they need to have a maintainer super-review their review, and
actively beg for this super-review.

Some other very basic metrics that can be used are:

- Number of pushes
- Number of gitmate errors
- Number of reviewer comments
- Number of gitter messages by the newcomer
- Number of gitter messages to the newcomer

All of those can be improved by considering the size (bytes, etc) in addition to the 'number'.

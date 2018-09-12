---
collaborating_projects:
  - coala
desc: "Improve testing infrastructure, new plugins, improve labhub and security, better configurability"
developers_involved: []
difficulty: medium
initiatives:
  - GSoC
issues:
  - "https://github.com/coala/projects/issues/498"
  - "https://github.com/coala/corobo/issues/424"
  - "https://github.com/coala/corobo/issues/509"
  - "https://github.com/coala/corobo/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Fconfig"
markdown: corobo-enhancement.md
mentors:
  - meetmangukiya
  - gbin
  - mixih
name: "corobo enhancements(security, configurability and tests)"
requirements:
  - "At least one patch to corobo should be accepted and merged."
status: completed
tags:
  - community
  - corobo
---

Repository: https://github.com/coala/corobo

corobo is a collection of [errbot](http://errbot.io) chatbot framework plugins.

### Better tests and testing infrastructure

Some tests are really hacky involving manual instantiation of plugin classes,
etc. The default TestBase provided by errbot was not enough for testing plugins
like LabHub, which required intensive mocking.

One can analyze the current tests and see what bits are missing in the TestBase
provided by errbot, and try to implement it, such that it'd be accepted and
merged upstream.

### Improving labhub and security

Security has been one of major concerns due to some recent events. We want to
provide access controls based on user's GitHub team memberships. The ACL plugin
provided by errbot can be reused for this. Ideally, one should make the ACL
plugin extensible, allowing custom access control functions, etc. and then
extend it for coala specific needs.

### Better configurability

corobo has a potential to be used by other organizations for similar tasks as
well. For onboarding and automation. Major hurdle in this would be
configurability. Currently, corobo is not configurable and many plugins are
still very coala specific. The end goal would be to have easy configuration of
corobo to allow other orgs to adapt corobo to cater their needs.

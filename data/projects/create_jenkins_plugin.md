Jenkins is the most popular ci-cd server, and there are many corporations
who already use it. Integrating coala into Jenkins can attract business
clients better who could end up sponsoring/helping out coala.
It also generally allows a wider range of users to use coala
in their preferred way.

The goal of this project is to offer a coala plugin for Jenkins to
allow easy integration of coala. The users should benefit from coala
without additional manual work and get the result clearly in Jenkins.

[Writing a coala Jenkins Plugin - Google Groups](https://groups.google.com/forum/#!msg/jenkinsci-dev/2LciAQgdRcY/Kv2rQlwXAAAJ)
could help you to build the plugin.
There is a similiar plugin in Jenkins plugin repository,
[warnings plugin](https://wiki.jenkins-ci.org/display/JENKINS/Warnings+Plugin).
It can parse the output and present warnings and errors in JenkinsUI.
A parser for warnings plugin could be implemented in the early stage
of developing. It's easy to get started.

#### Milestones

##### PREPARATION/BONDING

* A test jenkins instance exists.
* An official repository exists with CI.

##### CODING PHASE 1

* A parser exists for parsing coala result.

##### CODING PHASE 2

* A working plugin with minimal functionality exists.
* Corresponding testsuite exists.
* Corresponding documentation exists.

The testsuite and documentation should be exhaustive and complete.
As the plugin is just rudimentary, the testsuite and documentation also
are simple at this stage.

##### CODING PHASE 3

* A working plugin with full functionality exists.
* A full covering testsuite exists.
* Full Documentation exists.

---
collaborating_projects:
  - coala
desc: "This project is about improving the 
       [bear installation tool](https://gitlab.com/coala/cib)
       and working around platform dependent requirements."
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/coala-bears/issues/845"
  - "https://github.com/coala/coala-bears/issues/664"
markdown: improve-installation.md
mentors:
  - Udayan12167
  - mbodenhamer
  - xferra
name: "Improve installation of coala and coala-bears"
requirements:
  - "The participant should have one patch to [coala-bears](https://github.com/coala/coala-bears) accepted."
  - "Huge plus is being familiar with the current design of cib"
  - "Knowledge of conda is a bonus, but not required."
status: completed
tags:
  - Bears
  - cib
---
This project mostly focuses on continuing the design of the
bear installation tool (https://gitlab.com/coala/cib) and fixing
dependency problems across bears. Also, there should be a way for
fixing bears which have platform requirements (we could use conda).

Currently, cib does basic operations but rudimentary, by parsing strings
and running "pip install" on packages.

Once this project is done, cib should be able to perform the following:

 - install any number of bears, specified as command line arguments
 - install all dependencies for required bears
 - update to the latest version any number of bears
 - check if dependencies are fulfilled for any number of bears
 - uninstall any number of bears

Each bear has a REQUIREMENTS tuple which holds instances of requirement classes,
found here (https://gitlab.com/coala/package_manager), which should be
reworked so that most operations in cib would be methods from these classes.

The problem right now is that some bears are not even getting installed by
cib. Besides those with which we have requirement classes, the rest
aren't even treated. So the plan is to create package managers for the
popular managers, and treat them all in a universal DistributionRequirement.

How this will work: Each requirement class will have an "install_command" and
an "install" method. We will just call requirement.install() and this will
run the command on its own, not caring which platform you're on. Ideally,
requirement.install() will use "install_command" to generate the command and
run it with "sarge". For the DistributionRequirement class, the
"install_command" method will check on which platform you are, and it will
generate the respective command.
If the package is named differently on each platform, it shall be specified
in the constructor. Take a mock example for a random bear:

REQUIREMENTS=(DistributionRequirement(
  apt-get='csslint', dnf='csslinter', brew='csslt')

If you're on Ubuntu, it will run "apt-get install csslint". If you're on
Fedora, it will run "dnf install csslinter", and so on.
If your package manager is not on the list, we should just print a warning
message so that the user tries to install it manually.

So cib should not care what kind of requirement each is, it should just
iterate through requirement instances and run "install_command()" on each,
with the requirement class handling the rest.

Another special case is made of bears which hold different installations
for each distribution. A good example is DartLintBear: it has different
installation options for Linux (a wget script), Windows and Mac.
https://www.dartlang.org/install

A good idea to treat these is Conda: a conda package contains a script
for each operating system (a .sh for Mac/Linux and a .bat for Windows).
When you try to install the conda package, it will run the according script.

The last special case is made out of bears which have bear dependencies.
We have quite a few of them (the Clang bears). For these, we should have a
BearRequirement class which means that this bear is a requirement of
another bear.

#### Milestones

##### PREPARATION/BONDING

* A [cEP](https://github.com/coala/cEPs) that describes cib is merged.
* https://github.com/coala/coala-bears/issues/845 is solved.
* cib should be tested with full coverage.

##### CODING PHASE 1

* All bears should have dependencies sorted out.
* The requirement classes should be rewritten so that most of the work is
  done within them, cib only having to run their methods and to gather the
  bears.
* Tests should be written for all the dependencies and the classes.
* All requirement classes shall be properly documented.

##### CODING PHASE 2

* The DistributionRequirement class should be fully working, and bears which
  have such requirements should have them fulfilled.
* Conda packages should be created for all bears which need such deps.

##### CODING PHASE 3

* cib should be fully functional such as that it can be used by users
  instead of having to install all the bears.
* Bears which have bear dependencies should be sorted out.
* Tests should be written for a full coverage of cib.
* cib should be fully documented, while also having a nice "help" menu.

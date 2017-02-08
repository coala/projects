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

As a start for this project, EACH bear must have all its dependencies solved
out (>80% do), including the platform dependent ones. For this to be done,
DistributionRequirement should be reworked.

#### Milestones

##### PREPARATION/BONDING

* A cEP that describes cib is merged.
* https://github.com/coala/coala-bears/issues/845 is solved.

##### CODING PHASE 1

* All bears should have dependencies sorted out.
* Tests should be written for all the dependencies and the classes.
* All requirement classes shall be properly documented.

##### CODING PHASE 2

* Platform dependencies should be working.

##### CODING PHASE 3

* cib should be fully functional such as that it can be used by users
  instead of having to install all the bears.
* Tests should be written for a full coverage of cib.
* cib should be fully documented, while also having a nice "help" menu.

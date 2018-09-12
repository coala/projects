---
collaborating_projects:
  - coala
desc: "Improve coala's caching and IO for the NextGen-Core"
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://github.com/coala/coala/issues/3530"
  - "https://github.com/coala/coala/issues/2912"
  - "https://github.com/coala/coala/issues/2541"
  - "https://github.com/coala/coala/issues/5136"
markdown: optimize-caching.md
mentors:
  - Makman2
  - shreyans800755
  - fneu
name: "Optimize Caching"
requirements:
  - "At least one patch to the coala core should be accepted and merged."
  - "The student should be familiar with ongoing technical cEPs especially
     [cEP-0002](https://github.com/coala/cEPs/blob/master/cEP-0002.md)."
  - "The proposal needs to show some familiarity with coala's caching implementation."
status: completed
tags:
  - Core
  - Bears
---
Currently, coala supports caching of project files. With it, coala runs
code analysis only on files that had changed since the last run, giving a
huge amortized performance improvement compared to simply running coala on
everything regardless. But it is still rather slow. On the other hand coala's
NextGen-Core has minimal caching support and needs a caching mechanism better
than the one used by the current core.

For example, we recently discovered that we have been importing all
the required modules irrespective of the conditional branch the program
takes - some branches do not require some modules. We improved this
by lazy-loading only the required modules as and when they are required - and
this greatly improved coala's startup speed.

Performance is key to usability - with faster runtimes, users can get on
with their work quicker. And it's fun looking for performance bottlenecks!

In this project, you're to come up with improved versions of the current caching
strategies used by coala's core and integrate these with the NextGen-Core.
Some enhancements such as ignoring unmodified directories and use of
`FileFactory` and `Directory` classes have been already explored and are to be
implemented as a part of this project. Please refer to the related issues to
learn more about these.

The student is also highly encouraged to come up with new solutions that may
increase performance even further.

#### Milestones

##### PREPARATION/BONDING

* The applicant has identified at least 3 other performance bottlenecks that can be
  improved. These can be smaller improvements, focussing on one particular
  aspect of coala's core.
* The applicant has drafted and merged a [cEP](https://github.com/coala/ceps)  
  describing all the proposed changes thoroughly.
* Preliminary prototypes have been tested to validate the proposed changes'  
  performance improvements.

##### CODING PHASE 1

* Thorough tests have been performed to concretely ascertain a measurable
  performance gain.
* `Directory` class has been implemented.
* `FileFactory` class has been implemented and the file contents in the
  `file-dict` have been replaced with the factory objects. (Both these classes
  would later be used for implementing ignore directories functionality)
* The corresponding code is properly tested, documented, reviewed, and merged.

##### CODING PHASE 2

* The Proposed change to ignore unchanged directories has been implemented.
* Thorough tests have been performed to concretely ascertain a measurable  
  performance gain.
* At least one of the cache control flags have been implemented.
* The corresponding code has been thoroughly tested, documented, reviewed, and  
  merged.

##### CODING PHASE 3

* All the remaining cache control flags like `--cache-optimize`,
  `--cache-compression`, etc have been implemented.
* The corresponding code is properly tested, documented, reviewed, and merged.
* A final report describing the measured performance improvements for the  
  various implemented techniqes has been published.

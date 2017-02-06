Currently, coala supports caching of project files. With it, coala runs
code analysis only on files that had changed since the last run, giving a
huge amortized performance improvement compared to simply running coala on
everything regardless. But it is still rather slow and there is still
room for improvement.

For example, we recently discovered that we have been importing all
the required modules irrespective of the conditional branch the program
takes - some branches do not require some modules. We improved this
by lazy-loading only the required modules as and when they are required - and
this greatly improved coala's startup speed.

Performance is key to usability - with faster runtimes, users can get on
with their work quicker. And it's fun looking for performance bottlenecks!

In this project, you're to improve on the current strategies. Some enhancements
such as section-level caching, globbing improvements to not expand on
unmodified directories, and others have been preliminarily explored. Please
refer to the related issues to learn more about these.

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

* The Proposed change to not explore unchanged directories has been  
  implemented.
* Thorough tests have been performed to concretely ascertain a measurable  
  performance gain.
* The corresponding code is properly tested, documented, reviewed, and merged.

##### CODING PHASE 2

* Section-based caching has been implemented.
* The corresponding code has been thoroughly tested, documented, reviewed, and  
  merged.
* At least one of the proposed performance bottleneck improvements have been  
  implemented, tested, documented, and merged.

##### CODING PHASE 3

* At least an additional proposed performance bottleneck improvement has been  
  implemented, tested, documented, and merged.
* A final report describing the measured performance improvements for the  
  various implemented techniqes has been published.

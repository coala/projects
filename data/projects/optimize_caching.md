This project involves improving coala's performance by implementing caching
strategies. One example is to use git-like approach at file-collection level
to not explore directories that haven't been modified. Caching per section can
also be implemented so sections without issues don't rerun on all files where
issues in other sections occurred.

Own performance optimization ideas are highly encouraged!


#### Milestones

##### PREPARATION/BONDING

* The applicant has determined a number of circumstances where coala needlessly
checks unmodified files.
* The applicant has created testcases to validate performance improvements
* A cEP describing the changes is merged.

##### CODING PHASE 1

* The applicant has achieved a measurable performance benefit in at least one
of the above cases.
* The respective code has been properly tested, documented and merged.

##### CODING PHASE 2

* Documentation and code for the 'section division' for 'per-section caching' has been completed and merged.
* Code for Git like approach to not explore directories that haven't been modified has been tested and merged.
* Own idea for performance optimization(If any) has been properly documented and work has been started. 
  

##### CODING PHASE 3

* Report of performance improvements for all the above mentioned criterias. 
* All the such cases have been 'solved'.
* The respective code has been properly tested, documented and merged.

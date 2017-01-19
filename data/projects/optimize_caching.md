This project involves improving coala's performance by implementing caching
strategies. One example is to use git-like approach at file-collection level
to not explore directories that haven't been modified. Caching per section can
also be implemented so sections without issues don't rerun on all files where
issues in other sections occurred.

Own performance optimization ideas are highly encouraged!


#### Milestones

##### GSOC 2017 CODING STARTS

* The applicant has determined a number of circumstances where coala needlessly
checks unmodified files.
* The applicant has created testcases to validate performance improvements
* A cEP describing the changes is merged.

##### GSOC 2017 MIDTERM

* The applicant has achieved a measurable performance benefit in at least one
of the above cases.
* The respective code has been properly tested, documented and merged.

##### GSOC 2017 FINAL

* At least two more cases have been 'solved' in a similar fashion.
* The respective code has been properly tested, documented and merged.

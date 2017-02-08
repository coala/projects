At coala we use GitMate as an automatic reviewing tool to reduce the time spent
with simple mistakes like trailing whitespaces and lines that are too long.
We also use it to gate merging pull requests before the commits are approved by
a maintainer.
All these features make dealing with the growing amount of pending pull requests
easier and allow us to focus in the important aspects of the code and skip the
manual scrutinizing of simple formal errors.
It essentially serves as a CI that comments issues directly in your Pull request
for you to fix.
The only problem with it is, that it only supports GitHub at the moment.

Most of coala's repositories are located at GitHub but some are with GitLab.
As GitMate and it's git wrapper IGITT will be released as open source, this is
the perfect opportunity to not only support all coala repositories but enable
GitMate support for all GitLab users.
To complete the big three git hosting providers, support for Bitbucket has to
be added. This way most developers using git should be able do benefit from
GitMate.

GitMate is a plugin system for handling events from a Git hosting platform like
GitHub.
Eventually it will support automatic code review via coala, just as
[the prototype](http://gitmate.io) does.
It is currently developed as a plugin platform so plugins can be reused
for any git hoster and just plugged into hooks, similar to the GitHub webhooks.

The goals of this project are:

- Add [GitLab](https://gitlab.com/) and
  [https://bitbucket.org/product]( Bitbucket) support for
  [IGitt](https://gitlab.com/gitmate/IGitt)
- Add GitLa and Bitbucket support for all existing hooks in GitMate

#### Milestones

##### PREPARATION/BONDING

- A clear concept exists for which hooks need which GitLab API endpoints.
- A clear concept exists for which objects in IGitt need to be extended or
  written.

##### CODING PHASE 1

- GitLab support for IGitt is done, documented and fully tested.
- A clear concept exists for which hooks need which Bitbucket API endpoints.
- A clear concept exists for which objects in IGitt need to be extended or
  written.


##### CODING PHASE 2

- Bitbucket support for IGitt is done, documented and fully tested.
- If the API was extended, the other supported platforms on IGitt serve the new
  features as well.

##### CODING PHASE 3

- GitLab support exists for all hooks on GitMate.
- Bitbucket support exists for all hooks on GitMate.

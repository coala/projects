GitMate is a plugin system for handling events from a Git hosting platform like
GitHub. Eventually it will support automatic code review via coala, just as
[our prototype](http://gitmate.io) does.

We are currently developing it as a plugin platform so plugins can be reused
for any git hoster and just plugged into hooks, similar to the GitHub webhooks.

The goals of this project are:

- Add [GitLab](https://gitlab.com/) support for [IGitt](https://gitlab.com/gitmate/IGitt)
- Add GitLab support for all existing hooks in GitMate

#### Milestones

##### GSOC 2017 CODING STARTS

- A clear concept exists for which hooks need which GitLab API endpoints.
- A clear concept exists for which objects in IGitt need to be extended or written.

##### GSOC 2017 MIDTERM

- GitLab support for IGitt is done, documented and fully tested.
- If the API was extended, the other supported platforms on IGitt serve the new features as well.

##### GSOC 2017 FINAL

- GitLab support exists for all hooks on GitMate.

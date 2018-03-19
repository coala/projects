---
name: "Commit content inspection"
desc: "Verification that the commit message accurately describes the patch"
requirements:
 - "Merged pull requests to a vcs bear, e.g. GitCommitBear."
difficulty: "low"
issues:
 - "https://github.com/coala/coala-bears/issues/337"
 - "https://github.com/coala/coala-bears/issues/1976"
 - "https://github.com/coala/coala-bears/issues/1037"
mentors:
 - jayvdb
 - satwikkansal
initiatives:
 - GSoC
tags:
 - CI
collaborating_projects:
 - "coala"
 - "unidiff"
---

There are many special types of commit messages that should be only used in conjunction with
patches containing a special type of content.

For example, `git revert` and `git merge` both generate a default commit message.

The coala project does want to allow `git revert` commits, but does not want to accept
`git merge` commits as our repositories are strictly fast-forward merges that do not
have an extra commit.

Both need to be detected, and allowed or disallowed based on configuration settings in
`.coafile`.

In addition there are special sequences that can be added to git commit messages to
instruct tools to operate in a certain way.  A common example is `[ci skip]` in
the commit message denotes that the CI engines should not build the commit.
Skipping CI is not usually desirable in coala commits, except in limited circumstances,
so the decision to permit `[ci skip]` in a commit message requires inspection of the
contents of the commit.

coala already depends on `unidiff`, which can be used to load the commit patch for
inspection.

## Git reverts

A `git revert` has a generated commit message, and implies that the patch is a reversal of a
previous patch which is explicitly mentioned in the commit message.

However sometimes the changes in the commit are not an exact reversal of the patch which was reverted.
This could be due to conflicts, or it might be a nefarious actor trying to introduce new code.

When a `git revert` commit message is detected, the contents of the commit should be compared with the
previously applied patch, and errors emitted based on configuration.

One way to achieve this is to load the two patches, and verify they are inverse of each other.

In the event that the patch is not identical, often an auxiallary note is required in the
commit message to highlight it is not a clean revert.

Also a similarity check is needed, as a minor difference in the patch might be acceptable,
but an error is desired if there are significant changes compared with the previous patch.

## Git merge

coala usually encounters git merges in Pull Requests due to GitHub rebases, which merge
master onto the pull request.  When this occurs, a custom message should explicitly
inform the patch author how to rectify their PR.

A special case is Travis CI builds, which are always a merge commit.  These need to be
handled carefully as a special case, so the bear skips past the special commit and
instead inspects the top most commit as it appears on the Pull Request.

#### Milestones

##### GSOC 2018 COMMUNITY/BONDING

* Create a cEP describing the coala process rules which will be enforced by GitCommitBear.
* Complete a work in progress of loading output of a git commit into `unidiff`.
* The student has enabled GitCommitBear on a repository of their own, and
  has created example Pull Requests which show the various special commit types
  for `git revert` and `git merge`, and Travis builds.
* The student has completed the newcomer process.

##### CODING PHASE 1

* GitCommitBear support for Travis commits

##### CODING PHASE 2

* GitCommitBear support of `git merge` commits

##### CODING PHASE 3

* GitCommitBear support of `git revert` commits

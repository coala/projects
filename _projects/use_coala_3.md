---
collaborating_projects:
  - docker-coala-base
desc: "Implement coala CI on a popular GitHub project, of your choice, using a Docker image on Travis CI, and report the results to the coala developers."
difficulty: medium
initiatives:
  - GCI
markdown: use_coala_3.md
mentors:
  - jayvdb
  - sils
name: "Implement coala CI on a popular GitHub repository"
requirements:
  - "Completed task 'use_coala_2'."
tags:
  - community
  - docker
---
This is a [coala GCI](https://github.com/coala/coala/wiki/Google-Code-In) repeatable
[2017 task](https://codein.withgoogle.com/dashboard/tasks/6236781315883008/)
coded as "CI3" in GCI.

## Task

Submit a Pull Request to a popular GitHub project so that the repository
contents conform to linter rules that are verified by coala CI on each
commit using Travis CI.

## Objective

This task is an exercise for participants to understand community
dynamics regarding implementation of
[linting](https://en.wikipedia.org/wiki/Lint_(software)) and
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
(CI).

## Background

This task builds on the
[Use coala "Advanced"](https://github.com/coala/coala/wiki/Google-Code-In-Task-Use-coala-Advanced)
task.

If you have not done that task, you need to do it first.

Your latest build should be green.
If your build is not green, repeat the "Use coala" and "Use coala Advanced" tasks
with another eligible repository until you have a green build at the completion of
those task.

## Create a new clone

During this task, you will be communicating with two repositories:

1. The origin, which is the central development repository
2. Your fork, which is where *you* develop.

Each of those are a different "remote".

This task will use 'origin' and 'myfork' respectively to refer to those.

If you are familiar with git, it is OK to use different names.

To set up a new clone with those names:

```bash
$ mkdir ~/<repo_name>_PR
$ cd ~/<repo_name>_PR
$ git clone https://github.com/<origin_username>/<repo_name>
$ cd <repo_name>
$ git remote add myfork git@github.com:<your_username>/<repo_name>.git
```

Your remote list should now look like:

```bash
$ git remote -v
myfork	git@github.com:<your_username>/<your_selected_repository_name>.git (fetch)
myfork	git@github.com:<your_username>/<your_selected_repository_name>.git (push)
origin	https://github.com/<origin_username>/<your_selected_repository_name> (fetch)
origin	https://github.com/<origin_username>/<your_selected_repository_name> (push)
```

## Create a clean branch

Before creating your new branch, update your master from the origin,
and push it to your fork.

```
$ git checkout master
$ git pull
...
$ git push myfork
```

Never create a Pull Request from your "master" branch.
This causes complications, such as difficulty when rebasing,
if there are changes to the repository while your
Pull Request is being reviewed.

```
$ git checkout -b coala-ci
$ git status
```

## Apply all your changes

When you submit a Pull Request to a repository, you should always have a
clean branch with a well organised series of commits.  For most Pull Requests
there should only be *one* commit in your Pull Request.  A Pull Request should
only have multiple commits if there are distinct sets of changes.

For this task, you should only have a single commit.

Changes from other branches can be imported to your new branch, without
importing all of the commits.

To import your `.coafile`, `.travis.yml` and any files your modified from
the `dnm-coala-ci-manual-fixes` branch, run:

```
$ git checkout dnm-coala-ci-manual-fixes .coafile .travis.yml etc
```

Commit your changes with the following commit message:

> Implements coala-ci
>
> Adds linters for file types ...., ..., ..., etc.

Push your changes to GitHub.

If there are any Travis errors, edit the files and amend your
commit using:

```
git commit --amend
```

## Submit your Pull Request

When you have a green build, with only a single commit, submit your Pull Request.

After you have submitted your Pull Request, add a comment:

```
This Pull Request is being done as part of the Google Code-In task https://github.com/coala/coala/wiki/Google-Code-In-Task-Implement-coala .

The mentors are : @jayvdb , @sils, @..
In addition to normal review comments, collaborators are welcome to come and discuss the task at https://gitter.im/coala/coala .
```

## Review comments

It is very likely that someone will add comments on your Pull Request.
They may ask for changes.

DO NOT RESPOND.
AT ALL.
NO!

GitHub is not Facebook.

Every time you interact with the Pull Request on the origin repository,
you are disrupting serious developers who may not appreciate your work.

Talk about each comment with your GCI mentor.

The appropriate response to a negative comment is an improved commit,
and a discussion is wasting everyones time.

Your GCI mentor will better understand the comments, and will guide you
with how to respond **appropriately**, or will respond for you.

## Assessment

The mentors will approve your task if you submitted a Pull Request with a
single commit that has a green Travis build, and after verifying that
you followed the steps above.

It is not necessary for your Pull Request to be accepted and merged.

If there are small improvements requested by the maintainers, your GCI mentor
may require that you amend your Pull Request.

If there are large improvements requested by the maintainers, or
requests that are not possible using coala, your GCI mentor will
approve your task.

## StackExchange

### Related StackOverflow tags

[coala](http://stackoverflow.com/questions/tagged/coala) |
[continuous-integration](http://stackoverflow.com/questions/tagged/continuous-integration) |
[lint](http://stackoverflow.com/questions/tagged/lint) |
[static-analysis](http://stackoverflow.com/questions/tagged/static-analysis) |
[git](http://stackoverflow.com/questions/tagged/git) |
[github](http://stackoverflow.com/questions/tagged/github) |
[travis-ci](http://stackoverflow.com/questions/tagged/travis-ci) |
[docker](http://stackoverflow.com/questions/tagged/docker) |
[bash](http://stackoverflow.com/questions/tagged/bash) |

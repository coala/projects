---
collaborating_projects:
  - docker-coala-base
desc: "Fix a popular GitHub project so that the repository contents conform to linter rules that are verified by coala CI on each commit using Travis CI."
difficulty: medium
initiatives:
  - GCI
markdown: use_coala_2.md
mentors:
  - jayvdb
  - sils
name: "Use coala CI on a popular GitHub repository - Advanced"
requirements:
  - "Completed task 'use_coala'."
tags:
  - community
  - docker
---
This is a [coala GCI](https://github.com/coala/coala/wiki/Google-Code-In) repeatable
[2017 task](https://codein.withgoogle.com/dashboard/tasks/5179714090041344/)
coded as "CI2" in GCI.

## Task

Fix a popular GitHub project so that the repository contents conform to
linter rules that are verified by coala CI on each commit using Travis CI.

This activity is done entirely in your own repositories, and does not involve
interacting with other OSS projects.

Do NOT submit any changes to another OSS project.
There is a separate GCI task for submitting your changes to other OSS projects,
*after* a coala developer has reviewed and accepted your work for this task.

## Requirements

The steps in this task provide `git` commands that can be run in a `bash` terminal,
which is commonly available on Linux and Mac OS.  On these operating systems,
you can install those tools using your package manager.

For Mac OS, <http://brew.sh/> is the recommended package manager.

Windows users can install [Git-for-Windows](https://git-for-windows.github.io/)
or [msys2](https://msys2.github.io/) for an equivalent environment.

If you complete this task without a terminal,
please let us know which tools you used on the gitter chat.

## Objective

This task is an exercise for participants to practise
[linting](https://en.wikipedia.org/wiki/Lint_(software)) and
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
(CI).

## Background

This task builds on the beginner task called
[Use coala](https://github.com/coala/coala/wiki/Google-Code-In-Task-Use-coala).
If you have not done that task, you need to do it as part of this task.

After completing that task, you should have found some of the files:

1. are file types not supported by coala, and/or
2. did not confirm to the linter rules.

This task is for the second problem, and this task will be conducted
in the same repository.

Your Travis build should be red from the previous task.
If you do not have a red build from the previous task,
repeat the "Use coala" task with another eligible repository
until you have a red build at the completion of that task.

## Create `.coafile`

In the previous task, we used `coala-quickstart` to automatically
generate a `.coafile`.

In this task you will need to modify the `.coafile`, so the first
step is to copy the automatically generated `.coafile` as your
starting point.

First clone your repository.

```
$ git clone https://github.com/your_username/your_selected_repository_name
$ cd your_selected_repository_name
```

Now create a new branch based on the default branch.

```
$ git checkout -b coala-ci-v2
```

Create a `.coafile` with the automatically generated `.coafile` that
appears near the top of your Travis-CI build log of the branch
`coala-ci-v1` from the previous task.

Create a `.travis.yml` which uses the new `.coafile` instead of
generating the `.coafile`, using the sample provided in the
[documentation](http://coala.readthedocs.io/en/latest/Users/Docker_Image.html#coala-on-travis-ci)
without modification.

Commit and push your `.coafile` and `.travis.yml`.

```
$ git add .coafile .travis.yml
$ git commit -m "Add .coafile and .travis.yml"
$ git push
```

This will trigger another Travis-CI build, which should have the
same errors as your previous `coala-ci-v1` build.
This build can be ignored.

## Configure the bears

Each coala bear (linter) defaults to a certain style.
This default style may not be the same style as the style chosen by
the developers of the repository you that have selected.

For example, the `FilenameBear` assumes the
["snake case"](https://en.wikipedia.org/wiki/Snake_case).
For many languages, snake case is not an appropriate default.
See https://github.com/coala/coala-bears/issues/1083

From the previous task, you should have downloaded two patch files.

1. `sans-whitespace.diff`
2. `with-whitespace.diff`

Read through those patches to look for problems where the style
of the files in the repository is **consistently** different from
the style that the bears are using.

For each style difference, read through the
[bear documentation](https://github.com/coala/bear-docs/) to
determine how to modify `.coafile` to alter the behaviour of the bear.

Often the external linter bear will support an external configuration file
which can be added to the repository, and mentioned in the `.coafile`,
to alter the behaviour of the bear.

Commit your modified `.coafile`, and push it to GitHub, which will
trigger a new build on Travis CI.

Repeat this step until these bears are only reporting style inconsistencies.

## Create a new branch for manual fixes

Create a new branch called 'dnm-coala-ci-manual-fixes', and push
the new branch to GitHub, to trigger a Travis CI build
of the new branch.

```
git checkout coala-ci-v2
git checkout -b dnm-coala-ci-manual-fixes
git push
```

## Manual fixing

Read through the coala-ci output in the Travis build log, and try to correct
the errors that it reported by editing the files in the repository.

Commit your changes with the following commit message template:

> [DNM] manual coala error fixes
>
> Do not merge.
>
> These changes are to fix coala errors.
> [add more notes here]

Replace `[add more notes here]` with as much information as you can,
starting a new line manually when the line is approximately 70 characters
wide.

Push the commit to GitHub, to trigger another Travis CI build.

If your build is not green, repeat the process in this section,
editing the files again and pushing a new commit to GitHub so
Travis will provide a fresh coala report with less errors.

If you find that you can not remove an error, or your changes
to fix one error cause a different error to appear, ignore that
error and fix the other errors.

When you only have errors that you can not fix, continue to the
next section of this task.

## Investigate remaining errors on your workstation

**Note**: See [Local usage](https://github.com/coala/coala/wiki/Google-Code-In-Help-Local-usage)
for running coala on your own computer.

If you only have a few minor errors that you can not solve,
it is worthwhile installing coala and the relevant dependencies
on your own computer.

Often it is easier to find the syntax and style required by the
linter if you can quickly edit the problematic line and recheck,
allowing many combinations to be tested quickly.

If the dependencies are too large for you to download, skip this
step.

## Report results

Update a wiki page called "coala Report" in your fork of the selected repository,
appending the following template into the page and then fill in the answers:

```
# Manual lint removal results

<link to the latest Travis build>

<diff link for the manual changes you made>

Status: Green or Red

## File types

Which file types did you succeed to lint (clean)?

Which file types still have errors? ...

Which bears still report errors?

## Analysis

<Describe the problems that you were not able to fix.>

## Error log

<paste the section of the build log which shows the linting errors
that you could not fix>

```

## Assessment

The mentors will read your report, and check your branches on GitHub, and
the Travis build logs to verify that you followed the steps above.

You may be asked to redo the process if you deviated from the steps above.

## Next task

If you have a green build, with all bears enabled,
you are ready for the "Implement coala" task.

If you still have a red build, with lots of bears failing,
you should do this task again with a different repository.

If your red build only has a few errors, your mentor will help
you decide which of the following tasks you should do:

- [Implement coala](https://github.com/coala/coala/wiki/Google-Code-In-Task-Implement-coala)
- [Create linter bear](https://github.com/coala/coala/wiki/Google-Code-In-Task-Create-Linter-Bear)
- "Improve a bear"

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

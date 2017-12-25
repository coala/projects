---
collaborating_projects:
  - docker-coala-base
desc: "Use coala CI on a popular GitHub project, of your choice, using a Docker image on Travis CI, and report the results to the coala developers."
difficulty: beginner
initiatives:
  - GCI
issues:
  - "https://github.com/coala/meta/issues/58"
  - "https://github.com/coala/meta/issues/81"
markdown: use_coala.md
mentors:
  - jayvdb
  - sils
name: "Use coala CI on a popular GitHub repository"
requirements:
  - "Joined http://coala.io/chat ."
tags:
  - community
  - docker
---
This is a "beginner" [coala GCI](https://github.com/coala/coala/wiki/Google-Code-In)
repeatable [2017 task](https://codein.withgoogle.com/dashboard/tasks/4705163153506304/)
coded as "CI1" in GCI.

## Task

Use coala CI on a popular GitHub project, of your choice, using a Docker image
on Travis CI, and report the results to the coala developers.

This activity is done entirely using a web browser in your own repositories on GitHub,
and does not involve interacting with other OSS projects, or installing or using
any software on your own computer.

Please do NOT submit any changes to another OSS project in this beginner task.
There is a separate GCI task for submitting your changes to other OSS projects,
which you can commence *after* a coala developer has reviewed and accepted
your work for this task.

## Objective

This task assists participants learn about
[linting](https://en.wikipedia.org/wiki/Lint_(software)) and
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
(CI).

## Background

[Travis CI](https://en.wikipedia.org/wiki/Travis_CI) runs jobs for each commit
in a GitHub repository according to a `.travis.yml` configuration file,
typically used to ensure that every commit is acceptable.

Travis CI can run a [Docker](https://en.wikipedia.org/wiki/Docker_(software)),
which is a pre-built system image containing pre-configured applications.
coala provides a Docker that includes most of the dependencies already installed
so that coala can check most file types.

## Select a project

### Select a GitHub repository

Find a GitHub repository that meets all these criteria:

1. 100 or more [stars](https://help.github.com/articles/about-stars/),

2. a [Pull Request](https://help.github.com/articles/about-pull-requests/)
   ''merged'' since 1 October 2017, and

3. does not use any Continuous Integration.

[GitHub Advanced Search](https://help.github.com/articles/advanced-search/)
can be used to help select a repository that meets those criteria.

To filter out repositories that do not meet the first two requirements, combine

1. [`stars:>99`](https://github.com/search?o=desc&q=stars%3A%3E%3D99&ref=searchresults&s=updated&type=Repositories&utf8=%E2%9C%93), and
2. [`pushed:>2017-09-30`](https://github.com/search?utf8=%E2%9C%93&q=pushed%3A%3E2017-09-30&type=Repositories&ref=searchresults)

The [combined query](https://github.com/search?o=asc&q=stars%3A%3E%3D100+pushed%3A>2017-09-30&ref=searchresults&s=updated&type=Repositories&utf8=%E2%9C%93)
has more than 28,000 repository results, so there are many to choose from.

An optional additional search term is
[`forks:>100`](https://github.com/search?o=asc&q=stars%3A%3E%3D100+pushed%3A%3E2017-09-30+forks%3A%3E%3D100&ref=searchresults&s=updated&type=Repositories&utf8=%E2%9C%93)
which returns over 11,000 repository results, and these are more likely
to be suitable for this task.

On the left hand side of the search results page is a "Languages"
selector that you might like to use to restrict the programming language
to one that you like.  Currently the breakdown is:

| Language    | Repositories
| ----------- | ------------
| JavaScript  | 2,326
| Java        | 1,469
| Python      | 1,207
| PHP         |  733
| Ruby        | 685
| C++         | 648
| C           | 576
| Objective-C | 431
| C#          | 418
| HTML        | 407

However, you can also find many other languages manually, by adding
the `language` search term term, such as
[Pascal](https://github.com/search?q=stars%3A%3E%3D100+pushed%3A%3E2017-09-30+forks%3A%3E%3D100+language%3APascal&ref=searchresults&type=Repositories&utf8=%E2%9C%93).

Another optional additional search term is [`size:5000..10000`](https://github.com/search?o=asc&q=stars%3A%3E%3D100+pushed%3A%3E2017-09-30+forks%3A%3E%3D100+size%3A5000..10000&ref=searchresults&s=forks&type=Repositories&utf8=%E2%9C%93)
which restricts the list to repositories of size 5-10Mb.
If you have a small Internet bandwidth, a smaller repository is a better
choice for when you progress to the second task.

However many popular projects will already be using Continuous Integration,
and Travis CI is not the only Continuous Integration provider
[available](https://github.com/integrations/feature/continuous-integration)
on GitHub.  We need to check the next criteria manually.

To check whether a repository is using any Continuous Integration, click
"Commits" on the front page of the GitHub repository in Desktop mode
(it is not visible on the mobile mode).

Beside each commit, there may be an orange, red or green indicator,
which informs the reader that a CI routine is in progress, failed or succeeded,
respectively.

If there is indicator, the repository has some CI, and is not appropriate
for this task.

For example, [coala/coala](https://github.com/coala/coala/commits/master)
does have these indicators, while the
[linux kernel](https://github.com/torvalds/linux/commits/master) does not.

One exception is that sometimes the status indicator is only showing
that a publish process was successful, such as the "GitHub Pages" job at
[github/open-source-survey](https://github.com/github/open-source-survey/commits/master).
This is not Continuous Integration.  However note that a GitHub Pages
repository that has `gh-pages` as its default branch is not suitable for
this task, as Travis-CI ignores `gh-pages` branches by default.

Also look for "`[username] committed with [software]`", which means that
the software is controlling the pushes, and typically the software is
performing Continuous Integration that is not visible on GitHub.

Finally there is one more manual check.  Earlier we used `pushed:>2017-10-01`
to check if had a recent [`push`](https://git-scm.com/docs/git-push), but that
is not the same as a recent Pull Request.

To check that a repository has a merged Pull Request in the last month, click
on "Pull Requests" on the front page of the GitHub repository in Desktop mode
(it is not visible on the mobile mode), and in the text box change
`is:pr is:open` to `is:merged` and press the
[Enter key](https://en.wikipedia.org/wiki/Enter_key).

This task is limited to only repositories with recently merged pull requests
as there are many repositories on GitHub that are a mirror, and the real
development occurs somewhere else, and possibly has Continuous Integration
already occurring in the real development area, with GitHub only seeing
the approved commits.

For example, the linux kernel repository's last
[merged pull request](https://github.com/torvalds/linux/pulls?q=is%3Amerged)
was 22 April 2014, so it is not eligible for this task.

Another reason for this limit is that the owner of the repository may not
be active any more.

Unfortunately GitHub does not allow repositories to disable Pull Requests,
so the only way to be confident the project is interested in new Pull Requests
is to see whether they have merged Pull Requests recently.

### Register your GitHub repository

Only one GCI participant may do this task on any repository.
This is to avoid duplicated and wasted effort by GCI participants.

To prevent multiple participants doing this task on the same repository,
before continuing each participant must record the repository they have
selected in
[a Google spreadsheet](https://docs.google.com/spreadsheets/d/1qMUsupzK30MaM79Jnq8N9ZitZgG2g7ae08Q-f8ExTDQ/edit).

First search in that spreadsheet that nobody has selected your repository.
If nobody has used it, add a row and fill in the first two columns only,
recording your username and your selected repository.

The Google Spreadsheet will automatically save within a few seconds,
and you can continue.  And then other participants will know to avoid
the repository that you have selected for this task.

### Fork the repository

On the repository that you have selected, click the
[fork](https://help.github.com/articles/fork-a-repo/) button.
![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)

You should be redirected to your own copy of the same repository on GitHub,
with a URL like `https://github.com/your_username/your_selected_repository_name`

### Activate Travis CI

Log into https://travis-ci.org/ using your GitHub account.

To enable Travis CI on your fork of the repository, go to
[your profile](https://travis-ci.org/profile).  Then

1. click "Sync account"
2. scroll down to find your fork and click beside the grey "X" to make it a blue tick.

### Trigger a Travis CI test build

Every time there is a commit to your fork, Travis CI will attempt to build the project,
using the configuration in a special file called [`.travis.yml`](https://docs.travis-ci.com/user/customizing-the-build).

On your GitHub repository page, such as `https://github.com/your_username/your_selected_repository_name`,
click "Create new file".

In the file name input box, enter `.travis.yml`, and in the file contents textarea
add the following:

```yaml
language: generic
addons:
  apt:
    sources: debian-sid
    packages: file
script:
  - file --version || true
  - find . -not \( -path ./.git -prune \) -type f -exec file -N {} + > file.list
  - sed 's/^\.\/\(.*\):/\1:/;s/^.*\/\(.*\):/\1:/;/^[^:]*\..*:/{s/^.*\(\.[^. ]*\):/\1:/;}' file.list | sort | uniq -c | sort -nr
```

This will list all of the extensions used in the repository, with additional information
detected by [UNIX file](https://en.wikipedia.org/wiki/File_(command)) version 5.29.

At the bottom of the page, select "Create a new branch for this commit and start a pull request".
It will suggest a new branch name like "[your username]-patch-1".
That is OK.
Click "Propose new file".

You will be taken to a "Open a pull request" page.
This is submitting a Pull Request to your own repository.
Click "Create Pull Request".

You will be taken to a "Create .travis.yml" Pull Request,
and very soon after a green "All checks have passed" should appear.
You can now go to your repository in Travis CI, and see a "green" build.
Click on "Show all checks", and then the "Details" links that appears.

You will be taken to a page like
[this build of sails-docs](https://travis-ci.org/jayvdb/sails-docs/builds/188699889).

This was just a test build, but you will need that list of extensions
later, when you write your report.

Click Back in your browser, and close that Pull Request.

Do **NOT** merge that Pull Request.  Click "Close Pull Request".

## Run coala in continuous integration mode

**Note**: See [Local usage](https://github.com/coala/coala/wiki/Google-Code-In-Help-Local-usage)
for running coala on your own computer.

### Create `.travis.yml`

As installing `coala`, `coala-bears` and all of the dependencies is a complex
process, the coala team provides a Docker image which has everything installed
and ready to be used.

Your `.travis.yml` will be based on the sample provided in the
[documentation](http://coala.readthedocs.io/en/latest/Users/Docker_Image.html)
with experimental automatic `.coafile` generation.

On your GitHub repository page, such as `https://github.com/your_username/your_selected_repository_name`,
click "Create new file".

Fill in the form:

1. In the file name input box, enter `.travis.yml`.

2. In the file contents textarea, add the following

   ```yaml
   language: generic
   services: docker
   script:
     - touch .gitignore
     - >
       docker run --volume=$(pwd):/app --workdir=/app coala/base:0.9 /bin/bash -c
       "coala-quickstart --ci;
       printf '# Quickstart generated .coafile: ';
       cat .coafile | curl -F 'clbin=<-' https://clbin.com 2>/dev/null;
       cat .coafile;
       echo '# End of .coafile';
       coala --ci"
   ```

3. In the "Commit new file" section,

   3.1. In the short commit message text field, add "Add Travis CI using coala CI Docker"

   3.2. Select "Create a new branch for this commit and start a pull request".

   3.3. In the text field under that, replace the sample new branch name with `coala-ci-v1`.

4. Click "Propose new file".

You will be taken to a "Open a pull request" page, which you can ignore.
You have already created the branch `coala-ci-v1`, with a commit,
which has triggered another Travis CI build.

You can now go to the [Travis CI build](https://travis-ci.org/) list and watch
your coala CI build occur in real time.

It should look like these (outdated):

- https://travis-ci.org/jayvdb/HC/builds/178769602
- https://travis-ci.org/jayvdb/gci16.fossasia.org/builds/179832299

### Report initial findings

Create a wiki page called "coala Report" in your fork of the selected repository,
and copy the following template into the page and then fill in the answers:

```
# Initial findings

<link to the latest Travis build of your fork>

<link to the generated .coafile on https://clbin.com>

Status: Green or Red

## File types

Which file extensions did you enable linting, and which bears were used?

| Ext.  | Bears used
| ----- | -----------
| .*    | FilenameBear, InvalidLinkBear, LineCountBear, LineLengthBear, SpaceConsistencyBear
| .yml  | YAMLLintBear
| .md   |
| .rst  |
| .js   |
| .css  |
| .py   |
| .java |
| etc   |

Which file types are not supported?

<file extensions from your first build which coala-quickstart ignored>

Which file types had errors? ...

## Errors

<paste the sections of the build log which shows the types of linting issues>

```

If your Travis CI build is 'green', you can not use this repository
to do auto-fixing, and so you should skip to the Assessment phase of
your task.

### Auto-fixing errors

If your Travis CI build is 'red', we can try to use `coala --apply-patches`
to see if the problems can be fixed automatically by `coala`.

On your GitHub repository page, such as `https://github.com/your_username/your_selected_repository_name`:

1. click "branches",
2. click on the `coala-ci-v1` branch you have created,
3. click on the file `.travis.yml` that you created,
4. click on the ["Edit this file"](https://help.github.com/articles/editing-files-in-your-repository/) button.

We are going to add `coala --apply-patches`, and then use `git diff` to
create patch files, and upload them to https://clbin.com/.

Replace the contents of the file with the following:

```yaml
language: generic
services: docker
script:
  - touch .gitignore
  - >
    docker run --volume=$(pwd):/app --workdir=/app coala/base:0.9 /bin/bash -c
    "
    coala-quickstart --ci;
    coala --ci --apply-patches --no-orig >coala-ci.log
    "
  - git add --all
  # Create two diff files, and upload to https://clbin.com
  - >
    git diff --cached --find-renames \
      --ignore-all-space --ignore-blank-lines \
      > sans-whitespace.diff
  - cat sans-whitespace.diff | curl -F 'clbin=<-' https://clbin.com
  - git diff --cached --find-renames > with-whitespace.diff
  - cat with-whitespace.diff | curl -F 'clbin=<-' https://clbin.com
  # Upload logs to https://clbin.com
  - cat coala-ci.log | curl -F 'clbin=<-' https://clbin.com
```

In the "Commit changes" box under the file contents

1. Set the commit message to "[DNM] Uses coala CI --apply-patches"
2. Select "Create a new branch for this commit and start a pull request."
3. In the text field under that, replace the sample new branch name with `dnm-coala-ci-auto-patched`.
4. Click "Propose file change".

This will create a commit and trigger another Travis CI build.

It will also load a page called "Open a pull request", which you should ignore.

### Extract the patch pastes

Load the Travis build log.

At the end of the Travis build log will be two links to https://clbin.com/ ,
which contain the `sans-whitespace.diff` and `with-whitespace.diff`
that were created by the Travis CI build and uploaded to https://clbin.com/ .
Download those two files from https://clbin.com/.

Use a programmers text editor to open these patch files.
These patches will be using Unix EOL, which some basic Windows
text editors, such as Notepad, do not understand.

### Upload patches to your repository

On your GitHub repository page, such as `https://github.com/your_username/your_selected_repository_name`:

1. click "Upload files",
2. Drag-and-drop your patch files to the area provided,
3. Select "Create a new branch for this commit and start a pull request.", and
4. Name the new branch 'coala-ci-patches'.
5. Click "commit".

### Auto-fixed results

Create a new section of your wiki page called "Auto-fixes".

Add the two https://clbin.com/ links to this section, and also link
to the same files in the `coala-ci-patches` branch of your repository.

Update your wiki page to briefly describe the problems that were automatically
fixed.

Also try to record the types of problems encountered.

## Assessment

The mentors will read your "coala Report", and check your branches on GitHub, and
the Travis build logs to verify that you followed the steps above.

You may be asked to redo the process if you deviated from the steps above.

## Next task

After satisfactorily completing this task, the next task in this series is
[advanced "Use coala"](https://github.com/coala/coala/wiki/Google-Code-In-Task-Use-coala-Advanced).
If your Travis build was green, you must find another repository to complete
the advanced "Use coala" task, as it requires a red build.

If your Travis build was green, you may use this repository for the
["Implement coala"](https://github.com/coala/coala/wiki/Google-Code-In-Task-Implement-coala)
task, however you must complete the *advanced* "Use coala" task first.

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

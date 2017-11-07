---
collaborating_projects:
  - coala
desc: "Add a ISSUE_TEMPLATE.md file to a GitHub repository."
difficulty: low
initiatives:
  - GCI
issues:
  - "https://github.com/coala/coala/wiki/List-of-repositories-for-ISSUE_TEMPLATE.md"
markdown: add_issue_template.md
mentors:
  - Monal5031
  - yashovardhanagrawal
  - prashant0598
name: "Add a ISSUE_TEMPLATE.md file to GitHub repository"
requirements:
  - "Joined http://coala.io/chat ."
tags:
  - github
  - markdown
  - standard templates
---
This is a repeatable task for Google Code-in.

## Task

Add a ISSUE_TEMPLATE.md file to a GitHub repository mentioned in the
issue's wiki, so that a standard template appears whenever someone
will try to create a new issue.

## Requirements

This task only requires use of the GitHub web interface.

## Process

There are three steps for this task:

1. Select a repository with open issue from wiki link.
2. Determine a suitable standard issue template for the repository.
3. Create a pull request adding a `ISSUE_TEMPLATE.md` file.

----

## Step 1

Go through the [issue wiki](https://github.com/coala/coala/wiki/List-of-repositories-for-ISSUE_TEMPLATE.md)
and select an issue which is not yet completed or taken by someone else.

Check that GitHub does not show anything while opening an issue
directly from GitHub UI, (You will have to check this manually).

Check that the repository does not have a `ISSUE_TEMPLATE.md` file.
Maybe GitHub does not recognise the contents of the file.

Check the pull requests for the repository.
Maybe someone has already proposed a `ISSUE_TEMPLATE.md` file.
Do not send another pull request to add a `ISSUE_TEMPLATE.md` file.

## Step 2

### Does the repository already have an issue template selected?

It is quite common for a repository to not have a `ISSUE_TEMPLATE.md`
file, but still have already selected a template which they want to use or
even have some points which need be added.

If the repository has already chosen a template and/or points, simply create the
`ISSUE_TEMPLATE.md` file with that template and/or points.

Check the issues in the repository.
Maybe an issue already contains a discussion about template or points to use.

A good approach is to search the repository for the words `ISSUE_TEMPLATE` or 
`issue template`, and read each search result for hints of existing template
and/or points.

If you are confident that you have found the template and/or points that is implicitly
chosen by the project team members, skip to Step 3.

### Or, discuss suitable points for the issue template with project team members.

It is always good to consult a mentor or project team member for suitable points for
the template.

It is recommended that beginners go back to step 1 and find a different repository that
already mentions a specific issue template.

It maybe possible that issue template is going to be same for multiple repositories,
in such case it is mentioned in issue description which existing template to use.

## Step 3

You can read more about the standard templates [here](https://github.com/blog/2111-issue-and-pull-request-templates)

1. Copy the templates and/or points in a file temporarily.
2. Fork the repository
3. Add a `ISSUE_TEMPLATE.md` file to the repository, committing the new file to a branch.
   1. Make sure you paste all the contents properly in the file.
   2. Make sure you are not missing out any points which must be there in the file.
   3. Your file should follow proper markdown style.
4. Submit your branch to the main repository as a pull request.


## Examples

Examples of this task in coala repository is
[this file](https://github.com/coala/coala/blob/master/ISSUE_TEMPLATE).

## Stackoverflow tags

[github](https://stackoverflow.com/questions/tagged/github) |
[markdown](https://stackoverflow.com/questions/tagged/markdown) |
[issue templates](https://stackoverflow.com/search?q=issue+templates)
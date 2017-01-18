# Projects

A website that showcases projects! **If you want to use it and it's not exactly
fitting your purpose, please do make upstream changes. We expect this project
to be of use to others and we're happy to make it more generic so it's easier
to adapt to other organizations.**

(It'd be nice to have an organization YML or so e.g.)

## Purpose

This is designed for GSoC but can be used for other initiatives at the same
time. We use it for research theses, GSoC, GCI and maybe others in the future.

Why?

- It's way more appealing to students.
- You can search and filter projects.
- Project ideas as structured data are more concise and you're sure to have all
  points covered - at the same time we can show students an overview and showing
  the full information only when needed.
- A proper review process can be used for triaging and iterating on project
  ideas.
- Stop wasting time maintaining a mentors list. This can be generated from the
  projects.

## Defining Projects

Mentors and admins can define projects as JSON using the following structure:

```json
{
  "name" : "Write Project Name Here",
  "desc" : "Write a one line Description of Project here.",
  "requirements" : [
    "The applicant has to fulfill this to get started."
  ],
  "difficulty" : "low|medium|high",
  "issues" : [
    "https://github.com/coala/coala/issues/####"
  ],
  "mentors" : [
    "sils",
    "sims1253"
  ],
  "initiatives" : ["GSoC"],
  "tags" : ["Plugins", "CI"],
  "markdown" : "Add the markdown file in data/projects/ directory. The name of that .md file should come here."

}
```

Sample Markdown File

This file should contain Project Description and Milestones in following format.
_You should have atleast these three milestones for GSoC projects._

```
This space is for the main description. Use it wisely. 

#### Milestones

##### GSOC 2017 CODING STARTS

* Conceptual work should be finished.
* The student have a repository, know how to work with the community.
* The applicant should know the community.

##### GSOC 2017 MIDTERM

* Everything listed here has to be reviewed and merged by midterm.
* No exceptions to that. Changing the goals is possible together with mentors.
* Yes, that includes tests and documentation.

##### GSOC 2017 FINAL

* Everything has to be reviewed and merged.
* Including tests and docs, again.

```

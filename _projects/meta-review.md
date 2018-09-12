---
collaborating_projects:
  - coala
desc: "Implement a meta-review system that tracks and provides meaningful analysis of reactions on reviews."
difficulty: medium
initiatives:
  - GSoC
issues:
  - "https://github.com/coala/projects/issues/480"
markdown: meta-review.md
mentors:
  - hemangsk
  - blazeu
  - alisianoi
  - andrewda
name: "Meta-review"
requirements:
  - "The applicant should have at least one patch merged to any of the coala repositories."
  - "The applicant should be familiar with GitHub GraphQL API and JavaScript."
status: completed
tags:
  - community
  - web
---

The meta-review project is about building a meta-review system,
similar to a meta-moderation system, that can track emoji responses to
review comments. These responses are to be collected, processed and displayed
on [gh-board](https://github.com/coala/gh-board), which is a nice serverless
kanban board.

People including the author of pull request respond to comments by attaching
emojis. Those emojis are called meta-review, or
[reactions](https://developer.github.com/v4/enum/reactioncontent/). THUMBS_UP
and THUMBS_DOWN, together with other reactions, are used by people especially
the author of pull request to publicly acknowledge or reject review comments.
This provides feedback to reviewers and all other members.

However, those reactions spread over all PRs and are not collected and
analyzed. By tracking reactions, a nice feedback loop would be created
for both senior and junior reviewers. Also, this information (e.g. some
pre-fetching code and json files) can be used as newcomer metrics in newcomer
gamification.

One goal of this project is to encourage people to do meta-reviews,
systematically. Worst case is that the tracking stores in the json which
PR do not have meta-reviews, and gh-board shows only a list of those PRs
(and the user must then find the reviews in GitHub PR webapp, and do
meta-review there). An improvement is to store the identifier of the PR
comments which do not have meta-reviews, and gh-board links to the PR
review comment in GitHub PR webapp. In the ultimate version, gh-board
would show the review comments.

Also, to encourage people to do more meta-reviews, statistics of meta-reviews
are to be collected and analysed. People who do meta-reviews will get scores
according to some metrics. A ranking list is to be displayed on gh-board.

The scope of this project would exclude non-public meta-reviews. That is,
there would not be any anonymous meta-reviews as that introduces too many
additional complexities. The public only version would be used for
long time before adding support for non-public meta-reviews.

To conclude, this project builds a meta-review system on gh-board to display
statistics (score ranking, meta-reviews in need), and encourage people to
do meta-review.

#### Milestones

##### PREPARATION/BONDING

- The applicant has proposed and merged a cEP of how meta-reviews could be
  tracked and handled.
- The applicant has created mockups for the frontend.
- The applicant gets acquainted with MaterializeCSS.
- The applicant gets acquainted with data visualization
  library (e.g. d3.js).
- The applicant gets
  [gh-board#13](https://github.com/coala/gh-board/issues/13) fixed.
- The applicant modernizes existing React component code in gh-board project.

##### CODING PHASE 1

- A basic gh-board that displays ranking list of meta-review scores exists.
- Basic documentation including a short video showing the functionality
  working exists.

##### CODING PHASE 2

- A basic gh-board that displays review comments that need meta-review exists.
- Basic documentation including a short video showing the functionality
  working exists.

##### CODING PHASE 3

- A sophisticated gh-board exists. Additional features may include:
  - Overall ranking list & recent ranking list with sorting option.
  - Display comments that need meta-review in an ultimate way.
  - Display visitor's own meta-reviews if the visitor logs in.
- Full documentation including one or more short videos showing the
  functionality working exists.

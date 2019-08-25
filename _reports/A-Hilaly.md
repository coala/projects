---
categories:
  - GSoC
  - 2019
  - StatusReport
date: 2019-08-25
student: Mohammed Amine Hilaly
organisation: coala
organisation_link : https://coala.io
project: git-bug Github and Gitlab bidirectional syncing
project_link: https://summerofcode.withgoogle.com/dashboard/project/6390539212029952
tarball: https://github.com/A-Hilaly/gsoc-report/raw/master/a-hilaly.tar.gz
sha256sum: d0dc2fc5a78d5c1fa173eac6b83961e5fc913493b7a3f880c3880f89b8140360
mentors: >
 [Michael Muré](https://github.com/MichaelMure)
phase:
 - Bonding : https://github.com/MichaelMure/git-bug/milestone/1
 - Phase 1 : https://github.com/MichaelMure/git-bug/milestone/2
 - Phase 2 : https://github.com/MichaelMure/git-bug/milestone/3
 - Phase 3 : https://github.com/MichaelMure/git-bug/milestone/4
bio: >
 I'm a final year student of Computer Science at SUPINFO International
 school, Strasbourg. I worked during the summer implementing Github and
 Gitlab bidirectional syncing for the git-bug project. I also worked on
 adding features to the code base and improving other existing components
 and the user interface.

social:
 - GitHub:
   - username: A-Hilaly
   - link: https://github.com/A-Hilaly
 - GitLab:
   - username: A-Hilaly
   - link: https://gitlab.com/A-Hilaly
 - Gitter:
   - username: A-Hilaly
   - link: https://gitter.im/A-Hilaly

email: hilalyamine@gmail.com
blog: https://medium.com/@aminedotin
activity:
 - 0:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/117
   - details: >
      Add particpants and actors functionalities
 - 1:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/121
   - details: >
      Query identities by a full ID or truncated ID
 - 2:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/122
   - details: >
      Filter issues by participants and actors
 - 3:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/131
   - details: >
      Implement a Github iterator and add end to end tests for its importer

 - 4:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/135
   - details: >
      Enhancements to the Github importer and add import statistics
      Support bridge configuration using flags
 - 5:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/151
   - details: >
      Support bridge configuration using flags
 - 6:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/156
   - details: >
      fix bridge rm command
 - 7:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/162
   - details: >
      improve bridges listing functionality
 - 8:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/166
   - details: >
      Implemented a github exporter
 - 9:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/170
   - details: >
      store the bridge target name with the configuration
 - 10:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/177
   - details: >
      improve git bug bridge rm command
 - 11:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/179
   - details: >
      Add Gitlab importer and bridge configuration
 - 12:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/187
   - details: >
      Add Gitlab exporter
 - 13:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/190
   - details: >
      Support graceful shutdown in import and export operations
 - 14:
   - repo: git-bug
   - link: https://github.com/MichaelMure/git-bug/pull/192
   - details: >
      Support case sensitive labels when trying to export bugs

---
# Support bidirectional syncing with Github and Gitlab

#### Work Done

1. Both of the GitHub and Gitlab bridges are now operational, and can be used for bidirectional syncing with private and public repositories

2. The GitHub and Gitlab bridges both have an iterator that helps decoupling the import logic from the requests made to the apis

3. git-bug bridges can be configured using interactive shell mode or by passing all necessary informations by flags

4. GitHub bridge configuration can now generate tokens with the minimal needed scopes to interact with public and private repositories

5. The bridges push and pull commands now support graceful shutdown and can be safely interrupted.

6. The Github and Gitlab bridges have end to end testing for importing and exporting issues

#### Challenges

The biggest challenge for me was trying to ensure that the importers and exporters worked correctly even after running successive imports/exports with different bridges. This implicated writing efficient end to end tests for the Github and Gitlab bridges.

Another challenge was studying the Github and Gitlab API since each one of them has its own way to read and write issues.

On one hand the project wasn't difficult, git-bug, Github, Gitlab provided good documentations over all which helped me to implement the core functionalities.
On the other hand the project wasn't easy, i have encountred so many edges cases that needed trickier implementations and more deep testing.

#### What i have learned

The GSoC experience helped me improve at many different levels especially in  the Go programming language and software engineering in general.
I've learned many things during this project, most importantly code quality and readability for Golang projects. My mentor reviewed my Pull Requests in a regular basis which led me to write a maintainable, better quality and well tested code.

I've also learned good practices about writing unit tests and end to end tests, using and building GraphQL apis with Go, concurrency patterns and process cancellation.

#### Work to be done

- import and export only issues created or updated after a certain date and time. This would be very usefull to improve the import and export time for repositories containing a lot of issues

- support importing and exporting media files included in issues and comments

- Implementing a global bridge configuration to share one token for multiple repositories instead of storing a token with each configured bridge

- Implementing more bridges (bugilla, gitea ...)

- since the Github and the Gitlab exporters are very similar it would be nice to try to have one general exporter that consumes objects providing methods to write to the API directly

For example trying to implement the IssueProvider for all the bridges
```golang
type IssuesProvider interface {
    CreateIssue(title, body string) (issueID string, err error)
    EditIssueBody(issueID, body string) (err error)
    EditIssueTitle(issueID, title string) (err error)
    EditIssueStatus(issueID, status bug.Status) (err error)
    EditIssueLabels(issueID, labels []bug.Label) (err error)
    CreateComment(issueID, body string) (commentID string, err error)
    EditComment(issueID, commentID, body string) error
}
```

this way we can simplify the process of implementing the exporters for the new bridges

---
collaborating_projects:
  - GitMate
desc: "GitMate.io is now an MVP with proper unit tests. However, we still lack
       support for quick integration tests on feature additions and bug fixes.
       Kudos, if you could help us with that."
developers_involved: []
difficulty: medium
initiatives:
  - GSoC
  - RGSoC
issues:
  - "https://gitlab.com/gitmate/open-source/gitmate-2/issues/245"
  - "https://gitlab.com/gitmate/open-source/gitmate-2/issues/294"
markdown: gitmate-testing.md
mentors:
  - nkprince007
  - sils
  - fneu
name: "Improve testing on GitMate"
requirements:
  - "The participant should have at least one patch accepted to
     [GitMate](https://gitlab.com/gitmate/open-source/gitmate-2)."
  - "The participant should demonstrate that he can run unit tests from the
  shell in his proposal."
  - "The participant should have sufficient knowledge in dealing with py.test
  and Django."
status: disabled
tags:
  - GitMate
  - py.test
  - Django
---

[GitMate.io](https://gitmate.io/) is an automation tool for developers on their
GitHub and GitLab repositories.

The goals of this project are:

- Add integration testing to GitMate for testing on live repositories whenever
new features are added or bug fixes.
- Allow tests to be run in parallel in all possible combinations.
(i.e run the plugin tests in any order).
- Speeding up and improving the current testing architecture.

The scope of this project is aimed at improving the current testing scenario
under GitMate. As of now, we have complex and huge list of mocking operations
on every testcase in use under gitmate. For e.g., have a look at one of the
test cases in **ack** plugin.

```python
@patch.object(GitLabMergeRequest, 'commits', new_callable=PropertyMock)
@patch.object(GitLabCommit, 'unified_diff', new_callable=PropertyMock)
@patch.object(GitLabCommit, 'message', new_callable=PropertyMock)
@patch.object(GitLabCommit, 'sha', new_callable=PropertyMock)
@patch.object(GitLabCommit, 'get_statuses')
@patch.object(GitLabCommit, 'set_status')
def test_gitlab_unmodified_commit(
    self, m_set_status, m_get_statuses, m_sha, m_message, m_diff, m_commits
):
    m_get_statuses.return_value = (
        CommitStatus(Status.SUCCESS, 'Good to go!',
                      'review/gitmate/manual', 'https://gitmate.io'),)
    m_diff.return_value = ('--- a/README.md\n'
                            '+++ b/README.md\n'
                            '@@ -1,2 +1,4 @@\n'
                            ' # test\n'
                            ' a test repo\n'
                            '+\n'
                            '+a commiit that can one acknowledge')
    m_message.return_value = 'Update README.md'
    m_commits.return_value = tuple([self.gl_commit])
    m_sha.return_value = 'f6d2b7c66372236a090a2a74df2e47f42a54456b'

    # actual testing begins
    ...
```

We have a whole lot of mocking before the actual testing begins. Therefore, we
would like to see a clearly determined and viable approach with examples as to
how they would simplify the testing in the applicant's proposal.

Refer our base,
[GitmateTestCase](https://gitlab.com/gitmate/open-source/gitmate-2/blob/master/gitmate_config/tests/test_base.py)
for more details on how our tests are run.

To get started on GitMate, please follow [our guide](http://docs.gitmate.io/Developers/Newcomers_Guide/).

---
categories:
  - GSoC
  - 2019
  - StatusReport
date: 2019-08-25
student: Utkarsh Sharma
organisation: coala
organisation_link : https://coala.io
project: Improve Diff Handling
project_link: https://summerofcode.withgoogle.com/projects/#6443787042160640
tarball: https://github.com/Utkarsh1308/Utkarsh1308.github.io/raw/master/Utkarsh1308_coala.tar.gz
sha256sum: b9bd88b4f76c89fed8809c29f1733dd458a3fe5df12a4d024899b5d1e69883fa
mentors: >
 [John Vandenberg](https://github.com/jayvdb)
phase:
 - Bonding : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/26
 - Phase 1 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/29
 - Phase 2 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/30
 - Phase 3 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/31
bio: >
 I'm a fourth year student (expected graduation date: May 2021) at Birla Institute of Technology and Science, Goa. I participated in GSoC and worked with [coala](http://coala.io) on improving Diff Handling, by improving the context for the affected code shown by diffs, and added support for non utf-8 encodings in coala. I also added support for Binary Diffs and XML Diffs.

social:
 - GitHub:
   - username: Utkarsh1308
   - link: https://github.com/Utkarsh1308
 - GitLab:
   - username: Utkarsh1308
   - link: https://gitlab.com/Utkarsh1308
 - Gitter:
   - username: Utkarsh1308
   - link: https://gitter.im/Utkarsh1308
 - LinkedIn:
   - username: Utkarsh Sharma
   - link: https://www.linkedin.com/in/utkarsh-sharma-375159178/
email: usharma1308@gmail.com
blog: https://utkarsh1308.github.io/
activity:
 - 0:
   - repo: cEPs
   - link: https://github.com/coala/cEPs/pull/190
   - details: >
      cEP-0034: Improve Diff Handling
 - 1:
   - repo: multidiff
   - link: https://github.com/juhakivekas/multidiff/commit/8d2cd0f0f119932236fe2826891f1a2d4df7d5a8
   - details: >
      Add .travis.yml
 - 2:
   - repo: multidiff
   - link: https://github.com/juhakivekas/multidiff/commit/0019fd70a7bea6bdbe6cb9f3ad8b4e63f4b3d5ed
   - details: >
      Add width and bytes attribute
 - 3:
   - repo: multidiff
   - link: https://github.com/juhakivekas/multidiff/commit/10ca2ad90ce1e5087c0222015ef68bc06ecca211
   - details: >
      Add diff attribute
 - 4:
   - repo: coala-utils
   - link: https://gitlab.com/coala/coala-utils/commit/74941151ff97b02db554dfc33c7518cfd5644e5b
   - details: >
      FileUtils.py: Fix detect_encoding
 - 5:
   - repo: coala-utils
   - link: https://gitlab.com/coala/coala-utils/commit/9f45ae47fdd37de06f7f39d7a33160169606ade5
   - details: >
      Add support for non utf-8 encodings
 - 6:
   - repo: coala
   - link: https://github.com/coala/coala/commit/6cdd9e99444688a2777b5ec0358b52bcea3c58ff
   - details: >
      ConsoleInteraction.py: Show context for diffs
 - 7:
   - repo: coala
   - link: https://github.com/coala/coala/commit/5085b41fd973dd29969f16dbdff5f8eef7e4fedd
   - details: >
      ConsoleInteraction.py: Add parents to syntax tree
 - 8:
   - repo: coala
   - link: https://github.com/coala/coala/commit/b415eeab1650d21e5eeaac5673ac717637962f72
   - details: >
      Add support for non utf-8 encodings
 - 9:
   - repo: coala
   - link: https://github.com/coala/coala/commit/39709cc9cfda3f7c976e2e58b67eb82b30b5c0d1
   - details: >
      Add support for binary diffs
 - 10:
   - repo: coala
   - link: https://github.com/coala/coala/commit/9a1cb1b6e19bf963ef75b7c95df35a92383da5f0
   - details: >
      Add support for xml diffs

---

### Improve Diff Handling


#### Work Done

1. Writing tests for non utf-8 encodings in both coala and coala-utils. and
adding support for non utf-8 encodings to coala.

2. Improvements to the diff contexts shown by coala by showing lines before
and after the affected code and showing the parents (class/function).

3. Add Support for Showing diffs for binary files. Tested with
ImageCompressionBear.

4. Support for xml diffs. Tested with XMLBear.

#### Challenges

Adding support for binary and xml diffs was quite complex which I was not
prepared for beforehand. So I had to come up with designs for these new
types of diffs and how to print them with coala. This required finding the
right libraries for generating diffs for binary and xml files and using them
in coala.

I learned many new concepts along the way. My mentor guided me whenever I got
stuck at a problem and was really influential in the work I have done these
three months.

#### Work to be done

The binary and xml diffs have a lot of scope for further improvement.

1. We can show stats for binary diffs. So the diffs will show the additions
and deletions in the diff and only print the binary diff when ShowAppliedPatches
is called.

2. XML Diffs need to be tested with bears which change data so they could be
viewed in all their glory. Some new bears for XML can be written which
can cause changes in xml documents.

3. Writing tests for the new binary and xml diffs.

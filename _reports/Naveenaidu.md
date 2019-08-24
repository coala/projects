---
layout: report
student: Naveen Naidu
organisation: coala
organisation_link : https://coala.io
project: Handle Nested Programming Languages
project_link: https://summerofcode.withgoogle.com/projects/#5842650266075136
tarball: https://github.com/Naveenaidu/GSoCReport-2019/raw/master/naveen_naidu.tar.gz
sha256sum: a3213cee9533168a65df47f1821c3401521a257a22fddea54e6f94326fe6ece6
mentors: >
 [Virresh Gupta](https://github.com/virresh) & [Saurav Singh](https://github.com/damngamerz) & [Marcos Gomez](https://github.com/margobra8)
phase:
 - Bonding : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/24
 - Phase 1 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/27
 - Phase 2 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/28
 - Phase 3 : https://gitlab.com/coala/GSoC/gsoc-2019/-/milestones/36
bio: >
 I'm a final year student (expected graduation date: Aug 2020) of Computer Science at PES University - ECC Campus, India. I participated in GSoC and worked with [coala](http://coala.io) to implement the support to handle nested programming languages. I laid out and implemented the entire architecture for coala to handle most of combinations of nested languages.

social:
 - GitHub:
   - username: Naveenaidu
   - link: https://github.com/Naveenaidu
 - GitLab:
   - username: Naveenaidu
   - link: https://gitlab.com/Naveenaidu
 - Gitter:
   - username: Naveenaidu
   - link: https://gitter.im/Naveenaidu
 - LinkedIn:
   - username: Naveen Naidu
   - link: https://www.linkedin.com/in/naveenaidu/
email: naveennaidu479@gmail.com
blog: https://naveenaidu.github.io/
activity:
 - 0:
   - repo: cEPs
   - link: https://github.com/coala/cEPs/pull/188
   - details: >
      cEP-033: Handle Nested Programming Languages
 - 1:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/bb57315d982360383663d37c0f70efe3dbfcbaee
   - details: >
      Implement NlSection

 - 2:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/dd27757467bb3ef41b03dd076eecf60d792929a5
   - details: >
      Implement NlSectionPosition

 - 3:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/8f1a37cd921c6e5370fddd669221c5f740723ff7
   - details: >
      Implement Parser Base Class

 - 4:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/5780a6345ad6e85ed5ad37ec3e11ff939b2ad4f3
   - details: >
      Implement PyJinjaParser

 - 5:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/5b86750c193efd7c995a5bf3615cc9657c8e17a9
   - details: >
      test-requirements.txt: Add regex module

 - 6:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/6cd1bc67177f56cad57c6d7e98fcee83bb797608
   - details: >
      DefaultArgumentParser.py: Add nested language mode support

 - 7:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/1c0035d1350af72c139d0cb95023e20ad405ee07
   - details: >
      TestUtilities.py: Add PEP8TestBear, Jinja2TestBear

 - 8:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/27fecf92474b1f5334469c29205fe501aeee04ba
   - details: >
      NlInfoExtractor: Add NlInfoExtractor

 - 9:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/71c0d041a50e704907e34e212fac5f5e0ae4e91d
   - details: >
      NlFileHandler: Add NlFileHandler

 - 10:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/20652070886c393f8c4962c2917469c83b46415a
   - details: >
      NlCliParsing: Add NlCliParsing

 - 11:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/04404d6785b2a56881ee5a6b56e69a3d9fae6082
   - details: >
      Implement NlCore

 - 12:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/8f45c52ae199ad7dbd08b37c67a809243b2d06d8
   - details: >
      coala_main: Add support for nested language mode

 - 13:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/42a8470e1da5861b859e98e8cd2209a709e41c77
   - details: >
      ConsoleInteraction: Add support for nested language mode

 - 14:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/41114bda053d34590592230eeeccd9953f43847e
   - details: >
      Processing.py: Add support for nested language mode

 - 15:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/e8488e55a581d21bc4b14c800f865f44719044ba
   - details: >
      ConfigurationGathering: Add support for nested language mode

 - 16:
   - repo: coala
   - link: https://github.com/coala/coala/pull/6066/commits/5c4e058b4221ee8256881fc0d3f95f5d72ec7f1c
   - details: >
      result_action: Add support for nested language mode

---

### Handle Nested Programming Languages


#### Work Done

* [coala](https://github.com/coala/coala/) now has a nested language mode. It allows coala
to lint through the files that have a combination of nested languages and provided
patches to the user, just like how it's done in the normal mode.

* The vast majority of my project was based on laying down the architecuture to make this
project possible. And hence, I only implemented the support for the files that have
`Python` and `Jinja2` as the combination. That being said, extending the support for
other languages is really easy.

* The user can switch on nested language mode using:
```
coala --handle-nested --languages=python,jinja2 --files=test.py.jj2
--bears=PEP8Bear,Jinja2Bear,SpaceConsistencyBear
```

* The argument `--handle-nested` is used to specify that the files has a combination of
nested languages. The argument `--languages` is to mention the languages that exists in
the files. Note that, it is important to mention the `--languages` argument since coala
cannot auto detect the languages present in the nested language file.

* Also special care has been taken to keep the significant part of the core coala untounched
by my implementation. No major changes have been done to the way coala works. This would
help as this is still an experimental features and many changes are yet to come.

* An asciinema of the working is [here](https://asciinema.org/a/263844)

#### Challenges

* The most challenging part of the project was to come up with a proper architecuture that
would work. I must confess that I put in more than 2 month of time before GSoC to try
out various possibilites that might make this project a reality. I am grateful to all
the mentors of coala who kept reviewing my various approaches even with their busy
schedule, without their insights I would never have been able to finalise on my proposal.

* Since this project deals with the core of the coala, I was pretty scared to get into the
waters of the huge codebase. But with the constant support of mentors and as the time
went on, I was about to understand how the different components of coala actually
pieced together.

* Another difficult situation that I faced was during my Third Phase of GSoC. The approach
I planned out for the assembling of the files did not seem to work. So I was supposed
to come with a new approach in a span of 11 days. I was pretty pissed and scared ,but
apparently it took lesser time than i expected, this taught me not overestimate the
time and take things one at a time.

* And last not the least was about maintaining the coverage while implementing the details.
It took me time to soak in all the coverage, but it all turned out to be good.

* The entire experience was really fun, though at times there were few hair plucking moment
but this taught me a lot about how the architectures need to be made and how different
components needs to be designed to keep track of scalability.

#### Work to be done

* I've complete almost all of the goals that I had planned out for this GSoC. But there
are a lot's of enhancements that can be done to the way of how Nested Language mode
can work.

The work to be done is:

1. Enhance the way how parsing is done. For now it supports most of the cases, but there
are few edge cases that I might have missed.
2. Add parsers for other combination of other languages.
3. Add support to enable nested language mode from `.coafile`
4. For now, when we have a line with mixed language, we pass off the mixed language line
to a bear that can handle both the languages. This needs to be changed.
5. A way to make coala ignore the `position markers` that are added in `NlFileHandler` to
extract the sections after linting. The changed needs to be made in `ignore_ranges` of
`Processing.py`. I'm guessing that we might have to change the way how `ignore_ranges`
work.

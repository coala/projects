[coala-quickstart](https://github.com/coala/coala-quickstart) is a tool that
helps users to quickly get started with coala. It generates a `.coafile`
(coala's configuration file) that is tailored to the project. Currently,
coala-quickstart automatically identifies relevant bears for the project
based on the languages used and has a clean and simple command-line interface 
for taking user’s input when required.

However, there’s scope for improvement in the following areas:

- Utilizing information from common configuration files: Some projects have
  configuration files like `Gruntfile.js`, `Gulpfile.js`, `rakefile`,
  `package.json`, etc., which may contain useful data that's relevant to
  coala-quickstart. For example, if a project's Gulpfile.js specifies which
  files are to be linted with csslint, we could use this information to target
  CSSLintBear at exactly these files.
- Improving the interface: 
	- Removing non user-friendly warnings.
	- Increasing automation.
	- Validate user input before writing to the generated coafile.
- Continuous Integration: Like other coala repositories, add Appveyor 
  (Windows) and Travis (OSX) integartions.

In addition to the above changes the applicants are encouraged to come up with
their own ideas.


#### Milestones

##### PREPARATION/BONDING

* The applicant has identified all the kinds of configuration files to be worked
  on in the project.
* The applicant has figured out all the useful information that could be
  extracted from these files.
* The applicant has made a [cEP](https://coala.io/cep) of the interface
  improvements.

##### CODING PHASE 1

* The basic structure of the information extraction and filtering relevant
  bears system is implemented.
* coala-quickstart is able to utilize information from at least one of the
  configuration files.
* All of the code is properly tested and documented.

##### CODING PHASE 2

* Code for rest of the configuration files is merged.
* Add Appveyor and Travis integration.
* All of the code is properly tested and documented.

##### CODING PHASE 3

* All improvements to the user-interface have been implemented and merged.
* All changes to interface are properly tested and documented.

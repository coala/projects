projects = [
	{
		"name" : "Improve Diff Handling",
		"desc" : "Bears should be able to offer more than just one possible patch \
for an issue. Users should be able to choose between different patches, e.g. \
for different possible spelling corrections.\
\
In addition bears should be able to offer templated patches, e.g. to offer \
variable renamings while the user should be asked for the new variable name.",
		"requirements" : [
			"The proposal has to contain a clear concept.",
			"The applicant should have one patch accepted to the coala core."
		],
		"difficulty" : "low",
		"issues" : [
			"https://github.com/coala/coala/issues/1021"
		],
		"mentors" : [
			"sils",
			"jayvdb"
		],
		"milestones" : {
			"GSoC 2017 Coding Starts" : [
				"A cEP for the project has been merged."
			],
			"GSoC 2017 Midterm" : [
				"The user is able to choose between multiple patches.",
				"The new API is fully documented on <https://api.coala.io/>.",
				"At least one bear exists that makes use of this."
			],
			"GSoC 2017 Final" : [
				"The user is able to apply templated patches.",
				"The new API is fully documented on <https://api.coala.io/>.",
				"At least one bear exists that makes use of this."
			]
		},
		"initiatives" : ["GSoC"],
		"tags" : ["Core", "CLI"]
	},
	{
		"name" : "Create Jenkins Plugin",
		"desc" : "Jenkins has some neat way to show code analysis results - let's \
use that to provide Jenkins users an awesome usability! The result of this \
project should be a full fledged Jenkins integration, living in an own \
repository with a full testsuite.\
\
If you find this fun you'll be the one knowing this component best and will \
get the chance to maintain it on your own if you want - always with the \
support of the community guarding your back of course.",
		"requirements" : [
			"Any patch to jenkins has been accepted.",
			"The applicant is familiar with the coala plugins.",
			"Any patch to any coala plugin has been accepted and merged."
		],
		"difficulty" : "low",
		"issues" : [
			"https://github.com/coala/coala/issues/2757"
		],
		"mentors" : [
			"fneu",
			"Udayan12167",
			"jayvdb"
		],
		"milestones" : {
			"GSoC 2017 Coding Starts" : [
				"A test jenkins instance exists.",
				"An official repository exists with rultor set up."
			],
			"GSoC 2017 Midterm" : [
				"A working plugin with minimal functionality exists.",
				"A basic testsuite exists.",
				"Basic documentation exists."
			],
			"GSoC 2017 Final" : [
				"A working plugin with full functionality exists.",
				"A full covering testsuite exists.",
				"documentation exists."
			]
		},
		"initiatives" : ["GSoC"],
		"tags" : ["Plugins", "CI"]
	},
	{
		"name" : "Extend Linter Integration",
		"desc" : "A very easy way to cover a broad spectrum of analysis routines \
is wrapping linters into coala. Currently we have a `Lint` class which \
simplifies this integration. Based on this class, a large selection of \
linters can be implemented rapidly. A tutorial on writing linter bears \
is available at [the linter documentation]\
(http://api.coala.io/en/latest/Developers/Writing_Linter_Bears.html).\
The number may vary based on the difficulty to integrate any given tool.\
\
This project proposal should contain a concrete list of linters that are \
wrapped together with concrete improvement proposals to the `Lint` class \
if needed. Because implementing a linter bear is a rather trivial task it is \
highly recommended to spice up the project with something interesting, \
like adding project wide linter support to the Lint class. Improving \
integrations by adding more options can also be part of this.\
\
Upstream contributions to linters are encouraged, e.g. to add auto fixing \
abilities.",
		"requirements" : [
			"The applicant has added an arbitrary linter to coala.",
			"The proposal contains a list of linters to integrate for every \
milestone, split into two batches."
		],
		"difficulty" : "medium",
		"issues" : [
			"https://github.com/coala/engagement/issues/66"
		],
		"mentors" : [
			"AbdealiJK",
			"Makman2",
			"fneu",
			"jayvdb"
		],
		"milestones" : {
			"GSoC 2017 Coding Starts" : [
				"The applicant has tried out all linters manually.",
				"The applicant has outlined all changes needed to the linter \
framework, if needed as a cEP."
			],
			"GSoC 2017 Midterm" : [
				"The first batch of linters have been merged.",
				"At least one improvement to the linter framework is in review state.",
				"All of them are properly tested and documented."
			],
			"GSoC 2017 Final" : [
				"The second batch of linters have been merged.",
				"At least one improvement to the linter framework has been merged.",
				"All of them are properly tested and documented."
			]
		},
		"initiatives" : ["GSoC"],
		"tags" : ["Linter", "Bears"]
	}
]

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
		"desc" : "Jenkins users should be able to see coala results right in the \
Jenkins UI. The result of this project should be a full fledged Jenkins \
integration, living in an own repository with a full testsuite.\
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
		"desc" : "This project enhances our linter framework and creates a number \
of third party tool integrations.\
\
A very easy way to cover a broad spectrum of analysis routines \
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
			"Makman2"
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
	},
	{
		"name" : "Implement Metrics for coala",
		"desc" : "There is more to software quality than just passing builds - \
coala should support generating metrics for your code.\
\
A wide variety of design principles influence software quality, and some of \
them can be measured objectively by so-called \
[software metrics](https://en.wikipedia.org/wiki/Software_metric). coala \
offers a good base for the implementation or wrapping of algorithms that \
calculate these metrics from a piece of code.\
\
The goal of this project proposal should be to implement handling and \
display of software metrics in coala. To prove the concept, this project \
has to include multiple bears that calculate metrics for different \
programming languages.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical cEPs.",
			"The proposal needs to contain a clear concept."
		],
		"difficulty" : "high",
		"issues" : [
			"https://github.com/coala/coala/issues/759"
		],
		"mentors" : [
			"fneu",
			"jayvdb"
		],
		"milestones" : {
			"GSoC 2017 Coding Starts" : [
				"The applicant has created CLI and web UI mockups for metrics.",
				"The applicant has created a cEP for the planned changes."
			],
			"GSoC 2017 Midterm" : [
				"The API for bears to yield metrics has been implemented.",
				"The API is properly documented and fully tested.",
				"At least one Bear implementing the API exists.",
				"A working (not clean or merged!) prototype of the CLI visualization \
exists."
			],
			"GSoC 2017 Final" : [
				"The coala CLI can visualize metrics.",
				"The other coala binaries can handle metrics.",
				"User documentation is written."
			]
		},
		"initiatives" : ["GSoC"],
		"tags" : ["Core", "Bears"]
	}
	{
		"name" : "Debug and profile bears",
		"desc" : "In the development lifecycle of a Bear it needs to be \
debugged and profiled and coala should provide a comprehensive environment \
for this. In this project the participant shall develop a system to easily \
step into the analysis code (likely using the Pdb module already integrated \
into Python) and step out as soon as the analysis finished.\
\
On this way it would be useful retrieving profiling information while \
debugging/running.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical cEPs.",
			"The proposal needs to contain a clear concept.",
			"Familiarity with pdb is a plus."
		],
		"difficulty" : "high",
		"issues" : [
			"https://github.com/coala/coala/issues/565",
			"https://github.com/coala/coala/issues/1101"
		],
		"mentors" : [
			"Makman2",
			"Udayan12167"
		],
		"milestones" : {
			"GSoC 2017 Coding Starts" : [
				"The applicant has made a cEP of how the profiling will be \
implemented.",
				"The applicant is familiar with pdb.",
				"The applicant is familiar with core coala codebase."
			],
			"GSoC 2017 Midterm" : [
				"Pdb should be integrated completely into the coala core.",
				"Settings of Bears can be accessed in the debug environment.",
				"Documentation and tests for the above task should also have \
been completed."
			],
			"GSoC 2017 Final" : [
				"The profile option to CLI is added and merged.",
				"The ability to inspect results produced by the bear is \
implemented.",
				"The documentation about profiling is written."
			]
		},
		"initiatives" : ["GSoC"],
		"tags" : ["Core", "Bears", "Debugging", "pdb"]
	}
]

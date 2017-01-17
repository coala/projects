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
	}
]

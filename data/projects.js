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
			"good concept in the proposal",
			"familiarity with the coala core"
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
	}
]

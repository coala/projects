projects = [
	{
		"name" : "Improve Diff Handling",
		"desc" : "Bears should be able to offer more than just one possible \
		 patch for an issue.",
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
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "CLI"],
		"markdown": "improve_diff_handling.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Create Jenkins Plugin",
		"desc" : "Jenkins users should be able to see coala results right in the \
		Jenkins UI.",
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
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Plugins", "CI"],
		"markdown": "create_jenkins_plugin.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Extend Linter Integration",
		"desc" : "This project enhances our linter framework and creates a number \
		of third party tool integrations.",
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
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Linter", "Bears"],
		"markdown": "extend_linter_integration.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Implement Metrics for coala",
		"desc" : "There is more to software quality than just passing builds - \
coala should support generating metrics for your code.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical \
			[cEPs](https://coala.io/cep).",
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
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears"],
		"markdown": "implement_metrics_for_coala.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Debug and Profile Bears",
		"desc" : "coala should support developers of code analysis by providing \
		facilities to debug and profile bears.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical \
			[cEPs](https://coala.io/cep).",
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
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears", "Debugging"],
		"markdown": "debug_profile.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Handle Nested Programming Languages",
		"desc" : "Multiple programming languages can coexist in the same source \
		file - coala should support writing code analysis that only works on parts \
		of files.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical \
			[cEPs](https://coala.io/cep).",
			"The proposal needs to contain a clear concept.",
		],
		"difficulty" : "medium",
		"issues" : [
			"https://github.com/coala/coala/issues/1690"
		],
		"mentors" : [
			"Udayan12167",
			"sils"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears"],
		"markdown": "nested_languages.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Improve coala website & supporting tools",
		"desc" : "This project aims to intensify usage of coala by developing \
		well organised web interfaces.",
		"requirements" : [
			"At least one patch to each of coala-landing and coala-html should be \
			accepted and merged.",
			"The student should be familiar with web design tools & trends.",
		],
		"difficulty" : "medium",
		"issues" : [
			"https://gitlab.com/coala/landing/issues/3"
		],
		"mentors" : [
			"sils",
			"AbdealiJK"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Web", "Blog"],
		"markdown": "coala_web.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Optimize Caching",
		"desc" : "Improve coala's performance by implementing caching strategies.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical cEPs, \
			especially \
			[cEP-0002](https://github.com/coala/cEPs/blob/master/cEP-0002.md).",
			"The proposal needs to show some familiarity with coala's caching \
			implementation.",
		],
		"difficulty" : "medium",
		"issues" : [
			"https://github.com/coala/coala/issues/2541",
			"https://github.com/coala/coala/issues/2699",
			"https://github.com/coala/coala/issues/2912"
		],
		"mentors" : [
			"adtac",
			"sils"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears"],
		"markdown": "optimize_caching.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Cohesive Editor Support",
		"desc" : "Develop an efficient strategy that allows coala to maintain \
		a number of plugins for different editors.",
		"requirements" : [
			"The proposal has to provide a convincing strategy for testing, \
			 documentation and maintaining editor plugins",
			"The applicant should have one patch accepted to any of the coala \
			plugins."
		],
		"difficulty" : "medium",
		"issues" : [
			"https://github.com/coala/coala-atom/issues/37",
			"https://github.com/coala/coala-emacs/issues/11",
			"https://github.com/coala/coala-eclipse/issues/25",
			"https://github.com/coala/coala-vim/issues/24",
			"https://github.com/coala/coala-gedit/issues/5",
			"https://github.com/coala/coala-sublime/issues/4"
		],
		"mentors" : [
			"AbdealiJK",
			"fneu"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Editors", "Plugins"],
		"markdown": "editor_support.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Real-time team communication bridge",
		"desc" : "A way to post CI problems to online team rooms, such as IRC, \
		Telegram, slack or gitter.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"Some familiarity with hubot"
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : [
			"jayvdb"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["CI", "Bots"],
		"markdown": "communication_bridge.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Improve Bear Quality",
		"desc" : "Fixing issues and improving documentation and testing of \
		existing bears.",
		"requirements" : [
			"The participant should have one bugfix patch to any bear accepted.",
			"The participant should have understanding of the linter and test \
			framework for bears.",
			"The proposal should contain issues which are planned to be \
			addressed, chosen (and potentially \
			[filed](https://github.com/coala/coala-bears/issues/new)) by the \
			student."
		],
		"difficulty" : "low",
		"issues" : [],
		"mentors" : ["abhsag24"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Documentation", "Bears", "Testing"],
		"markdown": "bear_updates.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Convert Bears to Aspects",
		"desc" : "This project is about annotating results of bears with \
		\"aspects\" which are like categories allowing to group results.",
		"requirements" : [
		"The participant should have one patch to any bear accepted.",
		"The participant should have understanding of \
		[cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md).",
		"The proposal should contain bears which are planned to be addressed \
		and a rough draft on which aspects will be needed and how they will be \
		implemented."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["userzimmermann", "sils"],
		"initiatives" : ["GSoC"],
		"tags" : ["Documentation", "Bears", "Aspects"],
		"markdown": "aspects.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Implement Aspects Support",
		"desc" : "This project is about collecting bears based on aspects that the \
		user wants to have checked.",
		"requirements" : [
		"The participant should have one patch to any bear accepted.",
		"The participant should have one patch to the coala core accepted.",
		"The participant should have a solid understanding of \
		[cEP-0005](https://github.com/coala/cEPs/blob/master/cEP-0005.md).",
		"The participant should have a solid understanding of \
		[cEP-0002](https://github.com/coala/cEPs/blob/master/cEP-0002.md)."
		],
		"difficulty" : "hard",
		"issues" : [],
		"mentors" : ["userzimmermann", "sils"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears", "Aspects"],
		"markdown": "implement_aspects.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Implement GitLab Support for GitMate",
		"desc" : "GitMate will support GitHub very soon with it's plugin \
		system - GitLab is not far away thanks to your help!",
		"requirements" : [
				"The participant should have one patch to [GitMate-2](https://gitlab.com/gitmate/gitmate-2) accepted.",
				"Django knowledge  is a big plus."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["sils", "seblat", "fneu"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Web", "CI"],
		"markdown": "gitmate_gitlab.md",
		"collaborating_projects" : ["coala", "GitMate", "IGitt"]
	}
]

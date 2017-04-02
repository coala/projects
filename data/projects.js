projects = [
	{
		"name" : "One click linting for online projects in the browser",
		"desc" : "Create a loader for projects from remote data sources \
		that can be used from the coala web page in order to provide one click linting \
		for online projects. ",
		"requirements" : [
				"The applicant should be be familiar with bear creation and XML parsing \
				using xpath or a similar query language",
				"The applicant should be reasonable familiar with the coala codebase and the workings of REST APIs, \
				including authentication.",
				"The applicant has contributed to a relevant coala module, the Open Roberta platform, or both."
		],
		"difficulty" : "high",
		"issues" : [
		],
		"mentors" : ["maweki"],
		"initiatives" : ["GSoC"],
		"tags" : ["Bears", "Web"],
		"markdown": "roberta_external_source.md",
		"collaborating_projects" : ["coala", "openroberta"]
	},
	{
		"name" : "Integrate ANTLR v4 into coala",
		"desc" : "This project is about integrating ANTLR into the coala bear \
				 API. ",
		"requirements" : [
				"The participant should have one patch to [coala](https://github.com/coala/coala) accepted.",
				"Being familiar with the current Bear API and what it provides.",
				"Knowledge of ANTLR and Java is a bonus.",
				"Knowledge of ASTs and basic language grammar."
		],
		"difficulty" : "high",
		"issues" : [],
		"mentors" : ["Udayan12167"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["API", "AST", "Bears"],
		"markdown": "antlr_v4.md",
		"collaborating_projects" : ["coala", "ANTLRv4"]
	},
	{
		"name" : "Improve Generic Bear Quality",
		"desc" : "The project is about fixing Issues with Generic Bears and \
				  providing better API.",
		"requirements" : [
			"The participant should have one bugfix patch to any bear accepted.",
			"The participant should have an understanding of the algorithms \
			 behind existing Generic bears and test framework for bears.",
			"The proposal should contain issues which are planned to be \
			addressed, chosen (and potentially \
			[filed](https://github.com/coala/coala-bears/issues/new)) by the \
			student."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["abhsag24", "Mixih"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Documentation", "Bears", "Testing"],
		"markdown": "generic_bears.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Improve Lint Bear Quality",
		"crowded": true,
		"desc" : "Fixing issues and improving documentation and testing of \
		existing linter bears.",
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
		"mentors" : ["abhsag24", "NiklasMM"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Documentation", "Bears", "Testing"],
		"markdown": "bear_updates.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Implement Aspects Support",
		"crowded": true,
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
		"difficulty" : "high",
		"issues" : [],
		"mentors" : ["userzimmermann", "sils"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears", "Aspects"],
		"markdown": "implement_aspects.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Convert Bears to Aspects",
		"crowded": true,
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
		"name" : "Implement GitLab and Bitbucket Support for GitMate",
		"desc" : "GitMate will support GitHub very soon with it's plugin \
		system - GitLab and Bitbucket are not far away thanks to your help!",
		"requirements" : [
				"The participant should have one patch to \
				 [GitMate-2](https://gitlab.com/gitmate/gitmate-2) accepted.",
				"Django knowledge  is a big plus."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["sils", "seblat", "fneu"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Web", "CI"],
		"markdown": "gitmate_gitlab.md",
		"collaborating_projects" : ["coala", "GitMate", "IGitt"],
		"crowded": true,
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
		"collaborating_projects" : ["coala"],
		"crowded": true,
	},
	{
		"name" : "Vulture dead code removal",
		"desc" : "This project is about using vulture to automatically remove \
				  unused python code.",
		"requirements" : [
				"The participant should have one patch to \
				[vulture](https://bitbucket.org/jendrikseipp/vulture) accepted.",
				"Being familiar with the current Bear API and what it provides. \
				 Fixing an issue for a Bear during the newcomer process would \
				 help with this.",
				"Knowledge of ASTs and basic language grammar is a bonus."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["jendrikseipp"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Vulture", "AST", "Bears"],
		"markdown": "vulture.md",
		"collaborating_projects" : ["coala", "vulture"]
    },
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
			"jayvdb",
			"Mariatta"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "CLI"],
		"markdown": "improve_diff_handling.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Extend Linter Integration",
		"crowded": true,
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
			"Makman2",
			"Mixih"
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
		"crowded": true,
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
			"NiklasMM"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "Bears"],
		"markdown": "nested_languages.md",
		"collaborating_projects" : ["coala"],
		"crowded": true,
	},
	{
		"name" : "Improve coala website & supporting tools",
		"crowded": true,
		"desc" : "This project aims to intensify usage of coala by developing \
		well organised web interfaces.",
		"requirements" : [
			"At least one patch to each of coala-landing and coala-html should \
			 be accepted and merged.",
			"The student should be familiar with web design tools & trends.",
		],
		"difficulty" : "medium",
		"issues" : [
			"https://gitlab.com/coala/landing/issues/3"
		],
		"mentors" : [
			"sils",
			"AbdealiJK",
			"Mariatta"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Web", "Blog"],
		"markdown": "coala_web.md",
		"collaborating_projects" : ["coala"],
		"crowded" : true,
	},
	{
		"name" : "Optimize Caching",
		"desc" : "Improve coala's performance by improving file caching and other \
                  performance bottlenecks.",
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
		"collaborating_projects" : ["coala"],
		"crowded" : true,
	},
	{
		"name" : "Improve the coala CLI",
		"desc" : "There are a number of possible options to improve the coala \
		interface written down in \
		[a draft of cEP-0004](https://github.com/coala/cEPs/pull/29/files).",
		"requirements" : [
			"One patch to the coala core accepted.",
			"Clear ideas on how to improve the CLI in the proposal."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["yukiisbored"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "CLI"],
		"markdown": "coala_cli.md",
		"collaborating_projects" : ["coala"],
		"crowded": true,
	},
	{
		"name" : "Plugin for jetbrains IDEs",
		"desc" : "Offer a general mechanism of highlighting code analysis results from external \
		tools in jetbrain IDE, the primary goal is to support coala. ",
		"requirements" : [
				"The applicant should have at least one patch accepted to any of the coala \
				plugins.",
				"The applicant shoule be familiar with jetbrains IDEs, e.g. PyCharm, IntelliJ IDEA."
		],
		"difficulty" : "high",
		"issues" : [
			"https://github.com/coala/coala/issues/2019"
		],
		"mentors" : ["traff"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Jetbrains IDEs", "Plugins"],
		"markdown": "jetbrains-ide-plugin.md",
		"collaborating_projects" : ["coala", "jetbrains"]
	},
    {
		"name" : "Documentation Extraction and Parsing",
		"desc" : "The Project is about writing language independent \
				  documentation extraction and parsing algorithms.",
		"requirements" : [
			"The participant should have one bugfix patch to any bear accepted.",
			"The participant should have a basic understanding of the algorithms \
			behind existing documentation extraction routines."
		],
		"difficulty" : "high",
		"issues" : [],
		"mentors" : ["SanketDG"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Documentation", "Bears"],
		"markdown": "documentation_extraction.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Integrate pyflakes-enhanced AST into coala ",
		"desc" : "Integrate pyflakes-enhanced AST into coala \
		so that bears can access it.",
		"requirements" : [
                                 "The participant has a patch to any bear merged. Check out \
                                 [existing bear proposal](https://github.com/coa\
                                 la/coala-bears/issues).",
                                 "The participant has a patch to pyflakes merged. Check out \
                                 [easy task](https://bugs.launchpad.net/pyflakes/+bugs?field.tag=easy)."
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["jayvdb", "srisankethu"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Bears", "Pyflakes"],
		"markdown": "integrate-pyflakes-AST.md",
		"collaborating_projects" : ["coala", "Pyflakes"]
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
			"uhafner"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Plugins", "CI"],
		"markdown": "create_jenkins_plugin.md",
		"collaborating_projects" : ["coala", "jenkins"]
	},
	{
		"name" : "Improve Sphinx support in rstcheck",
		"desc" : "Add an alternative front end for rstcheck to better support checking Sphinx documents.",
		"requirements" : [
			"Familiarity with reStructuredText and Sphinx.",
			"Familiarity with nesting code blocks within reStructuredText.",
			"Experience with making use of Python packages to create new functionality.",
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : ["myint"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["reStructuredText", "Sphinx"],
		"markdown": "rstcheck_with_better_sphinx_support.md",
		"collaborating_projects" : ["coala", "rstcheck"]
	},
	{
		"name" : "Real-time team communication bridge",
		"crowded": true,
		"desc" : "A way to post CI problems to online team rooms, such as IRC, \
		Telegram, slack or gitter.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"Some familiarity with hubot"
		],
		"difficulty" : "medium",
		"issues" : [],
		"mentors" : [
			"jayvdb",
			"chauffer"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["CI", "Bots"],
		"markdown": "communication_bridge.md",
		"collaborating_projects" : ["coala"],
		"crowded" : true,
	},
	{
		"name" : "Improve installation of coala and coala-bears",
		"desc" : "This project is about improving the \
		[bear installation tool](https://gitlab.com/coala/cib) and \
		working around platform dependent requirements.",
		"requirements" : [
				"The participant should have one patch to [coala-bears](https://github.com/coala/coala-bears) accepted.",
				"Huge plus is being familiar with the current design of cib",
				"Knowledge of conda is a bonus, but not required."
		],
		"difficulty" : "medium",
		"issues" : [
			"https://github.com/coala/coala-bears/issues/845",
			"https://github.com/coala/coala-bears/issues/664"
		],
		"mentors" : ["Adrianzatreanu", "Udayan12167", "fneu"],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Bears", "cib"],
		"markdown": "improve_installation.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name": "Researching commit-based performance testing",
		"desc": "A technique to view the performance of a piece of software \
		and automatically identify and classify performance drops and gains.",
		"requirements": [
			"The participant should have some prior experience with investigating \
			the performance of software."
		],
		"in_progress": true,
		"difficulty": "medium",
		"issues": [],
		"intiatives": ["Paper"],
		"tags": ["Research", "coala"],
		"markdown": "commit_based_perftest.md"
	},
	{
		"name": "Performance measurement for pull requests",
		"desc": "Essentially a codecov for performance, but smarter.",
		"requirements": [
			"Prior experience with commit-based performance testing."
		],
		"difficulty": "medium",
		"issues": [],
		"initiatives": ["Paper"],
		"tags": ["coala", "GitMate", "performance"],
		"markdown": "pr_perftest.md",
		"collaborating_projects": ["coala", "GitMate"]
	},
	{
	  "name" : "Enhance coala-quickstart",
	  "desc" : "Extract useful data from a project's configuration files to build a relevant `.coafile`.",
	  "requirements" : [
	    "At least one patch to coala core and coala-quickstart each should be accepted and merged.",
	    "The student should be familiar with ongoing technical \
			[cEPs](https://coala.io/cep).",
	  ],
	  "difficulty" : "medium",
	  "issues" : [
	    "https://github.com/coala/coala-quickstart/issues/22",
	    "https://github.com/coala/coala-quickstart/issues/42"
	  ],
	  "mentors" : [
	    "adtac",
	    "Adrianzatreanu"
	  ],
	  "initiatives" : ["GSoC", "RGSoC"],
	  "tags" : ["Information Extraction", "CLI", "CI"],
	  "markdown" : "enhance_coala_quickstart.md",
	  "collaborating_projects" : ["coala"],
	  "crowded": true,
	}
]

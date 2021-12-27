const main = {
	general: {
		name: "SapperBase",
	},
	meta: {
		index: {
			title: "SapperBase",
			description: "",
		},
		about: {
			title: "About",
			description: ""
		},
		changelog: {
			title: "Changelog",
			description: ""
		},
	},
	layout: {
		nav: {
			links: {
				home: {
					text: "SB",
					title: "SapperBase"
				},
				about: {
					text: "about",
					title: "Read about SapperBase.",
				},
				changelog: {
					text: "changelog",
					title: "Versions history.",
				},
			}
		},
		footer: {
			info: {
				heading: 'Info',
				links: {
					about: 'About project',
					changelog: 'Changelog',
				}
			},
			languages: {
				heading: "Languages"
			}
		}
	},
	page: {
		index: {
			heading: "Sapper Base",
			description: "Sapper & Firebase boiler-plate.",
			features: [
				{
					heading: "Multi-language",
					description: "Built-in JSON translator, XDATA"
				},
				{
					heading: "SEO Friendly",
					description: "Google Analytics, hreflang, sitemap generator"
				},
				{
					heading: "Blazing fast",
					description: ""
				},
				{
					heading: "Local emulators",
					description: ""
				}
			],
			drawbacks: [
				{
					heading: "/en redirect, duplicating module scripts content",
					description: ""
				},
				{
					heading: "Limited amount of projects on Firebase",
					description: "Requires to request more projects"
				},
				{
					heading: "No access to lang attribute of html opening tag",
					description: ""
				},
				{
					heading: "Confusing context=module and on-page scripts mix-ups i.e. this.request",
					description: ""
				},
				{
					heading: "Slow network requests on firebase",
					description: ""
				},
				{
					heading: "Indexes synchronization",
					description: ""
				},
				{
					heading: "Local simulators are not 100% stable and features set is limited",
					description: ""
				},
				{
					heading: "Hacky solutions to get limit/offset pagination",
					description: ""
				},
				{
					heading: "package.json and functions/package.json synchronization",
					description: ""
				},
			]
		},
		about: {
			heading: "About SB",
			description: "Sapper & Firebase is like the peanut butter and jelly."
		},
		changelog: {
			heading: "Changelog",
			description: `SapperBase is just a concept and enthusiasm based boilerplate that is not meant for commercial usage. 
										However, if you are confident that you can successfully built a reliable and stable application using SapperBase
										 - there's no restrictions or permissions you need to obtain to use it.`,

			changes_list: {
				heading: "Latest changes",
			},
			changelog_form: {
				inputs: {
					version: "Version",
					details: "Details",
				},
			},
		},
	}
};

export default main;
export default {
	meta: {
		index: {
			title: "_XPROJECTNAME_ - Svelte/SSR + Firebase framework",
		},
		changelog: {
			title: "_XPROJECTNAME_ Changelog",
		}
	},
	layout: {
		nav: {
			links: {
				changelog: {
					text: "Changelog",
				}
			}
		},
		footer: {
			info: {
				links: {
					changelog: 'Changelog',
				}
			},
		}
	},
	page: {
		index: {
			intro: {
				heading: "_XPROJECTNAME_",
				description: "Svelte + Sapper + Firebase = ❤",
			}
		},
		changelog: {
			heading: "Changelog",
		}
	}
};

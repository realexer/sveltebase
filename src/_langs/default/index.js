import {projects} from "../../data/projects";

const main = {
	meta: {
		index: {
			title: "_XPROJECTNAME_ - Svelte/SSR + Firebase boilerplate",
			description: "Simple, reliable, flexible platform for building hyper-reactive and ultra user-friendly modern mobile application.",
		},
		info: {
			about: {
				title: "About _XPROJECTNAME_",
				description: ""
			},
			showcase: {
				title: "Built with _XPROJECTNAME_",
				description: "Different projects that were built using _XPROJECTNAME_.",
			},
		},
		changelog: {
			title: "_XPROJECTNAME_ Changelog",
			description: ""
		},
	},
	layout: {
		nav: {
			links: {
				home: {
					text: "SB",
					title: "_XPROJECTNAME_"
				},
				about: {
					text: "About",
					title: "Read about _XPROJECTNAME_.",
				},
				showcase: {
					text: "Projects",
					title: "Projects built with _XPROJECTNAME_.",
				},
				changelog: {
					text: "Changelog",
					title: "Versions history.",
				},
			}
		},
		footer: {
			info: {
				heading: 'Info',
				links: {
					about: 'About _XPROJECTNAME_',
					showcase: 'Examples',
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
			intro: {
				heading: "_XPROJECTNAME_",
				description: "Svelte + Sapper + Firebase = ❤",
				content: `_XPROJECTNAME_ is a hobby project that was started few years ago with a goal - 
									to create a lightweight simple and modern web framework that would make prototyping and development of web projects of any scale easy and fun, 
									while leveraging the best out of modern tools and following simple and intuitive practices that ignite both 
									creative and clever architecture.`,
			},
			sections: {
				features: {
					heading: "Features",
					items: [
						{
							heading: "Multi-language out of the box",
							description: `<ul class="browser-default">
															<li>Server-side generated content comes translated</li>
															<li>Built-in JSON translator using <u>GoogleTranslate</u></li>
															<li>Ability to preserve dynamic values in the text content using <u>XDATA</u> (tricky hacky solution)</li>
															<li>Translatable Firebase models solution</li>
														</ul>`
						},
						{
							heading: "SEO Friendly",
							description: `<ul class="browser-default">
															<li>SSR - Server-side rendering provided by Sapper</li> 
															<li>Google Analytics component</li> 
															<li>Proper multi-language urls and meta hreflang usage</li> 
															<li>Sitemap generator</li>
														</ul>`
						},
						{
							heading: "Sophisticated redirects",
							description: `Server-side configurable redirects allow you to configure URL redirects with ease, as well as create complicated redirect rules and behaviors.`
						},
						{
							heading: "Blazing fast",
							description: `Anyone who ever heard about Svelte first of all knows that it's absolutely the <b>fastest and lightest complete SPA framework</b> in the world.
														<p>_XPROJECTNAME_ didn't affect the performance of the Svelte and Sapper. Firebase is also one of the fastest BE if used properly.</p>
														<p>Websites built with _XPROJECTNAME_ get <u>100 benchmark</u> on the PageSpped for both desktop and mobile devices.</p>`
						},
						{
							heading: "Firebase local emulators",
							description: `Firebase is a mature system that provides enough features and tools to develop and test everything locally.`
						},
					]
				},
				drawbacks: {
					heading: "Issues and challenges",
					items: [
						{
							heading: "package.json and functions/package.json synchronization",
							description: `Setting up _XPROJECTNAME_ requires to have /functions directory content of which will be deployed to the Firebase. 
														<p>Hence it needs it's own package.json that includes packages required for both Svelte & Sapper and also for Firebase.</p>
														<p>Essentially it means, that any package that is added to <u>package.json</u> during development process will needs to be added to added to <u>functions/packages.json</u>.</p>`
						},
						{
							heading: "No access to lang attribute of html opening tag",
							description: `In order to get the best out multi-language platform you also need to specify lang attribute on the root html tag. 
														<p>But unfortunately current version of Sapper doesn't support custom placeholders in the <u>template.html</u>.</p> 
														<p>That's why by default <u>lang attribute</u> is not specified and we only use <u>hreflang</u> meta data.</p>`,
						},
						{
							heading: "Materialize CSS",
							description: `Currently _XPROJECTNAME_ is using Materialize as CSS framework because it is simple and intuitively easy to use.
														However right it seems like it's not getting much improvements and doesn't grow. 
														Also on my personal projects I already started to notice many limitations and now consider either switching to other CSS Framework 
														or introduce ability to use different frameworks.`,
						},
						{
							heading: "Server-side and client-side scripts can be confusing",
							description: `<ul>
															<li>Sapper pages use two types of runtime scripts: server-side and client-side</li>
															<li>Server side scripts use <u>node.js</u> environment - they have <u>context="module"</u> attribute</li>
															<li>Client side scripts use browser environment</li>
															<li>If you want to get full benefits of SSR you need to use server-side scripts to render necessary content on server-side</li>
														</ul>`
						},
					]
				},
				firebase_downsides: {
					heading: "Firebase downsides",
					items: [
						{
							heading: "Limited amount of projects on Firebase",
							description: `By default you can create up to 5 projects on Firebase. But if you need more you will be asked to request extra projects. `
						},
						{
							heading: "Firestore pagination",
							description: `With Firebase there's no way to implement classical pagination with <u>offset and limit</u> 
														and instead you need to use concepts like "startAfter" or "startAt" to indicate after or at which point you want to get data set.`,
						},
						{
							heading: "Firestore indexes synchronization",
							description: `Firestore allows you (and for some queries requires) to use indexes to have proper performance of the queries. 
														<p>However it allows to configure indexes using both <u>Firebase Console</u> and <u>firestore.indexes.json</u>.</p>
														<p>But if indexes are configured using <u>Firebase Console</u> they will not be automatically reflected in <u>firestore.indexes.json</u>.</p>
														<p>So you need to do it manually, because if you deploy your code to other Firebase project you will need to configure indexes again.</p>`
						},
						{
							heading: "Slow network response",
							description: `Firebase seems like to have cold-start delay, when node function is not executed often enough.`
						},
					]
				}
			},
		},
		info: {
			showcase: {
				heading: "Built with _XPROJECTNAME_",
				description: "Here are examples of the projects that were created using _XPROJECTNAME_. ",
				projects: {
					item: {
						website: "website",
					},
					list: {
						[projects.svitanok.id]: {
							description: "An app where you can find any individual professional, create appointments and leave feedback about the visits.",
						},
						[projects.strangy.id]: {
							description: "A platform for free and open communication.",
						},
						[projects.hotauto.id]: {
							description: "A simple SEO project for used-car sales.",
						},
					},
				},
			},
			about: {
				heading: "About _XPROJECTNAME_",
				description: "Sapper & Firebase is like the peanut butter and jelly.",
				sections: {
					backstory: {
						heading: "Backstory",
						content: `About 2 years ago I decided to create a few web projects for my personal reasons...`,
					},
					disclaimer: {
						heading: "Disclaimer",
						content: `_XPROJECTNAME_ is just a concept and enthusiasm based boilerplate that is not meant for commercial usage. 
										However, if you are confident that you can successfully built a reliable and stable application using _XPROJECTNAME_
										 - there's no restrictions or permissions you need to obtain to use it.`
					},
				},
			},
		},
		changelog: {
			heading: "Changelog",
			description: ``,

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

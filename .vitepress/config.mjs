import {defineConfig} from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [["link",{rel:"icon",href:"/logo.svg"}]],
	title: "我的笔记网站",
	description: "A VitePress Site",
	themeConfig: {
		outlineTitle: "文章目录",
		outline: [2,6],
		logo: '/logo.svg',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: 'Home', items: [
					{text: '首页', link: '/'},
					{text: 'markdown示例', link: '/markdown-examples'}
				]
			},
			{text: 'Examples', link: '/markdown-examples'},
			{text: '自动生成侧边栏', link: '/front-end/react/'},
			{text: '自动生成侧边栏2', link: '/backend/java/'}
		],

		// sidebar: [
		// 	{
		// 		text: 'Examples',
		// 		items: [
		// 			{text: 'Markdown 演示', link: '/markdown-examples'},
		// 			{text: 'Runtime API 演示', link: '/api-examples'}
		// 		]
		// 	},
		// 	{
		// 		text: 'Examples2',
		// 		items: [
		// 			{text: 'Markdown 演示', link: '/markdown-examples'},
		// 			{text: 'Runtime API 演示', link: '/api-examples'}
		// 		]
		// 	}
		// ],
		// sidebar: {
		// 	"/front-end/react": set_sidebar("front-end/react"),
		// 	"/backend/java": set_sidebar("backend/java"),
		// },
		siderbar: false,
		aside: "left",

		socialLinks: [
			{icon: 'github', link: 'https://github.com/codermelon?tab=repositories'}
		],

		// 底部配置
		footer: {
			copyright: "Copyright@ 2024 Jay Melon"
		},
		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "搜索文档",
						buttonAriaLabel: "搜索文档",
					},
					modal: {
						noResultsText: "无法找到相关结果",
						resetButtonTitle: "清除查询条件",
						footer: {
							selectText: "选择",
							navigateText: "切换",
						},
					},
				},
			},
		},
	},
})

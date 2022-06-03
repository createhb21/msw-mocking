import { rest } from "msw"

const todos = [
	{
		id: `1`,
		title: `createhb 1`,
	},
	{
		id: `2`,
		title: `createhb 2`,
	},
	{
		id: `3`,
		title: `createhb 3`,
	},
	{
		id: `4`,
		title: `createhb 4`,
	},
	{
		id: `5`,
		title: `createhb 5`,
	},
]

export const handlers = [
	rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
		return res(ctx.json(todos))
		// return res(ctx.status(400))
	}),
	rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
		const { todo } = req.body
		console.log(todo)
		todos.push(todo)
		return res(ctx.json(true))
		// return res(ctx.status(400))
	}),
	rest.get("http://localhost:3000/user/:userId", async (req, res, ctx) => {
		const { userId } = req.params
		return res(
			ctx.json({
				name: `createhb21 ${userId}`,
			}),
		)
		// return res(ctx.status(400))
	}),
	// rest.get(
	// 	"https://api.github.com/repos/tannerlinsley/react-query",
	// 	async (req, res, ctx) => {
	// 		const { userId } = req.params
	// 		return res(
	// 			ctx.json({
	// 				name: `reqct-query`,
	// 				description: "sex",
	// 				subscribers_count: "sdas",
	// 				stargazers_count: "1asdas",
	// 				forks_count: "sexsex",
	// 			}),
	// 		)
	// 		// return res(ctx.status(400))
	// 	},
	// ),
	rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
		const pageIndex = req.url.searchParams.get("page")
		return res(
			ctx.json([
				{
					id: `1 ${pageIndex}`,
					name: `createhb 1- ${pageIndex}`,
				},
				{
					id: `2 ${pageIndex}`,
					name: `createhb 2- ${pageIndex}`,
				},
				{
					id: `3 ${pageIndex}`,
					name: `createhb 3- ${pageIndex}`,
				},
				{
					id: `4 ${pageIndex}`,
					name: `createhb 4- ${pageIndex}`,
				},
				{
					id: `5 ${pageIndex}`,
					name: `createhb 5- ${pageIndex}`,
				},
			]),
		)
		// return res(ctx.status(400))
	}),
	rest.get("/login", async (req, res, ctx) => {
		return res(
			ctx.json({
				id: "1easdascxzwe-asdas-dadasdsa",
				firstName: "John",
				lastName: "Maverick",
			}),
		)
	}),
	rest.get(
		"https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
		async (req, res, ctx) => {
			const id = req.url.searchParams.get("id")
			// const productIds = req.url.searchParams.getAll("id")

			// const originalResponse = await ctx.fetch(req)
			// const originalResponseData = await originalResponse.json()

			return res(
				// Send a valid HTTP status code
				// ctx.status(403),
				// // And a response body, if necessary
				// ctx.json({
				// 	errorMessage: `User '${username}' not found`,
				// }),
				ctx.json({
					data: {
						people: [
							{
								name: "createhb21",
								age: 135,
							},
							{
								name: id,
								age: 13,
							},
							{
								name: "cindy",
								age: 15,
							},
							{
								name: "judy",
								age: 25,
							},
							{
								name: "marry",
								age: 64,
							},
							{
								name: "tommy",
								age: 109,
							},
						],
					},
				}),
			)
		},
	),
	rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
		const pageIndex = req.url.searchParams.get("cursor")
		return res(
			ctx.json({
				projects: [
					{
						id: `1 ${pageIndex}`,
						name: `createhb 1-${pageIndex}`,
					},
					{
						id: `2 ${pageIndex}`,
						name: `createhb 2-${pageIndex}`,
					},
					{
						id: `3 ${pageIndex}`,
						name: `createhb 3-${pageIndex}`,
					},
					{
						id: `4 ${pageIndex}`,
						name: `createhb 4-${pageIndex}`,
					},
					{
						id: `5 ${pageIndex}`,
						name: `createhb 5-${pageIndex}`,
					},
				],
				hasMore: pageIndex < 4,
				// nextCursor: parseInt(pageIndex) + 1,
				nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
			}),
		)
	}),
]

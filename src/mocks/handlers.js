import { rest } from "msw"

export const handlers = [
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
]

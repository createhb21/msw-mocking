import axios from "axios"
import React from "react"
import useSWR, { SWRConfig } from "swr"

const Fetcher = () => {
	return (
		<SWRConfig value={{ fetcher: (...args) => axios.get(...args).then(res => res.data) }}>
			<Page />
		</SWRConfig>
	)
}

export default Fetcher

const Page = () => {
	const { data, error } = useSWR("/api/user/123", {
		onErrorRetry: (err, key, config, revalidate, { retryCount }) => {
			console.log(JSON.stringify(err))
			if (err.message.includes(400)) {
				alert(400)
				return
			}
			if (retryCount > 3) {
				return
			}

			setTimeout(() => revalidate({ retryCount }), 3000)
		},
	})

	if (error) {
		return <div>error...</div>
	}

	if (!data) {
		return <div>loading...</div>
	}

	return <div>{data.name}</div>
}

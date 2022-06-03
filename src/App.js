import { QueryClient, QueryClientProvider } from "react-query"
import "./App.css"
import InfiniteScroll from "./components/ReactQuery/InfiniteScroll"
import Overview from "./components/ReactQuery/Overview"
import Pagination from "./components/ReactQuery/Pagination"
import Todos from "./components/ReactQuery/QuickStart"
// import Cache from "./components/SWRExample/Cache"
// import Fetcher from "./components/SWRExample/Fetcher"
// import Mutate from "./components/SWRExample/Mutate"
// import Pagination from "./components/SWRExample/Pagination"
// import Profile from "./components/SWRExample/Profile"

const queryClient = new QueryClient()

function App() {
	return (
		<div className="App">
			{/* <Profile /> */}
			{/* <Cache /> */}
			{/* <Fetcher /> */}
			{/* <Mutate /> */}
			{/* <Pagination /> */}
			<QueryClientProvider client={queryClient}>
				{/* <Overview /> */}
				{/* <Todos /> */}
				{/* <Pagination /> */}
				<InfiniteScroll />
			</QueryClientProvider>
		</div>
	)
}

export default App

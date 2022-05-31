import { useState, useEffect} from 'react'

function useFetchData(url) {

	const [data, setData] = useState(null)

	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(data => setData(data))
		.catch(err => console.log(`${ err} `))
	}, [url])

	return { data }
}

export default useFetchData
import fetcher from "../helpers/fetcher"; 

const getProducts = async () => {
	const {data} = await fetcher.get('/data.json');
	return data;
}

export default getProducts; 
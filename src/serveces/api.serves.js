class ApiService {
	constructor(baseUrl) {
		this.url = baseUrl
	}
	async createPost(post) {
		try {
			const request = new Request(this.url + '/posts.json', {
				method: 'post',
				body: JSON.stringify(post)
			})
			return useRequest(request)
		} catch (e) {
			console.log(e);
		}

	}
	async fetchPosts() {
		try {
			const request = new Request(`${this.url}/posts.json`)
			return useRequest(request)
		} catch (e) {
			console.log(e);
		}
	}
}

async function useRequest(request) {
	const response = await fetch(request)
	return await response.json()
}

export const apiService = new ApiService('https://my-solory-default-rtdb.firebaseio.com')
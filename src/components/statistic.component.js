import { Component } from "../core/component"
import { apiService } from "../serveces/api.serves"
import { TransformService } from "../serveces/transform.servece"

export class StatisticComponent extends Component {
	constructor(id) {
		super(id)
	}


	async onShow() {
		const fbData = await apiService.fetchPosts()
		const posts = TransformService.fbObjectToArray(fbData)
		console.log(posts);
		posts.forEach(post => {
			this.$el.insertAdjacentHTML('afterbegin', `
			<div class="item">

			
				<div class="date">${post.date}</div>
				<div class="all-sum">${post.money}</div>
				<div class="type">${post.type}</div>
				</div>
	`)
		})
	}
	onHide() {
		this.$el.innerHTML = ''
	}

}
import { Component } from "../core/component"
import { apiService } from "../serveces/api.serves"
import { TransformService } from "../serveces/transform.servece"

import { filterHandler } from "./filter.component"

export class StatisticComponent extends Component {
	constructor(id) {
		super(id)
	}


	async onShow() {
		const fbData = await apiService.fetchPosts()
		const posts = TransformService.fbObjectToArray(fbData)

		const filterBtn = document.querySelector('#filterBtn').addEventListener('submit', filterHandler)
		console.log(filterBtn);
		if (filterBtn) {
			console.log(filterBtn);
			const newFilter = posts.filter(post => {
				post.date.substring(3, 2) === zz
			})
			newFilter.forEach(post => {
				this.$el.insertAdjacentHTML('afterbegin', `
			<div class="item">
			<div class="date">${post.date}</div>
			<div class="all-sum">${post.money}</div>
			<div class="type">${post.type}</div>
			</div>
`)
			})

		} else {
			console.log(filterBtn);
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




	}
	onHide() {
		this.$el.innerHTML = ''
	}

}

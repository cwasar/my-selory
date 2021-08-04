import { Component } from "../core/component"

export class NavigationComponent extends Component {
	constructor(id) {
		super(id)
		this.tabs = []
	}
	init() {
		this.$el.addEventListener('click', chooseTab.bind(this))
	}
	registerTabs(tabs) {
		this.tabs = tabs

	}

}

function chooseTab(event) {
	if (event.target.tagName.toLowerCase() === 'li') {
		const allTabs = this.$el.querySelectorAll('li')
		Array.from(allTabs).map(t => t.classList.remove('active'))
		event.target.classList.add('active')
		const activeTab = this.tabs.find(t => t.name === event.target.dataset.name)
		this.tabs.forEach(t => t.component.hide())
		activeTab.component.show()
	}
}
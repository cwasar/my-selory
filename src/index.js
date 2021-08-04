import { NavigationComponent } from "./components/navigation.component"
import { CreateComponent } from "./components/create.component"
import { StatisticComponent } from "./components/statistic.component"

const navigation = new NavigationComponent('tabs')

const create = new CreateComponent('create')

const statistic = new StatisticComponent('statistic')

navigation.registerTabs([
	{ name: 'create', component: create },
	{ name: 'statistic', component: statistic }
])
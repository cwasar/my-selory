import { NavigationComponent } from "./components/navigation.component"
import { CreateComponent } from "./components/create.component"
import { StatisticComponent } from "./components/statistic.component"
import { FilterComponent } from "./components/filter.component"

const navigation = new NavigationComponent('tabs')

const create = new CreateComponent('create')

const statistic = new StatisticComponent('statistic')

const filter = new FilterComponent('filter')

navigation.registerTabs([
	{ name: 'create', component: create },
	{ name: 'statistic', component: statistic }
])
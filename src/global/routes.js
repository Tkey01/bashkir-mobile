import { languages } from './languages'

const createNestedRoutes = (routeName) =>
  Object.keys(languages.nestedRoutes).map((key) => ({
    routeName:
      routeName + key.slice(0, 1).toUpperCase() + key.slice(1, key.length),
    title: languages.nestedRoutes[key],
  }))

export const routes = [
  {
    routeName: 'Main',
    title: languages.routes.Main,
  },

  {
    routeName: 'Bort',
    title: languages.routes.Bort,
  },
  {
    routeName: 'Shor',
    title: languages.routes.Shor,
  },
  {
    routeName: 'Voil',
    title: languages.routes.Voil,
  },
  {
    routeName: 'Textile',
    title: languages.routes.Textile,
  },
  {
    routeName: 'Wood',
    title: languages.routes.Wood,
  },
  {
    routeName: 'Berest',
    title: languages.routes.Berest,
  },

  {
    routeName: 'Settings',
    title: languages.routes.Settings,
  },
  {
    routeName: 'Notes',
    title: languages.routes.Notes,
  },
  {
    routeName: 'Favorites',
    title: languages.routes.Favorites,
  },
  {
    routeName: 'NormBase',
    title: languages.routes.NormBase,
  },
  {
    routeName: 'RulesAct',
    title: languages.routes.RulesAct,
  },
  {
    routeName: 'Search',
    title: languages.routes.Search,
  },
  {
    routeName: 'NormBase',
    title: languages.routes.NormBase,
  },

  ...createNestedRoutes('Bort'),
  ...createNestedRoutes('Shor'),
  ...createNestedRoutes('Voil'),
  ...createNestedRoutes('Textile'),
  ...createNestedRoutes('Wood'),
  ...createNestedRoutes('Berest'),
]

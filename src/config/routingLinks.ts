export const staticLinks = {
  main: '/',

  // public
  authorization: '/authorization',
  registration: '/registration',

  // private
  settings: '/settings',
  tasks: '/tasks',
  project: '/project/:id',

  notFound: '/*',
}

export const dynamicLinks = {
  project: (id: number) => `/project/${id}`,
}
export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632cd03a062dea00765549f6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j9qbw8kc',
                  apiId: '13104935-382a-49ec-a2a5-be06d628026a'
                },
                {
                  buildHookId: '632cd03bbe8683007ca3b138',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-amg6he94',
                  apiId: '0599e768-16e3-4f4d-92b0-b9e980c503a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/walkeradkins/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-amg6he94.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

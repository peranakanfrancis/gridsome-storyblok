const { resolve } = require('path')

// use it to load the variables into all vue files
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve(__dirname, './src/assets/sass/variables.scss')
      ]
    })
}

module.exports = {
  siteName: 'Affordable holidays - tour planner in Nepal | ShiShu Tours',
  siteDescription: 'From air ticket, visa application to tours, we will make your travel plan unforgetable. Save yourselves the unexpected troubles and expenses when you travel the globe with us.',
  siteUrl: 'https://shishutours.fun',
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'W8IpfstaX74zMKvMnX6z8Qtt' // Your_Access_Token_Here
        },
        version: 'published',
        downloadImages: true,
        imageDirectory: 'assets/images',
        types: {
          story: {
            params: {
              resolve_relations: 'blog-post.next_post'
            }
          }
        }
      }
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}

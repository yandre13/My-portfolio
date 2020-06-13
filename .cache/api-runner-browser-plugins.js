module.exports = [{
      plugin: require('../node_modules/gatsby-styled-components-dark-mode/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Yandre Portfolio","short_name":"Yandre portfolio","start_url":"/","background_color":"#000","theme_color":"#1EC2FF","display":"minimal-ui","icon":"src/images/icon.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"79b375b9f415a48c7a6f4ad68dac8164"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]


- app.vue

...mapGetters(['config']) \
config.title

- home.vue

...mapGetters(['config']) \
config.title \
config.description \
config.per_page \
...mapGetters(['posts']) \
posts[page] \
...mapActions(['setPosts']) \

 
 
- posts.vue

post.id - post.title - post.summary - post.updated - timeFormat

post{
 id
 title
 summary
 updated
}

- post.vue

post{
 id{
  updated
  category{
   id
   name
  }
  title
  author{
   name
   avatar
  }
  content
  tags{
   id
   name
  }
 }
 title
 summary
 updated
 page
}


config{
 title
 description
 pages{
  name
 }
 per_page
 categories[
  {id,name,count}
 ]
 tags[
  {id,name,count}
 ]
 menu
}

categories{
 id{
  post{
   page
  }
 }
}

menu{
 archives:'archives'
 categories:'categories'
 tags:'tags'
 About:'pages/about'
}

archives{
 page{
  id
  title
  updated
 }
}

page{
 name
}
<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-4 mb-4" v-for="blog in blogs">
        <div class="card h-100 text-center">
          <img :src=" 'http://localhost/myBlogSite/public/'+blog.blog_image" class="card-img-top" width="120" height="240"/>
          <div class="card-body">
            <h4 class="card-title">{{ blog.blog_title }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">Position</h6>
            <p class="card-text">{{ blog.blog_short_description }}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="text-success">Details</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

  </div>
</template>

<script>
export default {
  name: 'CategoryBlog',
  data () {
    return {
      blogs: []
    }
  },
  methods: {
    myCategoryBlogs: function () {
      this.$http.get('http://localhost/myBlogSite/public/api/category-blog-by-id/' + this.$route.params.id)
        .then(function (response) {
          this.blogs = response.body
        })
    }
  },
  created () {
    this.myCategoryBlogs()
  }
}
</script>

<style scoped>

</style>

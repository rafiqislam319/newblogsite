<template>
    <div>
        <slider></slider>
        <div class="container">

            <h1 class="my-4 text-center">Welcome to Modern Business</h1>

            <!-- Marketing Icons Section -->
            <div class="row">
                <div class="col-lg-4 mb-4" v-for="blog in blogs">
                    <div class="card h-100">
                        <h4 class="card-header text-center">{{ blog.blog_title}}</h4>
                        <div class="card-body">
                            <img :src=" 'http://localhost/myBlogSite/public/'+blog.blog_image" class="card-img-top" width="120" height="240"/>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Slider from './Slider'
export default {
  name: 'Home',
  components: {
    'slider': Slider
  },
  data () {
    return {
      blogs: []
    }
  },
  methods: {
    allBlogs: function () {
      this.$http.get('http://localhost/myBlogSite/public/api/all-published-blog')
        .then(function (response) {
          this.blogs = response.body
        })
    }
  },
  created () {
    this.allBlogs()
  }
}
</script>

<style scoped>

</style>

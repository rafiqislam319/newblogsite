import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/home/Home'
import About from '../components/about/About'
import Service from '../components/service/Service'
import Contact from '../components/contact/Contact'
import Portfolio1 from '../components/portfolio/Portfolio1'
import Portfolio2 from '../components/portfolio/Portfolio2'
import Portfolio3 from '../components/portfolio/Portfolio3'
import Portfolio4 from '../components/portfolio/Portfolio4'
import PortfolioItem from '../components/portfolio/PortfolioItem'
import BlogOne from '../components/blog/BlogOne'
import BlogTwo from '../components/blog/BlogTwo'
import BlogPost from '../components/blog/BlogPost'
import FullWidthPage from '../components/other-pages/FullWidthPage'
import SidebarPage from '../components/other-pages/SidebarPage'
import Faq from '../components/other-pages/Faq'
import FourOFour from '../components/other-pages/FourOFour'
import PricingTable from '../components/other-pages/PricingTable'
import CategoryBlog from '../components/category/CategoryBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Content
    },
    {
      path: '/about',
      name: 'HelloWorld',
      component: About
    },
    {
      path: '/service',
      name: 'HelloWorld',
      component: Service
    },
    {
      path: '/contact',
      name: 'HelloWorld',
      component: Contact
    },
    {
      path: '/portfolio-one',
      name: 'HelloWorld',
      component: Portfolio1
    },
    {
      path: '/portfolio-two',
      name: 'HelloWorld',
      component: Portfolio2
    },
    {
      path: '/portfolio-three',
      name: 'HelloWorld',
      component: Portfolio3
    },
    {
      path: '/portfolio-four',
      name: 'HelloWorld',
      component: Portfolio4
    },
    {
      path: '/portfolio-item',
      name: 'HelloWorld',
      component: PortfolioItem
    },
    {
      path: '/blog-one',
      name: 'HelloWorld',
      component: BlogOne
    },
    {
      path: '/blog-two',
      name: 'HelloWorld',
      component: BlogTwo
    },
    {
      path: '/blog-post',
      name: 'HelloWorld',
      component: BlogPost
    },
    {
      path: '/full-width-page',
      name: 'HelloWorld',
      component: FullWidthPage
    },
    {
      path: '/sidebar-page',
      name: 'HelloWorld',
      component: SidebarPage
    },
    {
      path: '/faq',
      name: 'HelloWorld',
      component: Faq
    },
    {
      path: '/four-o-four',
      name: 'HelloWorld',
      component: FourOFour
    },
    {
      path: '/pricing-table',
      name: 'HelloWorld',
      component: PricingTable
    },
    {
      path: '/category-blog/:id',
      name: 'HelloWorld',
      component: CategoryBlog
    }
  ],
  mode: 'history'
})

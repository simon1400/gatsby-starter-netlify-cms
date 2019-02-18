/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  description
}) => (
  <main id="main">
  	<section class="section_1" uk-parallax="bgy: -200">
  		<div class="uk-container">
  			<h2 class="accent_head" uk-parallax="y: -100, 100">cafe super</h2>
  			<div class="uk-grid uk-child-width-1-1 uk-child-width-1-2@s">
  				<div>
  					<div class="content_img">
  						<img src="/img/foto1.jpg" alt="" />
  					</div>
  				</div>
  				<div>
  					<div class="content_wrap">
  						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus, dolorum distinctio optio error porro eaque quibusdam voluptatem aspernatur iste repellat deserunt suscipit. Nostrum, ad aperiam, perferendis rerum totam voluptatibus!</p>
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>


  	<section class="section_2" uk-parallax="bgy: -300">
  		<div class="uk-container-expand">
  			<h2 class="accent_head" uk-parallax="y: -100, 100">aromabar</h2>
  			<div class="uk-grid">
  				<div class="uk-width-1-1 uk-width-2-5@s">
  					<div class="content_wrap">
  						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus, dolorum distinctio optio error porro eaque quibusdam voluptatem aspernatur iste repellat deserunt suscipit. Nostrum, ad aperiam, perferendis rerum totam voluptatibus!</p>
  					</div>
  				</div>
  				<div class="uk-width-1-1 uk-width-3-5@s">
  					<div class="content_img">
  						<img class="uk-width-1-1" src="/img/foto1.jpg" alt="" />
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>

  	<section class="section_3" uk-parallax="bgx: -50">
  		<h2 class="accent_head" uk-parallax="y: -100, 100">club party</h2>

  		<div class="uk-container">
  			<div class="uk-grid">
  				<div class="uk-width-1-1 uk-width-2-5@s">
  					<div class="content_img">
  						<img src="/img/foto1.jpg" alt="" />
  					</div>
  				</div>
  				<div class="uk-width-1-1 uk-width-3-5@s">
  					<div class="content_wrap">
  						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus, dolorum distinctio optio error porro eaque quibusdam voluptatem aspernatur iste repellat deserunt suscipit. Nostrum, ad aperiam, perferendis rerum totam voluptatibus!</p>
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>

  	<section class="section_4" uk-parallax="bgx: -50">
  		<h2 class="accent_head" uk-parallax="y: -100, 100">follow us</h2>
  		<div class="uk-container">
  			<div class="uk-grid uk-grid-large uk-child-width-1-1 uk-child-width-1-3@s facebook_ap">
  				<div>
  					<div class="content_img">
  						<img src="/img/foto1.jpg" alt="" />
  					</div>
  					<div class="content_wrap">
  						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus, dolorum distinctio optio error porro eaque quibusdam voluptatem aspernatur iste repellat deserunt suscipit. Nostrum, ad aperiam, perferendis rerum totam voluptatibus!</p>
  					</div>
  				</div>
  				<div>
  					<div class="content_wrap">
  						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus, dolorum distinctio optio error porro eaque quibusdam voluptatem aspernatur iste repellat deserunt suscipit. Nostrum, ad aperiam, perferendis rerum totam voluptatibus!</p>
  					</div>
  					<div class="content_img">
  						<img src="/img/foto1.jpg" alt="" />
  					</div>
  				</div>
  				<div>
  					<div class="content_img">
  						<img src="/img/foto1.jpg" alt="" />
  					</div>
  					<div class="content_wrap">
  						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus, dolorum distinctio optio error porro eaque quibusdam voluptatem aspernatur iste repellat deserunt suscipit. Nostrum, ad aperiam, perferendis rerum totam voluptatibus!</p>
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>
  </main>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        description
      }
    }
  }
`

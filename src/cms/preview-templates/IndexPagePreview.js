import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryFirstArticle = entry.getIn(['data', 'first-article'])
  const FirstArticle = entryFirstArticle ? entryFirstArticle.toJS() : []
  const entrySecondArticle = entry.getIn(['data', 'second-article'])
  const SecondArticle = entrySecondArticle ? entrySecondArticle.toJS() : []

  return (
    <IndexPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      first={{ FirstArticle }}
      second={{ SecondArticle }}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

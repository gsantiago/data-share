'use strict'

var $ = require('jquery')

var medias = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u={url}',
  twitter: 'https://twitter.com/home?status={url}',
  plus: 'https://plus.google.com/share?url={url}',
  linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary{summary}=&source={source}'
}

var defaults = {
  url: window.location.href,
  target: '_blank',
  title: '',
  source: '',
  summary: ''
}

function createSocialLink ($el, media) {
  $el.each(function () {
    var link = $(this)
    var dataOptions = link.data('share-' + media)
    var options = $.extend({}, defaults, dataOptions)
    link.attr('href', getShareUrl(media, options))
    link.attr('target', options.target)
  })
}

function getShareUrl (media, options) {
  var url = medias[media]
  $.each(options, function (item) {
    url = url.replace('{' + item + '}', encodeURIComponent(options[item]) || '')
  })
  return url
}

$.each(medias, function (media, index) {
  createSocialLink($('[data-share-' + media + ']'), media)
})

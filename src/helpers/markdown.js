import MarkdownIt from 'markdown-it'

const markdown = new MarkdownIt({
  linkify: true
})

export default text => {
  if (!text) return text
  return markdown.render(text)
}

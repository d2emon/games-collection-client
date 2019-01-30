import MarkdownIt from 'markdown-it'

const markdown = new MarkdownIt({
  linkify: true
})

export default text => {
  console.log(text)
  if (!text) return text
  return markdown.render(text)
}

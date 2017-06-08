require('simplemde/dist/simplemde.min.css')
const Simplemde = require('simplemde/dist/simplemde.min')

const opt = {
  spellChecker: false,
  status: false,
  autoDownloadFontAwesome: false
}

const createSimplemde = (options) => {
  const conf = Object.assign({}, opt, typeof options === 'object' && options)

  return new Simplemde(conf)
}

export default createSimplemde

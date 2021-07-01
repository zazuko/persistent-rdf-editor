import { local } from 'store2'
import { nanoid } from 'nanoid'

function restoreDocuments() {
  if (!local.has('rdf-documents')) {
    return []
  }

  return local.get('rdf-documents')
}

function saveDocuments(documents) {
  local.set(
    'rdf-documents',
    documents.map(({ value, ...doc }) => doc)
  )
  for (const { id, value } of documents) {
    local.set(`rdf-document#${id}`, value)
  }
}

export class PersistentEditorController {
  constructor(host) {
    this.host = host
    host.addController(this)
  }

  hostConnected() {
    this.currentDocument = 0
    this.documents = restoreDocuments()

    if (this.documents.length === 0) {
      this.newDocument()
    } else {
      this.__restoreContents()
    }
  }

  loadDocument(index) {
    this.currentDocument = index

    this.__restoreContents()

    this.host.requestUpdate()
  }

  newDocument() {
    this.documents.push({
      id: nanoid(),
      title: 'new graph.ttl',
      format: 'text/turtle',
      value: `prefix schema: <http://schema.org>

<> a schema:Person .`,
    })
    this.currentDocument = this.documents.length - 1

    this.host.requestUpdate()

    saveDocuments(this.documents)
  }

  saveContents(id, contents) {
    const document = this.documents.find(doc => doc.id === id)
    document.value = contents
    local.set(`rdf-document#${document.id}`, contents)
  }

  __restoreContents() {
    const document = this.documents[this.currentDocument]
    if (!document.value) {
      document.value = local.get(`rdf-document#${document.id}`)
    }
  }
}

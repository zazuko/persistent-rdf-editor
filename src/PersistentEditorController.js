export class PersistentEditorController {
  constructor(host) {
    this.host = host
    host.addController(this)
  }

  hostConnected() {
    this.currentDocument = 0
    this.documents = [
      {
        title: 'new graph.ttl',
        format: 'text/turtle',
        value: `prefix schema: <http://schema.org>

<> a schema:Person .`,
      },
    ]
  }

  newDocument() {
    this.documents.push({
      title: 'new graph.ttl',
      format: 'text/turtle',
      value: `prefix schema: <http://schema.org>

<> a schema:Person .`,
    })
    this.currentDocument = this.documents.length - 1

    this.host.requestUpdate()
  }
}

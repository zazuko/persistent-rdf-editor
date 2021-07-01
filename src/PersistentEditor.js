import { css, html, LitElement } from 'lit'
import '@lion/tabs/lion-tabs.js'
import '@rdfjs-elements/rdf-editor/rdf-editor.js'
import { PersistentEditorController } from './PersistentEditorController.js'

export class PersistentEditor extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100vh;
      }

      lion-tabs {
        height: 100%;
        display: flex;
        flex-flow: column;
      }

      rdf-editor {
        flex-grow: 1;
        border: solid 1px red;
        // height: calc(100vh - 21px);
      }
    `
  }

  constructor() {
    super()
    this.controller = new PersistentEditorController(this)
  }

  render() {
    return html` <lion-tabs
      .selectedIndex="${this.controller.currentDocument}"
      @selected-changed="${this.__selectedDocumentChanged}"
    >
      ${this.controller.documents.map(
        doc => html`
          <button slot="tab">${doc.title}</button>
          <rdf-editor
            slot="panel"
            auto-parse
            .value="${doc.value}"
            .format="${doc.format}"
            @quads-changed="${e =>
              this.controller.saveContents(doc.id, e.target.value)}"
          ></rdf-editor>
        `
      )}
      <button slot="tab" @click="${() => this.controller.newDocument()}">
        (+)
      </button>
      <div slot="panel"></div>
    </lion-tabs>`
  }

  __selectedDocumentChanged(e) {
    this.controller.loadDocument(e.target.selectedIndex)
  }
}

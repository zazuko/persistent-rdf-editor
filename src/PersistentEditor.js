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
      }

      rdf-editor {
        flex-grow: 1;
        height: calc(100vh - 21px);
      }
    `
  }

  constructor() {
    super()
    this.contorller = new PersistentEditorController(this)
  }

  render() {
    return html` <lion-tabs .selectedIndex="${this.contorller.currentDocument}">
      ${this.contorller.documents.map(
        doc => html`
          <button slot="tab">${doc.title}</button>
          <rdf-editor
            slot="panel"
            .value="${doc.value}"
            .format="${doc.format}"
          ></rdf-editor>
        `
      )}
      <button slot="tab" @click="${() => this.contorller.newDocument()}">
        (+)
      </button>
      <div slot="panel"></div>
    </lion-tabs>`
  }
}

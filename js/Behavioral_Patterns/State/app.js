"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    getState() {
        return this.state;
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    publish() {
        console.log(`The text '${this.item.text}' has been sent to the site`);
        this.item.setState(new PublishDocumentState);
    }
    delete() {
        console.log('The draft has been deleted');
    }
}
class PublishDocumentState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }
    publish() {
        console.log('A publish document cannot be published');
    }
    delete() {
        console.log('A publish document has been deleted. The publish document added to draft');
        this.item.setState(new DraftDocumentItemState);
    }
}
const item = new DocumentItem();
item.text = 'Some text';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());

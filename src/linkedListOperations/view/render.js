import { html, render } from 'htm/preact/standalone.module.js';

function mapLinkedListNodes(node, callback) {
    let map = [];

    function traverseNodes(node) {
        if (node) {
            let computedWork = callback(node);
    
            map.push(computedWork);
        }
    
        if (node.next !== null) {
            return traverseNodes(node.next, callback);
        } 
    }

    traverseNodes(node);

    return map;
}

function Node(node) {
    let isHead = node.data === undefined;
    let doesDataExist = !!node.data;
    let doesNextExist = !!(node.next && node.next.data);
    let data = JSON.stringify(node.data);
    let next = JSON.stringify(node.next && node.next.data);

    return html`
        <div class="${isHead ? 'head' : 'node'}">
            ${isHead && html`<span>Head</span>`}
            ${doesDataExist && html`<span>Data: <pre>${data}</pre></span>`}
            ${doesNextExist && html`<span>next: <pre>${next}</pre></span>`}
        </div>
    `;
}

function Actions(actions) {
    return html`
        <button>click</click>
    `;
}

function View ({ head, actions }) {
    return html`
        <div>
            ${mapLinkedListNodes(head, node => {
                return Node(node);
            })}
        </div>
    `;
} 

function renderLinkedList(props) {
    render(html`<${View} ...${props} />`, document.getElementById('view'));
}

export default {
    renderLinkedList
};

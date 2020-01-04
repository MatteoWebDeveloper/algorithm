import { createLinkedList } from '../linkedListOperations.js';
import render from './render.js';

let nodes = [
    {
        name: 'Node 1'
    },
    {
        name: 'Node 2'
    },
    {
        name: 'Node 3'
    }
];

let linkedList = createLinkedList();

nodes.forEach(node => {
    linkedList.addNode(node);
});

render.renderLinkedList({
    head: linkedList.getHead(),
    actions: {}
});

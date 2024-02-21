"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Candy' },
    { id: 4, name: 'Berry' },
    { id: 5, name: 'Paul' }
];
function getUser(id) {
    return users.find(function (p) { return p.id === id; });
}
var user = getUser(2);
console.log(user);

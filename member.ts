export{Member};
type Member = {id:number, name:string};

const users: Member[] = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'Candy'},
    {id: 4, name: 'Berry'},
    {id: 5, name: 'Paul'}
];

function getUser(id: number): Member | undefined {
    return users.find((p) => p.id === id);
}

const user = getUser(2);
console.log(user);

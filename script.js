const solas = [
    {code: 001, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 12},
    {code: 002, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 13},
    {code: 003, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 14},
    {code: 004, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 15},
    {code: 005, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 16},
    {code: 006, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 17},
    {code: 007, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 18},
    {code: 012, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 19},
    {code: 013, fornecedor: 'Antaris', cor: 'Schuarz', shelf: 20}
    
];

function  findShelf() {
    const code = document.querySelector('#code').value;
    
}

const code = 002;
const shelf = findShelf(code);
console.log(`O produto com codigo ${code} esta na estante ${shelf}.`);
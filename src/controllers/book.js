const books = [
    { id: '1', name: 'Tieng dan tranh', price: 20000 },
    { id: '2', name: 'Chiec thuyen ngoai xa', price: 25000 }
]

function getAllBooks(req, res) {
    res.send(books)
}

function addBook(req, res) {
    res.send(`
        <form method='POST'>
            <button>Fetch User Information</button>
        </form>
    `)
}

function getBookById(req, res) {
    const userId = req.params.id
    res.send({userId})
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook
}
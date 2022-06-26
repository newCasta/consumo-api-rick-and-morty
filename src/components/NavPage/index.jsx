function NavPage({ page, setPage, maxPage }) {
    return (
        <header className="d-flex justify-content-between align-items-center py-4">
            {
                page > 1 ? (
                    <button className="btn btn-primary" onClick={() => setPage(page - 1)}>Prev</button>
                ) : (
                    <button className="btn btn-primary disabled">Prev</button>
                )
            }
            <p>Page {page}</p>
            {
                page < maxPage ? (
                    <button className="btn btn-primary" onClick={() => setPage(page + 1)}>Next</button>
                ) : (
                    <button className="btn btn-primary disabled">Next</button>
                )
            }
        </header>
    )
}
export default NavPage 
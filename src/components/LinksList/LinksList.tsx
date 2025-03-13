import "./LinksList.style.scss"

function LinksList() {
  return (
    <nav className='linkslist'>
        <a className="linkslist__link" href="#" target="_blank" rel="noopener noreferrer">
            Log In
        </a>
        <a className="linkslist__link" href="#" target="_blank" rel="noopener noreferrer">
            About Us
        </a>
        <a className="linkslist__link" href="#" target="_blank" rel="noopener noreferrer">
            Publishers
        </a>
        <a className="linkslist__link" href="#" target="_blank" rel="noopener noreferrer">
            Sitemap
        </a>
    </nav>
  )
}

export default LinksList
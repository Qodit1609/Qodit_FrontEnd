import { Link, withRouter } from "react-router-dom"

export const Navigation = withRouter((props) => {
  const {navBar} = props;
  const { location } = props;
  if (location.pathname.match(/admin/)){
    return null;
  } 
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/'>
          <a className='navbar-brand page-scroll' href='#page-top'>
          Qodit</a>
          </Link>
          {' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        > 
          <ul className='nav navbar-nav navbar-right'>
            {navBar && navBar.map( data => {
            return (<li>
              <a href={`#${data.body}`} className='page-scroll'>
                {data.title}
              </a>
            </li>)}) }
            <li> 
              <Link to="/career" style={{ textDecoration: 'none' }}
              className='page-scroll'>
                Careers
              </Link>
            </li>
                  </ul>
        </div>
      </div>
    </nav>
  )
}
)
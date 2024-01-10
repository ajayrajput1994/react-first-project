import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark ">
    <div className="container-fluid">
      <a href="/" className="navbar-brand">{props.title}</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title : PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: 'default title'
}
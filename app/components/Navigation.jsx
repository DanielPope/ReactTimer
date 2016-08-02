var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
      <div className="top-bar" >
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink className="menu-text" to= "/">React Time App</IndexLink>
              </li>
            <li>
              <Link to= "/timer" activeClassName="active-link">Timer</Link>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created By <a href="http://www.danielpope.info" target="_blank">Dannie</a>
              </li>
            </ul>
        </div>
      </div>
    );
};


module.exports = Navigation;

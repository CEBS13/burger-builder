import React, {Component,Fragment} from 'react';
import classes from './Layout.css';

class Layout extends Component {
  render() {
  return(
    <React.Fragment>
      <div> Toolbar, sidebar, backdrop </div>
      <main className={classes.Content}>
        {this.props.children}
      </main>
      </React.Fragment>
    )
  };
}

export default Layout;

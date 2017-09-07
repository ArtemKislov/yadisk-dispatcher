import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Navigation from 'Components/common/navigation';
import Breadcrumbs from 'Components/common/breadcrumbs';
import Footer from 'Components/common/footer';
import Directory from './elements/directory';
import File from './elements/file';
import './style.scss';

class Main extends Component {
  render() {
    const elements = this.props.elements.map((element, i) => {
      return element.type === 'dir' ?
        <Directory key={i} name={element.name} path={element.path} /> :
        <File
          key={element.name}
          preview={element.preview}
          name={element.name}
          extension={element.name.split('.').pop()}
        />;
    });

    const empty = !elements.length && (<h3>Directory is empty</h3>);

    return (
      <div>
        <Navigation />
        <Grid>
          <Breadcrumbs data={decodeURI(this.props.location.pathname)} />
          <Row className="directory">
            {elements}
            {empty}
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    elements: state.disk.items,
  };
}

Main.defaultProps = {
  elements: [],
  location: {
    pathname: '/',
  },
};

Main.propTypes = {
  elements: PropTypes.array,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(Main);

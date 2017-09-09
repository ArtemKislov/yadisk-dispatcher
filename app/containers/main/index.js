import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.scss';
import Navigation from '../../components/common/navigation';
import Breadcrumbs from '../../components/common/breadcrumbs';
import Directory from './elements/directory';
import File from './elements/file';

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

    return (
      <div>
        <Navigation />
        <Grid>
          <Breadcrumbs data={decodeURI(this.props.location.pathname)} />
          <Row className="directory">
            {elements}
          </Row>
        </Grid>
        <div className="footer">
          Created by Artem Kislov
        </div>
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

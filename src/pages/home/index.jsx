import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button, Heading } from "@chakra-ui/core";
import { Actions } from '../../action';

function Home({ start }) {
  start([]);

  return (
    <div className="home">
      <Heading>
          Visualize Sorting Algorithms...
      </Heading>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link to='merge-sort' style={{ textDecoration: 'none' }}>
            <Button size="md" variantColor="cyan">
              Merge sort
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
   start: (array) => dispatch(Actions.start(array)),
  }
}

export default connect(null, mapDispatchToProps)(Home);


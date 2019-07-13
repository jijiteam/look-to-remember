import React from 'react';
import PropTypes from 'prop-types';
import { Card, resetStory } from 'dynamic-story';

const Fragment = ({ dispatch = [] }) => (
  <>
    <Card
      className="text-center"
      text="End"
      onClick={() => dispatch(resetStory())}
      title="End"
      category="End"
      comment="This is End"
      tags={['end', 'game over']}
    />
  </>
);

Fragment.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Fragment;

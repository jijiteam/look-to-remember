import React from 'react';
import PropTypes from 'prop-types';
import { Card, resetStory } from 'dynamic-story';
import { withTranslation } from 'react-i18next';

const Fragment = ({ dispatch = [], t }) => (
  <>
    <Card
      className="text-center"
      text={t('fragment:End')}
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
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fragment'])(Fragment);

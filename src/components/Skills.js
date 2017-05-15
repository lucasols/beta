import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  };
};

class Skills extends React.Component {
  render () {
    const { skills } = this.props;

    return (
      <div className="my-skills" data-anim="3">
        <h2>Competências</h2>
        {skills.map((skill, index) =>
          <div className="tag" key={index}>{skill}</div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Skills);

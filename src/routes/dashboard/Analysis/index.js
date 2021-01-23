import { connect } from 'dva'
import './index.css';

function Analysis(props) {
  console.log('props', props);
  return (
    <div className="App">
      Analysis
    </div>
  );
}

export default connect(state => {
  return state.dashboard;
})(Analysis);

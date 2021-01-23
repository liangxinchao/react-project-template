import { connect } from 'dva'
import './index.css';

function Monitor(props) {
  return (
    <div className="App">
      monitor
    </div>
  );
}

export default connect(state => {
  return state.dashboard;
})(Monitor);

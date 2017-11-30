import React from 'react'
import { connect } from 'react-redux'


const incrementAction = {
  type: 'INCREMENT'
}

const App = (props) => (
  <h1 onClick={props.doIncrement}>Hola Santiago {props.count}</h1>
)


function mapStateToProps(state) {
  return {
    count: state.demo.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doIncrement: () => { dispatch(incrementAction) }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


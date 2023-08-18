import React, { PureComponent } from 'react'
import {Provider} from "react-redux"
import { ContinentsContainer } from "./component/components/index"
import store from './store/store'
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ContinentsContainer />
      </Provider>
    )
  }
}

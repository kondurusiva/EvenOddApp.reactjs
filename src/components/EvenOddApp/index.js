// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="bg-container">
          <h1>Count {count}</h1>
          <p className="description1">Count is {text}</p>
          <div>
            <button onClick={this.onIncrement} className="button" type="button">
              Increment
            </button>
            <p className="description2">
              Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

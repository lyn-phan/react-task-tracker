
import Header from './components/Header'


const App = () => {
  return (
    <div className="container">
      <Header title={1} />
    </div>
  )
}


// If you want to use a class, you can with the following:
// class App extends React.Component {
//   render() {
//     return <h1> Hello from a class! </h1>
//   }
// }

export default App

import DefaultRouter from './routers/DefaultRouter'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

const RootApp = () => {
  return (
    <Router>
      <ErrorBoundary>
        <DefaultRouter />
      </ErrorBoundary>
    </Router>
  )
}

export default RootApp

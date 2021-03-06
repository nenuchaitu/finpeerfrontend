import './index.css'

const FailureView = props => {
  const {getUserData} = props

  const onClickRetry = () => {
    getUserData()
  }

  return (
    <>
      <div className="error-view-container">
        <img
          className="failure-image"
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="data fetch failure"
        />
        <button className="retry-button" type="button" onClick={onClickRetry}>
          Retry
        </button>
      </div>
    </>
  )
}
export default FailureView

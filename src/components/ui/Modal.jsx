import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

const Modal = ({ children, renderButton }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {renderButton({ onClick: () => setShow(true) })}
      {show && (
        <div className="fixed top-0 right-0 w-full h-full bg-black-100 bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col justify-between bg-white-100 p-8 rounded min-h-[400px] min-w-[720px]">
            <div>{children}</div>
            <div className="text-end my-3">
              <Button variant="primary" onClick={() => setShow(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  renderButton: PropTypes.func
}
export default Modal

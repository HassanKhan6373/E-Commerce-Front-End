import React from 'react'

function CartNotification() {
    
  return (
    <div>
      <div>
      {isNavbarVisible && (
        <div className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg">
          <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
            <div className="text-gray-400">Successfully added.</div>
            <a className="flex items-center space-x-1">
              <div>View Cart</div>
              <div>
                <AiOutlineShoppingCart />
              </div>
            </a>
          </div>
          <div className="flex items-center">
            <div>
              <img
                className="h-24 w-20 mx-6 object-cover object-center"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
            </div>
            <div className="flex flex-col space-y-2 items-start">
              <p className="text-xs font-bold">HP LP3065</p>
              <p className="text-xs text-gray-400">Size: L</p>
              <p className="text-sm">$ 100</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default CartNotification

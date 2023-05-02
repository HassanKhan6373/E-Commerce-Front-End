import { React, useState } from 'react'
import { useSelector } from "react-redux";


function DiscountCode() {

  const state = useSelector((state) => state.handleCart);
  console.log(state);

  let subtotal = 0;
  let totalCards = 0;



  state.map((item) => {
    return (subtotal += item.price * item.qty);
  });

  state.map((item) => {
    return (totalCards += item.qty);
  });

  const [text, setText] = useState('');
  const isButtonActive = text.trim().length > 0;

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleButtonClick() {
    // Do something when the button is clicked
  }


  //tax rate is 13%
  const [taxRate, setTaxRate] = useState(0.13);
  const transactionAmount = subtotal

  function calculateTax() {
    return (transactionAmount * taxRate).toFixed(2);
  }


  const total = (parseFloat(subtotal) + parseFloat(calculateTax()))


  return (
    <div className=' h-full w-full'>
      <div className='w-9/12 mt-12 flex flex-col'>
        {state.map((Item) => (
          <div key={Item.key} className='ml-8 flex w-full justify-between'>
            <div className=' flex flex-row mt-4  space-x-4 '>
              <div className='bg-white pl-2 pr-2 w-1/6 border relative rounded-xl'>
                <img src={Item.image} alt="" className="h-full" />
                <div className='absolute -top-2 text-sm right-0  bg-neutral-600 text-white rounded-full h-5 w-5 text-center'>{Item.qty}</div>
              </div>


              <div className=' -space-y-5 '>
                <p className=' mt-2 text-sm font-semibold'>{Item.name}</p> <br></br>
                <p className=' mb-15 text-xs text-gray-500'> Black / S</p>
              </div>
            </div>

            <p className='text-sm  font-semibold mt-9 '>${Item.price*Item.qty}</p>

          </div>
        ))}
        
          <hr className=' ml-8 border border-stone-200 w-full mt-5 '></hr>
        

        <div className='ml-8 flex items-center  mt-2 w-full'>
          <div className="relative pr-3 w-full ">
            <input type="text" value={text} onChange={handleInputChange} className="block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder='Discount Code' />
            {text ? (
              <label
                className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-500 ease-in-out"
              >
                Discount code
              </label>
            ) : null}
          </div>
          <button type="button" onClick={handleButtonClick} className={`bg-stone-400 text-white h-12 mt-3 rounded-md  px-4 w-2/11 ${isButtonActive ? 'hover:bg-sky-700 bg-sky-700 cursor-pointer' : 'opacity-50'}`} disabled={!isButtonActive}>
            Apply
          </button>
        </div>
        <hr className='ml-8 border border-stone-200 w-full mt-5 '></hr>

        <div className=' ml-8 mt-4  flex justify-between w-full'>
          <p className='text-sm'> Subtotal</p>
          <p className=' pl-6 mt-1 text-sm font-semibold'>${Math.round(subtotal)}</p>
        </div>
        <div className='ml-8 mt-2 flex justify-between w-full'>
          <p className='text-sm'> Shipping</p>
          <p className='text-xs mt-1 text-gray-500'>Calculated at next step </p>
        </div>
        <div className='ml-8 mt-2 flex justify-between w-full'>
          <p className='text-sm'>Estimated taxes</p>
          <p className='text-sm mt-1 font-semibold'>{`$${calculateTax()}`}</p>
        </div>
        <hr className=' ml-8 border border-stone-200 w-full mt-6 '></hr>
        <div className='flex justify-between w-full ml-8'>
          <p className='mt-6 font-semibold'> Total</p>
          <div className=' flex flex-row space-x-1'>
            <p className=' mt-8 mr-2 text-sm'> USD</p>
            <p className=' mt-5  text-2xl font-semibold'>${Math.round(total)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountCode
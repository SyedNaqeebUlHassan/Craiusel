import React,{useState} from 'react';

function InputData() {
    const [addItem,SetAddItem]=useState([0]);
    const [customerName,SetCustomerName]=useState('');
    const [phoneNumber,SetPhoneNumber] =useState('');
    const [itemName,SetItemName]=useState('');
    const [quantity,SetQuantity]=useState();
    const [itemPrice,SetItemPrice]=useState();
    const [total,SetTotal]=useState('00');
    const [grandTotal,SetGrandTotal]=useState('00');

    const hanldeAddItem=()=>{
        SetAddItem((prevState)=>{
            return [...prevState,0]
        });
    };
    const handleInputData=()=>{
            console.log(customerName,phoneNumber,itemName,quantity,itemPrice);
            SetTotal(()=>{
                const totalPrice=quantity*itemPrice;
                return totalPrice;
            });
            SetGrandTotal(()=>{
                const grandTotall=total+total;
                return grandTotall;
            })
            SetCustomerName('');
            SetPhoneNumber('');
            SetItemName('');
            SetQuantity('');
            SetItemPrice('');
    };
  return (
    
<div className='flex justfiy-center items-center flex-col space-y-6'>
    <div className="flex justify-around items-center  mt-12 space-x-6">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Name</label>
            <input value={customerName} onChange={(e)=>SetCustomerName(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Phone Number</label>
            <input value={phoneNumber} onChange={(e)=>SetPhoneNumber(e.target.value)}  type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" />
        </div>    
    </div> 
    <div className='add-items flex justify-center items-center flex-col space-y-6'>
            {addItem.map((item)=>(
                <div className='flex justify-center items-center space-x-6'>
                    <div>
                        <label for="item-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Item Name</label>
                        <input value={itemName} onChange={(e)=>SetItemName(e.target.value)}  type="text" id="item-name" className="bg-gray-50 border border-gray-300 text-gray-900 w-[400px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cloths" require/>
                    </div>
                    <div>
                        <label for="item-price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Item Price</label>
                        <input value={itemPrice} onChange={(e)=>SetItemPrice(e.target.value)}  type="number" id="item-price" className="bg-gray-50 border border-gray-300 text-gray-900 w-[150px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0"  require/>
                    </div>
                    <div>
                        <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Quantity</label>
                        <input value={quantity} onChange={(e)=>SetQuantity(e.target.value)}  type="number" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 w-[150px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0"  require/>
                    </div>                 
                    <div>
                        <label for="total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total </label>
                        <p className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>{total}</p>
                    </div>
                </div>
            ))}
        </div>
         <button onClick={()=>hanldeAddItem()} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Items</button>
        <div>
            <label for="g-total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grand Total </label>
            <p className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>{grandTotal}</p>
        </div>
        <div className='space-x-6'>
            <button  onClick={()=>handleInputData()} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Items</button>
            <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate Recipt</button>
        </div>
</div>

  )
};

export default InputData;
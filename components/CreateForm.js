export default function CreateForm(props){
    return (
        <form onSubmit={props.cookeHandler} className='flex-col justify-center bg-green-300 w-10/12 mx-auto p-2 rounded-md'>
        <h1 className="text-center my-4 text-4xl font-bold ">
          Create Cookie Stand        </h1>
        {/* Location */}
          <div className="texter-center">
            <label className="texter-center">Location </label>
            <input name="loc" className="flex-auto by-gray-100 w-10/12" placeholder="set your location?"/>
            </div>
            {/* min custome */}
            <div className="flex w-3.2/4 mx-auto my-5 justify-around">
              <div className="flex-col w-1/4">
                <h2> Minimum Customers per Hour </h2>
                <input type="number" name="min" className="" placeholder="inter min customers?"/>
                </div>
              
                <div className=" flex-col w-1/4">
                <h2> Maximum Customers per Hour  </h2>
                <input type="number" name="max" className="" placeholder="inter max customers?"/>
                </div>

                <div className=" flex-col w-1/4">
                <h2> Average Cookies per Sale </h2>
                <input type="number" name="avg" className="" placeholder="inter avg customers?"/>
                </div>
                <button className="w-1/6 bg-green-500" >Create</button>
                </div>
                </form>
    )
  }
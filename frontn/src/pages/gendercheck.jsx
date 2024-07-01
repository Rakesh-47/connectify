import React from "react";


const Gendercheck=({onCheckboxChange,selectgen})=>{
  return(
    <div className="flex">
        <div className="form.control">
            <label className={`label gap-2 cursor-pointer ${selectgen==="Male"?"selected":""}`}>
                <span className="label-text text-black text-[15px]">Male </span>
                <input type="checkbox"  className="checkbox border-slate-500"
                 checked={selectgen==="Male"} onChange={()=>onCheckboxChange("Male")}
                />
            </label>
            
        </div>
        <div className="form.control">
            <label className={`label gap-2 cursor-pointer ${selectgen==="Female"?"selected":""}`}>
                <span className="label-text text-black text-[15px]">Female</span>
                <input type="checkbox"  className="checkbox border-slate-500" 
                checked={selectgen==="Female"} onChange={()=>onCheckboxChange("Female")}
                />
            </label>
            
        </div>
    </div>
  )
}

export default Gendercheck
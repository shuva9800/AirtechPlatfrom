import React, { useEffect, useState } from "react";

export default function RequirementFild({
  name,
  label,
  register,
  errors,
  setValue,
  getValues,
}) {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  useEffect(() => {
    register(name, { required: true, validate: (value) => value.length > 0 });
  }, []);

  useEffect(() => {
    setValue(name, requirementList);
  }, [requirementList]);

  const handelAddRequirement = () => {
    if (requirement) {
      setRequirementList([...requirementList, requirement]);
      setRequirement("");
    }
  };
  const handelRemoveRequirement = (index) => {
    const updatedRequirementList = [...requirementList];
    updatedRequirementList.splice(index, 1);
    setRequirementList(updatedRequirementList);
  };
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm text-richblack-5">
        {label}
        <sup className="text-pink-200"> *</sup>
      </label>
      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="w-full form-style"
        />
        <button
          type="button"
          onClick={handelAddRequirement}
          className="font-semibold text-yellow-50"
        >
          Add
        </button>
      </div>
      {requirementList.length > 0 && (
        <ul>
          {requirementList.map((item, index) => (
            <li key={index} className="flex text-richblack-5 gap-3 items-center">
              <span>{item}</span>
              <button
                type="button"
                className="ml-2 text-xs text-pure-greys-300 "
                onClick={() => handelRemoveRequirement(index)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && <span className="ml-2 text-xs tracking-wide text-pink-200">{label} is required</span>}
    </div>
  );
}

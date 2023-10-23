import React from 'react'

const FilterItems = () => {
  return (
    <div>
        <div className="flex items-center justify-between pt-4">
            <h6
              onClick={toggleDepartment}
              className="font-semibold text-2xl cursor-pointer"
            >
              Department
            </h6>
            <span className="block cursor-pointer">
              {isDepartmentOpen ? (
                <Minus onClick={toggleDepartment} className="h-6 w-6" />
              ) : (
                <Plus onClick={toggleDepartment} className="h-6 w-6" />
              )}
            </span>
          </div>
          {isDepartmentOpen &&
            Data.Department.map((item, index) => (
              <div key={index}>
                <label>
                  <input type="checkbox" className="mr-2 ml-6" />
                  {item}
                </label>
              </div>
            ))}
    </div>
  )
}

export default FilterItems
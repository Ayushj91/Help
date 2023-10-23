import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

function FilterProvider({children}) {
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
    const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isExperienceLevelOpen, setIsExperienceLevelOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedExperienceLevel, setSelectedExperienceLevel] = useState([]);

    const toggleJobType = () => {
        setIsJobTypeOpen(!isJobTypeOpen);
    };
    const toggleLocation = () => {
        setIsLocationOpen(!isLocationOpen);
    };
    const toggleExperienceLevel = () => {
        setIsExperienceLevelOpen(!isExperienceLevelOpen);
    };

    const toggleDepartment = () => {
        setIsDepartmentOpen(!isDepartmentOpen);
    };

    const toggleSort = () => {
        setIsSortOpen(!isSortOpen);
    };

    const handleJobType = (e) => {
        setSelectedJobType((prevSelectedJobType) => {
        if (e.target.checked) {
            return [...prevSelectedJobType, e.target.value];
        } else {
            return prevSelectedJobType.filter((item) => item !== e.target.value);
        }
        });
    };
    
    const handleDepartment = (e) => {
        setSelectedDepartment((prevSelectedDepartment) => {
        if (e.target.checked) {
            return [...prevSelectedDepartment, e.target.value];
        } else {
            return prevSelectedDepartment.filter((item) => item !== e.target.value);
        }
        });
    }

    const handleLocation = (e) => {
        setSelectedLocation((prevSelectedLocation) => {
            if (e.target.checked) {
            return [...prevSelectedLocation, e.target.value];
            } else {
            return prevSelectedLocation.filter((item) => item !== e.target.value);
            }
        });
    }

    const handleExperienceLevel = (e) => {
        setSelectedExperienceLevel((prevSelectedExperienceLevel) => {
            if (e.target.checked) {
            return [...prevSelectedExperienceLevel, e.target.value];
            } else {
            return prevSelectedExperienceLevel.filter((item) => item !== e.target.value);
            }
        });
    }

    useEffect(() => {
        console.log(selectedJobType);
        console.log(selectedDepartment);
        console.log(selectedLocation);
        console.log(selectedExperienceLevel);
    }, [selectedJobType, selectedDepartment, selectedLocation, selectedExperienceLevel]);

    return <FilterContext.Provider
    value={{}}>
        {children}
    </FilterContext.Provider>
}

export default FilterProvider;
import { useState } from "react";
export default useInput => {
    const [value, setValue] = useState(useInput);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
};
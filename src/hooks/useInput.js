import { useState, useCallback } from "react";

const useInputs = (initialForm) => {
  let initValue = initialForm;
  const [form, setForm] = useState(initValue);
  // change
  const onChange = useCallback((e) => {
    if (e?.target) {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      const { name, value } = e;
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }, []);
  // reset
  const reset = useCallback(() => setForm(initValue), [initValue]);
      
  
  // changeInitialValue
  const changeInitial = (changeValue) => {
    initValue = changeValue;
    setForm(initValue);
  };
  return [form, onChange, reset, changeInitial];
};
export default useInputs;

import { useState, useCallback } from "react";

const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);
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
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}
export default useInputs;

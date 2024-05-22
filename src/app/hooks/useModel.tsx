import { useState } from 'react';

const useModel = (): [boolean, () => boolean] => {
    const [model, setModel] = useState(false);
    const toggleModel = () =>{ setModel(prev => !prev)
        return !model
    };
    return [model, toggleModel];
};

export default useModel;
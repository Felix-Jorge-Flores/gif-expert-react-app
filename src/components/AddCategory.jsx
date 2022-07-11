import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log(event.target.value);
        return setInputvalue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputvalue.trim().length <= 1) return;
        onNewCategory(inputvalue.trim().toLowerCase());
        setInputvalue('');
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Bucar gifs"
                value={inputvalue}
                onChange={onInputChange}
            />
        </form>

    )
}


import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

// api = OjzD2jPePQs2ZISLzfIiNsrYPuoapx9O
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Detective Conan']);

    const onAddCategory = (newCategory) => {
        //categories.push('Doctor Stone');
        if(categories.includes(newCategory))return;
        setCategories([newCategory, ...categories ]);
        //setCategories([...categories]);

    }
    //onAddCategory();
    console.log(categories);
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={category=> onAddCategory(category)}
            />

            {/* Listado de Gifs */}
            {/* <button onClick={onAddCategory} >Agregar</button> */}
            
                {
                categories.map(category =>(
                     <GifGrid key={category} category={category}/>
                ))
                }
                {/* <li></li> */}
            



        </>

    )
}

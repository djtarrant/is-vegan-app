import React from 'react';
import '../index.css';
import CategoryEdit from './CategoryEdit';
import CategoryDelete from './CategoryDelete';

const CategoryRow = (props) => {
    const {category, refreshList, url} = props;
    const { id, name } = category;
    

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <CategoryEdit category={category} url={url} refreshList={refreshList} />
                <CategoryDelete category={category} url={url} refreshList={refreshList} />
            </td>
        </tr>
    )
}

export default CategoryRow;
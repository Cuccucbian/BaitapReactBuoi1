import React from 'react'
import Item from './Item'

export default function List_item() {
    return (
        
        <div className="my-4">
            <div className="container px-lg-5 flex text-center gap-5">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>

    )
}

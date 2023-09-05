import React, { FC } from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

type PropsType = {
    id: string
    title: string
}

const Item: FC<PropsType> = (props: PropsType) => {
    const { id, title } = props

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        border: '1px solid #ccc',
        margin: '10px 0',
        background: '#f1f1f1'
      };
    
    

    return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        Item {title}
    </div>
}

export default Item

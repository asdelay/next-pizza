import React, {FC} from 'react'

interface Props {
    className?: string
}

export const Filters: FC<Props> = ({className}) => {
return (
    <div className={className}></div>
)
}
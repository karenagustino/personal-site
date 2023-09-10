import type { FC } from "react";

export type MyComponentProps = {
    myName: string
}

const MyComponent: FC<MyComponentProps> = ({ myName }) => {
    return (
        <div style={{ backgroundColor: 'pink', padding: 20 }}>
            <p>{myName}</p>
        </div>
    )
}

export default MyComponent
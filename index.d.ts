declare module 'my-design-system-ohaeun' {
    import * as React from 'react'

    interface NewButtonProps {
        label: string;
        onClick: () => void;
    }

    export const NewButton: React.FC<NewButtonProps>;
}

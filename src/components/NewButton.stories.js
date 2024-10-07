// src/components/Button.stories.js
import React from 'react';
import NewButton from "./NewButton";

export default {
    title: 'NewButton',
    component: NewButton,
};

export const Primary = () => <NewButton label="Click Me" onClick={() => alert('Clicked!')} />;

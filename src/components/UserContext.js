import React, { createContext, useState } from 'react';

const UserContext = createContext({
    loggedinUser: 'Prashant',
});

export default UserContext;
import { createContext, useState } from "react";


const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
})

export function UserProgressContextProvider ( ){
    const [userProgress, setUserProgress] = useState('');
    return <UserProgressContext.Provider>{children}</UserProgressContext.Provider>
}

export default UserProgressContext;
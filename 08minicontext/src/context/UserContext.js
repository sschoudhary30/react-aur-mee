import React from "react";

const UserContext = React.createContext();

export default UserContext;

// this userContect will become provider when some component get inside it.
// provider is jsx
/**
 * <userContext>
 * <Card />
 * <login/>
 *
 * </userContext>
 */

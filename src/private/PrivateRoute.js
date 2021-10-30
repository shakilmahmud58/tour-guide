import { Redirect, Route } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function PrivateRoute({ children, ...rest }) {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <div>Loading.....</div>
        )
    }
    return (
      <Route
        {...rest}
        render={({location})=>
            user ? ( 
                children 
                ) 
                :
                (
                    <Redirect
                    to={{
                        pathname:'/login',
                        state: { from: location }
                    }}
                    />
                )
        }
      />
    );
  }
export default PrivateRoute;
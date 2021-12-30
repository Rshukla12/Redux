import { requestSignUp } from "../Auth/actions"

const onSignUp = ( data ) => ( dispatch ) => {
    dispatch( requestSignUp() );
    fetch( "" )
}
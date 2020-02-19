// INI HANYALAH SAMPLE

const logged  = localStorage.getItem('token');
const initialState = {
    isLogin: logged ? true : false,
    isMember:'belum member dan ini dari state',
}


const reducer  = (state = initialState , action) => {
    switch (action.type) {
        case 'IS_MEMBER':
            return{
                ...state,
                isLogin:true
            }
    s
        default:
            return state;
    }
}


export default reducer ;
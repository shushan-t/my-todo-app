
const initialState = [
     {
        id: Math.random(),
        text: 'learn js',
        isCompleted: false
  
      },
      {
        id: Math.random(),
        text: 'learn React',
        isCompleted: false
  
      },
      {
        id: Math.random(),
        text: 'learn Css',
        isCompleted: false
  
      },
]

export default function reducer (state = initialState, action) {
    switch( action.type ){
        case "ADD_TODO":
            return [
                 {
                    text: action.payload,
                    id:Math.random(),
                    isCompleted:false,
                  } ,
                ...state,
                              
            ];
        case "TOGGLE_TODO":
            return state.map(item => item.id === action.payload? 
                            {...item, isCompleted: !item.isCompleted}: item );
        case "REMOVE_TODO":
            return state.filter(item => item.id !== action.payload );
            
        case "REMOVE_COMPLETED":
            return state.filter(item => !item.isCompleted );
         
        default:
            return state;
    }

}
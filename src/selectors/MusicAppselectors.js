function ListSelector(state)
{
return state.Data;
}

function ErrorSelector(state)
{
    return state.error;
}

function SingerSelector(state)
{
    return state.Singer;
}
function ItemDetailsSelector(state) 
{
        return state.ListItemDetails;
}


export  {ListSelector,ErrorSelector,ItemDetailsSelector,SingerSelector};       








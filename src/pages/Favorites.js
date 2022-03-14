import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupLists from '../components/meetups/MeetupLists';

function Favorites (){
  const favoritesCtx = useContext(FavoritesContext)
  
  let content;
  if(favoritesCtx.totalFavorites === 0){
    content = <p> You got no favorites yet. Start adding some ?</p>
  } else {
    content = <MeetupLists meetups={favoritesCtx.favorites}/>  
  }
  return (
    <section>
      <h1> My Favorites </h1>
      {content}
    </section>
  )
}

export default Favorites;
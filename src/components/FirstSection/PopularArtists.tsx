import { IArtist, ITag } from "../../Interfaces/Interfaces";
import { ArtistProfile } from "./ArtistProfile";

export const PopularArtists = ({artistsList, tagList}: {artistsList: IArtist[], tagList: ITag[][]}) => {
    return (
          <div className="artists">
            {artistsList.map((artist, index) =>            
              <ArtistProfile artist={artist} tags={tagList[index]} key={index}/>
            )}
          </div>
    );
};
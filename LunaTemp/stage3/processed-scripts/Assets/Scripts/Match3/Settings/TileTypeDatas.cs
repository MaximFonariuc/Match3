using System.Collections.Generic;
using UnityEngine;

namespace Match3
{
    public sealed class TileTypeDatas : MonoBehaviour
    {
        public List<TileTypeData> TileDatas;
        
        public Sprite GetSpriteForTileType(ETileType tileType)
        {
            foreach (var tileData in TileDatas)
            {
                if (tileData.TileType == tileType)
                {
                    return tileData.Sprite;
                }
            }
            
            return null;
        }
    }
}
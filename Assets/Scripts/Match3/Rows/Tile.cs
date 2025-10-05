using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Match3
{
    public sealed class Tile : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
    {
        private TileTypeData _tileType;

        public int X;
        public int Y;
        public Image Icon;

        private Board _board;
        private Vector2 _startPos;
        private bool _swipeTriggered;

        public TileTypeData TileType
        {
            get => _tileType;
            set
            {
                if (_tileType == value)
                    return;

                _tileType = value;
                Icon.sprite = _tileType.Sprite;
            }
        }

        public TileData Data => new TileData(X, Y, _tileType.TileType);

        public void Init(Board board)
        {
            _board = board;
        }

        public void OnBeginDrag(PointerEventData eventData)
        {
            _startPos = eventData.position;
            _swipeTriggered = false;
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (_swipeTriggered)
                return;

            Vector2 delta = eventData.position - _startPos;
            if (delta.magnitude < 40f)
                return;

            Vector2 dir = delta.normalized;
            int dx = 0, dy = 0;

            if (Mathf.Abs(dir.x) > Mathf.Abs(dir.y))
                dx = dir.x > 0 ? 1 : -1;
            else
                dy = dir.y > 0 ? -1 : 1;

            _swipeTriggered = true;
            _board.TrySwipe(this, dx, dy);
        }

        public void OnEndDrag(PointerEventData eventData) { }
    }
}
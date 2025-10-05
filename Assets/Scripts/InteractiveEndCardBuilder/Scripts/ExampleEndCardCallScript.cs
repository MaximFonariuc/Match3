using System.Collections;
using UnityEngine;

namespace InteractiveEndCardBuilder.Scripts
{
    public class ExampleEndCardCallScript : MonoBehaviour
    {
        void Start()
        {
            StartCoroutine(OpenEndCard());
        }
    
        IEnumerator OpenEndCard()
        {
            yield return new WaitForSeconds(1);
            EndCardController.Instance.OpenEndCard(); //Call this line anywhere to open the end card and start the animations.
        }
    }
}

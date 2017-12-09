#pragma strict

var cube :GameObject;
function Start () {
//    cube = GameObject.Find("Cube");
}

function Update () {
//	cube.transform.Rotate(0, 100 * Time.deltaTime, 0);
	if(Input.touchCount == 1){
		

	}
}

function clickUI() {
	Debug.Log("押された");
}
 
function dragUI() {
	transform.position = Input.mousePosition;
}
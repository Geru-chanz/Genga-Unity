#pragma strict

class GameManager extends MonoBehaviour {

	var block : GameObject;
	function Start(){
		block = GameObject.FindWithTag("Block");
//		BlockSelect();
	}

	function BlockSelect(){
		block.GetComponent.<Block>().ReverseSelectFlg();
	}
}

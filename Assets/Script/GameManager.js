#pragma strict

class GameManager extends MonoBehaviour {


	var nowBlock : GameObject;
	var nowID : int;
	private var blockChildList = new System.Collections.Generic.List.<GameObject>();

	function Start(){
		for (var child : Transform in transform) {
 			blockChildList.Add(child.gameObject);
    	}
    	nowID = 0;
 	}

	function BlockSelect(){
		blockChildList[nowID].GetComponent.<Block>().ReverseSelectFlg();
	}

	function SwitchNextButton(){
		nowID++;
		if(nowID >54){
			nowID =54;
		}else{
		 	blockChildList[nowID-1].GetComponent.<Block>().ChangeMaterialBefore();
		 	blockChildList[nowID].GetComponent.<Block>().ChangeMaterialNew();
		 }
	}

	function SwitchBackButton(){
		nowID--;
		if(nowID <0){
			nowID =0;
		}else{
			blockChildList[nowID+1].GetComponent.<Block>().ChangeMaterialBefore();
			blockChildList[nowID].GetComponent.<Block>().ChangeMaterialNew();
		}

	}


}

#pragma strict

class Block extends MonoBehaviour {
	var ID : int;
	var speed : float;
	var directionX : int;
	var directionZ : int;
	var is_selected : boolean;

	function Start () {
		speed = 0.1f;
		is_selected = false;
		if(ID%6 > 3 || ID%6 ==0){
			directionX = 1;
			directionZ = 0;
		}else{
			directionX = 0;
			directionZ = 1;
		}
	}

	function Update () {
		if(is_selected == true){
			TransferConstantly();
			//	RotateByGyro(10, 0, -10);
		}
	}

	function TransferConstantly(){
		
		this.transform.position += new Vector3(speed * directionX, 0, speed * directionZ);
	}

	function RotateByGyro(x,y,z){
		this.transform.rotation = Quaternion.Euler(x, y, z);
	}

	function ReverseSelectFlg(){
		this.is_selected = !(this.is_selected);
//		Debug.Log(this.is_selected + ":aaaa");

	}

	function SetID(id){
		this.ID = id;
	}

	function GetID(){
		return this.ID;
	}

}

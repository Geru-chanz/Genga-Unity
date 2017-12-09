#pragma strict

class Block extends MonoBehaviour {
	var ID : int;
	var speed : float;
	var directionX : int;
	var directionZ : int;
	var is_selected : boolean;
	var tmpTime : float;

	function Start () {
		speed = 0.1f;
		tmpTime = 0.0f;
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
		tmpTime += Time.deltaTime;
		if(is_selected == true){
			TransferConstantly();
		}
	}

	function TransferConstantly(){
		transferAnimation();
		RotateByGyro(Random.Range(-1f,1f), Random.Range(89f,91f), Random.Range(-1f,1f));
	}

	function RotateByGyro(rx,ry,rz){
		this.transform.rotation = Quaternion.Euler(rx, ry, rz);
	}

	function ReverseSelectFlg(){
		tmpTime = 0.0f;
		this.is_selected = !(this.is_selected);
	}

	function SetID(id){
		this.ID = id;
	}

	function GetID(){
		return this.ID;
	}

	function transferAnimation(){
		if(tmpTime < 2.0f){
			speed = 0.005f;
		}else if(tmpTime >= 2.0f && tmpTime < 2.5f){
			speed += 0.012f;
		}else if(tmpTime >= 2.5f && tmpTime < 3.0f){
			speed -= 0.01f;
		}else if(tmpTime > 4.0f){
			Destroy(this.gameObject);
		}
		this.transform.position += new Vector3(speed * directionX, 0, speed * directionZ);
	}

}

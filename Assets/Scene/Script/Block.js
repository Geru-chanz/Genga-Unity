#pragma strict

class Block extends MonoBehaviour {
	static private var hensu_a : int;	//他のクラスから直接アクセス不可
	var myBlock :GameObject;
	var speed : float;


	function Start () {
		Debug.Log("sajkdflksjfk");
		speed = 0.1f;
		myBlock = GameObject.Find("");
	}

	function Update () {
		
	}

	function TransferConstantly(){

	//	myBlock.transform.position += speed * Time.deltaTime;
	}


	//変数読み込みメソッド
	static public function getMesodo() : int {
		return hensu_a;
	}

	//変数書き込みメソッド
	static public function putMesodo(work:int) {
		hensu_a = work;
	}
}
